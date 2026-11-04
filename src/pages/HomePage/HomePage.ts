import template from './HomePage.html?raw';
import './HomePage.css';
import { createDailyNorm } from '../../components/DailyNorm/DailyNorm';
import { createHero } from '../../components/Hero/Hero';
import { pictures } from '../../images';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function renderHomePage(): string {
  const fragment = document.createRange().createContextualFragment(template);
  const page = fragment.querySelector<HTMLElement>('.home-page');
  const heroSlot = fragment.querySelector<HTMLElement>('[data-hero-slot]');
  const dailyNormSlot = fragment.querySelector<HTMLElement>(
    '[data-daily-norm-slot]'
  );
  const dailyImage =
    fragment.querySelector<HTMLImageElement>('[data-daily-image]');
  const dailySources = fragment.querySelectorAll<HTMLSourceElement>(
    '[data-daily-source]'
  );

  if (!page || !heroSlot || !dailyNormSlot || !dailyImage) {
    throw new Error('Home page template is missing required elements.');
  }

  heroSlot.replaceWith(createHero());
  dailyNormSlot.replaceWith(createDailyNorm());

  for (const source of dailySources) {
    const breakpoint = source.dataset.dailySource as Breakpoint;
    source.srcset = pictures.daily[breakpoint];
  }
  dailyImage.src = pictures.daily.fallback;

  return page.outerHTML;
}
