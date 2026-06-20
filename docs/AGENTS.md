# docs

## Purpose

This directory contains project documentation beyond the README.

Current documents:

- `portfolio-modernization-plan.md`: phased plan used during the portfolio modernization.
- `modernization-progress.md`: execution history and validation notes from the modernization work.

## Maintenance rules

- Keep documentation factual and up to date.
- Prefer concise operational notes over duplicated README content.
- If a process changes, update both the relevant documentation and the global `AGENTS.md` if maintainers/agents need to know about it.
- Historical documents can remain as records, but avoid treating outdated planning notes as current source of truth.

## Validation

After docs changes, run:

```bash
npm run format:check
```
