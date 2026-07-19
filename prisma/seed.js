const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TEMPLATES = [
  {
    slug: 'luxury-gold',
    name: 'Luxury Gold',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    description: 'Opulent gold foil accents with regal dark backgrounds.',
    isPremium: true,
    tags: 'Gold, Royal, Elegant',
  },
  {
    slug: 'islamic-green',
    name: 'Islamic Green & Gold',
    category: 'Nikah',
    previewImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80',
    description: 'Traditional Islamic arches, arabesque floral patterns, and Bismillah calligraphic motifs.',
    isPremium: false,
    tags: 'Nikah, Islamic, Quran, Emerald',
  },
  {
    slug: 'minimal-white',
    name: 'Minimalist White',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    description: 'Clean modern typography, airy layout, and subtle serif accents.',
    isPremium: false,
    tags: 'Minimal, Modern, Clean',
  },
  {
    slug: 'royal-blue',
    name: 'Royal Sapphire Blue',
    category: 'Reception',
    previewImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    description: 'Deep navy and sapphire blue with sparkling starlight highlights.',
    isPremium: true,
    tags: 'Blue, Royal, Night',
  },
  {
    slug: 'traditional-kerala',
    name: 'Traditional Kerala Kasavu',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    description: 'Rich ivory, golden Kasavu border designs, and Nilavilakku aesthetic motifs.',
    isPremium: true,
    tags: 'Kerala, South Indian, Kasavu, Ivory',
  },
  {
    slug: 'elegant-black',
    name: 'Elegant Black Velvet',
    category: 'Reception',
    previewImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80',
    description: 'Ultra-modern dark velvet backdrop with silver and white typography.',
    isPremium: false,
    tags: 'Dark, Modern, Black',
  },
  {
    slug: 'modern-floral',
    name: 'Modern Floral Blossom',
    category: 'Engagement',
    previewImage: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80',
    description: 'Soft pastel watercolors, botanicals, and spring floral vectors.',
    isPremium: false,
    tags: 'Floral, Pastel, Spring',
  },
  {
    slug: 'rose-gold',
    name: 'Rose Gold Shimmer',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
    description: 'Romantic blush pink hues, metallic rose gold trim, and sparkling bokeh effects.',
    isPremium: true,
    tags: 'Rose Gold, Pink, Romantic',
  },
  {
    slug: 'classic-invitation',
    name: 'Classic Vintage Monogram',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80',
    description: 'Timeless vintage monogram frames and handwritten calligraphic scripts.',
    isPremium: false,
    tags: 'Classic, Monogram, Vintage',
  },
  {
    slug: 'premium-palace',
    name: 'Royal Rajasthani Palace',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    description: 'Grand palace arches, royal marigold yellow, and heritage Indian embroidery.',
    isPremium: true,
    tags: 'Royal, Palace, Indian, Heritage',
  },
  {
    slug: 'arabic-emerald',
    name: 'Arabic Emerald Nikah',
    category: 'Nikah',
    previewImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    description: 'Deep emerald velvet, geometric lattice Islamic patterns, and gold calligraphy.',
    isPremium: true,
    tags: 'Nikah, Emerald, Islamic, Arabic',
  },
  {
    slug: 'sunset-boho',
    name: 'Boho Sunset Rust',
    category: 'Engagement',
    previewImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    description: 'Warm terracotta rust shades, dried pampas grass, and bohemian aesthetics.',
    isPremium: false,
    tags: 'Boho, Terracotta, Rust',
  },
  {
    slug: 'vintage-burgundy',
    name: 'Vintage Burgundy Wine',
    category: 'Reception',
    previewImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    description: 'Rich maroon wine colors, gold foil accents, and moody romantic vibes.',
    isPremium: true,
    tags: 'Burgundy, Wine, Autumn',
  },
  {
    slug: ' celestial-night',
    name: 'Celestial Starlight',
    category: 'Party',
    previewImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&q=80',
    description: 'Magical starry night sky, constellation maps, and metallic silver font.',
    isPremium: true,
    tags: 'Stars, Celestial, Midnight',
  },
  {
    slug: 'kerala-temple-gold',
    name: 'Kerala Temple Lotus',
    category: 'Wedding',
    previewImage: 'https://images.unsplash.com/photo-1609151162377-794faf68b02f?w=800&q=80',
    description: 'Auspicious lotus motifs, brass Nilavilakku glow, and maroon velvet accents.',
    isPremium: false,
    tags: 'Kerala, Temple, Traditional',
  },
  {
    slug: 'mehendi-vibrant',
    name: 'Vibrant Mehendi Green',
    category: 'Mehendi',
    previewImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
    description: 'Playful lime green, marigold yellow, and festive hennaborder illustrations.',
    isPremium: false,
    tags: 'Mehendi, Festive, Hennah',
  },
  {
    slug: 'haldi-yellow',
    name: 'Bright Haldi Sunshine',
    category: 'Haldi',
    previewImage: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&q=80',
    description: 'Lively turmeric yellow with orange blossoms and joyous celebratory energy.',
    isPremium: false,
    tags: 'Haldi, Sunshine, Yellow',
  },
  {
    slug: 'walima-grace',
    name: 'Walima Grace & Ivory',
    category: 'Walima',
    previewImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    description: 'Serene pearl white, champagne gold, and graceful floral garlands.',
    isPremium: true,
    tags: 'Walima, Pearl, Ivory',
  },
  {
    slug: 'save-the-date-modern',
    name: 'Save The Date Cinematic',
    category: 'Save The Date',
    previewImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
    description: 'Full-bleed photographic cover with sleek countdown timer and dynamic map.',
    isPremium: false,
    tags: 'Save The Date, Modern, Photo',
  },
  {
    slug: 'baby-shower-pastel',
    name: 'Pastel Joy Baby Shower',
    category: 'Baby Shower',
    previewImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80',
    description: 'Cute pastel clouds, teddy bear accents, and soft lavender typography.',
    isPremium: false,
    tags: 'Baby Shower, Pastel, Cute',
  }
];

