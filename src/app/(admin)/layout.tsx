'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ShieldCheck, Users, FileText, Layers, BarChart, ArrowLeft } from 'lucide-react';

const ADMIN_NAV = [
  { href: '/admin', label: 'Overview', icon: ShieldCheck },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/invitations', label: 'Invitations', icon: FileText },
  { href: '/admin/templates', label: 'Templates', icon: Layers },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-900 p-5 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to App
            </Link>
            <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold">
              ADMIN PORTAL
            </span>
          </div>

          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-base font-serif-luxury font-bold text-slate-100">
              Admin <span className="gold-gradient-text">Panel</span>
            </span>
          </Link>

          <nav className="space-y-1.5 pt-4">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                    isActive ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
