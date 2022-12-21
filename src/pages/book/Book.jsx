import { BookDetails } from './BookDetails';
import { BookButton } from './BookButton';

import PoderDoHabito from '../../assets/poder-do-habito.svg';
import './Book.css';

export function Book() {
  return (
    <div className="book-page">
      <header className="banner"></header>

      <main>
        <section className="book-img-section">
          <div className="image-card">
            <img src={PoderDoHabito} alt="Capa do Livro" />
          </div>

          <div className="buttons-container">
            <BookButton type="cart" />
            <BookButton type="download" />
          </div>
        </section>

        <section className="book-details-container">
          <BookDetails />
        </section>
      </main>
    </div>
  );
}
