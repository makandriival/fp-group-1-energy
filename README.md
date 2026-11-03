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
  components/   Shared UI primitives
  pages/        Home and Favorites route entry points
  services/     Shared API request and error handling
  styles/       Shared styles and responsive breakpoints
  App.jsx       Shared navigation and route definitions
  main.jsx      App entry point and global imports
public/         Static files copied as-is, including the favicon
```

## Formatting and linting

```sh
npm run format        # Format maintained source and configuration
npm run format:check  # Check formatting without changing files
npm run lint          # Check JavaScript and React; warnings fail
npm run lint:fix      # Apply safe ESLint fixes
npm run check         # Formatting, lint, tests, and production build
```

Prettier follows the previous homework conventions: two spaces, single quotes,
semicolons, ES5 trailing commas, 80-column wrapping, and unparenthesized single
arrow parameters. `.editorconfig` defines UTF-8, LF, and final newlines.
Generated output, lockfiles, and original Figma SVG exports are excluded from
formatting so exported assets stay unchanged.

ESLint checks recommended JavaScript and React rules, Hooks, and Vite Fast
Refresh exports. Unused variables, undefined names, `console` calls, and
`debugger` statements are errors. Browser globals apply to source files; Node
globals apply to configuration and tests. Runtime PropTypes are not required in
this JavaScript starter. Prettier handles formatting independently, with
conflicting ESLint formatting rules disabled.

The **Check project** workflow runs `npm run check` on pull requests and pushes
to `main`. Enable it as a required status check in GitHub branch protection when
configuring the team's merge rules.

## Commit hooks

`npm ci` installs Husky hooks automatically through the `prepare` script. If
hooks are missing after a dependency install, run `npm run prepare`.

- **pre-commit** checks staged JS/JSX with ESLint and checks staged supported
  text files with Prettier. It does not rewrite files; fix reported issues and
  stage the changes again. Partially staged files are handled by lint-staged.
- **commit-msg** checks Conventional Commits:
  `type(optional-scope): description`, with a maximum 100-character title. Use a
  lowercase type: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
  `build`, `ci`, `chore`, or `revert`. A scope is optional; use `!` before `:`
  for breaking changes. Descriptions must be non-empty and must not end with a
  period. Bodies and Git trailers are allowed.

Examples: `feat(header): add mobile menu`, `fix: correct favorites storage`,
`docs: explain local setup`. Standard merge/revert messages are accepted by
commitlint's default ignores.

Both hooks include a message from your slightly overenthusiastic gym coach. Full
tests and builds stay in `npm run check` and CI to keep commits quick. Local
hooks can be bypassed, so CI checks still matter.

The app uses hash-based routes so direct navigation and refreshes work on GitHub
Pages without a server-side rewrite. Vite's base path is configured for the
repository name; keep public asset references base-aware and import files from
`src/images` in components.

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
- Agree on catalog state with slots 05–07 and the favorite storage contract with
  slots 08–09 before parallel implementation of those features.

## Shared design assets and components

Source:
[YourEnergy Figma copy](https://www.figma.com/design/xWKOAKNSpTwXbTEsDl2e5M/YourEnergy--Copy-?node-id=2-186).
Home and Favorites are entry points for teammates to implement, not finished
screens. There is no demo page or separate design-system application.

- `src/styles/tokens.css`: palette, DM Sans typography, spacing, radii,
  responsive gutters, and sizes extracted from the design.
- `src/styles/design-system.css`: shared button, input, search, tag, heading,
  and light/dark surface styles.
- `src/components/ui.jsx`: `Button`, `Icon`, and labeled `SearchField`.
- `src/images/photos`: hero, supporting photos, and category images with
  readable filenames. Unplaced sources and mock exercise previews are excluded.
- `src/images/icons`: individual icons, logos, and useful light/mobile variants.
- `src/images/index.js`: named `images` and `icons` URL exports. Direct imports
  from the asset folders also work; Vite handles GitHub Pages paths.

```jsx
import { Button, Icon, SearchField } from './components/ui.jsx';
import { images } from './images/index.js';

<img src={images.hero} alt="Two women exercising outdoors" />
<Icon name="logo" label="Your Energy" />
<div className="ui-surface ui-theme ui-theme--dark">
  <Button icon="heart" hoverIcon="heartLight">Add to favorites</Button>
</div>
<SearchField
  label="Search exercises"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  onClear={() => setQuery('')}
/>
```

`Button` defaults to `type="button"`; use `type="submit"` in forms.
`SearchField` is controlled: its caller owns the value and clear handler. `Icon`
keeps the SVG's original colors and dimensions; it is decorative unless given a
label. Icon-only buttons still need an accessible name.

Images are original full-resolution sources. Choose suitable delivery sizes when
implementing a screen. Exercise animations and catalog state should come from
the agreed API contract, not hardcoded design examples.

Run `npm test` to check asset imports, SVG dimensions, and favicon consistency.
Run `npm run build` before sharing changes.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys `main` to
GitHub Pages. In repository settings, set **Pages → Build and deployment →
Source** to **GitHub Actions**. The production build uses `/fp-group-1-energy/`
as its base path.

After deployment, verify both hash routes, the favicon, and font loading on the
live Pages URL, and check the mobile, tablet, and desktop layouts.
