import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PillarAwareness from '@/components/pillar-awareness';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'AI Awareness & Understanding | EVAR Intelligence Ltd.',
  description:
    'We promote AI awareness and understanding to help people and organizations navigate the evolving AI landscape.',
};

export default async function AIAwarenessPage() {
  let programs: any[] = [];
  try {
    const raw = await prisma.awarenessProgram.findMany({
      orderBy: { createdAt: 'asc' },
    });
    programs = raw.map((p) => ({
      ...p,
      modules: JSON.parse(p.modules || '[]'),
      outcomes: JSON.parse(p.outcomes || '[]'),
    }));
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6 text-violet-600 dark:text-violet-400">
          Specialty 02 &bull; AI Awareness
        </div>

        <h1 className="text-4xl sm:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-6">
          Navigating The <span className="font-semibold evar-text-gradient">AI Landscape</span>
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          We promote AI awareness and understanding to help people and organizations navigate
          the evolving AI landscape. In an era of rapid transformation, clarity and human
          comprehension are the greatest strategic assets.
        </p>
      </section>

      <PillarAwareness programs={programs.length > 0 ? programs : undefined} />

      <Footer />
    </div>
  );
}
