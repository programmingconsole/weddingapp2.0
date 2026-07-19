'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Eye, Users, FileText, TrendingUp, ExternalLink, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function DashboardOverviewPage() {
  const [copied, setCopied] = useState(false);
  const [demoUrl, setDemoUrl] = useState('https://weddinginvite.ai/i/shahal-and-fathima');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDemoUrl(`${window.location.origin}/i/shahal-and-fathima`);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(demoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-extrabold text-gray-900">Dashboard Overview</h1>
          <p className="text-xs text-gray-500 mt-0.5">Welcome back, Shahal! Track your digital invitations and guest RSVPs.</p>
        </div>

        <Link
          href="/dashboard/invitations/create"
          className="btn-primary-emerald py-2.5 px-5 text-xs font-bold flex items-center gap-2 shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Create New Invitation</span>
        </Link>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card-2d p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Total Invitations</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><FileText className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-gray-900 font-mono">2</div>
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> 1 Published Active Link
          </div>
        </div>

        <div className="card-2d p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Total Views</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Eye className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-gray-900 font-mono">248</div>
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +34 views today
          </div>
        </div>

        <div className="card-2d p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">RSVP Count</span>
            <div className="p-2 bg-rose-50 text-rose-600 rounded-xl"><Users className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-gray-900 font-mono">38</div>
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> 92% Attendance Rate
          </div>
        </div>

        <div className="card-2d p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Unique Visitors</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><TrendingUp className="w-4 h-4" /></div>
          </div>
          <div className="text-3xl font-extrabold text-gray-900 font-mono">184</div>
          <div className="text-[11px] text-gray-500 font-medium">74% conversion rate</div>
        </div>
      </div>

      {/* Featured Invitation Banner Card */}
      <div className="card-2d p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                Active & Published
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold uppercase">
                Nikah Theme
              </span>
            </div>
            <h2 className="text-xl font-heading font-bold text-gray-900 mt-2">
              Shahal Ahmed & Fathima Raniya Wedding
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">28 November 2026 • Grand Palace Convention Center, Kozhikode</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="btn-outline-clean py-2 px-3 text-xs flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Link'}</span>
            </button>

            <Link
              href="/i/shahal-and-fathima"
              target="_blank"
              className="btn-primary-emerald py-2 px-3 text-xs flex items-center gap-1.5 shadow-sm"
            >
              <span>View Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Recent RSVPs Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Recent Guest RSVPs</h3>
            <Link href="/dashboard/rsvps" className="text-xs text-emerald-600 font-bold hover:underline">
              View All RSVPs →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-200 uppercase font-bold text-[10px]">
                <tr>
                  <th className="p-3">Guest Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Attending</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">Rashid & Family</td>
                  <td className="p-3 text-gray-500">+91 98470 12345</td>
                  <td className="p-3 font-semibold text-emerald-600">4 Guests</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Attending</span></td>
                  <td className="p-3 text-gray-500 truncate max-w-xs">Heartiest congratulations Shahal & Fathima!</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">Dr. Ameen K.</td>
                  <td className="p-3 text-gray-500">+91 94471 99887</td>
                  <td className="p-3 font-semibold text-emerald-600">2 Guests</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Attending</span></td>
                  <td className="p-3 text-gray-500 truncate max-w-xs">Looking forward to attending the Nikah.</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">Sujith Kumar</td>
                  <td className="p-3 text-gray-500">+91 98950 00112</td>
                  <td className="p-3">1 Guest</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">Declined</span></td>
                  <td className="p-3 text-gray-500 truncate max-w-xs">Wishing you a wonderful married life ahead!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
