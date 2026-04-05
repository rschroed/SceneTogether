# SceneTogether Agent Contract

This file defines the default operating contract for anyone working in this repository, including Codex agents and human contributors.

## First principles

- Build the smallest thing that meaningfully reduces group decision friction.
- Prefer clarity over cleverness in both product and code.
- Keep scope narrow. v1 is a decision layer for existing groups, not a social network.
- Every change must improve or protect one of the core outcomes:
  - clear options
  - visible intent
  - easy convergence

## Work sequence

No one starts writing code until the following exist:

1. A tracked issue with a clear problem statement.
2. A short implementation plan agreed in writing.
3. Explicit scope boundaries, including what is out of scope.
4. A named branch for the work.

If any of these are missing, stop and create them first.

## Required pre-coding checklist

Before editing code, capture:

- issue link or issue number
- user or product outcome
- proposed approach
- risks or unknowns
- validation plan

This can live in the issue body, issue comments, or PR description draft, but it must exist before code changes start.

## Branch policy

- Never work directly on `main`.
- Use one branch per issue or tightly-related slice of work.
- Branch names must start with `codex/` unless a human explicitly asks for another prefix.
- Preferred formats:
  - `codex/issue-123-short-slug`
  - `codex/spike-short-slug`
  - `codex/chore-short-slug`

## GitHub hygiene

- One issue should map to one primary branch.
- One PR should solve one coherent problem.
- Draft PRs are preferred for in-progress work.
- PR descriptions must include:
  - problem
  - plan
  - changes made
  - validation performed
  - follow-up work
- Do not merge with unresolved review comments unless they are explicitly waived.
- Do not self-merge without passing validation unless the human owner explicitly accepts the risk.

## Coding standards

- Prefer simple, explicit code over abstraction-heavy designs.
- Keep functions and components small enough to understand in one pass.
- Avoid speculative architecture.
- Add or update tests for behavior changes when test infrastructure exists.
- Do not mix unrelated refactors into feature work.
- Leave breadcrumbs for future contributors only where complexity is non-obvious.
- For frontend work, follow the visual governance docs before inventing new patterns:
  - `docs/design-principles.md`
  - `docs/ui-system.md`

## Visual design control

- Visual consistency is a product requirement, not polish work.
- New UI patterns require justification; default to extending approved patterns.
- UI PRs may include mobile and desktop screenshots when they materially help review.
- Arbitrary colors, spacing, typography, and motion values should be avoided in feature code when design tokens exist.

## Review standard

Reviews should prioritize:

1. correctness
2. behavioral regressions
3. missing validation
4. maintainability risk
5. visual consistency
6. style consistency

## Definition of ready

An issue is ready for implementation when:

- the goal is clear
- acceptance criteria exist
- dependencies are known
- open questions are either resolved or explicitly noted
- a lightweight implementation plan has been accepted

## Definition of done

Work is done when:

- acceptance criteria are met
- validation was performed or the gap is called out explicitly
- docs and issue state are updated
- follow-up work is split into new tracked issues instead of being hidden in TODOs
