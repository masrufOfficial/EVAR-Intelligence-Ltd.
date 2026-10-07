'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technology: string[];
  heroMedia: string;
  gallery?: string[];
  status?: string;
  isFeatured?: boolean;
  ctaText?: string;
}

export default function ProductModal({
  product,
  onClose,
}: {
  product: ProductItem | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#002a36] border border-[#00212b]/15 dark:border-white/[0.12] rounded-3xl shadow-2xl p-6 sm:p-10 text-left text-[#00212b] dark:text-[#fafafa]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/[0.05] text-[#64748b] dark:text-[#8b8a8a] hover:text-[#00212b] dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/[0.1] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-pill">
            {product.category}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-[#00212b] dark:text-[#fafafa] mb-3">
          {product.name}
        </h2>
        <p className="text-sm text-[#475569] dark:text-[#a7a6a6] leading-relaxed mb-8 font-normal">
          {product.shortDescription}
        </p>

        {/* Hero Media Preview */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8 border border-[#00212b]/10 dark:border-white/[0.08]">
          <Image
            src={product.heroMedia}
            alt={product.name}
            fill
            className="object-cover opacity-90"
          />
        </div>

        {/* Problem vs Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[#00212b]/[0.03] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748b] dark:text-[#a7a6a6] mb-2 font-semibold">
              The Real-World Challenge
            </div>
            <p className="text-xs text-[#334155] dark:text-[#d1d5db] leading-relaxed">{product.problem}</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#00212b]/[0.03] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
              The EVAR Intelligent Solution
            </div>
            <p className="text-xs text-[#334155] dark:text-[#d1d5db] leading-relaxed">{product.solution}</p>
          </div>
        </div>

        {/* Detailed Full Description */}
        <div className="mb-8">
          <h4 className="text-[10px] uppercase font-mono tracking-wider text-[#64748b] dark:text-[#8b8a8a] mb-2 font-semibold">
            Technical Architecture
          </h4>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#a7a6a6] leading-relaxed font-normal">
            {product.fullDescription}
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-8">
          <h4 className="text-[10px] uppercase font-mono tracking-wider text-[#64748b] dark:text-[#8b8a8a] mb-3 font-semibold">
            Core Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.06] text-xs text-[#1e293b] dark:text-[#fafafa]"
              >
                <span className="text-cyan-500">&bull;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-8">
          <h4 className="text-[10px] uppercase font-mono tracking-wider text-[#64748b] dark:text-[#8b8a8a] mb-2.5 font-semibold">
            Foundation Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.technology.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#00212b]/5 dark:bg-white/[0.03] border border-[#00212b]/10 dark:border-white/[0.08] text-[#475569] dark:text-[#8b8a8a] text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-6 border-t border-[#00212b]/10 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline flex items-center space-x-1 font-semibold"
          >
            <span>View Dedicated Page</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </Link>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="ghost-btn !py-2.5 !px-5 !text-xs font-semibold"
            >
              Close
            </button>
            <Link
              href="/contact"
              className="pill-btn !py-2.5 !px-6 !text-xs font-semibold"
            >
              <span>{product.ctaText || 'Request Access'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
