---
name: Manhã Informativo Editorial & Broadcast System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#44474c'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#74777d'
  outline-variant: '#c4c6cc'
  surface-tint: '#525f71'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f1c2c'
  on-primary-container: '#778598'
  inverse-primary: '#bac8dc'
  secondary: '#0050cc'
  on-secondary: '#ffffff'
  secondary-container: '#0266ff'
  on-secondary-container: '#f9f7ff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f28'
  on-tertiary-container: '#0090af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e4f9'
  primary-fixed-dim: '#bac8dc'
  on-primary-fixed: '#0f1c2c'
  on-primary-fixed-variant: '#3a4859'
  secondary-fixed: '#dae1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#001849'
  on-secondary-fixed-variant: '#003fa4'
  tertiary-fixed: '#b6ebff'
  tertiary-fixed-dim: '#47d6ff'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  masthead-lg:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Newsreader
    fontSize: 42px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: '600'
    lineHeight: 24px
  lead-paragraph:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Public Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  byline:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  ticker-badge:
    fontFamily: Public Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes a high-trust, authoritative, and intellectual editorial ecosystem rooted in Mozambique’s academic and journalistic heritage. Bridging traditional broadsheet rigor with modern national broadcasting, the visual identity embodies statecraft, scholastic integrity, and urgent civic clarity.

The aesthetic philosophy fuses **Broadsheet Editorial Classicism** with **Modern Digital Television Streamlining**:
- **Monochrome Architectural Grid:** Layouts are anchored by hairline keylines, columnar rhythm, and generous yet disciplined spacing reminiscent of leading global publications.
- **Academic & Civic Gravitas:** Imbued with the solemnity and cultural weight of academic journalism, pairing deep nocturnal navy with sharp, ink-well black and stark newsprint whites.
- **Broadcast Momentum:** Real-time data tickers, broadcast telemetry badges ("DIRETO", "EMISSÃO ESPECIAL"), and crisp multimedia framing reflect its dual identity as both an investigative newspaper and a live digital television network.

## Colors

The palette leverages contrast to honor traditional print ink while empowering digital broadcast elements:

- **Primary (`#0D1B2A`):** Deep oceanic navy representing sovereign authority, institutional stability, and journalistic permanence. Replaces standard flat black in headlines, navigation bars, and primary mastheads.
- **Secondary (`#0066FF`):** Electric Cobalt for interactive accents, hyperlinks, primary press actions, live broadcast markers, and focal indicators.
- **Tertiary (`#00D2FF`):** Radiant Cyan reserved for live status pulses, breaking news tickers, dynamic broadcast timestamps, and interactive focus states.
- **Neutral (`#111827`):** Pure Newsprint Charcoal. Delivers maximum legibility across long-form reading, sub-captions, and analytical copy against pristine white (`#FFFFFF`) and warm editorial paper backgrounds (`#F8F9FA`).
- **Semantic Signals:** Deep Crimson (`#C91414`) reserved strictly for "URGENTE" (Breaking) and live on-air signals; Rule Grey (`#E5E7EB` / `#D1D5DB`) strictly handles hair-thin column rules.

## Typography

The typographic hierarchy establishes clear distinction between editorial voice and broadcast information:

- **Editorial Serif (`Newsreader`):** Used exclusively for authoritative journalistic headlines, mastheads, analysis titles, and editorial pull quotes. It honors historical broadsheet printing with optical balance, deep ink traps, and rhythmic line lengths.
- **Systematic Sans (`Public Sans`):** Derived from classical government and institutional publications, this face delivers functional legibility across dense body copy, column text, datelines, financial/weather tickers, and broadcast overlays.
- **Typographic Rules:** 
  - Section tags, bylines, and broadcast labels are set in uppercase with slight tracking (`letter-spacing: 0.05em` to `0.08em`).
  - Headlines use tight, optical line-heights to maintain the physical broadsheet rhythm where headlines fit closely above lead paragraphs.

## Layout & Spacing

The layout is structured around an asymmetrical **12-Column Broadsheet Grid** designed for structured content distribution:

