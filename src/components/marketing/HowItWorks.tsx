'use client';

import React from 'react';
import { Layers, Edit3, Share2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Layers,
    title: 'Choose Event & Template',
    desc: 'Select your event type (Wedding, Nikah, Reception, Engagement) and pick from 20+ professionally designed templates.',
  },
  {
    step: '02',
    icon: Edit3,
    title: 'Customize Details & Colors',
    desc: 'Enter bride & groom names, photos, venue Google Maps pin, dates, spiritual quotes, background audio, and dress code.',
  },
  {
    step: '03',
    icon: Share2,
    title: 'Publish & Collect RSVPs',
    desc: 'Get a unique invitation URL, download printable QR codes for paper cards, and track guest RSVPs in real time.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            How It Works in 3 Easy Steps
          </h2>
          <p className="text-sm text-gray-600">
            Create and launch your digital invitation website in under 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="card-2d p-8 relative border border-gray-200 space-y-4">
                <span className="text-4xl font-black text-gray-200 font-mono absolute top-6 right-6">{s.step}</span>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
