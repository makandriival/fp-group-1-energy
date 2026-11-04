import template from './Icon.html?raw';
import './Icon.css';
import { icons } from '../../images';

export type IconName = keyof typeof icons;

type IconOptions = {
  name: IconName;
  label?: string;
  className?: string;
};

export function createIcon({
  name,
  label = '',
  className = '',
}: IconOptions): HTMLSpanElement {
  const fragment = document.createRange().createContextualFragment(template);
  const wrapper = fragment.querySelector<HTMLSpanElement>('[data-icon]');
  const image = fragment.querySelector<HTMLImageElement>('[data-icon-image]');
  if (!wrapper || !image) {
    throw new Error('Icon template is missing required elements.');
  }

  wrapper.classList.add(...className.split(/\s+/).filter(Boolean));
  image.src = icons[name];
  image.alt = label;
  return wrapper;
}
