import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import { useAuthContext } from '../../hooks/useAuthContext';

import { Eye } from 'phosphor-react';

import SideImage from '../../assets/login-image.svg';
import './Login.css';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { login, error } = useLogin();
  const { userName } = useAuthContext();

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-page">
      <main>
        <form onSubmit={handleLogin} className="form">
          <h1>
            {userName ? 'Bem-vindo de volta, Bruno' : 'Bem-vindo de volta'}
          </h1>
          <p>Adoramos ter você de volta, faça login para continuar</p>

          <label className="input-group">
            <input
              type="text"
              placeholder="Email"
              autoComplete="none"
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />
            <Eye
              size={28}
              color={
                showPassword
                  ? 'var(--primary-color)'
                  : 'var(--disableBTN-color)'
              }
              onClick={() => setShowPassword(!showPassword)}
              className="show-password-button"
            />
          </label>
          {error && <span className="error-message">{error}</span>}

          <p className="signup-message">
            Não possui uma conta?{' '}
            <Link to="/signup" style={{ color: 'var(--primary-color)' }}>
              Cadastre-se
            </Link>
          </p>

          <button type="submit">Entrar</button>
        </form>

        <section className="side-image">
          <img
            src={SideImage}
            alt="Imagem de livros com um óculos em cima e uma caneca do lado"
          />
        </section>
      </main>
    </div>
  );
}
