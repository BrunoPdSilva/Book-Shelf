import { Sun, Moon } from 'phosphor-react';

import './ToggleTheme.css';

export function ToggleTheme({ toggle, theme }) {
  return (
    <button onClick={toggle} className="toggleButton">
      {theme === 'light' ? <Moon size={36} color="yellow" /> : <Sun size={36} color="yellow" />}
      
    </button>
  )
}
