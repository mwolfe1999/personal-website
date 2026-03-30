@AGENTS.md

# Personal Portfolio Website

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Deployed on Vercel

## Design System

### Colors (light/warm-neutral — NOT dark mode)
- Background: `#FAFAF7` (warm off-white)
- Surface/cards: `#FFFFFF`
- Text primary: `#1A1A1A`
- Text secondary: `#4A4A4A`
- Text muted: `#8A8A8A`
- Accent (CTAs, links): `#2563EB`
- Accent hover: `#1D4ED8`
- WIP badge: `#F59E0B`
- Borders: `#E5E5E0`

### Typography (Google Fonts)
- Headings: DM Serif Display
- Body: DM Sans

### Animations
- Staggered fade-in on scroll via Framer Motion
- Card hover: subtle lift + shadow
- Video: autoplay muted on hover (desktop), tap-to-play (mobile)

## Architecture
- **Data-driven**: all project content in `src/data/projects.ts`
- **Server components by default**, `"use client"` only for interactive components (Navbar, ProjectCard, FadeIn)
- **Single-page home** with anchor nav + dynamic `/projects/[id]` detail pages
- **Reference site for structure**: sam-lazarus.vercel.app (NOT for color/theme)

## Project Data
8 projects across 4 categories:
1. Travel & Lifestyle
2. AI & Productivity
3. Personal Automation
4. Fun & Experimental

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
