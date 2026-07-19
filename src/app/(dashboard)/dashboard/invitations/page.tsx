'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Edit3, Copy, ExternalLink, Trash2, Eye, Users } from 'lucide-react';

export default function ManageInvitationsPage() {
  const invitations = [
    {
      id: '1',
      slug: 'shahal-and-fathima',
      title: 'Shahal Ahmed & Fathima Raniya Wedding',
      eventType: 'Nikah',
      themeName: 'Islamic Green & Gold',
      date: '28 Nov 2026',
      views: 248,
      rsvps: 38,
      isPublished: true,
    },
    {
      id: '2',
      slug: 'shahal-reception',
      title: 'Shahal & Fathima Reception Feast',
      eventType: 'Reception',
      themeName: 'Royal Sapphire Blue',
      date: '29 Nov 2026',
      views: 42,
      rsvps: 12,
      isPublished: false,
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">My Invitations</h1>
          <p className="text-xs text-slate-400 mt-1">Manage, edit, duplicate, and share your digital wedding invitations.</p>
        </div>

        <Link
          href="/dashboard/invitations/create"
          className="py-2.5 px-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs rounded-2xl shadow-lg flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Create New Invitation</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {invitations.map((inv) => (
          <div key={inv.id} className="glass-card p-6 rounded-3xl border border-slate-800 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                  inv.isPublished ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {inv.isPublished ? 'Published Live' : 'Draft'}
                </span>
                <span className="text-[11px] text-amber-400 font-medium">{inv.eventType}</span>
              </div>

              <h2 className="text-lg font-bold text-slate-100">{inv.title}</h2>
              <p className="text-xs text-slate-400">Theme: {inv.themeName} • Event Date: {inv.date}</p>

              <div className="flex items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="font-mono">{inv.views} Views</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">{inv.rsvps} RSVPs</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-850 flex items-center justify-between gap-2">
              <Link
                href="/dashboard/invitations/create"
                className="py-2 px-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                <span>Edit</span>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href={`/i/${inv.slug}`}
                  target="_blank"
                  className="py-2 px-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md"
                >
                  <span>Preview Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
