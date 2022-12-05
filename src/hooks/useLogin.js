import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function useLogin() {
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => console.log(userCredentials.user.email))
      .catch(err => console.error(err.message));
  };

  return { login };
}
