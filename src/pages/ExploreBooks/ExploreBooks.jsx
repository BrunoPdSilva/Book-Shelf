import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

import { BookCategory } from '../book/bookDetails/bookCategory/BookCategory';
import { MagnifyingGlass } from 'phosphor-react';

import './ExploreBooks.css';

export function ExploreBooks() {
  const { documents: books } = useCollection('books');

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
          <input type="text" placeholder="Procurar livro" />
          <MagnifyingGlass size={22} color="var(--text)" />
        </div>
      </header>

      <main>
        <aside>
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
          <BookCategory type="Fantasia" />
        </aside>

        <section className="books-container">
          {books &&
            books.map(book => (
              <Link to={`/books/${book.id}`}>
                <div className="card-wrapper" key={book.image}>
                  <img src={book.image} alt="" />
                  <footer>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </footer>
                </div>
              </Link>
            ))}
        </section>
      </main>
    </div>
  );
}
