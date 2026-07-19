'use client';

import React from 'react';
import { Eye, Smartphone, Monitor, Globe, TrendingUp, BarChart, ArrowUpRight } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Visitor Analytics</h1>
        <p className="text-xs text-slate-400 mt-1">Real-time visitor counts, traffic sources, device breakdown, and country analytics.</p>
      </div>

      {/* Overview Metric Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-medium">Total Views</span>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">248</div>
          <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +18% this week</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-medium">Unique Visitors</span>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">184</div>
          <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 74% conversion rate</p>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-medium">Map Directions Clicked</span>
          <div className="text-3xl font-extrabold text-slate-100 font-mono">62</div>
          <p className="text-[10px] text-amber-400 font-bold">Google Maps Navigation</p>
        </div>
      </div>

      {/* Analytics Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Device Distribution */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-amber-400" /> Device Distribution
          </h2>

          <div className="space-y-3 pt-2 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Mobile (iOS / Android)</span>
                <span className="font-bold font-mono">82% (203 views)</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '82%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Desktop Browsers</span>
                <span className="font-bold font-mono">14% (35 views)</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '14%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Tablet Devices</span>
                <span className="font-bold font-mono">4% (10 views)</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '4%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4 text-amber-400" /> Top Traffic Sources
          </h2>

          <div className="space-y-3 pt-2 text-xs">
            <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-2xl border border-slate-800">
              <span className="font-semibold text-slate-200">WhatsApp Direct Links</span>
              <span className="font-mono text-amber-400 font-bold">142 Referrals (57%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-2xl border border-slate-800">
              <span className="font-semibold text-slate-200">Instagram Bio & Stories</span>
              <span className="font-mono text-amber-400 font-bold">64 Referrals (26%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-2xl border border-slate-800">
              <span className="font-semibold text-slate-200">QR Code Card Scans</span>
              <span className="font-mono text-amber-400 font-bold">42 Scans (17%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
