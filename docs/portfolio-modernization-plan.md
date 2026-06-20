# Plano de modernização do portfolio

Data de criação: 2026-06-20

Este documento organiza o plano de atualização do portfolio em fases independentes. O objetivo é atualizar o conteúdo profissional de Luiz Guilherme Tristão Gusmão, melhorar a qualidade técnica do projeto e preparar o repositório para um fluxo simples, confiável e profissional de manutenção, CI, deploy e releases.

## Objetivos principais

- Atualizar o posicionamento profissional para **Mobile Software Engineer at CloudWalk, Inc.**
- Refletir as experiências mais recentes do LinkedIn/currículo.
- Reorganizar o código para facilitar manutenção e evolução.
- Melhorar UX, acessibilidade, SEO e performance básica.
- Criar CI simples no GitHub Actions.
- Migrar o deploy da Vercel para outra plataforma, preferencialmente GitHub Pages.
- Configurar boas práticas no GitHub: branch protection, Dependabot, templates e releases.
- Documentar o processo para deixar claro o que foi feito e o que ainda falta.

## Contexto atual

### Conteúdo atual do site

O site ainda apresenta Luiz como **Customer Support Engineer Intern**, com foco em tecnologias como React, TypeScript, Java, Spring Boot e ferramentas gerais de desenvolvimento.

### Conteúdo atualizado a partir do currículo/LinkedIn

Perfil atual:

- **Mobile Software Engineer at CloudWalk, Inc.**
- Flutter, Dart, Rust
- Mobile Development
- Product Engineering
- AI-assisted Development

Experiências recentes:

- **Mobile Software Engineer** — CloudWalk, Inc. — maio/2026 até atual
- **Customer Support Engineer II** — CloudWalk, Inc. — fevereiro/2026 até maio/2026
- **Customer Support Engineer I** — CloudWalk, Inc. — setembro/2025 até janeiro/2026
- **Customer Support Engineer Intern** — CloudWalk, Inc. — junho/2025 até setembro/2025

Formação:

- **FATEC Ipiranga Pastor Enéas Tognini** — Tecnólogo em Análise e Desenvolvimento de Sistemas — janeiro/2025 até dezembro/2026
- **ETEC Heliópolis** — Técnico em Desenvolvimento de Sistemas — fevereiro/2022 até dezembro/2024

## Fase 1 — Atualização de conteúdo profissional

### Escopo

- Atualizar headline principal para refletir o cargo atual.
- Atualizar a seção `About Me`/`Sobre mim`.
- Atualizar timeline de experiências.
- Atualizar formação acadêmica.
- Atualizar skills principais.
- Corrigir links de contato, especialmente o `mailto`.
- Decidir idioma principal do site: português, inglês ou bilíngue.

### Sugestão de conteúdo

Headline:

```txt
Mobile Software Engineer at CloudWalk
Flutter, Dart, Rust, Product Engineering and AI-assisted Development
```

Resumo em português:

```txt
Atuo como Mobile Software Engineer na CloudWalk, com foco na construção e melhoria de experiências mobile em produtos como InfinitePay e JIM US.

No dia a dia, trabalho principalmente com Dart, Flutter e Rust, além de utilizar ferramentas de inteligência artificial como parte do meu fluxo de desenvolvimento para ganhar produtividade, qualidade e velocidade na entrega.

Tenho formação técnica em Desenvolvimento de Sistemas e atualmente curso Análise e Desenvolvimento de Sistemas na FATEC Ipiranga.
```

Skills recomendadas:

- Mobile: Flutter, Dart, Mobile Development
- Systems/Backend: Rust, Java, Spring Boot
- Frontend: React, TypeScript, Tailwind CSS
- Practices: Product Engineering, AI-assisted Development, Git, CI/CD

### Critérios de sucesso

A fase será considerada completa quando:

- O site não mencionar mais Luiz como cargo principal antigo ou estagiário.
- A experiência atual como Mobile Software Engineer estiver visível no primeiro contato com a página.
- A timeline listar corretamente as quatro experiências na CloudWalk.
- A formação acadêmica estiver atualizada com FATEC e ETEC.
- As skills refletirem Flutter, Dart, Rust e desenvolvimento mobile como foco principal.
- O email estiver correto: `lgtgusmao@hotmail.com`.
- Os links de GitHub e LinkedIn funcionarem.
- O conteúdo estiver consistente em um único idioma ou com uma estratégia bilíngue clara.

## Fase 2 — Reorganização de arquitetura e conteúdo

### Escopo

- Separar dados/conteúdo da camada visual.
- Reorganizar componentes por responsabilidade.
- Remover componentes, assets e imports não utilizados.
- Criar uma estrutura previsível para futuras atualizações.

