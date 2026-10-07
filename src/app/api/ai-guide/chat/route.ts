import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const SYSTEM_INSTRUCTION = `
You are Evar AI, the warm, sharp, and natural AI guide for EVAR Intelligence Ltd.
Tagline: "An innovation hub for human protection in the age of AI."

STRICT CORE PRINCIPLES:
1. NATURAL HUMAN CONVERSATION: Speak in a natural, friendly, and authentic tone like a helpful colleague. If the user asks "how are you?", answer politely and warmly!
2. COMPLETE & CONCISE ANSWERS: Always finish your sentences completely. Keep answers to 2 to 3 natural sentences (under 60 words).
3. NO INTERNAL THOUGHTS OR OUTLINES: Never output thinking tags, brainstorming notes, or lists of options. Output ONLY your direct conversational message to the user.
4. EVAR'S 5 CORE SPECIALTIES:
   - AI Safety: Safer, reliable, human-centered AI with mathematical alignment & ISO 42001 guardrails.
   - AI Awareness: Global public campaigns, industry advocacy initiatives, and community outreach drives.
   - Intelligent Software: Cloud-native architectures embedded with cognitive AI capabilities.
   - AI Product Development: Practical enterprise products like EVAR Sentinel Verifier & Cognitive OS.
   - AI Automation: Multi-agent systems automating complex workflows with human oversight.
5. FOUNDERS:
   - Masruf Rahman: Founder, CEO & CTO (leads research, AI safety & architectures). Personal site: https://www.masrufrahman.info
   - Mehbuba Mehrin Mim: Founder, COO & HR (leads operations, organizational development & community).
6. STRICT RULE: Never mention "shift-left security". Focus 100% on the 5 specialties above.
`.trim();

