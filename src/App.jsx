import { NavLink, Route, Routes } from 'react-router-dom';
import { Icon } from './components/ui.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a
          className="site-header__brand"
          href="#/"
          aria-label="Your Energy home"
        >
          <Icon name="logo" />
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink className="site-nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="site-nav__link" to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </header>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
