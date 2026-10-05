'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] text-[#8b8a8a] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-5 h-7">
                <svg viewBox="0 0 31.5 48.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerMark" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
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
                    fill="url(#footerMark)"
                  />
                  <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
                  <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-widest text-[#fafafa] uppercase">
                EVAR Intelligence
              </span>
            </Link>
            <p className="text-[#a7a6a6] text-xs max-w-sm leading-relaxed font-normal">
              An innovation hub for human protection in the age of AI. Building intelligent solutions
              for a safer tomorrow through shift-left security, workforce literacy, and deterministic autonomous systems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#fafafa] mb-4">
              AI Awareness
            </h4>
            <ul className="space-y-2.5 text-[#8b8a8a]">
              <li><Link href="/ai-awareness" className="hover:text-white transition-colors">Executive Governance</Link></li>
              <li><Link href="/ai-awareness" className="hover:text-white transition-colors">Workforce Literacy</Link></li>
              <li><Link href="/ai-safety" className="hover:text-white transition-colors">Red-Teaming Bootcamp</Link></li>
              <li><Link href="/ai-safety" className="hover:text-white transition-colors">EU AI Act Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#fafafa] mb-4">
              AI Automation
            </h4>
            <ul className="space-y-2.5 text-[#8b8a8a]">
              <li><Link href="/products" className="hover:text-white transition-colors">EVAR Sentinel AI</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Cognitive Orchestrator</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">ShieldLens Guard</Link></li>
              <li><Link href="/ai-automation" className="hover:text-white transition-colors">Autonomous SIEM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#fafafa] mb-4">
              Governance
            </h4>
            <ul className="space-y-2.5 text-[#8b8a8a]">
              <li><Link href="/research" className="hover:text-white transition-colors">Research Labs</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About EVAR</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Inquiries</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors font-medium text-[#fafafa]">Admin Console</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8b8a8a]">
          <div>
            &copy; {new Date().getFullYear()} EVAR Intelligence Ltd. The Next Layer of Intelligence.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer">Shift-Left Security</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Responsible Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
