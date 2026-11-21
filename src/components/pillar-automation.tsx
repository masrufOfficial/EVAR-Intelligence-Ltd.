'use client';

import React from 'react';
import Link from 'next/link';
import {
  Bot,
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  GitBranch,
  Lock,
  Layers,
  FileCheck2,
} from 'lucide-react';

interface AutomationWorkflow {
  id: string;
  title: string;
  industry: string;
  efficiencyGain: string;
  description: string;
  architecture: string;
  pipelineStages: string[];
  agentsDeployed: {
    name: string;
    role: string;
  }[];
}

const workflows: AutomationWorkflow[] = [
  {
    id: 'wf-1',
    title: 'Autonomous Systems Triage & Incident Resolution',
    industry: 'Enterprise IT & Cloud Operations',
    efficiencyGain: '92% MTTR Reduction',
    description:
      'Continuous multi-agent pipeline ingesting live telemetry, correlating anomalous patterns, and executing targeted remediation playbooks autonomously with deterministic safeguards.',
    architecture: 'Event-driven orchestrator with automated rollback gates',
    pipelineStages: ['Telemetry Ingest', 'Root-Cause Analysis', 'Safety Check', 'Remediation'],
    agentsDeployed: [
      { name: 'Telemetry Correlator', role: 'Telemetry Ingest' },
      { name: 'Anomaly Detector', role: 'Pattern Matching' },
      { name: 'Artifact Collector', role: 'Forensic Audit' },
      { name: 'Playbook Executor', role: 'Action Containment' },
    ],
  },
  {
    id: 'wf-2',
    title: 'Regulatory Compliance & Contract Audit',
    industry: 'Enterprise Legal & Financial',
    efficiencyGain: '85% Review Acceleration',
    description:
      'Automated multi-agent document analysis cross-referencing stipulations against EU AI Act, ISO/IEC 42001, and corporate risk policies with deterministic provenance.',
    architecture: 'Private retrieval enclaves with strict citation verifiers',
    pipelineStages: ['Clause Extraction', 'Policy Cross-Match', 'Risk Scoring', 'Audit Certificate'],
    agentsDeployed: [
      { name: 'Clause Extractor', role: 'Document Parse' },
      { name: 'Policy Matcher', role: 'Rule Validation' },
      { name: 'Risk Assessor', role: 'Liability Scoring' },
      { name: 'Audit Certifier', role: 'Provenance Stamping' },
    ],
  },
  {
    id: 'wf-3',
    title: 'Human-in-the-Loop Decision Acceleration Engine',
    industry: 'High-Stakes Operations & Logistics',
    efficiencyGain: '4.8x Operational Throughput',
    description:
      'Synthesizes compound operational scenarios across multiple autonomous agents. When decision confidence requires verification, it generates structured decision matrices for human sign-off.',
    architecture: 'State-machine bounded agency with cryptographic audit trail',
    pipelineStages: ['Scenario Synthesis', 'Confidence Eval', 'Matrix Formation', 'Human Sign-off'],
    agentsDeployed: [
      { name: 'Data Aggregator', role: 'Signal Synthesis' },
      { name: 'Hypothesis Evaluator', role: 'Outcome Modeling' },
      { name: 'Confidence Scorer', role: 'Bounds Checking' },
      { name: 'Interface Synthesizer', role: 'Operator UI' },
    ],
  },
];

