import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductGrid from '@/components/product-grid';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Intelligent Software & AI Products | EVAR Intelligence Ltd.',
  description:
    'We develop intelligent software that combines modern engineering with AI-driven capabilities and build practical AI-powered products that solve real-world problems.',
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
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />

      <section className="pt-36 pb-12 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6 text-fuchsia-600 dark:text-fuchsia-400">
          Specialties 03 &amp; 04 &bull; Software &amp; Products
        </div>

        <h1 className="text-4xl sm:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-4">
          Intelligent Software &amp; <span className="font-semibold evar-text-gradient">AI Products</span>
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          We combine modern engineering with AI-driven capabilities to build practical
          AI-powered products that solve real-world problems and create meaningful value.
        </p>
      </section>

      <ProductGrid
        products={products}
        title="Active Solutions & Deployments"
        subtitle="Filter by category or search through features, frameworks, and architecture stacks."
      />

      <Footer />
    </div>
  );
}
