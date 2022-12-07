import { useState, useReducer } from 'react';
import { useSignup } from '../../hooks/useSignup';

import Logo from '../../assets/book-lg.png';
import './Signup.css';

function reducer(state, action) {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload };
    case 'EMAIL':
      return { ...state, email: action.payload };
    case 'PASSWORD':
      return { ...state, password: action.payload };
    case 'SECOND_PASSWORD':
      return { ...state, secondPassword: action.payload };
    default:
      return state;
  }
}

const initialState = { name: '', email: '', password: '', secondPassword: '' };

export function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [passwordError, setPasswordError] = useState(null);

  const { signup, error } = useSignup();

  const handleSignup = e => {
    e.preventDefault();
    setPasswordError(null);

    if (state.password !== state.secondPassword) {
      setPasswordError('As duas senhas devem ser iguais');
    }

    if (state.password.length > 3 && state.name.length > 3) {
      signup(state.email, state.password, state.name);
    } else {
      setPasswordError('Os campos devem ter pelo menos 3 caracteres');
    }
  };

  return (
    <div className="signupPage">
      <header className="logo_header">
        <img src={Logo} alt="Logo, livros empilhados e um óculos em cima" />
        <h1>Book Shelf</h1>
      </header>

      <form onSubmit={handleSignup} className="form">
        <h1>Cadastre-se agora</h1>
        <p>Tenha informações sobre seus livros favoritos!</p>

        <label className="input-group">
          <input
            type="text"
            placeholder="Nome"
            autoComplete="none"
            onChange={e => dispatch({ type: 'NAME', payload: e.target.value })}
            required
          />
        </label>

        <label className="input-group">
          <input
            type="email"
            placeholder="Email"
            autoComplete="none"
            onChange={e => dispatch({ type: 'EMAIL', payload: e.target.value })}
            required
          />
        </label>

        <label className="input-group">
          <input
            type="password"
            placeholder="Senha"
            onChange={e =>
              dispatch({ type: 'PASSWORD', payload: e.target.value })
            }
            required
          />
        </label>

        <label className="input-group">
          <input
            type="password"
            placeholder="Confirmar senha"
            onChange={e =>
              dispatch({
                type: 'SECOND_PASSWORD',
                payload: e.target.value,
              })
            }
            required
          />
        </label>
        {error && <span className="error">{error}</span>}
        {passwordError && <span className="error">{passwordError}</span>}

        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
  );
}
