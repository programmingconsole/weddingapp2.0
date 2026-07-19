'use client';

import React from 'react';
import { Layers, Plus, Star } from 'lucide-react';

export default function AdminTemplatesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Template Manager</h1>
          <p className="text-xs text-slate-400 mt-1">Manage themes, categories, and luxury styling presets.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-100">Luxury Gold</h3>
            <span className="px-2 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-full">PRO</span>
          </div>
          <p className="text-xs text-slate-400">Category: Wedding • Tags: Gold, Royal</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-100">Islamic Green & Gold</h3>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full">FREE</span>
          </div>
          <p className="text-xs text-slate-400">Category: Nikah • Tags: Bismillah, Calligraphy</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-100">Traditional Kerala Kasavu</h3>
            <span className="px-2 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-full">PRO</span>
          </div>
          <p className="text-xs text-slate-400">Category: Wedding • Tags: South Indian, Kasavu</p>
        </div>
      </div>
    </div>
  );
}
