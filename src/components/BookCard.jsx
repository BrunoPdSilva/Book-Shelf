import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BookBookmark } from 'phosphor-react';
import '../styles/components/BookCard.scss';

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
        <img src={book.image} alt="Card image" className="card-image" />

        <footer className={isCardActive ? 'footer-active' : 'footer-disabled'}>
          <Link to={`/books/${book.id}`}>
            <motion.button whileHover={{ scale: 1.03 }}>
              <BookBookmark size={18} weight="bold" />
              Ver livro
            </motion.button>
          </Link>
        </footer>
      </motion.div>
    </>
  );
}
