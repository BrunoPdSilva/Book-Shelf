import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

import { MagnifyingGlass } from 'phosphor-react';
import { BookComponent } from './BookComponent';


export function ExploreBooks() {
  const [actualFilter, setActualFilter] = useState('all');
  const [termFilter, setTermFilter] = useState('');
  const { documents } = useCollection('books');

  function handleChange(term) {
    setTermFilter(term);
    setActualFilter('custom');
  }

  const books = documents && documents.filter(book => {
    switch (actualFilter) {
      case 'all':
        return true
      case 'custom':
        return book.title.toLowerCase().includes(termFilter.toLowerCase());
      case 'Autoajuda':
      case 'Aventura':
      case 'Biografia':
      case 'Educacao':
      case 'Fantasia':
      case 'Ficção_Cientifica':
      case 'História':
      case 'HQ':
      case 'Humor':
      case 'Informatica':
      case 'Terror':
      case 'Romance':
        return book.categories.includes(actualFilter)
      default:
        return true
    }
  })

  return (
    <div className="explore-books-page">
      <header>
        <div className="title">
          <h1>Livros</h1>
          <p>
            <Link to="/" style={{ color: 'var(--title)' }}>
              Início &#8250;
            </Link>
            <span> Livros</span>
          </p>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Procurar livro"
            onChange={e => handleChange(e.target.value)}
          />
          <MagnifyingGlass size={22} color="var(--icon)" weight='bold' />
        </div>
      </header>

      <main>
        <aside>
          
        </aside>

        <section className="books-container">
          {books &&
            books.map(book => (
              <BookComponent book={book} key={book.image} />
            ))}
        </section>
      </main>
    </div>
  );
}
