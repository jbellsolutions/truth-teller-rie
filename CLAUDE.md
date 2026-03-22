# Truth Teller Rie

@AGENTS.md

## Project
Fan identity platform for an independent conscious hip-hop/R&B artist. Built with Next.js (App Router), Supabase, Vercel, Wavesurfer.js, and Cloudflare R2.

## Tech Stack
- **Frontend:** Next.js 15 (App Router, TypeScript, Tailwind CSS)
- **Backend:** Supabase (Auth, Database, Realtime, Edge Functions)
- **Audio:** Wavesurfer.js (wrapped in AudioEngine abstraction)
- **Storage:** Cloudflare R2 (audio files), Supabase Storage (images)
- **Email:** Resend (newsletter delivery)
- **Hosting:** Vercel
- **Content:** MDX (mission/blog pages)

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Architecture Principles
- Wrap Wavesurfer.js in AudioEngine — never import directly in components
- Global AudioContext for persistent playback across navigation
- All Supabase queries through typed helper functions
- RLS as the authorization layer — no duplicate app-level permission checks
- Event-driven engagement tracking — play events → queue → async processing
- Mobile-first responsive design
