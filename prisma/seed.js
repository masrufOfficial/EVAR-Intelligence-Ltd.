const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('--- Seeding EVAR Intelligence Ltd Database ---');

  // 1. Clean existing records if any
  await prisma.auditLog.deleteMany();
  await prisma.securityEvent.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.researchPaper.deleteMany();
  await prisma.automationWorkflow.deleteMany();
  await prisma.awarenessProgram.deleteMany();
  await prisma.product.deleteMany();
  await prisma.websiteSetting.deleteMany();
  await prisma.user.deleteMany();

  // 2. Seed Users with secure Bcrypt hashes (Cost factor 12)
  const defaultPassword = await bcrypt.hash('Password123!', 12);

  const superAdmin = await prisma.user.create({
    data: {
      email: 'superadmin@evar.ai',
      name: 'Dr. Evelyn Vance',
      passwordHash: defaultPassword,
      role: 'SUPER_ADMIN',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isActive: true,
      lastLogin: new Date(),
    },
  });

  const admin = await prisma.user.create({
    data: {
      email: 'admin@evar.ai',
      name: 'Marcus Chen',
      passwordHash: defaultPassword,
      role: 'ADMIN',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isActive: true,
      lastLogin: new Date(),
    },
  });

  const editor = await prisma.user.create({
    data: {
      email: 'editor@evar.ai',
      name: 'Sarah Al-Mansoor',
      passwordHash: defaultPassword,
      role: 'EDITOR',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      isActive: true,
    },
  });

  const contentManager = await prisma.user.create({
    data: {
      email: 'content@evar.ai',
      name: 'Liam Rodriguez',
      passwordHash: defaultPassword,
      role: 'CONTENT_MANAGER',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      isActive: true,
    },
  });

  console.log('Seeded Users with roles: SUPER_ADMIN, ADMIN, EDITOR, CONTENT_MANAGER');

  // 3. Seed Products
  const products = [
    {
      name: 'EVAR Sentinel AI',
      slug: 'evar-sentinel-ai',
      category: 'AI Safety',
      shortDescription: 'Real-time adversarial AI guardrail and prompt-injection firewall for enterprise foundation models.',
      fullDescription: 'EVAR Sentinel AI operates as a zero-latency bidirectional cognitive proxy between enterprise users, AI agents, and foundation models. It inspects inbound queries for adversarial jailbreaks, multi-modal prompt injections, and indirect retrieval exploits while scanning model completions for sensitive data exfiltration (PII/secrets) and regulatory policy violations.',
      problem: 'Enterprise adoption of LLMs and autonomous agents exposes organizations to catastrophic prompt injections, confidential data leakage, model hallucinations, and brand reputational damage.',
      solution: 'Sentinel AI delivers multi-layered token inspection, semantic intent validation, and automated policy redacting at sub-5ms latency, securing production inference endpoints.',
      features: JSON.stringify([
        'Sub-5ms Bidirectional Latency',
        'Multi-Vector Jailbreak & Prompt Injection Defense',
        'Dynamic PII/Secret Masking & DLP Filters',
        'Continuous Model Behavioral Drift Telemetry',
        'SOC2 & ISO 42001 Compliance Reporting Engine'
      ]),
      technology: JSON.stringify(['Rust Core Proxy', 'TensorRT Inference', 'Vector Embeddings', 'eBPF Kernel Probes', 'Next.js Console']),
      heroMedia: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      gallery: JSON.stringify([
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80'
      ]),
      status: 'published',
      isFeatured: true,
      publishedAt: new Date(),
    },
    {
      name: 'EVAR Cognitive Orchestrator',
      slug: 'evar-cognitive-orchestrator',
      category: 'AI Automation',
      shortDescription: 'Enterprise multi-agent autonomous workflow pipeline with deterministic human-in-the-loop oversight.',
      fullDescription: 'The Cognitive Orchestrator enables enterprises to deploy collaborative teams of specialized AI agents that execute complex multi-step workflows. Built on a deterministic state machine with shift-left security verifications, every agent action requires formal permission gating, cryptographic audit logging, and automated escalation to human supervisors whenever confidence thresholds dip.',
      problem: 'Autonomous agents left unchecked execute dangerous API calls, hallucinate workflows, and create uncontrollable black-box processes.',
      solution: 'Provides deterministic task graph compilation, role-bounded agent permissions, and interactive human checkpoint approvals.',
      features: JSON.stringify([
        'Deterministic Agent State Graph Engine',
        'Cryptographic Non-Repudiation for Every Action',
        'Granular Human-in-the-Loop Review Portals',
        'Self-Healing Workflow Exception Recovery',
        'Native ERP, CRM & Cloud Infrastructure Connectors'
      ]),
      technology: JSON.stringify(['Temporal Workflow Engine', 'LangGraph Architecture', 'Python 3.12 Core', 'WebSocket Live Streams', 'Prisma DB']),
      heroMedia: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
      gallery: JSON.stringify([
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
      ]),
      status: 'published',
      isFeatured: true,
      publishedAt: new Date(),
    },
    {
      name: 'EVAR ShieldLens',
      slug: 'evar-shieldlens',
      category: 'AI Awareness',
      shortDescription: 'Military-grade deepfake and synthetic voice detection suite protecting identity and corporate communications.',
      fullDescription: 'ShieldLens provides real-time forensic verification for streaming video, audio communications, and executive digital identity. Leveraging multi-spectral biological consistency verification (photoplethysmography, saccadic micro-movements, and acoustic phoneme analysis), ShieldLens spots synthetic avatars, cloned voices, and facial swaps before fraud can take hold.',
      problem: 'Deepfakes and synthetic audio scams have caused hundreds of millions in fraudulent wire transfers and targeted impersonations of corporate executives.',
      solution: 'Real-time multi-spectral signal verification running seamlessly across Zoom, Teams, WebRTC, and media ingestion pipelines.',
      features: JSON.stringify([
        'Sub-Second Synthetic Voice & Face Detection',
        'Biological Pulse & Micro-Movement Forensics',
        'Real-time WebRTC & Meeting Client Plugins',
        'Tamper-Proof Forensic Evidentiary Certificates',
        'Zero-Data Retention Privacy Guarantee'
      ]),
      technology: JSON.stringify(['PyTorch Vision', 'WebAssembly Video Pipeline', 'Spectral Audio FFT', 'SIMD Optimization']),
      heroMedia: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&auto=format&fit=crop&q=80',
      gallery: JSON.stringify([
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
      ]),
      status: 'published',
      isFeatured: true,
      publishedAt: new Date(),
    },
    {
      name: 'EVAR CyberPulse Autonomous SIEM',
      slug: 'evar-cyberpulse-siem',
      category: 'AI Automation',
      shortDescription: 'Self-adapting AI defense system that investigates, correlates, and neutralizes zero-day threats in milliseconds.',
      fullDescription: 'CyberPulse connects directly into enterprise observability and security feeds, replacing alert fatigue with autonomous investigative synthesis. It synthesizes trillions of telemetry events, simulates attack graphs in real-time, and orchestrates containment counter-measures with mathematical verification.',
      problem: 'Security Operations Centers (SOCs) drown in thousands of daily alerts, with critical breaches remaining undetected for an average of 200+ days.',
      solution: 'Autonomous AI security investigators triage 99.4% of false positives and isolate genuine breaches within 42 seconds.',
      features: JSON.stringify([
        'Autonomous Incident Triage & Root Cause Synthesis',
        'Dynamic Attack Graph Simulation',
        'Automated Host & Network Isolation Playbooks',
        'Shift-Left Vulnerability Correlation',
        'MITRE ATT&CK Matrix Auto-Mapping'
      ]),
      technology: JSON.stringify(['Vector DB', 'Graph Neural Networks', 'Kafka Stream Engine', 'SOAR Orchestrators']),
      heroMedia: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&auto=format&fit=crop&q=80',
      gallery: JSON.stringify([
        'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop&q=80'
      ]),
      status: 'published',
      isFeatured: false,
      publishedAt: new Date(),
    },
    {
      name: 'EVAR Neural Enclave',
      slug: 'evar-neural-enclave',
      category: 'Research & Innovation',
      shortDescription: 'Confidential AI compute framework with zero-knowledge cryptographic proofs and differential privacy.',
      fullDescription: 'The Neural Enclave enables cross-institutional AI training and inference on sensitive medical, financial, and intelligence datasets without any party exposing raw data. Built on confidential computing hardware enclaves with verifiable zero-knowledge proofs.',
      problem: 'Data privacy regulations (GDPR, HIPAA) and trade secrets prevent collaborative AI training on high-value decentralized datasets.',
      solution: 'Hardware-verified confidential computing with cryptographic output proofs, enabling multi-party AI model training in zero trust environments.',
      features: JSON.stringify([
        'AMD SEV-SNP & Intel TDX Enclave Support',
        'ZK-SNARK Proof of Model Integrity',
        'Epsilon-Differential Privacy Guarantees',
        'Cryptographic Model Watermarking',
        'Federated Gradient Aggregation'
      ]),
      technology: JSON.stringify(['Rust', 'Zero-Knowledge Proofs (Halo2)', 'Confidential VM APIs', 'PySyft']),
      heroMedia: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80',
      gallery: JSON.stringify([
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80'
      ]),
      status: 'published',
      isFeatured: true,
      publishedAt: new Date(),
    }
  ];

  for (const prod of products) {
    await prisma.product.create({ data: prod });
  }
  console.log(`Seeded ${products.length} Products`);

  // 4. Seed AI Awareness Programs (Pillar 01)
  const programs = [
    {
      title: 'Executive AI Governance & Strategic Risk Masterclass',
      slug: 'executive-ai-governance',
      audience: 'C-Suite, Board Directors, Legal & Risk Officers',
      duration: '2-Day Intensive / 16 Hours',
      format: 'Executive Immersion & Simulation',
      description: 'Equip senior executive leadership with the critical mental models, legal frameworks, and technical literacy required to navigate enterprise AI transformation safely.',
      modules: JSON.stringify([
        'The Geopolitics & Frontier Dynamics of Generative AI',
        'EU AI Act, ISO 42001 & Emerging Global Regulatory Frameworks',
        'Adversarial AI Risk: Understanding Prompt Injection, Data Poisoning & Liability',
        'Building an Enterprise AI Safety Board & Shift-Left Governance'
      ]),
      outcomes: JSON.stringify([
        'Formulate defensible corporate AI policy guidelines',
        'Identify unmanaged Shadow-AI vulnerabilities across business units',
        'Establish clear human accountability metrics for automated systems'
      ]),
      isFeatured: true,
    },
    {
      title: 'Shift-Left AI Engineering & Red-Teaming Bootcamp',
      slug: 'shift-left-ai-engineering',
      audience: 'Lead Architects, Machine Learning Engineers, DevSecOps Teams',
      duration: '4-Week Hands-On Certification',
      format: 'Laboratory & Live Fire Red-Teaming',
      description: 'A deep-dive technical certification teaching software teams how to architect, test, and harden foundation models, agent systems, and automated pipelines before production deployment.',
      modules: JSON.stringify([
        'Anatomy of Foundation Model Exploits: Indirect Injections & Model Inversion',
        'Implementing Zero-Latency Guardrail Architectures & Semantic Sanitizers',
        'Automated Adversarial Red-Teaming Pipelines in CI/CD',
        'Auditing Agent Memory, Tool Execution & Sandboxing Paradigms'
      ]),
      outcomes: JSON.stringify([
        'Integrate shift-left security gates into existing ML pipelines',
        'Deploy deterministic agent tool call validation',
        'Achieve EVAR Certified AI Security Practitioner (CASP) credentials'
      ]),
      isFeatured: true,
    },
    {
      title: 'Workforce AI Literacy & Cognitive Empowerment Program',
      slug: 'workforce-ai-literacy',
      audience: 'All Organizational Employees & Knowledge Workers',
      duration: 'Self-Paced Modular (8 Modules)',
      format: 'Interactive Micro-Learning Platform',
      description: 'Demystify generative tools for every employee while embedding instinctual security hygiene, preventing confidential data leaks, and fostering human-AI collaborative productivity.',
      modules: JSON.stringify([
        'Demystifying How AI Works: Capabilities vs. Hallucinations',
        'Data Privacy Hygiene: What Never to Paste into Public AI Services',
        'Prompt Crafting for Precision, Logic Verification & Bias Detection',
        'Spotting AI-Generated Social Engineering & Deepfake Impersonations'
      ]),
      outcomes: JSON.stringify([
        '100% elimination of accidental confidential data leaks to public LLMs',
        '40% measured uplift in daily knowledge worker task velocity',
        'Institutional resilience against AI-powered spear-phishing'
      ]),
      isFeatured: true,
    }
  ];

  for (const prog of programs) {
    await prisma.awarenessProgram.create({ data: prog });
  }
  console.log(`Seeded ${programs.length} Awareness Programs`);

  // 5. Seed Automation Workflows (Pillar 02)
  const workflows = [
    {
      title: 'Autonomous Security Incident Synthesis & Containment',
      slug: 'autonomous-incident-synthesis',
      industry: 'Cybersecurity & Financial Infrastructure',
      efficiencyGain: '92% reduction in Mean Time to Respond (MTTR)',
      description: 'Multi-agent system that autonomously ingests alerts from CrowdStrike, AWS GuardDuty, and network firewalls, queries internal asset databases, verifies false positives via behavioral graphs, and executes targeted host isolation.',
      architecture: 'Asynchronous event-driven orchestrator with dual-key cryptographic approval for high-impact isolate actions.',
      agentsDeployed: JSON.stringify(['Telemetry Correlator Agent', 'Identity Verification Agent', 'Forensic Artifact Collector', 'Firewall Playbook Agent']),
      status: 'active',
    },
    {
      title: 'Zero-Trust Regulatory Compliance & Contract Analysis',
      slug: 'zero-trust-compliance-pipeline',
      industry: 'Legal, Banking & Healthcare',
      efficiencyGain: '85% faster contract risk assessment with zero human oversights',
      description: 'Extracts obligations, regulatory clauses, and compliance liabilities from thousands of enterprise agreements against the EU AI Act, HIPAA, and GDPR standards with deterministic provenance.',
      architecture: 'Distributed retrieval-augmented generation with private verifiable enclaves and cryptographic citation tracking.',
      agentsDeployed: JSON.stringify(['Clause Extraction Agent', 'Regulatory Cross-Referencer', 'Liability Assessment Agent', 'Audit Report Generator']),
      status: 'active',
    },
    {
      title: 'Intelligent Supply Chain Risk & Geopolitical Anticipation',
      slug: 'supply-chain-anticipation',
      industry: 'Global Manufacturing & Logistics',
      efficiencyGain: '14-day early warning of critical route disruptions',
      description: 'Continuously monitors global shipping manifests, satellite telemetry, regional customs filings, and real-time news to forecast microchip and raw material supply bottlenecks.',
      architecture: 'Continuous graph-temporal neural network integrated with global logistics ERPs.',
      agentsDeployed: JSON.stringify(['Satellite Imagery Analyzer', 'Customs Tariff Monitor', 'Logistics Routing Optimizer', 'Executive Warning Synthesizer']),
      status: 'active',
    }
  ];

  for (const wf of workflows) {
    await prisma.automationWorkflow.create({ data: wf });
  }
  console.log(`Seeded ${workflows.length} Automation Workflows`);

  // 6. Seed Research Papers
  const papers = [
    {
      title: 'Shift-Left Guardrails: Preventing Adversarial Exploits in Autonomous Agent Collectives',
      slug: 'shift-left-guardrails-autonomous-agents',
      authors: 'Dr. Evelyn Vance, Marcus Chen, Research Team at EVAR Labs',
      publicationDate: new Date('2026-03-15'),
      abstract: 'Autonomous agent collectives communicate via natural language and API tool invocation, creating unprecedented attack surfaces for indirect prompt injection and cascading hallucination. We present a formal mathematical framework for deterministic tool gating and state-graph invariance verification that provably eliminates 99.8% of unauthorized privilege escalation attempts.',
      category: 'Agent Alignment',
      readTime: '18 min read',
      isPublished: true,
    },
    {
      title: 'Multi-Spectral Photoplethysmography: Real-Time Passive Defense Against High-Fidelity Deepfakes',
      slug: 'multi-spectral-passive-deepfake-defense',
      authors: 'Dr. Evelyn Vance, Dr. Aris Thorne, Sarah Al-Mansoor',
      publicationDate: new Date('2026-05-20'),
      abstract: 'Generative diffusion models can now synthesize photorealistic human faces with indistinguishable texture fidelity. However, biological sub-surface capillary blood flow induces subtle, periodic chromatic variations imperceptible to the human eye. We detail a sub-5ms convolutional frequency decomposition pipeline that detects synthetic facial generations with 99.94% accuracy under adverse lighting.',
      category: 'Human-Centric AI',
      readTime: '24 min read',
      isPublished: true,
    },
    {
      title: 'Confidential Neural Enclaves: Zero-Knowledge Model Inference Without Weights or Data Disclosure',
      slug: 'confidential-neural-enclaves-zk-proofs',
      authors: 'Marcus Chen, Liam Rodriguez, EVAR Cryptography Group',
      publicationDate: new Date('2026-07-08'),
      abstract: 'Enterprises remain hesitant to deploy proprietary weights onto public clouds, while data owners cannot transmit raw training sets. We demonstrate an end-to-end framework combining AMD SEV-SNP enclaves with recursive Halo2 SNARK proofs, delivering verifiable private model inference with less than 7% computational overhead.',
      category: 'Adversarial Robustness',
      readTime: '31 min read',
      isPublished: true,
    }
  ];

  for (const p of papers) {
    await prisma.researchPaper.create({ data: p });
  }
  console.log(`Seeded ${papers.length} Research Papers`);

  // 7. Seed Website Settings
  const settings = [
    { key: 'site_title', value: 'EVAR Intelligence Ltd. — Human Protection in the Age of AI', description: 'Primary meta title' },
    { key: 'site_tagline', value: 'Building Intelligent Solutions for a Safer Tomorrow', description: 'Official company tagline' },
    { key: 'site_mission', value: 'AI Awareness + AI Automation & Intelligent Products', description: 'Core dual pillars' },
    { key: 'contact_email', value: 'contact@evarintelligence.com', description: 'Inbound contact email' },
    { key: 'security_email', value: 'security@evarintelligence.com', description: 'Responsible disclosure email' },
    { key: 'office_address', value: 'EVAR Cyber Tower, Innovation District, Tech Metropolis', description: 'Corporate headquarters' },
    { key: 'maintenance_mode', value: 'false', description: 'Emergency platform maintenance flag' }
  ];

  for (const s of settings) {
    await prisma.websiteSetting.create({ data: s });
  }

  // 8. Seed Sample Security Events & Audit Logs
  await prisma.auditLog.create({
    data: {
      actorEmail: 'superadmin@evar.ai',
      action: 'PLATFORM_INITIALIZATION',
      resource: 'SYSTEM_BOOTSTRAP',
      details: 'Initial database seed and shift-left security architecture activated.',
      result: 'SUCCESS',
      ipAddress: '127.0.0.1',
    },
  });

  await prisma.securityEvent.create({
    data: {
      eventType: 'SYSTEM_INTEGRITY_CHECK',
      severity: 'INFO',
      description: 'Zero Trust authentication boundary verified. Bcrypt cost factor 12 validated.',
      clientIpHash: 'evar-node-internal',
      resolved: true,
    },
  });

  console.log('--- Database Seeding Completed Successfully ---');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
