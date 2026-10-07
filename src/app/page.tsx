import React from 'react';
import Navbar from '@/components/navbar';
import HeroCinematic from '@/components/hero-cinematic';
import SpecialtiesSection from '@/components/specialties-section';
import SafetySection from '@/components/safety-section';
import PillarAwareness from '@/components/pillar-awareness';
import ProductGrid from '@/components/product-grid';
import PillarAutomation from '@/components/pillar-automation';
import ResearchShowcase from '@/components/research-showcase';
import FoundersSection from '@/components/founders-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
  description:
    'Researching and developing solutions across 5 core specialties: AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
};

export default async function HomePage() {
  // Fetch database-driven products and content
  let products: any[] = [];
  let awarenessPrograms: any[] = [];
  let automationWorkflows: any[] = [];
  let researchPapers: any[] = [];

  try {
    const rawProducts = await prisma.product.findMany({
      where: { status: 'published' },
      orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
    });

    products = rawProducts.map((p) => ({
      ...p,
      features: JSON.parse(p.features || '[]'),
      technology: JSON.parse(p.technology || '[]'),
      gallery: JSON.parse(p.gallery || '[]'),
    }));

    const rawPrograms = await prisma.awarenessProgram.findMany({
      orderBy: { createdAt: 'asc' },
    });

    awarenessPrograms = rawPrograms.map((pr) => ({
      ...pr,
      modules: JSON.parse(pr.modules || '[]'),
      outcomes: JSON.parse(pr.outcomes || '[]'),
    }));

    const rawWorkflows = await prisma.automationWorkflow.findMany({
      orderBy: { createdAt: 'asc' },
    });

    automationWorkflows = rawWorkflows.map((w) => ({
      ...w,
      agentsDeployed: JSON.parse(w.agentsDeployed || '[]'),
    }));

    const rawPapers = await prisma.researchPaper.findMany({
      where: { isPublished: true },
      orderBy: { publicationDate: 'desc' },
    });

    researchPapers = rawPapers.map((rp) => ({
      ...rp,
      publicationDate: new Date(rp.publicationDate).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      }),
    }));
  } catch (error) {
    console.error('Failed to load initial database content:', error);
  }

  return (
    <div className="w-full min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col antialiased">
      <Navbar />
      <HeroCinematic />
      <SpecialtiesSection />
      <SafetySection />
      <PillarAwareness programs={awarenessPrograms.length > 0 ? awarenessPrograms : undefined} />
      <ProductGrid products={products} />
      <PillarAutomation workflows={automationWorkflows.length > 0 ? automationWorkflows : undefined} />
      <ResearchShowcase papers={researchPapers.length > 0 ? researchPapers : undefined} />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
