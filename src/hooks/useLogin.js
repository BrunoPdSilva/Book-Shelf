import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';
import { auth } from '../firebase/config';

export function useLogin() {
  const [error, setError] = useState(null);

  const { dispatch, setUserName } = useAuthContext();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        setUserName(res.user.displayName);
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch(err => {
        if (err.message === 'Firebase: Error (auth/wrong-password).') {
          setError('Email ou senha incorretos');
        }
      });
  };

  return { login, error };
}
