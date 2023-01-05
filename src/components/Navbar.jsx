import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { List, X, Sun, Moon } from 'phosphor-react';
import { motion } from 'framer-motion';

import NavLogo from '../assets/nav-logo.svg';
import '../styles/components/Navbar.scss';

export function Navbar({ toggle, theme }) {
  const [showMenu, setShowMenu] = useState(false);

  const { user, uid } = useAuthContext();
  const { logout } = useLogout();

  function toggleTheme() {
    toggle();
    setShowMenu(false);
  }

  function handleLogout() {
    setShowMenu(false);
    logout();
  }

  return (
    <header
      className={showMenu ? 'navbar-container active' : 'navbar-container'}
    >
      <nav className={showMenu ? 'navbar active' : 'navbar'}>
        <Link to="/">
          <motion.img
            src={NavLogo}
            alt="Logo"
            className="logo-image"
            onClick={() => setShowMenu(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          />
        </Link>

        {user && (
          <ul className="nav-links">
            <Link to="/books">
              <motion.li
                onClick={() => setShowMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                Livros
              </motion.li>
            </Link>
            <Link to="/contact">
              <motion.li
                onClick={() => setShowMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  scale: { delay: 0 },
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                Contato
              </motion.li>
            </Link>
            <Link to="/about">
              <motion.li
                onClick={() => setShowMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  scale: { delay: 0 },
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                Sobre
              </motion.li>
            </Link>
          </ul>
        )}

        <section className="action-btn-container">
          {user ? (
            <div className="buttons-container">
              {user?.uid === uid ? (
                <motion.div
                  className="motion"
                  onClick={() => setShowMenu(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.6,
                  }}
                >
                  <Link to="/dashboard">
                    <button className="secondary-button">
                      Adicionar livro
                    </button>
                  </Link>
                </motion.div>
              ) : (
                ''
              )}
              <motion.button
                className="primary-button"
                onClick={handleLogout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.7,
                }}
              >
                Sair
              </motion.button>
            </div>
          ) : (
            <div className="buttons-container">
              <motion.div
                className="motion"
                onClick={() => setShowMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.6,
                }}
              >
                <Link to="/login">
                  <button className="secondary-button">Login</button>
                </Link>
              </motion.div>
              <Link to="/signup" style={{ color: '#FFF' }}>
                <motion.button
                  className="primary-button"
                  onClick={() => setShowMenu(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.7,
                  }}
                >
                  Cadastrar-se
                </motion.button>
              </Link>
            </div>
          )}

          <motion.button
            onClick={toggleTheme}
            className="toggleButton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ rotate: 360, scale: 1.1 }}
          >
            {theme === 'light' ? (
              <Moon size={32} color="yellow" />
            ) : (
              <Sun size={32} color="yellow" />
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
