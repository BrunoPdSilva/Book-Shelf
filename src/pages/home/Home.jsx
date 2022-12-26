import { useState, useEffect, useRef } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { motion } from 'framer-motion';

import { Books } from 'phosphor-react';
import { BookCard } from '../../components/BookCard';
import { Link } from 'react-router-dom';

import sideImage from '../../assets/home-side-image.svg';
import './Home.css';

export function Home() {
  const { documents: books } = useCollection('books');

  const [searchTerm, setSearchTerm] = useState('');
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, 500);
  }, [books]);

  return (
    <div className="home-page">
      <main>
        <motion.header initial={{ x: -400 }} animate={{ x: 0 }}>
          <h1>Encontre seus livros favoritos em um só lugar</h1>
          <h2>Aqui você encontra informações sobre todos os seus livros</h2>

          <Link to="/working" className="explore-btn">
            <button>
              <Books size={22} weight="duotone" color='#FFF'/>
              Explorar livros
            </button>
          </Link>
        </motion.header>
        <motion.section
          className="home-side-image"
          initial={{ x: 400 }}
          animate={{ x: 0 }}
        >
          <img src={sideImage} alt="Menina sentada lendo um livro" />
        </motion.section>
      </main>

      <motion.section
        className="carousel-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.section
          className="carousel"
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="images"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {books &&
              books.map(book => <BookCard key={book.image} book={book} />)}
          </motion.div>
        </motion.section>
      </motion.section>
    </div>
  );
}
