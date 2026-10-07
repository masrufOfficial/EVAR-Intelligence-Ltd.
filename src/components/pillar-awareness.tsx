'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

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
    title: 'Executive AI Governance & Strategic Landscape Masterclass',
    slug: 'executive-ai-governance',
    audience: 'C-Suite, Board Directors, Legal & Risk Officers',
    duration: '2-Day Intensive / 16 Hours',
    format: 'Executive Immersion',
    description:
      'Equip executive leadership with the critical mental models, strategic frameworks, and technical literacy required to navigate enterprise AI transformation responsibly.',
    modules: [
      'The Geopolitics & Frontier Dynamics of Modern AI',
      'Global Regulatory Landscapes & Ethical Standards',
      'Understanding Probabilistic Systems, Hallucinations & Risk',
      'Establishing Enterprise AI Governance & Human Accountability',
    ],
    outcomes: [
      'Formulate defensible corporate AI policy guidelines',
      'Identify unmanaged Shadow-AI vulnerabilities across business units',
      'Establish clear human accountability metrics for automated systems',
    ],
  },
  {
    id: 'prog-2',
    title: 'Modern AI Engineering & Responsible Development Bootcamp',
    slug: 'responsible-ai-engineering',
    audience: 'Lead Architects, Software Engineers, Data Teams',
    duration: '4-Week Hands-On Certification',
    format: 'Technical Laboratory',
    description:
      'A deep-dive technical certification teaching software teams how to architect, test, and deploy foundation models, agent systems, and automated pipelines with safety built-in.',
    modules: [
      'Anatomy of Foundation Models: Capabilities, Limitations & Biases',
      'Implementing Zero-Latency Verification Guardrails',
      'Robustness Testing Pipelines in Continuous Integration',
      'Auditing Agent Memory, Tool Execution & Sandboxing Paradigms',
    ],
    outcomes: [
      'Integrate safety and alignment verifiers into existing software',
      'Deploy deterministic agent tool call validation',
      'Master modern AI engineering best practices',
    ],
  },
  {
    id: 'prog-3',
    title: 'Workforce AI Literacy & Cognitive Empowerment Program',
    slug: 'workforce-ai-literacy',
    audience: 'All Organizational Employees & Knowledge Workers',
    duration: 'Self-Paced Modular (8 Modules)',
    format: 'Interactive Learning Platform',
    description:
      'Demystify generative tools for every employee while embedding instinctual data hygiene, verifying AI outputs, and fostering human-AI collaborative productivity.',
    modules: [
      'Demystifying How AI Works: Capabilities vs. Hallucinations',
      'Data Privacy Hygiene: What Never to Paste into Public AI Services',
      'Prompt Crafting for Precision, Logic Verification & Critical Thinking',
      'Spotting AI-Generated Social Engineering & Deepfake Impersonations',
    ],
    outcomes: [
      '100% elimination of accidental confidential data leaks to public LLMs',
      '40% measured uplift in daily knowledge worker task velocity',
      'Institutional confidence across the evolving AI landscape',
    ],
  },
];

export default function PillarAwareness({ programs = defaultPrograms }: { programs?: AwarenessProgram[] }) {
  return (
    <section id="ai-awareness" className="py-24 sm:py-28 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="badge-pill mb-4 text-violet-600 dark:text-violet-400">
            Specialty 02 &bull; AI Awareness
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
            Promoting Understanding Across The <span className="font-semibold evar-text-gradient">AI Landscape</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
            We promote AI awareness and understanding to help people and organizations navigate
            the evolving AI landscape. Through structured masterclasses, technical bootcamps, and
            workforce literacy programs, we turn ambiguity into strategic mastery.
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
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                    {item.format}
                  </span>
                  <span className="text-xs text-[#64748b] dark:text-[#8b8a8a]">{item.duration}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#00212b] dark:text-[#fafafa] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] dark:text-[#a7a6a6] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-[#00212b]/10 dark:border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#8b8a8a]">
                    Core Syllabus
                  </div>
                  <ul className="space-y-2">
                    {item.modules.slice(0, 3).map((mod, i) => (
                      <li key={i} className="text-xs text-[#334155] dark:text-[#d1d5db] flex items-start space-x-2">
                        <span className="text-cyan-500 shrink-0 mt-0.5">&bull;</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#00212b]/10 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#64748b] dark:text-[#8b8a8a] truncate max-w-[170px]">
                  {item.audience.split(',')[0]}
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center space-x-1"
                >
                  <span>Enroll Program</span>
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
