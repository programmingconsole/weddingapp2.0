# 💍 Wedding Invite AI - Production SaaS Platform

**Wedding Invite AI** is a modern, responsive, mobile-first SaaS web application where users can create, customize, and publish digital Wedding and Nikah invitation websites without writing any code.

---

## 🌟 Key Features

- **7-Step Invitation Wizard**:
  1. **Choose Event**: Wedding, Nikah, Reception, Engagement, Save The Date, Haldi, Mehendi, Walima, Birthday, Baby Shower.
  2. **Choose Theme**: 20+ luxury themes (Luxury Gold, Islamic Green Arabesque, Traditional Kerala Kasavu, Minimal White, Royal Blue, Rose Gold, etc.).
  3. **Fill Details**: Couple photo uploads, bios, parents & family names, ceremony dates/times, venue hall, Google Maps pin URL, spiritual Quran/Bible verses, quotes, dress code.
  4. **Choose Features**: Countdown timer toggle, RSVP form, Guestbook wishes, Google Maps navigation, photo gallery lightbox, video highlights, dress code guide, QR Code generator, WhatsApp share link.
  5. **Customization**: Custom color pickers, typography fonts (Playfair Display, Amiri Arabic, Inter, Great Vibes), background MP3 music player, and light/dark modes.
  6. **Live Device Preview**: Desktop, Tablet, and Mobile viewport frames.
  7. **Publish & Share**: Unique custom URL slug generation (`/i/shahal-and-fathima`), high-res QR code download for print cards, one-tap WhatsApp invite generator.

- **Dynamic Public Invitation Renderer (`/i/[slug]`)**:
  - Floating ambient MP3 audio player with auto-play & mute controls.
  - Interactive RSVP confirmation modal with guest count & food preferences.
  - Public Guest Book & Wishes feed.
  - Google Maps turn-by-turn navigation link.
  - Multilingual support: **English, Malayalam (മലയാളം), Hindi (हिंदी), Arabic (العربية)**.

- **User Dashboard & RSVP Management**:
  - Live visitor metrics, daily views, unique visitors, device distribution (Mobile/Desktop), and traffic sources.
  - RSVP Management Table with search, status filters (Attending vs Declined), and **One-Click CSV Export**.
  - Invitation management (Edit, Duplicate, Delete, Preview).

- **System Admin Panel (`/admin`)**:
  - Global metric cards (Total users, published invitations, platform revenue, active templates).
  - User management & subscription tier upgrades (Free to Premium).
  - Global invitations & template directory.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router with Server & Client Components)
- **Styling & UI**: Tailwind CSS + Framer Motion + Lucide React Icons
- **Database & ORM**: Prisma ORM with SQLite (for local zero-config testing) and PostgreSQL compatibility (Supabase ready)
- **State & Form**: React Hook Form + Zod Schema Validation
- **QR Code**: `qrcode.react` (SVG & Canvas PNG export)

---

## 🚀 Quick Start & Local Development

### 1. Clone & Install Dependencies
```bash
cd weddingproject2.0
npm install
```

### 2. Set Up Database Schema & Seed Data
```bash
npx prisma db push
node prisma/seed.js
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Landing Page**: `http://localhost:3000/`
- **Live Demo Invitation**: `http://localhost:3000/i/shahal-and-fathima`
- **Invitation Builder**: `http://localhost:3000/dashboard/invitations/create`
- **Host Dashboard**: `http://localhost:3000/dashboard`
- **Admin Panel**: `http://localhost:3000/admin`

---

## ☁️ Deployment Instructions (Vercel & Supabase)

### Database Deployment (Supabase PostgreSQL)
1. Create a PostgreSQL project on [Supabase](https://supabase.com/).
2. In `prisma/schema.prisma`, update the datasource provider to `postgresql`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
3. Run `npx prisma db push` to push schema to Supabase.

### Vercel Deployment
1. Import repository into [Vercel](https://vercel.com).
2. Set Environment Variables:
   - `DATABASE_URL`: Your Supabase connection string.
   - `NEXTAUTH_SECRET`: Secret key for authentication JWTs.
3. Deploy!

---

## 📁 Project Structure

```
weddingproject2.0/
├── prisma/
│   ├── schema.prisma        # Prisma ORM Data Models (User, Invitation, RSVP, Gallery, Wishes, Analytics)
│   └── seed.js              # Seed data for 20+ templates and demo invitations
├── src/
│   ├── app/
│   │   ├── (admin)/         # Admin Portal Routes (/admin, /admin/users, /admin/invitations, /admin/templates)
│   │   ├── (auth)/          # Login, Register, Forgot Password Routes
│   │   ├── (dashboard)/     # User Dashboard Routes (/dashboard, /dashboard/invitations, /dashboard/rsvps)
│   │   ├── (marketing)/     # Landing Page Marketing Site
│   │   ├── api/             # API Route Handlers (Auth, Invitations, RSVP, Wishes, Upload)
│   │   ├── i/[slug]/        # Dynamic Public Invitation Website Renderer
│   │   └── globals.css      # Design tokens, gradients, animations, glassmorphism CSS
│   ├── components/
│   │   ├── builder/         # 7-Step Invitation Builder Wizard Components
│   │   ├── invitation/      # Public Invitation Engine (Renderer, RSVP Modal, GuestBook, MusicPlayer)
│   │   └── marketing/       # Landing Page (Navbar, Hero, TemplateGrid, Features, Pricing, Faq, Footer)
│   └── lib/
│       ├── auth.ts          # Auth Session & Hashing Helpers
│       └── prisma.ts        # Prisma Client Singleton
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS custom themes & keyframe animations
└── package.json
```
