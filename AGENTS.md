# AGENTS.md

This file documents how agents and maintainers should work in this repository.

## Project overview

This is Luiz Gusmão's personal portfolio, built with React, TypeScript, Vite, Tailwind CSS and shadcn/ui. The site is deployed automatically to GitHub Pages from the `master` branch.

## Source of truth

- Professional content lives in [`src/content/`](src/content/AGENTS.md).
- Page sections live in [`src/components/sections/`](src/components/sections/AGENTS.md).
- Layout components live in [`src/components/layout/`](src/components/layout/AGENTS.md).
- Shared UI primitives live in [`src/components/ui/`](src/components/ui/AGENTS.md).
- Hooks live in [`src/hooks/`](src/hooks/AGENTS.md).
- Generic utilities live in [`src/lib/`](src/lib/AGENTS.md).
- Public/static assets live in [`public/`](public/AGENTS.md).
- Operational documentation lives in [`docs/`](docs/AGENTS.md).

## Development workflow

Before committing changes, run:

```bash
npm run validate
```

This runs formatting checks, linting, type checking and production build.

## Deployment workflow

Every commit pushed to `master` triggers:

1. CI via `.github/workflows/ci.yml`.
2. GitHub Pages build and deploy via `.github/workflows/deploy.yml`.
3. An automated GitHub Release tagged as `deploy-<run_number>` after a successful deployment.

Production URL:

```txt
https://luizgusmao07.github.io/portfolio/
```

## Branch rules

- `master` is the default branch.
- `master` is protected.
- Required status check: `quality`.
- Force pushes and branch deletion are blocked.
- Branches are automatically deleted after pull requests are merged.

## Maintenance guidelines

- Prefer editing content in `src/content` instead of hardcoding professional text in components.
- Keep components small and section-oriented.
- Keep shadcn/ui primitives generic; do not put portfolio-specific business content inside `src/components/ui`.
- Update module-level `AGENTS.md` files when a folder's responsibility changes.
- Keep README focused on project usage and repository overview.

## Maintaining this AGENTS.md

Update this file in the same change when:

- The module gains, loses or renames important files.
- The module responsibility changes.
- The maintenance rules become inaccurate.
- Validation requirements change.
- Another `AGENTS.md` starts or stops depending on this module.

Keep this file short, practical and specific to this directory. Do not duplicate large sections from the global `AGENTS.md`; link or reference broader rules instead.
