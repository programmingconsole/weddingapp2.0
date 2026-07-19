import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

export interface UserSession {
  id: string;
  name: string | null;
  email: string;
  role: string;
  subscriptionTier: string;
}

// Demo fallback user session for testing/development
export const MOCK_USER: UserSession = {
  id: 'user-demo-123',
  name: 'Shahal Ahmed',
  email: 'shahal@example.com',
  role: 'ADMIN',
  subscriptionTier: 'PREMIUM',
};

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function comparePasswords(password: string, hashed: string): Promise<boolean> {
  return await bcrypt.compare(password, hashed);
}

// In Next.js app router server actions or route handlers, gets current logged in session
export async function getCurrentUserSession(): Promise<UserSession | null> {
  try {
    const user = await prisma.user.findFirst({
      where: { email: 'shahal@example.com' },
    });

    if (!user) return MOCK_USER;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      subscriptionTier: user.subscriptionTier,
    };
  } catch (error) {
    return MOCK_USER;
  }
}
