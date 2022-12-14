import { motion } from 'framer-motion';
import { Sun, Moon } from 'phosphor-react';

import './ToggleTheme.css';

export function ToggleTheme({ toggle, theme }) {
  return (
    <motion.button
      onClick={toggle}
      className="toggleButton"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      whileHover={{ rotate: 360, scale: 1.1 }}
    >
      {theme === 'light' ? (
        <Moon size={36} color="yellow" />
      ) : (
        <Sun size={36} color="yellow" />
      )}
    </motion.button>
  );
}
