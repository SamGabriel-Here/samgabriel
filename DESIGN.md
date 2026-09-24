---
name: Release Plates
description: The portfolio as a telescope image release. Real NASA/ESA/Webb imagery full-bleed on near-black, paper-white type, captions and credits in small mono, the six Webb filter colours kept for the one real filter legend.
colors:
  void: "#05070d"
  void-2: "#0b0e17"
  paper: "#f4f1ea"
  soft: "#d8d6d0"
  dim: "#a9aab3"
  rule: "rgba(244, 241, 234, 0.18)"
  rule-strong: "rgba(244, 241, 234, 0.4)"
  f090: "#4d86ff"
  f187: "#2fc6b8"
  f200: "#79d66b"
  f335: "#f2c14e"
  f444: "#f08a3c"
  f470: "#e3563a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 11.5rem)"
    fontWeight: 300
    lineHeight: 0.86
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6.5rem)"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 108"
  index-name:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(20px, 2vw, 26px)"
    fontWeight: 500
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.3vw, 18px)"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(20px, 4vw, 44px)"
  section: "clamp(96px, 14vh, 160px)"
  release: "clamp(56px, 8vh, 88px)"
  target: "44px"
components:
  button-solid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.void}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-solid-hover:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.void}"
  text-link:
    textColor: "{colors.paper}"
    padding: "0 12px"
    height: "44px"
  nav-link:
    textColor: "{colors.soft}"
    padding: "0 12px"
    height: "44px"
  nav-link-active:
    textColor: "{colors.paper}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  playback:
    backgroundColor: "rgba(5, 7, 13, 0.85)"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "44px"
  input:
    backgroundColor: "rgba(5, 7, 13, 0.7)"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  frame:
    backgroundColor: "{colors.void-2}"
    rounded: "{rounded.none}"
---

# Design System: Release Plates

## Overview

**Creative North Star: "The Image Release"**

Every surface reads as a published telescope image release: a plate, a title, a caption line, the instruments used, and a credit. The imagery is real NASA/ESA/Webb material, shown full-bleed or framed, and it keeps its own colour. The interface around it is near-black ground and paper-white type, and it steps back so the image and the work lead. Product truth lives in PRODUCT.md; this file covers only the visual system.

Density is low. Titles are wide and light, and the grid is set on thin rules, never on cards. Captions and credits speak in small uppercase mono, the fine print of a release. Structure comes from registration ticks, hairline rules and a compass rose. There is no glow, no card chrome, no rounding. Colour belongs to the imagery. The one exception is the hero legend, where the six Webb NIRCam filter colours record the real filters of the Cosmic Cliffs release.

Motion works like developing a plate. The hero starts under-exposed and comes up to full exposure while each legend filter adds its light. Release frames come out of the dark as they scroll into view. Every movement stops for reduced motion, and the page stays complete without it.

**Key Characteristics:**
- Real, credited space imagery; the interface never adds colour to it.
- Paper-on-void, one accent (paper) for every interactive and emphatic role.
- Archivo on the width axis: wide and light for titles, normal width for reading.
- Martian Mono for captions, credits, legends, figures and transport.
- Square corners everywhere; frames marked by corner registration ticks.
- Caption lines sit below their titles, never above.

## Colors

A near-monochrome paper-on-void system. The six filter colours are data inside one legend and nothing else.

### Primary
- **Plate Paper** (paper): the accent and main type colour. Headlines, body emphasis, filled buttons, hover fills, selection background, focus ring, the status dot, figures, registration ticks, the compass rose. On void it measures 17.9:1.

### Neutral
- **Deep Void** (void): the page ground, the header's solid state (at 92% alpha), and the scrims under type on imagery.
- **Frame Void** (void-2): the resting fill inside a frame before its media paints.
- **Soft Paper** (soft): running text, ledes, secondary index columns, nav links at rest. 12.4:1 on void.
- **Dim Paper** (dim): caption labels, index numbers, placeholders, credits, hollow legend marks. 7.6:1 on void.
- **Hairline** (rule): section rules, index and list dividers, figure borders.
- **Strong Hairline** (rule-strong): edges of interactive things (outline CTA, inputs, playback, sent notice), link underlines at rest, the scrollbar thumb. Holds 3:1 or better.

### Tertiary: Webb NIRCam filters (legend only)
- **F090W Blue** (f090), **F187N Teal** (f187), **F200W Green** (f200), **F335M Gold** (f335), **F444W Orange** (f444), **F470N Red** (f470): ordered from short to long wavelength. They appear as 9px square chips in the hero's Cosmic Cliffs filter legend, beside the release's real filter names and credit.

### Named Rules
**The Filters Are Data Rule.** The six filter colours appear only as colour in a filter legend whose filters and credit are the real ones for the imagery shown. Everywhere else (stack chips, toolkit rows) a legend mark is a hollow 9px square with a 1px dim border. This is load-bearing. Do not undo it.

