'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './product-card';
import ProductModal, { ProductItem } from './product-modal';

const categories = [
  'All Solutions',
  'Intelligent Software',
  'AI Product Development',
  'AI Automation',
  'AI Safety',
  'AI Awareness',
];

export default function ProductGrid({
  products = [],
  title = 'Intelligent Software & AI Products',
  subtitle = 'We develop intelligent software and build practical AI-powered products that solve real-world problems and create meaningful value.',
}: {
  products: ProductItem[];
  title?: string;
  subtitle?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Solutions');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All Solutions' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technology.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 sm:py-28 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="badge-pill mb-4 text-fuchsia-600 dark:text-fuchsia-400">
              Specialties 03 &amp; 04 &bull; Software &amp; Products
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
              {title}
            </h2>
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b] dark:text-[#8b8a8a]" />
            <input
              type="text"
              placeholder="Search solutions & tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 dark:bg-white/[0.04] border border-[#00212b]/15 dark:border-white/[0.1] text-xs text-[#00212b] dark:text-[#fafafa] placeholder-[#64748b] dark:placeholder-[#8b8a8a] focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#00212b] dark:bg-white text-white dark:text-[#00212b] font-semibold shadow-md'
                    : 'bg-white/60 dark:bg-white/[0.03] text-[#475569] dark:text-[#a7a6a6] border border-[#00212b]/10 dark:border-white/[0.06] hover:bg-white dark:hover:bg-white/[0.08] hover:text-[#00212b] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={(prod) => setActiveModalProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 dark-panel">
            <p className="text-sm text-[#475569] dark:text-[#8b8a8a]">
              No solutions found matching &quot;{searchQuery}&quot; in {selectedCategory}.
            </p>
          </div>
        )}

        {/* Interactive Modal */}
        {activeModalProduct && (
          <ProductModal
            product={activeModalProduct}
            onClose={() => setActiveModalProduct(null)}
          />
        )}
      </div>
    </section>
  );
}
