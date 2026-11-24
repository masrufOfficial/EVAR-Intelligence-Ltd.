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
  Code2,
  TrendingUp,
  Cog,
  Briefcase,
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
      href: 'https://www.facebook.com/evarinlelligenceltd',
      icon: Facebook,
      color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10',
    },
    {
      name: 'Direct Contact',
      href: 'mailto:evarintelligenceltd@gmail.com',
      icon: Mail,
      color: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-500/10',
    },
    {
      name: 'EVAR Intelligence',
      href: 'https://www.evarintelligenceltd.com/',
      icon: Globe,
      color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10',
    },
  ];

  const executiveTeam = [
    {
      id: 'shishir',
      name: 'Emdadul Hasan Shishir',
      position: 'Lead Developer',
      badge: 'Engineering',
      badgeIcon: Code2,
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
      haloColor: 'bg-cyan-500/10',
      hoverBorder: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10',
      image: '/images/team/shishir.jpg.jpeg',
      bio: "Directing core full-stack software architecture, scalable AI infrastructure, and real-time execution pipelines. Spearheading engineering operations and reliable infrastructure to bring EVAR's safety and intelligent products to life.",
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/company/evar-intelligence-ltd',
          icon: Linkedin,
          color: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10',
        },
        {
          name: 'GitHub',
          href: 'https://github.com',
          icon: Github,
          color: 'hover:text-white hover:border-white/40 hover:bg-white/10',
        },
        {
          name: 'Direct Contact',
          href: 'mailto:evarintelligenceltd@gmail.com',
          icon: Mail,
          color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10',
        },
      ],
    },
    {
      id: 'foysal',
      name: 'Foysal Ahmed',
      position: 'Technology Business Development Lead',
      badge: 'Tech Business Lead',
      badgeIcon: TrendingUp,
      badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
      haloColor: 'bg-emerald-500/10',
      hoverBorder: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10',
      image: '/images/team/faisal.png',
      bio: "Leading technology business development, strategic industry partnerships, and enterprise client relations. Accelerating EVAR's commercial footprint and forging high-impact technology alliances.",
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/company/evar-intelligence-ltd',
          icon: Linkedin,
          color: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10',
        },
        {
          name: 'Direct Contact',
          href: 'mailto:send.fahmed@gmail.com',
          icon: Mail,
          color: 'hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10',
        },
        {
          name: 'Website',
          href: 'https://www.evarintelligenceltd.com/',
          icon: Globe,
          color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10',
        },
      ],
    },
    {
      id: 'sumon',
      name: 'Shamsuzzaman Sumon',
      position: 'Director of Product Operations',
      badge: 'Product Operations',
      badgeIcon: Cog,
      badgeColor: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
      haloColor: 'bg-amber-500/10',
      hoverBorder: 'hover:border-amber-500/40 hover:shadow-amber-500/10',
      image: '/images/team/sumon.jpeg',
      bio: 'Orchestrating end-to-end product delivery lifecycles, operational infrastructure, and agile deployment excellence. Aligning cross-disciplinary teams to translate innovative AI safety research into robust, market-ready enterprise products.',
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/company/evar-intelligence-ltd',
          icon: Linkedin,
          color: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10',
        },
        {
          name: 'Product Inquiries',
          href: '/contact',
          icon: Briefcase,
          color: 'hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10',
        },
        {
          name: 'Direct Contact',
          href: 'mailto:evarintelligenceltd@gmail.com',
          icon: Mail,
          color: 'hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10',
        },
      ],
    },
  ];

  return (
    <section id="leadership" className="py-12 sm:py-16 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Founders &bull; Leadership &bull; Team</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
            Founding <span className="font-semibold evar-text-gradient">Leadership</span>
          </h2>

          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
            The visionary leaders shaping EVAR Intelligence Ltd. into an innovation hub for human
            protection in the age of AI.
          </p>
        </div>

        {/* 2-Column Founder Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto mb-10 sm:mb-14">
          {/* Founder 1: Masruf Rahman */}
          <div className="dark-panel p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
            {/* Ambient Background Gradient Halo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              {/* Photo Plate with Cinematic Aspect */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-[#00171f] border border-[#00212b]/10 dark:border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
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
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00212b] dark:text-white tracking-tight mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  Masruf Rahman
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                    CEO &amp; CTO
                  </span>
                  <span className="text-xs text-[#94a3b8]">&bull;</span>
                  <span className="text-xs sm:text-sm text-[#475569] dark:text-[#cbd5e1] font-medium">
                    Founder of EVAR Intelligence Ltd.
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94a3b8] leading-relaxed mb-6">
                Directing technological vision and foundation research across AI Safety, Intelligent
                Software, and autonomous agent systems. Pioneering mathematical safety verifiers and
                human-centered engineering to protect society in the age of AI.
              </p>
            </div>

            {/* Social & Academic Links Grid */}
            <div className="pt-6 border-t border-[#00212b]/10 dark:border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] mb-3.5">
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
                      className={`inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#00212b]/10 dark:border-white/10 text-xs text-[#334155] dark:text-[#cbd5e1] transition-all duration-200 ${item.color}`}
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

          {/* Founder 2: Mahbuba Islam Mim */}
          <div className="dark-panel p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-fuchsia-500/10">
            {/* Ambient Background Gradient Halo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              {/* Photo Plate with Cinematic Aspect */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-[#00171f] border border-[#00212b]/10 dark:border-white/10 group-hover:border-fuchsia-500/30 transition-all duration-500">
                <Image
                  src="/images/team/mehbuba-mehrin-mim.png"
                  alt="Mahbuba Islam Mim - COO & HR, Founder"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00212b] dark:text-white tracking-tight mb-1 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-300 transition-colors">
                  Mahbuba Islam Mim
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 font-mono">
                    COO &amp; HR
                  </span>
                  <span className="text-xs text-[#94a3b8]">&bull;</span>
                  <span className="text-xs sm:text-sm text-[#475569] dark:text-[#cbd5e1] font-medium">
                    Founder of EVAR Intelligence Ltd.
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94a3b8] leading-relaxed mb-6">
                Leading strategic operations, human resources, organizational development, and public
                AI awareness initiatives. Championing talent growth, ethical leadership, and empowering
                cross-functional teams to build trustworthy intelligence.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-[#00212b]/10 dark:border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] mb-3.5">
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
                      className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#00212b]/10 dark:border-white/10 text-xs text-[#334155] dark:text-[#cbd5e1] transition-all duration-200 ${item.color}`}
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

        {/* Section 2: Executive & Engineering Leadership Team */}
        <div>
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Leadership &bull; Engineering &bull; Operations</span>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.15]">
              Executive &amp; Technical <span className="font-semibold evar-text-gradient">Team</span>
            </h3>

            <p className="mt-3.5 text-sm sm:text-base text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
              The specialized engineering, strategy, and operations leaders powering EVAR&apos;s intelligent products and global reach.
            </p>
          </div>

          {/* 3-Column Team Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {executiveTeam.map((member) => {
              const BadgeIcon = member.badgeIcon;
              return (
                <div
                  key={member.id}
                  className={`dark-panel p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${member.hoverBorder}`}
                >
                  {/* Ambient Background Glow */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 ${member.haloColor} rounded-full blur-[90px] pointer-events-none`}
                  />

                  <div>
                    {/* Photo Plate */}
                    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-[#00171f] border border-[#00212b]/10 dark:border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.position}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00212b] via-transparent to-transparent opacity-80" />

                      {/* Role Badge */}
                      <div
                        className={`absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border text-[11px] font-semibold ${member.badgeColor}`}
                      >
                        <BadgeIcon className="w-3.5 h-3.5" />
                        <span>{member.badge}</span>
                      </div>
                    </div>

                    {/* Name & Exact Position */}
                    <div className="mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold text-[#00212b] dark:text-white tracking-tight mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h4>
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                          {member.position}
                        </div>
                        <div className="text-[11px] text-[#475569] dark:text-[#cbd5e1] font-medium">
                          EVAR Intelligence Ltd.
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94a3b8] leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Connect / Links */}
                  <div className="pt-5 border-t border-[#00212b]/10 dark:border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8] mb-3">
                      Connect &bull; Profiles
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.links.map((link, lIdx) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={lIdx}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            title={link.name}
                            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#00212b]/10 dark:border-white/10 text-xs text-[#334155] dark:text-[#cbd5e1] transition-all duration-200 ${link.color}`}
                          >
                            <Icon className="w-3.5 h-3.5 shrink-0" />
                            <span className="font-medium text-[11px]">{link.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
