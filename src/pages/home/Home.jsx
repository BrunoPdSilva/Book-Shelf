import { useState, useEffect, useRef } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { motion } from 'framer-motion';

import { MagnifyingGlass } from 'phosphor-react';
import { BookCard } from '../../components/BookCard';

import sideImage from '../../assets/home-side-image.svg';
import './Home.css';

export function Home() {
  const { documents: books } = useCollection('books');
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, 500);
  }, []);

  return (
    <div className="home-page">
      <main>
        <header>
          <h1>Encontre seus livros favoritos em um só lugar</h1>
          <h2>Aqui você encontra informações sobre todos os seus livros</h2>

          <div className="search-input-group">
            <button>
              <MagnifyingGlass size={26} color="var(--title)" className='icon'/>
            </button>
            <input
              type="text"
              placeholder="Procurar um livro"
              autoComplete="none"
            />
          </div>
        </header>
        <section className="home-side-image">
          <img src={sideImage} alt="Menina sentada lendo um livro" />
        </section>
      </main>

      <section className="carousel-container">
        <motion.section
          className="carousel"
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="images"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {books &&
              books.map(book => <BookCard key={book.image} book={book} />)}
          </motion.div>
        </motion.section>
      </section>
    </div>
  );
}
