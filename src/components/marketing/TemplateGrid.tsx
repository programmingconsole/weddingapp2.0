'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Check } from 'lucide-react';

const CATEGORIES = ['All', 'Wedding', 'Nikah', 'Reception', 'Engagement', 'Haldi', 'Mehendi'];

const SAMPLE_TEMPLATES = [
  { id: '1', slug: 'luxury-gold', name: 'Luxury Gold', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', isPremium: true, tag: 'Gold Foil' },
  { id: '2', slug: 'islamic-green', name: 'Islamic Green', category: 'Nikah', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80', isPremium: false, tag: 'Bismillah Calligraphy' },
  { id: '3', slug: 'traditional-kerala', name: 'Traditional Kerala Kasavu', category: 'Wedding', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', isPremium: true, tag: 'Ivory & Gold Kasavu' },
  { id: '4', slug: 'minimal-white', name: 'Minimalist White', category: 'Wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', isPremium: false, tag: 'Clean Serif' },
  { id: '5', slug: 'royal-blue', name: 'Royal Sapphire Blue', category: 'Reception', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', isPremium: true, tag: 'Starry Sky' },
  { id: '6', slug: 'rose-gold', name: 'Rose Gold Shimmer', category: 'Engagement', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80', isPremium: true, tag: 'Blush Pink' },
  { id: '7', slug: 'mehendi-vibrant', name: 'Vibrant Mehendi', category: 'Mehendi', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80', isPremium: false, tag: 'Henna Pattern' },
  { id: '8', slug: 'haldi-yellow', name: 'Bright Haldi Sunshine', category: 'Haldi', image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&q=80', isPremium: false, tag: 'Turmeric Yellow' },
];

export default function TemplateGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? SAMPLE_TEMPLATES
    : SAMPLE_TEMPLATES.filter((t) => t.category === activeTab);

  return (
    <section id="templates" className="py-24 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Template Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            20+ Beautiful Invitation Templates
          </h2>
          <p className="text-sm text-gray-600">
            Explore our collection of clean, modern, and traditional invitation designs.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                  activeTab === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((tpl) => (
            <div
              key={tpl.id}
              className="card-2d card-2d-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={tpl.image}
                  alt={tpl.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                  tpl.isPremium ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                }`}>
                  {tpl.isPremium ? 'PREMIUM' : 'FREE'}
                </span>

                <span className="absolute bottom-3 left-3 text-[11px] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-gray-800 font-medium border border-gray-200">
                  {tpl.tag}
                </span>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{tpl.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{tpl.category} Category</p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Link
                    href="/i/shahal-and-fathima"
                    target="_blank"
                    className="flex-1 py-2 text-center bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl border border-gray-200 transition-colors"
                  >
                    Preview
                  </Link>
                  <Link
                    href="/dashboard/invitations/create"
                    className="flex-1 py-2 text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                  >
                    Use Theme
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
