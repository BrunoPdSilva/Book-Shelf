import { useState } from 'react';

import { Link } from 'react-router-dom';
import { List, X } from 'phosphor-react';

import NavLogo from '../assets/nav-logo.svg';
import './Navbar.css';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={showMenu ? 'navbar-container active' : 'navbar-container'}
    >
      <nav className={showMenu ? 'navbar active' : 'navbar'}>
        <img src={NavLogo} alt="Logo" className="Logo" />

        <ul>
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

        <div className="buttons-container">
          <button className="first-btn">
            <Link to="/login">Entrar</Link>
          </button>
          <button className="second-btn">
            <Link to="/signup" style={{ color: '#FFF' }}>
              Cadastrar-se
            </Link>
          </button>
        </div>

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
