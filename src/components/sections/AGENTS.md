# src/components/sections

## Purpose

This module contains page-level portfolio sections.

Each component should represent a meaningful section of the site, for example:

- Hero
- About
- Experience
- Skills
- Projects
- Education
- Contact

## Maintenance rules

- Keep sections focused on layout and presentation.
- Import professional data from `src/content` instead of hardcoding it.
- Use reusable primitives from `src/components/ui` for cards, badges, buttons and similar UI pieces.
- Keep section IDs stable because navigation links depend on them.
- Use semantic headings and preserve accessible structure.
- Prefer responsive Tailwind classes over custom CSS.

## When to add a new section

Add a new section here when the site needs a new top-level content block. If the section requires new data, add that data to `src/content` first.

## Validation

After section changes, run:

```bash
npm run validate
```
