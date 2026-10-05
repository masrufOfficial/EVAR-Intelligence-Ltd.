import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, createSessionToken, setSessionCookie, UserRole } from '@/lib/auth';
import { checkRateLimit, hashClientIp } from '@/lib/rate-limit';
import { recordAuditLog, recordSecurityEvent } from '@/lib/audit';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(6).max(100),
});

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const ipHash = hashClientIp(clientIp);

    // 1. Sliding-Window Rate Limiting (Generous for localhost dev, strict for external)
    const isLocal =
      clientIp === '127.0.0.1' ||
      clientIp === '::1' ||
      clientIp === 'localhost' ||
      clientIp.includes('127.0.0.1');
    const maxAttempts = isLocal ? 100 : 10;

    const rateLimit = checkRateLimit(`login:${ipHash}`, maxAttempts, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      await recordSecurityEvent({
        eventType: 'RATE_LIMIT_TRIGGERED',
        severity: 'WARNING',
        description: `Excessive login attempts detected from IP hash ${ipHash}. Rate limiter engaged.`,
        clientIpHash: ipHash,
      });

      return NextResponse.json(
        {
          error: `Rate limit exceeded. Too many failed attempts. Please retry in ${rateLimit.resetSeconds} seconds.`,
        },
        { status: 429 }
      );
    }

    // 2. Shift-Left Schema Validation
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Malformed JSON payload' }, { status: 400 });
    }

    const parseResult = loginSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid email or password format' },
        { status: 400 }
      );
    }

    const { email, password } = parseResult.data;

    // 3. User Lookup
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user || !user.isActive) {
      // Constant-time mitigation to avoid user enumeration timing attacks
      await recordAuditLog({
        actorEmail: email,
        action: 'LOGIN_FAILURE',
        resource: 'AUTH_GATEWAY',
        details: 'User does not exist or is inactive.',
        result: 'FAILURE',
        ipAddress: clientIp,
      });

      return NextResponse.json(
        { error: 'Invalid credentials or account inactive' },
        { status: 401 }
      );
    }

    // 4. Verify Bcrypt Hash
    const isValidPassword = await verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      await prisma.user.update({
        where: { id: user.id },
        data: { failedAttempts: { increment: 1 } },
      });

      await recordAuditLog({
        actorId: user.id,
        actorEmail: user.email,
        action: 'LOGIN_FAILURE',
        resource: 'AUTH_GATEWAY',
        details: 'Incorrect password entered.',
        result: 'FAILURE',
        ipAddress: clientIp,
      });

      return NextResponse.json(
        { error: 'Invalid credentials or account inactive' },
        { status: 401 }
      );
    }

    // 5. Successful Authentication
    await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLogin: new Date(),
        failedAttempts: 0,
        lockedUntil: null,
      },
    });

    const sessionPayload = {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role as UserRole,
      avatar: user.avatar,
    };

    const token = await createSessionToken(sessionPayload);

    await recordAuditLog({
      actorId: user.id,
      actorEmail: user.email,
      action: 'LOGIN_SUCCESS',
      resource: 'AUTH_GATEWAY',
      details: `Authenticated with role: ${user.role}`,
      result: 'SUCCESS',
      ipAddress: clientIp,
    });

    const response = NextResponse.json({
      success: true,
      user: sessionPayload,
    });

    setSessionCookie(response, token);
    return response;
  } catch (error: any) {
    console.error('Unhandled login error:', error);
    return NextResponse.json(
      { error: error?.message || 'Authentication error. Please retry.' },
      { status: 500 }
    );
  }
}
