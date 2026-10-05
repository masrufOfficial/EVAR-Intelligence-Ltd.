import React from 'react';
import { prisma } from '@/lib/prisma';
import { Settings, Save, ShieldAlert, Check } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const settings = await prisma.websiteSetting.findMany({
    orderBy: { key: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Website & Security Configuration</h2>
          <p className="text-xs text-slate-500">
            System configuration parameters persisted in database. Changes are immediately recorded in the audit trail.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl space-y-6">
        <div className="space-y-4">
          {settings.map((s) => (
            <div key={s.id} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-mono font-bold text-slate-800">{s.key}</label>
                <span className="text-[10px] text-slate-400 font-mono">
                  Updated: {new Date(s.updatedAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">{s.description || 'System setting parameter'}</p>
              <input
                type="text"
                defaultValue={s.value}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-sans"
              />
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm flex items-center space-x-2 transition-colors">
            <Save className="w-4 h-4" />
            <span>Persist System Configuration</span>
          </button>
        </div>
      </div>
    </div>
  );
}
