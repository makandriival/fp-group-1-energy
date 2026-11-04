import template from './SearchField.html?raw';
import './SearchField.css';
import { createIcon } from '../Icon/Icon';

type SearchFieldOptions = {
  label: string;
  value?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  onInput?: (value: string) => void;
};

let generatedId = 0;

export function createSearchField({
  label,
  value = '',
  id,
  placeholder = '',
  disabled = false,
  onInput,
}: SearchFieldOptions): HTMLDivElement {
  const fragment = document.createRange().createContextualFragment(template);
  const wrapper = fragment.querySelector<HTMLDivElement>('[data-search]');
  const input = fragment.querySelector<HTMLInputElement>('[data-search-input]');
  const labelElement = fragment.querySelector<HTMLLabelElement>(
    '[data-search-label]'
  );
  const clear = fragment.querySelector<HTMLButtonElement>(
    '[data-search-clear]'
  );
  const clearIcon = fragment.querySelector<HTMLElement>('[data-clear-icon]');
  const searchIcon = fragment.querySelector<HTMLElement>('[data-search-icon]');

  if (
    !wrapper ||
    !input ||
    !labelElement ||
    !clear ||
    !clearIcon ||
    !searchIcon
  ) {
    throw new Error('Search field template is missing required elements.');
  }

  const inputId = id ?? `search-${++generatedId}`;
  labelElement.htmlFor = inputId;
  labelElement.textContent = label;
  input.id = inputId;
  input.value = value;
  input.placeholder = placeholder;
  input.disabled = disabled;
  clear.disabled = disabled;
  clear.setAttribute('aria-label', `Clear ${label.toLowerCase()}`);
  clear.hidden = !value;
  clearIcon.replaceChildren(createIcon({ name: 'clearSearch' }));
  searchIcon.replaceChildren(createIcon({ name: 'search' }));
  input.addEventListener('input', () => {
    clear.hidden = input.value.length === 0;
    onInput?.(input.value);
  });
  clear.addEventListener('click', () => {
    input.value = '';
    clear.hidden = true;
    onInput?.('');
    input.focus();
  });

  return wrapper;
}
