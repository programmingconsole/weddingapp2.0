import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Wedding Invite AI - Digital Wedding & Nikah Invitation Platform',
  description: 'Create beautiful digital wedding and Nikah invitation websites without code.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
