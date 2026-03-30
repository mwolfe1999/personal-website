# Portfolio Website Plan — Vibe Coding Projects

## Overview

A personal portfolio website to showcase vibe-coded projects for startup founders, VC funds, and potential employers. The site should communicate: "I build real things with AI tools, fast."

- **Framework**: Next.js (App Router)
- **Hosting**: Vercel
- **Styling**: Tailwind CSS
- **Design tone**: Polished but with personality — somewhere between a clean dev portfolio and something that shows design taste. Not generic. Not flashy. Confident.

### Functional Reference

Use **https://sam-lazarus.vercel.app/** as a reference for **functionality and layout structure** (not visual theme). Key patterns to replicate from this site:

- Single-page home with anchor-link navigation that smooth-scrolls to sections
- Hero section with headshot photo, tagline, and two CTA buttons
- About section with a bio paragraph plus skill/expertise tags displayed as badges
- Project cards in a grid, each with a media preview (video or image), short description, and tech stack tags
- Cards are clickable and link to **individual detail pages** for deeper project write-ups
- Video demos play inline on hover or click within the project cards
- Contact info at the bottom with email and LinkedIn links
- WIP projects are shown with a "Coming soon" or "Demo coming soon" indicator (see how the reference site handles its in-progress projects)
- Clean, minimal footer

**What to change from the reference**: The reference site uses a very dark theme. This site should use a **light or warm-neutral color scheme** instead — still confident and modern, but not dark-mode. Keep the structural patterns, ditch the dark palette.

---

## Site Structure

The home page is a **single-page layout** with sections linked via anchor navigation. Key projects also get their own **dedicated detail pages** accessible by clicking a project card.

### 1. Hero / Header

- **Sticky navigation bar** at the top with your name/logo on the left and anchor links on the right: "Projects" | "About" | "Contact"
- **Your name** (large, prominent display font)
- **One-liner tagline** — something that frames what you do. Examples:
  - "Building products with AI — from idea to live app."
  - "Vibe coding: real products, shipped fast."
- **Your headshot photo** — displayed alongside the text (side-by-side on desktop, stacked on mobile), similar to the reference site's hero layout. **Headshot is ready** (see `/public/images/headshot.jpg`).
- **Two CTA buttons**: "View My Work" (scrolls to projects) and "Get in Touch" (scrolls to contact or opens mailto)

### 2. Projects Section

This is the core of the site. Projects are displayed as **cards in a grid layout**, grouped by domain category.

#### Category Structure (by domain)

- **Travel & Lifestyle** — consumer-facing apps for travel, planning, etc.
- **Beauty & E-Commerce** — storefronts, product sites
- **Developer Tools & Productivity** — automations, utilities, AI-powered tools
- **Personal Automation** — assistants and bots for everyday life
- **Fun & Experimental** — creative side projects, games, etc.

> Adjust or rename these categories once Claude Code has inspected the projects and understands what each one does. The goal is 3-5 meaningful groupings.

#### Each Project Card Contains:

| Element | Details |
|---|---|
| **Video demo or screenshot** | Displayed prominently at the top of the card. If a video demo is available, show it (autoplay on hover, muted, looping). If no video, fall back to a static screenshot image. If neither exists, show a subtle placeholder gradient. |
| **Project name** | Bold title |
| **Short blurb** | 2-3 sentences: what it does, why it was built, what's notable |
| **Tech stack tags** | Small pills/badges showing tools used (e.g. "Claude Code", "Lovable", "Next.js", "Vercel") |
| **WIP badge** | For work-in-progress projects, show a subtle "Coming Soon" or "In Progress" indicator — similar to how the reference site shows "Demo coming soon" on incomplete projects |
| **Action buttons** | Contextual links — "View Live Site" (for published apps) and/or "View on GitHub" (for repos). Show whichever applies; show both if both exist. Omit for WIP projects. |

**Cards are clickable.** For projects that have a detail page, the entire card links to `/projects/[id]`. For projects without a detail page, the card just shows the blurb and links inline.

