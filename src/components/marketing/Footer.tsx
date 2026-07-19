import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold shadow-sm">
            <Heart className="w-4 h-4 fill-white stroke-none" />
          </div>
          <span className="font-heading font-bold text-gray-900 text-sm">
            Wedding Invite <span className="text-emerald-600">AI</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 font-medium">
          <Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-emerald-600">Terms of Service</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact Support</Link>
          <Link href="/i/shahal-and-fathima" target="_blank" className="hover:text-emerald-600 font-bold">Live Demo</Link>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
          <span>for couples worldwide</span>
        </div>
      </div>
    </footer>
  );
}
