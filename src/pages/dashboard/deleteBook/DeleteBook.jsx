import { useState } from 'react';

import { useCollection } from '../../../hooks/useCollection';
import { useDelete } from '../../../hooks/useDelete';

import './DeleteBook.css';

export function DeleteBook() {
  const [book, setBook] = useState(null);
  const { documents: books } = useCollection('books');

  function filterBooks(searchTerm) {
    const result = books.filter(book => {
      return book.title.toLowerCase() === searchTerm.toLowerCase();
    });
    setBook(...result);
  }

  return (
    <div className="delete-book-wrapper">
      <h2>Deletar livro</h2>

      <div className="delete-input-container">
        <input
          type="text"
          placeholder="Pesquisar livro"
          onChange={e => filterBooks(e.target.value)}
        />
      </div>

      {book && (
        <div className="book-cover-container">
          <img src={book.image} alt="Capa do livro" />
        </div>
      )}

      <div className="buttons-container">
        <button>Cancelar</button>
        {book && <button onClick={() => useDelete(book.id)}>Deletar</button>}
      </div>
    </div>
  );
}
