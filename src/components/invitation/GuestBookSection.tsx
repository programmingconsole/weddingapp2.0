'use client';

import React, { useState } from 'react';
import { MessageSquare, Heart, Send } from 'lucide-react';

export default function GuestBookSection({ invitationId }: { invitationId: string }) {
  const [wishes, setWishes] = useState([
    { id: '1', name: 'Aisha & Naufal', message: 'Wishing you a lifetime of laughter, joy, and blessed togetherness!' },
    { id: '2', name: 'Faris & Gang', message: 'Can\'t wait for the grand feast and celebrations! Mubarak brother!' },
    { id: '3', name: 'Dr. Ameen K.', message: 'May your union be showered with endless bliss and happiness.' }
  ]);
  const [guestName, setGuestName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !message) return;

    setWishes((prev) => [
      { id: String(Date.now()), name: guestName, message },
      ...prev,
    ]);

    fetch('/api/wishes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ invitationId, guestName, message }),
    }).catch(() => {});

    setGuestName('');
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">Blessings & Love</h3>
        <h4 className="text-2xl font-serif-luxury font-bold text-slate-100">Guest Book & Wishes</h4>
      </div>

      {/* Input Form */}
      <form onSubmit={handleAddWish} className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md"
          >
            <Send className="w-3.5 h-3.5" /> Post Blessing
          </button>
        </div>
        <textarea
          rows={2}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a sweet note or prayer for the bride & groom..."
          className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
        />
      </form>

      {/* Wishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wishes.map((w) => (
          <div key={w.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-amber-300">{w.name}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">"{w.message}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
