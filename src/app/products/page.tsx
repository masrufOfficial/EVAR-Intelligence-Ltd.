import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductGrid from '@/components/product-grid';
import { getVerifiedProducts } from '@/lib/products-data';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Intelligent Software & AI Products | EVAR Intelligence Ltd.',
  description:
    'We develop intelligent software that combines modern engineering with AI-driven capabilities and build practical AI-powered products that solve real-world problems.',
};

export default async function ProductsPage() {
  const products = await getVerifiedProducts();

  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />

      <section className="pt-28 pb-6 sm:pt-36 sm:pb-12 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="badge-pill mb-4 text-fuchsia-600 dark:text-fuchsia-400">
          Specialties 03 &amp; 04 &bull; Software &amp; Products
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-3">
          Intelligent Software &amp; <span className="font-semibold evar-text-gradient">AI Products</span>
        </h1>

        <p className="text-xs sm:text-base text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
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
