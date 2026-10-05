'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AwarenessProgram {
  id: string;
  title: string;
  slug: string;
  audience: string;
  duration: string;
  format: string;
  description: string;
  modules: string[];
  outcomes: string[];
  isFeatured?: boolean;
}

const defaultPrograms: AwarenessProgram[] = [
  {
    id: 'prog-1',
    title: 'Executive AI Governance & Strategic Risk Masterclass',
    slug: 'executive-ai-governance',
    audience: 'C-Suite, Board Directors, Legal & Risk Officers',
    duration: '2-Day Intensive / 16 Hours',
    format: 'Executive Immersion',
    description:
      'Equip executive leadership with the critical mental models, legal frameworks, and technical literacy required to navigate enterprise AI transformation safely.',
    modules: [
      'The Geopolitics & Frontier Dynamics of Generative AI',
      'EU AI Act, ISO 42001 & Emerging Global Regulatory Frameworks',
      'Adversarial AI Risk: Prompt Injection, Poisoning & Liability',
      'Building an Enterprise AI Safety Board & Shift-Left Governance',
    ],
    outcomes: [
      'Formulate defensible corporate AI policy guidelines',
      'Identify unmanaged Shadow-AI vulnerabilities across business units',
      'Establish clear human accountability metrics for automated systems',
    ],
  },
  {
    id: 'prog-2',
    title: 'Shift-Left AI Engineering & Red-Teaming Bootcamp',
    slug: 'shift-left-ai-engineering',
    audience: 'Lead Architects, Machine Learning Engineers, DevSecOps Teams',
    duration: '4-Week Hands-On Certification',
    format: 'Live Fire Laboratory',
    description:
      'A deep-dive technical certification teaching software teams how to architect, test, and harden foundation models, agent systems, and automated pipelines before production deployment.',
    modules: [
      'Anatomy of Foundation Model Exploits: Indirect Injections',
      'Implementing Zero-Latency Guardrail Architectures',
      'Automated Adversarial Red-Teaming Pipelines in CI/CD',
      'Auditing Agent Memory, Tool Execution & Sandboxing Paradigms',
    ],
    outcomes: [
      'Integrate shift-left security gates into existing ML pipelines',
      'Deploy deterministic agent tool call validation',
      'Achieve EVAR Certified AI Security Practitioner (CASP) credentials',
    ],
  },
  {
    id: 'prog-3',
    title: 'Workforce AI Literacy & Cognitive Empowerment Program',
    slug: 'workforce-ai-literacy',
    audience: 'All Organizational Employees & Knowledge Workers',
    duration: 'Self-Paced Modular (8 Modules)',
    format: 'Micro-Learning Platform',
    description:
      'Demystify generative tools for every employee while embedding instinctual security hygiene, preventing confidential data leaks, and fostering human-AI collaborative productivity.',
    modules: [
      'Demystifying How AI Works: Capabilities vs. Hallucinations',
      'Data Privacy Hygiene: What Never to Paste into Public AI Services',
      'Prompt Crafting for Precision, Logic Verification & Bias Detection',
      'Spotting AI-Generated Social Engineering & Deepfake Impersonations',
    ],
    outcomes: [
      '100% elimination of accidental confidential data leaks to public LLMs',
      '40% measured uplift in daily knowledge worker task velocity',
      'Institutional resilience against AI-powered spear-phishing',
    ],
  },
];

export default function PillarAwareness({ programs = defaultPrograms }: { programs?: AwarenessProgram[] }) {
  return (
    <section className="py-28 relative bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="badge-pill mb-4">
            Pillar 01 &bull; AI Awareness
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#fafafa] tracking-tight leading-tight">
            Human Literacy &amp; Cognitive Defense
          </h2>
          <p className="mt-4 text-base text-[#a7a6a6] leading-relaxed">
            True protection begins with understanding. We demystify frontier intelligence for executives,
            technical engineers, and the broader workforce to cultivate defensive instincts and responsible adoption.
          </p>
        </div>

        {/* 3 Interactive Curriculums */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map((item, index) => (
            <div
              key={item.id || index}
              className="dark-panel p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono text-[#a7a6a6] uppercase tracking-wider">
                    {item.format}
                  </span>
                  <span className="text-xs text-[#8b8a8a]">{item.duration}</span>
                </div>

                <h3 className="text-xl font-normal text-[#fafafa] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#a7a6a6] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8b8a8a]">
                    Core Syllabus
                  </div>
                  <ul className="space-y-2">
                    {item.modules.slice(0, 3).map((mod, i) => (
                      <li key={i} className="text-xs text-[#d1d5db] flex items-start space-x-2">
                        <span className="text-[#8b8a8a] shrink-0 mt-0.5">&bull;</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#8b8a8a] truncate max-w-[160px]">
                  {item.audience.split(',')[0]}
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-[#fafafa] hover:text-white inline-flex items-center space-x-1"
                >
                  <span>Enroll</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
