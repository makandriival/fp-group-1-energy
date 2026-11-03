# fp-group-1-energy

Vite + React starter for the Energy group project.

## Getting started

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Run `npm run build` to verify a production build and `npm run preview` to serve
that build locally.

## Project structure

```text
src/
  images/       Static images imported by components
  pages/        Home and Favorites route entry points
  services/     Shared API request and error handling
  styles/       Shared styles and responsive breakpoints
  App.jsx       Shared navigation and route definitions
  main.jsx      App entry point and global imports
public/         Static files copied as-is, including the favicon
```

The app uses hash-based routes so direct navigation and refreshes work on
GitHub Pages without a server-side rewrite. Vite's base path is configured for
the repository name; keep public asset references base-aware and import files
from `src/images` in components.

## Shared conventions

- Shared file owner: slot 02; owner name is still to be agreed.
- Use BEM-style CSS class names (`block__element--modifier`) in shared styles.
- Breakpoints: mobile below 768px, tablet from 768px, desktop from 1200px.
- Use `src/services/api.js` for shared JSON requests. It throws `ApiError` for
  non-success HTTP responses; callers should handle and present request errors
  rather than silently ignoring them.
- Do not add `console.log` or leave browser console errors in a PR.
- Keep PRs focused, request review from the shared file owner for shared
  surfaces, and merge only after the build and responsive layouts are checked.
- Agree on catalog state with slots 05–07 and the favorite storage contract
  with slots 08–09 before parallel implementation of those features.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys `main` to
GitHub Pages. In repository settings, set **Pages → Build and deployment →
Source** to **GitHub Actions**. The production build uses
`/fp-group-1-energy/` as its base path.

After deployment, verify both hash routes, the favicon, and font loading on the
live Pages URL, and check the mobile, tablet, and desktop layouts.
