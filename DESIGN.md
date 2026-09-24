---
name: Release Plates
description: The portfolio as a quiet telescope image release. Real NASA/ESA/Webb imagery on near-black, paper-white type, sentence-case captions, and every credit gathered at the end.
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
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  interlude:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  subhead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  index-name:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(20px, 2vw, 24px)"
    fontWeight: 400
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.3vw, 18px)"
    fontWeight: 400
    lineHeight: 1.55
  section-copy:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  secondary:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
  action:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  action-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  meta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  stack:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
  mono-sm:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
  credit-heading:
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
  text-link:
    textColor: "{colors.paper}"
    typography: "{typography.action-sm}"
    padding: "0 12px"
    height: "44px"
  nav-link:
    textColor: "{colors.soft}"
    typography: "{typography.nav}"
    padding: "0 12px"
    height: "44px"
  nav-link-active:
    textColor: "{colors.paper}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.action-sm}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  nav-cta-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.void}"
  playback:
    backgroundColor: "rgba(5, 7, 13, 0.85)"
    textColor: "{colors.paper}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "44px"
  playback-hero:
    backgroundColor: "transparent"
    textColor: "{colors.soft}"
    typography: "{typography.mono-sm}"
    padding: "0 12px"
    height: "44px"
  input:
    backgroundColor: "rgba(5, 7, 13, 0.7)"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  index-row:
    textColor: "{colors.paper}"
    typography: "{typography.index-name}"
    padding: "14px 0"
  frame:
    backgroundColor: "{colors.void-2}"
    rounded: "{rounded.none}"
---

# Design System: Release Plates

## Overview

**Creative North Star: "The Image Release"**

Each project is published the way a telescope image is released: a plate, a title, a caption, the tools used, and credit at the end. The imagery is real NASA/ESA/Webb material, shown full-bleed or framed, and it keeps its own colour. The interface around it is a near-black ground with paper-white type, and it stays quiet so the image and the work lead. Product truth lives in PRODUCT.md; this file covers only the visual system.

The system is quiet by the owner's decision. The opening plate holds only the image, the name, one role line, a status and two ways in. Captions are plain sentence case, set small and dim. Credits, filter data, coordinates and the clock all live in the footer. The page has two moving images, the opening loop and one interlude. Structure comes from registration ticks and thin rules, never from cards, glow or rounding.

Motion is gentle and works like developing a plate. The opening image comes up from under-exposure, the hero type rises a short distance, and release frames open slightly as they scroll into view. Every movement stops for reduced motion, and the page stays complete without it.

**Key Characteristics:**
- Real, credited space imagery; the interface never adds colour to it.
- Paper-on-void, one accent (paper) for every interactive and emphatic role.
- Archivo on the width axis: wide and light for titles, normal width for reading.
- Sentence-case captions in dim text; mono only for stack lines, index numbers, figures and transport.
- Square corners everywhere; frames marked by corner registration ticks.
- Credits and extras gathered in the footer.

## Colors

A near-monochrome paper-on-void system. The six filter colours are data in a single credit legend and appear nowhere else.

### Primary
- **Plate Paper** (paper): the accent and main type colour. Headlines, filled buttons, hover fills, selection background, focus ring, the status dot, figures, registration ticks. On void it measures 17.9:1.

### Neutral
- **Deep Void** (void): the page ground, the header's solid state (at 92% alpha), and the floors under type on imagery.
- **Frame Void** (void-2): the resting fill inside a frame before its media paints.
- **Soft Paper** (soft): running text, ledes, section copy, field labels, the form note, nav links at rest, the hero's pause label, interlude titles. 12.4:1 on void.
- **Dim Paper** (dim): caption lines (release meta, stack line), index numbers and types, toolkit terms, record dates, placeholders, footer text. 7.6:1 on void.
- **Hairline** (rule): section rules, index and list dividers, figure borders.
- **Strong Hairline** (rule-strong): edges of interactive things (nav CTA, inputs, playback, sent notice), link underlines at rest, index rows on hover, the scrollbar thumb. Holds 3:1 or better.

