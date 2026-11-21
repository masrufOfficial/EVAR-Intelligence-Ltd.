'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Play,
  Clock,
  BookOpen,
  Sparkles,
  Layers,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkle,
  Newspaper,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

interface PreviewProps {
  slug: string;
  name: string;
  demoUrl?: string | null;
}

export default function ProductPreviewViewport({ slug, name, demoUrl }: PreviewProps) {
  // Interactive mini states
  const [selectedSize, setSelectedSize] = useState('5ml');
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'programs' | 'verify'>('programs');

  // 1. BUBT TAFE [Website & CRM]
  if (slug === 'bubt-tafe-website-crm') {
    return (
      <div className="w-full min-h-[360px] p-3 text-slate-200 bg-[#07131e] font-sans select-none">
        {/* Institutional Top Bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-[10px]">
          <div className="flex items-center space-x-1.5 text-cyan-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>BUBT TAFE Training Center</span>
          </div>
          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            50% Govt. Waiver Active
          </span>
        </div>

        {/* Real Screenshot Preview Header */}
        <div className="relative rounded-lg overflow-hidden border border-cyan-500/30 mb-2.5 h-28 group">
          <Image
            src="/images/products/bubt-tafe-hero.png"
            alt="BUBT TAFE Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131e] via-[#07131e]/50 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[9px] font-bold text-white bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
              Vocational &amp; Technical Programs
            </span>
            <span className="text-[8px] font-mono text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded">
              WAF Protected
            </span>
          </div>
        </div>

        {/* Interactive Course & Registry Tabs */}
        <div className="flex items-center space-x-1 mb-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('programs');
            }}
            className={`flex-1 py-1 text-[9px] font-mono rounded transition-colors ${
              activeTab === 'programs'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            Training Courses
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('verify');
            }}
            className={`flex-1 py-1 text-[9px] font-mono rounded transition-colors ${
              activeTab === 'verify'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            Certificate Registry (/verify)
          </button>
        </div>

        {activeTab === 'programs' ? (
          <div className="space-y-1.5 text-[9px]">
            <div className="p-1.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Full-Stack Web Development</span>
                <span className="text-[8px] text-slate-400">120 Hours &bull; Friday / Saturday Batch</span>
              </div>
              <span className="text-cyan-400 font-mono font-bold">৳12,500</span>
            </div>
            <div className="p-1.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Cybersecurity &amp; Ethical Defense</span>
                <span className="text-[8px] text-slate-400">80 Hours &bull; Evening Batch</span>
              </div>
              <span className="text-cyan-400 font-mono font-bold">৳15,000</span>
            </div>
            <div className="p-1.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">AI &amp; Machine Learning Engineering</span>
                <span className="text-[8px] text-slate-400">90 Hours &bull; Practical Lab Driven</span>
              </div>
              <span className="text-cyan-400 font-mono font-bold">৳16,000</span>
            </div>
          </div>
        ) : (
          <div className="p-2 rounded bg-black/50 border border-cyan-500/20 text-[8px] font-mono">
            <span className="text-cyan-400 block font-bold mb-1">OFFICIAL VERIFICATION ENGINE:</span>
            <p className="text-slate-300 leading-tight mb-1.5">
              Unique ID lookup: <span className="text-emerald-400">TAFE-BUBT-CERT-2026-0001</span>
            </p>
            <div className="flex items-center text-emerald-400 space-x-1">
              <CheckCircle2 className="w-2.5 h-2.5" />
              <span>Authentic Credential Verified &bull; Tamper-Proof</span>
            </div>
          </div>
        )}

        {/* Admission Support Hotline */}
        <div className="mt-2 p-1.5 rounded bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between text-[8px] font-mono text-cyan-300">
          <span>Admissions Hotline:</span>
          <span className="font-bold text-white">01827459921</span>
        </div>
      </div>
    );
  }

  // 2. Perfume E-commerce website (AROMA & AESTHETIC)
  if (slug === 'perfume-ecommerce-website') {
    return (
      <div className="w-full min-h-[380px] p-3 text-[#f5f0e7] bg-[#111111] font-sans select-none">
        {/* Luxury Top Bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#c6a56b]/30 text-[10px]">
          <div className="flex items-center space-x-1.5 font-serif text-[#e3cb98] font-bold tracking-wider">
            <Sparkle className="w-3 h-3 text-[#c6a56b]" />
            <span>AROMA &amp; AESTHETIC</span>
          </div>
          <span className="text-[8px] font-mono text-[#c6a56b] bg-[#c6a56b]/10 px-1.5 py-0.5 rounded border border-[#c6a56b]/30">
            Haute Parfumerie
          </span>
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative rounded-lg overflow-hidden border border-[#c6a56b]/30 mb-2.5 h-28">
          <Image
            src="/images/products/hero_banner.jpg"
            alt="Aroma Aesthetic Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[9px] font-serif font-bold text-[#e3cb98] bg-black/80 px-2 py-0.5 rounded border border-[#c6a56b]/30">
              Élan Noir &bull; Pure Extrait
            </span>
            <span className="text-[9px] font-mono text-[#c6a56b] font-bold">
              ৳650 BDT
            </span>
          </div>
        </div>

        {/* Specialized Decant Volume Selector */}
        <div className="p-2 rounded bg-black/60 border border-[#c6a56b]/20 mb-2">
          <div className="flex items-center justify-between text-[8px] font-mono text-[#c6a56b] mb-1.5">
            <span>DECANT SIZE (PIPETTE CALIBRATED)</span>
            <span>Free Shipping &gt; ৳3,000</span>
          </div>
          <div className="grid grid-cols-4 gap-1 text-[9px] font-mono">
            {['2ml', '3ml', '5ml', '10ml'].map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`py-1 rounded text-center transition-colors ${
                  selectedSize === size
                    ? 'bg-[#c6a56b] text-black font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Olfactory Notes Breakdown */}
        <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-[8px] font-mono text-slate-300 flex items-center justify-between mb-2">
          <span>Top: Bergamot, Pink Pepper</span>
          <span className="text-[#c6a56b] font-bold">Heart: Amber &bull; Oud</span>
        </div>

        {/* Secondary Fragrance in Catalog */}
        <div className="p-2 rounded bg-black/40 border border-[#c6a56b]/20 flex items-center justify-between text-[9px]">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded overflow-hidden shrink-0 border border-[#c6a56b]/30">
              <Image
                src="/images/products/warm_amber_hero.jpg"
                alt="Warm Amber"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif font-bold text-[#e3cb98] block">Warm Amber Extrait</span>
              <span className="text-[7.5px] font-mono text-slate-400">Bourbon Vanilla &amp; Myrrh</span>
            </div>
          </div>
          <span className="font-mono text-[#c6a56b] font-bold text-[9px]">৳720 BDT</span>
        </div>
      </div>
    );
  }

  // 3. IELTS Mock Test Platform
  if (slug === 'ielts-mock-test-platform') {
    return (
      <div className="w-full min-h-[360px] p-3 text-slate-200 bg-[#071018] font-sans select-none">
        {/* Test Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px]">
          <div className="flex items-center space-x-1.5 font-bold text-white">
            <BookOpen className="w-3.5 h-3.5 text-rose-500" />
            <span>IELTS Academic CD Mock</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded font-mono text-rose-400 font-bold text-[9px]">
            <Clock className="w-2.5 h-2.5 mr-1" />
            <span>38:42</span>
          </div>
        </div>

        {/* Audio Waveform Streamer */}
        <div className="p-2 rounded bg-black/40 border border-white/5 mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => e.stopPropagation()}
              className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center text-black"
            >
              <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
            </button>
            <div className="flex items-center space-x-0.5 h-3">
              {[60, 40, 80, 100, 40, 70, 90, 30, 80, 50, 90, 60].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-0.5 bg-cyan-400/80 rounded-full"
                />
              ))}
            </div>
          </div>
          <span className="font-mono text-[9px] text-slate-400">03:12 / 07:45</span>
        </div>

        {/* Mock Question */}
        <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 mb-2.5">
          <span className="text-[9px] font-mono text-cyan-400 font-semibold block mb-1">
            SECTION 2 &bull; QUESTION 14
          </span>
          <p className="text-[10px] text-slate-200 leading-snug mb-2 font-medium">
            According to the speaker, what is the key advantage of the computer-delivered exam format?
          </p>
          <div className="space-y-1 text-[9px]">
            {[
              { id: 1, text: 'Real-time word count & split-screen reading' },
              { id: 2, text: 'Manual paper-based score tabulation' },
            ].map((opt) => (
              <label
                key={opt.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedOption(opt.id);
                }}
                className={`flex items-center space-x-2 p-1.5 rounded cursor-pointer border transition-colors ${
                  selectedOption === opt.id
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200'
                    : 'bg-black/20 border-white/5 text-slate-400 hover:bg-white/5'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${
                    selectedOption === opt.id
                      ? 'border-cyan-400 bg-cyan-400'
                      : 'border-slate-500'
                  }`}
                />
                <span className="leading-tight">{opt.text}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Real-time Band Score Predictor */}
        <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between text-[9px] font-mono">
          <span className="text-slate-300">Target Band Score:</span>
          <span className="text-cyan-400 font-bold bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
            Band 8.5 Predicted
          </span>
        </div>
      </div>
    );
  }

  // 4. Dainik Bichitra Bangla Newsportal
  if (slug === 'dainik-bichitra-bangla-newsportal') {
    return (
      <div className="w-full min-h-[360px] p-3 text-slate-200 bg-[#080d14] font-sans select-none">
        {/* Newspaper Top Bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-red-500/20 text-[10px]">
          <div className="flex items-center space-x-1.5 font-bold text-white">
            <span className="px-1.5 py-0.5 bg-red-600 text-white rounded text-[8px] font-black">দৈনিক</span>
            <span className="text-xs">বিচিত্রা বার্তা</span>
          </div>
          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            বিচিত্রা এআই সক্রিয়
          </span>
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative rounded-lg overflow-hidden border border-red-500/30 mb-2.5 h-28">
          <Image
            src="/images/products/bichitra-bangla-preview.png"
            alt="Dainik Bichitra Bangla Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-[#080d14]/40 to-transparent" />
          <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
            <span className="bg-red-600 text-white font-bold text-[7px] px-1.5 py-0.5 rounded uppercase">
              ব্রেকিং নিউজ
            </span>
            <span className="text-[8px] text-white/90 font-mono">
              গুগল জেমিনি ৩.৬ ফ্ল্যাশ
            </span>
          </div>
        </div>

        {/* Lead Editorial Card */}
        <div className="p-2 rounded bg-black/40 border border-white/5 mb-2">
          <h4 className="text-[10px] font-bold text-white leading-tight mb-1">
            ডিজিটাল রূপান্তরে এআই নিউজরুম: বিচিত্রা এআই ও অটোমেটেড জার্নালিজম
          </h4>
          <p className="text-[8px] text-slate-300 leading-snug line-clamp-2">
            বাংলা ও ইংরেজিতে তাৎক্ষণিক ইনভেস্টিগেটিভ ড্রাফট তৈরি এবং টেক্সট হিউম্যানাইজার ফিচার।
          </p>
        </div>

        {/* Real-Time Telemetry */}
        <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-300">
          <span>লাইভ ভিজিটর এনগেজমেন্ট:</span>
          <span className="text-cyan-400 font-bold">14.2k পাঠক সক্রিয়</span>
        </div>
      </div>
    );
  }

  // 5. Evar Intelligence Limited [Software Company]
  if (slug === 'evar-intelligence-limited') {
    return (
      <div className="w-full min-h-[360px] p-3 text-slate-200 bg-[#040e14] font-sans select-none">
        {/* Core Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-[10px]">
          <div className="flex items-center space-x-1.5 font-mono text-cyan-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EVAR Sentinel Core</span>
          </div>
          <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            Zero-Trust Active
          </span>
        </div>

        {/* System Vital Grid */}
        <div className="grid grid-cols-3 gap-1.5 mb-2.5 text-center text-[9px] font-mono">
          <div className="p-1.5 rounded bg-black/40 border border-cyan-500/20">
            <span className="text-[8px] text-slate-400 block">Agent Nodes</span>
            <span className="text-cyan-300 font-bold text-[11px]">18 Active</span>
          </div>
          <div className="p-1.5 rounded bg-black/40 border-emerald-500/20">
            <span className="text-[8px] text-slate-400 block">Containment</span>
            <span className="text-emerald-400 font-bold text-[11px]">100% OK</span>
          </div>
          <div className="p-1.5 rounded bg-black/40 border-cyan-500/20">
            <span className="text-[8px] text-slate-400 block">Violations</span>
            <span className="text-rose-400 font-bold text-[11px]">0 Blocked</span>
          </div>
        </div>

        {/* Interactive Multi-Agent Pipeline DAG */}
        <div className="p-2 rounded bg-black/50 border border-white/5 mb-2.5">
          <div className="flex items-center justify-between mb-1.5 text-[8px] font-mono text-slate-400">
            <span>PIPELINE ORCHESTRATION</span>
            <span className="text-cyan-400">Deterministic Flow</span>
          </div>
          <div className="flex items-center justify-between space-x-1 text-[8px] font-mono">
            <div className="flex-1 p-1 bg-cyan-950/40 border border-cyan-500/30 rounded text-center">
              <span className="text-cyan-300 font-bold block">Input Sensor</span>
              <span className="text-[7px] text-slate-400">eBPF Ingress</span>
            </div>
            <span className="text-cyan-400">&rarr;</span>
            <div className="flex-1 p-1 bg-cyan-950/40 border border-cyan-500/30 rounded text-center">
              <span className="text-cyan-300 font-bold block">Tool-Gating</span>
              <span className="text-[7px] text-slate-400">Zero-Trust Box</span>
            </div>
            <span className="text-cyan-400">&rarr;</span>
            <div className="flex-1 p-1 bg-cyan-950/40 border border-cyan-500/30 rounded text-center">
              <span className="text-cyan-300 font-bold block">Verification</span>
              <span className="text-[7px] text-slate-400">Formal Proof</span>
            </div>
          </div>
        </div>

        {/* Real-time Audit Stream */}
        <div className="p-2 rounded bg-black/70 border border-white/5 font-mono text-[8px] space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-[7px] border-b border-white/5 pb-0.5">
            <span>AUDIT TELEMETRY</span>
            <span className="text-emerald-400">● REAL-TIME</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-cyan-400">[16:24:19] Tool Execution Invocation</span>
            <span className="text-emerald-400">VERIFIED</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. Masruf Protfolio
  if (slug === 'masruf-portfolio') {
    return (
      <div className="w-full min-h-[360px] p-3 text-slate-200 bg-[#050b11] font-sans select-none">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20 text-[10px]">
          <div className="flex items-center space-x-1.5 text-cyan-300 font-mono font-bold">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>masrufrahman.info</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
            ● JARVIS AI Online
          </span>
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative rounded-lg overflow-hidden border border-cyan-500/30 mb-2.5 h-28">
          <Image
            src="/images/products/masruf-3d.png"
            alt="Masruf Rahman 3D VR"
            fill
            className="object-contain bg-black/60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b11] via-transparent to-transparent" />
          <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
            <span className="text-[8px] font-mono text-white bg-black/70 px-2 py-0.5 rounded border border-white/10">
              Forward Deployed Engineer
            </span>
            <span className="text-[8px] font-mono text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded">
              IEEE QPAIN 2025
            </span>
          </div>
        </div>

        {/* Interactive Prompt Box */}
        <div className="p-2 rounded bg-black/60 border border-white/10 font-mono text-[9px] mb-2">
          <div className="flex items-center space-x-1 text-cyan-400 text-[8px] mb-1">
            <span>JARVIS NEURAL COMPANION</span>
          </div>
          <p className="text-slate-300 leading-tight mb-2">
            &quot;Ask me about Masruf&apos;s system architectures, IEEE research papers, or AI platforms.&quot;
          </p>
        </div>

        {/* Publications Preview */}
        <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-[8px] font-mono text-slate-300 flex items-center justify-between">
          <span className="truncate">Balanced-Augmented KDD IDS with XAI</span>
          <span className="text-cyan-400 shrink-0 ml-1">IEEE &rarr;</span>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="w-full min-h-[360px] p-3 text-slate-200 bg-[#050d14] font-mono select-none">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px]">
        <span className="text-cyan-400 font-bold">{name}</span>
        <span className="text-emerald-400 text-[8px]">Live Application</span>
      </div>
      <div className="p-3 rounded bg-black/50 border border-cyan-500/20 text-[9px] mb-2">
        <p className="text-slate-300 leading-relaxed">
          Production application deployment. Click anywhere on this card to launch the live hosted website.
        </p>
      </div>
    </div>
  );
}
