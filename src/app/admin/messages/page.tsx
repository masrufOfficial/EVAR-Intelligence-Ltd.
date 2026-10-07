'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Check, Mail, Clock, ShieldCheck, User } from 'lucide-react';

interface ContactMessageRecord {
  id: string;
  name: string;
  email: string;
  organization: string | null;
  interest: string;
  message: string;
  status: string;
  ipHash: string | null;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessageRecord[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessageRecord | null>(null);

  // In production this would query /api/messages, we can load sample data or fetch
  useEffect(() => {
    // Initial fetch
    fetch('/api/contact-list')
      .then((r) => r.json())
      .catch(() => null);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Inbound Advisory Inquiries</h2>
          <p className="text-xs text-slate-500">
            Encrypted client inquiries ingested through the verified security gateway.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Messages List (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Inquiry Ingestion Queue</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors cursor-pointer bg-slate-50/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900">Dr. Alexis Vance</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  UNREAD
                </span>
              </div>
              <div className="text-xs text-slate-600 font-medium mb-1">
                Category: AI Safety & Guardrail Audits
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                We are preparing to deploy a 70B foundation model internally for legal compliance and require a comprehensive adversarial AI safety audit before release...
              </p>
              <div className="text-[10px] text-slate-400 mt-2 font-mono">
                Organization: Nexus Global Financial &bull; IP Hash: 8f4a21e09c
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors cursor-pointer bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900">Julian Thorne</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  REVIEWED
                </span>
              </div>
              <div className="text-xs text-slate-600 font-medium mb-1">
                Category: Pillar 01: Executive AI Governance
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                Interested in enrolling 14 board members into the upcoming 2-Day Executive AI Governance & Strategic Risk Masterclass...
              </p>
              <div className="text-[10px] text-slate-400 mt-2 font-mono">
                Organization: Zenith Health Group &bull; IP Hash: 3e9d821a7b
              </div>
            </div>
          </div>
        </div>

        {/* Message Details (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Selected Lead Details</h3>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Contact Person</div>
              <div className="text-sm font-bold text-slate-800">Dr. Alexis Vance</div>
              <div className="text-xs text-blue-600">alexis.vance@nexusglobal.com</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Organization</div>
              <div className="text-xs text-slate-700 font-semibold">Nexus Global Financial</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Area of Interest</div>
              <div className="text-xs text-slate-700">AI Safety & Guardrail Audits</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Full Inquiry Message</div>
              <div className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200 mt-1">
                We are preparing to deploy a 70B foundation model internally for legal compliance and require a comprehensive adversarial AI safety audit before release. Specifically, we need validation against indirect prompt injections and data extraction exploits.
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center justify-center space-x-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Initiate Encrypted Reply</span>
            </button>
            <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors">
              Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
