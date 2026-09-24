---
name: Release Plates
description: The portfolio as a quiet telescope image release. The Cosmic Cliffs image carries the whole page on a space-blue ground, with paper type, cliff-dust gold as the one accent, and every credit gathered at the end.
colors:
  void: "#070b18"
  void-2: "#0d1528"
  dust: "#dcaa78"
  paper: "#f4ede3"
  soft: "#d9d1c6"
  dim: "#b3aba3"
  rule: "rgba(220, 170, 120, 0.2)"
  rule-strong: "rgba(244, 237, 227, 0.42)"
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
  text-link-hover:
    textColor: "{colors.dust}"
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
    backgroundColor: "rgba(7, 11, 24, 0.85)"
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
    backgroundColor: "rgba(7, 11, 24, 0.7)"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  index-row:
    textColor: "{colors.paper}"
    typography: "{typography.index-name}"
    padding: "14px 0"
  index-row-hover:
    textColor: "{colors.dust}"
  frame:
    backgroundColor: "{colors.void-2}"
    rounded: "{rounded.none}"
---

# Design System: Release Plates

## Overview

**Creative North Star: "The Image Release"**

Each project is published the way a telescope image is released: a plate, a title, a caption, the tools used, and credit at the end. One real image carries the whole page: the Webb Cosmic Cliffs. It plays as one loop, fixed behind the whole page. It is clear on the opening plate, then a void veil closes over it as the hero leaves and holds for the rest of the page while the image drifts slowly. The palette is taken from that image: a space-blue ground, cliff-dust gold as the single accent, and warm paper type. The interface stays quiet so the image and the work lead. Product truth lives in PRODUCT.md; this file covers only the visual system.

The system is quiet by the owner's decision. The opening plate holds only the image, the name, one role line, a status and two ways in. Captions are plain sentence case, set small and dim. Credits, filter data, coordinates and the clock all live in the footer. The page has two moving images: the backdrop loop, and the nbodyssey simulation playing in its own release frame. Sections are transparent over the backdrop, and the eight release plates run as one uninterrupted list. Structure comes from registration ticks and thin rules, never from cards, glow or rounding.

Motion works like developing and aligning a plate. The opening image comes up from under-exposure while the name surfaces from its bottom edge; that is the one focal moment. Release frames open as they scroll into view, and their corner ticks travel in and lock. The backdrop drifts slowly along the cliffs. Reduced motion removes every spatial movement, and the page stays complete without it.

**Key Characteristics:**
- One real, credited moving image behind the whole page, veiled but never tinted.
- Palette drawn from that image: space-blue void, paper type, dust gold as the one accent.
- Archivo on the width axis: wide and light for titles, normal width for reading.
- Sentence-case captions in dim text; mono only for stack lines, index numbers, figures and transport.
- Square corners everywhere; frames marked by corner registration ticks.
- Credits and extras gathered in the footer.

## Colors

The palette comes from the Cosmic Cliffs image: the deep space above the ridge is the ground, the warm dust of the cliffs is the accent, and the type is warm paper. The six filter colours are data in a single credit legend and appear nowhere else.

### Primary
- **Cliff Dust** (dust): the one accent. It is used for text selection, the focus ring, the status dot, the release figure (the 176× number), text-link and index-name hover, and field focus. It measures 9.4:1 on void and stays rare, marking what a visitor can act on or should notice.

### Neutral
- **Space Void** (void): a blue-black taken from the image, not a neutral black. It is the page ground under the backdrop, the backdrop veil, the header's solid state (at 92% alpha), and every floor under type.
- **Deep Space** (void-2): the resting fill inside a frame before its media paints.
- **Warm Paper** (paper): headlines and main type, the solid button fill and outline, registration ticks, the skip link. 16.9:1 on void.
- **Soft Paper** (soft): running text, ledes, section copy, field labels, the form note, nav links at rest, the hero's pause label. 13.0:1 on void.
- **Dim Paper** (dim): caption lines (release meta, stack line), index numbers and types, toolkit terms, record dates, placeholders, footer text. It measures 8.7:1 on flat void. Over the moving backdrop it holds 4.93–5.11:1 at every scroll depth, measured on two runs with the video in different frames.
- **Dust Hairline** (rule): warm, decorative section rules, index and list dividers, figure borders, the footer's top edge.
- **Strong Hairline** (rule-strong): paper at 42%. Edges of interactive things (nav CTA, inputs, playback, sent notice), link underlines at rest, index rows on hover, the scrollbar thumb. Holds 3:1 or better.