#### Project Detail Pages (for key projects)

Some projects deserve more than a card. For these, clicking the card navigates to a dedicated page at `/projects/[project-id]` that includes:

- The full video demo (larger, with playback controls)
- A longer write-up: what the project does, the problem it solves, how it was built, and any interesting technical decisions
- Screenshots or additional media (multiple images if needed)
- Tech stack with more detail
- Prominent link(s) to the live site and/or GitHub repo
- A "Back to all projects" link to return to the home page

> **Note**: Not every project needs a detail page. Simple or smaller projects can just live as cards on the main page. Mark which projects should get detail pages in the data file using the `hasDetailPage` flag.

---

## Full Project List

Below is every project to feature on the site. **Claude Code should inspect each project's folder** (in the vibe coding directory) to determine the tech stack, write an accurate blurb, and identify any live URLs or repo links.

### Project 1: Travel App
- **Status**: Shipped
- **Live site**: Yes (URL to be confirmed)
- **GitHub**: Yes
- **Category**: Travel & Lifestyle
- **Folder name**: Look for the travel app project in the vibe coding folder
- **Notes**: Consumer-facing travel app. Claude Code should inspect the codebase to determine what it does (trip planning, itinerary building, etc.) and write an appropriate blurb.

### Project 2: AI News App
- **Status**: Shipped
- **Live site**: No
- **GitHub**: Yes
- **Category**: Developer Tools & Productivity (or adjust based on what it actually does)
- **Folder name**: Look for the AI news app project in the vibe coding folder
- **Notes**: An AI-related news app. Claude Code should inspect the codebase to understand the concept and write the blurb.

### Project 3: Rachel Wolfe Makeup Artistry
- **Status**: Shipped
- **Live site**: https://wolfemakeupartistry.com/
- **GitHub**: No
- **Built with**: Lovable
- **Category**: Beauty & E-Commerce
- **Notes**: A cosmetics/makeup artistry website built for a sister's beauty brand using Lovable. Toronto-based makeup artist site. This project is NOT in the vibe coding folder — it was built entirely in Lovable. Claude Code should write a blurb based on visiting the live site and describing what it offers (brand site, service listings, portfolio, etc.).

### Project 4: Scheduling Assistant
- **Status**: Work in Progress ⚠️
- **Live site**: No
- **GitHub**: Not yet
- **Category**: Developer Tools & Productivity
- **Notes**: A scheduling assistant project that is currently being developed. Show this on the site with a "Coming Soon" / "In Progress" indicator, similar to how the reference site (sam-lazarus.vercel.app) handles its WIP projects. Claude Code should write a brief placeholder blurb about what it will do.

### Project 5: Good Student Assistant
- **Status**: Work in Progress ⚠️
- **Live site**: No
- **GitHub**: Not yet
- **Category**: Developer Tools & Productivity
- **Notes**: Similar in concept to Sam Lazarus's "Coursework To Do Task Scraper" — an assistant that helps students manage coursework and assignments. Write a description in original words (do not copy Sam's description) and mark as "Coming Soon" / "In Progress." Claude Code should write a blurb that captures the idea of automating student task management.

### Project 6: Texting Friends Assistant
- **Status**: Shipped
- **Live site**: No
- **GitHub**: Yes
- **Folder name**: "Texting Personal Assistant" in the vibe coding folder
- **Category**: Personal Automation
- **Notes**: Claude Code should inspect the codebase to understand what this does and write the blurb. The name on the site should be "Texting Friends Assistant" (not the folder name).

### Project 7: Birthday Text Assistant
- **Status**: Shipped
- **Live site**: No
- **GitHub**: Yes
- **Folder name**: "birthday text assistant" in the vibe coding folder
- **Category**: Personal Automation
- **Notes**: Claude Code should inspect the codebase to understand what this does and write the blurb. Likely an automated birthday messaging tool.

