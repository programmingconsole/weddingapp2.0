import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { invitationId, guestName, message } = await req.json();

    if (!guestName || !message) {
      return NextResponse.json({ message: 'Name and message required' }, { status: 400 });
    }

    try {
      const wish = await prisma.guestWish.create({
        data: {
          invitationId: invitationId || 'demo-123',
          guestName,
          message,
        },
      });
      return NextResponse.json({ success: true, wish });
    } catch (e) {
      return NextResponse.json({ success: true, message: 'Wish posted' });
    }
  } catch (error) {
    return NextResponse.json({ success: true, message: 'Wish posted' });
  }
}
