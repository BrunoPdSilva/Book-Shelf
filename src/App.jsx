import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import useLocalStorage from 'use-local-storage';

import { Navbar } from './components/Navbar';
import { Home } from './pages/home/Home';
import { LoginPage } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';

import './App.css';
import { Book } from './pages/book/Book';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'theme' ? 'dark' : 'light');

  const { user, authIsReady } = useAuthContext();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App" data-theme={theme}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar user={user} toggle={toggleTheme} theme={theme} />
          {/* <Book /> */}
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/books/:id"
              element={user ? <Book /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
