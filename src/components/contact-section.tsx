'use client';

import React, { useState } from 'react';
import { Mail, Shield, Send, CheckCircle, AlertCircle, MapPin, Lock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'AI Safety',
    message: '',
    website_trap_field: '', // Anti-bot honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data: any = {};
      const rawText = await res.text();
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        data = { error: rawText || `Server responded with status ${res.status}` };
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to transmit message');
      }

      setStatus({
        type: 'success',
        message: 'Your inquiry has been received. Our advisory team will respond within 24 hours.',
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: 'AI Safety',
        message: '',
        website_trap_field: '',
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Transmission failed. Please verify fields and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="badge-pill mb-4 text-cyan-600 dark:text-cyan-400">
              Inquiries &bull; Partnerships
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
              Connect With <span className="font-semibold evar-text-gradient">EVAR Intelligence</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
              Connect with our team for research collaborations, enterprise AI awareness
              programs, custom intelligent software engineering, or autonomous workflow deployments.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#00212b]/10 dark:border-white/[0.06]">
              <div className="text-xs text-[#475569] dark:text-[#a7a6a6]">
                <div className="text-[10px] text-[#64748b] dark:text-[#8b8a8a] uppercase font-mono mb-0.5">Direct Inquiries</div>
                <div className="text-[#00212b] dark:text-[#fafafa] font-medium">contact@evarintelligence.com</div>
              </div>

              <div className="text-xs text-[#475569] dark:text-[#a7a6a6]">
                <div className="text-[10px] text-[#64748b] dark:text-[#8b8a8a] uppercase font-mono mb-0.5">AI Safety &amp; Research Labs</div>
                <div className="text-[#00212b] dark:text-[#fafafa] font-medium">safety@evarintelligence.com</div>
              </div>

              <div className="text-xs text-[#475569] dark:text-[#a7a6a6]">
                <div className="text-[10px] text-[#64748b] dark:text-[#8b8a8a] uppercase font-mono mb-0.5">Headquarters</div>
                <div className="text-[#00212b] dark:text-[#fafafa] font-medium">EVAR Intelligence Ltd., Innovation District</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-[#00212b]/10 dark:border-white/[0.06] flex items-start space-x-3">
              <Lock className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <div className="text-xs text-[#64748b] dark:text-[#8b8a8a] leading-relaxed">
                All communications are protected under strict enterprise confidentiality protocols.
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="lg:col-span-7 dark-panel p-8 sm:p-12">
            <h3 className="text-xl font-semibold text-[#00212b] dark:text-[#fafafa] mb-1">Send Inquiry</h3>
            <p className="text-xs text-[#64748b] dark:text-[#a7a6a6] mb-8">
              Select your area of interest across our five core specialties.
            </p>

            {status.type && (
              <div
                className={`mb-6 p-4 rounded-xl border flex items-start space-x-3 text-xs ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                )}
                <div>{status.message}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  id="website_trap_field"
                  name="website_trap_field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_trap_field}
                  onChange={(e) =>
                    setFormData({ ...formData, website_trap_field: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#475569] dark:text-[#a7a6a6] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={70}
                    placeholder="e.g. Dr. Alexis Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-[#00212b]/15 dark:border-white/[0.1] text-xs text-[#00212b] dark:text-[#fafafa] placeholder-[#64748b] dark:placeholder-[#8b8a8a] focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#475569] dark:text-[#a7a6a6] mb-1.5 font-medium">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={100}
                    placeholder="e.g. alexis@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-[#00212b]/15 dark:border-white/[0.1] text-xs text-[#00212b] dark:text-[#fafafa] placeholder-[#64748b] dark:placeholder-[#8b8a8a] focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#475569] dark:text-[#a7a6a6] mb-1.5 font-medium">
                    Organization
                  </label>
                  <input
                    type="text"
                    maxLength={100}
                    placeholder="e.g. Nexus Global"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-[#00212b]/15 dark:border-white/[0.1] text-xs text-[#00212b] dark:text-[#fafafa] placeholder-[#64748b] dark:placeholder-[#8b8a8a] focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#475569] dark:text-[#a7a6a6] mb-1.5 font-medium">
                    Area of Specialty *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#002a36] border border-[#00212b]/15 dark:border-white/[0.1] text-xs text-[#00212b] dark:text-[#fafafa] focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="AI Safety">Specialty 01: AI Safety</option>
                    <option value="AI Awareness">Specialty 02: AI Awareness</option>
                    <option value="Intelligent Software">Specialty 03: Intelligent Software</option>
                    <option value="AI Product Development">Specialty 04: AI Product Development</option>
                    <option value="AI Automation">Specialty 05: AI Automation</option>
                    <option value="Research Collaboration">Research &amp; Publications</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#475569] dark:text-[#a7a6a6] mb-1.5 font-medium">
                  Project Scope or Objective *
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={1500}
                  placeholder="Outline your enterprise objectives, timeline, or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-[#00212b]/15 dark:border-white/[0.1] text-xs text-[#00212b] dark:text-[#fafafa] placeholder-[#64748b] dark:placeholder-[#8b8a8a] focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="pill-btn w-full !py-3.5 !text-xs font-semibold mt-2 disabled:opacity-50"
              >
                {loading ? <span>Transmitting...</span> : <span>Send Inquiry &rarr;</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
