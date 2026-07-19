'use client';

import React from 'react';
import { Palette, Type, Music, Sparkles, Moon, Sun } from 'lucide-react';

const PALETTES = [
  { name: 'Royal Gold', primary: '#eab308', secondary: '#0f172a' },
  { name: 'Islamic Emerald', primary: '#10b981', secondary: '#064e3b' },
  { name: 'Kasavu Ivory', primary: '#ca8a04', secondary: '#451a03' },
  { name: 'Sapphire Blue', primary: '#2563eb', secondary: '#1e3a8a' },
  { name: 'Rose Gold', primary: '#fb7185', secondary: '#881337' },
  { name: 'Velvet Midnight', primary: '#94a3b8', secondary: '#090d16' },
];

const FONTS = [
  { id: 'Playfair Display', name: 'Playfair Display (Serif)' },
  { id: 'Amiri', name: 'Amiri (Arabic & Elegant Serif)' },
  { id: 'Inter', name: 'Inter (Modern Minimalist)' },
  { id: 'Great Vibes', name: 'Great Vibes (Romantic Script)' },
];

const MUSIC_PRESETS = [
  { id: 'acoustic-romantic', name: 'Acoustic Wedding Harmony', url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3' },
  { id: 'islamic-nasheed', name: 'Islamic Vocal Nasheed', url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b9d88ab7.mp3' },
  { id: 'classical-strings', name: 'Violin & Harp Romance', url: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_8844883f3e.mp3' },
];

export default function Step5Customize({ data, updateData }: { data: any; updateData: (fields: any) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-100">Step 5: Color, Font & Audio Customization</h2>
        <p className="text-xs text-slate-400 mt-1">Tailor the color palette, typography font, and ambient audio track.</p>
      </div>

      {/* Color Palettes */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Palette className="w-4 h-4" /> Color Palette Preset
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PALETTES.map((pal) => {
            const isSelected = data.primaryColor === pal.primary;
            return (
              <button
                type="button"
                key={pal.name}
                onClick={() => updateData({ primaryColor: pal.primary, secondaryColor: pal.secondary })}
                className={`p-3 rounded-2xl border flex items-center justify-between text-xs transition-all ${
                  isSelected ? 'border-amber-500 bg-amber-500/10 font-bold text-slate-100' : 'border-slate-800 bg-slate-900 text-slate-300'
                }`}
              >
                <span>{pal.name}</span>
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: pal.primary }} />
                  <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: pal.secondary }} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Custom Primary Accent Color</label>
            <input
              type="color"
              value={data.primaryColor || '#eab308'}
              onChange={(e) => updateData({ primaryColor: e.target.value })}
              className="w-full h-10 bg-slate-900 border border-slate-800 rounded-xl cursor-pointer p-1"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Custom Secondary Background Color</label>
            <input
              type="color"
              value={data.secondaryColor || '#0f172a'}
              onChange={(e) => updateData({ secondaryColor: e.target.value })}
              className="w-full h-10 bg-slate-900 border border-slate-800 rounded-xl cursor-pointer p-1"
            />
          </div>
        </div>
      </div>

      {/* Font Selector */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Type className="w-4 h-4" /> Typography & Font Family
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FONTS.map((font) => {
            const isSelected = data.fontStyle === font.id;
            return (
              <button
                type="button"
                key={font.id}
                onClick={() => updateData({ fontStyle: font.id })}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected ? 'border-amber-500 bg-amber-500/10 font-bold text-slate-100' : 'border-slate-800 bg-slate-900 text-slate-300'
                }`}
              >
                <div className="text-xs font-semibold text-slate-200">{font.name}</div>
                <div className="text-base mt-1 italic gold-gradient-text" style={{ fontFamily: font.id }}>
                  Shahal & Fathima
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Background Audio */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Music className="w-4 h-4" /> Background Audio Music
        </h3>

        <div className="space-y-3">
          {MUSIC_PRESETS.map((m) => {
            const isSelected = data.musicUrl === m.url;
            return (
              <button
                type="button"
                key={m.id}
                onClick={() => updateData({ musicUrl: m.url })}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  isSelected ? 'border-amber-500 bg-amber-500/10 font-bold text-slate-100' : 'border-slate-800 bg-slate-900 text-slate-300'
                }`}
              >
                <span className="text-xs">{m.name}</span>
                <span className="text-[10px] text-amber-400 font-mono">MP3 Track</span>
              </button>
            );
          })}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 mt-2">Or Paste Custom Audio MP3 URL</label>
            <input
              type="text"
              value={data.musicUrl || ''}
              onChange={(e) => updateData({ musicUrl: e.target.value })}
              placeholder="https://domain.com/my-song.mp3"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
