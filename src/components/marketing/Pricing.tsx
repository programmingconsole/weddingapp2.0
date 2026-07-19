'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Simple Plans for Every Celebration
          </h2>
          <p className="text-sm text-gray-600">
            Start free or upgrade to Premium for complete luxury customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="card-2d p-8 border border-gray-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase">Basic Plan</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$0</span>
                <span className="text-xs text-gray-500">/ forever free</span>
              </div>
              <p className="text-xs text-gray-600">Essential features for digital announcements.</p>

              <ul className="space-y-3 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>3 Standard Templates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Countdown Timer & Details</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Google Maps Venue Pin</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Standard URL Link</span>
                </li>
              </ul>
            </div>

            <Link
              href="/dashboard/invitations/create"
              className="btn-outline-clean w-full py-3 text-center text-xs font-bold"
            >
              Get Started Free
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="card-2d p-8 border-2 border-emerald-500 flex flex-col justify-between space-y-6 relative">
            <span className="absolute -top-3.5 right-8 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </span>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">Premium Lifetime</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$19</span>
                <span className="text-xs text-gray-500">/ one-time fee</span>
              </div>
              <p className="text-xs text-gray-600">Everything you need for an unforgettable event.</p>

              <ul className="space-y-3 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>20+ Premium Templates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Background Music Audio Player</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Photo & Video Lightbox Gallery</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Printable QR Code Download</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>No Branding Watermark</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>RSVP Guest CSV Export</span>
                </li>
              </ul>
            </div>

            <Link
              href="/dashboard/invitations/create"
              className="btn-primary-emerald w-full py-3.5 text-center text-xs font-bold shadow-sm"
            >
              Upgrade to Premium
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
