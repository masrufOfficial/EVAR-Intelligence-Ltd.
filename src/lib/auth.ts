import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET_STRING = process.env.JWT_SECRET || 'evar-enterprise-secret-key-32-chars-minimum-token-protection';
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);
const COOKIE_NAME = 'evar_session';

export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'CONTENT_MANAGER';

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string | null;
}

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  SUPER_ADMIN: 4,
  ADMIN: 3,
  EDITOR: 2,
  CONTENT_MANAGER: 1,
};

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as SessionPayload;
  } catch (error) {
    return null;
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export function setSessionCookie(response: NextResponse, token: string) {
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.delete(COOKIE_NAME);
}

export function hasRoleAccess(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  return allowedRoles.includes(userRole);
}

export async function authenticateRequest(
  req: NextRequest,
  allowedRoles?: UserRole[]
): Promise<{ user: SessionPayload | null; errorResponse: NextResponse | null }> {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return {
      user: null,
      errorResponse: NextResponse.json(
        { error: 'Unauthorized: Authentication required' },
        { status: 401 }
      ),
    };
  }

  const user = await verifySessionToken(token);
  if (!user) {
    return {
      user: null,
      errorResponse: NextResponse.json(
        { error: 'Invalid or expired session token' },
        { status: 401 }
      ),
    };
  }

  if (allowedRoles && !hasRoleAccess(user.role, allowedRoles)) {
    return {
      user,
      errorResponse: NextResponse.json(
        { error: `Forbidden: Insufficient privileges. Required: ${allowedRoles.join(', ')}` },
        { status: 403 }
      ),
    };
  }

  return { user, errorResponse: null };
}
