import template from './DailyNorm.html?raw';
import './DailyNorm.css';
import { icons } from '../../images';

export function createDailyNorm(): HTMLElement {
  const fragment = document.createRange().createContextualFragment(template);
  const card = fragment.querySelector<HTMLElement>('.daily-norm');
  const icon = fragment.querySelector<HTMLImageElement>(
    '[data-daily-norm-icon]'
  );

  if (!card || !icon) {
    throw new Error('Daily norm template is missing required elements.');
  }

  icon.src = icons.nutrition;
  return card;
}
