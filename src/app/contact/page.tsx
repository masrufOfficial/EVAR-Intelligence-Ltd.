import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';

export const metadata = {
  title: 'Contact Advisory | EVAR Intelligence Ltd.',
  description:
    'Initiate enterprise AI protection, safety audits, and autonomous workflow consultations with EVAR Intelligence Ltd.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
