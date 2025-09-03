# Portfolio

Modern personal portfolio built with React, Vite, Tailwind CSS v4, and shadcn/ui.

## Live demo

- URL: https://portfolio-luiz-murex.vercel.app/

## Features

- Responsive, accessible UI with a neutral design and purple accents
- Light/dark theme toggle persisted to `localStorage`
- Reusable UI primitives (buttons, cards, dialogs, inputs, etc.) powered by shadcn/ui and Radix
- Example `TodoList` system to showcase component patterns and state management

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui + Radix primitives

## Getting started

Prerequisites: Node.js 18+.

Install dependencies and run the dev server:

```
npm install
npm run dev
```

Build and preview production:

```
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    system/         # feature components (e.g., TodoList)
    ui/             # reusable UI primitives (shadcn-styled)
  lib/              # utilities and domain logic
  assets/           # icons/images
  main.tsx          # app bootstrap
  index.css         # design tokens and Tailwind layers
```

## Theming

The theme is toggled with `document.documentElement.classList.toggle('dark')` and stored in `localStorage`.

## Scripts

- `npm run dev`: start development server
- `npm run build`: type-check and build for production
- `npm run preview`: preview the production build

## Good practices and engineering standards

See `GOOD_PRACTICES.md` for formatting, linting, type checking, pre-commit hooks, and CI recommendations.
