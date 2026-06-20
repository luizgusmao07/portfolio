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
