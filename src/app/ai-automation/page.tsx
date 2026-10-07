import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PillarAutomation from '@/components/pillar-automation';
import { prisma } from '@/lib/prisma';
import { Workflow, ShieldCheck, Bot, Zap } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'AI Automation & Intelligent Agents | EVAR Intelligence Ltd.',
  description:
    'We automate repetitive and complex workflows using intelligent AI agents and automation systems.',
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

  const standards = [
    {
      title: 'Multi-Agent Autonomous Collaboration',
      desc: 'Specialized agents coordinated through deterministic state machines executing multi-step enterprise workflows.',
      icon: Bot,
    },
    {
      title: 'Human-in-the-Loop Oversight',
      desc: 'Critical API actions and high-stakes operations require verified human authorization before execution.',
      icon: ShieldCheck,
    },
    {
      title: 'Self-Healing Workflows',
      desc: 'Adaptive error-handling and automated recovery routines preventing unexpected workflow interruptions.',
      icon: Zap,
    },
    {
      title: 'Deep System Integration',
      desc: 'Native connectors for enterprise databases, CRM, ERP, and operational toolchains with full audit trails.',
      icon: Workflow,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6 text-orange-600 dark:text-orange-400">
          Specialty 05 &bull; AI Automation
        </div>

        <h1 className="text-4xl sm:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-6">
          Intelligent AI Agents &amp; <span className="font-semibold evar-text-gradient">Automation Systems</span>
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          We automate repetitive and complex workflows using intelligent AI agents and
          automation systems. Empowering organizations to operate with superior speed,
          resilience, and mathematical accuracy.
        </p>
      </section>

      <PillarAutomation workflows={workflows.length > 0 ? workflows : undefined} />

      {/* Engineering Standards */}
      <section className="py-24 border-t border-[#00212b]/10 dark:border-white/[0.06] bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="badge-pill mb-4 text-orange-600 dark:text-orange-400">
              Architecture &bull; Autonomous Foundations
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#00212b] dark:text-[#fafafa] mb-2">
              Our 4 Pillars of <span className="font-semibold evar-text-gradient">Autonomous Architecture</span>
            </h2>
            <p className="text-sm text-[#475569] dark:text-[#a7a6a6] font-normal">
              Engineered to ensure enterprise reliability, safety, and continuous performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s, i) => (
              <div key={i} className="dark-panel p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#00212b] dark:text-[#fafafa] mb-2">{s.title}</h3>
                  <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed font-normal">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
