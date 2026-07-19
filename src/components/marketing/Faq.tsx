'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How long will my online invitation website stay live?',
    a: 'Your invitation website remains active and live indefinitely so you can cherish the memories, photos, and guest wishes forever.',
  },
  {
    q: 'Can I edit the invitation details after publishing?',
    a: 'Yes! You can edit dates, times, venue maps, photo galleries, and themes anytime from your host dashboard, and updates apply instantly.',
  },
  {
    q: 'How do guests RSVP?',
    a: 'Guests click the RSVP button directly on your invitation site, enter their name, phone, number of guests attending, and optional message. You get instant updates in your dashboard.',
  },
  {
    q: 'Can I print the QR code on my physical paper invitation cards?',
    a: 'Absolutely. You can download a high-resolution PNG QR code from the invitation publisher page and hand it to your card printer.',
  },
  {
    q: 'Is background music supported on mobile devices?',
    a: 'Yes, our background music player is optimized for modern mobile browsers with an easy one-tap play button compliant with mobile autoplay policies.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white border-b border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="card-2d rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : 'text-gray-400'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
