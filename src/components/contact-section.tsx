'use client';

import React, { useState } from 'react';
import { Mail, Shield, Send, CheckCircle, AlertCircle, MapPin, Lock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'AI Awareness',
    message: '',
    website_trap_field: '', // Shift-Left Honeypot field
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

      const data = await res.json();

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
        interest: 'AI Awareness',
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
    <section id="contact" className="py-28 relative bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="badge-pill mb-4">
              Inquiries &bull; Advisory
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-[#fafafa] tracking-tight leading-tight">
              Initiate Enterprise AI Protection
            </h2>

            <p className="text-sm sm:text-base text-[#a7a6a6] leading-relaxed">
              Connect with EVAR Intelligence Ltd. for executive AI awareness masterclasses,
              custom autonomous workflow architecture, or frontier AI adversarial security audits.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <div className="text-xs text-[#a7a6a6]">
                <div className="text-[10px] text-[#8b8a8a] uppercase font-mono mb-0.5">Inquiries</div>
                <div className="text-[#fafafa]">contact@evarintelligence.com</div>
              </div>

              <div className="text-xs text-[#a7a6a6]">
                <div className="text-[10px] text-[#8b8a8a] uppercase font-mono mb-0.5">Responsible Disclosure</div>
                <div className="text-[#fafafa]">security@evarintelligence.com</div>
              </div>

              <div className="text-xs text-[#a7a6a6]">
                <div className="text-[10px] text-[#8b8a8a] uppercase font-mono mb-0.5">Headquarters</div>
                <div className="text-[#fafafa]">EVAR Cyber Tower, Innovation District</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start space-x-3">
              <Lock className="w-4 h-4 text-[#8b8a8a] shrink-0 mt-0.5" />
              <div className="text-xs text-[#8b8a8a] leading-relaxed">
                Inbound payloads are sanitized, rate-limited, and honeypot-verified without third-party tracking.
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="lg:col-span-7 dark-panel p-8 sm:p-12">
            <h3 className="text-xl font-normal text-[#fafafa] mb-1">Send Advisory Inquiry</h3>
            <p className="text-xs text-[#a7a6a6] mb-8">
              All communications are protected under zero-trust transmission protocols.
            </p>

            {status.type && (
              <div
                className={`mb-6 p-4 rounded-xl border flex items-start space-x-3 text-xs ${
                  status.type === 'success'
                    ? 'bg-white/[0.04] border-white/20 text-[#fafafa]'
                    : 'bg-red-950/40 border-red-500/30 text-red-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>{status.message}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* HONEYPOT ANTI-BOT FIELD */}
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
                  <label className="block text-xs text-[#a7a6a6] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={70}
                    placeholder="e.g. Dr. Alexis Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#a7a6a6] mb-1.5 font-medium">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={100}
                    placeholder="e.g. alexis@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#a7a6a6] mb-1.5 font-medium">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#a7a6a6] mb-1.5 font-medium">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/[0.1] text-xs text-[#fafafa] focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="AI Awareness">Pillar 01: AI Awareness & Education</option>
                    <option value="AI Automation">Pillar 02: AI Automation & Workflows</option>
                    <option value="AI Safety">AI Safety & Guardrail Audits</option>
                    <option value="Research Collaboration">Research & Whitepapers</option>
                    <option value="Executive Advisory">Executive Board Briefing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#a7a6a6] mb-1.5 font-medium">
                  Project Scope or Security Requirement *
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={1500}
                  placeholder="Outline your enterprise objectives or advisory timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors resize-none"
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
