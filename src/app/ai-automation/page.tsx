import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PillarAutomation from '@/components/pillar-automation';
import { prisma } from '@/lib/prisma';
import { Workflow, ShieldCheck, Bot, Zap } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'AI Automation & Intelligent Products | EVAR Intelligence Ltd.',
  description:
    'Enterprise multi-agent autonomous workflows, decision-support systems, and custom AI software engineered with shift-left security bounds.',
};

export default async function AIAutomationPage() {
  let workflows: any[] = [];
  try {
    const raw = await prisma.automationWorkflow.findMany({
      orderBy: { createdAt: 'asc' },
    });
    workflows = raw.map((w) => ({
      ...w,
      agentsDeployed: JSON.parse(w.agentsDeployed || '[]'),
    }));
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6">
          Pillar 02 &bull; Autonomous Systems
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal text-[#fafafa] tracking-tight leading-tight mb-6">
          Intelligent Automation with <span className="text-[#a7a6a6]">Bounded Human Agency</span>
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          Move beyond simple script automation. EVAR designs and implements deterministic multi-agent swarms
          that orchestrate complex operations across cybersecurity, financial compliance, and enterprise workflows.
        </p>
      </section>

      <PillarAutomation workflows={workflows.length > 0 ? workflows : undefined} />

      {/* Engineering Standards */}
      <section className="py-24 border-t border-white/[0.06] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="badge-pill mb-4">
              Architecture &bull; Deterministic Bounds
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#fafafa] mb-2">
              Our 4 Pillars of Autonomous Agent Architecture
            </h2>
            <p className="text-sm text-[#a7a6a6] font-normal">
              How we guarantee safe, auditable, and reliable multi-agent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="dark-panel p-6">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#fafafa] mb-4">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-normal text-[#fafafa] mb-2">State Graph Determinism</h3>
              <p className="text-xs text-[#a7a6a6] leading-relaxed font-normal">
                Agent actions follow mathematically compiled execution paths, preventing unbounded infinite loops and rogue API calls.
              </p>
            </div>

            <div className="dark-panel p-6">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#fafafa] mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-normal text-[#fafafa] mb-2">Dual-Key Escalation</h3>
              <p className="text-xs text-[#a7a6a6] leading-relaxed font-normal">
                Irreversible actions (system isolation, contract signing, funds disbursement) require human supervisor consensus.
              </p>
            </div>

            <div className="dark-panel p-6">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#fafafa] mb-4">
                <Bot className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-normal text-[#fafafa] mb-2">Ephemeral Sandboxing</h3>
              <p className="text-xs text-[#a7a6a6] leading-relaxed font-normal">
                Each agent runs in a short-lived micro-container with strict network allowlisting and zero persistent credentials.
              </p>
            </div>

            <div className="dark-panel p-6">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#fafafa] mb-4">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-normal text-[#fafafa] mb-2">Non-Repudiation Audit</h3>
              <p className="text-xs text-[#a7a6a6] leading-relaxed font-normal">
                Every intermediate reasoning trace and external API invocation is cryptographically signed and stored immutably.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
