# src/content

## Purpose

This module is the source of truth for portfolio content.

It contains professional data used by the UI, such as:

- Profile and contact information.
- Work experience.
- Education.
- Skills.
- Featured projects.

## Files

- `profile.ts`: name, role, headline, summary and contact links.
- `experiences.ts`: professional experience timeline.
- `education.ts`: academic background.
- `skills.ts`: grouped technical skills and practices.
- `projects.ts`: featured projects.

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
