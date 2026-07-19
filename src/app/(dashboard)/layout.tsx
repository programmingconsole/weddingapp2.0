'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Heart,
  LayoutDashboard,
  FileText,
  Layers,
  BarChart3,
  Users,
  CreditCard,
  User,
  Settings,
  Plus,
  Search,
  Bell,
  LogOut,
  ShieldCheck
} from 'lucide-react';

const SIDEBAR_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/invitations', label: 'Invitations', icon: FileText },
  { href: '/dashboard/templates', label: 'Templates', icon: Layers },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/rsvps', label: 'RSVP Responses', icon: Users },
  { href: '/dashboard/subscription', label: 'Subscription', icon: CreditCard },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  { href: '/admin', label: 'Admin Portal', icon: ShieldCheck },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 flex">
      {/* 2D Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-5 hidden md:flex shrink-0">
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-sm">
              <Heart className="w-5 h-5 fill-white stroke-none" />
            </div>
            <span className="text-base font-heading font-extrabold text-gray-900 tracking-tight">
              Wedding Invite <span className="text-emerald-600">AI</span>
            </span>
          </Link>

          {/* Action Button */}
          <Link
            href="/dashboard/invitations/create"
            className="btn-primary-emerald w-full py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Create Invitation</span>
          </Link>

          {/* Navigation List */}
          <nav className="space-y-1">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/60'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Card */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
              S
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Shahal Ahmed</div>
              <div className="text-[10px] text-emerald-600 font-semibold">Premium Member</div>
            </div>
          </div>
          <Link href="/login" className="text-gray-400 hover:text-rose-600 p-1" title="Log out">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* Main View + Top Bar */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 px-4 sm:px-8 flex items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search invitations, guests..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
            />
          </div>

          {/* Top Bar Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-50 relative">
              <Bell className="w-5 h-5" />
              <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1.5 right-1.5" />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                S
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
