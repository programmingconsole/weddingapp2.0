'use client';

import React from 'react';
import { Check, Crown } from 'lucide-react';

const THEMES = [
  { id: 'luxury-gold', name: 'Luxury Gold', category: 'Wedding', preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', isPremium: true, primaryColor: '#eab308' },
  { id: 'islamic-green', name: 'Islamic Green', category: 'Nikah', preview: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&q=80', isPremium: false, primaryColor: '#10b981' },
  { id: 'minimal-white', name: 'Minimal White', category: 'Wedding', preview: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', isPremium: false, primaryColor: '#f8fafc' },
  { id: 'royal-blue', name: 'Royal Blue', category: 'Reception', preview: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', isPremium: true, primaryColor: '#2563eb' },
  { id: 'elegant-black', name: 'Elegant Black Velvet', category: 'Reception', preview: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80', isPremium: false, primaryColor: '#090d16' },
  { id: 'traditional-kerala', name: 'Traditional Kerala Kasavu', category: 'Wedding', preview: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', isPremium: true, primaryColor: '#ca8a04' },
  { id: 'modern-floral', name: 'Modern Floral Blossom', category: 'Engagement', preview: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&q=80', isPremium: false, primaryColor: '#f472b6' },
  { id: 'rose-gold', name: 'Rose Gold Shimmer', category: 'Wedding', preview: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', isPremium: true, primaryColor: '#fb7185' },
];

export default function Step2Theme({ data, updateData }: { data: any; updateData: (fields: any) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-100">Step 2: Choose 3D Visual Theme & Style</h2>
        <p className="text-xs text-slate-400 mt-1">Select a 3D luxury theme template for your digital invitation website.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 perspective-container">
        {THEMES.map((t) => {
          const isSelected = data.themeId === t.id;
          return (
            <div
              key={t.id}
              onClick={() => updateData({ themeId: t.id, primaryColor: t.primaryColor })}
              className={`group relative rounded-[28px] overflow-hidden cursor-pointer border transition-all duration-500 card-3d-tilt ${
                isSelected
                  ? 'border-amber-500 ring-4 ring-amber-500/30 shadow-2xl scale-[1.03] z-10'
                  : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
              }`}
            >
              <div className="h-48 relative overflow-hidden">
                <img src={t.preview} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
                
                {t.isPremium && (
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    PRO
                  </span>
                )}

                {isSelected && (
                  <div className="absolute inset-0 bg-amber-500/20 backdrop-blur-xs flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 rounded-full flex items-center justify-center shadow-2xl">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xs text-slate-100">{t.name}</h3>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{t.category} Style</p>
                </div>
                <div className="w-5 h-5 rounded-full border border-slate-700 shadow-inner" style={{ backgroundColor: t.primaryColor }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
