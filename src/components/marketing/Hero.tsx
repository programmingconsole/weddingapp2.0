'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Heart, CheckCircle2, Calendar, MapPin, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Modern No-Code Wedding Invitation Builder</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Create Beautiful Digital <br className="hidden sm:inline" />
              <span className="text-emerald-600">Wedding & Nikah</span> Websites
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Design personalized invitation websites without writing any code. Collect RSVPs, display countdown timers, embed venue Google Maps, share photo galleries, and send instant WhatsApp invites.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/dashboard/invitations/create"
                className="btn-primary-emerald w-full sm:w-auto py-3.5 px-7 text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Create Invitation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              
              <Link
                href="/i/shahal-and-fathima"
                target="_blank"
                className="btn-outline-clean w-full sm:w-auto py-3.5 px-6 text-sm flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-gray-700 text-gray-700" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-xs font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>20+ Free Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-Time RSVP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No Watermark</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Invitation Preview Card */}
          <div className="lg:col-span-5">
            <div className="card-2d p-6 sm:p-8 space-y-6 relative border border-gray-200 shadow-md">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>invite.com/shahal-and-fathima</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  LIVE PREVIEW
                </span>
              </div>

              {/* Invitation Card Body */}
              <div className="text-center space-y-4 pt-2">
                <div className="w-12 h-12 bg-rose-50 rounded-full text-rose-500 flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 fill-rose-500 stroke-none" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold">Wedding & Nikah Ceremony</span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-gray-900 mt-1">
                    Shahal Ahmed & Fathima Raniya
                  </h3>
                </div>
                <p className="text-xs text-gray-500 italic max-w-xs mx-auto">
                  "And among His signs is that He created for you mates from among yourselves..."
                </p>

                {/* Couple Photos */}
                <div className="flex items-center justify-center gap-4 py-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Groom" className="w-16 h-16 rounded-full border-2 border-emerald-500 object-cover shadow-sm" />
                  <span className="text-rose-500 font-bold text-lg">&</span>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" alt="Bride" className="w-16 h-16 rounded-full border-2 border-emerald-500 object-cover shadow-sm" />
                </div>

                {/* Date & Venue */}
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1">
                  <div className="font-bold text-gray-900">Saturday, 28 November 2026</div>
                  <div className="text-gray-500">Grand Palace Convention Center, Kozhikode</div>
                </div>

                {/* Interactive RSVP Action */}
                <Link
                  href="/i/shahal-and-fathima"
                  target="_blank"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-white stroke-none" />
                  <span>Confirm Attendance (RSVP)</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
