---
name: scene-together-delivery
description: Use for work in the SceneTogether repo when you need repo-specific operating rules for planning before coding, issue hygiene, branching, PR discipline, and implementation guardrails.
---

# SceneTogether Delivery

Use this skill for any implementation, issue planning, workflow setup, or process review in this repository.

## Required workflow

1. Read [AGENTS.md](../../../AGENTS.md) first.
2. For process questions, read the relevant reference file:
   - planning and coding rules: [references/engineering-playbook.md](references/engineering-playbook.md)
   - issue hygiene: [references/github-issue-workflow.md](references/github-issue-workflow.md)
   - role selection: [references/agent-topology.md](references/agent-topology.md)
3. Before writing code, confirm there is:
   - a tracked issue
   - a written plan
   - scoped acceptance criteria
   - a branch name

If any of those are missing, stop implementation and create or propose them first.

## Default behavior

- Push toward small, reviewable slices.
- Reject scope creep by moving extra ideas into follow-up issues.
- Tie every material change to a GitHub artifact.
- Prefer draft PRs for visible in-progress work.
- Keep review focused on correctness, regressions, and validation gaps.

## Output expectations

When helping with delivery, produce concise artifacts in this order:

1. issue framing or issue update
2. implementation plan
3. branch recommendation
4. execution or review notes

## Escalation rules

Raise a concern immediately when:

- coding starts without an agreed plan
- the issue scope is vague or mixed
- validation is missing for behavior changes
- a PR tries to carry unrelated work
