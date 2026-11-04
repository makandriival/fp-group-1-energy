import template from './AppShell.html?raw';
import './AppShell.css';
import { icons } from '../../images';

export function renderAppShell(path: string, page: string): HTMLElement {
  const fragment = document.createRange().createContextualFragment(template);
  const shell = fragment.querySelector<HTMLElement>('.app-shell');
  const brandIcon =
    fragment.querySelector<HTMLImageElement>('[data-brand-icon]');
  const content = fragment.querySelector<HTMLElement>('[data-page-content]');
  const navigationLinks =
    fragment.querySelectorAll<HTMLAnchorElement>('[data-route]');

  if (!shell || !brandIcon || !content || navigationLinks.length === 0) {
    throw new Error('App shell template is missing required elements.');
  }

  brandIcon.src = icons.logo;
  content.innerHTML = page;

  for (const link of navigationLinks) {
    const isCurrent = link.dataset.route === path;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    }
  }

  return shell;
}
