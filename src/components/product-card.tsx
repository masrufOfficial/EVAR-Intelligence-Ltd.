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
        <div className="relative w-full h-52 overflow-hidden bg-[#0d0d0d]">
          <Image
            src={product.heroMedia}
            alt={product.name}
            fill
            className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="badge-pill bg-[#050505]/80 backdrop-blur-md">
              {product.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2.5">
            <h3 className="text-lg font-normal text-[#fafafa] group-hover:text-white transition-colors">
              {product.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#8b8a8a] group-hover:text-white transition-colors mt-1" />
          </div>

          <p className="text-xs text-[#a7a6a6] line-clamp-3 leading-relaxed mb-6 font-normal">
            {product.shortDescription}
          </p>

          <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-[#d1d5db]">
                <span className="text-[#8b8a8a]">&bull;</span>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Tags & CTA */}
      <div className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.technology.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-[#8b8a8a] border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="pill-btn w-full !py-2.5 !text-xs font-semibold"
        >
          <span>Examine Solution</span>
        </button>
      </div>
    </div>
  );
}
