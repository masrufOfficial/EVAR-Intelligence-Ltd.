'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Globe, ArrowUpRight, Monitor, Layers } from 'lucide-react';
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

  // Dainik Bichitra Bangla returns 404 on vercel domain for now, so default it to demo
  const isUnhostedDefault = product.slug === 'dainik-bichitra-bangla-newsportal';
  const [viewMode, setViewMode] = useState<'live' | 'demo'>(isUnhostedDefault ? 'demo' : 'live');
  const [iframeFailed, setIframeFailed] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // If clicking directly on an anchor or interactive input/button, let native action happen
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button') || target.closest('input')) {
      return;
    }
    if (product.demoUrl) {
      window.open(product.demoUrl, '_blank', 'noopener,noreferrer');
    } else if (onSelect) {
      onSelect(product);
    }
  };

  const proxyUrl = product.demoUrl
    ? `/api/preview-proxy?url=${encodeURIComponent(product.demoUrl)}`
    : null;

  return (
    <div
      onClick={handleCardClick}
      className="dark-panel overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,180,216,0.08)] transition-all duration-300"
    >
      <div>
        {/* Live Scrollable Browser Window */}
        <div className="relative w-full h-56 sm:h-60 bg-[#001015] border-b border-[#00212b]/10 dark:border-white/10 flex flex-col overflow-hidden">
          {/* Top Browser Header Bar */}
          <div className="h-7 bg-[#00171f] border-b border-white/5 flex items-center justify-between px-3 text-[10px] text-[#64748b] dark:text-[#94a3b8] font-mono select-none shrink-0 z-20">
            {/* Window Controls */}
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>

            {/* Live Domain Pill */}
            <div className="flex items-center space-x-1 truncate max-w-[150px] sm:max-w-[170px] text-[#cbd5e1] px-2 py-0.5 rounded bg-black/40 border border-white/10">
              <Globe className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="truncate text-[9.5px] font-mono">{domain || 'evar-preview'}</span>
            </div>

            {/* View Mode Toggle Pill & External Launch */}
            <div className="flex items-center space-x-1.5">
              {product.demoUrl && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode((prev) => (prev === 'live' ? 'demo' : 'live'));
                  }}
                  className="flex items-center space-x-1 px-1.5 py-0.5 rounded bg-black/50 hover:bg-cyan-500/20 text-[8.5px] font-mono text-[#cbd5e1] border border-white/10 transition-colors"
                  title="Toggle between Live Hosted Webpage and Demo Interface"
                >
                  {viewMode === 'live' && !iframeFailed ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Web</span>
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>Demo UI</span>
                    </>
                  )}
                </button>
              )}

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
          </div>

          {/* Interactive Live Scrollable Viewport */}
          <div className="relative flex-1 w-full h-full overflow-y-auto bg-[#00141b] scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
            {viewMode === 'live' && proxyUrl && !iframeFailed ? (
              <iframe
                src={proxyUrl}
                title={`${product.name} Live Webpage`}
                onError={() => setIframeFailed(true)}
                className="w-[142%] h-[142%] origin-top-left scale-[0.704] border-0 pointer-events-auto bg-white/95"
                loading="lazy"
              />
            ) : (
              <ProductPreviewViewport
                slug={product.slug}
                name={product.name}
                demoUrl={product.demoUrl}
              />
            )}

            {/* Subtle Gradient Shadow at bottom of preview */}
            <div className="sticky bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#001015]/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6">
          {/* Category Pill & Live Status */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold uppercase tracking-wider">
              {product.category}
            </span>

            {product.demoUrl && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Host</span>
              </span>
            )}
          </div>

          {/* Exact Product Name */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-bold text-[#00212b] dark:text-[#fafafa] group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#64748b] dark:text-[#8b8a8a] group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
          </div>

          {/* Highlights / Short Description */}
          <p className="text-xs text-[#475569] dark:text-[#94a3b8] line-clamp-2 leading-relaxed mb-4 font-normal">
            {product.shortDescription}
          </p>

          {/* Key Features / Highlights points */}
          <div className="space-y-1 pt-3 border-t border-[#00212b]/10 dark:border-white/[0.06] mb-4">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-[#334155] dark:text-[#cbd5e1] truncate">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Tech Stack & Launch Link */}
      <div className="p-5 sm:p-6 pt-0">
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.technology.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#00212b]/5 dark:bg-white/[0.04] text-[#475569] dark:text-[#a7a6a6] border border-[#00212b]/10 dark:border-white/[0.04]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Launch Hosted Link */}
        <div className="pt-3 border-t border-[#00212b]/10 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
          <span className="group-hover:underline">Launch Hosted Website</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
