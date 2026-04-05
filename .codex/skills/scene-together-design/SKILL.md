---
name: scene-together-design
description: Use for SceneTogether frontend and design-system work when you need tight visual control, including design principles, UI-system constraints, pattern reuse, and screenshot-driven review expectations.
---

# SceneTogether Design

Use this skill for any frontend implementation, visual design planning, component design, or UI review in this repository.

## Required reading

1. Read [AGENTS.md](../../../AGENTS.md) first.
2. Read [references/design-principles.md](references/design-principles.md) for the product's visual bar.
3. Read [references/ui-system.md](references/ui-system.md) for implementation constraints.

## Workflow

Before writing frontend code:

1. Confirm there is a tracked issue and written plan.
2. Identify the primary user decision on the screen.
3. Name the dominant focal point.
4. List which existing patterns or primitives should be reused.
5. State whether new visual patterns are required.

If a new pattern is required, justify it briefly before implementation.

## Default behavior

- Optimize for one strong focal point per screen.
- Prefer strong typography and layout hierarchy over extra decoration.
- Keep screens specific to decision-making, not generic app chrome.
- Reuse tokens and primitives instead of inventing local styling values.
- Treat mobile as the primary design surface.
- Pull visual energy from poster culture, punk-flyer composition, and dark cinematic mobile UI without letting the interface become chaotic.

## Review standard

For UI reviews, check in this order:

1. decision clarity
2. hierarchy and focal point
3. pattern consistency
4. mobile quality
5. motion restraint
6. visual polish
7. fidelity to the approved visual direction

## Output expectations

When doing UI work, report:

1. the primary decision the screen supports
2. the patterns reused
3. any new patterns introduced
4. validation artifacts needed, including screenshots
