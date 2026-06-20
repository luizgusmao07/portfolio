# src/components/layout

## Purpose

This module contains structural layout components used to compose the page shell.

Current responsibilities include:

- Global header/navigation.
- Width and spacing constraints through `Container`.

## Maintenance rules

- Keep layout components generic and reusable.
- Do not place long portfolio copy here; use `src/content` and section components instead.
- Navigation links should point to stable section IDs.
- Header controls, such as the theme toggle, should remain accessible by keyboard and screen readers.
- Use `Container` to keep page width consistent across sections.

## Validation

After layout changes, run:

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
