'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';

const safetyPrinciples = [
  {
    num: '01',
    title: 'Human-Centered Alignment',
    desc: 'Grounding foundation model behaviors in human values, ethical agency, and verifiable safety guarantees rather than unconstrained autonomy.',
  },
  {
    num: '02',
    title: 'Bounded Agency & Safeguards',
    desc: 'Autonomous agent networks operate within deterministic state machine boundaries; critical operational calls require explicit human sign-off.',
  },
  {
    num: '03',
    title: 'Adversarial Robustness Testing',
    desc: 'Rigorous empirical red-teaming and stress-testing under extreme distributions to ensure resilience against unexpected prompts or edge-case attacks.',
  },
  {
    num: '04',
    title: 'Global Ethical Standards',
    desc: 'Audited pipelines aligned with ISO 42001 and the EU AI Act, ensuring algorithmic transparency, data provenance, and continuous bias auditing.',
  },
];

export default function SafetySection() {
  return (
    <section id="ai-safety" className="py-24 sm:py-28 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-pill mb-4 text-cyan-600 dark:text-cyan-400">
            Specialty 01 &bull; AI Safety
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
            Safer, More Reliable &amp; <span className="font-semibold evar-text-gradient">Human-Centered AI</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
            We research and develop approaches for safer, more reliable, responsible, and
            human-centered AI. Our mission is to ensure that as autonomous systems grow in power,
            human welfare, ethics, and control remain paramount.
          </p>
        </div>

        {/* 4 Core Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="dark-panel p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-4 font-semibold">
                  [{item.num}]
                </div>
                <h3 className="text-base font-semibold text-[#00212b] dark:text-[#fafafa] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Safety Architecture Lifecycle */}
        <div className="dark-panel p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#00212b]/10 dark:border-white/[0.06] gap-4 mb-8">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-600 dark:text-cyan-400 mb-1 font-semibold">
                Verification Architecture
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#00212b] dark:text-[#fafafa]">
                Deterministic Safety Verification &amp; Continuous Alignment
              </h3>
            </div>
            <Link
              href="/ai-safety"
              className="pill-btn !py-2.5 !px-5 !text-xs self-start md:self-auto font-semibold"
            >
              <span>Explore AI Safety Research</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#00212b]/[0.02] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">Stage 01</span>
              <h4 className="text-sm font-semibold text-[#00212b] dark:text-[#fafafa] mt-1 mb-1">Semantic Intent Filter</h4>
              <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
                Pre-inference semantic boundaries, input sanity checks, and PII masking.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#00212b]/[0.02] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">Stage 02</span>
              <h4 className="text-sm font-semibold text-[#00212b] dark:text-[#fafafa] mt-1 mb-1">Private Sandboxing</h4>
              <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
                Confidential runtime environment, isolated compute nodes, and strict memory fences.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#00212b]/[0.02] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">Stage 03</span>
              <h4 className="text-sm font-semibold text-[#00212b] dark:text-[#fafafa] mt-1 mb-1">Human-in-the-Loop Gate</h4>
              <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
                Deterministic policy verification before any external system or tool mutation is executed.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#00212b]/[0.02] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">Stage 04</span>
              <h4 className="text-sm font-semibold text-[#00212b] dark:text-[#fafafa] mt-1 mb-1">Explainability &amp; Traceability</h4>
              <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
                Comprehensive provenance and audit records providing total visibility into AI reasoning paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
