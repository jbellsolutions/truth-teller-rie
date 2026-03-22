# Truth Teller Rie — Fan Platform: Full Project Brief

## Overview

This document captures the complete planning, design, and build process for the Truth Teller Rie fan identity platform. Everything here was produced in a single working session — from strategic vision to live deployment.

**Live site:** https://truth-teller-rie.vercel.app
**GitHub repo:** https://github.com/jbellsolutions/truth-teller-rie

---

## The Vision

A local artist with a long-standing track record and decent following wanted to create a home where he's not beholden to other platforms and their rules. The goal: send traffic to this site so people can consume music, sign up for newsletters and notifications, learn about the mission, and find ways to contribute, support, and connect with different projects.

The bar was set high: **a site someone would pay $10,000 for** because it pays back 10x through subscriber growth, newsletter assets, playlist engagement, plays/spins, and attracting collaborators.

---

## Strategic Planning (CEO Review)

### Three Approaches Considered

**Approach A: "The Full Platform"** — Next.js + Supabase + Vercel. Custom audio player, newsletter, mission pages. Professional but without the fan engagement layer. (CC: ~2-3 hours)

**Approach B: "Minimal Viable"** — Static site with embedded players and Mailchimp. Ships fast but stays platform-dependent. Not sticky. Does NOT meet the $10K bar. (CC: ~30 min)

**Approach C: "The Artist's Empire"** — Everything in A PLUS custom waveform audio player, fan engagement features (spin counts, streaks, badges), project/collab board, rich content system, analytics dashboard. The "worth $10K" version. (CC: ~4-6 hours)

**Decision: Approach C selected.**

### Scope Expansions (All Accepted)

Six expansion proposals were presented and accepted:

| # | Expansion | Why It Matters |
|---|-----------|----------------|
| 1 | **Fan Profiles & Identity System** | #1 driver of stickiness — once someone has a profile with history, they don't leave |
| 2 | **Drop System with Countdown & Push Notifications** | Turns every release into an event, drives repeat visits with FOMO |
| 3 | **Exclusive Access Tiers (Inner Circle)** | The monetization engine — how the site pays back 10x (architecture built, payments deferred) |
| 4 | **Live Listening Rooms** | Transforms site from a content library into a social space |
| 5 | **Share Card Generator** | Turns every fan into a marketing channel with branded cards for social |
| 6 | **Animated Waveform Hero** | First impression is everything — immersive entry, not a static page |

### Key Technical Decisions

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| Auth | Magic Link (Supabase) | Smoothest UX, no passwords, fits "effortless entry" vibe |
| Audio Player | Wavesurfer.js | Purpose-built for waveforms, battle-tested, customizable |
| Audio Storage | Cloudflare R2 | Zero egress fees — critical for a music site at scale |
| Payments | Free only at launch | Build the audience first, monetize when there's demand |
| Content | MDX | Markdown + React components for rich blog/mission pages |
| Email | Resend | Developer-friendly, great deliverability, 3K emails/month free |
| Hosting | Vercel | Instant deploys, edge network, perfect Next.js integration |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    SYSTEM ARCHITECTURE                          │
│                                                                 │
│  ┌──────────────┐     ┌──────────────┐     ┌───────────────┐   │
│  │   VERCEL      │     │  SUPABASE     │     │  EXTERNAL     │   │
│  │   (Frontend)  │     │  (Backend)    │     │  SERVICES     │   │
│  │              │     │              │     │               │   │
│  │  Next.js App ├────▶│  Auth        │     │  Resend       │   │
│  │  (App Router)│     │  (Magic Link)│     │  (Email)      │   │
│  │              │     │              │     │               │   │
│  │  Pages:      │     │  Database    │     │  Web Push API │   │
│  │  - Home/Hero │     │  (Postgres)  │     │  (Notifs)     │   │
│  │  - Music     ├────▶│              │     │               │   │
│  │  - Profile   │     │  Storage     │     │  Cloudflare   │   │
│  │  - Drops     │     │  (Images)    │     │  R2 (Audio)   │   │
│  │  - Collab    │     │              │     │               │   │
│  │  - Mission   │     │  Realtime    │     └───────────────┘   │
│  │  - Dashboard │     │  (Rooms/Chat)│                         │
│  │              │     │              │                         │
│  │  Components: │     │  Edge Funcs  │                         │
│  │  - AudioPlayer    │  (Newsletter, │                         │
│  │  - Waveform  │     │   Push, Cards)│                        │
│  │  - NowPlaying│     │              │                         │
│  │  - ShareCard │     └──────────────┘                         │
│  │  - LiveRoom  │                                              │
│  └──────────────┘                                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Design System

### Aesthetic Direction
**Luxury/Refined with Organic warmth** — the feeling of a vinyl record sleeve. Warm, soulful, premium but not flashy. Confident and measured. "Walking into the artist's studio."

### Typography
- **Display/Hero:** Instrument Serif — elegant, warm, soulful. Breaks from hip-hop convention (usually sans/graffiti), signals conscious artistry.
- **Body:** DM Sans — clean, readable, modern without being sterile.
- **Data/UI:** DM Sans with tabular numbers.

