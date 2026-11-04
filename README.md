# Your Energy

Vite + TypeScript starter for `fp-group-1-energy`. The app uses native browser
APIs and does not use a UI framework.

[Figma design](https://www.figma.com/design/xWKOAKNSpTwXbTEsDl2e5M/YourEnergy--Copy-?node-id=2-186)

## Setup

Use Node.js 22.12+.

```sh
npm ci
npm run dev
```

## Commands

| Command             | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `npm run build`     | Create the production build                     |
| `npm run preview`   | Preview the production build                    |
| `npm run format`    | Format files with Prettier                      |
| `npm run lint`      | Check JavaScript and TypeScript                 |
| `npm run typecheck` | Check TypeScript types                          |
| `npm run lint:fix`  | Apply automatic lint fixes                      |
| `npm test`          | Check assets and component folder structure     |
| `npm run check`     | Check formatting, lint, types, tests, and build |

## Shared code

```text
src/
  app.ts                  Hash-based page routing
  main.ts                 App entry point and global styles
  components/
    AppShell/             AppShell.ts, AppShell.html, AppShell.css
    Button/               Button.ts, Button.html, Button.css
    Icon/                 Icon.ts, Icon.html, Icon.css
    SearchField/          SearchField.ts, SearchField.html, SearchField.css
  pages/
    FavoritesPage/        FavoritesPage.ts, FavoritesPage.html, FavoritesPage.css
    HomePage/             HomePage.ts, HomePage.html, HomePage.css
  images/                 Named image/icon exports and source files
  services/api.ts         fetchJson and ApiError
  styles/
    index.css             Global reset and base styles
    tokens.css            Colors, typography, spacing, responsive sizes
    design-system.css     Shared themes, surfaces, and utilities
```

Keep each page and component's TypeScript, HTML template, and CSS together in
its own folder. Vite imports HTML templates as strings with `?raw`, while each
component imports its CSS from its TypeScript entry. Reuse components under
`src/components` and import static assets from `src/images/index.ts`.

Keep only global reset/base rules and design tokens shared; component and page
styles belong beside their HTML and TypeScript files. Use BEM-style CSS names
and preserve the 768px and 1200px breakpoints. Photos are full-resolution
sources; resize them for delivery when implementing screens. SVGs keep their
original colors and dimensions.

`createButton` defaults to `type="button"`; set `type="submit"` for form
submission. Give icon-only buttons accessible names. Handle and display errors
from `fetchJson`.

## Commits

Hooks install with `npm ci`; run `npm run prepare` if they need reinstalling.
Pre-commit checks staged formatting and lint without rewriting files.

Use Conventional Commits with a title of at most 100 characters:

```text
feat(header): add mobile menu
fix: correct favorites storage
docs: explain local setup
```

Run `npm run check` before opening a PR. GitHub Actions runs the same checks.

## Deployment

Enable **Settings → Pages → Source → GitHub Actions**. Pushes to `main` deploy
through the Pages workflow.

The app uses hash routes and the `/fp-group-1-energy/` base path. Import assets
from `src/images`; use `import.meta.env.BASE_URL` for public-file URLs.

Agent guidance: [AGENTS.md](./AGENTS.md).
