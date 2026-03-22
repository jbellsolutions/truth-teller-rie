# Design System — Truth Teller Rie

## Product Context
- **What this is:** Fan identity platform for an independent conscious hip-hop/R&B artist
- **Who it's for:** Fans, collaborators, and new listeners discovering the artist
- **Space/industry:** Independent music, conscious hip-hop/R&B
- **Project type:** Interactive web app — music player, fan engagement, community

## Aesthetic Direction
- **Direction:** Luxury/Refined with Organic warmth
- **Decoration level:** Intentional — subtle grain texture, soft gradients, vinyl-inspired
- **Mood:** Walking into the artist's studio. Warm, soulful, premium but not flashy. Confident and measured. The feeling of a vinyl record sleeve: tactile, intentional, timeless.

## Typography
- **Display/Hero:** Instrument Serif — elegant, warm, soulful. Signals craft over hype.
- **Body:** DM Sans — clean, readable, modern without being sterile
- **UI/Labels:** DM Sans (same as body)
- **Data/Tables:** DM Sans with tabular-nums — play counts, streaks, dashboard metrics
- **Code:** JetBrains Mono
- **Loading:** Google Fonts CDN
- **Scale:** 11px / 13px / 14px / 16px / 18px / 24px / 32px / 48px / 64px / 72px

## Color
- **Approach:** Restrained warmth
- **Primary:** #C8956C (warm bronze/copper) — soulful, earthy, premium
- **Secondary:** #2D2A26 (deep espresso) — rich dark, not pure black
- **Accent:** #D4A574 (light gold) — badges, highlights, engagement
- **Neutrals:** warm grays — #F7F4F0 (cream) / #EDE8E2 / #E0D9D1 / #D4CEC6 / #B8B0A6 / #8A8078 / #5A534C / #3A3632 / #2D2A26 / #1A1816 (near-black)
- **Semantic:** success #5B8C5A, warning #D4A24E, error #C25B56, info #5B7B9C
- **Dark mode:** Default. Deep espresso (#2D2A26) surfaces, not true black. Warm and inviting.
- **Light mode:** Cream (#F7F4F0) background, warm grays, bronze accents.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous breathing room. Music deserves space.
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** Hybrid — grid-disciplined for app features (player, dashboard, profiles), editorial for landing and mission content
- **Grid:** 12 columns, responsive breakpoints at 640/768/1024/1280px
- **Max content width:** 1200px
- **Border radius:** sm:4px, md:8px, lg:12px, full:9999px

## Motion
- **Approach:** Intentional — subtle entrance animations, smooth state transitions, waveform pulse
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)
- **Waveform animation:** Continuous gentle pulse, responds to playback state
- **No bouncy/playful motion** — confident and measured

## Key Design Decisions
- Dark mode default (reduces eye strain for listening sessions, makes art pop)
- Persistent bottom Now Playing bar (Spotify-trained expectation)
- Card-based content layout (scannable, mobile-friendly)
- Serif display font in hip-hop (signals craft and consciousness, breaks from convention)
- Warm bronze palette (unique in the space, evokes vinyl/analog authenticity)
- Grain texture overlay (subtle, vinyl-inspired, adds tactile quality)

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-21 | Initial design system created | /design-consultation — conscious hip-hop/R&B direction with luxury warmth |
| 2026-03-21 | Instrument Serif for display | Breaks hip-hop convention (usually sans/graffiti), signals conscious artistry |
| 2026-03-21 | Bronze/copper primary color | Unique in music space (vs neon/electric), evokes vinyl warmth |
| 2026-03-21 | Deep espresso not true black | Warmer dark mode, feels like a room with warm lighting |
