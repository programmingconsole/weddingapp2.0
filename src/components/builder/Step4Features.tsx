'use client';

import React from 'react';
import { Clock, MapPin, Users, Music, Image as ImageIcon, QrCode, Share2, MessageSquare, Video, Sparkles, Shirt } from 'lucide-react';

const FEATURE_TOGGLES = [
  { id: 'countdown', name: 'Live Countdown Timer', icon: Clock, desc: 'Real-time countdown to event date & time' },
  { id: 'rsvp', name: 'Interactive RSVP Form', icon: Users, desc: 'Allow guests to confirm attendance & guest count' },
  { id: 'guestbook', name: 'Guest Wishes & Guestbook', icon: MessageSquare, desc: 'Public guestbook feed for blessings & wishes' },
  { id: 'maps', name: 'Google Maps Navigation', icon: MapPin, desc: 'One-tap directions to venue hall' },
  { id: 'gallery', name: 'Photo Lightbox Gallery', icon: ImageIcon, desc: 'Showcase couple photoshoot & engagement images' },
  { id: 'video', name: 'Video Story Highlights', icon: Video, desc: 'Embed YouTube or Vimeo pre-wedding videos' },
  { id: 'timeline', name: 'Schedule Timeline', icon: Sparkles, desc: 'Timeline layout for Nikah, Ceremony & Reception' },
  { id: 'dressCode', name: 'Dress Code Guide', icon: Shirt, desc: 'Display recommended attire and colors' },
  { id: 'qrcode', name: 'Printable QR Code', icon: QrCode, desc: 'Generate QR code for physical invitations' },
  { id: 'share', name: 'WhatsApp & Social Share', icon: Share2, desc: 'One-click WhatsApp invite generator' },
];

export default function Step4Features({ data, updateData }: { data: any; updateData: (fields: any) => void }) {
  const features = data.features || {};

  const toggleFeature = (id: string) => {
    updateData({
      features: {
        ...features,
        [id]: !features[id],
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-100">Step 4: Interactive Feature Toggles</h2>
        <p className="text-xs text-slate-400 mt-1">Enable or disable features you want to include on your invitation page.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FEATURE_TOGGLES.map((feat) => {
          const Icon = feat.icon;
          const isEnabled = features[feat.id] !== false; // enabled by default
          return (
            <div
              key={feat.id}
              onClick={() => toggleFeature(feat.id)}
              className={`p-5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                isEnabled
                  ? 'bg-amber-500/10 border-amber-500/50 text-slate-100 shadow-md'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isEnabled ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-slate-100">{feat.name}</h3>
                  <p className="text-[10px] text-slate-400 mt-0.5">{feat.desc}</p>
                </div>
              </div>

              <div className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                isEnabled ? 'bg-amber-500' : 'bg-slate-800'
              }`}>
                <div className={`w-5 h-5 rounded-full bg-slate-950 shadow-md transition-transform ${
                  isEnabled ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
