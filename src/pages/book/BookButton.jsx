import { ShoppingCart, BookBookmark } from 'phosphor-react';

import '../../styles/pages/book/BookButton.scss';

export function BookButton({ type }) {
  return (
    <>
      {type === 'download' ? (
        <button>
          <BookBookmark size={22} color="#000" weight="bold" />
          Ler livro
        </button>
      ) : (
        <button>
          <ShoppingCart size={22} color="#FFF" weight="bold" />
          Comprar
        </button>
      )}
    </>
  );
}