import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BookOpen, GlobeHemisphereWest } from 'phosphor-react';
import './BookCard.css';

export function BookCard({ book }) {
  const [isCardActive, setIsCardAtive] = useState(false);

  return (
    <>
      <motion.div
        className={isCardActive ? 'card card-active' : 'card'}
        onMouseOver={() => setIsCardAtive(true)}
        onMouseOut={() => setIsCardAtive(false)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        <Link to={`/books/${book.id}`}>
          <img src={book.image} alt="Card image" className="card-image" />
        </Link>

        <footer className={isCardActive ? 'footer-active' : 'footer-disabled'}>
          <div>
            <span>Tamanho</span>
            <BookOpen size={22} color="#FFF" />
            <span>{book.length} pag</span>
          </div>
          <div className="bar"></div>
          <div>
            <span>Idioma</span>
            <GlobeHemisphereWest size={22} color="#FFF" />
            <span>{book.language}</span>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
