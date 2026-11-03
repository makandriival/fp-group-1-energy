import { useId, useRef } from 'react';
import { icons } from '../images/index.js';

export function Icon({ name, label = '', className = '' }) {
  const asset = icons[name];
  if (!asset) {
    throw new Error(`Unknown icon: ${name}`);
  }
  return (
    <span className={`ui-icon ${className}`}>
      <img src={asset} alt={label} />
    </span>
  );
}

export function Button({
  variant = 'solid',
  icon,
  hoverIcon,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  if (!['solid', 'outline'].includes(variant)) {
    throw new Error(`Unknown button variant: ${variant}`);
  }
  return (
    <button
      {...props}
      type={type}
      className={`ui-button ui-button--${variant} ${className}`}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          className={`ui-button__default-icon${hoverIcon ? ' ui-button__default-icon--swappable' : ''}`}
        />
      )}
      {icon && hoverIcon && (
        <Icon name={hoverIcon} className="ui-button__hover-icon" />
      )}
    </button>
  );
}

export function SearchField({
  label,
  value,
  onClear,
  id,
  disabled = false,
  ...props
}) {
  const generatedId = useId();
  const inputRef = useRef(null);
  const inputId = id || generatedId;
  return (
    <div className="ui-search">
      <label className="visually-hidden" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...props}
        className="ui-input ui-search__input"
        ref={inputRef}
        id={inputId}
        type="search"
        value={value}
        disabled={disabled}
      />
      {value && onClear && (
        <button
          className="ui-search__clear"
          type="button"
          disabled={disabled}
          onClick={() => {
            onClear();
            inputRef.current.focus();
          }}
          aria-label={`Clear ${label.toLowerCase()}`}
        >
          <Icon name="clearSearch" />
        </button>
      )}
      <Icon name="search" />
    </div>
  );
}
