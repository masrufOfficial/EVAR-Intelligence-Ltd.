'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Cpu,
  Layers,
  Bot,
} from 'lucide-react';

export default function HeroCinematic() {
  const [zoomScale, setZoomScale] = useState(1);

  // Parallax subtle camera zoom based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(1.15, 1 + scrollY * 0.0004);
      setZoomScale(newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full flex flex-col pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Plate: Cinematic Deep #00212b Video & Neon Glow with Scroll-Zoom */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Zoom Wrapper */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `scale(${zoomScale}) translate3d(0, 0, 0)`,
          }}
        >
          <video
            className="absolute left-1/2 top-0 w-full h-full -translate-x-1/2 object-cover opacity-75"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Deep #00212b Dark Overlay Fades */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom,
                rgba(0,33,43,0.3) 0%,
                rgba(0,33,43,0.15) 30%,
                rgba(0,33,43,0.65) 70%,
                rgba(0,33,43,0.94) 88%,
                #00212b 100%),
              linear-gradient(to right,
                #00212b 0%,
                transparent 15%,
                transparent 85%,
                #00212b 100%)
            `,
          }}
        />

        {/* Dark Mode Neon Glow Orbs */}
        <div className="absolute top-1/4 left-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-fuchsia-500/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Typography & Primary Actions */}
      <div className="relative z-10 max-w-4xl">
        {/* Brand Mission Pill */}
        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#002a36]/80 border border-cyan-500/20 text-[10px] sm:text-xs text-cyan-300 font-semibold uppercase tracking-wider mb-4 sm:mb-5 backdrop-blur-md shadow-sm transition-all duration-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span className="truncate">An Innovation Hub For Human Protection In The Age Of AI</span>
        </div>

        {/* Fluid Responsive Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.14] sm:leading-[1.06] mb-4 sm:mb-5 text-[#f8fafc]">
          <span className="block font-normal">Pioneering The Next Layer</span>
          <span className="block font-semibold evar-text-gradient">
            Of Intelligent Innovation
          </span>
        </h1>

        {/* Fluid Responsive Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
          EVAR Intelligence Ltd. builds intelligent solutions for a safer tomorrow. We research and
          engineer human-centered AI across five core disciplines: AI Safety, AI Awareness,
          Intelligent Software, AI Product Development, and AI Automation.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link
            href="#specialties"
            className="pill-btn !py-2.5 sm:!py-3 !px-5 sm:!px-7 text-xs sm:text-sm shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <span>Explore 5 Specialties</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/products"
            className="ghost-btn !py-2.5 sm:!py-3 !px-5 sm:!px-7 text-xs sm:text-sm font-medium transition-all duration-300"
          >
            <span>View Solutions</span>
          </Link>
        </div>

        {/* 5 Specialties Quick Highlights Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 max-w-3xl">
          {[
            { name: 'AI Safety', icon: ShieldCheck, href: '#ai-safety' },
            { name: 'AI Awareness', icon: Sparkles, href: '#ai-awareness' },
            { name: 'Intelligent Software', icon: Cpu, href: '#intelligent-software' },
            { name: 'AI Product Dev', icon: Layers, href: '#ai-product-development' },
            { name: 'AI Automation', icon: Bot, href: '#ai-automation' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#002a36]/60 border border-white/10 hover:border-cyan-500/40 hover:bg-[#003444] transition-all duration-300 text-[11px] sm:text-xs font-medium text-[#cbd5e1] hover:text-cyan-300 shadow-sm backdrop-blur-sm"
            >
              <item.icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
