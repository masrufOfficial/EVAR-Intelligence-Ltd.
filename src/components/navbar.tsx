'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Bot,
  FlaskConical,
  FileText,
  ArrowUpRight,
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rdDropdownOpen, setRdDropdownOpen] = useState(false);
  const [mobileRdOpen, setMobileRdOpen] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const rdItems = [
    {
      name: 'AI Safety & Alignment',
      href: '/#ai-safety',
      icon: ShieldCheck,
      description: 'Mathematical alignment & ISO 42001 guardrails',
    },
    {
      name: 'AI Governance & Ethics',
      href: '/#ai-awareness',
      icon: Sparkles,
      description: 'Executive governance & responsible frameworks',
    },
    {
      name: 'Autonomous Agent Systems',
      href: '/#ai-automation',
      icon: Bot,
      description: 'Multi-agent architectures & workflow robotics',
    },
    {
      name: 'Publications & Whitepapers',
      href: '/#research',
      icon: FileText,
      description: 'Frontier papers, technical briefs & preprints',
    },
  ];

  const triggerSectionHighlight = (targetId: string) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.remove('section-transition-active');
    void el.offsetWidth; // Force DOM reflow to re-trigger animation
    el.classList.add('section-transition-active');

    setTimeout(() => {
      el.classList.remove('section-transition-active');
    }, 2200);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setRdDropdownOpen(false);
    setMobileMenuOpen(false);

    if (href === '/' || href === '#') {
      if (pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      }
      return;
    }

    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.replace('/#', '').replace('#', '');
      if (pathname === '/') {
        e.preventDefault();
        triggerSectionHighlight(targetId);
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  const handleMouseEnterRd = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setRdDropdownOpen(true);
  };

  const handleMouseLeaveRd = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setRdDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const checkHashOnLoad = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const id = window.location.hash.replace('#', '');
        setTimeout(() => triggerSectionHighlight(id), 300);
      }
    };

    window.addEventListener('hashchange', checkHashOnLoad);
    checkHashOnLoad();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', checkHashOnLoad);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#00212b]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-2.5 sm:py-3.5'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with 2nd Image Artwork */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center space-x-3 group relative"
        >
          <div className="relative h-9 sm:h-10 w-32 sm:w-36 flex items-center transition-transform group-hover:scale-[1.02]">
            <Image
              src="/images/evar-logo-dark.png"
              alt="EVAR Intelligence - An innovation hub for human protection in the age of AI"
              fill
              priority
              sizes="150px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Links (1. Home, 2. Products, 3. R&D, 4. Leaders, 5. Contact) */}
        <nav className="hidden lg:flex items-center space-x-7">
          {/* 1. Home */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className={`text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
              pathname === '/' && typeof window !== 'undefined' && !window.location.hash
                ? 'text-cyan-400 font-semibold'
                : 'text-[#cbd5e1] hover:text-white'
            }`}
          >
            Home
          </Link>

          {/* 2. Products */}
          <Link
            href="/#products"
            onClick={(e) => handleNavClick(e, '/#products')}
            className="text-[13px] font-medium text-[#cbd5e1] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Products
          </Link>

          {/* 3. R&D with Rich Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnterRd}
            onMouseLeave={handleMouseLeaveRd}
          >
            <button
              onClick={() => setRdDropdownOpen(!rdDropdownOpen)}
              className="flex items-center space-x-1.5 text-[13px] font-medium text-[#cbd5e1] hover:text-white transition-all duration-200 hover:-translate-y-0.5 py-1"
              aria-expanded={rdDropdownOpen}
            >
              <span>R&amp;D</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-hover:text-cyan-400 ${
                  rdDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-[#94a3b8]'
                }`}
              />
            </button>

            {/* Desktop Dropdown Panel with CSS group-hover & state support */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ease-out ${
                rdDropdownOpen
                  ? 'opacity-100 visible pointer-events-auto translate-y-0'
                  : 'opacity-0 invisible pointer-events-none -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0'
              }`}
            >
              <div className="w-[340px] rounded-2xl bg-[#002834]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-3 divide-y divide-white/[0.06]">
                <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center justify-between">
                  <span>Research &amp; Development</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <div className="pt-2 space-y-1">
                  {rdItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/[0.06] hover:border hover:border-cyan-500/20 transition-all duration-200 group/item"
                    >
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:bg-cyan-500/20 group-hover/item:text-cyan-300 transition-colors mt-0.5 shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white group-hover/item:text-cyan-300 transition-colors flex items-center justify-between">
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-cyan-400" />
                        </div>
                        <div className="text-[11px] text-[#94a3b8] leading-tight mt-0.5 truncate">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Leaders */}
          <Link
            href="/#leadership"
            onClick={(e) => handleNavClick(e, '/#leadership')}
            className="text-[13px] font-medium text-[#cbd5e1] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Leaders
          </Link>

          {/* 5. Contact */}
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="text-[13px] font-medium text-[#cbd5e1] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </nav>

        {/* 6. Explore Specialties as a Button (No Admin in Navbar) */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/#specialties"
            onClick={(e) => handleNavClick(e, '/#specialties')}
            className="pill-btn !py-2.5 !px-5 !text-xs font-semibold shadow-sm hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <span>Explore Specialties</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex justify-center items-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md p-2 text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#00212b]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="text-base font-medium text-[#e2e8f0] hover:text-cyan-400 py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 2. Products */}
            <Link
              href="/#products"
              onClick={(e) => handleNavClick(e, '/#products')}
              className="text-base font-medium text-[#e2e8f0] hover:text-cyan-400 py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Products</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 3. R&D Collapsible Group */}
            <div className="border-b border-white/5 pb-2">
              <button
                onClick={() => setMobileRdOpen(!mobileRdOpen)}
                className="w-full text-base font-medium text-[#e2e8f0] hover:text-cyan-400 py-2 flex items-center justify-between"
              >
                <span>R&amp;D</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileRdOpen ? 'rotate-180 text-cyan-400' : 'opacity-60'
                  }`}
                />
              </button>

              {mobileRdOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1.5 bg-black/20 rounded-xl my-1 border border-white/5">
                  {rdItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center space-x-2.5 py-2 px-2 rounded-lg text-xs font-medium text-[#cbd5e1] hover:text-cyan-300 hover:bg-white/5 transition-colors"
                    >
                      <item.icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Leaders */}
            <Link
              href="/#leadership"
              onClick={(e) => handleNavClick(e, '/#leadership')}
              className="text-base font-medium text-[#e2e8f0] hover:text-cyan-400 py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Leaders</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 5. Contact */}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="text-base font-medium text-[#e2e8f0] hover:text-cyan-400 py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 6. Explore Specialties Button */}
            <div className="pt-4">
              <Link
                href="/#specialties"
                onClick={(e) => handleNavClick(e, '/#specialties')}
                className="pill-btn w-full !py-3 !text-xs font-semibold text-center"
              >
                <span>Explore Specialties</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
