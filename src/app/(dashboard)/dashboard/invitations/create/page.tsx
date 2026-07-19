'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Save, Sparkles, Check } from 'lucide-react';
import Step1Event from '@/components/builder/Step1Event';
import Step2Theme from '@/components/builder/Step2Theme';
import Step3Details from '@/components/builder/Step3Details';
import Step4Features from '@/components/builder/Step4Features';
import Step5Customize from '@/components/builder/Step5Customize';
import Step6Preview from '@/components/builder/Step6Preview';
import Step7Publish from '@/components/builder/Step7Publish';

const STEPS = [
  'Event Type',
  'Theme Template',
  'Details & Couple',
  'Feature Toggles',
  'Customize Style',
  'Live Preview',
  'Publish & Share',
];

export default function CreateInvitationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    slug: 'shahal-and-fathima',
    title: 'Shahal & Fathima Wedding & Nikah',
    eventType: 'Nikah',
    themeId: 'islamic-green',
    brideName: 'Fathima Raniya',
    bridePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
    brideBio: 'Daughter of Mr. & Mrs. Abdul Rahiman',
    groomName: 'Shahal Ahmed',
    groomPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    groomBio: 'Son of Mr. & Mrs. Muhammed Ali',
    parentsName: 'Abdul Rahiman & Muhammed Ali Families',
    familyMembers: 'Invited by Rahiman & Ahmed Families',
    weddingDate: '2026-11-28',
    weddingTime: '10:30 AM',
    nikahTime: '11:15 AM',
    receptionTime: '12:30 PM - 3:30 PM',
    venue: 'Grand Palace Convention Center',
    venueAddress: 'Calicut Bypass Road, Kozhikode, Kerala',
    googleMapsUrl: 'https://maps.google.com/?q=Calicut+Bypass+Road',
    contactNumber: '+91 98765 43210',
    whatsappNumber: '+919876543210',
    weddingQuote: 'And among His signs is that He created for you mates from among yourselves...',
    quranVerse: 'Surah Ar-Rum [30:21]',
    invitationMessage: 'We request the honor of your presence at our Nikah and Wedding Feast.',
    primaryColor: '#10b981',
    secondaryColor: '#064e3b',
    fontStyle: 'Amiri',
    animationStyle: 'fade-up',
    backgroundStyle: 'emerald-gold',
    buttonStyle: 'rounded-full',
    isDarkMode: true,
    musicUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
    features: {
      countdown: true,
      rsvp: true,
      guestbook: true,
      maps: true,
      gallery: true,
      video: true,
      timeline: true,
      qrcode: true,
      share: true,
      dressCode: true,
    },
  });

  const updateFormData = (fields: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch('/api/invitations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Builder Top Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 py-3.5 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-slate-100">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-sm font-bold text-slate-100">Invitation Wizard</h1>
            <p className="text-[10px] text-slate-400">Step {currentStep} of 7: {STEPS[currentStep - 1]}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="py-2 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <Save className="w-3.5 h-3.5 text-amber-400" />
            <span>{saving ? 'Saving...' : 'Save Draft'}</span>
          </button>
          <Link
            href={`/i/${formData.slug}`}
            target="_blank"
            className="py-2 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
          >
            <span>Live URL</span>
          </Link>
        </div>
      </header>

      {/* Stepper Progress Header */}
      <div className="max-w-5xl mx-auto w-full px-4 pt-6">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-900 -translate-y-1/2 -z-10" />
          {STEPS.map((stepName, idx) => {
            const stepNum = idx + 1;
            const isDone = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            return (
              <button
                key={stepNum}
                onClick={() => setCurrentStep(stepNum)}
                className={`flex flex-col items-center gap-1.5 relative z-10 group`}
              >
                <div className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                  isDone
                    ? 'bg-amber-500 text-slate-950'
                    : isCurrent
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 ring-4 ring-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400'
                }`}>
                  {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : stepNum}
                </div>
                <span className={`text-[10px] hidden md:inline font-medium ${
                  isCurrent ? 'text-amber-400 font-bold' : 'text-slate-400'
                }`}>
                  {stepName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content Area */}
      <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1">
        {currentStep === 1 && <Step1Event data={formData} updateData={updateFormData} />}
        {currentStep === 2 && <Step2Theme data={formData} updateData={updateFormData} />}
        {currentStep === 3 && <Step3Details data={formData} updateData={updateFormData} />}
        {currentStep === 4 && <Step4Features data={formData} updateData={updateFormData} />}
        {currentStep === 5 && <Step5Customize data={formData} updateData={updateFormData} />}
        {currentStep === 6 && <Step6Preview data={formData} />}
        {currentStep === 7 && <Step7Publish data={formData} updateData={updateFormData} />}
      </main>

      {/* Bottom Navigation Buttons */}
      <footer className="bg-slate-950 border-t border-slate-900 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`py-2.5 px-6 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
              currentStep === 1
                ? 'opacity-40 cursor-not-allowed border-slate-900 text-slate-600'
                : 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-850'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {currentStep < 7 ? (
            <button
              onClick={handleNext}
              className="py-2.5 px-7 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-transform transform hover:-translate-y-0.5"
            >
              <span>Continue to Step {currentStep + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              href="/dashboard"
              className="py-2.5 px-7 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2"
            >
              <span>Go to Dashboard</span>
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
