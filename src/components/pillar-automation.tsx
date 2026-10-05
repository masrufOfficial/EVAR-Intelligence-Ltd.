'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle } from 'lucide-react';

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
    title: 'Autonomous Incident Response & Threat Containment',
    slug: 'autonomous-incident-response',
    industry: 'Cybersecurity Infrastructure',
    efficiencyGain: '92% reduction in MTTR',
    description:
      'Multi-agent cognitive pipeline that ingests security telemetry, runs behavioral graph correlations, verifies threat legitimacy, and executes mathematically proven containment playbooks.',
    architecture: 'Asynchronous event-driven orchestrator with dual-key cryptographic approvals.',
    agentsDeployed: [
      'Telemetry Correlator Agent',
      'Zero-Day Anomaly Agent',
      'Forensic Artifact Synthesizer',
      'Containment Playbook Agent',
    ],
  },
  {
    id: 'wf-2',
    title: 'Zero-Trust Regulatory Compliance & Contract Audit',
    slug: 'zero-trust-compliance',
    industry: 'Enterprise Legal & Banking',
    efficiencyGain: '85% acceleration in contract liability audits',
    description:
      'Autonomous document decomposition pipeline verifying hundreds of enterprise agreements simultaneously against the EU AI Act, HIPAA, and GDPR standards with strict provenance.',
    architecture: 'Private retrieval-augmented generation enclaves with deterministic citations.',
    agentsDeployed: [
      'Clause Extraction Agent',
      'Cross-Regulatory Matcher',
      'Liability Assessment Agent',
      'Audit Certificate Issuer',
    ],
  },
  {
    id: 'wf-3',
    title: 'Human-in-the-Loop Decision Acceleration Engine',
    slug: 'human-in-the-loop-acceleration',
    industry: 'Critical Infrastructure',
    efficiencyGain: '4.8x faster operational triage',
    description:
      'Empowers human operators with real-time multi-agent situational syntheses. When AI confidence drops below 99%, the engine dynamically formats a decision matrix for human sign-off.',
    architecture: 'State-machine bounded agency with cryptographic audit trail.',
    agentsDeployed: [
      'Data Ingestion Agent',
      'Confidence Scoring Agent',
      'Explainability Synthesizer',
      'Supervisor Checkpoint Dispatcher',
    ],
  },
];

export default function PillarAutomation({
  workflows = defaultWorkflows,
}: {
  workflows?: AutomationWorkflow[];
}) {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const currentWorkflow = workflows[activeWorkflowIndex] || workflows[0];

  return (
    <section className="py-28 relative bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="badge-pill mb-4">
            Pillar 02 &bull; AI Automation
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#fafafa] tracking-tight leading-tight">
            Multi-Agent Workflows &amp; Bounded Execution
          </h2>
          <p className="mt-4 text-base text-[#a7a6a6] leading-relaxed">
            Autonomous multi-agent pipelines and intelligent decision-support software.
            Engineered with strict shift-left bounded agency, every action is auditable, safe, and governed by human oversight.
          </p>
        </div>

        {/* Workflow Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {workflows.map((wf, idx) => {
              const isSelected = activeWorkflowIndex === idx;
              return (
                <button
                  key={wf.id || idx}
                  onClick={() => setActiveWorkflowIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-white/[0.05] border-white/30 text-white'
                      : 'bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03] text-[#8b8a8a]'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#a7a6a6] mb-1.5">
                    {wf.industry}
                  </div>
                  <h4 className="text-base font-normal text-[#fafafa] mb-2">{wf.title}</h4>
                  <div className="text-xs font-mono text-[#fafafa]">{wf.efficiencyGain}</div>
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7 dark-panel p-8 sm:p-10">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#a7a6a6]">
                Pipeline Architecture
              </span>
              <span className="badge-pill">Shift-Left Gated</span>
            </div>

            <p className="text-sm text-[#d1d5db] leading-relaxed mb-6 font-normal">
              {currentWorkflow.description}
            </p>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-8 font-mono text-xs text-[#a7a6a6]">
              <div className="text-[10px] uppercase text-[#8b8a8a] mb-1">State Machine Guarantee</div>
              <div>{currentWorkflow.architecture}</div>
            </div>

            {/* Deployed Specialized Agents */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8b8a8a]">
                Autonomous Agent Swarm
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentWorkflow.agentsDeployed.map((agent, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center space-x-2.5 text-xs text-[#fafafa]"
                  >
                    <Bot className="w-4 h-4 text-[#a7a6a6]" />
                    <span className="truncate">{agent}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-[#8b8a8a] font-mono">Zero-Trust Boundaries</span>
              <Link href="/products" className="pill-btn !py-2.5 !px-5 text-xs">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
