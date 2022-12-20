import { DownloadSimple, ShoppingCart } from 'phosphor-react';
import PoderDoHabito from '../../assets/poder-do-habito.svg';
import './Book.css';

export function Book() {
  return (
    <div className="book-page">
      <header className="banner"></header>

      <main>
        <section className="book-section">
          <div className="image-container">
            <img src={PoderDoHabito} alt="Capa do Livro" />
          </div>

          <div className="buttons-container">
            <button>
              <ShoppingCart size={22} color="#FFF" weight='bold' />
              Comprar
            </button>

            <button>
              <DownloadSimple size={22} color="#000" weight="bold" />
              Download
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
