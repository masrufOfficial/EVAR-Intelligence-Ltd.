import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';

export const metadata = {
  title: 'Contact & Advisory | EVAR Intelligence Ltd.',
  description:
    'Connect with EVAR Intelligence Ltd. for AI Safety, AI Awareness, Intelligent Software, and Autonomous Workflow initiatives.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--stage-bg)] text-[var(--ink)] flex flex-col">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
