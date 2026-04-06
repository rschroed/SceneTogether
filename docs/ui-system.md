# UI System

This document turns the design principles into implementation constraints.

## Design tokens

All production UI should resolve through shared tokens once the frontend exists.

The current color and typography foundations sheet lives in Paper as a visual companion to this document:
https://app.paper.design/file/01KNG6S0KT4QKNXSDFB2HFQQ5A

This repo remains the normative written source; the Paper page is the companion artifact for visual alignment.

Token categories to define early:

- color
- typography
- spacing
- radius
- shadow
- border
- motion
- layout width
- z-index
- texture or graphic overlay intensity

## Token rules

- Do not hardcode one-off colors in feature components when token equivalents exist.
- Do not introduce ad hoc spacing scales.
- Do not introduce new radii or shadow families casually.
- Prefer semantic tokens over raw tokens for component states.
- Keep the accent system narrow and intentional.

Example semantic groups:

- `surface.canvas`
- `surface.panel`
- `surface.elevated`
- `text.primary`
- `text.muted`
- `accent.primary`
- `accent.secondary`
- `accent.positive`
- `accent.warning`
- `accent.negative`

## Recommended initial token direction

This is not a final token file, but it is the design direction we should implement against.

### Color

- base surfaces should live in black, charcoal, aubergine, and deep navy territory
- primary accents should come from magenta, fuchsia, violet, and electric blue
- secondary signal accents can include acid yellow or sharp red in limited doses
- text should use warm white or soft off-white on dark surfaces

### Texture

- default UI surfaces should be clean
- optional texture tokens should be subtle and reserved for hero zones, splash states, or promotional surfaces

### Radius

- prefer medium-to-large radii for touch surfaces
- avoid tiny default web radii unless a component is intentionally sharp

## Typography system

Typography should carry much of the product character.

Define and reuse a limited set of text roles:

- display
- hero title
- section heading
- card title
- body
- label
- metadata

Rules:

- use few sizes with strong contrast between roles
- avoid nearly-identical text sizes
- prefer readable density over cramming more content
- line length should support scanning on mobile
- reserve the most expressive type for hero moments and major labels

### Type direction

Preferred pairing:

- one high-impact display face with condensed or poster-like energy
- one clean sans-serif for UI and body text

Do not:

- use the display face for dense paragraphs
- mix multiple expressive display faces
- fall back to bland default stacks for branded surfaces unless temporarily blocked

Use the Paper foundations sheet above as the current reference for the approved color palette, font pairing, and text-role examples when translating these rules into tokens and primitives.

## Layout system

Each screen should follow a deliberate layout model:

- hero or primary decision zone
- supporting context zone
- secondary utility zone

Layout rules:

- one dominant content column on mobile
- clear containment boundaries
- consistent vertical rhythm
- avoid over-nesting cards inside cards
- break the page rhythm intentionally, not randomly

## Component policy

Build and reuse a small primitive set before inventing feature-specific components.

Recommended early primitives:

- page shell
- hero banner
- section header
- card
- poster tile
- stack
- inline cluster
- button
- input
- chip
- status indicator
- modal or sheet

Rules:

- prefer composition of primitives over bespoke layout code
- introduce new primitives only when reused or clearly foundational
- avoid near-duplicate variants that differ only slightly in spacing or color
- do not let every feature invent its own card style

## Imagery policy

Movie imagery should feel curated and bold.

Preferred usage:

- large poster crops
- dramatic edge-to-edge image moments
- poster-derived color atmospheres

Avoid:

- tiny thumbnails carrying too much importance
- stock-photo style compositions
- collage overload in product flows

## Motion policy

Motion should reinforce state change and hierarchy.

Allowed uses:

- page or section entrance
- state confirmation
- transitions between candidate and plan states
- progressive disclosure
- subtle glow or emphasis on the current decision target

Avoid:

- continuous decorative animation
- motion that delays interaction
- multiple competing animated regions
- flashy effects that feel game-like unless explicitly intended

## Visual review checklist

Every meaningful UI PR should answer:

- Which approved tokens were used?
- Which shared components or primitives were used?
- Did this introduce a new visual pattern?
- If yes, why was extension impossible?
- Were any optional screenshots or visual artifacts included where they materially helped review?
- Does the hierarchy still feel bold and legible on a phone?

## Enforcement guidance

Once the frontend exists, enforce these mechanically where possible:

- central token files
- lint rules for banned raw values where practical
- shared component library
- optional screenshot review in PRs where helpful
- visual regression snapshots for key screens

## Preferred implementation path

1. Define tokens.
2. Build primitives.
3. Build feature components on top of primitives.
4. Reject raw styling drift in feature code.
