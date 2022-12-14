import { BookCard } from '../../components/BookCard';
import { motion } from 'framer-motion';

import { useState, useRef, useEffect } from 'react';

import { useCollection } from '../../hooks/useCollection';

import {
  CaretDoubleLeft,
  CaretDoubleRight,
  MagnifyingGlass,
} from 'phosphor-react';
import sideImage from '../../assets/home-side-image.svg';
import './Home.css';

export function Home() {
  const [width, setWidth] = useState(0);
  const { documents: books } = useCollection('books');
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="home-page">
      <main>
        <header>
          <h1>Encontre seus livros favoritos em um só lugar</h1>
          <h2>Aqui você encontra informações sobre todos os seus livros</h2>

          <div className="search-input-group">
            <button>
              <MagnifyingGlass size={26} color="var(--title)" />
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

      <motion.div className="books-carousel" whileTap={{ cursor: 'grabbing' }}>
        {/* <CaretDoubleLeft size={26} color="var(--title)" /> */}
        <motion.section className="carousel" ref={carousel}>
          <motion.div
            className="images"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {books &&
              books.map((book, index) => <BookCard key={index} book={book} />)}
          </motion.div>
        </motion.section>
        {/* <CaretDoubleRight size={26} color="var(--title)" /> */}
      </motion.div>
    </div>
  );
}
