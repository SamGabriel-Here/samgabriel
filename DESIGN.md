---
name: Release Plates
description: The portfolio as a telescope observation run. The Cosmic Cliffs image carries the whole page on a space-blue ground; a serif speaks, a mono measures; cliff-dust gold is the one light, used only on what is active or firing; every credit is gathered at the end.
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
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(4rem, 13vw, 14rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(3.25rem, 7.5vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 4.8vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  panel-title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 3.2vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 0.95
  figure:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(3rem, 4.6vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  narration:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.9rem, 2.6vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.12
  wordmark:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "23px"
    fontWeight: 400
    letterSpacing: "-0.005em"
  year:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1
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
  mono-xs:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
  chrome:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  none: "0"
  frame-in-panel: "12px"
  panel: "22px"
  pill: "999px"
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
  nav-capsule:
    backgroundColor: "rgba(7, 11, 24, 0.42)"
    rounded: "{rounded.pill}"
    padding: "3px"
  nav-link:
    textColor: "{colors.soft}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  nav-link-active:
    textColor: "{colors.paper}"
  nav-cta:
    backgroundColor: "{colors.dust}"
    textColor: "{colors.void}"
    typography: "{typography.action-sm}"
    rounded: "{rounded.pill}"
    padding: "0 16px 0 15px"
    height: "44px"
  nav-cta-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.void}"
  specimen-panel:
    backgroundColor: "rgba(7, 11, 24, 0.84)"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "14px 14px 22px"
  playback:
    backgroundColor: "rgba(7, 11, 24, 0.85)"
    textColor: "{colors.paper}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.none}"
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

**Creative North Star: "The Observation Run"**

Each project is published the way a telescope image is released, and on a large screen the page runs like an observation: one continuous scene, a camera that moves to a target, a single narrated line, and an instrument panel that reads out what is there. One real image carries the whole page: the Webb Cosmic Cliffs, as a looping 3D flight fixed behind everything. It is clear on the opening plate, then a void veil closes over it and holds. The palette is taken from that image: a space-blue ground, cliff-dust gold as the one light, and warm paper type. Product truth lives in PRODUCT.md; this file covers only the visual system.

Two references shaped the current system, and neither is copied. The narrated scene comes from an interactive explainer: one persistent world, the camera moving between beats, one caption at a time. The voice comes from the owner's own lecture deck: a serif that speaks, a mono that measures, one italic word leaned on in the accent, framed specimen panels, and light reserved for what fires.

The opening plate stays quiet by the owner's decision: the image, the name, one role line, a status and two ways in. Credits, filter data, coordinates and the clock all live in the footer.

**Key Characteristics:**
- One real, credited moving image behind the whole page, veiled but never tinted.
- Serif speaks (name, headings, project names, narration, figures); mono measures (numbers, stacks, chrome); Archivo reads (body and controls).
- Dust gold is the one light: it marks what is active, chosen or firing, and nothing decorative.
- On desktop the eight projects are one pinned scene: the camera pans the nebula from target to target.
- The mark is SG punched into a plate, in binary. Notation, not illustration.
- Credits and extras gathered in the footer.

## Colors

The palette comes from the Cosmic Cliffs image: the deep space above the ridge is the ground, the warm dust of the cliffs is the accent, and the type is warm paper. The six filter colours are data in a single credit legend and appear nowhere else.

### Primary
- **Cliff Dust** (dust): the one light. Selection, the focus ring, the status dot, the italic word in the name, the lit holes of the mark, the Contact pill, the active nav numeral, the console's trail, active target, rings and progress bar, the 176× figure and its ratio dots, the timeline's axis end and its "now" point, link and index hover, and field focus. 9.4:1 on void.

### Neutral
- **Space Void** (void): a blue-black taken from the image. The page ground, the backdrop veil, the header's solid state (92%), the ink on the Contact pill, and every floor under type.
- **Deep Space** (void-2): the resting fill inside a frame before its media paints.
- **Warm Paper** (paper): headlines, main type, the solid button, the mark's plate outline, registration ticks, the skip link. 16.9:1 on void.
- **Soft Paper** (soft): running text, ledes, section copy, field labels, nav links at rest, the console's chrome counter. 13.0:1 on void.
- **Dim Paper** (dim): caption lines, stacks, index numbers, toolkit terms, the ratio key, footer text. 8.7:1 on flat void.
- **Dust Hairline** (rule): warm decorative rules, list dividers, figure borders, the nav capsule and panel edges.
- **Strong Hairline** (rule-strong): paper at 42%. Edges of interactive things (inputs, playback), link underlines at rest, the timeline axis start. 3:1 or better.

### Tertiary: Webb NIRCam filters (credit legend only)
- **F090W Blue** (f090), **F187N Teal** (f187), **F200W Green** (f200), **F335M Gold** (f335), **F444W Orange** (f444), **F470N Red** (f470): ordered short to long wavelength, shown only as 9px square chips beside the real filter names in the footer's "Image credits".

### Named Rules
**The Filters Are Data Rule.** The six filter colours appear only as chips in a credit legend whose filters and credit are the real ones for the imagery shown. They never mark a project, a stack, a state or a decoration. This is load-bearing.

**The Only What Fires Rule.** Dust marks what is active, chosen or firing: the section you are in, the target in view, the button that acts, the proof number, a signal going out. If nothing is happening, it stays paper and void. No other hue marks interaction.

**The Floor Not Tint Rule.** Imagery keeps its own hue. It may be veiled with void but never filtered darker, recoloured or duotoned outside the opening exposure. Type on imagery sits on a void floor. The hero floor runs void 94% to 60% to clear over the bottom 62%, with a 55% top floor and a soft radial floor (void 50%, ellipse 48% by 30% at 26% 64%) under the name. Below the hero, the backdrop veil holds at 0.84. The console's panel carries its own void 84% floor, contact a left-heavy horizontal floor, and the footer a flat void 80% floor.

**The Constant Floor Rule.** Text over a moving image needs a floor that does not change. Once the hero has left, the veil holds at 0.84 to the end of the page. It never lifts again for effect.

**The Legibility Check Rule.** Re-run the check after touching the veil, any floor, the backdrop's drift, scale or camera, or the text tokens. Hide the text, pictures and chart but keep the floors; for every visible text run, sample the brightest 16px block behind it; do it at the hero, the section head, every console beat, About, Contact and the footer, on two runs with the video in different frames. Last run (2026-09-24, camera zoom 1.2): paper 7.48:1, soft 4.90:1, dim 5.09:1 at worst; the italic dust "Gabriel" 3.15:1 at worst, which holds only because it is display-size (3:1 applies). Dim small text must stay at 4.5:1 or better.

## Typography

**Display Font:** Instrument Serif, regular and italic (fallback Georgia, serif)
**Body Font:** Archivo, variable with the wdth axis (fallback system-ui, sans-serif)
**Measure Font:** Martian Mono (fallback ui-monospace, monospace)

**Character:** a literary serif that talks like a person, a plain grotesk for reading and controls, and a mono that only ever measures.

### Hierarchy
- **Display** (serif 400, clamp(4rem, 13vw, 14rem), 0.86): the name on the opening plate only, "Sam *Gabriel*" with the italic word in dust. It never breaks inside a word.
- **Headline** (serif 400, clamp(3.25rem, 7.5vw, 7rem), 0.92): section titles (Releases, About, Contact). An italic `em` inside a headline turns dust; use at most one.
- **Title** (serif 400, clamp(2.75rem, 4.8vw, 4.5rem)): a project name on a stacked plate. In the console panel it is **Panel title** (clamp(2.5rem, 3.2vw, 3.25rem)).
- **Figure** (serif 400, clamp(3rem, 4.6vw, 4.25rem), dust): the single proof number in a release. The × is Martian Mono at 0.72em.
- **Narration** (serif 400, clamp(1.9rem, 2.6vw, 2.6rem), 1.12, max 36ch, balanced): the console's one line per project, taken from the first sentence of its caption.
- **Wordmark** (serif 400, 23px): the header name, "Sam *Gabriel*" again.
- **Year** (serif 400, 30px, dust): timeline dates.
- **Subhead** (Archivo 500, 24px, wdth 108): About heads (Toolkit, Record).
- **Index name** (Archivo 400, clamp(20px, 2vw, 24px), wdth 108): names in the table of contents.
- **Lede** (Archivo 400, clamp(16px, 1.3vw, 18px), 1.55, soft) and **Section copy** (17px, 1.6, soft).
- **Body** (Archivo 400, 16px, 1.65, max 50ch, soft): release captions. In the console panel the first sentence moves to the narration and the rest shows at 14px.
- **Action** (600, 15px) for buttons and status; **Action small** (600, 14px) for text links and the Contact pill; **Nav** (400, 14px, soft).
- **Meta** (Archivo 400, 14px, dim): "type · date" under each title, field labels (soft), the form note.
- **Stack** (mono 13px, dim): "A · B · C".
- **Mono small** (12px): index numbers, Pause/Play, the ratio key, the narration's type overline (dust).
- **Mono extra small** (11px): the nav numerals ("01", "02") and target numbers on the chart.
- **Chrome** (mono 12px, 0.12em, uppercase): the console strip, "THE WORK" in dust on the left and "03 / 08" in soft on the right.

### Named Rules
**The Serif Speaks, Mono Measures Rule.** The serif carries names, headings, narration, years and the proof number, because those are claims. The mono carries counts, stacks, numerals and chrome, because those are measurements. Archivo carries reading and controls. Don't set an argument in mono or a data series in the serif.

**The One Leaned Word Rule.** A display line may set one word in italic dust ("Sam *Gabriel*"). Never two in one line, and never on a body line.

**The Caption Below Rule.** No kicker sits above a heading: a release's meta line sits below its title. The one sanctioned overline is the narration's type label, which sits above a caption line, not a heading.

**The Sentence Case Rule.** Captions, labels and dates are sentence case. The only uppercase tracked mono is the footer's "Image credits" heading and the console's chrome strip.

**The Literal Action Rule.** Headings may carry the release metaphor ("Releases"). Action labels stay literal: Contact, See the work, Live demo ↗, Source ↗, Open email draft, Pause/Play.

**The Credit Integrity Rule.** Credited personal names use non-breaking spaces ("F.&nbsp;Summers", "G.&nbsp;Bacon") so an initial never wraps away from its surname.

## Layout

The whole page scrolls over one fixed backdrop, and every section is transparent over it. Content sits in a 90rem column (`wrap`) with a fluid gutter. Sections have clamp(96px, 14vh, 160px) of block padding.

- **Opening plate:** 100svh with no media of its own, a window onto the backdrop. Name, role line and actions (status, Contact, See the work) sit bottom-left; the pause control sits bottom-right on the same baseline. As the first viewport scrolls away the foot rises up to 80px and fades.
- **Section head:** title left, a 32rem copy column right, bottom-aligned, closed by a hairline.
- **The console (desktop):** when the viewport is at least 1024 by 720 and motion is welcome, the eight releases become one pinned scene. The stage is one viewport plus 0.9 viewports per release, pinned sticky at 100svh. Over it: the chart across the whole viewport, the chrome strip 28px from the top, the specimen panel in a column on the right (from 56px below the top to 16px above the foot, width min(30rem, 34vw, (100svh − 493px) × 1.6 + 28px) so the tallest release fits a 720px screen), the narrated line centred in the space left of the panel 104px above the foot, and the stepper at the foot: eight equal columns, numerals dropped below 1440px. A 2px dust progress bar runs along the bottom edge. The index table is hidden while the console runs.
- **Release plates (fallback):** everywhere else, the index table of contents and then the eight releases as one vertical list, frame and caption at 7fr/5fr, alternating sides, stacking at 899px.
- **About:** below 1024px, two columns (Toolkit definition list, Record list), stacking at 899px. From 1024px, Toolkit is one spec row of five columns and Record is a four-column timeline 340px tall.
- **Contact:** a left-heavy void floor over the held veil, copy and channels left, a 30rem form right.
- **Footer:** the mark, name, place, coordinates, IST clock and year on the left; "Image credits" on the right.

Scroll padding is 72px to clear the 64px fixed header.

## Elevation & Depth

Depth comes from the image behind the page, not from shadows. The **backdrop** is the Cosmic Cliffs loop, fixed (z -10, inset -4%). Over the first viewport it pushes in from scale 1.1 to 1.38 while the hero type lifts away, then drifts up to -6% and scales a further 0.22 across the page. A void veil closes from 0 to 0.84 by 85% of the first viewport and holds. In the console a **camera** composes with that motion through three custom properties on the backdrop (`--cam-x`, `--cam-y`, `--cam-z`): it parks each target at 36% across and 42% down, holds, then travels to the next, pulling back 0.14 mid-flight from a base zoom of 1.2, and is clamped so the image always covers the screen. It eases in as the stage arrives and out as it leaves.

The header is clear over the opening plate and turns solid (void 92% with a hairline) past 60% of the first viewport.

### Named Rules
**The Only Light Glows Rule.** No drop shadows on surfaces or type. One thing emits light, because it is the present moment: the timeline's "now" point (a 14px dust glow). The narration carries a void text-shadow (0 2px 24px, 80%), which is a floor, not a glow.

## Shapes

Three families, each with a job:
- **Square** (0): buttons in the page, inputs, playback, the index, and every framed plate outside the console. A plate carries two 22px L-shaped registration ticks in 1px paper, 9px outside its top-left and bottom-right corners.
- **Rounded panel** (22px, with 12px on the frame inside it): the console's specimen panel only.
- **Pill** (999px): the header's nav capsule, its gliding marker and the Contact pill.

Round forms: the 8px status dot, the mark's holes, the ratio dots, the timeline points, the chart's target dots, rings and pulse, and the Contact pill's signal dot. Filter chips are 9px squares.

**The Registration Tick Rule.** Framed media outside the console carries corner ticks outside its box, and nothing may clip them: media sits in an inner `frame-media` layer, and the scan reveal ends at `inset(-16px)`. Inside the console panel the ticks are hidden and the frame is rounded instead.

## Components

### The mark (signature)
SG punched into a plate. S is 01010011 and G is 01000111 in ASCII; the sixteen bits fill a 4×4 grid in reading order, and a lit dust hole is a one. Empty positions keep a faint paper ring so it reads as a card, not a scatter. The plate is a 35/40 square in paper at 30%. It sits 22px in the header before the wordmark, 18px in the footer, and is the favicon (`app/icon.svg`, same bits, on void). The holes punch in as one 45ms-staggered wave, hold for most of a 6.5s loop, clear, and punch again; hovering the name turns the plate dust and never restarts the loop. It freezes fully lit under reduced motion. It was carried over from the previous build at the owner's request. **Never rebalance the bits for looks**: the pattern is the only thing that makes the mark true.

### Navigation
The header is fixed, 64px tall: the mark and the serif wordmark left, the nav right. The nav is one glass capsule (void 42%, 12px backdrop blur, 1px rule, 3px padding). Work and About carry mono numerals ("01", "02") that turn dust on hover and on the section in view. A soft paper pill glides to whichever item is under the pointer or focused, and otherwise rests on the section in view; it moves by `clip-path` over the capsule's full width, so it only repaints. Contact is the one lit pill: dust with void ink (9:1), a void signal dot whose ring goes out once every 3.6s, and an arrow that nudges 3px on hover; it turns paper on hover or when Contact is in view. At 639px and below About hides. Scrolling down past one viewport tucks the header away; any scroll up, or focus inside it, brings it back.

### Pointer
A real mouse gets the chart's target mark as its cursor: a 6px dust dot on the exact pointer and the mark's four paper tick arms (1.5px by 6px, on a 36px box) trailing it at a 0.24 lerp, with a 1.5px void drop-shadow so it reads over the brightest cloud. Over anything that acts (links, buttons, labels) it locks on: the mark scales to 1.8, its vertical ticks turn dust, a dust ring closes at 70%, the side arms tuck away so they never sit on a label, and the dot shrinks. Over a picture or video it turns 45° and scales 1.5, a framing mark. Pressing tightens it to 0.78 of its scale. Text fields hide it and show the native caret. The system cursor is hidden only once a mouse has actually moved (`has-pointer` on the root); touch, pens, reduced motion and no-script keep the system cursor. The loop runs only while the mark is catching up.

### The console (signature, desktop)
- **Chart:** an SVG over the whole viewport. Each release is a target on the nebula (fixed fractions of the backdrop frame), drawn as a dot with four tick arms and its number, carried by the camera. A dashed paper route joins all eight; a dust trail draws the part already observed, up to the camera. The target in view is paper with dust arms; passed targets are dust.
- **Halo and pulse:** when the target changes, three dust rings go out from it once (1.8s, 0.25s apart), and one dust pulse runs down the beam, a dashed line from the target to the panel (0.7s). Both are composited HTML layers, not SVG repaints. Then it is quiet.
- **Specimen panel:** the release itself, restyled: void 84% floor, 1px rule, 22px radius, the frame first (12px radius, overflow clipped), then title, meta, the rest of the caption, figure, stack and links. One panel at a time: the arriving one rises 24px and fades in quickly while its picture opens through a hexagon, the shape of a Webb mirror segment, grown until it covers the frame, with a thin dust outline that glints and fades as it opens. The leaving one lifts 16px and is gone before the next arrives.
- **Narration:** one line per release in the serif, with its type above in dust mono; lines swap with a 10px rise. Hidden from assistive tech: the panel carries the full caption for screen readers.
- **Stepper:** the eight names at the foot, each a link to its release, top rule dust on the active one. Clicking a name or focusing inside a panel scrolls the page to that release.
- **Playback inside the console:** pinned panels always intersect the viewport, so a loop's own observer never stops them. A hidden panel's video is paused by the console, including one that starts late by autoplay (a capture listener on `play`).

### The ratio
nbodyssey's 176× is drawn out: 176 dots, 5px with 3px gaps, as many columns as the space allows, one dot per tree-code step in the time brute force takes for one, keyed in a 12px dim line. They light in reading order (7ms apart after 250ms) when the release is revealed, and again each time its panel arrives in the console; at rest and under reduced motion they are simply lit.

### The timeline (About, from 1024px)
Record runs oldest first: Senior Secondary, B.Tech, the InternPe internship, and "Now · Open to work". A 1px axis (rule-strong to dust) draws left to right over 1.8s; each point pops in as the line reaches its column centre, and its card (year in the serif, what, where) rises in 0.12s later, cards alternating above and below. The last point is filled dust with the page's only glow. Below 1024px it is a plain list in the same order.

### Buttons, links, inputs
- **Solid button** (square, 48px, paper fill, void text; inverts on hover): Contact on the opening plate, Open email draft.
- **Text links** (44px targets, 600 at 14px, underlined in rule-strong at a 5px offset, dust on hover). External links carry a hidden "&nbsp;↗" and a screen-reader "(opens in a new tab)".
- **Focus:** a 2px dust outline at a 3px offset on everything focusable.
- **Fields:** sentence-case soft label above, void 70% fill, rule-strong border, square, 16px text, dim placeholder; the border turns dust on focus. The textarea is at least 140px. After submit, a notice receives focus through a polite live region and offers to copy the address.

### Loop and Playback
Every moving image is a Loop. The WebP poster carries the frame; the MP4 loads only when the loop is on screen, motion is welcome, and the connection is not data-saver, 2G or 3G. Below 768px a loop with a `small` source plays that instead (the backdrop's is 720px, 390 KB). The backdrop also offers **sharp** encodes cut from NASA's 3840×2160 master: 4K and 1440p, each in AV1 and HEVC, best first. One is used only where the screen has the pixels for it (device pixels across the backdrop at least 1400 for 1440p, 2600 for 4K) and the device reports it can decode it smoothly and power-efficiently (`navigator.mediaCapabilities`); otherwise the 720p H.264 file plays. Slow links never reach this choice: data saver and 2G/3G keep the poster. Never upscale imagery with a model: a sharper version comes from the source. Every loop beside text has a Pause/Play control, 12px mono, at least 44px tall; the backdrop's is quiet and sits in the hero corner. A user's pause is remembered. These gates and the control are load-bearing (WCAG 2.2.2). Without script, a `<noscript>` rule holds the veil closed at 0.84.

### Credit legend (footer)
Under the uppercase "Image credits" heading, each media credit is a 14px dim paragraph. The Cosmic Cliffs credit is followed by its six NIRCam filter chips, then a line saying the same image carries the page. This is the only use of the filter colours.

### Motion
The standard easing is `cubic-bezier(0.16, 1, 0.3, 1)`; nothing overshoots.
- **Opening exposure:** the backdrop video comes up from brightness 0.25 and saturation 0.2 over 2.4s.
- **Focus pull (the focal moment):** the name comes into focus from an 18px blur at scale 1.05 over 1.8s, starting at 0.35s. It is reserved for the name.
- **Supporting entrance:** the role line and actions rise 14px and fade in at 0.45s and 0.6s.
- **Hero fly-in, drift and camera:** see Elevation & Depth.
- **The console:** see Components. Scroll drives it directly; the only timed parts are the rings, the pulse, the narration swap and the aperture outline.
- **Scan reveal (fallback plates):** a plate below the fold reads out left to right from `inset(0 100% 0 0)` at brightness 0.5 to `inset(-16px)` over 1.2s, its ticks lock in from 22px out, and its caption follows in 70ms steps.
- **The mark, the ping, the ratio, the timeline:** see Components.
- **Header tuck and nav glide:** see Navigation.
- **Pointer:** see Components; transforms only, 0.4s on the mark's state changes, 0.12s on press.
- **Reduced motion:** no exposure, focus pull, rising, fly-in, drift, camera, scan, lock, header tuck, ping or custom pointer. The console does not run; the plates stack as a list. The mark, the ratio and the timeline rest in their final state.

## Do's and Don'ts

### Do:
- **Do** let the one opening loop carry the page, credited in the footer.
- **Do** re-run the legibility check after any change to the veil, floors, drift, camera or text tokens, on two video frames, and keep dim small text at 4.5:1 or better.
- **Do** keep dust for what is active, chosen or firing.
- **Do** let the serif speak and the mono measure.
- **Do** keep the mark's bits exactly SG in ASCII.
- **Do** keep controls at least 44px tall, action labels literal, and the name whole.
- **Do** give every loop beside text a Pause/Play control, and pause any loop the page is hiding.
- **Do** keep the system cursor for touch, pens, reduced motion and text fields; the custom pointer is for a mouse only.

### Don't:
- **Don't** put a kicker above a heading, or a second italic word in a display line.
- **Don't** use a filter colour anywhere but the credit legend.
- **Don't** put credits, coordinates, legends or instrument chrome on the opening plate.
- **Don't** add drop shadows or glow to surfaces or type. Only the timeline's "now" point glows.
- **Don't** round anything outside the three shape families, or give sections opaque backgrounds that hide the backdrop.
- **Don't** add a second backdrop image. One image carries the page.
- **Don't** lift or pulse the veil below the hero.
- **Don't** animate layout properties (width, height, margin, padding); move things with transform, opacity or clip-path.
- **Don't** tint, duotone or recolour the imagery. Put a void floor under the type instead.
- **Don't** give an action a metaphorical label ("Transmit", "Launch", "Observe").
