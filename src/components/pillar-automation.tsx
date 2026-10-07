'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle, Cpu, Zap, Activity } from 'lucide-react';

interface AutomationWorkflow {
  id: string;
  title: string;
  slug: string;
  industry: string;
  efficiencyGain: string;
  description: string;
  architecture: string;
  agentsDeployed: string[];
}

const defaultWorkflows: AutomationWorkflow[] = [
  {
    id: 'wf-1',
    title: 'Autonomous Systems Triage & Incident Resolution',
    slug: 'autonomous-incident-response',
    industry: 'Enterprise Operations & IT',
    efficiencyGain: '92% reduction in MTTR',
    description:
      'Multi-agent cognitive pipeline that ingests system telemetry, executes root-cause correlations, verifies operational integrity, and resolves routine incidents autonomously.',
    architecture: 'Asynchronous event-driven orchestrator with human oversight gates.',
    agentsDeployed: [
      'Telemetry Correlator Agent',
      'Anomaly Detection Agent',
      'Forensic Artifact Synthesizer',
      'Resolution Playbook Agent',
    ],
  },
  {
    id: 'wf-2',
    title: 'Autonomous Regulatory Compliance & Contract Audit',
    slug: 'zero-trust-compliance',
    industry: 'Enterprise Legal & Financial',
    efficiencyGain: '85% acceleration in document reviews',
    description:
      'Autonomous document analysis pipeline processing complex agreements against evolving global regulations, cross-referencing stipulations with strict provenance.',
    architecture: 'Private retrieval-augmented generation enclaves with deterministic citations.',
    agentsDeployed: [
      'Clause Extraction Agent',
      'Regulatory Matcher Agent',
      'Risk Assessment Agent',
      'Audit Certificate Issuer',
    ],
  },
  {
    id: 'wf-3',
    title: 'Human-in-the-Loop Decision Acceleration Engine',
    slug: 'human-in-the-loop-acceleration',
    industry: 'Complex Operations & Logistics',
    efficiencyGain: '4.8x faster operational throughput',
    description:
      'Empowers human operators with real-time multi-agent situational syntheses. When AI confidence is bounded, the engine dynamically formats a structured decision matrix for human sign-off.',
    architecture: 'State-machine bounded agency with cryptographic audit trail.',
    agentsDeployed: [
      'Data Aggregation Agent',
      'Alternative Hypothesis Evaluator',
      'Confidence Scoring Agent',
      'Human Interface Synthesizer',
    ],
  },
];

export default function PillarAutomation({ workflows = defaultWorkflows }: { workflows?: AutomationWorkflow[] }) {
  const [activeWorkflow, setActiveWorkflow] = useState<AutomationWorkflow>(workflows[0] || defaultWorkflows[0]);

  return (
    <section id="ai-automation" className="py-24 sm:py-28 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="badge-pill mb-4 text-orange-600 dark:text-orange-400">
            Specialty 05 &bull; AI Automation
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
            Automating Complex Workflows With <span className="font-semibold evar-text-gradient">Intelligent Agents</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
            We automate repetitive and complex workflows using intelligent AI agents and
            automation systems. Transforming manual operational bottlenecks into autonomous,
            reliable, and self-healing systems.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {workflows.map((wf) => {
              const isSelected = activeWorkflow.id === wf.id;
              return (
                <div
                  key={wf.id}
                  onClick={() => setActiveWorkflow(wf)}
                  className={`dark-panel p-6 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-orange-500/50 dark:border-orange-400/50 shadow-md scale-[1.01]'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400 uppercase tracking-wider font-semibold">
                      {wf.industry}
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {wf.efficiencyGain}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#00212b] dark:text-[#fafafa] mb-1">
                    {wf.title}
                  </h3>

                  <p className="text-xs text-[#475569] dark:text-[#a7a6a6] line-clamp-2">
                    {wf.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Simulation Panel */}
          <div className="lg:col-span-7 dark-panel p-8 sm:p-10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#00212b]/10 dark:border-white/[0.06] mb-8">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-orange-600 dark:text-orange-400 font-semibold">
                  Active Multi-Agent Orchestration
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#00212b] dark:text-[#fafafa] mt-1">
                  {activeWorkflow.title}
                </h3>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full self-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Autonomous Pipeline Active</span>
              </div>
            </div>

            <p className="text-sm text-[#475569] dark:text-[#a7a6a6] leading-relaxed mb-8">
              {activeWorkflow.description}
            </p>

            {/* Architecture Banner */}
            <div className="p-4 rounded-xl bg-[#00212b]/[0.03] dark:bg-black/30 border border-[#00212b]/10 dark:border-white/10 mb-8">
              <span className="text-[10px] font-mono text-[#64748b] dark:text-[#94a3b8] uppercase block mb-1">
                Execution Architecture:
              </span>
              <p className="text-xs font-mono text-[#00212b] dark:text-[#e2e8f0]">
                {activeWorkflow.architecture}
              </p>
            </div>

            {/* Deployed Agents Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748b] dark:text-[#8b8a8a]">
                Coordinated Specialized Agents:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeWorkflow.agentsDeployed.map((agent, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-[#00212b]/10 dark:border-white/[0.06] flex items-center space-x-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-[#1e293b] dark:text-[#fafafa]">
                      {agent}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-[#00212b]/10 dark:border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-[#64748b] dark:text-[#8b8a8a]">
                Customizable for on-premise or cloud deployments
              </span>
              <Link
                href="/ai-automation"
                className="pill-btn !py-2.5 !px-5 !text-xs font-semibold"
              >
                <span>Deploy Automation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
