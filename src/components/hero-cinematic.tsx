'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroCinematic() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-between pt-36 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Plate with CloudFront Video & Exact Fade Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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

        {/* Dual Edge and Bottom Fades matching design.txt */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom,
                rgba(5,5,5,0.2) 0%,
                rgba(5,5,5,0) 45%,
                rgba(5,5,5,0.45) 75%,
                rgba(5,5,5,0.85) 90%,
                #050505 100%),
              linear-gradient(to right,
                #050505 0%,
                transparent 15%,
                transparent 85%,
                #050505 100%)
            `,
          }}
        />
      </div>

      {/* Hero Typography & Primary Actions */}
      <div className="relative z-10 max-w-3xl my-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#a7a6a6] font-medium uppercase tracking-wider mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#fafafa]" />
          <span>Shift-Left Security & AI Infrastructure</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#fafafa] tracking-tight leading-[1.08] mb-6">
          <span className="block">The Next Layer</span>
          <span className="block text-[#a7a6a6]">of Human Protection</span>
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] leading-relaxed max-w-xl mb-10 font-normal">
          A unified infrastructure platform to help teams build, ship, and scale AI systems with
          confidence. Designed with human responsibility and shift-left defense at the center.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Link href="/products" className="pill-btn !py-3.5 !px-8 text-sm">
            <span>Explore Solutions</span>
          </Link>
          <Link href="#architecture" className="ghost-link text-sm">
            View Architecture &rarr;
          </Link>
        </div>
      </div>

      {/* Partner Trust Strip */}
      <div className="relative z-10 pt-16 border-t border-white/[0.06] mt-12">
        <div className="flex flex-wrap items-center justify-between gap-6 text-[#8b8a8a]">
          {/* LG1 */}
          <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mHero1" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                <rect width="30" height="31" rx="4.5" fill="#ffffff" />
                <circle cx="19.5" cy="10.5" r="5.1" fill="#000000" />
              </mask>
              <rect width="30" height="31" rx="4.5" fill="currentColor" mask="url(#mHero1)" />
              <circle cx="19.5" cy="10.5" r="2.8" fill="currentColor" />
            </svg>
            <span className="text-sm font-bold tracking-tight">logoipsum</span>
          </div>

          {/* LG2 */}
          <div className="flex items-center space-x-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-6" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="6.8" height="30" rx="3.4" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C12.5 22 15 19.5 15 12.5C15 5.5 12.5 3 12.5 0Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-bold tracking-tight">
              logoipsum<span className="inline-block w-1.5 h-1.5 rounded-full bg-current align-top ml-0.5" />
            </span>
          </div>

          {/* LG3 */}
          <div className="flex items-center space-x-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="12.35" stroke="currentColor" strokeWidth="3.1" />
              <path d="M7 14C7 10.134 10.134 7 14 7" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" />
              <path d="M21 14C21 17.866 17.866 21 14 21" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-bold tracking-tight">logoipsum</span>
          </div>

          {/* LG4 */}
          <div className="flex items-center space-x-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-5" viewBox="0 0 28 25.5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11.5C6 6.5 10 6.5 14 11.5C18 16.5 22 16.5 26 11.5V6.5C22 11.5 18 11.5 14 6.5C10 1.5 6 1.5 2 6.5V11.5Z" fill="currentColor" />
              <path d="M2 17C6 12 10 12 14 17C18 22 22 22 26 17" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
              <path d="M2 22.5C6 17.5 10 17.5 14 22.5C18 27.5 22 27.5 26 22.5" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-bold tracking-tight">logoipsum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
