'use client';

import React, { useState } from 'react';
import { User, Mail, Shield, Crown, Check, Sparkles } from 'lucide-react';

export default function SettingsPage() {
  const [name, setName] = useState('Shahal Ahmed');
  const [email, setEmail] = useState('shahal@example.com');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Profile & Subscription</h1>
        <p className="text-xs text-slate-400 mt-1">Manage account security, contact details, and subscription tier.</p>
      </div>

      {/* Subscription Card */}
      <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase">
            <Crown className="w-3.5 h-3.5 fill-slate-950" /> Premium Subscription
          </div>
          <h2 className="text-xl font-bold text-slate-100">Lifetime Premium Plan</h2>
          <p className="text-xs text-amber-200/80">Unlimited themes, background music, HD gallery upload, and custom URLs.</p>
        </div>

        <button
          type="button"
          className="py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs rounded-2xl shadow-lg shrink-0"
        >
          Manage Billing
        </button>
      </div>

      {/* Profile Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <User className="w-4 h-4" /> Personal Information
        </h2>

        {saved && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl">
            Profile settings updated successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs rounded-xl shadow-md transition-colors"
          >
            Save Profile Changes
          </button>
        </form>
      </div>
    </div>
  );
}
