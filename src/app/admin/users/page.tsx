import React from 'react';
import { prisma } from '@/lib/prisma';
import { Users, Shield, Lock, KeyRound, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Users & RBAC Permission Boundaries</h2>
          <p className="text-xs text-slate-500">
            Administrative user accounts and cryptographically enforced access control roles.
          </p>
        </div>
        <div className="px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-800 text-xs font-semibold flex items-center space-x-1.5 self-start sm:self-auto">
          <Lock className="w-4 h-4 text-purple-600" />
          <span>SUPER_ADMIN Exclusive Scope</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-6">User Details</th>
                <th className="py-3.5 px-4">Current Role</th>
                <th className="py-3.5 px-4">Authority Scope</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900">{u.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{u.email}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${
                        u.role === 'SUPER_ADMIN'
                          ? 'bg-purple-100 text-purple-800 border-purple-200'
                          : u.role === 'ADMIN'
                          ? 'bg-blue-100 text-blue-800 border-blue-200'
                          : u.role === 'EDITOR'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                          : 'bg-amber-100 text-amber-800 border-amber-200'
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-500 text-xs">
                    {u.role === 'SUPER_ADMIN' && 'Full Root Authority + Security Center + User Mutation'}
                    {u.role === 'ADMIN' && 'Management + Audit Viewer + Content Mutation'}
                    {u.role === 'EDITOR' && 'Product & Research Publishing (Zero User Rights)'}
                    {u.role === 'CONTENT_MANAGER' && 'Scoped Text / Media Updates (Zero Delete Rights)'}
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center space-x-1 text-emerald-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Active</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors">
                      Edit Scope
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
