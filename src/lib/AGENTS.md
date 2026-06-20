# src/lib

## Purpose

This module contains generic utilities shared across the application.

Current responsibilities include:

- Class name composition helpers.

## Maintenance rules

- Keep utilities generic and framework-friendly.
- Avoid adding business or portfolio content here.
- Prefer small pure functions.
- If a utility becomes domain-specific, consider moving it closer to the feature that uses it.

## Validation

After utility changes, run:

```bash
npm run validate
```

## Maintaining this AGENTS.md

Update this file in the same change when:

- The module gains, loses or renames important files.
- The module responsibility changes.
- The maintenance rules become inaccurate.
- Validation requirements change.
- Another `AGENTS.md` starts or stops depending on this module.

Keep this file short, practical and specific to this directory. Do not duplicate large sections from the global `AGENTS.md`; link or reference broader rules instead.
