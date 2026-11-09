# Bells University Website — UI + Responsive Audit & Plan

## Scope

- Style direction: Modern tech (clean, bold, inviting, subtle motion)
- Pages: All routes (home + all interior pages)
- Devices: Mobile-first with the standard viewport set (320, 360, 375, 390, 414, 768, 1024, 1440, 1920, 2560)
- Widgets: ChatWidget stays; scroll-trigger AdmissionPopup removed/disabled

## Current Baseline (What exists today)

- Next.js app-router site with sections + multiple pages.
- Visual language already includes:
  - Brand colors (`brand-primary`, `brand-secondary`, `brand-accent`)
  - Strong hero, card-driven sections, subtle framer-motion interactions
- Known past issue: hydration mismatch in Navbar caused by client-only branching; this must not reappear (rule: server and initial client render must be deterministic).

## Audit Findings (What to improve)

### P0 — UX stability / correctness

- Navbar must never depend on client-only values for its initial render (scroll, random, time, pathname-derived branching inside a client component).
- Remove intrusive/interruptive modals on non-admissions pages (AdmissionPopup should not block reading departments/programmes).

### P1 — Mobile-first layout quality

- Reduce fixed heights and “large desktop-first” spacing so mobile does not feel over-sized or clipped.
- Guard decorative negative offsets and clip-path usage so they cannot create hidden horizontal overflow on small screens.
- Normalize section paddings and typography so sections feel consistent between pages.

### P1 — Information architecture on homepage

You requested these homepage anchors/blocks to be present:

- Admissions CTA (direct and obvious)
- Colleges/Departments preview
- Staff spotlight (featured staff/leaders)
- News preview (latest announcements/events)

### P2 — A11y & polish

- Ensure strong color contrast for text on images.
- Keyboard focus visibility for links/buttons.
- Respect reduced-motion where possible (keep animations subtle).

## Proposed Changes (Plan)

### 1) Establish a UI “system” (consistency layer)

- Create a small set of reusable layout primitives:
  - Section wrapper spacing tokens (mobile vs desktop)
  - Consistent container width and padding rules
  - Standard card styles (border, shadow, hover-lift)
  - Standard button styles (primary/secondary/outline)
- Outcome: every page shares a consistent rhythm, spacing, and typography.

### 2) Homepage restructure (Modern, inviting, conversion-focused)

- Keep Hero, but refine it for mobile:
  - Prevent clip-path from clipping content on small viewports (apply only from `md:`).
  - Reduce vertical padding on mobile while keeping impact on desktop.
- Add new sections:
  - **Staff Spotlight**: 3–6 featured staff (VC / Registrar / Deans / notable faculty). Card layout with role + short excerpt + link to college/department.
  - **News Preview**: 3 featured items with date/category + CTA to `/news`.
  - Keep **CollegesPreview** and **Programmes** as structured, browsable blocks.

### 3) Widgets policy (per your preference)

- Disable AdmissionPopup globally (or restrict it to only `/admissions`).
- Keep ChatWidget.

### 4) Responsive hardening (no hidden overflow, no breakpoints surprises)

- Replace fixed heights with responsive heights where appropriate.
- Ensure images/captions respect container widths and do not overflow.
- Ensure all cards/grids collapse gracefully from 3→2→1 columns with correct spacing.

### 5) Evidence-based validation (required before sign-off)

For each route in scope:

- Viewport screenshots at the standard set.
- Automated overflow check at each viewport:
  - `document.documentElement.scrollWidth > document.documentElement.clientWidth`
  - identify offending elements when overflow occurs (selector + computed width)

Note: we can implement this evidence gathering in two ways:

- Option A (Recommended): add Playwright and run a scripted capture + overflow report.
- Option B: manual capture (slower, less auditable).

I will not add new dependencies without your explicit approval.

## Acceptance Criteria

- No hydration mismatch errors on any page load.
- No horizontal overflow at any viewport in the standard set.
- Homepage includes: Admissions CTA + Colleges preview + Staff spotlight + News preview.
- AdmissionPopup is removed/disabled (chat remains).
- Visual consistency: unified spacing + typography scale across pages.

## Approval Gate (Next Step)

Reply “approve” for:

- Implementing the UI system + homepage restructure
- Disabling AdmissionPopup site-wide (chat stays)
- Running the responsive evidence pass

Also choose the validation approach:

- “Approve Option A” (Playwright automated screenshots + overflow report), or
- “Approve Option B” (manual screenshots + overflow checklist)

