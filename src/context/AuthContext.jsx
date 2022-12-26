import { useEffect, useReducer, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import useLocalStorage from 'use-local-storage';

export const AuthContext = createContext();

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
}

const initialState = { user: null, authIsReady: false };

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [userName, setUserName] = useLocalStorage('userName', '');

  const uid = 'IXfpB9vObabSZn3BFRFArusqD3w1';

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, userName, setUserName, uid }}>
      {children}
    </AuthContext.Provider>
  );
}
