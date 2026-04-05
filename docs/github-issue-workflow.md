# GitHub Issue Workflow

## Goal

Keep work visible, scoped, and traceable from idea to merged change.

## Lifecycle

### 1. Capture

Open an issue when:

- there is a new feature idea worth tracking
- a bug has a reproducible symptom
- technical debt has a concrete payoff
- a follow-up emerges from active work

Each issue must include:

- title with a clear action or problem
- concise context
- acceptance criteria
- out-of-scope note

### 2. Refine

Before implementation:

- confirm the issue is still worth doing now
- tighten scope
- identify dependencies
- add a lightweight plan

If the work is too large, split it before coding begins.

### 3. Implement

During implementation:

- link the branch and PR to the issue
- keep status updated in the issue or PR
- create follow-up issues rather than expanding scope mid-flight

### 4. Validate

Before merge:

- confirm acceptance criteria
- record validation performed
- list any residual risk

### 5. Close

Close the issue only when the shipped behavior matches the issue goal.

If work was partial:

- update the issue
- narrow the title or acceptance criteria
- open follow-up issues for remaining scope

## Labels

Use a small, durable label set:

- `type:feature`
- `type:bug`
- `type:chore`
- `type:spike`
- `priority:p0`
- `priority:p1`
- `priority:p2`
- `status:blocked`
- `status:needs-plan`
- `status:in-progress`
- `status:in-review`

Avoid label sprawl.

## Issue template guidance

Preferred issue sections:

1. Context
2. Problem
3. Acceptance criteria
4. Out of scope
5. Proposed plan
6. Validation

## Non-negotiables

- no silent work
- no branch without an issue
- no code without a plan
- no merge without recorded validation
