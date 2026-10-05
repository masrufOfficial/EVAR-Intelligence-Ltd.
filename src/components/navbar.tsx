'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Lock, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'AI Awareness', href: '/ai-awareness' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'Products', href: '/products' },
    { name: 'AI Safety', href: '/ai-safety' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Group */}
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Geometric Bolt Mark SVG from design.txt */}
          <div className="w-6 h-9 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 31.5 48.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="navMarkGrad" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#9e9e9e" />
                  <stop offset="0.28" stopColor="#a6a6a6" />
                  <stop offset="0.34" stopColor="#a3a3a3" />
                  <stop offset="0.40" stopColor="#3a3a3a" />
                  <stop offset="0.55" stopColor="#414141" />
                  <stop offset="0.60" stopColor="#7a7a7a" />
                  <stop offset="0.68" stopColor="#8e8e8e" />
                  <stop offset="0.80" stopColor="#a9a9a9" />
                  <stop offset="0.95" stopColor="#c4c4c4" />
                  <stop offset="1" stopColor="#cccccc" />
                </linearGradient>
              </defs>
              <path
                d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z"
                fill="url(#navMarkGrad)"
              />
              <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
              <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
            </svg>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-3">
            <span className="text-xs font-bold tracking-widest text-[#fafafa] uppercase">
              EVAR
            </span>
            <span className="text-[9px] text-[#8b8a8a] tracking-wider uppercase font-medium">
              Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (design.txt style) */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-normal transition-colors duration-150 ${
                  isActive ? 'text-[#fafafa]' : 'text-[#b6b5b5] hover:text-[#fafafa]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Group */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/admin"
            className="text-xs text-[#a7a6a6] hover:text-white transition-colors flex items-center space-x-1"
          >
            <Lock className="w-3 h-3" />
            <span>Admin</span>
          </Link>

          <Link
            href="/products"
            className="pill-btn !py-2.5 !px-5 !text-xs font-semibold"
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md p-2 gap-1.5"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-4 h-[1.5px] bg-[#fafafa] transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-y-[4.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-4 h-[1.5px] bg-[#fafafa] transition-transform duration-300 ${
              mobileMenuOpen ? '-translate-y-[4.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#050505]/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between z-40 border-t border-white/[0.08]">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-widest text-[#a7a6a6] font-semibold">
              Navigation
            </p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-normal text-[#fafafa] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#8b8a8a]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="pill-btn w-full text-center"
            >
              Explore Solutions
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="ghost-btn w-full text-center"
            >
              Admin Console
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
