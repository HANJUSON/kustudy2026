---
version: alpha
name: Korea-University-design-analysis
description: A crimson-anchored institutional interface that reads like an academic crest rendered in web form. KU Crimson (#8B0029, PANTONE 202C) carries every brand moment — headers, section titles, CTAs — paired with the heraldic Old Gold (#B49B57) that fills the signature tiger-crest shield, over a calm white-and-warm-gray canvas. Photography of granite campus architecture supplies gravitas; UI chrome stays rectangular and quiet. Dense mega-menu navigation, card-grid news surfaces, and a deep multi-column footer follow the Korean university portal grammar, but with the crimson-and-gold crest palette and a custom display typeface (고려대학교체) that no other institution can wear.

colors:
  primary: "#8B0029"
  primary-deep: "#6E0021"
  primary-bright: "#A30734"
  primary-print: "#862633"
  secondary-gold: "#B49B57"
  secondary-gold-deep: "#8C7539"
  secondary-gold-bright: "#C9B074"
  surface-gold: "#B49B57"
  surface-gold-soft: "#F3EEDF"
  on-gold: "#5C001B"
  ink: "#222222"
  body: "#333333"
  body-on-dark: "#ffffff"
  body-muted: "#666666"
  body-faint: "#999999"
  canvas: "#ffffff"
  canvas-warm: "#f7f5f3"
  canvas-gray: "#f4f4f4"
  surface-crimson: "#8B0029"
  surface-crimson-deep: "#5C001B"
  surface-charcoal: "#2b2b2b"
  surface-footer: "#1f1f1f"
  hairline: "#e0e0e0"
  hairline-strong: "#cccccc"
  divider-crimson: "#8B0029"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  hero-display:
    fontFamily: "KoreaUnivTypeface, 'Noto Serif KR', serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "KoreaUnivTypeface, 'Noto Serif KR', serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.5px
  section-title:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.5px
  card-title:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: -0.3px
  lead:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.3px
  body:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: -0.3px
  body-strong:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.7
    letterSpacing: -0.3px
  nav-link:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.3px
  nav-mega-link:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 2.2
    letterSpacing: -0.2px
  utility-link:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.2px
  caption:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.2px
  date-meta:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  button-label:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.2px
  fine-print:
    fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  motto-latin:
    fontFamily: "'Noto Serif KR', Georgia, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 1.5px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 10px
  pill: 9999px
  circle: 50%

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-label}"
    rounded: "{rounded.none}"
    padding: 14px 32px
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-label}"
    rounded: "{rounded.none}"
    padding: 14px 32px
  button-outline-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button-label}"
    rounded: "{rounded.none}"
    padding: 14px 32px
  button-more-circle:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: 40px
  utility-bar:
    backgroundColor: "{colors.surface-crimson-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.utility-link}"
    height: 36px
  global-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
  global-nav-mega:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-muted}"
    typography: "{typography.nav-mega-link}"
  hero-banner:
    backgroundColor: "{colors.surface-charcoal}"
    textColor: "{colors.on-dark}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.none}"
    height: 560px
  section-header:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.section-title}"
  news-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 0px
  notice-list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px 8px
  quick-link-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 24px 16px
  crimson-band:
    backgroundColor: "{colors.surface-crimson}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  stat-counter:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
  crest-lockup:
    backgroundColor: "{colors.surface-gold}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
  gold-divider:
    backgroundColor: "{colors.secondary-gold}"
    rounded: "{rounded.none}"
  honor-badge:
    backgroundColor: "{colors.surface-gold-soft}"
    textColor: "{colors.on-gold}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 6px 12px
  tab-pill:
    backgroundColor: "{colors.canvas-gray}"
    textColor: "{colors.body-muted}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: 10px 24px
  tab-pill-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: 10px 24px
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px
  breadcrumb-bar:
    backgroundColor: "{colors.canvas-gray}"
    textColor: "{colors.body-muted}"
    typography: "{typography.caption}"
    height: 48px
  sub-page-title-band:
    backgroundColor: "{colors.surface-crimson}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 56px
  footer:
    backgroundColor: "{colors.surface-footer}"
    textColor: "{colors.body-faint}"
    typography: "{typography.fine-print}"
    padding: 48px
