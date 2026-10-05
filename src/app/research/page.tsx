import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ResearchShowcase from '@/components/research-showcase';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Research & Innovation | EVAR Intelligence Ltd.',
  description:
    'Peer-reviewed publications, whitepapers, and laboratory initiatives in adversarial machine learning, biometric deepfake forensics, and zero-knowledge neural enclaves.',
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
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6">
          Publications &bull; EVAR Research Laboratories
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal text-[#fafafa] tracking-tight leading-tight mb-4">
          Pioneering Research in <span className="text-[#a7a6a6]">Frontier AI Protection</span>
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          Our researchers publish foundational methodologies that harden autonomous agents,
          neutralize biometric deepfakes, and prove model correctness mathematically.
        </p>
      </section>

      <ResearchShowcase papers={papers.length > 0 ? papers : undefined} />

      <Footer />
    </div>
  );
}
