export type HowItWorksStep = {
  title: string;
  description: string;
};

export type TechStackItem = {
  name: string;
  role: string;
};

export type ProjectDetail = {
  overview: string;
  howItWorks: HowItWorksStep[];
  techStackDetailed: TechStackItem[];
  results: string;
};

export type Project = {
  id: string;
  name: string;
  blurb: string;
  shortBlurb?: string;
  detail?: ProjectDetail;
  image?: string;
  video?: string;
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  hasDetailPage: boolean;
  isWip?: boolean;
};

export const categories = [
  "Built for Fellow MBA Students",
  "Built for Family & Friends",
  "Built for Personal Productivity",
  "Built for Fun",
] as const;

export const projects: Project[] = [
  // --- Built for Fellow MBA Students ---
  {
    id: "travel-app",
    name: "Wharton Travel Guide",
    shortBlurb:
      "B-school students travel a lot, and planning trips is hard. This app lets students share itineraries, browse peer reviews by city, and generate custom trips they can export directly to Google Maps.",
    blurb:
      "A peer-powered travel platform where MBA students share and discover recommendations across four Japanese cities. Features AI-powered trip uploads, interactive maps, itinerary generation, and a social recommendation feed with 1,000+ real reviews.",
    detail: {
      overview:
        "Every year, dozens of Wharton MBA students travel to Japan with no easy way to share what they learned. Spreadsheets get passed around but they're hard to browse and impossible to keep updated. This app lets students browse curated recommendations for Tokyo, Kyoto, Osaka, and Hiroshima — organized by category — while second-years upload their trip logs through an AI-powered document extraction pipeline.",
      howItWorks: [
        {
          title: "Upload Trip Logs",
          description:
            "Second-year students upload travel logs as PDFs, Word docs, or Excel sheets. Claude's vision API extracts structured recommendation data from each document automatically.",
        },
        {
          title: "Browse by City & Category",
          description:
            "First-years browse recommendations organized by city and category (Food, Activities, Nightlife, Lodging) with filterable cards and interactive maps powered by OpenFreeMap.",
        },
        {
          title: "Save & Plan",
          description:
            "Students heart their favorite places, build personalized itineraries, and explore other travelers' profiles to see full trip breakdowns.",
        },
        {
          title: "Social Layer",
          description:
            "A friend system lets you follow classmates, see their saved places, and discover recommendations through people you trust.",
        },
      ],
      techStackDetailed: [
        { name: "React + TypeScript + Vite", role: "Frontend framework with type safety and fast HMR" },
        { name: "Supabase", role: "Postgres database, auth, and row-level security" },
        { name: "Claude API", role: "AI-powered document parsing and data extraction from travel logs" },
        { name: "Leaflet + MapLibre GL", role: "Interactive maps with OpenFreeMap vector tiles" },
        { name: "Tailwind CSS", role: "Utility-first styling with consistent design system" },
        { name: "Vercel", role: "Hosting with automatic deploys from main branch" },
      ],
      results:
        "99 active users across the Wharton class. 617 real recommendations aggregated from 30+ travelers across 4 Japanese cities.",
    },
    video: "/videos/travel-guide.mp4",
    techStack: ["React", "Supabase", "Claude API", "TypeScript", "Vite", "Leaflet", "Tailwind CSS", "Vercel"],
    category: "Built for Fellow MBA Students",
    liveUrl: "https://wharton-travel-guide.vercel.app",
    githubUrl: "https://github.com/Wharton-Travel/wharton-travel-guide",
    hasDetailPage: true,
  },
  {
    id: "makeup-artistry",
    name: "Makeup Artist Business Website",
    shortBlurb:
      "My sister is a makeup artist expanding from special effects for film into weddings and personal services. I built her a site so she\u2019s discoverable online, can showcase her services, and gives potential clients an easy way to get in touch.",
    blurb:
      "A luxury portfolio and booking site for a Toronto-based makeup artist specializing in film/TV, bridal, SFX, and events. Features image carousels by category, expandable pricing cards with tiered packages, and a Supabase-backed contact form that sends formatted booking inquiries via Resend.",
    detail: {
      overview:
        "My sister Rachel is a Toronto-based makeup artist who's been doing special effects work for film for years. As she expanded into weddings and personal services, she needed a professional web presence — somewhere clients could find her, see her work, and easily get in touch. I built her a full portfolio and booking site using Lovable.",
      howItWorks: [
        {
          title: "Discover Services",
          description:
            "Visitors browse six service categories — Film + TV, Special Effects, Music Videos, Bridal, Events, and Beauty Lessons — each with expandable pricing details.",
        },
        {
          title: "Explore the Portfolio",
          description:
            "Image carousels showcase Rachel's work across Beauty and Film/SFX categories, giving potential clients a visual sense of her range.",
        },
        {
          title: "Submit a Booking Inquiry",
          description:
            "A contact form captures name, email, phone, service type, event date, and location. Submissions trigger a Supabase Edge Function that sends a formatted email to Rachel via Resend.",
        },
      ],
      techStackDetailed: [
        { name: "Lovable", role: "No-code platform for rapid site generation and iteration" },
        { name: "React + TypeScript", role: "Component-based frontend with type safety" },
        { name: "Tailwind CSS", role: "Custom luxury design with gold accents and serif typography" },
        { name: "Supabase", role: "Edge Functions for processing contact form submissions" },
        { name: "Resend", role: "Email delivery for booking inquiries" },
      ],
      results:
        "Live at wolfemakeupartistry.com. Rachel is now discoverable online with a professional presence that matches the quality of her work.",
    },
    video: "/videos/makeup-site.mp4",
    techStack: ["Lovable", "React", "Supabase", "TypeScript", "Tailwind CSS", "Resend", "Vite"],
    category: "Built for Family & Friends",
    liveUrl: "https://wolfemakeupartistry.com/",
    githubUrl: "https://github.com/mwolfe1999/rachelwolfemakeup",
    hasDetailPage: true,
  },

  // --- Built for Personal Productivity ---
  {
    id: "ai-news",
    name: "AI Tweet Digest",
    shortBlurb:
      "I get my AI news on X, but I kept bookmarking tweets and never reading them. I used the X API to build a weekly digest that summarizes everything I saved \u2014 so I can stay on top of the latest tools without the scroll.",
    blurb:
      "A fully automated pipeline that turns bookmarked AI tweets into curated email digests. Text a tweet URL to a Twilio number; the system extracts content, follows linked articles, generates Claude-powered summaries, and delivers daily and weekly digests via email.",
    detail: {
      overview:
        "Keeping up with AI news on Twitter/X means either doom-scrolling or losing track of important threads. I wanted a system where sharing a tweet was all it took to get it analyzed, summarized, and delivered to my inbox on a schedule — zero manual curation required after the initial bookmark.",
      howItWorks: [
        {
          title: "Capture",
          description:
            "Text a tweet URL to a Twilio number via SMS, or sync bookmarks automatically from X using OAuth 2.0 with PKCE and automatic token rotation.",
        },
        {
          title: "Enrich",
          description:
            "Claude analyzes tweet content, follows linked articles via Jina Reader, processes images with vision, and generates contextual summaries for each entry.",
        },
        {
          title: "Store & Score",
          description:
            "Enriched tweets are stored in Supabase with metadata. A scoring algorithm selects the most relevant items for each digest based on recency and topic diversity.",
        },
        {
          title: "Deliver",
          description:
            "Vercel Cron jobs trigger daily and weekly digest emails via Resend. Both HTML and plain text versions are generated, with overflow carrying to the next cycle.",
        },
      ],
      techStackDetailed: [
        { name: "Next.js + TypeScript", role: "API routes and serverless backend" },
        { name: "Supabase", role: "Postgres storage for tweets, tokens, and digest history" },
        { name: "Claude API", role: "Content summarization and image analysis via Sonnet" },
        { name: "Twilio", role: "SMS webhook for receiving tweet URLs" },
        { name: "X API v2", role: "OAuth 2.0 bookmark syncing with automatic token rotation" },
        { name: "Resend", role: "Email delivery for daily and weekly digests" },
        { name: "Vercel Cron", role: "Scheduled jobs for bookmark fetching and digest generation" },
      ],
      results:
        "Fully automated pipeline running daily since launch. Digests deliver 10 curated AI news items per cycle with zero manual curation. The system never silently fails — it logs errors, skips bad entries, and sends failure alerts.",
    },
    techStack: ["X API", "Claude API", "Supabase", "Next.js", "TypeScript", "Twilio", "Resend", "Vercel Cron"],
    category: "Built for Personal Productivity",
    githubUrl: "https://github.com/mwolfe1999/ai-tweet-digest",
    hasDetailPage: true,
  },
  {
    id: "scheduling-assistant",
    name: "Schedule Sync",
    shortBlurb:
      "B-school students are constantly texting each other to find overlapping free time for coffee, lunch, or a walk to campus. This app integrates with Wharton\u2019s course and club calendars to make it easy to see who\u2019s around and when.",
    blurb:
      "A schedule coordination app for MBA students to find common free time with classmates. Visual weekly calendar grid, AI-powered availability queries, and network management — all in a single React component.",
    detail: {
      overview:
        "Finding a time to meet with classmates at Wharton means texting back and forth, comparing schedules manually, and hoping everyone responds. This app lets students input their course schedules, select friends to coordinate with, and instantly see when everyone is free — plus an AI assistant to answer natural-language availability queries.",
      howItWorks: [
        {
          title: "Input Your Schedule",
          description:
            "Enter your weekly course schedule with class names, days, and time blocks. The app renders a visual calendar grid showing your commitments at a glance.",
        },
        {
          title: "Add Your Network",
          description:
            "Select classmates from a directory and add them to your network. Their schedules overlay on your calendar so you can see conflicts and free slots.",
        },
        {
          title: "Find Meeting Times",
          description:
            "The Meet tab computes all overlapping free time across selected friends and surfaces optimal meeting windows.",
        },
        {
          title: "Ask the AI",
          description:
            "A Claude-powered chat assistant answers natural-language questions like \"When are Sarah and I both free on Thursday?\" using the loaded schedule data.",
        },
      ],
      techStackDetailed: [
        { name: "React + Vite", role: "Single-page app with fast hot module replacement" },
        { name: "Tailwind CSS", role: "Utility-first styling for the calendar grid and UI" },
        { name: "Claude API", role: "Natural-language availability queries in the chat interface" },
        { name: "Vercel", role: "Hosting with automatic deploys" },
      ],
      results: "",
    },
    techStack: ["React", "Claude API", "Vercel", "Vite", "Tailwind CSS"],
    category: "Built for Fellow MBA Students",
    githubUrl: "https://github.com/mwolfe1999/wharton-meet",
    isWip: true,
    hasDetailPage: true,
  },
  {
    id: "good-student",
    name: "Coursework Pilot",
    shortBlurb:
      "Some days I get lost in a vibe coding project and lose sight of MBA coursework. I built a tool that scrapes assignments from Canvas LMS, creates calendar tasks with due dates, and makes sure nothing falls through the cracks.",
    blurb:
      "An AI-powered tool to help students stay on top of coursework — automatically scraping assignments, tracking deadlines, and surfacing what's due next. Designed to replace the mental overhead of juggling multiple course portals.",
    detail: {
      overview:
        "MBA students juggle assignments across Canvas, email, Slack, and professor websites — and things fall through the cracks. This tool automatically scrapes assignment info from course portals, consolidates deadlines into a single view, and sends proactive reminders so nothing gets missed.",
      howItWorks: [
        {
          title: "Scrape Course Portals",
          description:
            "An automated agent logs into Canvas and other course platforms, scrapes syllabi and assignment pages, and extracts due dates, submission links, and requirements.",
        },
        {
          title: "Consolidate Deadlines",
          description:
            "All assignments are normalized into a unified timeline — sorted by due date, grouped by course, with status tracking for what's submitted vs. outstanding.",
        },
        {
          title: "Proactive Reminders",
          description:
            "Daily summaries surface what's due this week. Urgent items get flagged with lead time so you're never scrambling the night before.",
        },
        {
          title: "Natural Language Queries",
          description:
            "Ask questions like \"What do I have due this week?\" or \"When is my next Finance deliverable?\" and get instant answers from the consolidated data.",
        },
      ],
      techStackDetailed: [
        { name: "Claude Code", role: "Autonomous agent for scraping and task orchestration" },
        { name: "AI Automation", role: "Intelligent extraction of deadlines from unstructured course pages" },
      ],
      results: "",
    },
    techStack: ["Claude Code", "Canvas API", "Cron"],
    category: "Built for Fellow MBA Students",
    isWip: true,
    hasDetailPage: true,
  },

  // --- Built for Personal Productivity (cont.) ---
  {
    id: "texting-assistant",
    name: "Text Back Reminder",
    shortBlurb:
      "I\u2019ll admit it \u2014 I could be a better texter. So I built an accountability tool: if I haven\u2019t replied to a friend in over 48 hours, I get an iMessage reminder nudging me to follow up.",
    blurb:
      "A daily automation that scans iMessage for unreplied conversations and sends a follow-up reminder. Runs as a scheduled Claude Code task with smart frequency reduction — no more accidentally ghosting friends.",
    detail: {
      overview:
        "I'd open a text, get distracted, and realize days later I never responded. The guilt compounds and the relationship suffers — all because of a simple oversight. This automation runs daily at 9AM, scans all 1:1 iMessage conversations, and surfaces threads where someone messaged 48+ hours ago with no reply.",
      howItWorks: [
        {
          title: "Scan Conversations",
          description:
            "A scheduled Claude Code task reads all 1:1 iMessage threads and identifies conversations where someone messaged 48+ hours ago and received no reply.",
        },
        {
          title: "Filter & Deduplicate",
          description:
            "A reminder log tracks per-contact state — max 3 reminders with 3-day intervals to avoid nagging. Counters auto-reset when a new message arrives from the same contact.",
        },
        {
          title: "Send Summary",
          description:
            "A single iMessage is sent listing everyone you owe a response to. If all conversations are caught up, nothing is sent.",
        },
        {
          title: "Catch-Up Fallback",
          description:
            "If the morning run is missed (laptop asleep), a noon fallback catches it. Missed days are detected and flagged with a warning prefix.",
        },
      ],
      techStackDetailed: [
        { name: "Claude Code", role: "Autonomous agent runtime for scheduled task execution" },
        { name: "iMessage MCP", role: "Read unread messages, search contacts, send reminders" },
        { name: "Cron Scheduling", role: "Daily 9AM trigger with noon fallback" },
        { name: "JSON Config", role: "Configurable thresholds without editing code" },
      ],
      results:
        "Runs daily with zero maintenance. Built with lessons from the Birthday Reminders project — applied dedup logic, catch-up handling, and file path resilience from the start. All thresholds are configurable via JSON.",
    },
    techStack: ["Claude Code", "iMessage MCP", "Cron", "macOS Automation"],
    category: "Built for Personal Productivity",
    hasDetailPage: true,
  },
  {
    id: "birthday-reminders",
    name: "Birthday Ping",
    shortBlurb:
      "I try to be the friend to remember birthdays. I used to use Facebook reminders, but I don\u2019t use Facebook much anymore. Instead, I had Claude scan my socials, build a calendar, and send text reminders directly to my phone.",
    blurb:
      "An open-source replacement for paid birthday reminder apps. Reads birthdays from a JSON file, runs daily via Claude Code, and sends iMessage reminders 7 days before and on the day. Includes Facebook bulk-import via GraphQL scraping.",
    detail: {
      overview:
        "Paid birthday reminder apps charge subscriptions for something that should be free. This tool reads a simple JSON file of birthdays, runs daily as a scheduled Claude Code task, and sends two iMessage reminders per birthday — a heads-up 7 days before and a day-of reminder. It even bulk-imports birthdays from Facebook via GraphQL scraping.",
      howItWorks: [
        {
          title: "Import Birthdays",
          description:
            "Add birthdays manually to a JSON file, or bulk-import from Facebook using a GraphQL scraper that pulls all 12 months of friend birthdays with automatic deduplication.",
        },
        {
          title: "Daily Scan",
          description:
            "A cron job triggers at 9AM daily. The agent checks today's date against all birthdays and identifies anyone with a birthday in exactly 7 days or today.",
        },
        {
          title: "Send Reminders",
          description:
            "Two iMessages per birthday: a 7-day warning (\"Sarah Chen's birthday is next week\") and a day-of reminder. A dedup log prevents duplicate texts if the task runs twice.",
        },
        {
          title: "Catch-Up & Auto-Wake",
          description:
            "If the morning run is missed (laptop asleep), a noon fallback catches it. macOS auto-wake is configured via pmset to power on 1 minute before the scheduled run.",
        },
      ],
      techStackDetailed: [
        { name: "Claude Code", role: "Autonomous agent runtime for scheduled task execution" },
        { name: "iMessage MCP", role: "Send birthday reminders directly via iMessage" },
        { name: "Cron Scheduling", role: "Daily 9AM trigger with noon fallback for missed runs" },
        { name: "Facebook GraphQL", role: "Bulk-import birthdays by scraping the birthday calendar endpoint" },
        { name: "pmset", role: "macOS auto-wake scheduling to prevent sleep from blocking runs" },
      ],
      results:
        "Tracks 100+ birthdays with zero missed reminders since launch. Open-source on GitHub — designed as a free replacement for paid birthday apps. Double-run prevention and catch-up logic ensure reliability without duplicates.",
    },
    techStack: ["Claude Code", "iMessage MCP", "GraphQL", "macOS Automation", "Cron"],
    category: "Built for Family & Friends",
    githubUrl: "https://github.com/mwolfe1999/birthday-reminders",
    hasDetailPage: true,
  },

  // --- Built for Fun ---
  {
    id: "march-madness",
    name: "March Madness Bracket Engine",
    shortBlurb:
      "I\u2019m tired of getting my bracket busted and losing money in pools with friends. So I worked with Claude to build a data-driven prediction engine that pulls from multiple sources to generate strategies optimized for pool value.",
    blurb:
      "A data-driven bracket prediction engine that synthesizes 9 sources — ESPN BPI, Vegas spreads, Kalshi odds, expert consensus, injury reports, and more — into three confidence-tiered tournament strategies optimized for pool value.",
    detail: {
      overview:
        "Most bracket strategies are either pure chalk (boring, undifferentiated) or pure chaos (fun, but wrong). I wanted something that balanced prediction accuracy with pool value — picking the right upsets at the right time. This engine ingests 9 independent data sources, builds a composite win probability model, and generates three bracket strategies.",
      howItWorks: [
        {
          title: "Ingest 9 Data Sources",
          description:
            "Scrapes ESPN BPI, Kalshi/Polymarket odds, Vegas spreads, expert consensus from 14+ analysts, injury reports, efficiency metrics, recency/momentum data, historical upset patterns, and Four Factors.",
        },
        {
          title: "Build Win Probability Model",
          description:
            "A weighted average of 5 sub-models: historical seed matchups (10%), efficiency logistic regression (35%), market-derived odds (30%), Vegas spread conversion (15%), and expert consensus (10%).",
        },
        {
          title: "Score Pool Value",
          description:
            "Each pick is scored as EV = win_probability × round_points × (1/public_pick_rate) — rewarding accurate contrarian picks that differentiate your bracket.",
        },
        {
          title: "Generate Three Strategies",
          description:
            "Outputs a Best Guess bracket (balanced accuracy + pool edge), a Chalk bracket (maximum accuracy), and a Swing bracket (maximum contrarian value for large pools).",
        },
        {
          title: "Sanity Check",
          description:
            "Post-generation validation against historical upset rates, 12-over-5 frequency, and 1-seed Final Four distribution. Data gap reporting flags incomplete scrapes.",
        },
      ],
      techStackDetailed: [
        { name: "Node.js", role: "Core prediction engine and bracket generation" },
        { name: "JSON Pipeline", role: "9-source data ingestion and normalization" },
        { name: "ESPN / Kalshi / Polymarket", role: "Real-time odds, BPI probabilities, and market data" },
        { name: "Vegas Spreads", role: "Spread-to-probability conversion for 28/32 R64 games" },
        { name: "Web Scraping", role: "Automated data collection from sportsbooks and analyst sites" },
      ],
      results:
        "Generated 3 complete 63-game brackets for the 2026 tournament. Model synthesized data from 9 sources covering all 68 teams across 4 regions. Sanity checks validated against 20+ years of historical upset rate patterns.",
    },
    techStack: ["Node.js", "Web Scraping", "Claude API", "JavaScript", "ESPN API", "Kalshi"],
    category: "Built for Fun",
    githubUrl: "https://github.com/mwolfe1999/march-madness-2026",
    hasDetailPage: true,
  },
];