### Color Palette
- **Primary:** #C8956C (warm bronze/copper) — unique in the music space, evokes vinyl warmth
- **Secondary:** #2D2A26 (deep espresso) — warm dark mode, not true black
- **Accent:** #D4A574 (light gold) — badges, engagement highlights
- **Neutrals:** Warm grays from #F7F4F0 (cream) to #1A1816 (near-black)

### Design Risks (What Makes It Unique)
1. **Serif display font in hip-hop** — signals craft and consciousness
2. **Warm bronze palette instead of neon/electric** — earthy, premium, analog
3. **Deep espresso backgrounds instead of pure black** — warmer, more inviting

Full design system documented in `DESIGN.md` in the repo.

---

## What's Built (Current State)

### Interactive Features
1. **Immersive Hero** — album cover background, animated waveform, pulsing play button, live listener count, real stats (1M+ Streams, 50K+ Followers, 25+ Tracks)
2. **Music Player** — 9 tracks with album art, clickable to play, persistent Now Playing bar with waveform, playback controls, seekable progress bar
3. **Photo Gallery** — 10 real photos from truthtellerrie.com in masonry grid with lightbox
4. **YouTube Videos** — 5 embedded videos from the artist's channel
5. **Drop Countdown** — live ticking timer for next release, "Notify Me" button
6. **Fan Community** — 6 fan profiles with avatars, play counts, streak counters, colored badges
7. **Collab Board** — 4 project listings (Production, Vocals, Design, Video) with status and applicant counts
8. **Artist Bio** — real bio from the site with photo and streaming links (Spotify, Apple Music, SoundCloud)
9. **Merch** — Truth Tellers Hoodie with link to the real store
10. **Newsletter Signup** — interactive form with success state
11. **Responsive Navigation** — glass-effect sticky navbar with mobile hamburger menu

### Real Content Integrated
All images, bio text, social links, streaming platform links, merch store link, and YouTube videos were scraped from truthtellerrie.com and integrated into the platform.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | SSR, routing, TypeScript |
| Styling | Tailwind CSS | Utility-first CSS |
| Fonts | Google Fonts (Instrument Serif, DM Sans) | Typography |
| Audio | Wavesurfer.js | Waveform visualization |
| Icons | Lucide React | Icon library |
| Hosting | Vercel | Edge deployment |
| Backend (planned) | Supabase | Auth, DB, Realtime, Edge Functions |
| Audio Storage (planned) | Cloudflare R2 | Zero-egress audio delivery |
| Email (planned) | Resend | Newsletter delivery |

---

## What's Next (To Make It Production-Ready)

### Phase 1: Backend Integration
- Wire up Supabase for authentication (magic link), database (fan profiles, play tracking), and realtime (live rooms)
- Connect Cloudflare R2 for actual audio file hosting and playback
- Implement Resend for newsletter email delivery

### Phase 2: Monetization
- Stripe integration for paid tiers (Supporter / Inner Circle)
- Gated content for premium subscribers
- Tier architecture is already in the data model

### Phase 3: Mobile & Scale
- React Native mobile app (reuses hooks/contexts)
- Audio transcoding pipeline for adaptive streaming (see TODOS.md)

### Phase 4: Platform
- Multi-artist support — turn this into a platform, not just one artist's site

---

## How To Run It Locally

```bash
git clone https://github.com/jbellsolutions/truth-teller-rie.git
cd truth-teller-rie
npm install
npm run dev
# Open http://localhost:3000
```

## How To Deploy

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, nav, audio provider
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Design system CSS variables
├── components/
│   ├── audio/
│   │   ├── NowPlayingBar.tsx    # Persistent bottom player
│   │   ├── TrackList.tsx        # Clickable track listing
│   │   └── WaveformVisualizer.tsx  # Animated waveform bars
│   ├── layout/
│   │   └── Navbar.tsx           # Sticky navigation
│   └── sections/
│       ├── HeroSection.tsx      # Immersive hero with album art
│       ├── MusicSection.tsx     # Track catalog + album cards
│       ├── GallerySection.tsx   # Photo grid with lightbox
│       ├── VideoSection.tsx     # YouTube embeds
│       ├── DropSection.tsx      # Countdown timer
│       ├── CommunitySection.tsx # Fan profiles + badges
│       ├── CollabSection.tsx    # Project board
│       ├── MissionSection.tsx   # Artist bio + values
│       ├── MerchSection.tsx     # Merchandise
│       ├── NewsletterSection.tsx # Email signup
│       └── FooterSection.tsx    # Social links + copyright
├── contexts/
│   └── AudioContext.tsx    # Global audio playback state
└── data/
    └── tracks.ts           # Track data, fan profiles, artist info, social links
public/
└── images/                 # 11 photos from truthtellerrie.com
DESIGN.md                   # Complete design system specification
CLAUDE.md                   # Project context for AI-assisted development
TODOS.md                    # Deferred work items
```

---

*Built in a single session. From empty repo to live deployment.*
