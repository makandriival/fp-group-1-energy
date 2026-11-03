import { NavLink, Route, Routes } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-header__brand" href="#/" aria-label="Energy home">
          <img
            className="site-header__logo"
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt=""
          />
          <span>energy</span>
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
