import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Hero from '@/components/marketing/Hero';
import TemplateGrid from '@/components/marketing/TemplateGrid';
import HowItWorks from '@/components/marketing/HowItWorks';
import Features from '@/components/marketing/Features';
import Testimonials from '@/components/marketing/Testimonials';
import Pricing from '@/components/marketing/Pricing';
import Faq from '@/components/marketing/Faq';
import Footer from '@/components/marketing/Footer';

export const metadata = {
  title: 'Wedding Invite AI - Create Online Wedding & Nikah Invitation Websites',
  description: 'Design clean, responsive digital wedding and Nikah invitation websites without code. Real-time RSVP, Google Maps, background music, countdown timer, and photo galleries.',
};

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <TemplateGrid />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
