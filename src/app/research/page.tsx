import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import RdTeamSection from '@/components/rd-team-section';
import ResearchShowcase from '@/components/research-showcase';
import { prisma } from '@/lib/prisma';
import { FlaskConical } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Research & Development (R&D) | EVAR Intelligence Ltd.',
  description:
    'Explore the EVAR Labs R&D team, technical research profiles, and peer-reviewed publications across AI safety, mathematical alignment, and autonomous systems.',
};

export default async function ResearchPage() {
  let papers: any[] = [];
  try {
    const raw = await prisma.researchPaper.findMany({
      where: { isPublished: true },
      orderBy: { publicationDate: 'desc' },
    });
    papers = raw.map((p) => ({
      ...p,
      publicationDate: new Date(p.publicationDate).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      }),
    }));
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-12 sm:pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Laboratories &bull; Frontier Science &bull; R&amp;D</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-4">
            Research &amp; <span className="font-semibold evar-text-gradient">Development</span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
            Pioneering hands-on laboratory research, deterministic verification algorithms, and global technological frameworks at EVAR Labs.
          </p>
        </div>
      </section>

      {/* 1. R&D Team First */}
      <RdTeamSection />

      {/* 2. Articles & Publications */}
      <ResearchShowcase papers={papers.length > 0 ? papers : undefined} />

      <Footer />
    </div>
  );
}
