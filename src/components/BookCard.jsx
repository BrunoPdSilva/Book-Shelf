import { useState } from 'react';
import { motion } from 'framer-motion';

import { BookOpen, GlobeHemisphereWest } from 'phosphor-react';
import './BookCard.css';

export function BookCard({ book }) {
  const [isCardActive, setIsCardAtive] = useState(false);

  return (
    <motion.div
      className={isCardActive ? 'card card-active' : 'card'}
      onMouseOver={() => setIsCardAtive(true)}
      onMouseOut={() => setIsCardAtive(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <img src={book.image} alt="Card image" className="card-image" />

      {isCardActive && (
        <footer>
          <div>
            <span>Tamanho</span>
            <BookOpen size={22} color="#FFF" />
            <span>{book.length} pag</span>
          </div>
          <div>
            <span>Idioma</span>
            <GlobeHemisphereWest size={22} color="#FFF" />
            <span>{book.language}</span>
          </div>
        </footer>
      )}
    </motion.div>
  );
}
