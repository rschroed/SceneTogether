# Recommended GitHub Repo Settings

These settings turn the process docs into real guardrails.

## Branch protection for `main`

Enable:

- require pull request before merging
- do not require an approval while the repo is primarily single-maintainer
- require conversation resolution before merging
- require status checks before merging
- require branches to be up to date before merging
- restrict direct pushes

Do not allow force pushes to `main`.

## Suggested status checks

Require only stable checks that represent actual workflow discipline. For now, keep:

- Branch name policy
- PR body policy

As CI is added later, consider checks such as:

- lint
- test
- build
- typecheck

Do not require checks that are flaky, protected behind external auth, or not consistently maintained.

## Vercel previews

Vercel preview deploys are useful feedback, but they are not a merge gate for the repo right now.

- treat preview success as a helpful signal
- do not block merges on preview failures unless the deployment setup becomes reliable and intentionally required

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
- Review is encouraged, but not required while the repo is primarily single-maintainer.
- If a review does happen, the reviewer should check against the issue acceptance criteria and plan.
- Reviewers should call out missing validation explicitly.
- If the team grows, reintroduce required approval rather than relying on custom norms.

## Operational rule

If the repository settings and the written docs conflict, prefer the stricter rule until the docs are updated.
