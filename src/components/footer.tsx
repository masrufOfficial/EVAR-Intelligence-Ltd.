'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/[0.08] text-[#94a3b8] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info with Logo Artwork */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block relative">
              <div className="relative h-9 sm:h-10 w-36 flex items-center">
                <Image
                  src="/images/evar-logo-dark.png"
                  alt="EVAR Intelligence"
                  fill
                  sizes="150px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[#94a3b8] text-xs max-w-sm leading-relaxed font-normal">
              An innovation hub for human protection in the age of AI. Building intelligent solutions
              for a safer tomorrow across AI Safety, AI Awareness, Intelligent Software, AI Product
              Development, and AI Automation.
            </p>
          </div>

          {/* Specialties 01 & 02 */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#f8fafc] mb-4 font-semibold">
              Safety &amp; Awareness
            </h4>
            <ul className="space-y-2.5 text-[#94a3b8]">
              <li><Link href="/ai-safety" className="hover:text-cyan-400 transition-colors">AI Safety Research</Link></li>
              <li><Link href="/ai-safety" className="hover:text-cyan-400 transition-colors">Model Alignment</Link></li>
              <li><Link href="/ai-awareness" className="hover:text-cyan-400 transition-colors">Executive Governance</Link></li>
              <li><Link href="/ai-awareness" className="hover:text-cyan-400 transition-colors">Workforce AI Literacy</Link></li>
            </ul>
          </div>

          {/* Specialties 03, 04, 05 */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#f8fafc] mb-4 font-semibold">
              Software &amp; Products
            </h4>
            <ul className="space-y-2.5 text-[#94a3b8]">
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors">Intelligent Software</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors">AI Product Development</Link></li>
              <li><Link href="/ai-automation" className="hover:text-cyan-400 transition-colors">AI Automation Systems</Link></li>
              <li><Link href="/ai-automation" className="hover:text-cyan-400 transition-colors">Autonomous Agents</Link></li>
            </ul>
          </div>

          {/* Governance & Links */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#f8fafc] mb-4 font-semibold">
              Innovation Hub
            </h4>
            <ul className="space-y-2.5 text-[#94a3b8]">
              <li><Link href="/research" className="hover:text-cyan-400 transition-colors">Research Labs</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About EVAR</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Inquiries &amp; Partnerships</Link></li>
              <li>
                <Link href="/admin" className="hover:text-cyan-400 transition-colors text-white font-medium flex items-center space-x-1.5">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>Admin Console</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} EVAR Intelligence Ltd. Human Protection in the Age of AI.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Developer -{' '}
              <a
                href="https://www.masrufrahman.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 font-semibold underline underline-offset-2 decoration-cyan-400/40 hover:decoration-cyan-400 transition-colors"
              >
                Masruf Rahman
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Responsible AI</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer transition-colors">Safety Guidelines</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy &amp; Governance</span>
            <span>&bull;</span>
            <Link href="/admin" className="hover:text-cyan-400 text-[#cbd5e1] transition-colors flex items-center space-x-1 font-medium">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