// Natural, complete knowledge counselor for immediate, graceful zero-downtime responses
function getCounselorResponse(userQuery: string): string {
  const q = userQuery.toLowerCase().trim();

  // 1. Founder Masruf Rahman
  if (q.includes('masruf') || q.includes('ceo') || q.includes('cto')) {
    return 'Masruf Rahman is our Founder, CEO & CTO, leading our research in AI Safety, intelligent systems, and agent architectures. You can explore his work on [his personal website](https://www.masrufrahman.info/) and [Google Scholar](https://scholar.google.com/citations?hl=en&user=NYVFIMkAAAAJ).';
  }

  // 2. Founder Mehbuba Mehrin Mim
  if (q.includes('mim') || q.includes('mehbuba') || q.includes('coo') || q.includes('hr')) {
    return 'Mehbuba Mehrin Mim is the Founder, COO & HR of EVAR Intelligence Ltd. She oversees our business operations, organizational strategy, and community AI programs.';
  }

  // 3. Both Founders / Leadership
  if (
    q.includes('founder') ||
    q.includes('leadership') ||
    q.includes('who runs') ||
    q.includes('team') ||
    q.includes('executive')
  ) {
    return 'EVAR Intelligence Ltd. was founded by Masruf Rahman (CEO & CTO) and Mehbuba Mehrin Mim (COO & HR). You can explore their background right in our [Leadership section](/#leadership).';
  }

  // 4. AI Safety
  if (
    q.includes('safety') ||
    q.includes('risk') ||
    q.includes('guardrail') ||
    q.includes('align') ||
    q.includes('hallucin')
  ) {
    return 'Our AI Safety research develops mathematical alignment guarantees and deterministic guardrails so models remain bounded and human-centered. You can learn more in our [AI Safety section](/#ai-safety).';
  }

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

  // 6. Intelligent Software
  if (
    q.includes('software') ||
    q.includes('engineer') ||
    q.includes('cloud') ||
    q.includes('stack') ||
    q.includes('develop') ||
    q.includes('code')
  ) {
    return 'We engineer Intelligent Software by integrating cognitive AI layers into resilient, cloud-native microservices. Discover our software capabilities in the [Specialties section](/#specialties).';
  }

  // 7. AI Product Development
  if (
    q.includes('product') ||
    q.includes('build') ||
    q.includes('solution') ||
    q.includes('sentinel') ||
    q.includes('app')
  ) {
    return 'Through AI Product Development, we build practical products like EVAR Sentinel Verifier and Cognitive OS to solve tangible enterprise challenges. View our flagship products in the [Products section](/#products).';
  }

  // 8. AI Automation
  if (
    q.includes('automat') ||
    q.includes('agent') ||
    q.includes('workflow') ||
    q.includes('repetitive') ||
    q.includes('bot')
  ) {
    return 'Our AI Automation deploys multi-agent systems with deterministic guardrails to streamline complex business workflows. Learn how it accelerates operations in our [AI Automation section](/#ai-automation).';
  }

  // 9. Research / Publications
  if (
    q.includes('research') ||
    q.includes('paper') ||
    q.includes('lab') ||
    q.includes('publish') ||
    q.includes('study')
  ) {
    return 'Our research team publishes peer-reviewed papers on adversarial robustness, passive deepfake defenses, and zero-knowledge neural enclaves. Explore all papers in our [Research section](/#research).';
  }

  // 10. Contact / Collaboration / Pricing / Hire
  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('reach') ||
    q.includes('email') ||
    q.includes('partner') ||
    q.includes('price')
  ) {
    return 'We would love to collaborate with you! You can reach us directly at [contact@evarintelligence.com](mailto:contact@evarintelligence.com) or through our [Contact section](/#contact).';
  }

  // 11. Specialties Overview
  if (
    q.includes('specialt') ||
    q.includes('service') ||
    q.includes('offer') ||
    q.includes('what do you do') ||
    q.includes('what is evar')
  ) {
    return 'EVAR Intelligence is an innovation hub focused on 5 specialties: AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation. Which of these five would you like to explore deeper?';
  }

  // 12. "How are you" / "How are yu" / "How r u"
  if (
    q.includes('how are you') ||
    q.includes('how are yu') ||
    q.includes('how r u') ||
    q.includes('how do you do') ||
    q.includes('how is it going')
  ) {
    return "I'm doing wonderful, thank you for asking! I'm here to help you explore EVAR Intelligence and our research across AI safety and intelligent systems. How can I assist you today?";
  }

  // 13. Greetings: "hi", "hello", "hey"
  if (
    q.startsWith('hi') ||
    q.startsWith('hello') ||
    q.startsWith('hey') ||
    q === 'hi' ||
    q === 'hello'
  ) {
    return "Hello! I'm Evar AI, your guide for EVAR Intelligence Ltd. How are you doing today, and what would you like to explore about our specialties or leadership?";
  }

  // 14. Identity: Who are you / What are you
  if (
    q.includes('who are you') ||
    q.includes('what are you') ||
    q.includes('tell me about yourself')
  ) {
    return "I'm Evar AI, the official digital guide for EVAR Intelligence Ltd. We are an innovation hub dedicated to human protection in the age of AI across 5 core disciplines.";
  }

  // Founder Masruf Rahman
  if (q.includes('masruf') || q.includes('ceo') || q.includes('cto')) {
    return 'Masruf Rahman is our Founder, CEO & CTO, leading our research in AI Safety, intelligent systems, and agent architectures. You can explore his work on [his personal website](https://www.masrufrahman.info/) and [Google Scholar](https://scholar.google.com/citations?hl=en&user=NYVFIMkAAAAJ).';
  }

  // Founder Mehbuba Mehrin Mim
  if (q.includes('mim') || q.includes('mehbuba') || q.includes('coo') || q.includes('hr')) {
    return 'Mehbuba Mehrin Mim is the Founder, COO & HR of EVAR Intelligence Ltd. She oversees our business operations, organizational strategy, and community AI programs.';
  }

  // Both Founders / Leadership
  if (
    q.includes('founder') ||
    q.includes('leadership') ||
    q.includes('who runs') ||
    q.includes('team') ||
    q.includes('executive')
  ) {
    return 'EVAR Intelligence Ltd. was founded by Masruf Rahman (CEO & CTO) and Mehbuba Mehrin Mim (COO & HR). You can explore their background right in our [Leadership section](/#leadership).';
  }

  // AI Safety
  if (
    q.includes('safety') ||
    q.includes('risk') ||
    q.includes('guardrail') ||
    q.includes('align') ||
    q.includes('hallucin')
  ) {
    return 'Our AI Safety research develops mathematical alignment guarantees and deterministic guardrails so models remain bounded and human-centered. You can learn more in our [AI Safety section](/#ai-safety).';
  }

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

  // Intelligent Software
  if (
    q.includes('software') ||
    q.includes('engineer') ||
    q.includes('cloud') ||
    q.includes('stack') ||
    q.includes('develop') ||
    q.includes('code')
  ) {
    return 'We engineer Intelligent Software by integrating cognitive AI layers into resilient, cloud-native microservices. Discover our software capabilities in the [Specialties section](/#specialties).';
  }

  // AI Product Development
  if (
    q.includes('product') ||
    q.includes('build') ||
    q.includes('solution') ||
    q.includes('sentinel') ||
    q.includes('app')
  ) {
    return 'Through AI Product Development, we build practical products like EVAR Sentinel Verifier and Cognitive OS to solve tangible enterprise challenges. View our flagship products in the [Products section](/#products).';
  }

  // AI Automation
  if (
    q.includes('automat') ||
    q.includes('agent') ||
    q.includes('workflow') ||
    q.includes('repetitive') ||
    q.includes('bot')
  ) {
    return 'Our AI Automation deploys multi-agent systems with deterministic guardrails to streamline complex business workflows. Learn how it accelerates operations in our [AI Automation section](/#ai-automation).';
  }

  // Research / Publications
  if (
    q.includes('research') ||
    q.includes('paper') ||
    q.includes('lab') ||
    q.includes('publish') ||
    q.includes('study')
  ) {
    return 'Our research team publishes peer-reviewed papers on adversarial robustness, passive deepfake defenses, and zero-knowledge neural enclaves. Explore all papers in our [Research section](/#research).';
  }

  // Contact / Collaboration / Pricing / Hire
  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('reach') ||
    q.includes('email') ||
    q.includes('partner') ||
    q.includes('price')
  ) {
    return 'We would love to collaborate with you! You can reach us directly at [contact@evarintelligence.com](mailto:contact@evarintelligence.com) or through our [Contact section](/#contact).';
  }

  // Specialties Overview
  if (
    q.includes('specialt') ||
    q.includes('service') ||
    q.includes('offer') ||
    q.includes('what do you do') ||
    q.includes('what is evar')
  ) {
    return 'EVAR Intelligence is an innovation hub focused on 5 specialties: AI Safety, AI Awareness, Intelligent Software, AI Product Development, and AI Automation. Which of these five would you like to explore deeper?';
  }

  // Default natural complete response
  return "EVAR Intelligence is an innovation hub dedicated to human protection in the age of AI across 5 core specialties. How can I help guide your exploration today?";
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
