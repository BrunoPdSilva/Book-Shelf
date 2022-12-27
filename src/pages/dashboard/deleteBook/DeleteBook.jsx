import { MagnifyingGlass } from 'phosphor-react';

import './DeleteBook.css';

export function DeleteBook() {
  return (
    <div className="delete-book-wrapper">
      <h2>Deletar livro</h2>

      <div className="delete-input-group">
        <input type="text" placeholder="Título do livro" />
        <button>
          <MagnifyingGlass size={18} color="#FFF" />
        </button>
      </div>

      <div className="book-cover-container">
        <img
          src="https://imagens.lelivros.org/2013/05/Download-O-Poder-do-Habito-Charles-Duhigg-em-ePUB-mobi-PDF2-370x532.jpg"
          alt=""
        />
      </div>

      <div className="buttons-container">
        <button>Cancelar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
}
