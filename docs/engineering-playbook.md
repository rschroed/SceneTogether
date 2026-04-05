# Engineering Playbook

## Planning gate

No code starts before a short written plan is accepted.

Minimum plan format:

1. Problem
2. Scope
3. Proposed approach
4. Risks and unknowns
5. Validation

If the task is too small to justify a long plan, it still needs a one-paragraph version of the same five items.

## Issue policy

Every meaningful code change must tie back to a GitHub issue.

Each issue should contain:

- problem statement
- why it matters
- acceptance criteria
- out-of-scope notes
- implementation notes, if already known

Good issue boundaries:

- one user-visible behavior change
- one infrastructure concern
- one cleanup with clear limits

Bad issue boundaries:

- mixed feature plus refactor plus cleanup
- vague buckets like “improve app”
- work that cannot be validated

## Branch policy

- Branch from `main`.
- Create the branch only after the issue and plan exist.
- Keep branch history focused on one issue.
- Rebase or merge from `main` regularly for longer-lived branches.

Suggested naming:

- `codex/issue-<number>-<slug>`
- `codex/spike-<slug>`
- `codex/chore-<slug>`

## Pull request policy

Open a draft PR early when useful, but only after the plan is settled.

Every PR should answer:

- What problem does this solve?
- What changed?
- How was it validated?
- What remains intentionally unfinished?

PRs should stay reviewable:

- target under roughly 400 net lines when possible
- separate refactors from behavior changes
- split follow-up work into new issues

## Coding rules

- Prefer directness over indirection.
- Introduce abstractions only after repetition is proven.
- Preserve existing conventions unless there is a strong reason to change them.
- Add comments only where the reasoning is not obvious from the code.
- Make invalid states harder to represent.

## Testing rules

- Validate the changed behavior, not just touched files.
- Prefer automated tests for durable behavior.
- If tests are missing, document the exact manual checks performed.
- If validation could not be run, call that out explicitly in the PR.

## Documentation rules

Update docs when a change affects:

- contributor workflow
- architecture or data flow
- operational steps
- product constraints or vocabulary

## Decision log rule

If a decision is likely to be revisited, record it in a tracked issue or PR discussion. Do not rely on chat memory alone.
