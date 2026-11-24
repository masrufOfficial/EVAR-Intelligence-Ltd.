import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const SYSTEM_INSTRUCTION = `
You are Evar AI, the warm, sharp, and natural AI guide for EVAR Intelligence Ltd.
Tagline: "An innovation hub for human protection in the age of AI."

STRICT CORE PRINCIPLES:
1. NATURAL HUMAN CONVERSATION: Speak in a natural, friendly, and authentic tone like a helpful colleague. If the user asks "how are you?", answer politely and warmly!
2. COMPLETE & CONCISE ANSWERS: Always finish your sentences completely. Keep answers to 2 to 3 natural sentences (under 80 words).
3. NO INTERNAL THOUGHTS OR OUTLINES: Never output thinking tags, brainstorming notes, or lists of options. Output ONLY your direct conversational message to the user.
4. EVAR'S 5 CORE SPECIALTIES & SERVICES:
   - AI Safety: Safer, reliable, human-centered AI with mathematical alignment, deterministic guardrails & ISO 42001 compliance.
   - AI Awareness: Global public campaigns, industry advocacy initiatives, and executive/workforce AI literacy training.
   - Intelligent Software: Cloud-native architectures embedded with cognitive AI capabilities, custom CRMs, and APIs.
   - AI Product Development: Practical enterprise software and AI platforms solving real problems from idea to deployment.
   - AI Automation: Multi-agent systems automating complex enterprise workflows with deterministic human oversight.
5. FOUNDERS & EXECUTIVE LEADERSHIP:
   - Masruf Rahman: Founder, CEO & CTO (leads research, AI safety & architectures). Personal site: https://www.masrufrahman.info
   - Mahbuba Islam Mim: Founder, COO & HR (leads operations, organizational development & community).
   - Emdadul Hasan Shishir: Lead Developer & R&D Engineer.
   - Foysal Ahmed: Technology Business Development Lead (leads tech commercialization, enterprise alliances & partnerships. Direct contact: send.fahmed@gmail.com).
   - Shamsuzzaman Sumon: Director of Product Operations.
6. EVAR'S 6 FLAGSHIP PRODUCTS & DEPLOYMENTS (Never mention GitHub repo links):
   1. BUBT TAFE [Website & CRM]: Vocational training portal, bilingual student admission engine, tamper-proof QR certificate verification (/verify), and 11-module enterprise CRM. Hosted live at: https://bubttafe.duckdns.org/
   2. Perfume E-commerce website (AROMA & AESTHETIC): Luxury Haute Parfumerie decants and curated living platform with specialized decant volume tracking, pipette loss calibration, and nationwide COD logistics. Hosted live at: https://aromaaesthetic.vercel.app/
   3. IELTS Mock Test Platform: Authentic British Council-style computer-delivered IELTS simulation (CD-IELTS) with live audio sync, split-screen reading, automated band scoring, and wireless smartphone QR microphone pairing. Hosted live at: https://bubttafe.duckdns.org/ielts-portal
   4. Dainik Bichitra Bangla Newsportal: Modern digital newspaper featuring a 3D floating AI companion ("বিচিত্রা এআই") with Bengali/English/Banglish NLP, admin AI newsroom copilot, and asymmetric editorial layout. Hosted live at: https://dainik-bichitra-bangla.vercel.app/
   5. Evar Intelligence Limited [Software Company]: Enterprise human protection platform with deterministic tool-gating guardrails, zero-trust model sandbox, and multi-agent workflow pipelines. Hosted live at: https://www.evarintelligenceltd.com/
   6. Masruf Protfolio: Forward Deployed Engineer portfolio featuring an interactive 3D spatial VR hero, real-time JARVIS neural assistant powered by Google Gemini, and IEEE QPAIN 2025 research papers. Hosted live at: https://www.masrufrahman.info
7. OFFICIAL CONTACT & SOCIAL CHANNELS:
   - Official Website: https://www.evarintelligenceltd.com/
   - Corporate Email: evarintelligenceltd@gmail.com
   - Direct Business Lead: Foysal Ahmed (send.fahmed@gmail.com)
   - Phone / Direct Contact: 01827459921 / +8801827459921
   - Location: Dhaka, Bangladesh
   - Facebook: https://www.facebook.com/evarinlelligenceltd
   - LinkedIn: https://www.linkedin.com/company/evar-intelligence-ltd
8. STRICT RULE: Never mention "shift-left security" or any GitHub repository links. Focus on our 6 verified products, services, leadership, and core specialties.
`.trim();

