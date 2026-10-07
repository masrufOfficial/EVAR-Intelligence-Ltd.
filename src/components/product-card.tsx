'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ProductItem } from './product-modal';

export default function ProductCard({
  product,
  onSelect,
}: {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="dark-panel overflow-hidden cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Media Preview */}
        <div className="relative w-full h-52 overflow-hidden bg-slate-900">
          <Image
            src={product.heroMedia}
            alt={product.name}
            fill
            className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00212b] dark:from-[#00212b] via-[#00212b]/40 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="badge-pill bg-[#00212b]/80 text-white backdrop-blur-md border border-white/20">
              {product.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2.5">
            <h3 className="text-lg font-semibold text-[#00212b] dark:text-[#fafafa] group-hover:text-cyan-500 transition-colors">
              {product.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#64748b] dark:text-[#8b8a8a] group-hover:text-cyan-500 transition-colors mt-1" />
          </div>

          <p className="text-xs text-[#475569] dark:text-[#a7a6a6] line-clamp-3 leading-relaxed mb-6 font-normal">
            {product.shortDescription}
          </p>

          <div className="space-y-1.5 pt-4 border-t border-[#00212b]/10 dark:border-white/[0.06]">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-[#334155] dark:text-[#d1d5db]">
                <span className="text-cyan-500">&bull;</span>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.technology.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#00212b]/5 dark:bg-white/[0.04] text-[#475569] dark:text-[#a7a6a6] border border-[#00212b]/10 dark:border-white/[0.04]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-[#00212b]/10 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
          <span>View Specs &amp; Architecture</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
