import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import useLocalStorage from 'use-local-storage';

import { Dashboard } from './pages/dashboard/Dashboard';
import { LoginPage } from './pages/login/Login';
import { Working } from './pages/working/Working';
import { Navbar } from './components/Navbar';
import { Signup } from './pages/signup/Signup';
import { Home } from './pages/home/Home';
import { Book } from './pages/book/Book';

import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage(
    'theme',
    'theme' ? 'dark' : 'light'
  );

  const { user, authIsReady, uid } = useAuthContext();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App" data-theme={theme}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar user={user} toggle={toggleTheme} theme={theme} />
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
            <Route
              path="/dashboard"
              element={user?.uid === uid ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route path="/working" element={<Working />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
