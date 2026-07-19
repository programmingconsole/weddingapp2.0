'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Aisha & Naufal',
    role: 'Kozhikode, Kerala',
    text: 'Wedding Invite AI made our Nikah invitation so effortless! All our relatives loved the Google Maps pin and background nasheed music.',
    stars: 5,
  },
  {
    name: 'Priya & Rahul',
    role: 'Bangalore, India',
    text: 'Exporting the guest RSVP list to CSV saved us hours of manual work for venue catering. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Fatima & Tariq',
    role: 'Dubai, UAE',
    text: 'The multi-language support (Arabic & English) was perfect for our international guests. The QR code looked great printed on our paper cards.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Loved by Couples</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            What Couples Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="card-2d p-6 border border-gray-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                ))}
              </div>
              <p className="text-xs text-gray-700 italic leading-relaxed">"{r.text}"</p>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{r.name}</h4>
                  <p className="text-[10px] text-gray-500">{r.role}</p>
                </div>
                <Quote className="w-5 h-5 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
