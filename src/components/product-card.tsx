'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Globe, ArrowUpRight, ChevronsUpDown } from 'lucide-react';
import { ProductItem } from './product-modal';
import ProductPreviewViewport from './product-preview-viewport';

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

  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    startPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const dx = Math.abs(e.clientX - startPosRef.current.x);
    const dy = Math.abs(e.clientY - startPosRef.current.y);
    if (dx > 7 || dy > 7) {
      isDraggingRef.current = true;
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // If clicking directly on an anchor or interactive button/input, let native action happen
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button') || target.closest('input')) {
      return;
    }
    // If user was scrolling/dragging inside the preview, don't trigger navigation
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
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
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onClick={handleCardClick}
      className="dark-panel overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_12px_32px_rgba(0,180,216,0.12)] transition-all duration-300 rounded-2xl"
    >
      <div>
        {/* Sleek macOS Browser Header & Scrollable Preview Frame */}
        <div className="relative w-full h-48 sm:h-52 md:h-56 bg-[#001015] border-b border-[#00212b]/10 dark:border-white/10 flex flex-col overflow-hidden">
          {/* Top Browser Bar */}
          <div className="h-7 bg-[#00171f] border-b border-white/5 flex items-center justify-between px-3 text-[10px] text-[#64748b] dark:text-[#94a3b8] font-mono select-none shrink-0 z-20">
            {/* Window Controls */}
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>

            {/* Live Domain Pill */}
            <div className="flex items-center space-x-1 truncate max-w-[140px] sm:max-w-[170px] text-[#cbd5e1] px-2 py-0.5 rounded bg-black/50 border border-white/10">
              <Globe className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="truncate text-[9px] sm:text-[10px] font-mono">
                {domain || 'evar-preview'}
              </span>
            </div>

            {/* Scrollable Status & External Launch */}
            <div className="flex items-center space-x-1.5">
              <span className="hidden sm:inline-flex items-center space-x-0.5 text-[8.5px] font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                <ChevronsUpDown className="w-2.5 h-2.5 text-cyan-400" />
                <span>Scroll</span>
              </span>
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
          </div>

          {/* Scrollable Preview Viewport (Touch & Wheel scrollable) */}
          <div
            className="relative flex-1 w-full overflow-y-auto overflow-x-hidden overscroll-contain select-none scrollbar-thin scrollbar-thumb-cyan-500/30 hover:scrollbar-thumb-cyan-400/60 scrollbar-track-transparent bg-[#001015]"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
            }}
          >
            <ProductPreviewViewport
              slug={product.slug}
              name={product.name}
              demoUrl={product.demoUrl}
            />

            {/* Subtle Gradient Shadow & Scroll Hint at Bottom */}
            <div className="sticky bottom-0 inset-x-0 h-5 bg-gradient-to-t from-[#001015] via-[#001015]/80 to-transparent pointer-events-none flex items-end justify-center pb-0.5">
              <span className="text-[7.5px] font-mono text-cyan-400/80 bg-black/70 px-2 py-0.2 rounded-full border border-cyan-500/20 backdrop-blur-xs">
                scroll to explore &darr;
              </span>
            </div>
          </div>
        </div>

        {/* Compact, Highly Disciplined Card Content */}
        <div className="p-4 sm:p-5">
          {/* Category Pill & Live Status */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            {product.demoUrl && (
              <span className="inline-flex items-center space-x-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Host</span>
              </span>
            )}
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
