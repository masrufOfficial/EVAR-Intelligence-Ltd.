import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie, getSession } from '@/lib/auth';
import { recordAuditLog } from '@/lib/audit';

export async function POST(req: NextRequest) {
  const session = await getSession();
  const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';

  if (session) {
    await recordAuditLog({
      actorId: session.userId,
      actorEmail: session.email,
      action: 'LOGOUT',
      resource: 'AUTH_GATEWAY',
      details: 'User logged out and session revoked.',
      result: 'SUCCESS',
      ipAddress: clientIp,
    });
  }

  const response = NextResponse.json({ success: true });
  clearSessionCookie(response);
  return response;
}
