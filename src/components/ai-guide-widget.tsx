'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight, ArrowUp, RotateCcw } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const quickSuggestions = [
  'What are your 5 specialties?',
  'How does EVAR guarantee AI Safety?',
  'What enterprise automation do you offer?',
  'Tell me about executive AI training',
];

export default function AiGuideWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi! I'm **Evar AI**, your gentle guide for EVAR Intelligence Ltd. How can I help you explore our specialties, research, or solutions today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch('/api/ai-guide/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error('Guide temporarily offline');
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "I'm here to help you explore EVAR Intelligence.",
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `assistant-err-${Date.now()}`,
        role: 'assistant',
        content:
          "I'm here to help! EVAR Intelligence specializes in **AI Safety**, **AI Awareness**, **Intelligent Software**, **AI Product Development**, and **AI Automation**. Feel free to ask about any of these, or contact our team directly at [contact@evarintelligence.com](mailto:contact@evarintelligence.com).",
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          "Hi! I'm **Evar AI**, your gentle guide for EVAR Intelligence Ltd. How can I help you explore our specialties, research, or solutions today?",
      },
    ]);
    setInput('');
  };

  // Helper to render markdown links and bold formatting naturally
  const renderFormatted = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-semibold text-white text-xs mt-2 mb-1">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const item = line.trim().replace(/^[-*]\s+/, '');
        return (
          <li key={idx} className="text-xs leading-relaxed text-zinc-300 ml-3 mb-1 list-disc">
            {renderInline(item)}
          </li>
        );
      }
      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }
      return (
        <p key={idx} className="text-xs leading-relaxed text-zinc-200 mb-1">
          {renderInline(line)}
        </p>
      );
    });
  };

  const renderInline = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(renderBold(text.substring(lastIndex, match.index)));
      }
      const label = match[1];
      const href = match[2];
      const isExternal = href.startsWith('http');
      if (isExternal) {
        parts.push(
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
          >
            {label}
          </a>
        );
      } else {
        parts.push(
          <Link
            key={match.index}
            href={href}
            onClick={(e) => {
              if (href.startsWith('/#') || href.startsWith('#')) {
                setIsOpen(false);
                const targetId = href.replace('/#', '').replace('#', '');
                const el = document.getElementById(targetId);
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  el.classList.remove('section-transition-active');
                  void el.offsetWidth;
                  el.classList.add('section-transition-active');
                  setTimeout(() => el.classList.remove('section-transition-active'), 2200);
                  window.history.pushState(null, '', `/#${targetId}`);
                }
              } else if (href.startsWith('/')) {
                setIsOpen(false);
              }
            }}
            className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
          >
            {label}
          </Link>
        );
      }
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(renderBold(text.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : renderBold(text);
  };

  const renderBold = (str: string) => {
    const boldParts = str.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          1. FLOATING PILL BUTTON IN THE MIDDLE OF THE SCREEN
          Black, 60% transparent, named "Ask Evar AI"
          ══════════════════════════════════════════════════════════ */}
      {!isOpen && (
        <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Ask Evar AI"
            className="group flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/15 hover:border-white/30 text-white shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* Transparent Sparkle Logo */}
            <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-transform group-hover:rotate-12 duration-300">
              <Image
                src="/images/evar-ai-sparkle.png"
                alt="Ask Evar AI"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>

            {/* Clean Label: "Ask Evar AI" */}
            <span className="text-xs sm:text-[13px] font-medium tracking-tight text-white whitespace-nowrap">
              Ask Evar AI
            </span>
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          2. GENTLE CHATBOT APPEARING IN THE MIDDLE OF WEBSITE
          Black, 60% transparent, minimal & natural
          ══════════════════════════════════════════════════════════ */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Main Chat Container: 60% transparent black */}
          <div className="relative w-full max-w-[390px] sm:max-w-[410px] h-[520px] max-h-[82vh] rounded-[26px] bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.75)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header: Sparkle Logo + Ask Evar AI + Close button */}
            <div className="px-5 py-3.5 bg-black/40 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src="/images/evar-ai-sparkle.png"
                    alt="Ask Evar AI"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center space-x-1.5">
                    <span>Ask Evar AI</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {messages.length > 1 && (
                  <button
                    onClick={handleReset}
                    title="Clear Chat"
                    className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Ask Evar AI"
                  className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Conversation Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 no-scrollbar">
              {/* Messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="relative w-4 h-4 mt-1 shrink-0 opacity-90">
                      <Image
                        src="/images/evar-ai-sparkle.png"
                        alt="Ask Evar AI"
                        fill
                        sizes="16px"
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] rounded-2xl p-3 text-xs ${
                      msg.role === 'user'
                        ? 'bg-zinc-800/80 text-white font-normal rounded-br-sm'
                        : 'bg-black/50 text-zinc-100 border border-white/10 rounded-bl-sm'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="leading-relaxed">{msg.content}</p>
                    ) : (
                      renderFormatted(msg.content)
                    )}
                  </div>
                </div>
              ))}

              {/* Natural Thinking Indicator */}
              {loading && (
                <div className="flex items-center space-x-2 p-3 rounded-2xl bg-black/50 border border-white/10 max-w-[65%]">
                  <div className="relative w-3.5 h-3.5 shrink-0 animate-spin" style={{ animationDuration: '3s' }}>
                    <Image
                      src="/images/evar-ai-sparkle.png"
                      alt="Thinking"
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] text-zinc-400">Thinking...</span>
                </div>
              )}

              {/* Gentle Suggestion Chips (Shown initially) */}
              {messages.length === 1 && !loading && (
                <div className="pt-2">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono mb-2 px-1">
                    Suggested topics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {quickSuggestions.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(s)}
                        className="text-[11px] text-zinc-300 hover:text-white bg-black/40 hover:bg-black/60 border border-white/10 px-3 py-1.5 rounded-full text-left transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Field (60% transparent black) */}
            <div className="p-3 bg-black/40 border-t border-white/[0.08]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about EVAR, specialties, solutions..."
                  disabled={loading}
                  className="w-full bg-black/50 border border-white/15 focus:border-white/30 rounded-full pl-4 pr-11 py-2.5 text-xs text-white placeholder-zinc-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="absolute right-1.5 w-7.5 h-7.5 rounded-full bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:hover:bg-white flex items-center justify-center transition-all duration-200"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              Circular Close Button (X) Centered Below (60% transparent)
              ══════════════════════════════════════════════════════════ */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Ask Evar AI"
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-xl"
            >
              <X className="w-4 h-4 text-zinc-300" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
