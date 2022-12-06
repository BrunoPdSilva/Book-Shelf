import useLocalStorage from 'use-local-storage';

import { Home } from './pages/home/Home'
import { LoginPage } from './pages/login/Login';
import { ToggleTheme } from './components/ToggleTheme';

import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'theme' ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="App" data-theme={theme}>
      <ToggleTheme toggle={toggleTheme} theme={theme} />
      <LoginPage />
    </div>
  );
}

export default App;
