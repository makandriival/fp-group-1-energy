# Your Energy

Vite + React starter for `fp-group-1-energy`. Home and Favorites are entry
points for teammates to implement.

[Figma design](https://www.figma.com/design/xWKOAKNSpTwXbTEsDl2e5M/YourEnergy--Copy-?node-id=2-186)

## Setup

Use Node.js 22.12+.

```sh
npm ci
npm run dev
```

## Commands

| Command            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `npm run build`    | Create the production build              |
| `npm run preview`  | Preview the production build             |
| `npm run format`   | Format files with Prettier               |
| `npm run lint`     | Check JavaScript and React               |
| `npm run lint:fix` | Apply automatic lint fixes               |
| `npm test`         | Check shared assets                      |
| `npm run check`    | Check formatting, lint, tests, and build |

## Shared code

```text
src/
  components/ui.jsx       Button, Icon, SearchField
  images/                 Named image/icon exports and source files
  pages/                  Home and Favorites
  services/api.js         fetchJson and ApiError
  styles/tokens.css       Colors, typography, spacing, responsive sizes
  styles/design-system.css Shared control and surface styles
```

```jsx
import { Icon } from './components/ui.jsx';
import { images } from './images/index.js';

<Icon name="heart" />
<img src={images.hero} alt="Two women exercising outdoors" />;
```

Use shared tokens and BEM-style CSS names. Breakpoints are 768px and 1200px.
Photos are full-resolution sources; resize them for delivery when implementing
screens. SVGs keep their original colors and dimensions.

`SearchField` is controlled by its caller. `Button` defaults to `type="button"`;
set `type="submit"` for form submission. Give icon-only buttons accessible
names. Handle and display errors from `fetchJson`.

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
