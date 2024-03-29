import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';

import { Eye, EyeSlash } from 'phosphor-react';
import SideImage from '../assets/login-image.svg';

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

          <div className="inputs-container">
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
              {showPassword ? (
                <EyeSlash
                  size={28}
                  color={'var(--title)'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password-button"
                />
              ) : (
                <Eye
                  size={28}
                  color={'var(--title)'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password-button"
                />
              )}
            </label>
            {error && <span className="error-message">{error}</span>}
          </div>

          <p className="signup-message">
            Não possui uma conta?{' '}
            <Link to="/signup" className="signup">
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
