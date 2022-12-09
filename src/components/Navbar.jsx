import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { List, X } from 'phosphor-react';

import NavLogo from '../assets/nav-logo.svg';
import './Navbar.css';

export function Navbar({ user }) {
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
              <li>Livros</li>
            </Link>
            <Link to="/">
              <li>Contato</li>
            </Link>
            <Link to="/">
              <li>Sobre</li>
            </Link>
          </ul>
        )}

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
