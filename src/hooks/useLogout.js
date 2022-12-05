import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export function useLogout() {
  const logout = () => {
    signOut(auth)
      .then(() => console.log('logged out'))
      .catch(err => console.log(err.message));
  };

  return { logout };
}
