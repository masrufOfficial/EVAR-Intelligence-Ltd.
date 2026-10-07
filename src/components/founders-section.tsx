'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  Github,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

// Google Scholar Icon SVG
function GoogleScholarIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 12a8 8 0 0 1 7.162 1.44L24 9.5 12 0z" />
    </svg>
  );
}

// ORCID Icon SVG
function OrcidIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.091-2.484 4.091-3.722 0-2.016-1.284-3.722-4.091-3.722h-2.297z" />
    </svg>
  );
}

export default function FoundersSection() {
  const masrufLinks = [
    {
      name: 'Website',
      href: 'https://www.masrufrahman.info/',
      icon: Globe,
      color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10',
    },
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?hl=en&user=NYVFIMkAAAAJ',
      icon: GoogleScholarIcon,
      color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/masrufOfficial',
      icon: Github,
      color: 'hover:text-white hover:border-white/40 hover:bg-white/10',
    },
    {
      name: 'ORCID',
      href: 'https://orcid.org/0009-0006-9990-0616',
      icon: OrcidIcon,
      color: 'hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/masruf-rahman280/',
      icon: Linkedin,
      color: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/masruf.official',
      icon: Facebook,
      color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@MasrufOfficial',
      icon: Youtube,
      color: 'hover:text-red-400 hover:border-red-400/40 hover:bg-red-500/10',
    },
  ];

  const mimLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: Linkedin,
      color: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
      color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10',
    },
    {
      name: 'Direct Contact',
      href: 'mailto:contact@evarintelligence.com',
      icon: Mail,
      color: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-500/10',
    },
    {
      name: 'EVAR Intelligence',
      href: '/contact',
      icon: Globe,
      color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10',
    },
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32 relative bg-transparent border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Founders &bull; Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#f8fafc] tracking-tight leading-[1.12]">
            Founding <span className="font-semibold evar-text-gradient">Leadership</span>
          </h2>

          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#94a3b8] leading-relaxed">
            The visionary leaders shaping EVAR Intelligence Ltd. into an innovation hub for human
            protection in the age of AI.
          </p>
        </div>

        {/* 2-Column Founder Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Founder 1: Masruf Rahman */}
          <div className="dark-panel p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
            {/* Ambient Background Gradient Halo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              {/* Photo Plate with Cinematic Aspect */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-[#00171f] border border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
                <Image
                  src="/images/team/masruf-rahman.jpg"
                  alt="Masruf Rahman - CEO & CTO, Founder"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00212b] via-transparent to-transparent opacity-80" />

                {/* Founder Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-cyan-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Founder</span>
                </div>
              </div>

              {/* Name & Titles */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  Masruf Rahman
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
                    CEO &amp; CTO
                  </span>
                  <span className="text-xs text-white/40">&bull;</span>
                  <span className="text-xs sm:text-sm text-[#cbd5e1] font-medium">
                    Founder of EVAR Intelligence Ltd.
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                Directing technological vision and foundation research across AI Safety, Intelligent
                Software, and autonomous agent systems. Pioneering mathematical safety verifiers and
                human-centered engineering to protect society in the age of AI.
              </p>
            </div>

            {/* Social & Academic Links Grid */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8] mb-3.5">
                Profiles &amp; Research Portfolio
              </div>
              <div className="flex flex-wrap gap-2">
                {masrufLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      className={`inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#cbd5e1] transition-all duration-200 ${item.color}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-40 ml-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Founder 2: Mehbuba Mehrin Mim */}
          <div className="dark-panel p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-fuchsia-500/10">
            {/* Ambient Background Gradient Halo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              {/* Photo Plate with Cinematic Aspect */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-[#00171f] border border-white/10 group-hover:border-fuchsia-500/30 transition-all duration-500">
                <Image
                  src="/images/team/mehbuba-mehrin-mim.png"
                  alt="Mehbuba Mehrin Mim - COO & HR, Founder"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00212b] via-transparent to-transparent opacity-80" />

                {/* Founder Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-fuchsia-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founder</span>
                </div>
              </div>

              {/* Name & Titles */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 group-hover:text-fuchsia-300 transition-colors">
                  Mehbuba Mehrin Mim
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-fuchsia-400 font-mono">
                    COO &amp; HR
                  </span>
                  <span className="text-xs text-white/40">&bull;</span>
                  <span className="text-xs sm:text-sm text-[#cbd5e1] font-medium">
                    Founder of EVAR Intelligence Ltd.
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                Leading strategic operations, human resources, organizational development, and public
                AI awareness initiatives. Championing talent growth, ethical leadership, and empowering
                cross-functional teams to build trustworthy intelligence.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8] mb-3.5">
                Connect &amp; Social Links
              </div>
              <div className="flex flex-wrap gap-2">
                {mimLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#cbd5e1] transition-all duration-200 ${item.color}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
