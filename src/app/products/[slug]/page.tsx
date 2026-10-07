import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return { title: 'Product Not Found | EVAR Intelligence Ltd.' };

  return {
    title: `${product.name} | EVAR Intelligence Ltd.`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) {
    notFound();
  }

  const features: string[] = JSON.parse(product.features || '[]');
  const technology: string[] = JSON.parse(product.technology || '[]');

  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />

      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-8 w-full">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center space-x-1.5 text-xs text-[#8b8a8a] hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Product Catalog</span>
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="badge-pill">
            {product.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-normal text-[#fafafa] tracking-tight leading-tight mb-4">
          {product.name}
        </h1>

        <p className="text-base text-[#a7a6a6] leading-relaxed mb-8 font-normal">
          {product.shortDescription}
        </p>

        {/* Hero Visual */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-12 border border-white/[0.08]">
          <Image
            src={product.heroMedia}
            alt={product.name}
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="dark-panel p-6">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#a7a6a6] mb-2">
              The Security Challenge
            </div>
            <p className="text-xs text-[#d1d5db] leading-relaxed">
              {product.problem}
            </p>
          </div>

          <div className="dark-panel p-6">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#fafafa] mb-2">
              The EVAR Solution
            </div>
            <p className="text-xs text-[#d1d5db] leading-relaxed">
              {product.solution}
            </p>
          </div>
        </div>

        {/* Full Architectural Description */}
        <div className="dark-panel p-8 mb-12 space-y-3">
          <h2 className="text-lg font-normal text-[#fafafa]">Architecture &amp; Design Overview</h2>
          <p className="text-xs sm:text-sm text-[#a7a6a6] leading-relaxed whitespace-pre-line font-normal">
            {product.fullDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-lg font-normal text-[#fafafa] mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#fafafa] flex items-center space-x-2"
              >
                <span className="text-[#8b8a8a]">&bull;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-lg font-normal text-[#fafafa] mb-3">Foundation Technology</h2>
          <div className="flex flex-wrap gap-2">
            {technology.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#8b8a8a]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="dark-panel p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-normal text-[#fafafa]">
              Evaluate {product.name}
            </h3>
            <p className="text-xs text-[#a7a6a6] mt-1 font-normal">
              Contact our engineering team for deployment specifications or a live proof-of-concept.
            </p>
          </div>
          <Link
            href="/contact"
            className="pill-btn !py-2.5 !px-6 !text-xs shrink-0 font-semibold"
          >
            <span>{product.ctaText || 'Request Access'}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
