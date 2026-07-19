'use client';

import React from 'react';
import { Users, FileText, DollarSign, Layers, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">System Admin Dashboard</h1>
        <p className="text-xs text-slate-400 mt-1">Platform overview, user metrics, subscriptions, and active invitations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Total Registered Users</span>
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl"><Users className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">1,482</div>
          <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +124 new users this month</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Total Invitations Created</span>
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl"><FileText className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">3,890</div>
          <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 2,940 active live links</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Premium Subscriptions</span>
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl"><DollarSign className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">$24,980</div>
          <p className="text-[10px] text-emerald-400 font-bold">Total Platform Revenue</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Active Templates</span>
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl"><Layers className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">20+</div>
          <p className="text-[10px] text-slate-400 font-medium">Luxury & Nikah Styles</p>
        </div>
      </div>

      {/* System Health Card */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">System Operations & API Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
            <span className="text-slate-400">Database Engine</span>
            <div className="text-emerald-400 font-bold mt-1">Operational (SQLite / Supabase)</div>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
            <span className="text-slate-400">CDN Storage & Cloudinary</span>
            <div className="text-emerald-400 font-bold mt-1">Operational (100% Uptime)</div>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800">
            <span className="text-slate-400">RSVP & Email Dispatch</span>
            <div className="text-emerald-400 font-bold mt-1">Active Queue</div>
          </div>
        </div>
      </div>
    </div>
  );
}
