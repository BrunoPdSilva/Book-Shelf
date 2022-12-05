import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export function useSignup() {
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => console.log(userCredential))
      .catch(err => console.error(err.message));
  };

  return { signup };
}
