'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FlaskConical,
  FileText,
  CheckCircle2,
} from 'lucide-react';

// Google Scholar SVG Icon
function GoogleScholarIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 12a8 8 0 0 1 7.162 1.44L24 9.5 12 0z" />
    </svg>
  );
}

// ORCID SVG Icon
function OrcidIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.091-2.484 4.091-3.722 0-2.016-1.284-3.722-4.091-3.722h-2.297z" />
    </svg>
  );
}

interface Researcher {
  id: string;
  name: string;
  image: string;
  specialization: string;
  profile: string;
  works: {
    title: string;
    description: string;
  }[];
  links: {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

// 1. Shisir, 2. Masruf, 3. Mim, 4. Faisal
const researchers: Researcher[] = [
  {
    id: 'shisir',
    name: 'Emdadul Hasan Shishir',
    image: '/images/team/shishir.jpg.jpeg',
    specialization: 'Autonomous Systems & Runtime Verification',
    profile:
      'Researches autonomous agent coordination runtimes, deterministic tool containment, and zero-trust sandbox execution. Leads development on low-latency verification harnesses that isolate execution environments and enforce mathematical invariants across distributed multi-agent systems.',
    works: [
      {
        title: 'Deterministic Multi-Agent Runtime Engine',
        description: 'Low-latency coordination kernel ensuring provable safety bounds during inter-agent tool execution.',
      },
      {
        title: 'Zero-Trust Tool-Gating & Sandbox Framework',
        description: 'Execution isolation boundary neutralizing unauthorized system calls and indirect prompt injection vectors.',
      },
      {
        title: 'Sub-5ms Real-Time Biometric Defense Pipeline',
        description: 'High-speed frequency decomposition system for passive defense against synthetic generative video manipulations.',
      },
      {
        title: 'Autonomous State-Graph Execution Engine',
        description: 'Resilient DAG execution architecture with deterministic state checkpointing and rollback guarantees.',
      },
    ],
    links: [
      { name: 'GitHub', href: 'https://github.com', icon: Github },
      { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
      { name: 'Contact', href: '/contact', icon: Mail },
    ],
  },
  {
    id: 'masruf',
    name: 'Masruf Rahman',
    image: '/images/team/masruf-rahman.jpg',
    specialization: 'Mathematical Alignment & Provable AI Safety',
    profile:
      'Directs foundational research on mathematical alignment guarantees, neural state invariance, and provable safety bounds for autonomous intelligence. Investigates deterministic verification protocols that neutralize adversarial exploitation across multi-modal neural systems.',
    works: [
      {
        title: 'Deterministic Safety Guardrails for Autonomous Collectives',
        description: 'Formal mathematical framework for tool gating and state-graph invariance verification in multi-agent collectives.',
      },
      {
        title: 'Zero-Knowledge Confidential Neural Inference Enclaves',
        description: 'Hardware-attested cryptographic inference combining AMD SEV-SNP enclaves with recursive Halo2 SNARK proofs.',
      },
      {
        title: 'Empirical Red-Teaming & ISO 42001 Alignment Guardrails',
        description: 'Rigorous stress-testing methodologies under out-of-distribution prompts and adversarial prompt permutations.',
      },
      {
        title: 'Foundation Architecture for Human-Centered Safe Intelligence',
        description: 'Theoretical alignment theorems translating ethics and human control invariants into deterministic code.',
      },
    ],
    links: [
      { name: 'Website', href: 'https://www.masrufrahman.info/', icon: Globe },
      { name: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=NYVFIMkAAAAJ', icon: GoogleScholarIcon },
      { name: 'GitHub', href: 'https://github.com/masrufOfficial', icon: Github },
      { name: 'ORCID', href: 'https://orcid.org/0009-0006-9990-0616', icon: OrcidIcon },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/masruf-rahman280/', icon: Linkedin },
    ],
  },
  {
    id: 'mim',
    name: 'Mahbuba Islam Mim',
    image: '/images/team/mehbuba-mehrin-mim.png',
    specialization: 'AI Governance, Human Factors & Societal Impact',
    profile:
      'Investigates human-centered AI governance, societal impact metrics, and public risk awareness frameworks. Specializes in ethical AI literacy, organizational safety pledges, and translating complex mathematical alignment research into actionable policy and educational programs.',
    works: [
      {
        title: 'National AI Literacy & Threat Awareness Benchmarks',
        description: 'Curricula and public awareness frameworks equipping organizations to recognize synthetic media and deceptive AI.',
      },
      {
        title: 'Independent Red-Teaming & Safeguard Pledge Protocols',
        description: 'Institutional framework advocating transparent safety audits, adversarial evaluations, and ethical commitments.',
      },
      {
        title: 'Human-in-the-Loop Governance for High-Stakes Deployments',
        description: 'Organizational review architectures establishing human sign-off boundaries for high-risk autonomous agents.',
      },
      {
        title: 'Societal Impact Assessments for Generative Model Adoption',
        description: 'Methodologies evaluating labor, privacy, and psychological implications of enterprise AI integration.',
      },
    ],
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
      { name: 'Contact', href: '/contact', icon: Mail },
    ],
  },
  {
    id: 'faisal',
    name: 'Faisal Ahmed',
    image: '/images/team/faisal.png',
    specialization: 'Global AI Ecosystems & Technology Transfer',
    profile:
      'Researches international AI safety ecosystems, cross-jurisdictional compliance architectures, and global technology diffusion pathways. Explores macroeconomic models for AI alignment adoption and strategic cross-border technology alliances across sovereign jurisdictions.',
    works: [
      {
        title: 'Global AI Safety Ecosystem & Policy Benchmarks',
        description: 'Cross-jurisdictional comparative framework mapping EU AI Act, ISO/IEC 42001, and NIST AI RMF to production systems.',
      },
      {
        title: 'Cross-Border AI Technology Transfer Framework',
        description: 'Operational protocols for licensing proprietary safety and verification technologies into sovereign cloud environments.',
      },
      {
        title: 'Research-to-Market Technology Diffusion Protocol',
        description: 'Systematic methodology aligning academic mathematical safety theorems with real-world enterprise operational SLAs.',
      },
      {
        title: 'International AI Safety & Red-Teaming Consortium',
        description: 'Multi-regional technical advisory network coordinating ethical AI safety standards and institutional partnerships.',
      },
    ],
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
      { name: 'Contact', href: '/contact', icon: Mail },
    ],
  },
];

export default function RdTeamSection() {
  return (
    <section
      id="rd-team"
      className="py-12 sm:py-16 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>R&amp;D Team &bull; Innovation Labs</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
              Research &amp; Development <span className="font-semibold evar-text-gradient">Team</span>
            </h2>

            <p className="mt-2.5 text-sm sm:text-base text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
              Researchers and systems architects advancing foundational alignment, deterministic runtime verification, and global technological frameworks at EVAR Labs.
            </p>
          </div>
        </div>

        {/* Professional 2x2 Balanced Researcher Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {researchers.map((person) => (
            <div
              key={person.id}
              className="dark-panel p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div>
                {/* Header: Photo + Name + Specialization + Links */}
                <div className="flex items-start space-x-4 sm:space-x-5 mb-5">
                  {/* Portrait Photo */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#001015] border border-[#00212b]/10 dark:border-white/10 shrink-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Name, Specialization & Links */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#00212b] dark:text-white tracking-tight mb-1 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {person.name}
                    </h3>

                    {/* Specialization Domain (No corporate position title) */}
                    <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-3 line-clamp-1">
                      {person.specialization}
                    </div>

                    {/* Academic / Profile Links */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {person.links.map((link, lIdx) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={lIdx}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            title={link.name}
                            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-[#00212b]/10 dark:border-white/10 hover:border-cyan-500/40 text-[11px] font-medium text-[#475569] dark:text-[#cbd5e1] hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{link.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Research Profile Narrative */}
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94a3b8] leading-relaxed mb-5 font-normal">
                  {person.profile}
                </p>

                {/* Key Works & Focus Areas */}
                <div className="pt-4 border-t border-[#00212b]/10 dark:border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#8b8a8a] mb-2.5 flex items-center space-x-1.5">
                    <FileText className="w-3 h-3 text-cyan-500" />
                    <span>Selected Works &bull; Focus Areas</span>
                  </div>
                  <div className="space-y-2">
                    {person.works.map((work, wIdx) => (
                      <div key={wIdx} className="flex items-start space-x-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-[#00212b] dark:text-[#e2e8f0]">
                            {work.title}
                          </span>
                          <span className="text-[#64748b] dark:text-[#94a3b8] ml-1.5 hidden sm:inline">
                            &ndash; {work.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