### Tertiary: Webb NIRCam filters (credit legend only)
- **F090W Blue** (f090), **F187N Teal** (f187), **F200W Green** (f200), **F335M Gold** (f335), **F444W Orange** (f444), **F470N Red** (f470): ordered from short to long wavelength. They appear only as 9px square chips in the footer, under "Image credits", beside the real filter names of the Cosmic Cliffs release credited there.

### Named Rules
**The Filters Are Data Rule.** The six filter colours appear only as chips in a credit legend whose filters and credit are the real ones for the imagery shown. Today that is the footer's NIRCam legend. They never mark a project, a stack, a state or a decoration, and no other legend marks exist on the page. This is load-bearing.

**The One Accent Rule.** Paper is the only accent. Selection, focus ring, status, figures, hover fills and ticks are all paper. No hue ever marks interaction.

**The Floor Not Tint Rule.** Imagery keeps its own colour. Type on imagery sits on a void gradient floor (hero: void 94% to 60% to clear over the bottom 62%, plus a 55% top floor; interlude: void 90% to clear over the bottom 40%; contact: a horizontal void 97% to 55% floor). Never recolour or duotone the imagery.

## Typography

**Display Font:** Archivo, variable with the wdth axis (fallback system-ui, sans-serif)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Martian Mono (fallback ui-monospace, monospace)

**Character:** A wide, light grotesk for titles, like the lettering on a release, with plain reading text beneath it. Width marks rank: 112% for the name, section heads, figures and the interlude title; 108% for release names, index names and About subheads; normal width for reading. The mono is kept for the technical small print.

### Hierarchy
- **Display** (300, clamp(3.5rem, 11vw, 11.5rem), 0.86, wdth 112): the name on the opening plate only. It never breaks inside a word (`word-break: keep-all`).
- **Headline** (300, clamp(3rem, 7vw, 6.5rem), 0.9, wdth 112): section titles (Releases, About, Contact).
- **Title** (400, clamp(2.5rem, 4.4vw, 4rem), 0.95, wdth 108): each release's name.
- **Figure** (300, clamp(2.5rem, 4vw, 3.5rem), 1, wdth 112): the single proof number in a release. The × is set in Martian Mono at 0.72em, and the explanatory line runs in 14px mono.
- **Interlude** (300, clamp(1.5rem, 2.4vw, 2rem), 1.1, wdth 112, soft): the one interlude's caption. It sits low and quiet, not as a headline.
- **Subhead** (500, 24px, wdth 108): About column heads (Toolkit, Record).
- **Index name** (400, clamp(20px, 2vw, 24px), wdth 108): names in the table of contents.
- **Lede** (400, clamp(16px, 1.3vw, 18px), 1.55, max 46ch, soft): the hero role line and the contact intro.
- **Section copy** (400, 17px, 1.6, soft): the copy beside a section title.
- **Body** (400, 16px, 1.65, max 50ch, soft): release captions.
- **Secondary** (400, 15px, dim): index types and toolkit terms.
- **Action** (600, 15px) for buttons and status; **Action small** (600, 14px) for text links and the nav CTA; **Nav** (400, 14px, soft) for header links.
- **Meta** (400, 14px, dim): the release line under each title ("type · date"), record dates, field labels (soft), the form note (soft), footer text.
- **Stack** (Martian Mono 400, 13px, dim): one line per release, "A · B · C".
- **Mono small** (Martian Mono 400, 12px): index numbers and Pause/Play.
- **Credit heading** (Martian Mono 400, 12px, 0.05em, uppercase, dim): used once, for the footer's "Image credits". It is the only uppercase text on the page.

### Named Rules
**The Caption Below Rule.** No kicker or eyebrow sits above a heading. A release's meta line sits below its title, and captions follow the thing they caption. This is load-bearing.

**The Sentence Case Rule.** Captions, labels, dates and field labels are sentence case in Archivo or mono at 13–14px. They are never uppercase tracked mono. The single exception is the footer's credit heading.

**The Literal Action Rule.** Headings may carry the release metaphor ("Releases"). Action labels stay literal: Contact, See the work, Live demo ↗, Source ↗, Open email draft, Pause/Play.

