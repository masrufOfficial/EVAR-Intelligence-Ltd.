'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Globe, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/[0.08] text-[#94a3b8] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Main Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
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

            {/* Social Channels */}
            <div className="flex items-center space-x-2 pt-1">
              <a
                href="https://www.facebook.com/evarinlelligenceltd"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 flex items-center justify-center text-[#94a3b8] hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/evar-intelligence-ltd"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 flex items-center justify-center text-[#94a3b8] hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.evarintelligenceltd.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Official Website"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 flex items-center justify-center text-[#94a3b8] hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links: 2-column layout on mobile, 3 columns on tablet/desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:col-span-3">
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
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#f8fafc] mb-4 font-semibold">
                Innovation Hub
              </h4>
              <ul className="space-y-2.5 text-[#94a3b8]">
                <li><Link href="/research" className="hover:text-cyan-400 transition-colors">Research Labs (R&amp;D)</Link></li>
                <li><Link href="/leadership" className="hover:text-cyan-400 transition-colors">Our Leaders &amp; Team</Link></li>
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About EVAR</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Inquiries &amp; Partnerships</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-Length Enterprise Contact & Meta Strip */}
        <div className="my-10 py-3.5 px-5 sm:px-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-[#94a3b8]">
          {/* Location */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[#64748b] font-mono text-[10px] uppercase">Location:</span>
            <span className="text-white font-medium">Dhaka, Bangladesh</span>
          </div>

          <div className="hidden lg:block w-px h-3.5 bg-white/10" />

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[#64748b] font-mono text-[10px] uppercase">Email:</span>
            <a
              href="mailto:evarintelligenceltd@gmail.com"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
            >
              evarintelligenceltd@gmail.com
            </a>
          </div>

          <div className="hidden lg:block w-px h-3.5 bg-white/10" />

          {/* Contact Number (single, clean international format) */}
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[#64748b] font-mono text-[10px] uppercase">Contact:</span>
            <a
              href="tel:+8801827459921"
              className="text-white hover:text-cyan-400 font-medium font-mono transition-colors"
            >
              +880 1827-459921
            </a>
          </div>

          <div className="hidden lg:block w-px h-3.5 bg-white/10" />

          {/* Website */}
          <div className="flex items-center space-x-2">
            <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[#64748b] font-mono text-[10px] uppercase">Website:</span>
            <a
              href="https://www.evarintelligenceltd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
            >
              www.evarintelligenceltd.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
