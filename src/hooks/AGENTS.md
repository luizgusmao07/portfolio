# src/hooks

## Purpose

This module contains reusable React hooks.

Current responsibilities include:

- Theme state and persistence through `useTheme`.

## Maintenance rules

- Keep hooks focused on reusable behavior, not presentation.
- Avoid direct coupling to specific page sections unless the hook is intentionally section-specific.
- Keep browser APIs guarded when needed.
- Preserve localStorage keys when changing persisted behavior, or document migration implications.
- Return small, predictable APIs from hooks.

## Validation

After hook changes, run:

```bash
npm run validate
```
