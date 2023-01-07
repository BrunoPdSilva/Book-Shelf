import { useCollection } from '../../hooks/useCollection';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BookComponent } from './BookComponent';
import { BooksFilter } from './BooksFilter';
import { NoResults } from '../../components/NoResults';

import { MagnifyingGlass } from 'phosphor-react';
import MenuIcon from '../../assets/menu-icon.svg';

export function ExploreBooks() {
  const [showCategorie, setShowCategorie] = useState(false);
  const [actualFilter, setActualFilter] = useState('Todos livros');
  const [filter, setFilter] = useState('');

  const { documents } = useCollection('books');

  function handleFilter(term) {
    setFilter(term.trim());
    setActualFilter('custom');

    if (term == '') {
      setActualFilter('Todos livros');
    }
  }

  const books =
    documents &&
    documents.filter(book => {
      switch (actualFilter) {
        case 'Todos livros':
          return true;
        case 'custom':
          return book.title.toLowerCase().includes(filter.toLowerCase());
        case 'Autoajuda':
        case 'Aventura':
        case 'Biografia':
        case 'Educação':
        case 'Fantasia':
        case 'Ficção Científica':
        case 'História':
        case 'HQ':
        case 'Humor':
        case 'Informática':
        case 'Terror':
        case 'Romance':
          return book.categories.includes(actualFilter);
        default:
          return true;
      }
    });

  let acc = 0.1;

  return (
    <div className="explore-books-page">
      <header>
        <motion.div
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <h1>Livros</h1>
          <p>
            <Link to="/" style={{ color: 'var(--title)' }}>
              Início &#8250;
            </Link>
            <span> Livros</span>
          </p>
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
        >
          <input
            type="text"
            placeholder="Procurar livro"
            onChange={e => handleFilter(e.target.value)}
          />
          <MagnifyingGlass size={22} color="var(--icon)" weight="bold" />
        </motion.div>
      </header>

      <main>
        <button
          className="menu-icon"
          onClick={() => setShowCategorie(!showCategorie)}
        >
          <img src={MenuIcon} alt="Icon" />
          Categorias
        </button>
        <motion.aside
          className={showCategorie ? 'active' : ''}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <BooksFilter
            setFilter={setActualFilter}
            actualFilter={actualFilter}
            setMenu={setShowCategorie}
          />
        </motion.aside>

        <motion.section
          className={showCategorie ? 'categorieMenu' : ''}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
        >
          {books && books.length > 0 && (
            <div className="books-container">
              {books.map(book => {
                acc += 0.07;
                return <BookComponent book={book} key={book.image} acc={acc}/>;
              })}
            </div>
          )}
          {books && books.length === 0 && (
            <NoResults text="Desculpe, não encontramos o livro" />
          )}
        </motion.section>
      </main>
    </div>
  );
}
