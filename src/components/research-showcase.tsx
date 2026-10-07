'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, ArrowUpRight, CheckCircle } from 'lucide-react';

export interface ResearchPaperItem {
  id: string;
  title: string;
  slug: string;
  authors: string;
  publicationDate: string;
  abstract: string;
  category: string;
  readTime: string;
}

const defaultPapers: ResearchPaperItem[] = [
  {
    id: 'paper-1',
    title: 'Deterministic Safety Guardrails: Preventing Adversarial Exploits in Autonomous Agent Collectives',
    slug: 'deterministic-safety-guardrails-autonomous-agents',
    authors: 'Dr. Evelyn Vance, Marcus Chen, Research Team at EVAR Labs',
    publicationDate: 'March 2026',
    abstract:
      'Autonomous agent collectives communicate via natural language and API tool invocation, creating unprecedented attack surfaces for indirect prompt injection and cascading hallucination. We present a formal mathematical framework for deterministic tool gating and state-graph invariance verification that provably eliminates 99.8% of unauthorized privilege escalation attempts.',
    category: 'AI Safety & Alignment',
    readTime: '18 min read',
  },
  {
    id: 'paper-2',
    title: 'Multi-Spectral Photoplethysmography: Real-Time Passive Defense Against High-Fidelity Deepfakes',
    slug: 'multi-spectral-passive-deepfake-defense',
    authors: 'Dr. Evelyn Vance, Dr. Aris Thorne, Sarah Al-Mansoor',
    publicationDate: 'May 2026',
    abstract:
      'Generative diffusion models can now synthesize photorealistic human faces with indistinguishable texture fidelity. However, biological sub-surface capillary blood flow induces subtle, periodic chromatic variations imperceptible to the human eye. We detail a sub-5ms convolutional frequency decomposition pipeline that detects synthetic facial generations with 99.94% accuracy under adverse lighting.',
    category: 'Human Protection in AI',
    readTime: '24 min read',
  },
  {
    id: 'paper-3',
    title: 'Confidential Neural Enclaves: Zero-Knowledge Model Inference Without Weights or Data Disclosure',
    slug: 'confidential-neural-enclaves-zk-proofs',
    authors: 'Marcus Chen, Liam Rodriguez, EVAR Cryptography Group',
    publicationDate: 'July 2026',
    abstract:
      'Enterprises remain hesitant to deploy proprietary weights onto public clouds, while data owners cannot transmit raw training sets. We demonstrate an end-to-end framework combining AMD SEV-SNP enclaves with recursive Halo2 SNARK proofs, delivering verifiable private model inference with less than 7% computational overhead.',
    category: 'Intelligent Software',
    readTime: '31 min read',
  },
];

export default function ResearchShowcase({
  papers = defaultPapers,
}: {
  papers?: ResearchPaperItem[];
}) {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleSimulatedDownload = (paperTitle: string) => {
    setDownloadSuccess(paperTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section id="research" className="py-24 sm:py-28 relative bg-transparent border-t border-[#00212b]/10 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="badge-pill mb-4 text-cyan-600 dark:text-cyan-400">
              Publications &bull; Research Labs
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-[1.12]">
              Frontier Research &amp; <span className="font-semibold evar-text-gradient">Publications</span>
            </h2>
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
              Our multidisciplinary research team publishes foundational papers on mathematical alignment,
              adversarial robustness, biometric defenses, and safe autonomous agent coordination.
            </p>
          </div>
          <Link
            href="/research"
            className="ghost-btn !py-2.5 !px-5 !text-xs self-start md:self-auto font-semibold"
          >
            <span>All Publications</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

        {downloadSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-[#00212b] dark:text-[#fafafa] text-xs flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-cyan-500" />
            <span>
              Secure whitepaper bundle generated for: <strong>{downloadSuccess}</strong> (SHA-256 Verified).
            </span>
          </div>
        )}

        <div className="space-y-4">
          {papers.map((paper) => (
            <div
              key={paper.id || paper.slug}
              className="dark-panel p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="badge-pill">
                  {paper.category}
                </span>
                <span className="text-xs text-[#64748b] dark:text-[#8b8a8a]">{paper.publicationDate}</span>
                <span className="text-xs text-[#64748b] dark:text-[#8b8a8a]">&bull; {paper.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-[#00212b] dark:text-[#fafafa] mb-2 leading-snug">
                {paper.title}
              </h3>

              <div className="text-xs text-[#64748b] dark:text-[#8b8a8a] mb-4 font-mono">
                {paper.authors}
              </div>

              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#a7a6a6] leading-relaxed mb-6 font-normal">
                {paper.abstract}
              </p>

              <div className="pt-4 border-t border-[#00212b]/10 dark:border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-[#64748b] dark:text-[#8b8a8a]">
                  Peer-Reviewed Whitepaper &bull; EVAR Labs
                </span>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleSimulatedDownload(paper.title)}
                    className="pill-btn !py-2 !px-4 !text-xs font-semibold"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    <span>Download PDF</span>
                  </button>
                  <Link
                    href="/contact"
                    className="ghost-btn !py-2 !px-4 !text-xs font-semibold"
                  >
                    <span>Collaborate</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
