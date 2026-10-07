import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Cpu, Layers, Bot } from 'lucide-react';
import FoundersSection from '@/components/founders-section';

export const metadata = {
  title: 'About EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
  description:
    'Learn about EVAR Intelligence Ltd. - Building intelligent solutions for a safer tomorrow through AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
};

export default function AboutPage() {
  const specialties = [
    {
      title: 'AI Safety',
      desc: 'We research and develop approaches for safer, more reliable, responsible, and human-centered AI.',
      icon: ShieldCheck,
      color: 'text-cyan-500',
    },
    {
      title: 'AI Awareness',
      desc: 'We promote AI awareness and understanding to help people and organizations navigate the evolving AI landscape.',
      icon: Sparkles,
      color: 'text-violet-500',
    },
    {
      title: 'Intelligent Software',
      desc: 'We develop intelligent software that combines modern engineering with AI-driven capabilities.',
      icon: Cpu,
      color: 'text-blue-500',
    },
    {
      title: 'AI Product Development',
      desc: 'We build practical AI-powered products that solve real-world problems and create meaningful value.',
      icon: Layers,
      color: 'text-pink-500',
    },
    {
      title: 'AI Automation',
      desc: 'We automate repetitive and complex workflows using intelligent AI agents and automation systems.',
      icon: Bot,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6 text-cyan-600 dark:text-cyan-400">
          Origin &bull; Ethos
        </div>

        <h1 className="text-4xl sm:text-6xl font-light text-[#00212b] dark:text-[#fafafa] tracking-tight leading-tight mb-6">
          An Innovation Hub for <span className="font-semibold evar-text-gradient">Human Protection</span> in the Age of AI
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          EVAR Intelligence Ltd. was established on a single unwavering conviction: as artificial
          intelligence reshapes the contours of human society, safety, human-centered alignment,
          and practical innovation must advance hand in hand.
        </p>
      </section>

      {/* 5 Specialties Matrix */}
      <section className="py-20 border-t border-[#00212b]/10 dark:border-white/[0.06] bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <div className="badge-pill mb-4 text-cyan-600 dark:text-cyan-400">
              Foundational Pillars
            </div>
            <h2 className="text-3xl font-light text-[#00212b] dark:text-[#fafafa]">
              Our Five <span className="font-semibold evar-text-gradient">Specialties</span>
            </h2>
            <p className="mt-2 text-[#475569] dark:text-[#a7a6a6] text-sm">
              How we translate responsible research into high-impact products and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((spec, i) => (
              <div key={i} className="dark-panel p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <spec.icon className={`w-6 h-6 ${spec.color}`} />
                    <h3 className="text-lg font-semibold text-[#00212b] dark:text-[#fafafa]">{spec.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#a7a6a6] leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Leadership */}
      <FoundersSection />

      {/* Advisory Call to Action */}
      <section className="py-20 border-t border-[#00212b]/10 dark:border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-[#00212b] dark:text-[#fafafa] mb-4">
            Partner With <span className="font-semibold evar-text-gradient">EVAR Intelligence</span>
          </h2>
          <p className="text-sm text-[#475569] dark:text-[#a7a6a6] max-w-xl mx-auto mb-8 font-normal">
            Whether your enterprise requires safety verification, executive literacy masterclasses, or custom
            multi-agent automation architectures, our team is ready to assist.
          </p>
          <Link
            href="/contact"
            className="pill-btn !py-3 !px-7 text-xs font-semibold"
          >
            <span>Initiate Advisory Dialogue</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
