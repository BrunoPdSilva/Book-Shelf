import { useState } from 'react';

import { useLogin } from '../../hooks/useLogin';

import { Eye } from 'phosphor-react';
import Logo from '../../assets/book-lg.png';
import LoginImg from '../../assets/login-image.svg';
import './Login.css';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { login } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    login(email, password);
  }

  return (
    <div className="loginPage">
      <header>
        <img src={Logo} alt="Logo, livros empilhados e um óculos em cima" />
        <h1>Book Shelf</h1>
      </header>

      <main>
        <form onSubmit={handleLogin}>
          <h1>Bem-vindo de volta, Bruno</h1>
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
              color={showPassword ? '#FFF' : 'rgba(255, 255, 255, 0.5)'}
              onClick={() => setShowPassword(!showPassword)}
              className="showPasswordBtn"
            />
          </label>

          <p>Não possui uma conta? <span>Cadastre-se</span></p>

          <button>Fazer Login</button>
        </form>

        <section className="sideImage">
          <img
            src={LoginImg}
            alt="Imagem de livros com um óculos em cima e uma caneca do lado"
          />
        </section>
      </main>
    </div>
  );
}
