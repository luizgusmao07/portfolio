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

## Maintaining this AGENTS.md

Update this file in the same change when:

- The module gains, loses or renames important files.
- The module responsibility changes.
- The maintenance rules become inaccurate.
- Validation requirements change.
- Another `AGENTS.md` starts or stops depending on this module.

Keep this file short, practical and specific to this directory. Do not duplicate large sections from the global `AGENTS.md`; link or reference broader rules instead.
