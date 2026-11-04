# Project guidance

This is a shared Vite + TypeScript starter without React. Keep changes focused
on the requested teammate task; do not build unrelated screens, demo pages, or
tooling. See [README.md](./README.md) for setup, commands, and commit
conventions.

## Implementation

- Keep each page and reusable component in its own folder, with matching `.ts`,
  `.html`, and `.css` files.
- Use native DOM APIs and the existing component folders in `src/components`.
- Keep component and page styles beside their TypeScript and HTML files; reserve
  shared styles for global rules, tokens, and reusable utilities. Use BEM-style
  class names and preserve the 768px and 1200px breakpoint conventions.
- Keep static assets in `src/images` with readable filenames. Prefer existing
  exports from `src/images/index.ts`; preserve SVG colors and dimensions. Do not
  commit temporary Figma asset URLs or extra unused exports.
- Preserve hash-based routing and Vite's repository base path for GitHub Pages.
  Public-file URLs must use `import.meta.env.BASE_URL`.
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
