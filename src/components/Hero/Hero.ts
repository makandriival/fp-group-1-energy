import template from './Hero.html?raw';
import './Hero.css';
import { icons, pictures } from '../../images';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function createHero(): HTMLElement {
  const fragment = document.createRange().createContextualFragment(template);
  const hero = fragment.querySelector<HTMLElement>('.hero');
  const sun = fragment.querySelector<HTMLImageElement>('[data-hero-sun]');
  const image = fragment.querySelector<HTMLImageElement>('[data-hero-image]');
  const detailSource = fragment.querySelector<HTMLSourceElement>(
    '[data-hero-detail-source]'
  );
  const detailImage = fragment.querySelector<HTMLImageElement>(
    '[data-hero-detail-image]'
  );
  const sources =
    fragment.querySelectorAll<HTMLSourceElement>('[data-hero-source]');

  if (!hero || !sun || !image || !detailSource || !detailImage) {
    throw new Error('Hero template is missing required elements.');
  }

  sun.src = icons.sun;

  for (const source of sources) {
    const breakpoint = source.dataset.heroSource as Breakpoint;
    source.srcset = pictures.hero[breakpoint];
  }
  image.src = pictures.hero.fallback;

  detailSource.srcset = pictures.heroDetail.desktop;
  detailImage.src = pictures.heroDetail.fallback;

  return hero;
}
