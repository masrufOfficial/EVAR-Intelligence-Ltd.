import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About EVAR Intelligence Ltd. | The Next Layer of Intelligence',
  description:
    'Learn about EVAR Intelligence Ltd. - Building intelligent solutions for a safer tomorrow through AI awareness, automation, and shift-left cybersecurity.',
};

export default function AboutPage() {
  const leadership = [
    {
      name: 'Dr. Evelyn Vance',
      role: 'Chief AI Safety Architect & Co-Founder',
      bio: 'Former principal researcher in adversarial machine learning and frontier model alignment with 15+ years leading safety engineering.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Autonomous Systems & Co-Founder',
      bio: 'Specialist in multi-agent orchestration, bounded agency state machines, and zero-knowledge private computation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sarah Al-Mansoor',
      role: 'Director of AI Literacy & Human Factors',
      bio: 'Pioneered enterprise workforce cognitive empowerment programs, training over 40,000 knowledge workers globally in responsible AI.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="badge-pill mb-6">
          Origin &bull; Ethos
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal text-[#fafafa] tracking-tight leading-tight mb-6">
          An Innovation Hub for <span className="text-[#a7a6a6]">Human Protection</span> in the Age of AI
        </h1>

        <p className="text-base sm:text-lg text-[#a7a6a6] max-w-2xl mx-auto leading-relaxed font-normal">
          EVAR Intelligence Ltd. was established on a single unwavering conviction: as artificial
          intelligence reshapes the contours of human society, safety, awareness, and security
          must lead capability.
        </p>
      </section>

      {/* Mission & Vision Matrix */}
      <section className="py-20 border-t border-white/[0.06] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="dark-panel p-8">
              <h2 className="text-xl font-normal text-[#fafafa] mb-3">Our Core Mission</h2>
              <p className="text-sm text-[#a7a6a6] leading-relaxed font-normal">
                To build intelligent solutions for a safer tomorrow. We unite two fundamental pillars:
                raising foundational <strong>AI Awareness</strong> to empower human judgment, and developing
                resilient <strong>AI Automation &amp; Intelligent Products</strong> governed by mathematically
                bounded human agency.
              </p>
            </div>

            <div className="dark-panel p-8">
              <h2 className="text-xl font-normal text-[#fafafa] mb-3">The Shift-Left Philosophy</h2>
              <p className="text-sm text-[#a7a6a6] leading-relaxed font-normal">
                Traditional cybersecurity treats defenses as a late-stage barrier. At EVAR, security is
                shifted left into the earliest architectural sketches, model loss functions, and dataset curation.
                We do not build products and secure them afterward; we engineer security as the architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <div className="badge-pill mb-4">
              Team &bull; Leadership
            </div>
            <h2 className="text-3xl font-normal text-[#fafafa]">Scientific &amp; Engineering Leadership</h2>
            <p className="mt-2 text-[#a7a6a6] text-sm font-normal">
              Our leadership unites deep learning mathematicians, cybersecurity architects, and human-factors educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((person, idx) => (
              <div
                key={idx}
                className="dark-panel overflow-hidden group"
              >
                <div className="relative w-full h-64 overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-normal text-[#fafafa] mb-1">{person.name}</h3>
                  <div className="text-xs text-[#8b8a8a] mb-3 font-mono">{person.role}</div>
                  <p className="text-xs text-[#a7a6a6] leading-relaxed font-normal">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Call to Action */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-normal text-[#fafafa] mb-4">
            Partner With EVAR Intelligence
          </h2>
          <p className="text-sm text-[#a7a6a6] max-w-xl mx-auto mb-8 font-normal">
            Whether your enterprise requires specialized red-teaming, executive literacy masterclasses, or custom
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
