# src/content

## Purpose

This module is the source of truth for portfolio content.

It contains professional data and localized UI copy used by the app, such as:

- Profile and contact information.
- Portuguese and English copy.
- Work experience.
- Education.
- Skills and current focus areas.

## Files

- `site.ts`: single source of truth for profile data, translations, experience, education and skills.

## Maintenance rules

- Prefer updating these files when changing portfolio text or professional data.
- Avoid duplicating the same profile data in React components.
- Keep exports typed with `as const` when possible.
- Keep content concise and suitable for public presentation.
- If adding a new content domain, create a dedicated file here and consume it from a section component.

## Validation

After content changes, run:

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