### Estrutura sugerida

```txt
src/
  app/
    App.tsx
  components/
    layout/
      Container.tsx
      Header.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      EducationSection.tsx
      ContactSection.tsx
    ui/
      ...
  content/
    profile.ts
    experiences.ts
    education.ts
    skills.ts
    projects.ts
  hooks/
    useTheme.ts
  lib/
    utils.ts
```

### Boas práticas esperadas

- Componentes de seção devem receber dados via props ou importar de `src/content`.
- Conteúdo editável deve ficar em arquivos dedicados dentro de `src/content`.
- Componentes de UI reutilizáveis devem continuar em `components/ui`.
- Evitar strings profissionais hardcoded espalhadas por múltiplos componentes.
- Evitar duplicidade de links, nomes, cargos e textos.

### Critérios de sucesso

A fase será considerada completa quando:

- Existir uma pasta `src/content` concentrando dados de perfil, experiências, formação, skills e projetos.
- Os componentes principais estiverem organizados em `components/sections` e `components/layout`.
- Não houver imports não utilizados.
- Não houver assets padrão do Vite/React sem uso no projeto final.
- O comando `npm run typecheck` passar sem erros.
- O comando `npm run lint` passar sem erros ou apenas com warnings intencionais documentados.

## Fase 3 — Melhorias de UI, UX e acessibilidade

### Escopo

- Melhorar a primeira dobra da página com uma seção hero mais forte.
- Criar CTAs claros para LinkedIn, GitHub, email e currículo.
- Melhorar responsividade mobile.
- Garantir contraste e estados de foco.
- Revisar semântica HTML.

### Melhorias sugeridas

- Hero com nome, cargo, resumo curto e botões de ação.
- Seções bem definidas: Hero, About, Experience, Skills, Projects, Education e Contact.
- Cards mais objetivos para experiências e projetos.
- Timeline responsiva que não dependa de posicionamento absoluto complexo em telas pequenas.
- Botão de tema com label acessível.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.

### Critérios de sucesso

A fase será considerada completa quando:

- A página estiver confortável de navegar em desktop e mobile.
- A ordem de headings estiver correta: `h1`, `h2`, `h3`.
- Todos os botões e links importantes forem acessíveis por teclado.
- O toggle de tema funcionar e persistir a escolha no `localStorage`.
- O contraste for aceitável em modo claro e escuro.
- Não houver links quebrados nas principais chamadas de ação.

## Fase 4 — SEO, metadata e assets públicos

### Escopo

- Atualizar título e descrição do site.
- Adicionar Open Graph e Twitter Card.
- Adicionar ou revisar favicon.
- Adicionar imagem de preview social (`og-image`).
- Adicionar currículo em PDF, se desejado.
- Atualizar README com o novo link de produção após a migração.

### Metadata recomendada

```html
<title>Luiz Gusmão | Mobile Software Engineer</title>
<meta
  name="description"
  content="Portfolio de Luiz Gusmão, Mobile Software Engineer na CloudWalk, com experiência em Flutter, Dart, Rust, React e desenvolvimento de produto."
/>
<meta property="og:title" content="Luiz Gusmão | Mobile Software Engineer" />
<meta property="og:description" content="Portfolio profissional de Luiz Gusmão." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

### Critérios de sucesso

A fase será considerada completa quando:

- O título da aba do navegador refletir o cargo atual.
- A descrição do site estiver atualizada.
- As tags Open Graph e Twitter Card existirem.
- O favicon e a imagem social estiverem configurados.
- O README apontar para o link correto de produção.
- O site continuar funcionando após build e preview local.

## Fase 5 — Qualidade de código e DX

### Escopo

- Manter e revisar ESLint, Prettier, TypeScript strict, Husky e lint-staged.
- Adicionar um script unificado de validação.
- Opcionalmente adicionar testes leves com Vitest e Testing Library.
- Garantir que o projeto esteja simples de rodar localmente.

### Script recomendado

Adicionar ao `package.json`:

```json
{
  "scripts": {
    "validate": "npm run format:check && npm run lint && npm run typecheck && npm run build"
  }
}
```

### Testes opcionais

Possíveis testes mínimos:

- Renderiza o nome de Luiz.
- Renderiza o cargo atual.
- Renderiza links principais.
- Toggle de tema altera a classe `dark`.

### Critérios de sucesso

A fase será considerada completa quando:

- `npm run validate` existir.
- `npm run validate` passar localmente.
- O hook de pre-commit continuar funcionando com lint-staged.
- O README documentar os scripts principais.
- Se testes forem adicionados, eles devem rodar no CI.

## Fase 6 — CI com GitHub Actions

### Escopo

- Criar workflow de CI para push e pull request.
- Validar instalação, formatação, lint, typecheck e build.
- Usar cache de dependências npm.

### Workflow recomendado

Arquivo: `.github/workflows/ci.yml`

```yml
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run format:check
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run build
```

### Critérios de sucesso

A fase será considerada completa quando:

- O arquivo `.github/workflows/ci.yml` existir.
- O workflow rodar em pull requests.
- O workflow rodar em push para `master`.
- O CI ficar verde no GitHub.
- A branch protection usar esse status check como obrigatório.

## Fase 7 — Migração de deploy fora da Vercel

### Recomendação

Usar **GitHub Pages** como destino inicial de deploy.

Motivos:

- Gratuito.
- Simples.
- Integrado ao GitHub.
- Adequado para aplicação estática Vite.
- Suficiente para portfolio pessoal.

### Ajuste recomendado no Vite

Arquivo: `vite.config.ts`

```ts
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Workflow recomendado

