import { prisma } from './prisma';

export interface AuditParams {
  actorEmail: string;
  actorId?: string;
  action: string;
  resource: string;
  details?: string;
  result: 'SUCCESS' | 'FAILURE' | 'BLOCKED';
  ipAddress?: string;
}

export async function recordAuditLog(params: AuditParams) {
  try {
    await prisma.auditLog.create({
      data: {
        actorId: params.actorId,
        actorEmail: params.actorEmail,
        action: params.action,
        resource: params.resource,
        details: params.details,
        result: params.result,
        ipAddress: params.ipAddress ? params.ipAddress.substring(0, 45) : null,
      },
    });
  } catch (error) {
    console.error('Failed to write audit log:', error);
  }
}

export async function recordSecurityEvent(params: {
  eventType: string;
  severity: 'INFO' | 'WARNING' | 'HIGH' | 'CRITICAL';
  description: string;
  clientIpHash?: string;
}) {
  try {
    await prisma.securityEvent.create({
      data: {
        eventType: params.eventType,
        severity: params.severity,
        description: params.description,
        clientIpHash: params.clientIpHash,
      },
    });
  } catch (error) {
    console.error('Failed to write security event:', error);
  }
}
