'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Megaphone, Globe, Users, Sparkles } from 'lucide-react';

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
    title: '"Human-First AI" Global Awareness Campaign',
    slug: 'human-first-ai-campaign',
    audience: 'Global Public, Civil Society & Digital Communities',
    duration: 'Ongoing Worldwide Movement',
    format: 'Public Awareness Campaign',
    description:
      'A worldwide public movement advocating for human dignity, safety rights, and algorithmic transparency as generative models and autonomous agents integrate into everyday society.',
    modules: [
      'Public Dialogues on Algorithmic Accountability & Ethics',
      'Community Literacy on Synthetic Media & Deepfake Verification',
      'Open-Source Human Protection Charters & Principles',
      'Grassroots Engagement for Digital Sovereignty & Human Agency',
    ],
    outcomes: [
      'Empower 500,000+ citizens with critical AI discernment tools',
      'Mobilize public awareness against unvetted automated decisions',
      'Establish universal expectations for responsible AI transparency',
    ],
  },
  {
    id: 'prog-2',
    title: '"Safe Frontier" Industry Advocacy Initiative',
    slug: 'safe-frontier-advocacy',
    audience: 'Technology Leaders, Enterprise Founders & Policy Shapers',
    duration: 'Active Industry Coalition',
    format: 'Industry Advocacy Initiative',
    description:
      'An industry-wide coalition mobilizing technology creators, enterprise leaders, and policymakers to champion verifiable safety guardrails, ISO 42001 alignment, and responsible deployment before scale.',
    modules: [
      'Demystifying AI Hazards & Systemic Risk Vectors for Decision Makers',
      'Championing Transparent Model Provenance & Verification Standards',
      'Advocating Independent Red-Teaming & Safeguard Pledges',
      'Cross-Sector AI Ethics & Governance Roundtables',
    ],
    outcomes: [
      'Commitment from 180+ technology organizations to verified safety standards',
      'Elimination of unmanaged black-box automated deployments',
      'Cross-industry consensus on verifiable human oversight boundaries',
    ],
  },
  {
    id: 'prog-3',
    title: '"Next-Gen AI Ethics" Youth & Community Drive',
    slug: 'next-gen-ai-ethics',
    audience: 'Students, Young Innovators & Tech Educators',
    duration: 'Academic & Regional Outreach',
    format: 'Community Outreach Drive',
    description:
      'Empowering future technologists, researchers, and student innovators to build AI systems that respect human privacy, uplift human potential, and protect societal welfare.',
    modules: [
      'Critical Thinking in the Generative Synthetic Era',
      'Responsible Innovation & Social Welfare Hack-for-Good Drives',
      'Ethics-by-Design Toolkits for Emerging Creators',
      'Bridging Digital Divides Across Regional Communities',
    ],
    outcomes: [
      'Active advocacy partnerships across 30+ educational institutions',
      'Widespread adoption of ethical AI creation frameworks by students',
      'Creation of grassroots youth task forces for responsible innovation',
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
            Championing Awareness Across The <span className="font-semibold evar-text-gradient">AI Landscape</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
            We promote AI awareness through public campaigns, industry advocacy, and community
            initiatives to help people and organizations navigate the evolving AI landscape.
            Through open forums and collective engagement, we champion human protection and informed adoption.
          </p>
        </div>

        {/* 3 Interactive Campaigns & Initiatives */}
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
                    Campaign Focus Areas
                  </div>
                  <ul className="space-y-2">
                    {item.modules.slice(0, 4).map((mod, i) => (
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
                  <span>Support Campaign</span>
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
