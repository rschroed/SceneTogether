# SceneTogether

SceneTogether is a structured decision surface for small groups trying to answer one question quickly:

> Which movie should we go see, and when?

The repository now contains the first static app shell for that product direction, plus the process and design guardrails that shape how the product should evolve.

## Current app shell

The first frontend slice is intentionally lean:

- `/` is a branded entry page for the product wedge
- `/g/friday-night` is a static sample group board
- all content is local and seeded
- no auth, persistence, APIs, or external movie data are included yet

Backend, account, and data decisions are intentionally deferred until the shell is proven.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Key docs

- [AGENTS.md](./AGENTS.md)
- [docs/design-principles.md](./docs/design-principles.md)
- [docs/agent-topology.md](./docs/agent-topology.md)
- [docs/engineering-playbook.md](./docs/engineering-playbook.md)
- [docs/github-issue-workflow.md](./docs/github-issue-workflow.md)
- [docs/github-repo-settings.md](./docs/github-repo-settings.md)
- [docs/product-foundation.md](./docs/product-foundation.md)
- [docs/ui-system.md](./docs/ui-system.md)

## Repo-local skills

- `.codex/skills/scene-together-delivery`
- `.codex/skills/scene-together-design`

Use the delivery skill for planning and execution discipline, and the design skill for frontend and design-system work that needs tight visual control.
