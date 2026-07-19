import React from 'react';
import { prisma } from '@/lib/prisma';
import InvitationRenderer from '@/components/invitation/InvitationRenderer';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let title = 'Wedding & Nikah Invitation';
  let description = 'You are cordially invited to celebrate our special day.';

  try {
    const invite = await prisma.invitation.findUnique({ where: { slug } });
    if (invite) {
      title = `${invite.groomName} & ${invite.brideName} Wedding Invitation`;
      description = invite.invitationMessage || description;
    }
  } catch (e) {}

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80'],
    },
  };
}

export default async function PublicInvitationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let invitation: any = null;

  try {
    invitation = await prisma.invitation.findUnique({
      where: { slug },
      include: {
        galleryItems: true,
        wishes: true,
      },
    });
  } catch (e) {}

  // Fallback demo invitation for instant presentation if db record is missing
  if (!invitation) {
    invitation = {
      id: 'demo-123',
      slug: slug,
      title: 'Shahal & Fathima Wedding & Nikah',
      eventType: 'Nikah',
      themeId: 'islamic-green',
      brideName: 'Fathima Raniya',
      brideBio: 'Daughter of Mr. & Mrs. Abdul Rahiman',
      bridePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
      groomName: 'Shahal Ahmed',
      groomBio: 'Son of Mr. & Mrs. Muhammed Ali',
      groomPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      parentsName: 'Abdul Rahiman & Muhammed Ali Families',
      weddingDate: '2026-11-28',
      weddingTime: '10:30 AM',
      nikahTime: '11:15 AM',
      receptionTime: '12:30 PM Onwards',
      venue: 'Grand Palace Convention Center',
      venueAddress: 'Calicut Bypass Road, Kozhikode, Kerala 673004',
      googleMapsUrl: 'https://maps.google.com/?q=Calicut+Bypass+Road+Kozhikode',
      contactNumber: '+91 98765 43210',
      whatsappNumber: '+919876543210',
      weddingQuote: 'And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them.',
      quranVerse: 'Surah Ar-Rum [30:21]',
      invitationMessage: 'We request the honor of your presence and blessings at the Nikah ceremony.',
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
      },
    };
  }

  return <InvitationRenderer invitation={invitation} />;
}
