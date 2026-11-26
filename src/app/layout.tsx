import type { Metadata } from 'next';
import './globals.css';
import AiGuideWidget from '@/components/ai-guide-widget';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evarintelligenceltd.com'),
  title: {
    default: 'EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
    template: '%s | EVAR Intelligence Ltd.',
  },
  description:
    'EVAR Intelligence Ltd. is a Dhaka-based AI and software innovation company pioneering human protection in the age of AI across AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
  applicationName: 'EVAR Intelligence Ltd.',
  keywords: [
    'EVAR Intelligence',
    'EVAR Intelligence Ltd',
    'EVAR Intelligence Limited',
    'EVAR Intelligent Limited',
    'EVAR Labs',
    'EVAR',
    'AI Safety',
    'AI Awareness',
    'Intelligent Software',
    'AI Product Development',
    'AI Automation',
    'Human-Centered AI',
    'Autonomous Agents',
    'Responsible AI',
    'AI Company Dhaka Bangladesh',
    'AI Software Company',
    'Masruf Rahman',
    'Foysal Ahmed',
    'Emdadul Hasan Shishir',
  ],
  authors: [
    { name: 'EVAR Intelligence Ltd.', url: 'https://www.evarintelligenceltd.com/' },
    { name: 'Masruf Rahman', url: 'https://www.masrufrahman.info/' },
  ],
  creator: 'EVAR Intelligence Ltd.',
  publisher: 'EVAR Intelligence Ltd.',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: 'https://www.evarintelligenceltd.com/',
  },
  icons: {
    icon: '/images/evar-logo-dark.png',
    apple: '/images/evar-logo-dark.png',
  },
  openGraph: {
    title: 'EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
    description:
      'We research and engineer human-centered AI across five core disciplines: AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
    url: 'https://www.evarintelligenceltd.com/',
    siteName: 'EVAR Intelligence Ltd.',
    images: [
      {
        url: 'https://www.evarintelligenceltd.com/images/evar-logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'EVAR Intelligence Ltd. Logo & Brand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVAR Intelligence Ltd. | An Innovation Hub for Human Protection in the Age of AI',
    description:
      'Pioneering responsible intelligence across AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
    images: ['https://www.evarintelligenceltd.com/images/evar-logo-dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'Corporation'],
        '@id': 'https://www.evarintelligenceltd.com/#organization',
        name: 'EVAR Intelligence Ltd.',
        legalName: 'EVAR Intelligence Ltd.',
        alternateName: [
          'EVAR Intelligence',
          'EVAR Intelligence Limited',
          'EVAR Intelligent Limited',
          'EVAR Labs',
          'EVAR',
        ],
        url: 'https://www.evarintelligenceltd.com/',
        logo: 'https://www.evarintelligenceltd.com/images/evar-logo-dark.png',
        image: 'https://www.evarintelligenceltd.com/images/evar-logo-dark.png',
        description:
          'An innovation hub for human protection in the age of AI. Building intelligent solutions for a safer tomorrow across AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation.',
        email: 'evarintelligenceltd@gmail.com',
        telephone: '+8801827459921',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'Bangladesh',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'evarintelligenceltd@gmail.com',
            telephone: '+8801827459921',
            contactType: 'General Inquiries',
            areaServed: 'Global',
          },
          {
            '@type': 'ContactPoint',
            email: 'send.fahmed@gmail.com',
            contactType: 'Business Development',
            areaServed: 'Global',
          },
        ],
        founder: [
          {
            '@type': 'Person',
            name: 'Masruf Rahman',
            jobTitle: 'Founder, CEO & CTO',
            url: 'https://www.masrufrahman.info/',
          },
          {
            '@type': 'Person',
            name: 'Mahbuba Islam Mim',
            jobTitle: 'Founder, COO & HR',
          },
        ],
        employee: [
          {
            '@type': 'Person',
            name: 'Emdadul Hasan Shishir',
            jobTitle: 'Lead Engineer & R&D Head',
          },
          {
            '@type': 'Person',
            name: 'Foysal Ahmed',
            jobTitle: 'Technology Business Development Lead',
            email: 'send.fahmed@gmail.com',
          },
          {
            '@type': 'Person',
            name: 'Shamsuzzaman Sumon',
            jobTitle: 'Director of Product Operations',
          },
        ],
        sameAs: [
          'https://www.facebook.com/evarinlelligenceltd',
          'https://www.linkedin.com/company/evar-intelligence-ltd',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.evarintelligenceltd.com/#website',
        url: 'https://www.evarintelligenceltd.com/',
        name: 'EVAR Intelligence Ltd.',
        alternateName: [
          'EVAR Intelligence',
          'EVAR Intelligent Limited',
          'EVAR Labs',
          'EVAR',
        ],
        description: 'An innovation hub for human protection in the age of AI.',
        publisher: {
          '@id': 'https://www.evarintelligenceltd.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.evarintelligenceltd.com/products?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
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
