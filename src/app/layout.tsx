import type { Metadata } from 'next';
import './globals.css';
import AiGuideWidget from '@/components/ai-guide-widget';

export const metadata: Metadata = {
  title: 'EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
  description:
    'Pioneering responsible intelligence through 5 core specialties: AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
  keywords: [
    'EVAR Intelligence',
    'AI Safety',
    'AI Awareness',
    'Intelligent Software',
    'AI Product Development',
    'AI Automation',
    'Human-Centered AI',
    'Autonomous Agents',
    'Responsible AI',
  ],
  authors: [
    { name: 'EVAR Intelligence Ltd.', url: 'https://evarintelligence.com' },
    { name: 'Masruf Rahman', url: 'https://www.masrufrahman.info/' },
  ],
  creator: 'Masruf Rahman',
  icons: {
    icon: '/images/evar-logo-dark.png',
    apple: '/images/evar-logo-dark.png',
  },
  openGraph: {
    title: 'EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
    description:
      'We research and develop approaches for safer, more reliable, responsible, and human-centered AI, intelligent software, and enterprise automation.',
    url: 'https://evarintelligence.com',
    siteName: 'EVAR Intelligence Ltd.',
    images: [
      {
        url: '/images/evar-logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'EVAR Intelligence Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EVAR Intelligence Ltd.',
    url: 'https://evarintelligence.com',
    logo: 'https://evarintelligence.com/images/evar-logo-dark.png',
    description:
      'An innovation hub for human protection in the age of AI. Specialties in AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@evarintelligence.com',
      contactType: 'Customer Support',
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{localStorage.removeItem('evar-theme');document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#00212b] text-[#f8fafc] antialiased">
        {children}
        <AiGuideWidget />
      </body>
    </html>
  );
}
