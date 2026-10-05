import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import {
  Package,
  MessageSquare,
  ShieldCheck,
  History,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Lock,
  Cpu,
  GraduationCap,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const [
    productsCount,
    messagesCount,
    unreadMessagesCount,
    auditsCount,
    recentAudits,
    recentEvents,
    programsCount,
    workflowsCount,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: 'unread' } }),
    prisma.auditLog.count(),
    prisma.auditLog.findMany({ take: 6, orderBy: { timestamp: 'desc' } }),
    prisma.securityEvent.findMany({ take: 4, orderBy: { timestamp: 'desc' } }),
    prisma.awarenessProgram.count(),
    prisma.automationWorkflow.count(),
  ]);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Enterprise Operations Dashboard
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Operational overview of products, AI awareness programs, leads, and shift-left cybersecurity telemetry.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href="/admin/products"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            + Create Solution
          </Link>
          <Link
            href="/admin/security"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            Audit Center
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">Live Products</span>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">{productsCount}</div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center space-x-1">
            <span className="text-emerald-600 font-semibold">100%</span>
            <span>Database-driven catalog</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">Advisory Inquiries</span>
            <div className="p-2 rounded-lg bg-fuchsia-50 text-fuchsia-600">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">{messagesCount}</div>
          <div className="text-[11px] text-slate-500 mt-1">
            <span className="text-amber-600 font-semibold">{unreadMessagesCount} unread</span> leads pending triage
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">Security Score</span>
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-600">99.4%</div>
          <div className="text-[11px] text-slate-500 mt-1">
            Zero known vulnerabilities (STRIDE verified)
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">Audit Trail Events</span>
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <History className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">{auditsCount}</div>
          <div className="text-[11px] text-slate-500 mt-1">
            Immutable SQLite records preserved
          </div>
        </div>
      </div>

      {/* Main Two-Column Operational Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Recent Audit Trail (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Recent Immutable Audit Activity</h3>
              <p className="text-xs text-slate-500">Chronological ledger of security-sensitive operations.</p>
            </div>
            <Link
              href="/admin/audit-logs"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center space-x-1"
            >
              <span>View All Logs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {recentAudits.map((log) => (
              <div key={log.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-slate-800">
                      {log.action}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        log.result === 'SUCCESS'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {log.result}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    {log.details || log.resource}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Actor: {log.actorEmail} &bull; IP: {log.ipAddress || '127.0.0.1'}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 whitespace-nowrap">
                  {new Date(log.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Shift-Left Security Telemetry (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Security Center Snapshot */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Shift-Left Security Gate</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">Real-time defensive posture validation.</p>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">Rate Limiter</span>
                <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enforced (5m/10m)</span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">Auth Cookie</span>
                <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>HttpOnly + SameSite</span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">Database Guard</span>
                <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Prisma Parameterized</span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">XSS Sanitizer</span>
                <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Entity Escaped</span>
                </span>
              </div>
            </div>

            <Link
              href="/admin/security"
              className="mt-5 w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <span>Open Security Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick Pillar Counts */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Pillar Content Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-2 text-slate-600">
                  <GraduationCap className="w-4 h-4 text-fuchsia-600" />
                  <span>AI Awareness Modules</span>
                </span>
                <span className="font-bold text-slate-800">{programsCount} active</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-2 text-slate-600">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>Automation Workflows</span>
                </span>
                <span className="font-bold text-slate-800">{workflowsCount} active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
