'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Eye, Users } from 'lucide-react';

export default function AdminInvitationsPage() {
  const invitations = [
    { id: '1', slug: 'shahal-and-fathima', title: 'Shahal & Fathima Wedding & Nikah', user: 'shahal@example.com', views: 248, rsvps: 38 },
    { id: '2', slug: 'rahul-sneha', title: 'Rahul & Sneha Wedding Celebration', user: 'rahul@gmail.com', views: 110, rsvps: 18 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Global Invitations</h1>
        <p className="text-xs text-slate-400 mt-1">Overview of all active and published invitation links across the platform.</p>
      </div>

      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 font-bold uppercase text-[10px]">
              <tr>
                <th className="p-4">Invitation Title</th>
                <th className="p-4">Host User</th>
                <th className="p-4">Slug URL</th>
                <th className="p-4">Views</th>
                <th className="p-4">RSVPs</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {invitations.map((inv) => (
                <tr key={inv.id}>
                  <td className="p-4 font-bold text-slate-100">{inv.title}</td>
                  <td className="p-4 text-slate-400 font-mono">{inv.user}</td>
                  <td className="p-4 font-mono text-amber-400">/i/{inv.slug}</td>
                  <td className="p-4 font-mono">{inv.views}</td>
                  <td className="p-4 font-mono font-bold text-emerald-400">{inv.rsvps}</td>
                  <td className="p-4">
                    <Link
                      href={`/i/${inv.slug}`}
                      target="_blank"
                      className="py-1 px-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg text-[11px] font-semibold inline-flex items-center gap-1"
                    >
                      <span>Open Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
