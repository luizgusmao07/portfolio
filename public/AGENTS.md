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
