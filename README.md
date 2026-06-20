# Portfolio

Personal portfolio for Luiz Guilherme Tristão Gusmão, Mobile Software Engineer at CloudWalk.

## Live demo

- Current target: GitHub Pages (`https://luizgusmao07.github.io/portfolio/`)
- Previous deployment: Vercel (`https://portfolio-luiz-murex.vercel.app/`)

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions

## Getting started

Prerequisites: Node.js 22+.

```bash
npm install
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

Run all local validations:

```bash
npm run validate
```

## Project structure

```txt
src/
  components/
    layout/      # page shell components
    sections/    # portfolio sections
    ui/          # reusable shadcn/ui primitives
  content/       # profile, experience, education, skills and projects data
  hooks/         # reusable hooks
  lib/           # utilities
```

## Deployment

Production deployment is configured with GitHub Pages through `.github/workflows/deploy.yml`.

The Vite `base` path is controlled by `BASE_PATH`. GitHub Pages uses `/portfolio/` in CI.

## Repository workflow

- Open a pull request for changes targeting `main`.
- CI runs formatting, linting, type checking and build.
- Keep `CHANGELOG.md` updated for notable changes.

## Documentation

- Modernization plan: [`docs/portfolio-modernization-plan.md`](docs/portfolio-modernization-plan.md)
- Progress tracking: [`docs/modernization-progress.md`](docs/modernization-progress.md)
- Engineering standards: [`GOOD_PRACTICES.md`](GOOD_PRACTICES.md)
- Changelog: [`CHANGELOG.md`](CHANGELOG.md)
