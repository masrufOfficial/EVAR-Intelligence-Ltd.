import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SafetySection from '@/components/safety-section';
import { FileCheck } from 'lucide-react';

export const metadata = {
  title: 'AI Safety & Responsible AI | EVAR Intelligence Ltd.',
  description:
    'Shift-left AI security frameworks, red-teaming methodologies, EU AI Act compliance, and adversarial robustness engineering.',
};

export default function AISafetyPage() {
  const complianceStandards = [
    {
      code: 'ISO/IEC 42001',
      title: 'Artificial Intelligence Management System',
      description: 'Systematic approach to managing risks and opportunities associated with AI, ensuring ethical and responsible deployment.',
    },
    {
      code: 'EU AI Act',
      title: 'High-Risk System Guardrails',
      description: 'Conformity assessments, risk management systems, high-quality training datasets, and automated event logging.',
    },
    {
      code: 'NIST AI RMF 1.0',
      title: 'Risk Management Framework',
      description: 'Govern, Map, Measure, and Manage functions for trustworthy AI systems across the development lifecycle.',
    },
    {
      code: 'OWASP LLM Top 10',
      title: 'Adversarial Vulnerability Mitigations',
      description: 'Defenses against prompt injection, insecure output handling, training data poisoning, and model denial of service.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6">
          Governance &bull; Shift-Left Architecture
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal text-[#fafafa] tracking-tight leading-tight mb-4">
          AI Safety, Ethics &amp; <span className="text-[#a7a6a6]">Adversarial Resilience</span>
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          Protecting human organizations from the catastrophic failure modes of frontier intelligence
          through rigorous mathematical guarantees, red-teaming, and continuous safety verification.
        </p>
      </section>

      <SafetySection />

      {/* Global Compliance Frameworks */}
      <section className="py-24 border-t border-white/[0.06] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="badge-pill mb-4">
              Standards &bull; Global Certifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#fafafa] mb-2">
              Regulatory Alignment &amp; Certifications
            </h2>
            <p className="text-sm text-[#a7a6a6] font-normal">
              Our safety architectures satisfy the world&apos;s most stringent regulatory benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((std, idx) => (
              <div key={idx} className="dark-panel p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#fafafa] px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    {std.code}
                  </span>
                  <FileCheck className="w-4 h-4 text-[#8b8a8a]" />
                </div>
                <h3 className="text-sm font-normal text-[#fafafa] mb-2">{std.title}</h3>
                <p className="text-xs text-[#a7a6a6] leading-relaxed font-normal">{std.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
