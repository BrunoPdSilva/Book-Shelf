import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

import { BookCategory } from '../book/BookCategory';
import { MagnifyingGlass } from 'phosphor-react';
import { BookComponent } from './BookComponent';

import '../../styles/pages/ExploreBooks.scss';

export function ExploreBooks() {
  const { documents } = useCollection('books');

  function filter(query) {
    books = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }

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
          {documents &&
            documents.map(book => (
              <BookComponent book={book} key={book.image} />
            ))}
        </section>
      </main>
    </div>
  );
}
