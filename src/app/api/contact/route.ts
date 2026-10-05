import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { checkRateLimit, hashClientIp } from '@/lib/rate-limit';
import { sanitizeText, isHoneypotTriggered } from '@/lib/sanitize';
import { recordAuditLog, recordSecurityEvent } from '@/lib/audit';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(70),
  email: z.string().email().max(100),
  organization: z.string().max(100).optional().nullable(),
  interest: z.string().max(50),
  message: z.string().min(10).max(2000),
  website_trap_field: z.string().optional().nullable(),
});

export async function POST(req: NextRequest) {
  const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
  const ipHash = hashClientIp(clientIp);

  // 1. Rate Limiting: max 5 requests per 10 minutes
  const rateLimit = checkRateLimit(`contact:${ipHash}`, 5, 10 * 60 * 1000);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: `Submission rate limit exceeded. Please wait ${rateLimit.resetSeconds} seconds before sending another inquiry.`,
      },
      { status: 429 }
    );
  }

  // 2. Parse & Validate Payload
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
  }

  // 3. Honeypot Anti-Bot Filter
  if (isHoneypotTriggered(body.website_trap_field)) {
    // Record security event for bot activity telemetry
    await recordSecurityEvent({
      eventType: 'HONEYPOT_HIT',
      severity: 'INFO',
      description: `Bot trapped via hidden contact form honeypot from IP hash ${ipHash}. Payload silently discarded.`,
      clientIpHash: ipHash,
    });

    // Return fake success to deceive scrapers and bots
    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Thank you.',
    });
  }

  const parseResult = contactSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      {
        error: 'Validation failed. Please ensure all required fields are correctly completed.',
        details: parseResult.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, organization, interest, message } = parseResult.data;

  // 4. Sanitize strings against stored XSS
  const sanitizedName = sanitizeText(name);
  const sanitizedOrg = organization ? sanitizeText(organization) : null;
  const sanitizedInterest = sanitizeText(interest);
  const sanitizedMessage = sanitizeText(message);

  // 5. Store Inbound Lead
  const contactRecord = await prisma.contactMessage.create({
    data: {
      name: sanitizedName,
      email: email.toLowerCase().trim(),
      organization: sanitizedOrg,
      interest: sanitizedInterest,
      message: sanitizedMessage,
      status: 'unread',
      ipHash: ipHash,
    },
  });

  await recordAuditLog({
    actorEmail: email,
    action: 'CONTACT_LEAD_SUBMISSION',
    resource: `MESSAGE_${contactRecord.id}`,
    details: `Inquiry submitted under category: ${sanitizedInterest}`,
    result: 'SUCCESS',
    ipAddress: clientIp,
  });

  return NextResponse.json({
    success: true,
    message: 'Encrypted inquiry received successfully.',
    id: contactRecord.id,
  });
}
