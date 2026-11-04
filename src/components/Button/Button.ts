import template from './Button.html?raw';
import './Button.css';
import { createIcon, type IconName } from '../Icon/Icon';

type ButtonOptions = {
  children: string;
  variant?: 'solid' | 'outline';
  icon?: IconName;
  hoverIcon?: IconName;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  onClick?: () => void;
};

export function createButton({
  children,
  variant = 'solid',
  icon,
  hoverIcon,
  className = '',
  type = 'button',
  label,
  onClick,
}: ButtonOptions): HTMLButtonElement {
  const fragment = document.createRange().createContextualFragment(template);
  const button = fragment.querySelector<HTMLButtonElement>('[data-button]');
  const text = fragment.querySelector<HTMLElement>('[data-button-label]');
  if (!button || !text) {
    throw new Error('Button template is missing required elements.');
  }

  button.type = type;
  button.classList.add(`ui-button--${variant}`);
  button.classList.add(...className.split(/\s+/).filter(Boolean));
  text.textContent = children;
  if (label) {
    button.setAttribute('aria-label', label);
  }
  if (icon) {
    button.append(
      createIcon({
        name: icon,
        className: `ui-button__default-icon${hoverIcon ? ' ui-button__default-icon--swappable' : ''}`,
      })
    );
  }
  if (hoverIcon) {
    button.append(
      createIcon({ name: hoverIcon, className: 'ui-button__hover-icon' })
    );
  }
  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
}
