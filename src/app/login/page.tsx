'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('superadmin@evar.ai');
  const [password, setPassword] = useState('Password123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      let data: any = {};
      const rawText = await res.text();
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        data = { error: rawText || `Server responded with status ${res.status}` };
      }

      if (!res.ok) {
        throw new Error(data.error || `Authentication failed (${res.status})`);
      }

      // Hard redirect ensures browser loads admin dashboard with active session cookie
      window.location.href = '/admin';
    } catch (err: any) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const quickFillRole = (userEmail: string) => {
    setEmail(userEmail);
    setPassword('Password123!');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] flex flex-col justify-center items-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2.5 mb-6">
            <div className="w-6 h-8">
              <svg viewBox="0 0 31.5 48.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="loginMark" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#9e9e9e" />
                    <stop offset="0.28" stopColor="#a6a6a6" />
                    <stop offset="0.34" stopColor="#a3a3a3" />
                    <stop offset="0.40" stopColor="#3a3a3a" />
                    <stop offset="0.55" stopColor="#414141" />
                    <stop offset="0.60" stopColor="#7a7a7a" />
                    <stop offset="0.68" stopColor="#8e8e8e" />
                    <stop offset="0.80" stopColor="#a9a9a9" />
                    <stop offset="0.95" stopColor="#c4c4c4" />
                    <stop offset="1" stopColor="#cccccc" />
                  </linearGradient>
                </defs>
                <path
                  d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z"
                  fill="url(#loginMark)"
                />
                <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
                <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-[#fafafa]">
              EVAR Intelligence
            </span>
          </Link>
          <div className="badge-pill mb-3">
            Admin Console Gateway
          </div>
          <h1 className="text-2xl font-normal text-[#fafafa] tracking-tight">System Sign In</h1>
          <p className="text-xs text-[#a7a6a6] mt-1">
            Zero-trust authentication enforced with rate-limiting &amp; session rotation.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start space-x-2.5">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>{error}</div>
          </div>
        )}

        {/* Login Form */}
        <div className="dark-panel p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#a7a6a6] mb-1.5">
                Admin Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors"
                placeholder="admin@evar.ai"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-[#a7a6a6]">
                  Master Password
                </label>
                <span className="text-[10px] text-[#8b8a8a] font-mono">Bcrypt Salted</span>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs text-[#fafafa] placeholder-[#8b8a8a] focus:outline-none focus:border-white/30 transition-colors"
                placeholder="••••••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="pill-btn w-full !py-3 !text-xs font-semibold mt-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </>
              )}
            </button>
          </form>

          {/* Quick RBAC Role Selector */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8b8a8a] mb-2.5">
              Quick-Fill Test Roles (Password: Password123!)
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => quickFillRole('superadmin@evar.ai')}
                className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-[10px] text-left text-[#fafafa]"
              >
                <div className="font-bold">SUPER_ADMIN</div>
                <div className="text-[#8b8a8a] truncate">superadmin@evar.ai</div>
              </button>

              <button
                type="button"
                onClick={() => quickFillRole('admin@evar.ai')}
                className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-[10px] text-left text-[#fafafa]"
              >
                <div className="font-bold">ADMIN</div>
                <div className="text-[#8b8a8a] truncate">admin@evar.ai</div>
              </button>

              <button
                type="button"
                onClick={() => quickFillRole('editor@evar.ai')}
                className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-[10px] text-left text-[#fafafa]"
              >
                <div className="font-bold">EDITOR</div>
                <div className="text-[#8b8a8a] truncate">editor@evar.ai</div>
              </button>

              <button
                type="button"
                onClick={() => quickFillRole('content@evar.ai')}
                className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-[10px] text-left text-[#fafafa]"
              >
                <div className="font-bold">CONTENT_MGR</div>
                <div className="text-[#8b8a8a] truncate">content@evar.ai</div>
              </button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-[#8b8a8a] hover:text-[#fafafa] transition-colors"
          >
            &larr; Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
