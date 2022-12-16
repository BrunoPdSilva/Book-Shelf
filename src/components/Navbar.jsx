import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { List, X, Sun, Moon } from 'phosphor-react';
import { motion } from 'framer-motion';

import NavLogo from '../assets/nav-logo.svg';
import './ToggleTheme.css';
import './Navbar.css';

export function Navbar({ user, toggle, theme }) {
  const [showMenu, setShowMenu] = useState(false);

  const { logout } = useLogout();

  return (
    <header
      className={showMenu ? 'navbar-container active' : 'navbar-container'}
    >
      <nav className={showMenu ? 'navbar active' : 'navbar'}>
        <img src={NavLogo} alt="Logo" className="logo-image" />

        {user && (
          <ul className="nav-links">
            <Link to="/">
              <motion.li whileHover={{ scale: 1.1 }}>Livros</motion.li>
            </Link>
            <Link to="/">
              <motion.li whileHover={{ scale: 1.1 }}>Contato</motion.li>
            </Link>
            <Link to="/">
              <motion.li whileHover={{ scale: 1.1 }}>Sobre</motion.li>
            </Link>
          </ul>
        )}

        <section className="action-btn-container">
          {user ? (
            <div className="buttons-container">
              <Link to="/">
                <button
                  className="secondary-button"
                  onClick={() => setShowMenu(false)}
                >
                  Adicionar um livro
                </button>
              </Link>
              <button className="primary-button" onClick={logout}>
                Sair
              </button>
            </div>
          ) : (
            <div className="buttons-container">
              <Link to="/login">
                <button
                  className="secondary-button"
                  onClick={() => setShowMenu(false)}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup" style={{ color: '#FFF' }}>
                <button
                  className="primary-button"
                  onClick={() => setShowMenu(false)}
                >
                  Cadastrar-se
                </button>
              </Link>
            </div>
          )}

          <motion.button
            onClick={toggle}
            className="toggleButton"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            whileHover={{ rotate: 360, scale: 1.1 }}
          >
            {theme === 'light' ? (
              <Moon size={36} color="yellow" />
            ) : (
              <Sun size={36} color="yellow" />
            )}
          </motion.button>
        </section>

        {showMenu ? (
          <X
            size={32}
            color="#FFF"
            className="burger-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <List
            size={32}
            color="#FFF"
            className="burger-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </nav>
    </header>
  );
}
