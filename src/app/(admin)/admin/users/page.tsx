'use client';

import React, { useState } from 'react';
import { Users, Crown, Shield, Search } from 'lucide-react';

export default function AdminUsersPage() {
  const [users, setUsers] = useState([
    { id: '1', name: 'Shahal Ahmed', email: 'shahal@example.com', role: 'ADMIN', tier: 'PREMIUM', created: '2026-07-10' },
    { id: '2', name: 'Fathima Raniya', email: 'fathima@example.com', role: 'USER', tier: 'PREMIUM', created: '2026-07-12' },
    { id: '3', name: 'Rahul Sharma', email: 'rahul@gmail.com', role: 'USER', tier: 'FREE', created: '2026-07-15' },
    { id: '4', name: 'Mohammed Al-Mansoor', email: 'mansoor@ae.com', role: 'USER', tier: 'PREMIUM', created: '2026-07-18' },
  ]);

  const toggleTier = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, tier: u.tier === 'FREE' ? 'PREMIUM' : 'FREE' } : u))
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">User Management</h1>
        <p className="text-xs text-slate-400 mt-1">Manage user roles, subscriptions, and account privileges.</p>
      </div>

      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 font-bold uppercase text-[10px]">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Subscription Plan</th>
                <th className="p-4">Joined Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="p-4 font-bold text-slate-100">{u.name}</td>
                  <td className="p-4 text-slate-400 font-mono">{u.email}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      u.role === 'ADMIN' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      u.tier === 'PREMIUM' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {u.tier}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 text-[11px]">{u.created}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleTier(u.id)}
                      className="py-1 px-3 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 rounded-lg text-[11px] font-semibold"
                    >
                      Toggle Plan
                    </button>
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
