import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const { user, errorResponse } = await authenticateRequest(req, [
    'SUPER_ADMIN',
    'ADMIN',
  ]);

  if (errorResponse || !user) {
    return (
      errorResponse ||
      NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 401 })
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get('action');
    const result = searchParams.get('result');

    const where: any = {};
    if (action) where.action = action;
    if (result) where.result = result;

    const logs = await prisma.auditLog.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      take: 100,
    });

    return NextResponse.json({ success: true, logs });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch audit logs' }, { status: 500 });
  }
}
