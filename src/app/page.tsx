import React from 'react';
import Navbar from '@/components/navbar';
import HeroCinematic from '@/components/hero-cinematic';
import PillarAwareness from '@/components/pillar-awareness';
import PillarAutomation from '@/components/pillar-automation';
import ProductGrid from '@/components/product-grid';
import SafetySection from '@/components/safety-section';
import ResearchShowcase from '@/components/research-showcase';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'The Next Layer of Intelligence | EVAR Intelligence Ltd.',
  description:
    'A unified infrastructure platform to help teams build, ship, and scale AI systems with confidence. Human protection in the age of AI.',
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
    <div className="w-full min-h-screen bg-[#050505] text-[#fafafa] flex flex-col antialiased">
      <Navbar />
      <HeroCinematic />
      <PillarAwareness programs={awarenessPrograms.length > 0 ? awarenessPrograms : undefined} />
      <PillarAutomation workflows={automationWorkflows.length > 0 ? automationWorkflows : undefined} />
      <ProductGrid products={products} />
      <SafetySection />
      <ResearchShowcase papers={researchPapers.length > 0 ? researchPapers : undefined} />
      <ContactSection />
      <Footer />
    </div>
  );
}
