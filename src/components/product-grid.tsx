'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './product-card';
import ProductModal, { ProductItem } from './product-modal';

const categories = [
  'All Solutions',
  'AI Products',
  'AI Automation',
  'AI Awareness',
  'AI Safety',
  'Research & Innovation',
];

export default function ProductGrid({
  products = [],
  title = 'AI Products & Infrastructure',
  subtitle = 'Frontier defense and cognitive automation systems, architected with shift-left verification.',
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
    <section className="py-28 relative bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="badge-pill mb-4">
              Catalog &bull; Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#fafafa] tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-base text-[#a7a6a6] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#8b8a8a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search solutions & tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-[#050505] shadow-sm'
                  : 'bg-white/[0.02] text-[#8b8a8a] hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id || product.slug}
                product={product}
                onSelect={(prod) => setActiveModalProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 dark-panel p-8">
            <p className="text-sm text-[#8b8a8a]">
              No solutions found matching "{searchQuery}".
            </p>
          </div>
        )}
      </div>

      {/* Deep Inspection Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
}
