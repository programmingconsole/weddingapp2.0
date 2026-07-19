'use client';

import React from 'react';
import { User, Calendar, MapPin, Phone, Mail, BookOpen, Quote, Clock, Image as ImageIcon } from 'lucide-react';

export default function Step3Details({ data, updateData }: { data: any; updateData: (fields: any) => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-100">Step 3: Invitation Details</h2>
        <p className="text-xs text-slate-400 mt-1">Enter couple names, dates, times, venue location, and spiritual quotes.</p>
      </div>

      {/* Couple Section */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-6">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <User className="w-4 h-4" /> Bride & Groom Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bride */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Bride Name *</label>
              <input
                type="text"
                name="brideName"
                value={data.brideName || ''}
                onChange={handleChange}
                placeholder="Fathima Raniya"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Bride Photo URL</label>
              <input
                type="text"
                name="bridePhoto"
                value={data.bridePhoto || ''}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Bride Bio / Short Intro</label>
              <textarea
                name="brideBio"
                rows={2}
                value={data.brideBio || ''}
                onChange={handleChange}
                placeholder="Daughter of Mr. & Mrs. Abdul Rahiman..."
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Groom */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Groom Name *</label>
              <input
                type="text"
                name="groomName"
                value={data.groomName || ''}
                onChange={handleChange}
                placeholder="Shahal Ahmed"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Groom Photo URL</label>
              <input
                type="text"
                name="groomPhoto"
                value={data.groomPhoto || ''}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Groom Bio / Short Intro</label>
              <textarea
                name="groomBio"
                rows={2}
                value={data.groomBio || ''}
                onChange={handleChange}
                placeholder="Son of Mr. & Mrs. Muhammed Ali..."
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Parents & Family Names</label>
          <input
            type="text"
            name="parentsName"
            value={data.parentsName || ''}
            onChange={handleChange}
            placeholder="Abdul Rahiman & Muhammed Ali Families"
            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Dates, Times & Venue */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-6">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Date, Time & Venue
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Wedding Date *</label>
            <input
              type="date"
              name="weddingDate"
              value={data.weddingDate || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Wedding Ceremony Time</label>
            <input
              type="text"
              name="weddingTime"
              value={data.weddingTime || ''}
              onChange={handleChange}
              placeholder="10:30 AM"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Nikah / Reception Time</label>
            <input
              type="text"
              name="nikahTime"
              value={data.nikahTime || ''}
              onChange={handleChange}
              placeholder="Nikah: 11:15 AM | Feast: 12:30 PM"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Venue Hall Name</label>
            <input
              type="text"
              name="venue"
              value={data.venue || ''}
              onChange={handleChange}
              placeholder="Grand Palace Convention Center"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Venue Full Address</label>
            <input
              type="text"
              name="venueAddress"
              value={data.venueAddress || ''}
              onChange={handleChange}
              placeholder="Calicut Bypass Road, Kozhikode, Kerala"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Google Maps Pin Link</label>
          <input
            type="text"
            name="googleMapsUrl"
            value={data.googleMapsUrl || ''}
            onChange={handleChange}
            placeholder="https://maps.google.com/?q=..."
            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Spiritual Verses, Quotes & Messages */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-6">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Verse, Quote & Contacts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Wedding Quote / Quran / Bible Verse</label>
            <textarea
              name="weddingQuote"
              rows={3}
              value={data.weddingQuote || ''}
              onChange={handleChange}
              placeholder="And among His signs is that He created for you mates..."
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Verse Reference / Source Citation</label>
            <input
              type="text"
              name="quranVerse"
              value={data.quranVerse || ''}
              onChange={handleChange}
              placeholder="Surah Ar-Rum [30:21]"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Contact Phone</label>
            <input
              type="text"
              name="contactNumber"
              value={data.contactNumber || ''}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp Number</label>
            <input
              type="text"
              name="whatsappNumber"
              value={data.whatsappNumber || ''}
              onChange={handleChange}
              placeholder="+919876543210"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Dress Code (Optional)</label>
            <input
              type="text"
              name="dressCode"
              value={data.dressCode || ''}
              onChange={handleChange}
              placeholder="Traditional Formal (Gold / Ivory)"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