### Project 8: March Madness Bracket
- **Status**: Shipped
- **Live site**: No
- **GitHub**: Yes
- **Folder name**: "March Madness" in the vibe coding folder
- **Category**: Fun & Experimental
- **Notes**: Claude Code should inspect the codebase to understand what this does (bracket builder, prediction tool, etc.) and write the blurb.

---

### Instructions for Claude Code: How to Fill in Project Details

For each project that has a folder in the vibe coding directory:

1. **Inspect the codebase** — look at the README, package.json, main source files, and any config files to understand what the project does and what technologies it uses.
2. **Write a blurb** — 2-3 sentences describing what it does, who it's for, and what's interesting about it. Write in a confident, concise tone suitable for a startup/VC audience.
3. **Identify the tech stack** — list the key technologies, frameworks, and tools used (e.g. "Next.js", "Claude API", "Vercel", "Python", etc.).
4. **Take or find a screenshot** — if there's a way to capture what the app looks like, grab a screenshot for the card.
5. **Note any live URLs** — check for deployment configs (vercel.json, CNAME, etc.) that indicate where the project is hosted.

For the Lovable project (#3, makeup site), visit the live URL and describe it based on what you see.

For WIP projects (#4, #5), write a brief aspirational blurb and mark them clearly as in-progress.

---

### 3. About Me Section

- **Your headshot photo** is ready (uploaded separately — use this as the hero and/or about section photo)
- **A paragraph** telling your story — who you are, why you got into vibe coding, what excites you about building with AI. Aim for ~4-6 sentences. Speak to a startup/VC audience: emphasize speed, shipping, and taste.
- **Skill/expertise tags** displayed as badges below the paragraph (e.g. "AI Automation", "Vibe Coding", "Full-Stack Apps", "Rapid Prototyping") — similar to how the reference site shows competency areas.
- **Links**: LinkedIn, GitHub profile, email/contact

> **TODO**: Write your About Me paragraph before handing to Claude Code, or have Claude Code draft one for you to edit.

### 4. Footer

- Simple and minimal
- Your name, year, and maybe one line like "Built with Claude Code"
- Social/contact links repeated here (LinkedIn, GitHub, email)

---

## Design Direction

### Aesthetic Guidelines for Claude Code

- **Theme**: Light or warm-neutral background — not dark mode. Think off-white, warm gray, or a subtle cream. The reference site (sam-lazarus.vercel.app) is a good structural model but uses a dark theme — **do not copy the dark palette**. Go light and confident instead.
- **Typography**: Use a distinctive display font for headings (not Inter/Roboto/Arial). Pair with a clean sans-serif body font. Import from Google Fonts. The heading font should have character — something that signals design taste.
- **Color palette**: A dominant warm neutral with one or two sharp accent colors. Commit to a cohesive scheme. Avoid purple-gradient-on-white clichés. The accent color should be used sparingly — for CTAs, hover states, and tech stack tags.
- **Layout**: The project grid should breathe — generous spacing, not cramped. Cards should have subtle hover effects (slight lift/shadow, or a border highlight). Follow the reference site's general spacing and card proportions.
- **Motion**: Staggered fade-in on scroll for project cards. Keep it tasteful — no bouncing or spinning. One well-done page-load animation is better than scattered effects. Video demos should autoplay (muted) on card hover for a polished feel.
- **Responsive**: Must look great on mobile. Project cards should stack to a single column. Navigation should collapse to a hamburger menu or minimal mobile nav. Video demos should be tap-to-play on mobile.
- **Media in cards**: Video demos displayed with rounded corners, subtle shadow. Static screenshots get the same treatment. If no media is provided, use a subtle placeholder gradient that matches the color scheme.

### What to Avoid

- Dark mode / very dark backgrounds
- Generic "AI portfolio template" look
- Overly complex animations that distract from the content
- Walls of text — the blurbs should be scannable
- Cookie-cutter card layouts with no visual distinction between categories
- Autoplay video with sound (always muted by default)

---

## Data Architecture

Store project data in a **simple TypeScript data file** (not a CMS). This makes it easy to add/edit projects later without touching component code.

```typescript
// src/data/projects.ts

export type Project = {
  id: string;               // used for URL slug: /projects/[id]
  name: string;
  blurb: string;            // 2-3 sentence summary shown on the card
  longDescription?: string; // longer write-up for the detail page (markdown or plain text)
  image?: string;           // path to screenshot in /public/images/
  video?: string;           // path to demo video in /public/videos/ (takes priority over image)
  techStack: string[];
  category: string;         // "Travel & Lifestyle", "Beauty & E-Commerce", etc.
  liveUrl?: string;         // optional — for published apps
  githubUrl?: string;       // optional — for open source
  hasDetailPage: boolean;   // whether this project gets its own /projects/[id] page
  isWip?: boolean;          // true for work-in-progress projects (shows "Coming Soon" badge)
};

export const projects: Project[] = [
  // Claude Code: fill this in after inspecting each project folder
];
```

This approach means:
- Adding a new project = adding one object to the array
- No database, no CMS, no API calls
- Claude Code can scaffold all the UI from this data structure
- Detail pages are auto-generated from the same data — if `hasDetailPage` is true and a `longDescription` exists, the `/projects/[id]` route renders it
- WIP projects display with a "Coming Soon" badge and no action buttons

---

## File Structure (for Claude Code)

```
portfolio-site/
├── public/
│   ├── images/
│   │   ├── headshot.jpg              # Your photo (provided)
│   │   ├── project-travel.png        # Screenshot per project
│   │   ├── project-news.png
│   │   ├── project-makeup.png
│   │   ├── project-texting.png
│   │   ├── project-birthday.png
│   │   └── project-march-madness.png
│   └── videos/
│       ├── demo-travel.mp4           # Video demos per project (where available)
│       └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout, fonts, metadata
│   │   ├── page.tsx                  # Main single-page home layout
│   │   ├── globals.css               # Tailwind + custom styles
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx          # Dynamic detail page for each project
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky top navigation
│   │   ├── Hero.tsx                  # Hero/header section with headshot + CTAs
│   │   ├── ProjectCard.tsx           # Individual project card (video/image + blurb)
│   │   ├── ProjectsSection.tsx       # Grid + category grouping
│   │   ├── AboutSection.tsx          # Bio + photo + skill tags
│   │   ├── ContactSection.tsx        # Email + LinkedIn links
│   │   └── Footer.tsx                # Footer
│   └── data/
│       └── projects.ts               # Project data array
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── vercel.json                       # (if needed for config)
```

---

## Deployment Checklist

1. Build the site locally with Claude Code
2. Push to a GitHub repo
3. Connect the repo to Vercel (import project)
4. Set a custom domain (optional but recommended for credibility)
5. Verify mobile responsiveness and load speed
6. Test video playback on mobile (tap-to-play) and desktop (hover autoplay)

---

## Before You Start in Claude Code — Your TODOs

- [x] **List all projects** — 8 projects listed above with status and links
- [x] **Headshot photo** — provided and ready
- [ ] **Record or capture video demos** for key projects (screen recordings, ~10-30 seconds each)
- [ ] **Gather screenshots** as fallbacks for projects without video demos
- [ ] **Write your About Me paragraph** (or have Claude Code draft one for you to edit)
- [ ] **Provide GitHub URLs** for the projects that have repos
- [ ] **Confirm the travel app's live URL**
- [ ] **Pick a domain name** (optional but recommended)
- [ ] **For detail-page projects**: decide which ones get their own page

Once these are ready, hand this plan to Claude Code and tell it to:
1. Read this spec
2. Inspect each project folder in the vibe coding directory
3. Fill in the blurbs, tech stacks, and screenshots
4. Build the site following this plan
5. Reference https://sam-lazarus.vercel.app/ for layout and interaction patterns (but not the dark color theme)