**The Credit Integrity Rule.** Credited personal names use non-breaking spaces ("F.&nbsp;Summers", "R.&nbsp;Hurt", "E.&nbsp;Wright") so an initial never wraps away from its surname.

## Layout

A single 90rem column (`wrap`) with a fluid gutter (clamp(20px, 4vw, 44px)). Sections have clamp(96px, 14vh, 160px) of block padding, and each release has clamp(56px, 8vh, 88px), closed by a hairline rule.

- **Opening plate:** 100svh with a full-bleed loop. Name, role line and action row (status, Contact, See the work) sit bottom-left, with clamp(40px, 8vh, 72px) of bottom padding. The pause control sits bottom-right on the same baseline. At 767px and below it moves to the top-right, 72px down, just under the header. Nothing else is on the plate.
- **Section head:** the title on the left, a 32rem copy column on the right, bottom-aligned, closed by a hairline. It stacks at 767px and below.
- **Index (table of contents):** each row is one link (number, name, type) at 3.5rem / 1fr / 1fr, baseline-aligned, with a hairline under each row. It collapses to number plus a stacked column at 767px and below. Live demo and Source links appear only on the plates.
- **Release plate:** frame and caption at 7fr/5fr. Alternate releases flip the frame to the right. It stacks at 899px and below, and the frame always comes first.
- **Interlude:** one full-bleed loop between the fourth and fifth releases (min(70vh, 48rem), min 360px), with a single quiet caption bottom-left.
- **About:** two columns (Toolkit as a definition list with 8.5rem terms, Record as an ordered list), each row ruled at the top. It stacks at 899px; toolkit rows stack at 479px.
- **Contact:** a full-bleed still (Apollo 13 lunar far side) under a horizontal floor, with copy and channels left and a 30rem form right.
- **Footer:** the name plus place, coordinates, IST clock and year on the left; "Image credits" on the right (max 68ch) with the NIRCam filter legend and every media credit.

Scroll padding is 72px to clear the 64px fixed header.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth comes from the imagery and from the void gradient floors under type. The header is clear over the opening plate and turns solid (void at 92% with a hairline bottom border) once the page scrolls past 60% of the viewport.

### Named Rules
**The No Glow Rule.** No box-shadow, text-shadow, blur halo or glow. Separation comes from rules, ticks and void floors.

## Shapes

Every corner is square (0 radius), including inputs, which reset the platform rounding. The only round forms are the 8px status dot and the favicon's point of light. A frame is marked by two 22px L-shaped corner registration ticks in 1px paper, set 9px outside its top-left and bottom-right corners. The favicon repeats the tick pair around a paper dot. Filter chips are 9px squares.

**The Registration Tick Rule.** Framed media carries corner ticks outside its box, and nothing may clip them. The develop reveal ends at `clip-path: inset(-16px)` so the ticks stay visible. This is load-bearing.

## Components

### Buttons
- **Shape:** square (0), 48px tall, 22px inline padding, 1px paper border.
- **Solid:** a paper fill with void text, used for the primary action (Contact, Open email draft). On hover it inverts to transparent with paper text. In the form it runs full width, with a 14px soft note above it explaining that it opens an email draft.
- **Focus:** a 2px paper outline at a 3px offset, used by every focusable element.
- **Transitions:** background and colour over 0.2s.

### Text links
Links are inline-flex, at least 44px tall with 12px inline padding, 600 weight at 14px. They are underlined at a 5px offset in rule-strong, and the underline turns paper on hover. External links carry a non-breaking "&nbsp;↗" that is hidden from assistive tech, plus a screen-reader "(opens in a new tab)". Link rows take a -12px margin so the label aligns to the column edge.

### Index rows
Each whole row is one link. The number is 12px mono dim, the name uses the index-name style, and the type is 15px dim. On hover the bottom rule strengthens to rule-strong and the name takes a 1px underline at a 6px offset.

### Cards / Containers
There are no cards. The recurring container is the **frame**: 16:10, a void-2 resting fill, object-fit cover, with corner registration ticks. Lists and rows are separated by hairline rules only.

