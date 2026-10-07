'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  Cpu,
  Layers,
  Bot,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

interface Specialty {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  accentColor: string;
  href: string;
  keyPoints: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export const specialtiesData: Specialty[] = [
  {
    id: 'ai-safety',
    num: '01',
    title: 'AI Safety',
    tagline: 'Researching & Developing Trustworthy Foundation Architectures',
    description:
      'We research and develop approaches for safer, more reliable, responsible, and human-centered AI.',
    icon: ShieldCheck,
    gradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    accentColor: '#06b6d4',
    href: '/ai-safety',
    keyPoints: [
      'Mathematical guarantees for model alignment and bounded agency',
      'Continuous red-teaming and adversarial robustness testing',
      'Human-in-the-loop oversight frameworks for critical decisions',
      'Ethical guardrails and bias mitigation across foundation models',
    ],
    metrics: [
      { label: 'Safety Verification', value: '99.98%' },
      { label: 'Latency Overhead', value: '<4.2ms' },
      { label: 'Regulatory Alignment', value: 'ISO 42001 & EU AI Act' },
    ],
    deliverables: [
      'Pre- & Post-Inference Semantic Guardrails',
      'Adversarial Attack Simulation Engine',
      'Confidential Compute & Model Integrity Verifiers',
    ],
  },
  {
    id: 'ai-awareness',
    num: '02',
    title: 'AI Awareness',
    tagline: 'Empowering Organizations & Society Across The AI Era',
    description:
      'We promote AI awareness and understanding to help people and organizations navigate the evolving AI landscape.',
    icon: Sparkles,
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    accentColor: '#8b5cf6',
    href: '/ai-awareness',
    keyPoints: [
      'Executive governance and strategic AI transformation masterclasses',
      'Workforce AI literacy and human-AI collaborative training',
      'Transparent frameworks demystifying algorithmic decision making',
      'Public education initiatives on responsible AI usage and ethics',
    ],
    metrics: [
      { label: 'Professionals Trained', value: '45,000+' },
      { label: 'Enterprise Cohorts', value: '180+' },
      { label: 'Decision Confidence', value: '96.4%' },
    ],
    deliverables: [
      'Executive AI Risk & Opportunity Briefings',
      'Role-Specific AI Literacy Playbooks',
      'Interactive AI Capability & Threat Simulators',
    ],
  },
  {
    id: 'intelligent-software',
    num: '03',
    title: 'Intelligent Software',
    tagline: 'Combining Modern Engineering With AI-Driven Capabilities',
    description:
      'We develop intelligent software that combines modern engineering with AI-driven capabilities.',
    icon: Cpu,
    gradient: 'from-cyan-400 via-blue-600 to-indigo-600',
    accentColor: '#3b82f6',
    href: '/products',
    keyPoints: [
      'Microservice and cloud-native systems with embedded cognitive layers',
      'High-throughput vector search and contextual knowledge retrieval',
      'Deterministic APIs interfacing with probabilistic AI reasoning',
      'Enterprise-grade observability, security, and low-latency pipelines',
    ],
    metrics: [
      { label: 'API Uptime SLA', value: '99.99%' },
      { label: 'Throughput', value: '120k req/s' },
      { label: 'Engineering Architecture', value: 'Cloud-Native & Modular' },
    ],
    deliverables: [
      'Cognitive Core Data Infrastructure',
      'Distributed Vector Engines & RAG Subsystems',
      'Resilient Model Serving Platforms',
    ],
  },
  {
    id: 'ai-product-development',
    num: '04',
    title: 'AI Product Development',
    tagline: 'Building Practical Products That Solve Real-World Problems',
    description:
      'We build practical AI-powered products that solve real-world problems and create meaningful value.',
    icon: Layers,
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    accentColor: '#ec4899',
    href: '/products',
    keyPoints: [
      'Zero-to-one product incubation from research concept to production',
      'User-centric interfaces engineered around intuitive human-AI synergy',
      'Domain-adapted specialized models fine-tuned on verified data',
      'Commercial validation, scalable telemetry, and measurable ROI',
    ],
    metrics: [
      { label: 'Products Deployed', value: '8 Active Solutions' },
      { label: 'Real-World Impact', value: 'Measurable Value Creation' },
      { label: 'User Adoption', value: 'Enterprise Ready' },
    ],
    deliverables: [
      'EVAR Sentinel AI Guardian',
      'Cognitive Orchestrator Platform',
      'ShieldLens Enterprise Monitoring',
    ],
  },
  {
    id: 'ai-automation',
    num: '05',
    title: 'AI Automation',
    tagline: 'Intelligent AI Agents & Autonomous Complex Workflows',
    description:
      'We automate repetitive and complex workflows using intelligent AI agents and automation systems.',
    icon: Bot,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    accentColor: '#f97316',
    href: '/ai-automation',
    keyPoints: [
      'Multi-agent collaborative teams executing compound tasks autonomously',
      'Dynamic orchestration that parses unstructured inputs into validated actions',
      'Self-healing automated pipelines with proactive exception handling',
      'End-to-end integration across ERPs, CRMs, security tools, and databases',
    ],
    metrics: [
      { label: 'Workflow Acceleration', value: '85%+' },
      { label: 'Manual Steps Eliminated', value: '92%' },
      { label: 'Autonomous Agents', value: 'Multi-Role Orchestration' },
    ],
    deliverables: [
      'Autonomous Incident Response Pipelines',
      'Regulatory & Compliance Auditing Bots',
      'Cross-System Operational Workflow Engines',
    ],
  },
];

export default function SpecialtiesSection() {
  const [activeTab, setActiveTab] = useState<string>('ai-safety');

  const activeSpecialty =
    specialtiesData.find((s) => s.id === activeTab) || specialtiesData[0];

  return (
    <section
      id="specialties"
      className="pt-10 pb-16 sm:py-28 lg:py-32 relative bg-transparent border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header with Responsive Typography */}
        <div className="max-w-3xl mb-8 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Core Pillars &bull; What Defines EVAR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#f8fafc] tracking-tight leading-[1.12]">
            Our <span className="font-semibold evar-text-gradient">Specialties</span>
          </h2>

          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#94a3b8] leading-relaxed">
            At EVAR Intelligence Ltd., our entire ecosystem is anchored in five interconnected
            specialties designed to deliver safe, practical, and transformative intelligence to
            humanity.
          </p>
        </div>

        {/* Tab Selector with Smooth Transitions */}
        <div className="flex overflow-x-auto pb-4 mb-8 sm:mb-12 gap-2 sm:gap-3 no-scrollbar border-b border-white/[0.08]">
          {specialtiesData.map((spec) => {
            const isActive = activeTab === spec.id;
            const Icon = spec.icon;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveTab(spec.id)}
                className={`flex items-center space-x-2.5 sm:space-x-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-[#00212b] shadow-lg shadow-cyan-500/15 scale-[1.02] font-semibold'
                    : 'bg-[#002a36]/60 text-[#94a3b8] hover:bg-[#003444] hover:text-white border border-white/5'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
                    isActive ? 'text-[#00212b]' : 'text-cyan-400'
                  }`}
                />
                <span>{spec.title}</span>
                <span className="font-mono text-[10px] opacity-60 ml-1">[{spec.num}]</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Active Specialty Spotlight Card with Smooth Keyframe Animation */}
        <div
          key={activeSpecialty.id}
          className="dark-panel p-6 sm:p-10 lg:p-12 mb-12 sm:mb-16 relative overflow-hidden specialty-fade-in"
        >
          {/* Ambient Background Gradient Glow */}
          <div
            className="absolute top-0 right-0 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: activeSpecialty.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 relative z-10">
            {/* Left 7 Columns: Core Description & Points */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3.5 mb-4">
                  <div
                    className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 transition-all duration-300"
                    style={{ backgroundColor: activeSpecialty.accentColor }}
                  >
                    <activeSpecialty.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94a3b8]">
                      Specialty {activeSpecialty.num}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-semibold text-white">
                      {activeSpecialty.title}
                    </h3>
                  </div>
                </div>

                {/* Exact user-provided description */}
                <div className="p-4 sm:p-6 rounded-2xl bg-black/30 border border-white/10 mb-6 sm:mb-8 transition-all duration-300">
                  <p className="text-sm sm:text-lg md:text-xl font-medium text-cyan-100 leading-relaxed">
                    &ldquo;{activeSpecialty.description}&rdquo;
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-3 mb-6 sm:mb-8">
                  <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#94a3b8]">
                    Engineering &amp; Operational Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSpecialty.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-6 border-t border-white/10">
                <Link
                  href={activeSpecialty.href}
                  className="pill-btn !py-2.5 sm:!py-3 !px-5 sm:!px-6 text-xs sm:text-sm font-semibold shadow-md transition-all duration-300"
                >
                  <span>Explore {activeSpecialty.title}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
                <Link
                  href="/contact"
                  className="ghost-btn !py-2.5 sm:!py-3 !px-5 sm:!px-6 text-xs sm:text-sm font-medium transition-all duration-300"
                >
                  <span>Collaborate With Us</span>
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Metrics & Deliverables */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
              {/* Telemetry Metrics */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#00212b]/80 border border-white/10 backdrop-blur-md transition-all duration-300">
                <h4 className="text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#94a3b8] mb-3.5">
                  Operational Metrics &amp; Benchmarks
                </h4>
                <div className="space-y-3.5">
                  {activeSpecialty.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between pb-2.5 border-b border-white/5 last:border-0 last:pb-0"
                    >
                      <span className="text-xs sm:text-sm text-[#94a3b8]">
                        {m.label}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-semibold text-cyan-300">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Deliverables / Artifacts */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#00212b]/80 border border-white/10 backdrop-blur-md transition-all duration-300">
                <h4 className="text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#94a3b8] mb-3">
                  Enterprise Deliverables &amp; Deployments
                </h4>
                <div className="space-y-2.5">
                  {activeSpecialty.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#e2e8f0]"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: activeSpecialty.accentColor }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Responsive Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {specialtiesData.map((spec) => {
            const Icon = spec.icon;
            const isCurrent = activeTab === spec.id;
            return (
              <div
                key={spec.id}
                onClick={() => setActiveTab(spec.id)}
                className={`dark-panel p-5 sm:p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 group ${
                  isCurrent
                    ? 'ring-2 ring-cyan-400/60 scale-[1.02]'
                    : 'opacity-90 hover:opacity-100 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono text-[#94a3b8]">
                      {spec.num}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: spec.accentColor }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-[#f8fafc] mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {spec.title}
                  </h4>

                  <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3 mb-4">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-cyan-400">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
