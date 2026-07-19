'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 bg-white border-b ${
      scrolled ? 'border-gray-200 shadow-sm py-3' : 'border-gray-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-sm">
            <Heart className="w-5 h-5 fill-white stroke-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-heading font-extrabold text-gray-900 tracking-tight">
              Wedding Invite <span className="text-emerald-600">AI</span>
            </span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide">Digital Invitation Platform</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#templates" className="hover:text-emerald-600 transition-colors">Templates</a>
          <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
          <Link
            href="/i/shahal-and-fathima"
            target="_blank"
            className="text-emerald-600 font-semibold flex items-center gap-1 hover:underline"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* CTA Group */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors">
            Log In
          </Link>
          <Link
            href="/dashboard/invitations/create"
            className="btn-primary-emerald py-2.5 px-5 text-sm flex items-center gap-2 shadow-sm"
          >
            <span>Create Invitation</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-gray-600 hover:text-gray-900 p-2"
        >
          {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4">
          <a href="#templates" onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-gray-700">Templates</a>
          <a href="#features" onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-gray-700">Features</a>
          <a href="#how-it-works" onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-gray-700">How It Works</a>
          <a href="#pricing" onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-gray-700">Pricing</a>
          <a href="#faq" onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-gray-700">FAQ</a>
          <Link href="/i/shahal-and-fathima" target="_blank" className="block text-sm font-bold text-emerald-600">View Live Demo Website</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link href="/login" className="w-full text-center py-2.5 bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl border border-gray-200">Log In</Link>
            <Link href="/dashboard/invitations/create" className="btn-primary-emerald w-full text-center py-3 text-sm">Create Free Invitation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