async function main() {
  console.log('Seeding templates...');
  for (const t of TEMPLATES) {
    await prisma.template.upsert({
      where: { slug: t.slug },
      update: t,
      create: t,
    });
  }

  console.log('Seeding sample user...');
  const user = await prisma.user.upsert({
    where: { email: 'shahal@example.com' },
    update: {},
    create: {
      name: 'Shahal Ahmed',
      email: 'shahal@example.com',
      passwordHash: '$2a$10$abcdefghijklmnopqrstuv', // hashed demo
      role: 'ADMIN',
      subscriptionTier: 'PREMIUM',
    },
  });

  console.log('Seeding sample invitation...');
  const sampleInvite = await prisma.invitation.upsert({
    where: { slug: 'shahal-and-fathima' },
    update: {},
    create: {
      slug: 'shahal-and-fathima',
      title: 'Shahal & Fathima Wedding & Nikah',
      eventType: 'Nikah',
      themeId: 'islamic-green',
      brideName: 'Fathima Raniya',
      brideBio: 'Daughter of Mr. & Mrs. Abdul Rahiman. Software engineer & artist with a passion for creative design and family.',
      bridePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
      groomName: 'Shahal Ahmed',
      groomBio: 'Son of Mr. & Mrs. Muhammed Ali. Entrepreneur & architect who loves traveling and technology.',
      groomPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      parentsName: 'Abdul Rahiman & Muhammed Ali Families',
      familyMembers: 'Warmly invited by Ahmed & Rahiman Families',
      weddingDate: '2026-11-28',
      weddingTime: '10:30 AM',
      nikahTime: '11:15 AM',
      receptionTime: '12:30 PM - 3:30 PM',
      venue: 'Grand Palace Convention Center',
      venueAddress: 'Calicut Bypass Road, Kozhikode, Kerala 673004',
      googleMapsUrl: 'https://maps.google.com/?q=Calicut+Bypass+Road+Kozhikode',
      contactNumber: '+91 98765 43210',
      whatsappNumber: '+919876543210',
      email: 'invite@weddingai.com',
      instagram: '@shahal_fathima_2026',
      weddingQuote: 'And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.',
      quranVerse: 'Surah Ar-Rum [30:21]',
      invitationMessage: 'We request the honor of your presence and blessings at the Nikah ceremony and auspicious Wedding Feast of our beloved children.',
      dressCode: 'Traditional / Elegant Formal (Emerald, Ivory & Gold)',
      primaryColor: '#10b981',
      secondaryColor: '#064e3b',
      fontStyle: 'Amiri',
      animationStyle: 'fade-up',
      backgroundStyle: 'emerald-gold',
      buttonStyle: 'rounded-full',
      isDarkMode: true,
      musicUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-112191.mp3',
      features: JSON.stringify({
        countdown: true,
        rsvp: true,
        guestbook: true,
        maps: true,
        gallery: true,
        video: true,
        timeline: true,
        qrcode: true,
        share: true,
        dressCode: true
      }),
      isPublished: true,
      isPremium: true,
      viewsCount: 248,
      rsvpCount: 38,
      userId: user.id,
    },
  });

  // Seed RSVP samples
  await prisma.rsvpResponse.createMany({
    data: [
      {
        invitationId: sampleInvite.id,
        guestName: 'Rashid & Family',
        phone: '+91 98470 12345',
        email: 'rashid@example.com',
        attendingCount: 4,
        status: 'ATTENDING',
        message: 'Heartiest congratulations Shahal & Fathima! May Allah bless your union.',
      },
      {
        invitationId: sampleInvite.id,
        guestName: 'Dr. Ameen K.',
        phone: '+91 94471 99887',
        email: 'ameen@clinic.com',
        attendingCount: 2,
        status: 'ATTENDING',
        message: 'So happy for you both! Looking forward to attending the Nikah.',
      },
      {
        invitationId: sampleInvite.id,
        guestName: 'Sujith Kumar',
        phone: '+91 98950 00112',
        email: 'sujith@design.in',
        attendingCount: 1,
        status: 'NOT_ATTENDING',
        message: 'Wishing you a wonderful married life ahead! Sorry I will be out of town.',
      }
    ]
  });

  // Seed Guest Wishes
  await prisma.guestWish.createMany({
    data: [
      {
        invitationId: sampleInvite.id,
        guestName: 'Aisha & Naufal',
        message: 'Wishing you a lifetime of laughter, joy, and blessed togetherness!',
      },
      {
        invitationId: sampleInvite.id,
        guestName: 'Faris & Gang',
        message: 'Can\'t wait for the grand feast and celebrations! Mubarak brother Shahal!',
      }
    ]
  });

  // Seed Gallery Items
  await prisma.galleryItem.createMany({
    data: [
      {
        invitationId: sampleInvite.id,
        type: 'IMAGE',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        caption: 'Save The Date - Pre-wedding photoshoot',
      },
      {
        invitationId: sampleInvite.id,
        type: 'IMAGE',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
        caption: 'Engagement Ring Exchange',
      },
      {
        invitationId: sampleInvite.id,
        type: 'IMAGE',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
        caption: 'Traditional Nikah Outfit',
      }
    ]
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
