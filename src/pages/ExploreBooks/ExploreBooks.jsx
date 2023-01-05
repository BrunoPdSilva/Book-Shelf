import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

import { Category } from '../book/Category';
import { MagnifyingGlass } from 'phosphor-react';
import { BookComponent } from './BookComponent';


export function ExploreBooks() {
  const { documents } = useCollection('books');

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
            onChange={e => setTerm(e.target.value)}
          />
          <MagnifyingGlass size={22} color="var(--icon)" weight='bold' />
        </div>
      </header>

      <main>
        <aside>
          
        </aside>

        <section className="books-container">
          {documents &&
            documents.map(book => (
              <BookComponent book={book} key={book.image} />
            ))}
        </section>
      </main>
    </div>
  );
}