### Tertiary: Webb NIRCam filters (credit legend only)
- **F090W Blue** (f090), **F187N Teal** (f187), **F200W Green** (f200), **F335M Gold** (f335), **F444W Orange** (f444), **F470N Red** (f470): ordered from short to long wavelength. They appear only as 9px square chips in the footer, under "Image credits", beside the real filter names of the Cosmic Cliffs image credited there.

### Named Rules
**The Filters Are Data Rule.** The six filter colours appear only as chips in a credit legend whose filters and credit are the real ones for the imagery shown. Today that is the footer's NIRCam legend. They never mark a project, a stack, a state or a decoration. This is load-bearing.

**The One Accent Rule.** Dust is the only accent. Selection, focus ring, status dot, the figure, link and index hover, and field focus are all dust. Paper stays the colour of type, ticks and the solid button. No other hue marks interaction.

**The Floor Not Tint Rule.** Imagery keeps its own hue. It may be veiled with void but never filtered darker, recoloured or duotoned outside the opening exposure. Type on imagery sits on a void floor. The hero floor (`.plate::before`) runs void 94% to 60% to clear over the bottom 62%, with a 55% top floor. Below the hero, the backdrop veil holds at 0.84. Contact adds a left-heavy horizontal floor (void 90% to 72% to 60%), and the footer has a flat void 80% floor.

**The Constant Floor Rule.** Text over a moving image needs a floor that does not change. Once the hero has left, the veil holds at 0.84 to the end of the page. It never lifts again for effect.

**The Legibility Check Rule.** The veil is tuned so that dim text holds 4.5:1 over the moving video. Re-run the check after touching the veil opacity, its gradient or closing distance, the drift or scale, the section floors, or the dim token. Hide the text and pictures but keep the floors. Sample the brightest 16px block behind text at several scroll depths, on at least two runs with the video in different frames, and confirm dim stays at 4.5:1 or better (measured 4.93–5.11:1).

## Typography

**Display Font:** Archivo, variable with the wdth axis (fallback system-ui, sans-serif)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Martian Mono (fallback ui-monospace, monospace)

**Character:** A wide, light grotesk for titles, like the lettering on a release, with plain reading text beneath it. Width marks rank: 112% for the name, section heads, and figures; 108% for release names, index names and About subheads; normal width for reading. The mono is kept for the technical small print.

### Hierarchy
- **Display** (300, clamp(3.5rem, 11vw, 11.5rem), 0.86, wdth 112): the name on the opening plate only. It never breaks inside a word (`word-break: keep-all`).
- **Headline** (300, clamp(3rem, 7vw, 6.5rem), 0.9, wdth 112): section titles (Releases, About, Contact).
- **Title** (400, clamp(2.5rem, 4.4vw, 4rem), 0.95, wdth 108): each release's name.
- **Figure** (300, clamp(2.5rem, 4vw, 3.5rem), 1, wdth 112): the single proof number in a release. The × is set in Martian Mono at 0.72em, and the explanatory line runs in 14px mono.
- **Subhead** (500, 24px, wdth 108): About column heads (Toolkit, Record).
- **Index name** (400, clamp(20px, 2vw, 24px), wdth 108): names in the table of contents.
- **Lede** (400, clamp(16px, 1.3vw, 18px), 1.55, max 46ch, soft): the hero role line and the contact intro.
- **Section copy** (400, 17px, 1.6, soft): the copy beside a section title.
- **Body** (400, 16px, 1.65, max 50ch, soft): release captions.
- **Secondary** (400, 15px, dim): index types and toolkit terms.
- **Action** (600, 15px) for buttons and status; **Action small** (600, 14px) for text links and the nav CTA; **Nav** (400, 14px, soft) for header links.
- **Meta** (400, 14px, dim): the release line under each title ("type · date"), record dates, field labels (soft), the form note (soft), footer text, and the form error (dust, `role="alert"`, shown when a field holds only spaces).
- **Stack** (Martian Mono 400, 13px, dim): one line per release, "A · B · C".
- **Mono small** (Martian Mono 400, 12px): index numbers and Pause/Play.
- **Credit heading** (Martian Mono 400, 12px, 0.05em, uppercase, dim): used once, for the footer's "Image credits". It is the only uppercase text on the page.

