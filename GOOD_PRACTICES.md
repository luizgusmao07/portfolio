# Good Practices and Engineering Standards

This document outlines code quality, consistency rules, and developer workflow used in this project.

## Formatting (Prettier)

- Prettier with `prettier-plugin-tailwindcss` sorts Tailwind classes and applies opinionated formatting (no semicolons, single quotes, width 100).
- Commands:

```
npm run format        # write changes
npm run format:check  # verify only
```

## Linting (ESLint)

Flat ESLint config (`eslint.config.js`) with:

- `@eslint/js` and `typescript-eslint` recommended rules
- React Hooks and Vite Fast Refresh rules
- Import sorting via `eslint-plugin-simple-import-sort`
- Accessibility via `eslint-plugin-jsx-a11y`
- `eslint-config-prettier` to avoid conflicts with Prettier

Key rules:

- `simple-import-sort/imports` and `simple-import-sort/exports` (warn)
- `jsx-a11y/alt-text`, `jsx-a11y/anchor-is-valid`, `jsx-a11y/no-autofocus` (warn)
- `@typescript-eslint/consistent-type-imports` (warn)
- `@typescript-eslint/no-unused-vars` with `_`-ignored args (warn)
- `react-refresh/only-export-components` (warn)

Commands:

```
npm run lint      # analyze
npm run lint:fix  # autofix
```

## Type checking

TypeScript is configured strict in `tsconfig.app.json`.

```
npm run typecheck
```

## Pre-commit hook

Husky + lint-staged run on staged files:

- `eslint --fix` then `prettier --write` for `*.{ts,tsx,js,jsx}`
- `prettier --write` for `*.{css,md,json}`

Hook lives in `.husky/pre-commit` and executes `npx lint-staged`.

## Import aliases

Use absolute imports from `@/*` (configured in `tsconfig*.json` and `vite.config.ts`).

## Recommended editor setup

- Enable format on save and ESLint integration in your editor.
- Respect `.editorconfig` for line endings and indentation.

## CI (optional)

When you add GitHub Actions, run these steps:

```
npm ci
npm run typecheck
npm run lint
npm run format:check
npm run build
```

## Accessibility and UX

- Provide `alt` text for images and icons when meaningful.
- Ensure focus states are visible and keyboard navigation is supported.
- Use semantic HTML where possible.

## Performance

- Prefer memoization only when profiling shows real benefit.
- Keep bundle size reasonable; tree-shake imports from icon libraries (e.g., `lucide-react`).

## Testing (future-friendly)

- Consider adding React Testing Library for critical components.
- Smoke-test rendering of core pages and interactive widgets.
