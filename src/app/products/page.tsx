import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductGrid from '@/components/product-grid';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'AI Products & Solutions | EVAR Intelligence Ltd.',
  description:
    'Explore EVAR Intelligence database-driven AI products: EVAR Sentinel AI, Cognitive Orchestrator, ShieldLens Deepfake Guard, and Neural Enclave.',
};

export default async function ProductsPage() {
  let products: any[] = [];
  try {
    const raw = await prisma.product.findMany({
      where: { status: 'published' },
      orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
    });
    products = raw.map((p) => ({
      ...p,
      features: JSON.parse(p.features || '[]'),
      technology: JSON.parse(p.technology || '[]'),
      gallery: JSON.parse(p.gallery || '[]'),
    }));
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-12 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6">
          Suite &bull; Enterprise Intelligence
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal text-[#fafafa] tracking-tight leading-tight mb-4">
          Intelligent Products for <span className="text-[#a7a6a6]">Frontier Protection</span>
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          Our software products protect organizations from adversarial foundation model exploits,
          synthetic identity deception, and unregulated agent hallucinations.
        </p>
      </section>

      <ProductGrid
        products={products}
        title="Active Enterprise Product Deployments"
        subtitle="Filter by category or search through features, frameworks, and architecture stacks."
      />

      <Footer />
    </div>
  );
}
