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
