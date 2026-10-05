'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const safetyPrinciples = [
  {
    num: '01',
    title: 'Shift-Left Guardrails',
    desc: 'Security checks integrated during prompt engineering, agent tool registration, and model training rather than post-inference testing.',
  },
  {
    num: '02',
    title: 'Bounded Human Agency',
    desc: 'Autonomous multi-agent workflows are constrained by strict state machines; catastrophic or high-stakes API actions require human sign-off.',
  },
  {
    num: '03',
    title: 'Confidential AI Compute',
    desc: 'Hardware enclaves and zero-knowledge proofs verify model execution integrity without ever exposing raw proprietary training weights or customer data.',
  },
  {
    num: '04',
    title: 'EU AI Act & ISO 42001',
    desc: 'Audited compliance pipelines for high-risk AI systems, providing algorithmic transparency, data provenance, and bias mitigation metrics.',
  },
];

export default function SafetySection() {
  return (
    <section id="architecture" className="py-28 relative bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <div className="badge-pill mb-4">
            Security &bull; Shift-Left
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#fafafa] tracking-tight leading-tight">
            Safety, Alignment &amp; Verification
          </h2>
          <p className="mt-4 text-base text-[#a7a6a6] leading-relaxed">
            At EVAR Intelligence Ltd., cybersecurity is not an afterthought; it is our fundamental
            design philosophy. We pioneer shift-left safeguards that guarantee alignment, prevent prompt
            injections, and keep human welfare at the center of technological progress.
          </p>
        </div>

        {/* 4 Core Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="dark-panel p-8"
            >
              <div className="text-xs font-mono text-[#8b8a8a] mb-4">
                {item.num}
              </div>
              <h3 className="text-base font-normal text-[#fafafa] mb-2">{item.title}</h3>
              <p className="text-xs text-[#a7a6a6] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Shift-Left Architecture Lifecycle */}
        <div className="dark-panel p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/[0.06] gap-4 mb-8">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-[#8b8a8a] mb-1">
                Deterministic Lifecycle
              </div>
              <h3 className="text-xl font-normal text-[#fafafa]">
                Deterministic Security Gates vs. Reactive Patching
              </h3>
            </div>
            <Link
              href="/ai-safety"
              className="pill-btn !py-2.5 !px-5 !text-xs self-start md:self-auto font-semibold"
            >
              <span>View Safety Docs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-[#8b8a8a] uppercase">Stage 01</span>
              <h4 className="text-sm font-normal text-[#fafafa] mt-1 mb-1">Pre-Inference Guard</h4>
              <p className="text-xs text-[#a7a6a6] leading-relaxed">
                Multi-token semantic intent filters, prompt-injection AST decomposition, and PII masking.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-[#8b8a8a] uppercase">Stage 02</span>
              <h4 className="text-sm font-normal text-[#fafafa] mt-1 mb-1">Enclave Execution</h4>
              <p className="text-xs text-[#a7a6a6] leading-relaxed">
                Confidential VM sandboxing, isolated memory pages, and cryptographic computation proofs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-[#8b8a8a] uppercase">Stage 03</span>
              <h4 className="text-sm font-normal text-[#fafafa] mt-1 mb-1">Agent Action Gate</h4>
              <p className="text-xs text-[#a7a6a6] leading-relaxed">
                State machine verification before any external API tool invocation, ensuring non-repudiation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-[#8b8a8a] uppercase">Stage 04</span>
              <h4 className="text-sm font-normal text-[#fafafa] mt-1 mb-1">Immutable Audit</h4>
              <p className="text-xs text-[#a7a6a6] leading-relaxed">
                Cryptographic tamper-evident audit records logged for complete forensic visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
