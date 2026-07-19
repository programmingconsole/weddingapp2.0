'use client';

import React, { useState } from 'react';
import { Download, Users, CheckCircle2, XCircle, Search, Filter } from 'lucide-react';

export default function RsvpManagementPage() {
  const [rsvps, setRsvps] = useState([
    { id: '1', guestName: 'Rashid Khan & Family', phone: '+91 98470 12345', attendingCount: 4, status: 'ATTENDING', message: 'Heartiest congratulations Shahal & Fathima! May Allah bless your union.', date: '2026-07-19' },
    { id: '2', guestName: 'Dr. Ameen K.', phone: '+91 94471 99887', attendingCount: 2, status: 'ATTENDING', message: 'So happy for you both! Looking forward to attending.', date: '2026-07-19' },
    { id: '3', guestName: 'Sujith Kumar', phone: '+91 98950 00112', attendingCount: 1, status: 'NOT_ATTENDING', message: 'Wishing you a wonderful married life ahead!', date: '2026-07-18' },
    { id: '4', guestName: 'Faris & Family', phone: '+91 97456 11223', attendingCount: 3, status: 'ATTENDING', message: 'Mubarak brother! See you at the feast!', date: '2026-07-18' },
  ]);

  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = rsvps.filter((r) => {
    const matchesFilter = filter === 'ALL' || r.status === filter;
    const matchesSearch = r.guestName.toLowerCase().includes(search.toLowerCase()) || r.phone.includes(search);
    return matchesFilter && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['Guest Name', 'Phone', 'Attending Count', 'Status', 'Message', 'Date'];
    const rows = rsvps.map((r) => [r.guestName, r.phone, r.attendingCount, r.status, `"${r.message}"`, r.date]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'wedding_rsvps.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Guest RSVPs</h1>
          <p className="text-xs text-slate-400 mt-1">Track guest confirmations, guest counts, and export to CSV spreadsheet.</p>
        </div>

        <button
          onClick={exportCSV}
          className="py-2.5 px-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs rounded-2xl shadow-lg flex items-center gap-2 self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV Spreadsheet</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search guest name or phone..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
              filter === 'ALL' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
            }`}
          >
            All ({rsvps.length})
          </button>
          <button
            onClick={() => setFilter('ATTENDING')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
              filter === 'ATTENDING' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
            }`}
          >
            Attending (3)
          </button>
          <button
            onClick={() => setFilter('NOT_ATTENDING')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
              filter === 'NOT_ATTENDING' ? 'bg-rose-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
            }`}
          >
            Declined (1)
          </button>
        </div>
      </div>

      {/* RSVPs Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 uppercase font-bold text-[10px]">
              <tr>
                <th className="p-4">Guest Name</th>
                <th className="p-4">Phone Number</th>
                <th className="p-4">Attending Count</th>
                <th className="p-4">Status</th>
                <th className="p-4">Message / Blessing</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-slate-900/40">
                  <td className="p-4 font-bold text-slate-100">{r.guestName}</td>
                  <td className="p-4 text-slate-400 font-mono">{r.phone}</td>
                  <td className="p-4 font-bold text-amber-400">{r.attendingCount} Persons</td>
                  <td className="p-4">
                    {r.status === 'ATTENDING' ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Attending
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold inline-flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> Declined
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-slate-300 italic max-w-xs">{r.message}</td>
                  <td className="p-4 text-slate-500 text-[11px]">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
