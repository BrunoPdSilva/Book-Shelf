import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';
import { auth } from '../firebase/config';

export function useSignup() {
  const [error, setError] = useState(null);

  const { dispatch, setUserName } = useAuthContext();

  const signup = (email, password, name) => {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        updateProfile(res.user, { displayName: name });
        setUserName(name);
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch(err => setError(err.message));
  };

  return { signup, error };
}
