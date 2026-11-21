import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FoundersSection from '@/components/founders-section';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const metadata = {
  title: 'Our Leaders & Team | EVAR Intelligence Ltd.',
  description:
    'Meet the visionary founders, executive leaders, and engineering minds shaping EVAR Intelligence Ltd. into an innovation hub for human protection in the age of AI.',
};

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-12 sm:pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center relative">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Executive &bull; Engineering &bull; Operations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-4">
            Our <span className="font-semibold evar-text-gradient">Leaders</span> &amp; Team
          </h1>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
            The visionary founders, engineering architects, and global strategists directing EVAR Intelligence Ltd. toward responsible human protection and practical intelligence.
          </p>
        </div>
      </section>

      {/* Leadership Showcase Section */}
      <FoundersSection />

      {/* Connect with Leadership CTA */}
      <section className="py-14 sm:py-16 border-t border-[#00212b]/10 dark:border-white/[0.06] bg-transparent">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-[#00212b] dark:text-[#fafafa] mb-3">
            Engage With Our <span className="font-semibold evar-text-gradient">Executive Team</span>
          </h2>
          <p className="text-sm text-[#475569] dark:text-[#a7a6a6] max-w-xl mx-auto mb-6 font-normal">
            Whether for research partnerships, international enterprise deployments, or strategic alliances, our leadership welcomes direct collaboration.
          </p>
          <Link
            href="/contact"
            className="pill-btn !py-2.5 !px-6 text-xs font-semibold inline-flex items-center"
          >
            <span>Initiate Direct Dialogue</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
