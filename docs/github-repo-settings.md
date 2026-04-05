# Recommended GitHub Repo Settings

These settings turn the process docs into real guardrails.

## Branch protection for `main`

Enable:

- require pull request before merging
- require at least 1 approval
- dismiss stale approvals when new commits are pushed
- require conversation resolution before merging
- require status checks before merging
- require branches to be up to date before merging
- restrict direct pushes

Do not allow force pushes to `main`.

## Suggested status checks

As CI is added, require checks such as:

- lint
- test
- build
- typecheck

Do not require checks that are flaky or not consistently maintained.

## Merge strategy

Recommended:

- squash merge enabled
- merge commit disabled
- rebase merge optional

This keeps history aligned to issue-sized units of work.

## Branch naming convention

GitHub cannot reliably enforce branch names by itself without extra automation, so treat this as a policy:

- `codex/issue-<number>-<slug>`
- `codex/spike-<slug>`
- `codex/chore-<slug>`

If strict enforcement is needed later, add a CI check that validates branch names on PR open.

## Labels

Create and maintain only a small core label set:

- `type:feature`
- `type:bug`
- `type:chore`
- `type:spike`
- `priority:p0`
- `priority:p1`
- `priority:p2`
- `status:needs-plan`
- `status:blocked`
- `status:in-progress`
- `status:in-review`

## Review expectations

- PR author links the issue.
- Reviewer checks against the issue acceptance criteria and plan.
- Reviewer calls out missing validation explicitly.
- PR should not be approved if the linked issue lacks a plan.

## Operational rule

If the repository settings and the written docs conflict, prefer the stricter rule until the docs are updated.
