'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Globe, ArrowUpRight } from 'lucide-react';
import { ProductItem } from './product-modal';

function cleanDomain(url?: string | null) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace('www.', '');
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0];
  }
}

export default function ProductCard({
  product,
  onSelect,
}: {
  product: ProductItem;
  onSelect?: (product: ProductItem) => void;
}) {
  const targetUrl = product.demoUrl || `/products/${product.slug}`;
  const isExternal = Boolean(product.demoUrl);
  const domain = cleanDomain(product.demoUrl);

  const handleCardClick = (e: React.MouseEvent) => {
    // If clicking directly on an anchor or button, let native link action happen
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    if (product.demoUrl) {
      window.open(product.demoUrl, '_blank', 'noopener,noreferrer');
    } else if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="dark-panel overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_12px_32px_rgba(0,180,216,0.12)] transition-all duration-300 rounded-2xl"
    >
      <div>
        {/* Sleek macOS Browser Header & Preview Frame */}
        <div className="relative w-full h-40 sm:h-44 md:h-48 bg-[#001015] border-b border-[#00212b]/10 dark:border-white/10 flex flex-col overflow-hidden">
          {/* Top Browser Bar */}
          <div className="h-6 sm:h-7 bg-[#00171f] border-b border-white/5 flex items-center justify-between px-3 text-[10px] text-[#64748b] dark:text-[#94a3b8] font-mono select-none shrink-0 z-20">
            {/* Window Controls */}
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>

            {/* Live Domain Pill */}
            <div className="flex items-center space-x-1 truncate max-w-[150px] sm:max-w-[180px] text-[#cbd5e1] px-2 py-0.5 rounded bg-black/50 border border-white/10">
              <Globe className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="truncate text-[9px] sm:text-[10px] font-mono">
                {domain || 'evar-preview'}
              </span>
            </div>

            {/* Launch External Link Button */}
            <a
              href={targetUrl}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              onClick={(e) => e.stopPropagation()}
              title="Open hosted live site in new tab"
              className="p-1 text-[#94a3b8] hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Real High-Resolution Interface Visual (No Client Hydration Exceptions) */}
          <div className="relative flex-1 w-full h-full overflow-hidden bg-[#00141b]">
            <Image
              src={product.heroMedia}
              alt={`${product.name} Interface View`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
              priority={product.isFeatured}
            />

            {/* Hover Quick Action Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00171f] via-[#00171f]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Live Status Pill badge on top of visual */}
            <div className="absolute bottom-2 left-2.5 flex items-center space-x-1.5">
              <span className="inline-flex items-center space-x-1 text-[8.5px] font-mono text-emerald-300 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-500/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Deployment</span>
              </span>
            </div>

            {/* Top Right Quick Launch Indicator */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[8.5px] font-mono text-cyan-300 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded-md border border-cyan-500/30 flex items-center space-x-1">
                <span>Open Live</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Compact, Highly Disciplined Card Content */}
        <div className="p-4 sm:p-5">
          {/* Category Pill */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <span className="text-[10px] text-[#64748b] dark:text-[#8b8a8a] font-mono">
              Production
            </span>
          </div>

          {/* Product Name */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-sm sm:text-base font-bold text-[#00212b] dark:text-[#fafafa] group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#64748b] dark:text-[#8b8a8a] group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
          </div>

          {/* Highlights / Short Description */}
          <p className="text-[11px] sm:text-xs text-[#475569] dark:text-[#94a3b8] line-clamp-2 leading-relaxed mb-3 font-normal">
            {product.shortDescription}
          </p>

          {/* Key Feature Bullet Points */}
          <div className="space-y-1 pt-2.5 border-t border-[#00212b]/10 dark:border-white/[0.06] mb-3">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] text-[#334155] dark:text-[#cbd5e1] truncate"
              >
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Compact Technology Badges & Launch CTA */}
      <div className="p-4 sm:p-5 pt-0">
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.technology.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#00212b]/5 dark:bg-white/[0.04] text-[#475569] dark:text-[#a7a6a6] border border-[#00212b]/10 dark:border-white/[0.04]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Launch Hosted Link */}
        <div className="pt-2.5 border-t border-[#00212b]/10 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">
          <span className="group-hover:underline">Launch Hosted Website</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