### Named Rules
**The Caption Below Rule.** No kicker or eyebrow sits above a heading. A release's meta line sits below its title, and captions follow the thing they caption. This is load-bearing.

**The Sentence Case Rule.** Captions, labels, dates and field labels are sentence case in Archivo or mono at 13–14px. They are never uppercase tracked mono. The single exception is the footer's credit heading.

**The Literal Action Rule.** Headings may carry the release metaphor ("Releases"). Action labels stay literal: Contact, See the work, Live demo ↗, Source ↗, Open email draft, Pause/Play.

**The Credit Integrity Rule.** Credited personal names use non-breaking spaces ("F.&nbsp;Summers", "G.&nbsp;Bacon", "E.&nbsp;Wright") so an initial never wraps away from its surname.

## Layout

The whole page scrolls over one fixed backdrop, and every section is transparent over it. Content sits in a single 90rem column (`wrap`) with a fluid gutter (clamp(20px, 4vw, 44px)). Sections have clamp(96px, 14vh, 160px) of block padding, and each release has clamp(56px, 8vh, 88px), closed by a hairline rule.

- **Opening plate:** 100svh with no media of its own. It is a window onto the backdrop loop with only its text floor. Name, role line and action row (status, Contact, See the work) sit bottom-left, with clamp(40px, 8vh, 72px) of bottom padding. The pause control sits bottom-right on the same baseline. At 767px and below it moves to the top-right, 72px down, just under the header. Nothing else is on the plate.
- **Section head:** the title on the left, a 32rem copy column on the right, bottom-aligned, closed by a hairline. It stacks at 767px and below.
- **Index (table of contents):** each row is one link (number, name, type) at 3.5rem / 1fr / 1fr, baseline-aligned, with a hairline under each row. It collapses to number plus a stacked column at 767px and below. Live demo and Source links appear only on the plates. On a fine pointer, a preview plate (min(22rem, 26%) wide) floats at the right edge of the list.
- **Release plate:** all eight run as one uninterrupted list after the index. Frame and caption sit at 7fr/5fr. Alternate releases flip the frame to the right. It stacks at 899px and below, and the frame always comes first.
- **About:** two columns (Toolkit as a definition list with 8.5rem terms, Record as an ordered list), each row ruled at the top. It stacks at 899px; toolkit rows stack at 479px.
- **Contact:** no image of its own. A left-heavy void floor sits over the held veil, with copy and channels left and a 30rem form right.
- **Footer:** the name plus place, coordinates, IST clock and year on the left; "Image credits" on the right (max 68ch). It credits the Cosmic Cliffs image with its NIRCam filter legend, then a line noting that the same image carries the page, then NASA's media-use line. The footer sits on its own void 80% floor.

Scroll padding is 72px to clear the 64px fixed header.

## Elevation & Depth

Flat surfaces, no shadows. Depth comes from the image behind the page. The **backdrop** is the Cosmic Cliffs loop, fixed behind everything (z-index -10, inset -4%, scale 1.1), with no brightness filter. A vertical void veil sits over it (void, then void 90% at mid-height, then void). The veil is at opacity 0 over the hero and closes linearly to 0.84 by 85% of one viewport of scroll, then holds at 0.84 to the end. As the page scrolls, the image drifts up to -6% translateY. It does not drift under reduced motion, and the veil behaves the same. Type sits on void floors wherever the image is bright. The header is clear over the opening plate and turns solid (void at 92% with a hairline bottom border) once the page scrolls past 60% of the viewport.

### Named Rules
**The No Glow Rule.** No box-shadow, text-shadow, blur halo or glow. Separation comes from rules, ticks and void floors.

## Shapes