export default function PillarAutomation({ workflows: initialWorkflows }: { workflows?: any[] } = {}) {
  const displayWorkflows: AutomationWorkflow[] = (initialWorkflows && initialWorkflows.length > 0)
    ? initialWorkflows.map((w, idx) => ({
        id: w.id || `wf-${idx}`,
        title: w.title,
        industry: w.industry || 'Enterprise Automation',
        efficiencyGain: w.efficiencyGain || '80%+ Process Acceleration',
        description: w.description,
        architecture: w.architecture || 'Autonomous multi-agent execution with deterministic state gates',
        pipelineStages: ['Ingest & Correlate', 'Policy Analysis', 'Verification', 'Action'],
        agentsDeployed: (Array.isArray(w.agentsDeployed) ? w.agentsDeployed : []).map((a: string) => ({
          name: typeof a === 'string' ? a : 'Specialized Agent',
          role: 'Subsystem',
        })).concat([
          { name: 'Telemetry Correlator', role: 'Ingest' },
          { name: 'Audit Certifier', role: 'Verification' },
        ]).slice(0, 4),
      }))
    : workflows;
  return (
    <section
      id="ai-automation"
      className="py-12 sm:py-16 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="badge-pill mb-4 text-orange-600 dark:text-orange-400">
            Specialty 05 &bull; AI Automation
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
            Automating Complex Workflows With <span className="font-semibold evar-text-gradient">Intelligent Agents</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
            We automate repetitive and complex workflows using autonomous, reliable, and self-healing multi-agent systems designed for enterprise-grade dependability.
          </p>
        </div>

        {/* 3-Column Balanced Workflow Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
          {displayWorkflows.map((wf) => (
            <div
              key={wf.id}
              className="dark-panel p-6 sm:p-7 flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-orange-500/5 transition-all duration-300"
            >
              <div>
                {/* Industry & Metric Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider truncate">
                    {wf.industry}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full shrink-0">
                    {wf.efficiencyGain}
                  </span>
                </div>

                {/* Workflow Title */}
                <h3 className="text-lg font-semibold text-[#00212b] dark:text-white mb-2.5 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  {wf.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94a3b8] leading-relaxed mb-6 font-normal">
                  {wf.description}
                </p>

                {/* Pipeline Stages Flow */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] mb-2 flex items-center space-x-1.5">
                    <Activity className="w-3 h-3 text-orange-400" />
                    <span>Automated Execution Pipeline</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 p-2 rounded-xl bg-black/[0.03] dark:bg-black/30 border border-[#00212b]/5 dark:border-white/5 text-center">
                    {wf.pipelineStages.map((stage, sIdx) => (
                      <div key={sIdx} className="flex flex-col items-center">
                        <span className="text-[9px] font-mono font-semibold text-cyan-600 dark:text-cyan-400 truncate w-full">
                          0{sIdx + 1}
                        </span>
                        <span className="text-[9px] text-[#475569] dark:text-[#cbd5e1] truncate w-full">
                          {stage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coordinated Specialized Agents */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] mb-2 flex items-center space-x-1.5">
                    <Bot className="w-3 h-3 text-cyan-400" />
                    <span>Coordinated Specialized Agents</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {wf.agentsDeployed.map((agent, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-2 rounded-lg bg-white/50 dark:bg-white/[0.03] border border-[#00212b]/5 dark:border-white/5 flex items-start space-x-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-medium text-[#00212b] dark:text-[#e2e8f0] truncate">
                            {agent.name}
                          </div>
                          <div className="text-[9px] text-[#64748b] dark:text-[#8b8a8a] truncate">
                            {agent.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture & Bottom Action */}
              <div className="pt-4 border-t border-[#00212b]/10 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[#64748b] dark:text-[#8b8a8a] truncate max-w-[200px]">
                  {wf.architecture}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Orchestration Standards Banner */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-[#00212b]/60 border border-[#00212b]/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="flex items-start space-x-3">
            <Lock className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-[#00212b] dark:text-white">Deterministic Tool Bounds</div>
              <p className="text-[11px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                Zero unauthorized privilege escalation across model execution boundaries.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <GitBranch className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-[#00212b] dark:text-white">Multi-Agent Consensus</div>
              <p className="text-[11px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                Cross-verified agent outputs that neutralize cascading hallucination.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FileCheck2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-[#00212b] dark:text-white">Cryptographic Audit Trail</div>
              <p className="text-[11px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                Provable provenance and decision recording for compliance verification.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-[#00212b] dark:text-white">Automated Rollback Gates</div>
              <p className="text-[11px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                Deterministic state checkpoints with instant human intervention fallback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
