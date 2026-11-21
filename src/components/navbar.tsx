'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#00171f]/90 dark:bg-[#00171f]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center space-x-3 group"
          aria-label="EVAR Intelligence Ltd. Home"
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

          {/* 2. Products Direct Page */}
          <Link
            href="/products"
            onClick={(e) => handleNavClick(e, '/products')}
            className={`text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
              pathname === '/products'
                ? 'text-cyan-400 font-semibold'
                : 'text-[#cbd5e1] hover:text-white'
            }`}
          >
            Products
          </Link>

          {/* 3. R&D Direct Page (No Category Menu) */}
          <Link
            href="/research"
            onClick={(e) => handleNavClick(e, '/research')}
            className={`text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
              pathname === '/research'
                ? 'text-cyan-400 font-semibold'
                : 'text-[#cbd5e1] hover:text-white'
            }`}
          >
            R&amp;D
          </Link>

          {/* 4. Leaders Direct Page */}
          <Link
            href="/leadership"
            onClick={(e) => handleNavClick(e, '/leadership')}
            className={`text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
              pathname === '/leadership'
                ? 'text-cyan-400 font-semibold'
                : 'text-[#cbd5e1] hover:text-white'
            }`}
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

        {/* Explore Specialties CTA Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/#specialties"
            onClick={(e) => handleNavClick(e, '/#specialties')}
            className="pill-btn !py-2 !px-5 text-xs font-semibold"
          >
            <span>Explore Specialties</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#00171f]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className={`text-base font-medium py-2 border-b border-white/5 flex items-center justify-between ${
                pathname === '/' && typeof window !== 'undefined' && !window.location.hash
                  ? 'text-cyan-400 font-semibold'
                  : 'text-[#e2e8f0] hover:text-cyan-400'
              }`}
            >
              <span>Home</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 2. Products Direct Link */}
            <Link
              href="/products"
              onClick={(e) => handleNavClick(e, '/products')}
              className={`text-base font-medium py-2 border-b border-white/5 flex items-center justify-between ${
                pathname === '/products' ? 'text-cyan-400 font-semibold' : 'text-[#e2e8f0] hover:text-cyan-400'
              }`}
            >
              <span>Products</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 3. R&D Direct Link */}
            <Link
              href="/research"
              onClick={(e) => handleNavClick(e, '/research')}
              className={`text-base font-medium py-2 border-b border-white/5 flex items-center justify-between ${
                pathname === '/research' ? 'text-cyan-400 font-semibold' : 'text-[#e2e8f0] hover:text-cyan-400'
              }`}
            >
              <span>R&amp;D</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>

            {/* 4. Leaders Direct Link */}
            <Link
              href="/leadership"
              onClick={(e) => handleNavClick(e, '/leadership')}
              className={`text-base font-medium py-2 border-b border-white/5 flex items-center justify-between ${
                pathname === '/leadership' ? 'text-cyan-400 font-semibold' : 'text-[#e2e8f0] hover:text-cyan-400'
              }`}
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
