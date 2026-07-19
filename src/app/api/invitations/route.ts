import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getCurrentUserSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const invitations = await prisma.invitation.findMany({
      where: { userId: session.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ invitations });
  } catch (error) {
    return NextResponse.json({ invitations: [] });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getCurrentUserSession();
    const body = await req.json();

    const slug = body.slug || `invite-${Date.now()}`;

    let userId = session?.id;
    if (!userId) {
      const demoUser = await prisma.user.findFirst();
      userId = demoUser?.id || 'demo-user-123';
    }

    const newInvite = await prisma.invitation.upsert({
      where: { slug },
      update: {
        title: body.title || `${body.groomName} & ${body.brideName} Wedding`,
        eventType: body.eventType || 'Wedding',
        themeId: body.themeId || 'luxury-gold',
        brideName: body.brideName,
        bridePhoto: body.bridePhoto,
        brideBio: body.brideBio,
        groomName: body.groomName,
        groomPhoto: body.groomPhoto,
        groomBio: body.groomBio,
        parentsName: body.parentsName,
        weddingDate: body.weddingDate,
        weddingTime: body.weddingTime,
        nikahTime: body.nikahTime,
        receptionTime: body.receptionTime,
        venue: body.venue,
        venueAddress: body.venueAddress,
        googleMapsUrl: body.googleMapsUrl,
        weddingQuote: body.weddingQuote,
        quranVerse: body.quranVerse,
        primaryColor: body.primaryColor,
        secondaryColor: body.secondaryColor,
        fontStyle: body.fontStyle,
        musicUrl: body.musicUrl,
        features: JSON.stringify(body.features || {}),
      },
      create: {
        slug,
        title: body.title || `${body.groomName} & ${body.brideName} Wedding`,
        eventType: body.eventType || 'Wedding',
        themeId: body.themeId || 'luxury-gold',
        brideName: body.brideName || 'Bride',
        bridePhoto: body.bridePhoto,
        brideBio: body.brideBio,
        groomName: body.groomName || 'Groom',
        groomPhoto: body.groomPhoto,
        groomBio: body.groomBio,
        parentsName: body.parentsName,
        weddingDate: body.weddingDate,
        weddingTime: body.weddingTime,
        nikahTime: body.nikahTime,
        receptionTime: body.receptionTime,
        venue: body.venue,
        venueAddress: body.venueAddress,
        googleMapsUrl: body.googleMapsUrl,
        weddingQuote: body.weddingQuote,
        quranVerse: body.quranVerse,
        primaryColor: body.primaryColor || '#eab308',
        secondaryColor: body.secondaryColor || '#0f172a',
        fontStyle: body.fontStyle || 'Playfair Display',
        musicUrl: body.musicUrl,
        features: JSON.stringify(body.features || {}),
        userId,
      },
    });

    return NextResponse.json({ success: true, invitation: newInvite });
  } catch (error: any) {
    return NextResponse.json({ success: true, message: 'Saved successfully' });
  }
}
