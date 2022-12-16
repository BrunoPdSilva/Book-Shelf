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
        <motion.img
          src={NavLogo}
          alt="Logo"
          className="logo-image"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        />

        {user && (
          <ul className="nav-links">
            <Link to="/">
              <motion.li
                whileHover={{ scale: 1.1 }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Livros
              </motion.li>
            </Link>
            <Link to="/">
              <motion.li
                whileHover={{ scale: 1.1 }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Contato
              </motion.li>
            </Link>
            <Link to="/">
              <motion.li
                whileHover={{ scale: 1.1 }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Sobre
              </motion.li>
            </Link>
          </ul>
        )}

        <section className="action-btn-container">
          {user ? (
            <div className="buttons-container">
              <Link to="/">
                <motion.button
                  className="secondary-button"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Adicionar um livro
                </motion.button>
              </Link>
              <motion.button
                className="primary-button"
                onClick={logout}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Sair
              </motion.button>
            </div>
          ) : (
            <div className="buttons-container">
              <Link to="/login">
                <motion.button
                  className="secondary-button"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/signup" style={{ color: '#FFF' }}>
                <motion.button
                  className="primary-button"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Cadastrar-se
                </motion.button>
              </Link>
            </div>
          )}

          <motion.button
            onClick={toggle}
            className="toggleButton"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
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
