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

## Maintaining this AGENTS.md

Update this file in the same change when:

- The module gains, loses or renames important files.
- The module responsibility changes.
- The maintenance rules become inaccurate.
- Validation requirements change.
- Another `AGENTS.md` starts or stops depending on this module.

Keep this file short, practical and specific to this directory. Do not duplicate large sections from the global `AGENTS.md`; link or reference broader rules instead.
