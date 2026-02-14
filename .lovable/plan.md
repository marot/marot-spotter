

# Landing Page Redesign — Organic, Non-Generic Layout

## What's Wrong Now
The current page is a textbook AI-generated landing page: centered hero, uniform card grid, numbered vertical list, 2x2 grid of trust signals. Everything is symmetrical and predictable. No screenshots, no visual flow diagram, no personality.

## New Page Structure

### 1. Hero (keep but refine)
- Keep the tagline and curl CTA — they work
- Add a subtle angled/rotated app screenshot placeholder below the CTA, slightly off-center, with a border glow effect
- Break the perfect centering — shift the headline left-aligned on desktop with the screenshot floating to the right

### 2. Problem Section (keep, minor tweak)
- Works well as-is. Add a small visual element — a faded code diff snippet or terminal fragment in the background to give it texture

### 3. NEW: The Flow Diagram Section — "From Idea to Continuous Improvement"
This is the core new section. A visual node-graph showing the Spotter pipeline:

```text
[Idea] ──> [Conversation] ──> [Commit]
                                  │
                          ┌───────┴───────┐
                          ▼               │
                      [Review]            │
                    ┌────┼────┐           │
                    ▼    ▼    ▼           ▼
             [Code     [Product  [Transcripts]
            Hotspots]  Changes]  (rework, failed
                    │    │      tool calls)
                    ▼    ▼           ▼
                    [Repetitive Prompts]
                          │
                          ▼
               [Continuous Improvement]
              (rules, hooks, skills...)
```

This will be built as an SVG/CSS node diagram with connecting lines, using the amber accent for active nodes. Each node will be a styled box with an icon. Lines connect them with subtle animation. The layout will be organic — not a perfect grid, nodes at different vertical positions, lines curving between them.

### 4. Features Section — Expanded, Asymmetric Layout
Replace the uniform 4-column card grid with an asymmetric layout:

- **Left-right alternating rows**: Each feature gets a text block on one side and a screenshot placeholder on the other, alternating sides
- Features to highlight with their own row + screenshot placeholder:
  - **Transcript Visualization** — screenshot placeholder showing the transcript view
  - **Annotations** — screenshot placeholder showing inline annotations on code/transcripts  
  - **Session-to-Commit Lineage** — screenshot placeholder showing commit linked to conversation
  - **AI Hotspots** — screenshot placeholder showing risk-scored code
  - **Co-change Heatmaps** — screenshot placeholder showing file coupling visualization
  - **Subagent Tracking** — screenshot placeholder showing multi-agent view
- Each screenshot placeholder: a rounded rectangle with a dashed border, subtle gradient background, and a label like "Screenshot: Transcript View" — clearly marked as placeholder

### 5. NEW: Review and Continuous Improvement Section
A dedicated section explaining the review/improvement loop:

- Left side: prose explaining the workflow — you review sessions, spot patterns, then start an improvement session to refine your Claude Code rules, hooks, and skills
- Right side: a mini-diagram or stacked cards showing the outputs: "CLAUDE.md rules", "hooks", "skills", "tool configurations"
- This section gets its own visual treatment — maybe a slightly different background tone to set it apart

### 6. NEW: Spaced Repetition Section  
A standalone section for this feature since it's a unique differentiator:

- Headline: something like "Stay on top of everything. Even across projects."
- Explanation of how the spaced repetition system works — past changes surface on a schedule so nothing slips through the cracks
- Visual: a timeline/calendar-style placeholder showing review cards appearing over days
- Screenshot placeholder for the spaced repetition UI

### 7. Built For Engineers (trust signals) — keep as-is

### 8. Footer — keep as-is

## Screenshot Placeholders
Every placeholder will be a consistent component: a rounded rectangle with a 1px dashed amber border, a subtle dark gradient fill, a centered icon (Image icon from lucide), and a label underneath describing what screenshot goes there. Dimensions will be roughly 16:10 aspect ratio. These are designed to be swapped out with real screenshots later.

## Technical Details

### New/Modified Files
- `src/components/Hero.tsx` — asymmetric layout, add screenshot placeholder
- `src/components/Problem.tsx` — add background texture element
- `src/components/FlowDiagram.tsx` — NEW: the node-graph SVG/CSS diagram showing idea -> conversation -> commit -> review -> improvement pipeline
- `src/components/Features.tsx` — complete rewrite: alternating left-right rows with screenshot placeholders instead of uniform card grid
- `src/components/ReviewImprovement.tsx` — NEW: dedicated section for the review/continuous improvement workflow
- `src/components/SpacedRepetition.tsx` — NEW: dedicated section for the spaced repetition system
- `src/components/ScreenshotPlaceholder.tsx` — NEW: reusable placeholder component
- `src/pages/Index.tsx` — updated section order

### New Section Order
1. Hero
2. Problem  
3. Flow Diagram (idea -> commit -> review -> improvement)
4. Features (alternating layout with screenshots)
5. Review & Continuous Improvement (dedicated section)
6. Spaced Repetition (dedicated section)
7. Built For Engineers
8. Footer

### Layout Approach
- Break the centered-everything pattern: use asymmetric grids, offset elements, varied spacing
- The flow diagram uses CSS positioning with connecting SVG lines between nodes
- Feature rows use a 5/7 or 7/5 column split alternating sides
- Screenshot placeholders are a reusable component accepting a label prop

### Missing Aspects You May Want to Add Later
- **Pricing or hosting model** — is Spotter purely self-hosted or will there be a hosted option?
- **Demo/video** — a short walkthrough video or animated GIF could replace some placeholders
- **Comparison section** — "Spotter vs. reading raw diffs" or "vs. other tools"
- **Testimonials or early adopter quotes** — even a single quote from a fellow engineer adds credibility