- **Grid Architecture:**
  - **Desktop (≥ 1280px):** 12 columns with `2rem` gutters and dynamic section margins (`margin-lg: 3rem`). Standard broadsheet configuration features a 7-column primary investigative story block, a 3-column secondary analytical block, and a 2-column live dispatch/ticker rail.
  - **Tablet (768px – 1279px):** 8 columns with `1.5rem` gutters, reflowing lead packages above secondary feeds.
  - **Mobile (< 768px):** 4 columns with `1rem` gutters and outer margins, transitioning multi-column layouts into a continuous vertical stream interspersed with hairline rules.
- **Rhythm & Rules:**
  - Spacing uses standard units of `0.25rem` (4px).
  - Editorial columns are separated by 1px solid hairline dividers (`#E5E7EB`) set within gutter midpoints, directly echoing traditional print separation.
  - Datelines, weather tickers, and market indicators sit in a compact horizontal bar separated by centered bullet dots (`•`) or vertical rules.

## Elevation & Depth

True to broadsheet tradition, elevation rejects dramatic drop shadows in favor of **structural line work, subtle tonal separation, and crisp focal contrasts**:

- **Hairline Framing:** Depth is established primarily through 1px horizontal and vertical rules (`#E5E7EB` in standard view, `#0D1B2A` for key primary section divides).
- **Surface Layering:**
  - **Canvas (Paper Level):** Pure `#FFFFFF` and off-white `#F9FAFB` for general content blocks.
  - **Broadcast Recess:** High-priority live TV, podcast streams, and interactive video frames adopt a recessed, deep `#0A192F` container with sharp contrast against white text.
- **Interactive Elevations:**
  - Dropdown navigation and context menus utilize minimal elevation: `box-shadow: 0 4px 16px -2px rgba(13, 27, 42, 0.08)` surrounded by an explicit 1px outline (`#E5E7EB`).
  - Cards and news containers remain completely flat until hovered, upon which images apply a subtle scale shift and headline color changes to secondary cobalt (`#0066FF`), without card drop shadows.

## Shapes

The design system employs **sharp, crisp geometry (`roundedness: 0`)**. 

- **Architectural Rectilinearity:** Buttons, inputs, editorial card containers, image frames, and structural rules have `0px` border-radius, projecting absolute journalistic authority, discipline, and archival permanence.
- **Broadcast Indicators:** The sole exception to strict rectangularity are live broadcast dot indicators and avatar badges which maintain pure circular geometry (`rounded-full`) to immediately communicate status and telemetry.

## Components

### Masthead & Editorial Header
- **Top Utility Rail:** Contains date, edition selector (e.g., "Edição Moçambique / Maputo"), local weather, and financial indicators separated by `space-sm`.
- **Primary Brand Plate:** Centered bold editorial masthead with classic double rules (a 2px solid dark line atop a 1px thin rule).
- **Navigation Bar:** Uppercase sans-serif topic links with active state signaled by an assertive underline (`border-b-2 border-[#0D1B2A]`).

### TV Broadcast & Live Badges
- **Status Pills:** Square-edged badges with high contrast.
  - **Live TV ("DIRETO"):** Background `#C91414`, text white, uppercase bold with a pulsating tertiary (`#00D2FF`) circular beacon.
  - **Exclusive / Análise:** Background `#0D1B2A`, text white, uppercase tracking.

### Buttons & Interactive Controls
- **Primary Action (Subscription / Live Watch):** Flat solid `#0D1B2A` background, white text, 0px corner radius, transitioning to secondary `#0066FF` on hover.
- **Secondary Action:** Transparent background with a 1px solid `#0D1B2A` stroke and sharp rectangular footprint.
- **Text Action:** Sans-serif medium with inline chevron and secondary blue hover states.

### Editorial Cards
- **Lead Hero Story:** Large photographic window, zero border radius, adjacent to high-contrast `Newsreader` headline, italicized subdeck, author avatar, and uppercase category kicker (`space-xs` above title).
- **Columnist & Opinion Module:** Framed with thin top and bottom border rules, featuring centered author portraiture, quote italicization, and distinct editorial signatures.
- **Media Cards:** Overlay video duration pill in the bottom corner of image assets with play glyph indicator and high-contrast dark overlay gradient.

### Input Fields & Search
- **Search Bar:** Minimalist input with a single bottom border or razor-thin outline (`#D1D5DB`), sans-serif placeholder copy, and sharp submit trigger. Focus switches border color directly to secondary cobalt (`#0066FF`).