---

## Overview

Korea University's web presence renders **a 120-year-old academic crest as an interface**. The single source of authority is KU Crimson (`{colors.primary}` — #8B0029, the digital expression of PANTONE 202C), and it appears exactly where institutional weight is needed: the utility bar, section title underlines, primary CTAs, the sub-page title band, and hover states. Everything else recedes into white, warm gray, and near-black photography of the university's signature granite Gothic architecture (본관, 중앙도서관).

The layout grammar is the Korean university portal pattern executed with restraint: a slim crimson utility strip on top, a tall white global nav with a mega-menu, a full-bleed photographic hero, then alternating content bands — news card grids, notice list rows, quick-link icon tiles, a crimson statement band — closing with a deep charcoal footer that holds the full family-site directory. Corners are square by default; the rectangle is the institutional shape. Rounding appears only on soft utility surfaces (quick-link tiles, tab pills) where approachability matters more than authority.

Typography is two-voice: the proprietary **고려대학교체 (Korea University Typeface)** speaks at display sizes — ceremonial, serif-inflected, unmistakably KU — while **Noto Sans KR** carries all body, navigation, and UI text. Korean text dominates; Latin appears in the motto (LIBERTAS · JUSTITIA · VERITAS) and proper nouns only.

**Key Characteristics:**
- Crimson is the primary brand and interactive signal (`{colors.primary}`); Old Gold (`{colors.secondary-gold}`) is the heraldic partner that fills the tiger-crest shield. No third hue exists outside photography.
- Crimson-and-gold crest palette: the shield reads gold-filled with crimson tiger, border, and lettering — the canonical KU lockup.
- Rectangular-first shape grammar: buttons, banners, and bands have 0 radius. The square corner reads as "official document."
- Two-voice typography: 고려대학교체 for ceremonial display, Noto Sans KR for everything functional.
- Full-bleed photographic heroes of granite campus architecture supply the atmosphere; no decorative gradients.
- Dense top navigation: 36px crimson utility bar + 80px white GNB with full-width mega-menu drawer.
- Section rhythm: white content band → warm-gray band → crimson statement band → white → charcoal footer.
- Crimson hairline underlines (3px) anchor section titles — the signature section-header device.
- Deep footer in near-black holding family sites, campus addresses (안암 / 세종), and legal links.

## Colors

> **Source basis:** korea.ac.kr homepage, 대학소개/UI 규정 page, sub-page templates (대학·대학원, 교육정보), sejong.korea.ac.kr. The official UI regulation fixes the crimson at PANTONE 202C / CMYK 9-100-64-48 / RGB 139-0-41.