### Release caption
The title, then the meta line (14px dim, "type · date") directly below it, then the soft body. An optional figure block follows: one proof number between two hairlines, with a mono line saying what it measures. After that come the stack line (13px mono dim, "A · B · C"), then Live demo and Source. There are no labels and no chips.

### Inputs / Fields
Fields have a sentence-case 14px soft label above, a void 70% fill, a 1px rule-strong border, square corners, 12px 14px padding, 16px text (which keeps iOS from zooming) and dim placeholders. On focus the border turns paper in place of the outline. The textarea is at least 140px tall and resizes vertically. After submit, a notice (a rule-strong box in soft text) receives focus through a polite live region and offers to copy the address. If copying is blocked, it points to the printed address.

### Navigation
The header is fixed and 64px tall. The name sits left at 500 weight, 16px, wdth 112. Section links are soft 14px and turn paper on hover or when `aria-current`. The Contact CTA is outlined in rule-strong and fills with paper on hover. At 639px and below, only Work and Contact remain.

### Status
"Open to work" is set 600 at 15px in paper with an 8px paper dot. There is no colour status light.

### Loop and Playback (signature)
Every moving image is a Loop. The WebP poster carries the frame, and the MP4 loads only when three conditions hold: the loop is on screen (20% visible, or at page load for the hero), motion is welcome, and the connection is not data-saver, 2G or 3G. Off screen, a loop pauses, and a user's pause is remembered. Every loop that runs beside text has a Pause/Play control: 12px mono, at least 44px tall. On frames and the interlude it has a void 85% fill and a rule-strong border that turns paper on hover. On the opening plate it is quiet: transparent fill and border with soft text, and a rule-strong border on hover, portaled into the hero corner slot. Surfaces that don't need motion use stills (the contact section is a still). These gates and the control are load-bearing (WCAG 2.2.2).

### Credit legend (footer)
Under the uppercase "Image credits" heading, each media credit is a 14px dim paragraph. The Cosmic Cliffs credit is followed by its six NIRCam filter chips (12px mono, 9px filled squares, 6px/14px gaps). This is the only use of the filter colours.

### Motion
The hero media runs `expose` (brightness 0.25 and saturation 0.2 up to 1) over 2.4s. Hero type rises 14px with 0.25s, 0.45s and 0.6s delays. Releases below the fold develop from `inset(3%)` and brightness 0.55 to `inset(-16px)` over 1.1–1.4s on `cubic-bezier(0.16, 1, 0.3, 1)`. They are visible by default, and the develop class is added only when script runs and motion is welcome. Reduced motion removes all of it.

## Do's and Don'ts

### Do:
- **Do** use only real NASA/ESA/Webb imagery and credit all of it in the footer, with credited names bound by non-breaking spaces.
- **Do** keep the six filter colours inside the footer credit legend, beside the real filters of the credited image.
- **Do** use paper as the one accent for selection, focus, status, figures, fills and ticks.
- **Do** set captions in sentence case below the thing they caption: meta lines in 14px dim, stacks as one 13px mono line.
- **Do** keep the opening plate to image, name, one role line, status, Contact, See the work and a quiet pause.
- **Do** give every framed image corner registration ticks, and keep reveals from clipping them (end at `inset(-16px)`).
- **Do** give every loop beside text a Pause/Play control. Load video only on screen, with motion welcome and on a capable connection, and let the WebP poster carry the frame otherwise.
- **Do** keep controls at least 44px tall, action labels literal, and the name whole.

### Don't:
- **Don't** put a kicker or eyebrow above any heading.
- **Don't** use a filter colour as a UI accent, project marker, category colour, hover state or decoration.
- **Don't** set captions or labels in uppercase tracked mono. The footer's credit heading is the only exception.
- **Don't** put credits, coordinates, legends or instrument chrome on the opening plate.
- **Don't** use cards, rounded corners, shadows or glow.
- **Don't** tint, duotone or recolour the imagery. Put a void floor under the type instead.
- **Don't** use a centred-planet space hero or a dark card grid.
- **Don't** give an action a metaphorical label ("Transmit", "Launch", "Observe").