Every corner is square (0 radius), including inputs, which reset the platform rounding. The only round forms are the 8px dust status dot and the favicon's point of light. A frame is marked by two 22px L-shaped corner registration ticks in 1px paper, set 9px outside its top-left and bottom-right corners. The favicon repeats the tick pair around a paper dot. Filter chips are 9px squares.

**The Registration Tick Rule.** Framed media carries corner ticks outside its box, and nothing may clip them. Media sits in an inner `frame-media` layer that clips the picture but not the ticks, and the scan reveal ends at `clip-path: inset(-16px)` so the ticks stay visible. The ticks may travel in and lock (see Motion), but at rest they sit exactly 9px outside the corners. This is load-bearing.

## Components

### Buttons
- **Shape:** square (0), 48px tall, 22px inline padding, 1px paper border.
- **Solid:** a paper fill with void text, used for the primary action (Contact, Open email draft). On hover it inverts to transparent with paper text. In the form it runs full width, with a 14px soft note above it explaining that it opens an email draft.
- **Focus:** a 2px dust outline at a 3px offset, used by every focusable element.
- **Transitions:** background and colour over 0.2s.

### Text links
Links are inline-flex, at least 44px tall with 12px inline padding, 600 weight at 14px. They are underlined at a 5px offset in rule-strong, and the text and underline turn dust on hover. External links carry a non-breaking "&nbsp;↗" that is hidden from assistive tech, plus a screen-reader "(opens in a new tab)". Link rows take a -12px margin so the label aligns to the column edge.

### Index rows
Each whole row is one link. The number is 12px mono dim, the name uses the index-name style, and the type is 15px dim. On hover the bottom rule strengthens to rule-strong and the name turns dust with a 1px underline at a 6px offset.

### Index preview
The preview is a single plate at the right of the index list: min(22rem, 26%) wide, 16:10, square, on a void-2 ground, with the project still set to object-fit cover. It carries no ticks, caption or border, and it is always a still. It renders only for a fine pointer that can hover. It follows the hovered or focused row, stays within the list, and is hidden from assistive tech.

### Cards / Containers
There are no cards. The recurring container is the **frame**: 16:10 with a void-2 resting fill. Its media sits in an inner layer with overflow hidden, so the picture can move inside while the corner registration ticks stay outside, unclipped. Lists and rows are separated by hairline rules only.

### Release caption
The title, then the meta line (14px dim, "type · date") directly below it, then the soft body. An optional figure block follows: one proof number in dust between two hairlines, with a mono line in paper saying what it measures. After that come the stack line (13px mono dim, "A · B · C"), then Live demo and Source. There are no labels and no chips.

### Inputs / Fields
Fields have a sentence-case 14px soft label above, a void 70% fill, a 1px rule-strong border, square corners, 12px 14px padding, 16px text (which keeps iOS from zooming) and dim placeholders. On focus the border turns dust in place of the outline. The textarea is at least 140px tall and resizes vertically. After submit, a notice (a rule-strong box in soft text) receives focus through a polite live region and offers to copy the address. If copying is blocked, it points to the printed address.

### Navigation
The header is fixed and 64px tall. The name sits left at 500 weight, 16px, wdth 112. Section links are soft 14px and turn paper on hover or when `aria-current`. The Contact CTA is outlined in rule-strong and fills with paper on hover. At 639px and below, only Work and Contact remain.

### Status
"Open to work" is set 600 at 15px in paper with an 8px dust dot.