### Brand & Accent
- **KU Crimson** (`{colors.primary}` — #8B0029): The official 교색 expressed in RGB per the university UI regulation (R139 G0 B41). All primary CTAs, links on hover, section title underlines, active tab fills, the sub-page title band, and the utility bar root. This is the only "click me" and "we are KU" signal.
- **Deep Crimson** (`{colors.primary-deep}` — #6E0021): Hover/pressed state for crimson fills, and gradient-free darkening for the utility bar (`{colors.surface-crimson-deep}` #5C001B sits one step deeper for the topmost strip).
- **Bright Crimson** (`{colors.primary-bright}` — #A30734): Used sparingly for hover on crimson text links over white, where the base crimson needs a perceptible lift.
- **Print Crimson** (`{colors.primary-print}` — #862633): The PANTONE 202C print-conversion hex. Not used on screen; documented so agents don't confuse the two values floating in brand materials.
### Secondary — Heraldic Gold
The crest is not crimson-on-white; its shield is filled with a muted heraldic gold, with the tiger, border, and "KOREA UNIVERSITY / 1905" lettering in crimson. This gold is the official partner of the crimson and must be reproduced wherever the full-color signature appears.
- **Old Gold** (`{colors.secondary-gold}` — #B49B57): The shield-fill of the standard tiger-crest signature. The canonical pairing color with crimson. Use for the crest background, gold rule-lines that accompany ceremonial lockups, and honor/achievement framing.
- **Deep Gold** (`{colors.secondary-gold-deep}` — #8C7539): Shadowed/engraved variant for gold-on-light contrast and pressed states of gold elements.
- **Bright Gold** (`{colors.secondary-gold-bright}` — #C9B074): Highlight variant for gold detailing on dark surfaces (e.g., crest reversed onto crimson or charcoal).
- **Gold Soft** (`{colors.surface-gold-soft}` — #F3EEDF): A pale gold tint for honor-badge backgrounds and subtle ceremonial panels where the full Old Gold would be too heavy.
- **On Gold** (`{colors.on-gold}` — #5C001B): Deep crimson used for text and the tiger mark *on* the gold shield — the crest's internal contrast pair.

> **Usage rule:** Gold is a *heraldic/identity* color, not a general UI accent. It belongs to the crest, ceremonial lockups, honor framing, and gold rule-lines. It is never a button fill, link color, or interactive state — those remain crimson. But it must never be dropped from the full-color signature, which is where earlier single-accent guidance failed.

### Surface
- **Pure White** (`{colors.canvas}` — #ffffff): Dominant canvas for content, cards, and the GNB.
- **Warm Gray** (`{colors.canvas-warm}` — #f7f5f3): The alternating soft band — slightly warm to harmonize with granite photography.
- **Neutral Gray** (`{colors.canvas-gray}` — #f4f4f4): Breadcrumb bars, inactive tab pills, table header rows.
- **Crimson Band** (`{colors.surface-crimson}` — #8B0029): Full-bleed statement sections (vision quotes, 발전기금 CTA band) and sub-page title bands.
- **Charcoal** (`{colors.surface-charcoal}` — #2b2b2b): Hero fallback color under photography and dark media frames.
- **Footer Black** (`{colors.surface-footer}` — #1f1f1f): The footer region only.

### Text
- **Ink** (`{colors.ink}` — #222222): Headlines and card titles on light surfaces.
- **Body** (`{colors.body}` — #333333): Paragraph text. One step softer than ink for long-form reading.
- **Body Muted** (`{colors.body-muted}` — #666666): Mega-menu sub-links, captions, secondary metadata.
- **Body Faint** (`{colors.body-faint}` — #999999): Footer text, disabled labels, date stamps on dark.
- **On Dark / On Primary** (#ffffff): All text over crimson, charcoal, and footer surfaces.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #e0e0e0): 1px borders on cards, list-row separators, input borders.
- **Hairline Strong** (`{colors.hairline-strong}` — #cccccc): Table grid lines and the GNB bottom border.
- **Crimson Divider** (`{colors.divider-crimson}` — #8B0029): The 3px section-title underline and the active state of tab underlines — the most recognizable micro-device in the system.

### Brand Gradient
**No decorative gradients.** Depth comes from campus photography (granite, ivy, seasonal trees) and from the crimson↔white↔charcoal band alternation. A single permitted exception: a top-to-bottom black scrim (`rgba(0,0,0,0.45) → transparent`) over hero photography to guarantee white headline legibility — this is a legibility overlay, not a decorative gradient.

## Typography

### Font Family
- **Display / Ceremonial**: `KoreaUnivTypeface, 'Noto Serif KR', serif` — 고려대학교체, the university's proprietary typeface (distributed free on the official 서체 page). It carries hero headlines, statement-band quotes, and the wordmark lockup. Fallback to Noto Serif KR preserves the serif-inflected gravitas.
- **Body / UI**: `'Noto Sans KR', 'Pretendard', sans-serif` — all functional text: navigation, body copy, buttons, cards, forms, footer.
- **Latin motto**: `'Noto Serif KR', Georgia, serif` with `+1.5px` tracking and small-caps treatment for "LIBERTAS JUSTITIA VERITAS".

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `hero-display` | 48px | 700 | 1.25 | -0.5px | Hero headline over photography (고려대학교체) |
| `display-lg` | 36px | 700 | 1.3 | -0.5px | Crimson-band statements, sub-page titles |
| `section-title` | 28px | 700 | 1.35 | -0.5px | Homepage section headers ("KU 소식", "공지사항") |
| `card-title` | 18px | 700 | 1.45 | -0.3px | News card and notice titles |
| `lead` | 20px | 400 | 1.6 | -0.3px | Section intros, 총장 인사말 lead paragraph |
| `body` | 16px | 400 | 1.7 | -0.3px | All paragraph text |
| `body-strong` | 16px | 700 | 1.7 | -0.3px | Inline emphasis, table headers |
| `nav-link` | 17px | 500 | 1.0 | -0.3px | GNB top-level items |
| `nav-mega-link` | 14px | 400 | 2.2 | -0.2px | Mega-menu column links (relaxed leading for scanability) |
| `utility-link` | 13px | 400 | 1.0 | -0.2px | Crimson utility bar links (KUPID, 교우회…) |
| `caption` | 14px | 400 | 1.5 | -0.2px | Quick-link labels, image captions |
| `date-meta` | 13px | 400 | 1.0 | 0 | Notice dates (YYYY.MM.DD format) |
| `button-label` | 15px | 500 | 1.0 | -0.2px | All button text |
| `fine-print` | 12px | 400 | 1.6 | 0 | Footer legal, copyright |
| `motto-latin` | 14px | 400 | 1.4 | +1.5px | Latin motto lockup only |

### Typography Notes
- **Korean body runs at 1.7 line-height.** Hangul needs more leading than Latin; never tighten body below 1.6.
- **Negative tracking (-0.3 ~ -0.5px) on all Korean sans text** — Noto Sans KR's default spacing runs loose; the slight tightening is the modern-Korean-web convention KU follows.
- **고려대학교체 appears only at ≥ 36px.** Below display sizes its calligraphic details muddy; the boundary between ceremonial and functional voices is the size, not the surface.
- **Weight ladder is 400 / 500 / 700.** Weight 500 is the navigation weight; 600 is absent. Headlines are always 700.
- **Dates use the dot-separated format** `2026.06.12` in `{typography.date-meta}` — never slashes, never hyphens.

### Note on Font Substitutes
고려대학교체 is downloadable from the official 서체 page but may not be embeddable in all contexts:
- **Noto Serif KR at weight 700** is the sanctioned fallback for display; add `letter-spacing: -0.5px` to approximate the lockup density.
- For body, **Pretendard** is a drop-in alternative to Noto Sans KR with nearly identical metrics; no adjustment needed.
- Never substitute a rounded or playful Korean face (e.g., Jua, Gaegu) anywhere in the system — the institutional voice does not bend.

## Layout

### Spacing System
- **Base unit:** 8px. Structural layout snaps to 8/16/24/32/48/80.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **Section vertical padding:** `{spacing.section}` (80px) on the homepage; sub-pages run a tighter 56px.
- **Card grid gutters:** 24px.
- **List-row vertical padding:** 16px with a 1px `{colors.hairline}` bottom border.

### Grid & Container
- **Max content width:** 1280px, centered, with 24px side margins below 1328px viewport.
- **Column patterns:** 3-up news card grid; 2-column notice/일정 split (list left, calendar right); 6-up quick-link icon tile row (collapsing to 3-up on mobile); 4-column footer link directory.
- **Hero:** full-bleed, content constrained to the 1280px container inside it.

### Whitespace Philosophy
KU's whitespace is institutional calm, not luxury air. Sections breathe at 80px but content inside is information-dense — a homepage section typically shows 3–6 items, never one. Density rises in lists (notices, 학사일정) and peaks in the footer's family-site directory. The one deliberately spacious moment is the crimson statement band: a single 36px line of 고려대학교체 floating in 80px of crimson on all sides.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Bands, hero, footer, crimson surfaces |
| Hairline | 1px `{colors.hairline}` border | News cards, inputs, table cells |
| Hover lift | `box-shadow: 0 8px 24px rgba(0,0,0,0.10)` + `translateY(-4px)` | News card hover only |
| Scrim | `linear-gradient(rgba(0,0,0,0.45), transparent)` | Hero photo legibility overlay |

**Shadow philosophy.** One shadow exists in the system, and it is a hover affordance on news cards — not a resting state. At rest, everything is flat or hairline-bordered. Authority is communicated through the crimson surface change, never through elevation.

### Decorative Depth
- **Campus photography** (본관 granite façade, 중앙광장, seasonal ivy) is the sole source of atmosphere.
- **Crimson band alternation** divides the page without borders.
- The mega-menu drawer drops with a 1px `{colors.hairline-strong}` bottom border and no shadow — it reads as the nav extending, not floating.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Buttons, banners, bands, inputs, cards' outer frame on sub-pages — the default institutional shape |
| `{rounded.xs}` | 4px | Inline thumbnails inside list rows |
| `{rounded.sm}` | 6px | Homepage news card frames (the one softened card) |
| `{rounded.md}` | 10px | Quick-link icon tiles |
| `{rounded.pill}` | 9999px | Category tab pills only |
| `{rounded.circle}` | 50% | Circular "+" more buttons, SNS icons, carousel controls |

### Photography Geometry
- **Hero imagery:** full-bleed 21:9 on desktop, art-directed to taller crops on mobile; granite architecture or aerial campus shots, always with the legibility scrim.
- **News card thumbnails:** 16:9 crops, `{rounded.sm}` top corners matching the card, no inner padding.
- **People photography** (총장, researchers): 3:4 portrait crops, square corners.
- No circular avatar crops anywhere — circles are reserved for control chips, not content.

## Components

### Top Navigation

**`utility-bar`** — The topmost strip. Background `{colors.surface-crimson-deep}` (#5C001B), height 36px, right-aligned links in `{typography.utility-link}` (13px) and `{colors.on-dark}`: 세종캠퍼스 · 의료원 · 교우회 · KUPID · 발전기금 · 로그인 · ENG. Links separated by 1px white-at-20%-alpha vertical hairlines. This strip is the first crimson the visitor sees.

**`global-nav`** — White GNB below the utility bar. Background `{colors.canvas}`, height 80px, bottom border 1px `{colors.hairline-strong}`. Left: KU crest + wordmark lockup (height 48px). Center-right: five top-level items (고대소개 · 입학안내 · 대학ㆍ대학원 · 교육정보 · 대학생활) in `{typography.nav-link}` (17px / 500). Hover: text shifts to `{colors.primary}` and a 3px `{colors.divider-crimson}` underline slides in at the nav's bottom edge. Far right: search icon + hamburger (전체메뉴).

**`global-nav-mega`** — Full-width drawer that opens on top-level hover. Background `{colors.canvas}`, bottom border 1px `{colors.hairline-strong}`, no shadow. Five columns mirroring the top-level items; column heads in `{typography.body-strong}` with a 2px crimson underline, sub-links in `{typography.nav-mega-link}` (14px / 2.2 line-height) and `{colors.body-muted}`, hover → `{colors.primary}`.

**`breadcrumb-bar`** — Sub-page strip below the title band. Background `{colors.canvas-gray}`, height 48px, home icon + `>` separators + current page in `{typography.caption}`, current crumb in `{colors.ink}` weight 700.

### Hero & Bands

**`hero-banner`** — Full-bleed photographic carousel, height 560px (desktop). Fallback `{colors.surface-charcoal}` under the image, top scrim for legibility. Headline in `{typography.hero-display}` (48px 고려대학교체) in `{colors.on-dark}`, optional sub-line in `{typography.lead}`, one `{component.button-outline-on-dark}` CTA. Carousel controls: `{component.button-more-circle}`-style 40px circular prev/next chips at 40% white alpha, plus dot indicators bottom-center (active dot = crimson).

**`crimson-band`** — Full-bleed statement section. Background `{colors.surface-crimson}`, vertical padding `{spacing.section}` (80px), centered `{typography.display-lg}` quote in `{colors.on-dark}` set in 고려대학교체, with the Latin motto in `{typography.motto-latin}` above it at 60% white alpha. Optional single `{component.button-outline-on-dark}` CTA below. Used once per page maximum.

**`sub-page-title-band`** — Every sub-page opens with this. Background `{colors.surface-crimson}` (optionally with a darkened campus photo at 30% opacity behind), padding 56px vertical, page title in `{typography.display-lg}` `{colors.on-dark}` left-aligned within the 1280px container.

### Buttons

**`button-primary`** — Rectangular crimson action. Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.button-label}` (15px / 500), rounded `{rounded.none}` — the square corner is deliberate — padding 14px × 32px. Hover: `{component.button-primary-hover}` darkens to `{colors.primary-deep}`. No scale transforms; state changes are color-only.

**`button-outline`** — Secondary action on light surfaces. Transparent fill, 1px solid `{colors.primary}` border, text `{colors.primary}`, same geometry as primary. Hover: fills with `{colors.primary}`, text inverts to white.

**`button-outline-on-dark`** — The hero/crimson-band CTA. Transparent fill, 1px solid `{colors.on-dark}` border, white text. Hover: fills white, text becomes `{colors.primary}`.

**`button-more-circle`** — The "+" more button beside section titles. 40px circle, 1px `{colors.hairline-strong}` border, centered + glyph in `{colors.ink}`. Hover: border and glyph turn `{colors.primary}` with a 90° glyph rotation.

**`tab-pill` / `tab-pill-active`** — Category filters on news/notice sections. Inactive: `{colors.canvas-gray}` fill, `{colors.body-muted}` text, `{rounded.pill}`. Active: `{colors.primary}` fill, white text. The pill is the lone rounded interactive element — it signals "filter", not "action".

### Cards & Containers

**`section-header`** — The homepage section title device: `{typography.section-title}` (28px / 700) in `{colors.ink}`, with a 3px × 48px `{colors.divider-crimson}` underline bar flush-left beneath it, and a `{component.button-more-circle}` flush-right. This crimson underline is the most repeated brand micro-mark on the site.

**`news-card`** — 3-up grid card. Background `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.sm}` (6px). Top: 16:9 thumbnail. Body padding `{spacing.lg}` (24px): category label in `{typography.date-meta}` `{colors.primary}` → title in `{typography.card-title}` (2-line clamp) → date in `{typography.date-meta}` `{colors.body-faint}`. Hover: the system's single shadow + 4px lift; title color → `{colors.primary}`.

**`notice-list-row`** — Text-dense list row for 공지사항/학사일정. Padding 16px × 8px, 1px `{colors.hairline}` bottom border, square corners. Left: optional category chip (crimson outline, `{rounded.xs}`). Center: title in `{typography.body}` single-line ellipsis. Right: date in `{typography.date-meta}`. Hover: title → `{colors.primary}` with underline; row background stays white.

**`quick-link-tile`** — 6-up icon shortcut grid (수강신청, 도서관, 포털, 학사일정, 셔틀버스, 증명서발급). Background `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.md}` (10px), padding 24px × 16px, centered stack: 40px line icon in `{colors.primary}` → label in `{typography.caption}` `{colors.ink}`. Hover: border → `{colors.primary}`, slight icon bounce.

**`stat-counter`** — Achievement numbers band (QS 순위, 재학생 수, 교원 수). Number in `{typography.display-lg}` `{colors.primary}` with count-up animation, label below in `{typography.caption}` `{colors.body-muted}`. Sits on `{colors.canvas-warm}`.

### Identity & Crest

**`crest-lockup`** — The full-color tiger-crest signature. Shield filled with `{colors.surface-gold}` (Old Gold #B49B57); tiger illustration, shield border, and "KOREA UNIVERSITY / 1905" lettering in `{colors.primary}` (crimson) — or, where the crest sits on a crimson/charcoal surface, the gold stays gold and the internal marks reverse to `{colors.on-dark}`. This lockup is fixed artwork: never recolor the shield to crimson-only, never flatten the gold. It is the single place gold and crimson always appear together.

**`gold-divider`** — A thin Old Gold rule-line (`{colors.secondary-gold}`, 2px) used only beside ceremonial lockups — the crest, the motto, anniversary headings. It is the gold counterpart to the crimson `{component.section-header}` underline, and it is reserved for identity contexts, never general section titles.

**`honor-badge`** — Small pill/tag for awards, rankings, and 명예 designations (e.g., "QS 세계 OO위", "교육부 선정"). Background `{colors.surface-gold-soft}` (#F3EEDF), text `{colors.on-gold}` (deep crimson) in `{typography.caption}`, rounded `{rounded.xs}`, padding 6px × 12px. The soft-gold field signals honor without competing with crimson CTAs.

### Inputs & Forms

**`search-input`** — Site search (header drawer and 통합검색 page). Background `{colors.canvas}`, 1px `{colors.hairline-strong}` border that turns 2px `{colors.primary}` on focus, rounded `{rounded.none}`, padding 12px × 16px, height 48px, trailing crimson search-glyph button. Square corners — the search box is a form field, not a pill.

Validation: error state swaps the border to `{colors.primary-bright}` with a `{typography.caption}` message below; KU reuses the crimson family for errors rather than introducing a separate red.

### Footer

**`footer`** — Background `{colors.surface-footer}` (#1f1f1f). Top region: 4-column family-site/quick-link directory, column heads in `{typography.body-strong}` `{colors.on-dark}`, links in `{typography.caption}` `{colors.body-faint}`, hover → white. Middle: white KU crest lockup + both campus addresses (서울 안암 / 세종) in `{typography.fine-print}`. Bottom legal row: 개인정보처리방침 (rendered in `{colors.on-dark}` weight 700 per Korean web convention) · 이메일무단수집거부 · Copyright, in `{typography.fine-print}` `{colors.body-faint}`. Vertical padding 48px. SNS circle icons (`{rounded.circle}`, 36px, 1px gray border) top-right.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (KU Crimson #8B0029) for every brand and interactive signal — CTAs, hovers, section underlines, active states.
- Reproduce the crest with its Old Gold shield (`{colors.secondary-gold}` #B49B57) intact — the full-color signature is always gold shield + crimson tiger/lettering, never crimson-only.
- Use gold (`{colors.secondary-gold}` / `{colors.surface-gold-soft}`) for identity and honor contexts: the crest, ceremonial gold rule-lines, ranking/award badges.
- Anchor every section title with the 3px crimson underline bar (`{component.section-header}`); it's the system's signature micro-mark.
- Keep buttons, inputs, and bands at `{rounded.none}` — the square corner is the institutional voice.
- Set ceremonial display text (hero, crimson band, page titles) in 고려대학교체 at ≥ 36px; everything functional stays Noto Sans KR.
- Run Korean body at 16px / 1.7 with -0.3px tracking — the long-form leading is non-negotiable for Hangul.
- Alternate white → warm-gray → crimson bands for section rhythm; the surface change is the divider.
- Use the dot date format (`2026.06.12`) everywhere dates appear.
- Reserve the hover shadow + lift exclusively for `{component.news-card}`.

### Don't
- Don't introduce a *third* color beyond the crimson-and-gold crest palette — no blues for links, no greens for success. The crimson family covers all interactive states (use `{colors.primary-bright}` for errors).
- Don't use gold as an interactive color — no gold buttons, links, or active states. Gold is heraldic/identity only; interaction is always crimson.
- Don't drop the gold from the full-color crest or recolor the shield to crimson — that flattening is exactly the error to avoid.
- Don't round buttons or inputs; `{rounded.pill}` belongs to filter tabs only and `{rounded.circle}` to control chips only.
- Don't set 고려대학교체 below 36px or use it for body/UI text.
- Don't apply resting shadows to any element; elevation at rest is always flat or hairline.
- Don't use decorative gradients; the only permitted gradient is the hero legibility scrim.
- Don't substitute playful Korean fonts; fallback is Noto Serif KR (display) / Pretendard (body) only.
- Don't confuse `{colors.primary}` (#8B0029, screen) with `{colors.primary-print}` (#862633, PANTONE conversion) — screen work always uses #8B0029.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Phone | ≤ 640px | Single column; hero drops to 360px height and 28px headline; quick-links 3-up; GNB collapses to hamburger |
| Tablet portrait | 641–1023px | News grid 2-up; mega-menu replaced by full-screen drawer; utility bar links collapse to icons |
| Small desktop | 1024–1327px | Full layout with 24px side margins; news grid 3-up |
| Desktop | ≥ 1328px | Content locks at 1280px; margins absorb extra width |

### Touch Targets
- Minimum 44 × 44px on all interactive elements.
- `{component.button-primary}` lands at ~44 × 110px.
- Utility bar links fall below target size on desktop (13px text in a 36px bar) — at ≤ 1023px they convert to a 44px-tall icon row inside the mobile drawer.

### Collapsing Strategy
- **GNB**: full link row → crest + hamburger at ≤ 1023px; mega-menu becomes an accordion inside a full-screen drawer with crimson section heads.
- **News grid**: 3-up → 2-up (1023px) → 1-up (640px).
- **Quick-link tiles**: 6-up → 3-up two rows (640px).
- **Footer directory**: 4-column → 2-column (1023px) → accordion (640px).
- **Hero typography**: 48px → 36px (1023px) → 28px (640px); 고려대학교체 is retained at all sizes.

### Image Behavior
- Hero uses art-directed `srcset` crops; mobile crops re-frame to the building's vertical axis.
- News thumbnails hold 16:9 across breakpoints; only scale changes.
- Lazy-loading default; above-fold hero eager.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.crimson-band}`, `{component.notice-list-row}`).
2. Variants live as separate entries in `components:` (`-hover`, `-active`, `-on-dark`).
3. Use `{token.refs}` everywhere — never inline hex. The crimson in particular must always resolve from `{colors.primary}`.
4. Hover states are color-only (crimson shifts, fills inverting); the single exception is the news-card lift. No scale transforms exist in this system.
5. The voice boundary is unbreakable: 고려대학교체 ≥ 36px ceremonial, Noto Sans KR for everything else.
6. When in doubt about emphasis: add the crimson underline bar or switch the band surface — never add chrome, shadows, or a new color.
7. Square corners are the default; justify any radius against the table in Shapes before using it.

## Known Gaps

- The official UI regulation specifies PANTONE 202C with RGB 139-0-41 (#8B0029), but #862633 also circulates in brand materials as the PANTONE print conversion; this document fixes #8B0029 as the screen value and #862633 as print-only.
- 고려대학교체's full weight range and licensing scope for web embedding (woff2 self-hosting) were not verified; the Noto Serif KR fallback is documented as the safe path.
- Form validation patterns beyond the search input were not surfaced; KUPID portal (login-walled) uses a separate legacy design system not covered here.
- Dark-mode variants do not exist on the analyzed surfaces; the system is light-only.
- Sejong campus (sejong.korea.ac.kr) shares the token system but runs a different homepage layout; this document describes the Anam main-site grammar.
- **Old Gold hex is approximate.** KU's official identity regulation specifies only the crimson (PANTONE 202C); the shield's heraldic gold is not published as a standalone color spec. `{colors.secondary-gold}` (#B49B57) is sampled from the standard tiger-crest signature and should be treated as a close working value, not an official token. For exact reproduction, pull the gold directly from the official signature file on the 로고·시그니처·엠블럼 page, or request the value from 대외협력처 커뮤니케이션팀.
- The 120주년 anniversary emblem introduces additional gold/supplementary graphics governed by a separate ceremonial guideline; the gold tokens here describe the standard signature, not the anniversary artwork.
