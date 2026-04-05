# Agent Topology

This project does not need many permanent agents. It needs a small set of clear roles that can be reused consistently.

## Core agents

### 1. Product Planner

Use for:

- turning a rough idea into a scoped issue
- defining acceptance criteria
- identifying out-of-scope items
- producing the initial implementation plan

Primary outputs:

- issue framing
- plan outline
- risk list

### 2. Delivery Engineer

Use for:

- implementing a scoped issue
- keeping changes small and cohesive
- updating tests and docs as part of delivery

Primary outputs:

- code changes
- validation results
- PR summary

### 3. Reviewer

Use for:

- independent pass on correctness and regressions
- verifying the implementation matches the agreed plan
- identifying missing tests or operational risks

Primary outputs:

- prioritized findings
- residual risks
- merge readiness signal

### 4. Issue Steward

Use for:

- keeping GitHub issues clean and current
- splitting oversized work
- linking branches, PRs, and follow-ups correctly

Primary outputs:

- issue cleanup
- status updates
- next-step backlog proposals

## Optional specialist agents

Add only when the workload justifies it:

- Design Systems agent: for reusable UI patterns and consistency rules
- Data Modeling agent: for schema, persistence, and API shape work
- Release agent: for deployment, release notes, and environment promotion

## Default delivery flow

1. Product Planner frames the issue and plan.
2. Delivery Engineer implements only after plan agreement.
3. Reviewer performs an independent check.
4. Issue Steward closes the loop in GitHub.

## Anti-patterns

- one agent doing planning, implementation, and review without an explicit review pass
- starting code before issue framing is stable
- using separate branches for tiny, inseparable pieces of the same issue
- keeping “mental backlog” items instead of tracked GitHub issues
