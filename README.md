# Luiz Gusmão Portfolio

[![CI](https://github.com/luizgusmao07/portfolio/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/luizgusmao07/portfolio/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/luizgusmao07/portfolio/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/luizgusmao07/portfolio/actions/workflows/deploy.yml)

> Personal portfolio for Luiz Guilherme Tristão Gusmão — Mobile Software Engineer at CloudWalk.

**Live site:** <https://luizgusmao07.github.io/portfolio/>

---

## English

### About

This repository contains Luiz Gusmão's personal portfolio, built to present his professional profile, experience, education, skills and featured projects.

The portfolio currently highlights Luiz as a **Mobile Software Engineer at CloudWalk**, working with **Flutter, Dart, Rust, Product Engineering and AI-assisted Development**.

### Features

- Responsive portfolio UI.
- Light/dark theme with persisted preference.
- Structured sections: Hero, About, Experience, Skills, Projects, Education and Contact.
- Content-first architecture with profile data isolated in `src/content`.
- SEO metadata, Open Graph tags, favicon and social preview image.
- GitHub Actions CI.
- Automatic GitHub Pages deployment from `master`.
- Dependabot updates for npm and GitHub Actions.
- Pull request template and module-level maintainer docs.

### Tech stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions
- GitHub Pages

### Requirements

- Node.js 22+
- npm

### Getting started

```bash
git clone https://github.com/luizgusmao07/portfolio.git
cd portfolio
npm install
npm run dev
```

### Available scripts

```bash
npm run dev           # Start the local development server
npm run build         # Type-check and create a production build
npm run preview       # Preview the production build locally
npm run lint          # Run ESLint
npm run lint:fix      # Run ESLint with autofix
npm run format        # Format files with Prettier
npm run format:check  # Check formatting
npm run typecheck     # Run TypeScript checks
npm run validate      # Run format, lint, typecheck and build
```

### Project structure

```txt
src/
  components/
    layout/      # Page shell components
    sections/    # Portfolio sections
    ui/          # Reusable shadcn/ui primitives
  content/       # Profile, experience, education, skills and projects data
  hooks/         # Reusable React hooks
  lib/           # Utilities
```

### Deployment

Production is deployed to **GitHub Pages** by `.github/workflows/deploy.yml`.

Every commit pushed to `master` triggers:

1. CI validation through `.github/workflows/ci.yml`.
2. Production build.
3. GitHub Pages artifact upload.
4. Deployment to <https://luizgusmao07.github.io/portfolio/>.

The Vite base path is configured through `BASE_PATH`. In GitHub Actions it uses:

```bash
BASE_PATH=/portfolio/
```

The previous Vercel deployment was removed and is no longer used.

### Repository workflow

- `master` is the default branch.
- `master` is protected.
- The `quality` status check is required.
- Force pushes and branch deletion are blocked.
- Use pull requests for regular changes.
- Keep module-level `AGENTS.md` files updated when responsibilities change.

---

## Português

### Sobre

Este repositório contém o portfolio pessoal de Luiz Gusmão, criado para apresentar seu perfil profissional, experiências, formação, habilidades e projetos em destaque.

O portfolio atualmente posiciona Luiz como **Mobile Software Engineer na CloudWalk**, com foco em **Flutter, Dart, Rust, Product Engineering e AI-assisted Development**.

### Funcionalidades

- Interface responsiva.
- Tema claro/escuro com preferência persistida.
- Seções estruturadas: Hero, Sobre, Experiência, Skills, Projetos, Formação e Contato.
- Arquitetura orientada a conteúdo, com dados profissionais isolados em `src/content`.
- SEO básico, Open Graph, favicon e imagem de preview social.
- CI com GitHub Actions.
- Deploy automático no GitHub Pages a partir da branch `master`.
- Dependabot para npm e GitHub Actions.
- Template de Pull Request e documentação modular para manutenção.

### Stack técnica

- React 19
- TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions
- GitHub Pages

### Requisitos

- Node.js 22+
- npm

### Como rodar localmente

```bash
git clone https://github.com/luizgusmao07/portfolio.git
cd portfolio
npm install
npm run dev
```

### Scripts disponíveis

```bash
npm run dev           # Inicia o servidor local
npm run build         # Roda type-check e gera build de produção
npm run preview       # Visualiza o build de produção localmente
npm run lint          # Roda ESLint
npm run lint:fix      # Roda ESLint com autofix
npm run format        # Formata arquivos com Prettier
npm run format:check  # Verifica formatação
npm run typecheck     # Roda validação TypeScript
npm run validate      # Roda format, lint, typecheck e build
```

### Estrutura do projeto

```txt
src/
  components/
    layout/      # Componentes de estrutura da página
    sections/    # Seções do portfolio
    ui/          # Primitivos reutilizáveis do shadcn/ui
  content/       # Dados de perfil, experiência, formação, skills e projetos
  hooks/         # Hooks React reutilizáveis
  lib/           # Utilitários
```

### Deploy

A produção é publicada no **GitHub Pages** por meio do workflow `.github/workflows/deploy.yml`.

Cada commit enviado para a branch `master` dispara:

1. Validação de CI pelo workflow `.github/workflows/ci.yml`.
2. Build de produção.
3. Upload do artefato do GitHub Pages.
4. Deploy em <https://luizgusmao07.github.io/portfolio/>.

O base path do Vite é configurado por `BASE_PATH`. No GitHub Actions, o valor usado é:

```bash
BASE_PATH=/portfolio/
```

O deploy anterior na Vercel foi removido e não é mais utilizado.

### Fluxo do repositório

- `master` é a branch default.
- `master` está protegida.
- O status check `quality` é obrigatório.
- Force push e deleção da branch estão bloqueados.
- Use Pull Requests para alterações regulares.
- Mantenha os arquivos `AGENTS.md` atualizados quando responsabilidades mudarem.

## Documentation / Documentação

- [Maintainer/agent guide](AGENTS.md)
- [Modernization plan](docs/portfolio-modernization-plan.md)
- [Modernization progress](docs/modernization-progress.md)
