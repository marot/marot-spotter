

# Spotter Landing Page — Bold, Engineer-Focused

## Overview
A single-page marketing site for Spotter — an open-source tool that reviews Claude Code sessions with commit-level intelligence. The page speaks directly to engineers using AI coding agents, with a bold visual identity and a prominent `curl` install command as the primary CTA.

## Visual Direction
- **Bold & opinionated** design: large display typography, high-contrast dark theme with amber/copper accent colors (nodding to the existing brand)
- Monospace elements for code/commands mixed with a strong sans-serif display font
- Asymmetric layouts, oversized section headers, and intentional negative space
- Subtle animations on scroll (fade-in, slide-up) to add polish without distraction

## Page Sections

### 1. Hero
- Punchy tagline: something like *"See what your AI agent actually did."*
- One-line description positioning Spotter as a session reviewer for Claude Code
- **Primary CTA**: a styled terminal block with a `curl | bash` install command (copyable)
- Secondary link to the GitHub repo

### 2. The Problem
- A short, relatable statement about the pain of reviewing AI-generated code blind — you see the diff, but not the reasoning, the failed attempts, or the rework
- Keeps it to 2-3 sentences, engineer tone, no marketing fluff

### 3. Feature Cards (4-5 key capabilities)
Each card gets a bold icon, title, and 1-2 sentence description:
- **Live Transcript + Terminal Replay** — Synchronized view of what the agent saw and did
- **Session → Commit Lineage** — Every commit linked back to the conversation that produced it, with confidence scores
- **AI Hotspots** — ML-scored code snippets ranked by review risk so you focus on what matters
- **Co-change & Heatmaps** — Visualize implicit file coupling and churn patterns across sessions
- **Subagent Awareness** — Drill into child agent contributions separately

### 4. How It Works (3-step flow)
A simple 1-2-3 visual:
1. Install hooks & start the server
2. Use Claude Code normally — Spotter captures everything in the background
3. Open the dashboard to review, annotate, and trace

### 5. Built For Engineers (trust signals)
- Open source (MIT license)
- Elixir/Phoenix stack, self-hosted, no data leaves your machine
- 900+ tests, OpenTelemetry instrumented, E2E with Playwright
- Built with Claude Code itself (every commit co-authored with Claude)

### 6. Footer
- GitHub link, MIT license badge
- Minimal — no newsletter, no legal boilerplate

## No Backend Needed
This is a purely static marketing page — no database, no auth, no API calls. Just React + Tailwind with smooth scroll and copy-to-clipboard for the install command.

