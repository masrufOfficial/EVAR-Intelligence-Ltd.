import React from 'react';
import { prisma } from '@/lib/prisma';
import { Cpu, Plus, Bot, TrendingUp, CheckCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminAutomationPage() {
  const workflows = await prisma.automationWorkflow.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Multi-Agent Automation Workflows</h2>
          <p className="text-xs text-slate-500">
            Manage Pillar 02 autonomous workflows, agent definitions, and human-in-the-loop escalation bounds.
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center space-x-1.5 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>New Workflow Pipeline</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workflows.map((wf) => {
          const agents: string[] = JSON.parse(wf.agentsDeployed || '[]');
          return (
            <div key={wf.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                    {wf.industry}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Active Swarm
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{wf.title}</h3>
                <div className="text-xs text-emerald-600 font-semibold mb-3 flex items-center space-x-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{wf.efficiencyGain}</span>
                </div>
                <p className="text-xs text-slate-500 mb-4 line-clamp-3">{wf.description}</p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Deployed Agent Nodes ({agents.length})
                  </div>
                  {agents.slice(0, 3).map((a, i) => (
                    <div key={i} className="text-xs text-slate-600 flex items-center space-x-1.5">
                      <Bot className="w-3.5 h-3.5 text-blue-500" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Shift-Left Bounded</span>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
                  Configure Graph
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
