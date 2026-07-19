'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, ExternalLink, Globe, Sparkles, Video, Share2 } from 'lucide-react';
import RsvpFormModal from './RsvpFormModal';
import GuestBookSection from './GuestBookSection';
import MusicPlayer from './MusicPlayer';

export default function InvitationRenderer({ invitation, isPreview }: { invitation: any; isPreview?: boolean }) {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ml' | 'hi' | 'ar'>('en');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const features = typeof invitation.features === 'string'
    ? JSON.parse(invitation.features || '{}')
    : (invitation.features || {});

  // Real-time countdown calculation
  useEffect(() => {
    const targetDate = invitation.weddingDate ? new Date(invitation.weddingDate).getTime() : Date.now() + 86400000 * 30;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [invitation.weddingDate]);

  // Multilingual translations helper
  const t = {
    en: {
      weddingInvite: 'Wedding & Nikah Invitation',
      saveDate: 'Save The Date',
      bismillah: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      nikahTime: 'Nikah Ceremony',
      receptionTime: 'Grand Reception Feast',
      venue: 'Event Venue',
      rsvpBtn: 'Confirm Attendance (RSVP)',
      getDirections: 'Get Google Maps Directions',
      dressCode: 'Attire & Dress Code',
      blessings: 'Family Blessings',
    },
    ml: {
      weddingInvite: 'മംഗല്യ ക്ഷണപത്രിക',
      saveDate: 'ദിനം ഓർക്കുക',
      bismillah: 'ബിസ്മില്ലാഹി റഹ്മാനി റഹീം',
      nikahTime: 'നിക്കാഹ് കർമ്മം',
      receptionTime: 'സ്നേഹവിരുന്ന്',
      venue: 'വേദി',
      rsvpBtn: 'പങ്കെടുക്കുമെന്ന് അറിയിക്കുക',
      getDirections: 'വഴി മനസ്സിലാക്കുക',
      dressCode: 'വസ്ത്രധാരണ ശൈലി',
      blessings: 'ആശംസകൾ',
    },
    hi: {
      weddingInvite: 'विवाह निमंत्रण पत्र',
      saveDate: 'शुभ तिथि',
      bismillah: 'बिस्मिल्लाह हिर्रहमान निर्रहीम',
      nikahTime: 'निकाह समारोह',
      receptionTime: 'प्रीतिभोज',
      venue: 'स्थान',
      rsvpBtn: 'उपस्थिति दर्ज करें',
      getDirections: 'गूगल मैप्स दिशाएं',
      dressCode: 'पोशाक',
      blessings: 'आशीर्वाद',
    },
    ar: {
      weddingInvite: 'دعوة زفاف ونكاح مباركة',
      saveDate: 'احفظ التاريخ',
      bismillah: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      nikahTime: 'عقد النكاح',
      receptionTime: 'حفل الاستقبال والوليمة',
      venue: 'مكان الحفل',
      rsvpBtn: 'تأكيد الحضور',
      getDirections: 'موقع الخريطة',
      dressCode: 'الزي الموصى به',
      blessings: 'دعوات وتبريكات',
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-emerald-500 selection:text-white pb-24">
      
      {/* Top Language Switcher Bar */}
      <div className="bg-white border-b border-gray-200 py-2.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" /> Language:
          </span>
          <div className="flex items-center gap-1">
            {(['en', 'ml', 'hi', 'ar'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-lg uppercase font-bold text-[10px] transition-colors ${
                  lang === l
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-500 hover:text-gray-900 bg-gray-50'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Banner & Couple Information */}
      <section className="bg-white border-b border-gray-200/80 pt-16 pb-16 px-4 text-center space-y-6 max-w-4xl mx-auto mt-4 rounded-3xl shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {invitation.themeId === 'islamic-green' && (
            <div className="font-arabic-calligraphy text-3xl text-emerald-700 font-bold mb-2">
              {t.bismillah}
            </div>
          )}

          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            {t.weddingInvite}
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-gray-900 leading-tight pt-2">
            <span className="block">{invitation.groomName || 'Shahal Ahmed'}</span>
            <span className="text-rose-500 font-script text-3xl sm:text-4xl block my-2 font-normal">&</span>
            <span className="block">{invitation.brideName || 'Fathima Raniya'}</span>
          </h1>

          {invitation.weddingQuote && (
            <div className="max-w-2xl mx-auto pt-2">
              <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed px-4">
                "{invitation.weddingQuote}"
              </p>
              {invitation.quranVerse && (
                <div className="text-[11px] font-bold text-emerald-700 mt-2 uppercase tracking-wider">— {invitation.quranVerse}</div>
              )}
            </div>
          )}
        </motion.div>

        {/* Couple Photo Showcase */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="text-center space-y-2">
            <img
              src={invitation.groomPhoto || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'}
              alt="Groom"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-emerald-500 object-cover shadow-sm mx-auto"
            />
            <div className="text-xs font-bold text-gray-900">{invitation.groomName || 'Groom'}</div>
          </div>

          <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-200">
            <Heart className="w-5 h-5 fill-rose-500 stroke-none" />
          </div>

          <div className="text-center space-y-2">
            <img
              src={invitation.bridePhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'}
              alt="Bride"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-emerald-500 object-cover shadow-sm mx-auto"
            />
            <div className="text-xs font-bold text-gray-900">{invitation.brideName || 'Bride'}</div>
          </div>
        </div>

        {invitation.parentsName && (
          <p className="text-xs text-gray-500 pt-2">
            Cordially invited by <strong className="text-gray-800 font-bold">{invitation.parentsName}</strong>
          </p>
        )}
      </section>

      {/* Countdown Timer */}
      {features.countdown !== false && (
        <section className="max-w-2xl mx-auto px-4 py-8">
          <div className="card-2d p-6 text-center space-y-4">
            <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" /> Countdown to Celebration
            </h3>
            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-2xl font-extrabold text-gray-900 font-mono">{timeLeft.days}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Days</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-2xl font-extrabold text-gray-900 font-mono">{timeLeft.hours}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Hours</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-2xl font-extrabold text-gray-900 font-mono">{timeLeft.minutes}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Mins</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-2xl font-extrabold text-gray-900 font-mono">{timeLeft.seconds}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Secs</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Timeline & Details */}
      <section className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Event Schedule</span>
          <h2 className="text-2xl font-serif-luxury font-bold text-gray-900">Ceremony & Reception Details</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {invitation.weddingDate && (
            <div className="card-2d p-6 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 border border-emerald-100">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900">{t.saveDate}</h3>
              <p className="text-sm font-bold text-emerald-600">{invitation.weddingDate}</p>
              <p className="text-xs text-gray-600">Ceremony Time: {invitation.weddingTime || '10:30 AM'}</p>
            </div>
          )}

          {invitation.nikahTime && (
            <div className="card-2d p-6 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2 border border-rose-100">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900">{t.nikahTime}</h3>
              <p className="text-sm font-bold text-rose-600">{invitation.nikahTime}</p>
              <p className="text-xs text-gray-600">{t.receptionTime}: {invitation.receptionTime || '12:30 PM Onwards'}</p>
            </div>
          )}
        </div>
      </section>

      {/* Venue & Google Maps Information */}
      {features.maps !== false && invitation.venue && (
        <section className="max-w-3xl mx-auto px-4 py-8">
          <div className="card-2d p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{invitation.venue}</h3>
            <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">{invitation.venueAddress}</p>

            {invitation.googleMapsUrl && (
              <a
                href={invitation.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-emerald inline-flex items-center gap-2 py-3 px-6 text-xs font-bold shadow-sm"
              >
                <span>{t.getDirections}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </section>
      )}

      {/* Photo Gallery Grid */}
      {features.gallery !== false && (
        <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Photo Moments</span>
            <h2 className="text-2xl font-serif-luxury font-bold text-gray-900">Couple Photo Gallery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="card-2d h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" alt="Gallery 1" className="w-full h-full object-cover" />
            </div>
            <div className="card-2d h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80" alt="Gallery 2" className="w-full h-full object-cover" />
            </div>
            <div className="card-2d h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80" alt="Gallery 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* Guest Book / Wishes Section */}
      {features.guestbook !== false && (
        <section className="max-w-3xl mx-auto px-4 py-8">
          <GuestBookSection invitationId={invitation.id || 'demo'} />
        </section>
      )}

      {/* Sticky Bottom RSVP Button */}
      {features.rsvp !== false && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setRsvpOpen(true)}
            className="btn-primary-emerald py-3.5 px-6 text-xs font-bold flex items-center gap-2 shadow-md rounded-full"
          >
            <Heart className="w-4 h-4 fill-white stroke-none" />
            <span>{t.rsvpBtn}</span>
          </button>
        </div>
      )}

      {/* Music Player */}
      <MusicPlayer audioUrl={invitation.musicUrl} />

      {/* RSVP Modal */}
      <RsvpFormModal invitationId={invitation.id || 'demo'} isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </div>
  );
}
