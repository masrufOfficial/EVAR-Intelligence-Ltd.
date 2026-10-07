'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="min-h-screen bg-[#00212b] text-[#fafafa] flex flex-col justify-center items-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2.5 mb-6 group">
            <div className="relative h-10 w-36">
              <Image
                src="/images/evar-logo-dark.png"
                alt="EVAR Intelligence"
                fill
                priority
                className="object-contain"
              />
            </div>
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
