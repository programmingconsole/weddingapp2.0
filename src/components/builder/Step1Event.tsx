'use client';

import React from 'react';
import { Heart, Sparkles, Calendar, Moon, Gift, Sun, Ring, PartyPopper } from 'lucide-react';

const EVENTS = [
  { id: 'Wedding', name: 'Wedding', icon: Heart, desc: 'Classic wedding celebration & ceremony' },
  { id: 'Nikah', name: 'Nikah Ceremony', icon: Moon, desc: 'Traditional Islamic Nikah auspicious event' },
  { id: 'Reception', name: 'Reception', icon: Sparkles, desc: 'Post-wedding grand feast & greeting reception' },
  { id: 'Engagement', name: 'Engagement', icon: Calendar, desc: 'Ring exchange & commitment announcement' },
  { id: 'Save The Date', name: 'Save The Date', icon: Calendar, desc: 'Pre-invitation date reserve card' },
  { id: 'Haldi', name: 'Haldi Ceremony', icon: Sun, desc: 'Turmeric ritual & joyous gathering' },
  { id: 'Mehendi', name: 'Mehendi Night', icon: Heart, desc: 'Henna celebration & music night' },
  { id: 'Walima', name: 'Walima Feast', icon: Sparkles, desc: 'Islamic marriage feast celebration' },
  { id: 'Birthday', name: 'Birthday Party', icon: PartyPopper, desc: 'Milestone birthday party celebration' },
  { id: 'Baby Shower', name: 'Baby Shower', icon: Gift, desc: 'Welcoming the new bundle of joy' },
];

export default function Step1Event({ data, updateData }: { data: any; updateData: (fields: any) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-100">Step 1: Choose Your Event Type</h2>
        <p className="text-xs text-slate-400 mt-1">Select the primary celebration for this digital invitation</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {EVENTS.map((evt) => {
          const Icon = evt.icon;
          const isSelected = data.eventType === evt.id;
          return (
            <button
              type="button"
              key={evt.id}
              onClick={() => updateData({ eventType: evt.id })}
              className={`p-5 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/30 text-slate-100 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-amber-400'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm text-slate-100">{evt.name}</h3>
              <p className="text-[11px] text-slate-400 mt-1">{evt.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
