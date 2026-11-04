import 'modern-normalize/modern-normalize.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-400-italic.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-700.css';
import './styles/index.css';
import { renderApp } from './app';

renderApp();
window.addEventListener('hashchange', renderApp);
