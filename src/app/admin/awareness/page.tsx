import React from 'react';
import { prisma } from '@/lib/prisma';
import { GraduationCap, Plus, Clock, Users, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminAwarenessPage() {
  const programs = await prisma.awarenessProgram.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">AI Awareness Campaigns & Advocacy</h2>
          <p className="text-xs text-slate-500">
            Manage public campaigns, industry advocacy movements, and community outreach drives.
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center space-x-1.5 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>New Campaign Initiative</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((prog) => {
          const modules: string[] = JSON.parse(prog.modules || '[]');
          return (
            <div key={prog.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                    {prog.format}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{prog.duration}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{prog.title}</h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-3">{prog.description}</p>
                <div className="text-xs text-slate-600 font-semibold mb-2">
                  Target: {prog.audience.split(',')[0]}
                </div>
                <div className="space-y-1 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {modules.length} Focus Areas
                  </div>
                  {modules.slice(0, 2).map((m, i) => (
                    <div key={i} className="text-xs text-slate-600 truncate">
                      &bull; {m}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold">Active Initiative</span>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
                  Edit Campaign
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
