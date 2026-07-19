'use client';

import React from 'react';
import { Clock, MapPin, Users, Music, Image as ImageIcon, QrCode, Globe, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: Clock,
    title: 'Live Countdown Timer',
    desc: 'Build anticipation with dynamic live countdowns to Nikah, Reception, and Ceremony times.',
  },
  {
    icon: Users,
    title: 'Instant Guest RSVP',
    desc: 'Allow guests to confirm attendance, guest count, and dietary needs. Host can export CSV anytime.',
  },
  {
    icon: MapPin,
    title: 'One-Tap Google Maps Route',
    desc: 'Ensure no guest gets lost with embedded venue pins and direct turn-by-turn navigation.',
  },
  {
    icon: Music,
    title: 'Background Audio Music',
    desc: 'Set romantic acoustic tunes or Islamic Nasheeds that play smoothly when guests open the link.',
  },
  {
    icon: ImageIcon,
    title: 'Photo & Video Gallery',
    desc: 'Showcase pre-wedding shoots, ring ceremonies, and couple story highlights in high definition.',
  },
  {
    icon: QrCode,
    title: 'Printable QR Code',
    desc: 'Download high-resolution QR codes to print directly on physical wedding cards.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    desc: 'Translate invitations into English, Malayalam, Hindi, and Arabic effortlessly.',
  },
  {
    icon: ShieldCheck,
    title: 'Mobile First & SEO Ready',
    desc: 'Fast loading speed, mobile responsive design, and WhatsApp OpenGraph preview cards.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Feature Set</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Everything You Need for a Perfect Event
          </h2>
          <p className="text-sm text-gray-600">
            Comprehensive tools designed to make digital wedding invitations effortless and engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="card-2d card-2d-hover p-6 border border-gray-200 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{feat.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