### Loop and Playback (signature)
Every moving image is a Loop. The WebP poster carries the frame, and the MP4 loads only when three conditions hold: the loop is on screen (20% visible, or at page load for the backdrop), motion is welcome, and the connection is not data-saver, 2G or 3G. Below 768px a loop with a `small` source plays that instead (the backdrop's is 720px wide, 390 KB against 799 KB); the choice is made before any request, so a phone never fetches the wide file. Off screen, a loop pauses, and a user's pause is remembered. Every loop that runs beside text has a Pause/Play control: 12px mono, at least 44px tall. On a release frame it has a void 85% fill and a rule-strong border that turns paper on hover. The backdrop loop's control is quiet: transparent fill and border with soft text, a rule-strong border on hover, portaled into the hero corner slot. Everywhere else uses stills. These gates and the control are load-bearing (WCAG 2.2.2). The backdrop loop is marked `decorative`, so no description of it is read out; its pause control keeps its own label. Without script, a `<noscript>` rule holds the veil closed at 0.84 so text never lands on the bright poster.

### Credit legend (footer)
Under the uppercase "Image credits" heading, each media credit is a 14px dim paragraph. The Cosmic Cliffs credit is followed by its six NIRCam filter chips, then a line saying the same image carries the page (12px mono, 9px filled squares, 6px/14px gaps). This is the only use of the filter colours.

### Motion
All motion uses `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Opening exposure:** the backdrop video runs `expose` (brightness 0.25 and saturation 0.2 up to 1) over 2.4s.
- **Focal moment:** while the exposure runs, the name surfaces from its bottom edge. Its clip-path goes from `inset(100% 0 0 0)` to `inset(0)` and it moves up from translateY(0.18em), over 1.3s after a 0.5s delay. This is the page's one headline motion, and it is reserved for the name.
- **Supporting entrance:** the role line and action row rise 14px and fade in over 1s, at 0.45s and 0.6s delays.
- **Scan reveal:** releases below the fold read out left to right, like a scan coming off the detector. The frame opens from `inset(0 100% 0 0)` at brightness 0.5 to `inset(-16px)` over 1.2s on `cubic-bezier(0.65, 0, 0.35, 1)`, with brightness returning over 1.6s. The tick lock follows. Releases are visible by default, and the develop class is added only when script runs and motion is welcome.
- **Caption stagger:** the caption's children (title, meta, body, figure, stack, links) rise 12px and fade in after the scan, with delays starting at 0.35s in 70ms steps.
- **Plate depth:** where `animation-timeline: view()` is supported and motion is welcome, framed images and video run `plateDepth` across the `cover` range: scale 1.08 while moving from translateY -3% to 3%. Elsewhere they stay static.
- **Index preview:** on a fine pointer that can hover, hovering or focusing an index row shows that project's still in the preview plate. The plate glides to the row's centre (transform 0.45s ease-out), fades in (opacity 0.25s), is revealed from the top by clip-path, and grows from scale 0.96. It is decorative and hidden from assistive tech, and the rows remain the links.
- **Registration lock:** until a release is seen, its ticks sit 22px outside their corners (top-left up and left, bottom-right down and right) and are transparent. On arrival they settle, with transform over 0.9s and opacity over 0.5s, both after 0.25s. Clicking an index row replays the lock (`lockTL`/`lockBR`, 0.8s) on the target plate 650ms later, once the scroll has settled, so the eye knows where it landed.
- **Feedback:** the post-send note fades in and rises 6px over 0.3s.
- **Drift:** the backdrop moves with scroll, as described in Elevation & Depth.
- **Reduced motion:** exposure, surfacing, rising, scan, caption stagger, lock, plate depth and drift are all off, and captions and ticks rest in place. The index preview and the post-send note keep opacity-only fades.

## Do's and Don'ts

### Do:
- **Do** let the one opening loop carry the page: a fixed backdrop that is clear over the hero and held under a 0.84 veil beneath transparent sections, credited in the footer with names bound by non-breaking spaces.
- **Do** re-run the dim-text contrast check (4.5:1 or better over the brightest 16px block, at every scroll depth) after any change to the veil, floors, drift or dim. Measure on more than one video frame.
- **Do** keep the six filter colours inside the footer credit legend, beside the real filters of the credited image.
- **Do** use dust as the one accent: selection, focus ring, status dot, the figure, link and index hover, field focus.
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
- **Don't** use cards, rounded corners, shadows or glow, and don't give sections opaque backgrounds that hide the backdrop. Floors are translucent void.
- **Don't** add a second backdrop image or give a section its own picture. One image carries the page.
- **Don't** lift or pulse the veil below the hero. Text over moving video keeps a constant floor.
- **Don't** give anything other than the name a focal entrance, or move anything spatially under reduced motion.
- **Don't** tint, duotone or recolour the imagery. Put a void floor under the type instead.
- **Don't** use a centred-planet space hero or a dark card grid.
- **Don't** give an action a metaphorical label ("Transmit", "Launch", "Observe").
