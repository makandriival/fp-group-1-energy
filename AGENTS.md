# Project guidance

This is a shared Vite + TypeScript starter without React. Keep changes focused
on the requested teammate task; do not build unrelated screens, demo pages, or
tooling. See [README.md](./README.md) for setup, commands, and commit
conventions.

## Implementation

- Keep each page and reusable component in its own folder, with matching `.ts`,
  `.html`, and `.css` files.
- Use native DOM APIs and the existing component folders in `src/components`.
- Follow the static-first template: assemble HTML with `<load>` includes at
  build time, using paths relative to `src` without a leading `./`. Do not
  import HTML with `?raw` or generate static UI with TypeScript factories.
- TypeScript should only enhance existing HTML with behavior. Import feature CSS
  from `src/styles/index.css`; keep empty TypeScript modules for features that
  do not yet need behavior.
- Keep component and page styles beside their TypeScript and HTML files; reserve
  shared styles for global rules, tokens, and reusable utilities. Use BEM-style
  class names and preserve the 768px and 1200px breakpoint conventions.
- Keep static assets in `src/images` with readable filenames. Prefer existing
  exports from `src/images/index.ts`; preserve SVG colors and dimensions. Do not
  commit temporary Figma asset URLs or extra unused exports.
- Preserve hash-based routing and Vite's repository base path for GitHub Pages.
  Toggle existing page sections rather than rebuilding the app. Vite's root is
  `src`; public files remain in the top-level `public` directory. Public-file
  URLs must use `%BASE_URL%` in HTML or `import.meta.env.BASE_URL` in
  TypeScript.
- Use `fetchJson` and `ApiError` from `src/services/api.ts`. Present request
  failures to users rather than swallowing errors or returning fake success.
- Confirm shared catalog and favorites contracts before introducing state or
  persistence assumptions. Do not treat Figma example data as an API contract.
- Keep controls keyboard-accessible and provide labels for fields and icon-only
  actions.

## Verification

- Follow the existing Prettier and ESLint configuration rather than overriding
  rules to make a change pass.
- Add focused tests for new behavior. Run `npm run check` after code changes;
  documentation-only edits need only a formatting check.
- Check affected UI at mobile, tablet, and desktop sizes. Preserve existing
  routes and avoid browser console errors.
- Do not bypass commit hooks. Commit or push only when requested.