**The One Accent Rule.** Paper is the only accent. Selection, focus ring, status, figures, hover fills and ticks are all paper. No hue ever marks interaction.

**The Floor Not Tint Rule.** Imagery keeps its own colour. Type on imagery sits on a void gradient floor (hero: void 94% to 60% to clear over the bottom 62%, plus a 55% top floor; contact: a horizontal void 97% to 55% floor). Never recolour or duotone the imagery.

## Typography

**Display Font:** Archivo, variable with the wdth axis (fallback system-ui, sans-serif)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Martian Mono (fallback ui-monospace, monospace)

**Character:** A wide, light grotesk for titles, like the lettering on a release, paired with a technical mono for the small print. Width marks rank: 112% for the name, section heads, figures and interlude titles; 108% for release and index names; normal width for reading.

### Hierarchy
- **Display** (300, clamp(3.5rem, 11vw, 11.5rem), 0.86, wdth 112): the name on the opening plate only. It never breaks inside a word (`word-break: keep-all`).
- **Headline** (300, clamp(3rem, 7vw, 6.5rem), 0.9, wdth 112): section titles (Releases, About, Contact).
- **Title** (400, clamp(2.5rem, 4.4vw, 4rem), 0.95, wdth 108): each release's name. Interlude titles use weight 300 at wdth 112, clamp(2rem, 4.5vw, 4rem).
- **Figure** (300, clamp(2.5rem, 4vw, 3.5rem), 1, wdth 112): the single proof number in a release's figure block. The unit sign (×) is set in Martian Mono at 0.72em, and the explanatory line runs in 14px mono.
- **Index name** (500, clamp(20px, 2vw, 26px), wdth 108): project names in the release index.
- **Body** (400, 16px, 1.65, max 50ch): release captions in soft. Ledes are clamp(16px, 1.3vw, 18px) at 1.55, max 46ch; section-head copy is 17px at 1.6.
- **Action** (600, 15px; 14px in nav and text links): button and link labels.
- **Label** (Martian Mono 400, 12px, 0.05em, uppercase, dim): caption lines, credits, legend headers, field labels, dates, meta rows.

### Named Rules
**The Caption Below Rule.** No kicker or eyebrow sits above a heading. Release lines ("Release 01 · type · date") and interlude source and credit lines sit below their titles, the way a release caption follows its plate title. This is load-bearing.

**The Literal Action Rule.** Headings may carry the release metaphor ("Releases"). Action labels stay literal: Contact, See the work, Live demo ↗, Source ↗, Send message, Pause/Play.

**The Credit Integrity Rule.** Credited personal names use non-breaking spaces ("F.&nbsp;Summers", "R. Hurt") so an initial never wraps away from its surname.

## Layout

A single 90rem column (`wrap`) with a fluid gutter (clamp(20px, 4vw, 44px)). Sections breathe at clamp(96px, 14vh, 160px) of block padding, and individual releases at clamp(56px, 8vh, 88px), each closed by a hairline rule.

- **Opening plate:** 100svh, full-bleed media. The meta row sits 84px from the top, the compass rose sits top-right, and the name, role, actions and legend sit bottom-aligned. The name spans the width. Below it a two-column foot places role and actions left and the right-aligned legend right. At 899px and below this becomes one column with the legend left-aligned in a 3-column chip grid.
- **Section head:** the title on the left, a 32rem lede on the right, bottom-aligned, closed by a hairline. It stacks at 767px and below.
- **Release index:** a ruled list of number, name, type and links (3.5rem / 1.2fr / 1fr / 15rem). It collapses to number plus a stacked column at 767px and below. Everything a skimmer needs sits in this one block.
- **Release plate:** frame and caption at 7fr/5fr. Alternate releases flip the frame to the right. It stacks at 899px and below, and the frame always comes first.
- **Interludes:** full-bleed cosmos plates between chapters (min(88vh, 60rem), min 460px), with a caption bottom-left. Paired interludes sit side by side with a 2px seam and stack at 767px and below.
- **About:** two columns (Toolkit as a definition list, Record as an ordered list), both ruled at the top of each row.
- **Contact:** full-bleed media under a horizontal floor, with copy and channels left and a 30rem form right.
- **Footer:** a credit block with name, clock and year left and the full media credits right.

Scroll padding is 72px to clear the 64px fixed header.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth comes from the imagery itself and from the void gradient floors that keep type readable over it. The header is clear over the opening plate and turns solid (void at 92% with a hairline bottom border) once the page scrolls past 60% of the viewport, when the plate's type is behind it.

### Named Rules
**The No Glow Rule.** No box-shadow, text-shadow, blur halo or glow. Separation comes from rules, ticks and void floors.

## Shapes

