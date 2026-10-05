'use client';

import React, { useState, useEffect } from 'react';
import {
  Package,
  Plus,
  Trash2,
  Edit,
  Eye,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';

interface ProductRecord {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  status: string;
  isFeatured: boolean;
  ctaText: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // New product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    slug: '',
    category: 'AI Products',
    shortDescription: '',
    fullDescription: '',
    problem: '',
    solution: '',
    featuresText: 'Sub-5ms Latency\nAdversarial Guard\nAudit Provenance',
    technologyText: 'Rust\nTypeScript\nTensorRT',
    heroMedia: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    isFeatured: false,
    ctaText: 'Explore Solution',
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products?status=all');
      // If status=all not implemented, fetch default
      const resPub = await fetch('/api/products');
      const data = await resPub.json();
      if (data.products) setProducts(data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionMessage(null);

    try {
      const payload = {
        name: newProduct.name,
        slug: newProduct.slug,
        category: newProduct.category,
        shortDescription: newProduct.shortDescription,
        fullDescription: newProduct.fullDescription || newProduct.shortDescription,
        problem: newProduct.problem,
        solution: newProduct.solution,
        features: newProduct.featuresText.split('\n').filter((f) => f.trim().length > 0),
        technology: newProduct.technologyText.split('\n').filter((t) => t.trim().length > 0),
        heroMedia: newProduct.heroMedia,
        status: newProduct.status,
        isFeatured: newProduct.isFeatured,
        ctaText: newProduct.ctaText,
      };

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create product');
      }

      setActionMessage({ type: 'success', text: `Product "${newProduct.name}" created successfully and audited.` });
      setModalOpen(false);
      // Reset form
      setNewProduct({
        name: '',
        slug: '',
        category: 'AI Products',
        shortDescription: '',
        fullDescription: '',
        problem: '',
        solution: '',
        featuresText: 'Sub-5ms Latency\nAdversarial Guard\nAudit Provenance',
        technologyText: 'Rust\nTypeScript\nTensorRT',
        heroMedia: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
        status: 'published',
        isFeatured: false,
        ctaText: 'Explore Solution',
      });
      fetchProducts();
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message });
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to permanently delete product "${name}"? Server RBAC will verify your authorization.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete');
      }

      setActionMessage({ type: 'success', text: `Product "${name}" deleted successfully.` });
      fetchProducts();
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message });
    }
  };

  const handleTogglePublish = async (prod: ProductRecord) => {
    const newStatus = prod.status === 'published' ? 'draft' : 'published';
    try {
      const res = await fetch(`/api/products/${prod.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');

      setActionMessage({ type: 'success', text: `Status updated to ${newStatus}.` });
      fetchProducts();
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message });
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Database Product Catalog</h2>
          <p className="text-xs text-slate-500">
            Database-driven product management. Server RBAC enforced: Super Admin & Admin can delete; Editors can create & edit.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center space-x-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Product Solution</span>
        </button>
      </div>

      {/* Action Notice */}
      {actionMessage && (
        <div
          className={`p-4 rounded-xl border flex items-start space-x-2.5 text-xs ${
            actionMessage.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          {actionMessage.type === 'success' ? (
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          )}
          <div>{actionMessage.text}</div>
        </div>
      )}

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-6">Product Name</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Featured</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900">
                    <div className="font-bold text-sm">{p.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">/{p.slug}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium border border-blue-100">
                      {p.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleTogglePublish(p)}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${
                        p.status === 'published'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                          : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                      }`}
                    >
                      {p.status.toUpperCase()}
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    {p.isFeatured ? (
                      <span className="text-fuchsia-600 font-bold text-[11px]">Yes</span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">No</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    <a
                      href={`/products/${p.slug}`}
                      target="_blank"
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 inline-block"
                      title="Preview on Public Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleDelete(p.id, p.name)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 inline-block transition-colors"
                      title="Delete Product (RBAC Super Admin / Admin)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Product Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-slate-800">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Create New AI Product</h3>
            <p className="text-xs text-slate-500 mb-6">
              Enter product specifications. All data will be validated server-side through Zod and logged to audit records.
            </p>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. EVAR Guardrail Proxy"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        name: e.target.value,
                        slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">URL Slug *</label>
                  <input
                    type="text"
                    required
                    value={newProduct.slug}
                    onChange={(e) => setNewProduct({ ...newProduct, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Category *</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                  >
                    <option value="AI Products">AI Products</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="AI Awareness">AI Awareness</option>
                    <option value="AI Safety">AI Safety</option>
                    <option value="Research & Innovation">Research & Innovation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Status</label>
                  <select
                    value={newProduct.status}
                    onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Short Description *</label>
                <textarea
                  required
                  rows={2}
                  value={newProduct.shortDescription}
                  onChange={(e) => setNewProduct({ ...newProduct, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600 resize-none"
                  placeholder="Summary of product functionality..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Problem Statement *</label>
                  <textarea
                    required
                    rows={2}
                    value={newProduct.problem}
                    onChange={(e) => setNewProduct({ ...newProduct, problem: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600 resize-none"
                    placeholder="What vulnerability or friction does this solve?"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Solution Architecture *</label>
                  <textarea
                    required
                    rows={2}
                    value={newProduct.solution}
                    onChange={(e) => setNewProduct({ ...newProduct, solution: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600 resize-none"
                    placeholder="How does EVAR Shift-Left technology resolve it?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Features (One per line)</label>
                  <textarea
                    rows={3}
                    value={newProduct.featuresText}
                    onChange={(e) => setNewProduct({ ...newProduct, featuresText: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600 font-mono resize-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Tech Stack (One per line)</label>
                  <textarea
                    rows={3}
                    value={newProduct.technologyText}
                    onChange={(e) => setNewProduct({ ...newProduct, technologyText: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600 font-mono resize-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Hero Image URL</label>
                <input
                  type="url"
                  required
                  value={newProduct.heroMedia}
                  onChange={(e) => setNewProduct({ ...newProduct, heroMedia: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={newProduct.isFeatured}
                  onChange={(e) => setNewProduct({ ...newProduct, isFeatured: e.target.checked })}
                  className="rounded border-slate-300 text-blue-600"
                />
                <label htmlFor="isFeatured" className="font-semibold text-slate-700">
                  Feature on Public Homepage
                </label>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
                >
                  Commit Product to Database
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