// Natural, complete knowledge counselor for immediate, graceful zero-downtime responses
function getCounselorResponse(userQuery: string): string {
  const q = userQuery.toLowerCase().trim();

  // 1. Specific Products
  // BUBT TAFE
  if (q.includes('tafe') || q.includes('bubt tafe') || q.includes('admission') || q.includes('crm')) {
    return 'BUBT TAFE is our institutional educational ecosystem featuring a bilingual admission portal, tamper-proof QR certificate verification, and an 11-module enterprise CRM. You can explore the live deployment at [BUBT TAFE](https://bubttafe.duckdns.org/).';
  }

  // Perfume E-commerce / Aroma & Aesthetic
  if (q.includes('perfume') || q.includes('aroma') || q.includes('aesthetic') || q.includes('decant') || q.includes('fragrance')) {
    return 'Our Perfume E-commerce platform (Aroma & Aesthetic) is an enterprise Haute Parfumerie system featuring specialized decant volume tracking, calibrated pipette loss calculations, and nationwide courier logistics. You can visit the live boutique at [Aroma & Aesthetic](https://aromaaesthetic.vercel.app/).';
  }

  // IELTS Mock Test
  if (q.includes('ielts') || q.includes('mock test') || q.includes('exam') || q.includes('cbt')) {
    return 'The IELTS Mock Test Platform is a full computer-delivered IELTS simulator (CD-IELTS) with timed audio synchronization, split-screen reading passages, automated band scoring, and wireless QR smartphone microphone pairing. Explore it live at [IELTS Portal](https://bubttafe.duckdns.org/ielts-portal).';
  }

  // Dainik Bichitra Bangla Newsportal
  if (q.includes('bichitra') || q.includes('dainik') || q.includes('news') || q.includes('newspaper') || q.includes('patrika')) {
    return 'Dainik Bichitra Bangla is a modern digital journalism platform featuring an interactive 3D AI companion ("বিচিত্রা এআই"), an AI newsroom copilot for investigative drafting, and an international asymmetric layout. Check it out at [Dainik Bichitra Bangla](https://dainik-bichitra-bangla.vercel.app/).';
  }

  // EVAR Intelligence Platform
  if (q.includes('evar platform') || q.includes('evar intelligence limited') || (q.includes('evar') && q.includes('software'))) {
    return 'The EVAR Intelligence Platform is our flagship human protection suite engineered with deterministic tool-gating guardrails, zero-trust sandboxes, and multi-agent coordination pipelines. Explore it directly at [EVAR Intelligence](https://www.evarintelligenceltd.com/).';
  }

  // Masruf Portfolio
  if (q.includes('portfolio') || (q.includes('masruf') && q.includes('site')) || q.includes('jarvis')) {
    return 'Masruf Rahman’s portfolio showcases his work as a Forward Deployed Engineer and AI Specialist, featuring an interactive 3D spatial VR interface, a live JARVIS neural assistant, and IEEE QPAIN 2025 research publications. View it live at [masrufrahman.info](https://www.masrufrahman.info).';
  }

  // General Products overview
  if (q.includes('product') || q.includes('projects') || q.includes('work') || q.includes('portfolio') || q.includes('build')) {
    return 'We showcase six flagship production systems: BUBT TAFE [Website & CRM], Aroma & Aesthetic Perfume E-commerce, the IELTS Mock Test Platform, Dainik Bichitra Bangla Newsportal, EVAR Intelligence Platform, and Masruf Rahman’s 3D AI Portfolio. Which product would you like to know more about?';
  }

  // 2. Founder Masruf Rahman
  if (q.includes('masruf') || q.includes('ceo') || q.includes('cto')) {
    return 'Masruf Rahman is our Founder, CEO & CTO, leading our research in AI Safety, intelligent systems, and agent architectures. You can explore his work on [his personal website](https://www.masrufrahman.info/) and [Google Scholar](https://scholar.google.com/citations?hl=en&user=NYVFIMkAAAAJ).';
  }

  // 3. Founder Mahbuba Islam Mim
  if (q.includes('mim') || q.includes('mahbuba') || q.includes('mehbuba') || q.includes('coo') || q.includes('hr')) {
    return 'Mahbuba Islam Mim is the Founder, COO & HR of EVAR Intelligence Ltd. She oversees our business operations, organizational strategy, and community AI programs.';
  }

  // 4. Foysal Ahmed
  if (
    q.includes('foysal') ||
    q.includes('faisal') ||
    q.includes('fahmed') ||
    q.includes('business development') ||
    q.includes('bd lead')
  ) {
    return 'Foysal Ahmed is our Technology Business Development Lead at EVAR Intelligence Ltd. He oversees strategic industry partnerships, enterprise alliances, and commercialization. You can reach him directly at [send.fahmed@gmail.com](mailto:send.fahmed@gmail.com).';
  }

  // 5. Leadership / Team
  if (
    q.includes('founder') ||
    q.includes('leadership') ||
    q.includes('who runs') ||
    q.includes('team') ||
    q.includes('shishir') ||
    q.includes('sumon')
  ) {
    return 'EVAR Intelligence is led by Founders Masruf Rahman (CEO & CTO) and Mahbuba Islam Mim (COO & HR), alongside Emdadul Hasan Shishir (Lead Developer), Foysal Ahmed (Technology Business Development Lead), and Shamsuzzaman Sumon (Director of Product Operations). Learn more in our [Leadership section](/leadership).';
  }

  // 6. AI Safety
  if (
    q.includes('safety') ||
    q.includes('risk') ||
    q.includes('guardrail') ||
    q.includes('align') ||
    q.includes('hallucin')
  ) {
    return 'Our AI Safety research develops mathematical alignment guarantees and deterministic guardrails so models remain bounded and human-centered. You can learn more in our [AI Safety section](/#ai-safety).';
  }

  // 7. AI Awareness
  if (
    q.includes('aware') ||
    q.includes('campaign') ||
    q.includes('advoca') ||
    q.includes('initiative') ||
    q.includes('outreach') ||
    q.includes('public')
  ) {
    return 'Our AI Awareness specialty promotes human protection through global campaigns, industry advocacy initiatives, and community outreach drives. Explore our active initiatives in the [AI Awareness section](/#ai-awareness).';
  }

  // 8. Intelligent Software & Custom Engineering
  if (
    q.includes('software') ||
    q.includes('engineer') ||
    q.includes('cloud') ||
    q.includes('stack') ||
    q.includes('develop') ||
    q.includes('code') ||
    q.includes('custom app')
  ) {
    return 'We engineer Intelligent Software by integrating cognitive AI layers into resilient, cloud-native microservices like the BUBT TAFE ecosystem and IELTS Mock Test Platform. Discover our software capabilities in our [Products section](/products).';
  }

  // 9. AI Automation & Agents
  if (
    q.includes('automat') ||
    q.includes('agent') ||
    q.includes('workflow') ||
    q.includes('repetitive') ||
    q.includes('bot')
  ) {
    return 'Our AI Automation deploys multi-agent systems with deterministic guardrails to streamline complex business workflows. Learn how it accelerates operations in our [AI Automation section](/#ai-automation).';
  }

  // 10. Research / Publications
  if (
    q.includes('research') ||
    q.includes('paper') ||
    q.includes('lab') ||
    q.includes('publish') ||
    q.includes('study')
  ) {
    return 'Our research team publishes peer-reviewed papers on adversarial robustness, passive deepfake defenses, and Explainable AI intrusion detection (IEEE QPAIN 2025). Explore all publications in our [R&D section](/research).';
  }

  // 11. Contact / Collaboration / Pricing / Hire
  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('reach') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('location') ||
    q.includes('address') ||
    q.includes('partner') ||
    q.includes('price') ||
    q.includes('quote')
  ) {
    return 'We would love to collaborate with you! You can reach us at [evarintelligenceltd@gmail.com](mailto:evarintelligenceltd@gmail.com), contact our Tech Business Lead Foysal Ahmed directly at [send.fahmed@gmail.com](mailto:send.fahmed@gmail.com), call/WhatsApp [+8801827459921](tel:+8801827459921), or explore [evarintelligenceltd.com](https://www.evarintelligenceltd.com/).';
  }

  // 12. Specialties & Services Overview
  if (
    q.includes('specialt') ||
    q.includes('service') ||
    q.includes('offer') ||
    q.includes('what do you do') ||
    q.includes('what is evar') ||
    q.includes('help me') ||
    q.includes('capabilities')
  ) {
    return 'EVAR Intelligence is an innovation hub providing 5 core services: AI Safety & Governance, AI Awareness Programs, Custom Intelligent Software, Enterprise AI Product Development, and Autonomous Multi-Agent Automation. How can our team support your goals?';
  }

  // 13. "How are you"
  if (
    q.includes('how are you') ||
    q.includes('how are yu') ||
    q.includes('how r u') ||
    q.includes('how do you do') ||
    q.includes('how is it going')
  ) {
    return "I'm doing wonderful, thank you for asking! I'm here to help you explore EVAR Intelligence, our 6 production deployments, and custom AI services. How can I assist you today?";
  }

  // 14. Greetings
  if (
    q.startsWith('hi') ||
    q.startsWith('hello') ||
    q.startsWith('hey') ||
    q === 'hi' ||
    q === 'hello'
  ) {
    return "Hello! I'm Evar AI, your guide for EVAR Intelligence Ltd. How can I help you explore our services, products, or connect with our leadership today?";
  }

  // 15. Identity
  if (
    q.includes('who are you') ||
    q.includes('what are you') ||
    q.includes('tell me about yourself')
  ) {
    return "I'm Evar AI, the official digital guide for EVAR Intelligence Ltd. We are an innovation hub dedicated to human protection in the age of AI across 5 core disciplines and 6 production systems.";
  }

  // Default
  return "EVAR Intelligence is an innovation hub dedicated to human protection in the age of AI across 5 core specialties and 6 live production platforms. How can I help guide your exploration today?";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'A valid message is required.' },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();

    // Prepare contents array strictly containing real user/model conversational turns
    const formattedContents: any[] = [];

    // Append recent history (up to 4 items)
    if (Array.isArray(history)) {
      for (const item of history.slice(-4)) {
        if (item && item.content && (item.role === 'user' || item.role === 'assistant')) {
          formattedContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: String(item.content) }],
          });
        }
      }
    }

    // Append current user message
    formattedContents.push({
      role: 'user',
      parts: [{ text: trimmedMessage }],
    });

    // Only query reliable, verified chat models
    const candidateModels = [
      'gemini-3.1-flash-lite',
      'gemini-flash-lite-latest',
      'gemini-3.1-flash-lite-preview',
    ];

    let generatedText = '';
    let successModel = '';

    const queryModel = async (model: string): Promise<{ text: string; model: string }> => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }],
              },
              contents: formattedContents,
              generationConfig: {
                temperature: 0.65,
                topK: 40,
                topP: 0.9,
                maxOutputTokens: 600,
              },
            }),
            signal: controller.signal,
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Model ${model} returned ${response.status}`);
        }

        const data = await response.json();
        const candidate = data.candidates?.[0];
        const parts = candidate?.content?.parts || [];

        // Extract non-thought text parts
        const textParts = parts.filter((p: any) => !p.thought && p.text);
        let rawText = textParts.map((p: any) => p.text).join(' ').trim();

        if (!rawText && parts[0]?.text) {
          rawText = parts[0].text;
        }

        // Clean out any stray reasoning tags
        const cleaned = rawText
          .replace(/<thought>[\s\S]*?<\/thought>/gi, '')
          .replace(/^(Option \d+|Here is|Answer):/gim, '')
          .trim();

        // Validate completeness: reject truncated fragments (e.g. "Hello! I'm" or "thought I")
        if (
          !cleaned ||
          cleaned.length < 15 ||
          cleaned.startsWith('The user said') ||
          cleaned.includes('* Option') ||
          cleaned.toLowerCase().startsWith('thought i')
        ) {
          throw new Error('Truncated or invalid response format');
        }

        return { text: cleaned, model };
      } catch (err) {
        clearTimeout(timeoutId);
        throw err;
      }
    };

    try {
      // Race candidate models with fast fallback
      const result = await Promise.any(candidateModels.map((m) => queryModel(m)));
      generatedText = result.text;
      successModel = result.model;
    } catch {
      // If external Gemini API is rate-limited (429/503/timeout), use our trained natural counselor
      generatedText = getCounselorResponse(trimmedMessage);
      successModel = 'evar-knowledge-counselor';
    }

    return NextResponse.json({
      reply: generatedText,
      model: successModel,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('AI Guide API Error:', error);
    return NextResponse.json(
      {
        reply: getCounselorResponse('overview'),
        model: 'evar-knowledge-counselor',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  }
}
