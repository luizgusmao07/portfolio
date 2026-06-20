# public

## Purpose

This directory contains static assets served directly by Vite.

Current assets include:

- `favicon.svg`: browser favicon.
- `og-image.svg`: social preview image used by Open Graph/Twitter metadata.

## Maintenance rules

- Keep public assets optimized and intentional.
- Use stable filenames when they are referenced from `index.html`.
- If replacing `og-image.svg`, verify social metadata still points to the correct file.
- Avoid storing large unused assets here.

## Validation

After asset changes, run:

```bash
npm run build
```

For metadata-related changes, also inspect `index.html`.

## Maintaining this AGENTS.md

Update this file in the same change when:

- The module gains, loses or renames important files.
- The module responsibility changes.
- The maintenance rules become inaccurate.
- Validation requirements change.
- Another `AGENTS.md` starts or stops depending on this module.

Keep this file short, practical and specific to this directory. Do not duplicate large sections from the global `AGENTS.md`; link or reference broader rules instead.
