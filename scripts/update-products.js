const { PrismaClient } = require('@prisma/client');
const path = require('path');

const products = [
  {
    name: 'BUBT TAFE [Website & CRM]',
    slug: 'bubt-tafe-website-crm',
    category: 'Intelligent Software',
    shortDescription: 'Official vocational training portal, bilingual student admission engine, tamper-proof credential registry, and 11-module enterprise CRM for BUBT TAFE.',
    fullDescription: 'The BUBT TAFE Digital Ecosystem is a production-hardened institutional management platform, bilingual admission portal, tamper-proof credential verification registry, and enterprise CRM built for Bangladesh University of Business and Technology (BUBT) TAFE Training Center. Features automated 50% Government & BUBT Waiver calculations, bKash/Nagad verification, automated vector PDF admission receipts, and application-layer WAF security with IP rate limiting.',
    problem: 'Institutional training programs often struggle with manual multi-step admissions, paper-based credential verification prone to forgery, and fragmented student fee ledgers.',
    solution: 'A unified Next.js 14 and PostgreSQL ecosystem with an interactive course catalog, automated admission slip generation, instant QR-code credential verification, and comprehensive administrative reporting.',
    features: JSON.stringify([
      'Dual-platform architecture: Institutional Portal & 11-module Enterprise CRM',
      'Tamper-proof Certificate Verification with QR-code deep linking',
      'Automated 50% Govt. & BUBT Waiver fee calculation engine',
      'Instant vector PDF Admission Slip generation with transaction verification',
      'Application-layer WAF with sliding-window rate limiting & SQLi/XSS filtering'
    ]),
    technology: JSON.stringify(['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Zustand', 'WAF / Fail2Ban']),
    heroMedia: '/images/products/bubt-tafe-hero.png',
    gallery: JSON.stringify([
      '/images/products/bubt-tafe-hero.png',
      '/images/products/bubt-tafe-programs.jpg',
      '/images/products/bubt-tafe-verify.jpg'
    ]),
    demoUrl: 'https://bubttafe.duckdns.org/',
    isFeatured: true,
    status: 'published',
  },
  {
    name: 'Perfume E-commerce website',
    slug: 'perfume-ecommerce-website',
    category: 'AI Product Development',
    shortDescription: 'Haute Parfumerie Decants & Curated Living e-commerce platform with specialized decant volume tracking, dual design systems, and nationwide logistics.',
    fullDescription: 'A bespoke full-stack e-commerce platform tailored for the luxury perfume decant and curated living market. Features a luxury Black & Gold customer storefront alongside a crisp White & Gold operational control center. Includes a specialized Decant Production Module that tracks source bottle milliliter volumes, accounts for calibrated pipette handling loss, computes integer yields for 2ml–10ml atomizers, and synchronizes inventory atomically.',
    problem: 'Perfume decant retailers face inventory leakage, complex milliliter volume deductions across multiple travel spray sizes, and lack tailored local courier integration.',
    solution: 'An automated decant batch production system with atomic inventory movement logs, BDT currency formatting, nationwide Cash on Delivery (COD) workflows, and automated courier consignment dispatching.',
    features: JSON.stringify([
      'Luxury Black & Gold storefront + White & Gold operational control center',
      'Specialized Decant Production Module with pipette loss calibration & milliliter tracking',
      'Atomic inventory sync across 2ml, 3ml, 5ml & 10ml product variants',
      'Nationwide Bangladeshi logistics with COD, bKash & Nagad integration',
      'Olfactory pyramid breakdown (top, heart, base notes) on product views'
    ]),
    technology: JSON.stringify(['Next.js 14', 'React', 'Prisma ORM', 'SQLite / PostgreSQL', 'Tailwind CSS', 'Framer Motion']),
    heroMedia: '/images/products/hero_banner.jpg',
    gallery: JSON.stringify([
      '/images/products/hero_banner.jpg',
      '/images/products/elan_noir_hero.jpg',
      '/images/products/warm_amber_hero.jpg'
    ]),
    demoUrl: 'https://aromaaesthetic.vercel.app/',
    isFeatured: true,
    status: 'published',
  },
  {
    name: 'IELTS Mock Test Platform',
    slug: 'ielts-mock-test-platform',
    category: 'Intelligent Software',
    shortDescription: 'Authentic British Council-style computer-delivered IELTS simulation with real-time audio sync, split-screen passages, and wireless smartphone microphone pairing.',
    fullDescription: 'The IELTS Academy Mock Test Portal provides an enterprise-grade computer-delivered testing environment mirroring the official British Council examination standards. Features timed audio streams for Listening tests, interactive split-screen passages with text highlighters for Reading, word-count validated Writing modules, and a wireless QR smartphone pairing feature that turns candidate phones into microphones for Speaking evaluations.',
    problem: 'Exam candidates struggle to adapt to computer-delivered exam interfaces without realistic simulation software, while centers lack hardware microphones for desktop PC labs.',
    solution: 'A web-native CD-IELTS simulator with live exam countdown timers, question palette navigation, automated band scoring, and QR-paired wireless smartphone audio streaming.',
    features: JSON.stringify([
      'Full CD-IELTS simulator: Listening, Reading, Writing & Speaking',
      'Wireless Mobile Mic Sync: QR scan to pair smartphone for Speaking tests',
      'Split-screen reading passages with real-time text highlighter & notes',
      'Automated Listening/Reading band score computation (Band 1.0 - 9.0)',
      'Separated IELTS Examiner & Test Administrator management dashboard'
    ]),
    technology: JSON.stringify(['Next.js 14', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Web Audio API', 'QR Sync']),
    heroMedia: '/images/products/ielts-portal-model.png',
    gallery: JSON.stringify([
      '/images/products/ielts-portal-model.png',
      '/images/products/bubt-tafe-hero.png'
    ]),
    demoUrl: 'https://bubttafe.duckdns.org/ielts-portal',
    isFeatured: true,
    status: 'published',
  },
  {
    name: 'Dainik Bichitra Bangla Newsportal',
    slug: 'dainik-bichitra-bangla-newsportal',
    category: 'Intelligent Software',
    shortDescription: 'Modern digital newspaper with 3D floating AI news companion, Google Gemini AI newsroom copilot, and asymmetric international editorial layouts.',
    fullDescription: 'Dainik Bichitra Bangla is a production-grade digital newspaper and editorial intelligence platform built for premier Bangladeshi journalism. Combines clean asymmetric editorial design with modern AI capabilities, featuring an interactive 3D floating mascot ("বিচিত্রা এআই") with trilingual conversational comprehension (Bengali, English, Banglish), an in-editor AI newsroom copilot for automated report drafting and text humanization, and granular Role-Based Access Control (RBAC).',
    problem: 'Traditional digital newspapers suffer from cluttered layouts, slow editorial drafting during breaking news, and lack engaging multimedia reader interactions.',
    solution: 'An international editorial layout featuring a grand lead story, breaking news tickers, automated SEO metadata, and Google Gemini AI newsroom drafting tools.',
    features: JSON.stringify([
      '3D Floating News Mascot ("বিচিত্রা এআই") with Bengali, English & Banglish NLP',
      'Admin AI Newsroom Copilot for investigative article generation & text humanization',
      'Granular Role-Based Access Control (RBAC) across 9 editorial sections',
      'Asymmetric International Editorial Layout with Grand Lead & Breaking Ticker',
      'Dual-language masthead with live Bengali Calendar (বঙ্গাব্দ) integration'
    ]),
    technology: JSON.stringify(['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Google Gemini AI', 'Lucide Icons']),
    heroMedia: '/images/products/bichitra-bangla-preview.png',
    gallery: JSON.stringify([
      '/images/products/bichitra-bangla-preview.png'
    ]),
    demoUrl: 'https://dainik-bichitra-bangla.vercel.app/',
    isFeatured: true,
    status: 'published',
  },
  {
    name: 'Evar Intelligence Limited [Software Company]',
    slug: 'evar-intelligence-limited',
    category: 'AI Safety',
    shortDescription: 'Enterprise human protection platform with deterministic tool-gating guardrails, awareness program matrix, and autonomous multi-agent pipelines.',
    fullDescription: 'EVAR Intelligence Ltd. is an innovation hub dedicated to human protection in the age of AI. We research and engineer safe, human-centered intelligent software across five core disciplines: AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation. Features deterministic runtime verification, zero-trust model sandboxes, multi-agent coordination pipelines, and peer-reviewed alignment research.',
    problem: 'Rapid deployment of autonomous agents and generative models introduces prompt injection risks, cascading execution failures, and unverified decision boundaries.',
    solution: 'Mathematical safety verification frameworks, deterministic tool-gating execution kernels, and zero-trust audit logging for enterprise agent collectives.',
    features: JSON.stringify([
      '5 Core Disciplines: Safety, Awareness, Software, Products & Automation',
      'Deterministic Tool-Gating Guardrails & Zero-Trust Sandbox Kernel',
      'Multi-Agent Workflow Pipelines with human-in-the-loop oversight',
      'Awareness Program Matrix for enterprise executives and public institutions',
      'Cryptographic audit telemetry and real-time security event logging'
    ]),
    technology: JSON.stringify(['Next.js 14', 'TypeScript', 'Prisma', 'Jose JWT', 'Three.js', 'Tailwind CSS']),
    heroMedia: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80'
    ]),
    demoUrl: 'https://evarintelligenceltd.vercel.app/',
    isFeatured: true,
    status: 'published',
  },
  {
    name: 'Masruf Protfolio',
    slug: 'masruf-portfolio',
    category: 'AI Product Development',
    shortDescription: 'Production-grade personal portfolio with 3D spatial computing VR hero, real-time JARVIS AI assistant, and IEEE QPAIN research showcase.',
    fullDescription: 'The official digital portfolio of Md Masruf Rahman, showcasing his work as a Forward Deployed Engineer (FDE) and AI Solutions Architect. Features an interactive 3D spatial computing hero with mouse-tracking perspective tilt, a persistent JARVIS neural assistant powered by Google Gemini, a showcase of mission-critical production systems, and peer-reviewed IEEE QPAIN 2025 research papers on Explainable AI and cyber-intrusion detection.',
    problem: 'Traditional resumes cannot demonstrate live AI reasoning, interactive spatial computing physics, or real-time system architectures.',
    solution: 'An immersive 3D spatial interface with dynamic generative AI telemetry, interactive technical constellations, and verified architectural case studies.',
    features: JSON.stringify([
      '3D Interactive Spatial Computing Hero with real-time perspective tilt physics',
      'JARVIS Real-Time Neural Intelligence Assistant powered by Google Gemini',
      'Flagship production systems showcase with full-stack telemetry metrics',
      'IEEE QPAIN 2025 peer-reviewed research papers on Explainable AI & IDS',
      'Symmetrical career milestone timeline with zero-GPA excellence standard'
    ]),
    technology: JSON.stringify(['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Google Gemini API', 'Three.js']),
    heroMedia: '/images/products/masruf-3d.png',
    gallery: JSON.stringify([
      '/images/products/masruf-3d.png',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80'
    ]),
    demoUrl: 'https://www.masrufrahman.info',
    isFeatured: true,
    status: 'published',
  },
];

async function syncDb(dbPath) {
  console.log(`\n=== Synchronizing Database at: ${dbPath} ===`);
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'file:' + path.resolve(dbPath),
      },
    },
  });

  try {
    console.log('Clearing old products...');
    await prisma.product.deleteMany({});
    for (const p of products) {
      await prisma.product.create({ data: p });
      console.log(`Added: ${p.name}`);
    }
    const count = await prisma.product.count();
    console.log(`Total active products in ${dbPath}: ${count}`);
  } finally {
    await prisma.$disconnect();
  }
}

async function updateAll() {
  await syncDb(path.resolve(__dirname, '../dev.db'));
  await syncDb(path.resolve(__dirname, '../prisma/dev.db'));
  console.log('\nAll databases updated with the 6 exact requested products!');
  process.exit(0);
}

updateAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
