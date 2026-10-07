'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  GraduationCap,
  Cpu,
  BookOpen,
  MessageSquare,
  Users,
  ShieldCheck,
  History,
  Settings,
  LogOut,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Menu,
  X,
  Lock,
} from 'lucide-react';
import { UserRole } from '@/lib/auth';

interface AdminLayoutProps {
  children: React.ReactNode;
  userRole?: UserRole;
  userName?: string;
  userEmail?: string;
  title?: string;
}

export default function AdminLayout({
  children,
  userRole = 'SUPER_ADMIN',
  userName = 'Administrator',
  userEmail = 'admin@evar.ai',
  title = 'System Administration',
}: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, roles: ['SUPER_ADMIN', 'ADMIN', 'EDITOR', 'CONTENT_MANAGER'] },
    { name: 'Products & Solutions', href: '/admin/products', icon: Package, roles: ['SUPER_ADMIN', 'ADMIN', 'EDITOR'] },
    { name: 'AI Awareness', href: '/admin/awareness', icon: GraduationCap, roles: ['SUPER_ADMIN', 'ADMIN', 'EDITOR', 'CONTENT_MANAGER'] },
    { name: 'Automation Workflows', href: '/admin/automation', icon: Cpu, roles: ['SUPER_ADMIN', 'ADMIN', 'EDITOR'] },
    { name: 'Research Papers', href: '/admin/research', icon: BookOpen, roles: ['SUPER_ADMIN', 'ADMIN', 'EDITOR'] },
    { name: 'Inquiries & Leads', href: '/admin/messages', icon: MessageSquare, roles: ['SUPER_ADMIN', 'ADMIN', 'EDITOR', 'CONTENT_MANAGER'] },
    { name: 'Users & Roles (RBAC)', href: '/admin/users', icon: Users, roles: ['SUPER_ADMIN'] },
    { name: 'Security Center', href: '/admin/security', icon: ShieldCheck, roles: ['SUPER_ADMIN', 'ADMIN'] },
    { name: 'Audit Logs', href: '/admin/audit-logs', icon: History, roles: ['SUPER_ADMIN', 'ADMIN'] },
    { name: 'Website Settings', href: '/admin/settings', icon: Settings, roles: ['SUPER_ADMIN', 'ADMIN'] },
  ];

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch {
      router.push('/login');
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'ADMIN':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'EDITOR':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'CONTENT_MANAGER':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col md:flex-row antialiased font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-[#0a0f1d] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="relative h-7 w-20">
            <Image
              src="/images/evar-logo-dark.png"
              alt="EVAR Intelligence"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xs text-slate-400 font-mono">Console</span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dark Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#0a0f1d] text-slate-300 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } border-r border-slate-800`}
      >
        <div>
          {/* Sidebar Brand */}
          <div className="p-6 border-b border-slate-800/80">
            <Link href="/" className="inline-block relative h-9 w-28 mb-1">
              <Image
                src="/images/evar-logo-dark.png"
                alt="EVAR Intelligence"
                fill
                className="object-contain"
              />
            </Link>
            <div className="text-[10px] text-slate-400 font-mono flex items-center space-x-1.5 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>EVAR Operations Console v1.0</span>
            </div>
          </div>

          {/* Current User Pill */}
          <div className="px-4 py-3 mx-4 my-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-white truncate max-w-[130px]">
                {userName}
              </span>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${getRoleBadgeColor(
                  userRole
                )}`}
              >
                {userRole.replace('_', ' ')}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 truncate">{userEmail}</div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 py-2 space-y-1">
            {navItems.map((item) => {
              const isAllowed = item.roles.includes(userRole);
              const isActive = pathname === item.href;
              const Icon = item.icon;

              if (!isAllowed) {
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 text-xs cursor-not-allowed select-none"
                    title={`Restricted to ${item.roles.join(', ')}`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Icon className="w-4 h-4 text-slate-700" />
                      <span>{item.name}</span>
                    </div>
                    <Lock className="w-3 h-3 text-slate-700" />
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800/80 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <span className="flex items-center space-x-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Public Website</span>
            </span>
            <span className="text-[10px] text-slate-500">Live</span>
          </Link>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-800/40 text-xs font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{loggingOut ? 'Revoking Session...' : 'Sign Out'}</span>
          </button>
        </div>
      </aside>

      {/* Main Clean Workspace (Off-White Background) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Workspace Top Header Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">{title}</h1>
            <p className="text-xs text-slate-500">EVAR Intelligence Ltd. Enterprise Control Plane</p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI Safety Guard Active</span>
            </div>

            <Link
              href="/admin/security"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors flex items-center space-x-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Security Pulse</span>
            </Link>
          </div>
        </header>

        {/* Workspace Body */}
        <main className="p-6 md:p-8 flex-1 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
