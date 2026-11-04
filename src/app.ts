import { renderAppShell } from './components/AppShell/AppShell';
import { renderFavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { renderHomePage } from './pages/HomePage/HomePage';

type Route = {
  path: string;
  render: () => string;
};

const routes: Record<string, Route> = {
  '/': { path: '/', render: renderHomePage },
  '/favorites': { path: '/favorites', render: renderFavoritesPage },
};

function currentRoute(): Route {
  const path = window.location.hash.slice(1) || '/';
  return routes[path] ?? routes['/'];
}

export function renderApp(): void {
  const root = document.querySelector<HTMLElement>('#app');
  if (!root) {
    throw new Error('App root element #app was not found.');
  }

  const route = currentRoute();
  root.replaceChildren(renderAppShell(route.path, route.render()));
}
