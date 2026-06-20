# src/components/ui

## Purpose

This module contains reusable UI primitives, mostly based on shadcn/ui and Radix primitives.

Examples:

- Button
- Card
- Badge
- Avatar
- Dialog
- Dropdown
- Form controls

## Maintenance rules

- Keep these components generic and portfolio-agnostic.
- Do not add Luiz-specific content, project data or professional text here.
- Preserve accessibility behavior from Radix/shadcn components.
- Prefer extending components through props and variants rather than creating one-off styles.
- If a component exports variants, existing Fast Refresh warnings may appear. These warnings are known and do not currently block build or deploy.

## Validation

After UI primitive changes, run:

```bash
npm run validate
```
