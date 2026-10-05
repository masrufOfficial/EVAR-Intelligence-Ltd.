import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EVAR Intelligence Ltd. | Human Protection in the Age of AI',
  description:
    'Building Intelligent Solutions for a Safer Tomorrow. An innovation hub pioneering enterprise AI Awareness, AI Automation & Autonomous Products, and Shift-Left AI Safety.',
  keywords: [
    'EVAR Intelligence',
    'AI Awareness',
    'AI Automation',
    'AI Products',
    'AI Safety',
    'Shift-Left Security',
    'Human-Centric AI',
    'Autonomous Agents',
  ],
  authors: [{ name: 'EVAR Intelligence Ltd.' }],
  icons: {
    icon: '/images/evar-logo.png',
    apple: '/images/evar-logo.png',
  },
  openGraph: {
    title: 'EVAR Intelligence Ltd. | Human Protection in the Age of AI',
    description: 'Building Intelligent Solutions for a Safer Tomorrow.',
    url: 'https://evarintelligence.com',
    siteName: 'EVAR Intelligence Ltd.',
    images: [
      {
        url: '/images/evar-logo.png',
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
    logo: 'https://evarintelligence.com/images/evar-logo.png',
    description: 'Building Intelligent Solutions for a Safer Tomorrow. Innovation hub for human protection in the age of AI.',
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
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#050505] text-[#fafafa] antialiased">
        {children}
      </body>
    </html>
  );
}
