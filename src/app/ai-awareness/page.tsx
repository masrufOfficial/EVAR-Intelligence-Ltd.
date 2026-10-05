import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PillarAwareness from '@/components/pillar-awareness';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'AI Awareness & Literacy | EVAR Intelligence Ltd.',
  description:
    'Comprehensive AI education, executive governance masterclasses, workforce literacy, and responsible AI adoption frameworks.',
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
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6">
          Pillar 01 &bull; Education &amp; Literacy
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal text-[#fafafa] tracking-tight leading-tight mb-6">
          AI Awareness &amp; <span className="text-[#a7a6a6]">Cognitive Defense</span>
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          In an era of ubiquitous synthetic media and autonomous agents, organizational
          security begins with human comprehension. EVAR bridges the technical knowledge gap with certified
          governance, safety, and literacy programs.
        </p>
      </section>

      <PillarAwareness programs={programs.length > 0 ? programs : undefined} />

      <Footer />
    </div>
  );
}