Every corner is square (0 radius), including inputs, which reset the platform rounding. The single round form is the 8px status dot. A frame is marked by two 22px L-shaped corner registration ticks in 1px paper, set 9px outside its top-left and bottom-right corners. Legend marks are 9px squares. The compass rose (N and E arms with arrowheads, mono letters) and the favicon's tick pair are drawn from the same 1–2px paper line.

**The Registration Tick Rule.** Framed media carries corner ticks outside its box, and nothing may clip them. The develop reveal ends at `clip-path: inset(-16px)` so the ticks stay visible. This is load-bearing.

## Components

### Buttons
- **Shape:** square (0), 48px tall, 22px inline padding, 1px paper border.
- **Solid:** a paper fill with void text. This is the primary action (Contact, Send message). On hover it inverts to transparent with paper text.
- **Outline:** transparent with paper text. On hover it fills with paper and the text turns void.
- **Focus:** a 2px paper outline at a 3px offset, used by every focusable element.
- **Transitions:** background and colour over 0.2s.

### Text links
Links are inline-flex, at least 44px tall with 12px inline padding, 600 weight at 14px. They are underlined at a 5px offset in rule-strong, and the underline turns paper on hover. External links carry a non-breaking "&nbsp;↗" that is hidden from assistive tech, plus a screen-reader "(opens in a new tab)". Where link rows line up with text, the row takes a -12px margin so the label aligns to the column edge.

### Chips (legend marks)
Mono 12px entries, each with a 9px square mark. In the hero filter legend the mark is filled with its filter colour. Everywhere else it is hollow (1px dim border, no fill). Stack chips sit under a "Built with" label.

### Cards / Containers
There are no cards. The recurring container is the **frame**: 16:10, a void-2 resting fill, object-fit cover, with corner registration ticks. Lists and rows are separated by hairline rules only.

### Inputs / Fields
Fields have a mono uppercase label above, a void 70% fill, a 1px rule-strong border, square corners, 12px 14px padding, 16px text (which keeps iOS from zooming) and dim placeholders. On focus the border turns paper in place of the outline. The textarea is at least 140px tall and resizes vertically. After submit, a notice (a rule-strong box in soft text) receives focus through a polite live region and offers the address to copy.

### Navigation
The header is fixed and 64px tall. The name sits left at 500 weight, wdth 112. Section links are soft 14px and turn paper on hover or when `aria-current`. The Contact CTA is outlined in rule-strong and fills with paper on hover. At 639px and below, only Work and Contact remain.

### Status
"Open to work" is set 600 at 15px in paper with an 8px paper dot. There is no colour status light.

### Loop and Playback (signature)
Every moving image is a Loop. The WebP poster carries the frame, and the MP4 loads only when three conditions hold: the loop is on screen (20% visible, or at page load for the hero), motion is welcome, and the connection is not data-saver, 2G or 3G. Off screen, a loop pauses, and a user's pause is remembered. Every loop that runs beside text has a Pause/Play control: mono 12px, at least 44px tall, a void 85% fill and a rule-strong border that turns paper on hover. It sits bottom-right of its frame. The hero's control is portaled into the legend credit block, where transport controls belong. These gates and the control are load-bearing (WCAG 2.2.2).

### Figure block
A single proof number per release, and only where one exists. It sits between two hairlines: a large light number, then one mono line that says what it measures.

### Opening exposure and develop
The hero media runs `expose` (brightness 0.25 and saturation 0.2 up to 1) over 2.4s. The legend chips come on in sequence, 0.32s apart. Hero type rises 28px with staggered delays. Releases below the fold develop from `inset(8%)` and brightness 0.3 to `inset(-16px)` over 1.1–1.4s on `cubic-bezier(0.16, 1, 0.3, 1)`. They are visible by default, and the develop class is added only when script runs and motion is welcome. Reduced motion removes all of this.

## Do's and Don'ts

### Do:
- **Do** use only real NASA/ESA/Webb imagery and credit it on the page, with credited names bound by non-breaking spaces.
- **Do** keep the six filter colours inside a filter legend whose filters and credit are real. Use hollow dim squares everywhere else.
- **Do** use paper as the one accent for selection, focus, status, figures, fills and ticks.
- **Do** put caption lines below their titles.
- **Do** give every framed image corner registration ticks, and keep reveals from clipping them (end at `inset(-16px)`).
- **Do** give every loop beside text a Pause/Play control. Load video only on screen, with motion welcome and on a capable connection, and let the WebP poster carry the frame otherwise.
- **Do** keep controls at least 44px tall and action labels literal.
- **Do** keep the name whole: no breaking inside a word.

### Don't:
- **Don't** put a kicker or eyebrow above any heading.
- **Don't** use a filter colour as a UI accent, category colour, hover state or decoration.
- **Don't** use cards, rounded corners, shadows or glow.
- **Don't** tint, duotone or recolour the imagery. Put a void floor under the type instead.
- **Don't** use a centred-planet space hero or a dark card grid.
- **Don't** give an action a metaphorical label ("Transmit", "Launch", "Observe").