Arquivo: `.github/workflows/deploy.yml`

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run build
        env:
          BASE_PATH: /portfolio/

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Critérios de sucesso

A fase será considerada completa quando:

- O workflow de deploy existir.
- O GitHub Pages estiver habilitado no repositório.
- O deploy automático rodar após merge na `master`.
- O site estiver disponível em `https://luizgusmao07.github.io/portfolio/` ou domínio definido.
- O README apontar para a nova URL.
- O projeto antigo da Vercel estiver removido, desativado ou documentado como legado.

## Fase 8 — Configurações do GitHub

### Escopo

- Configurar branch protection/ruleset para `master`.
- Adicionar Dependabot.
- Adicionar template de Pull Request.
- Opcionalmente adicionar issue templates.
- Revisar configurações gerais do repositório.

### Branch protection recomendada

Configurar em `Settings > Rules > Rulesets`:

- Require pull request before merging.
- Require status checks to pass.
- Tornar o status `quality` do CI obrigatório.
- Block force pushes.
- Block branch deletions.
- Opcional: Require linear history.

### Dependabot recomendado

Arquivo: `.github/dependabot.yml`

```yml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly

  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: weekly
```

### Critérios de sucesso

A fase será considerada completa quando:

- Branch protection/ruleset estiver ativo para `main`.
- CI for obrigatório antes de merge.
- Force push e deleção da `main` estiverem bloqueados.
- Dependabot estiver configurado.
- Template de PR existir.
- As configurações estiverem documentadas neste repositório.

## Fase 9 — Releases e changelog

### Escopo

- Criar `CHANGELOG.md`.
- Definir versionamento simples.
- Criar primeira release após a modernização.
- Documentar o que mudou.

### Estratégia recomendada

- Usar versionamento semântico simples.
- Criar release `v1.1.0` se o site atual já for considerado uma versão publicada.
- Criar release `v1.0.0` se a modernização for tratada como primeiro baseline estável.

### Exemplo de release notes

```md
## v1.1.0

### Added

- New professional experience timeline.
- Updated Mobile Software Engineer positioning.
- GitHub Actions CI.
- GitHub Pages deployment.

### Changed

- Reworked portfolio structure.
- Updated skills to Flutter, Dart, Rust and AI-assisted development.
- Improved SEO metadata.

### Fixed

- Correct email link.
- Removed unused assets and stale content.
```

### Critérios de sucesso

A fase será considerada completa quando:

- `CHANGELOG.md` existir.
- A release estiver criada no GitHub.
- A release tiver tag versionada.
- As mudanças principais estiverem documentadas.
- O README apontar para o changelog ou para a release mais recente.

## Fase 10 — Revisão final e handoff

### Escopo

- Revisar todo o site em produção.
- Revisar documentação.
- Confirmar que o repositório está limpo.
- Confirmar que o fluxo de manutenção está claro.

### Checklist final

- [ ] Conteúdo profissional atualizado.
- [ ] Código reorganizado.
- [ ] UI responsiva e acessível.
- [ ] SEO básico configurado.
- [ ] `npm run validate` passando.
- [ ] CI verde.
- [ ] Deploy fora da Vercel ativo.
- [ ] Branch protection configurada.
- [ ] Dependabot configurado.
- [ ] Release criada.
- [ ] README atualizado.
- [ ] Documentação de processo atualizada.

### Critérios de sucesso

A fase será considerada completa quando:

- O site publicado refletir corretamente o perfil atual de Luiz.
- O repositório puder ser clonado e validado com comandos documentados.
- O processo de PR, CI, merge e deploy estiver funcionando.
- Não houver pendências críticas abertas no documento de processo.
