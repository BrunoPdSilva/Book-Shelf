import { useReducer } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../../firebase/config';

import { Input } from '../Input';

import './UpdateBook.css';

const initialState = {
  title: '',
  author: '',
  length: '',
  categories: '',
  editor: '',
  language: '',
  image: '',
  buy: '',
  download: '',
  sinopse: '',
  publishDate: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'Título':
      return { ...state, title: action.payload };
    case 'Autor':
      return { ...state, author: action.payload };
    case 'Qnt. Páginas':
      return { ...state, length: action.payload };
    case 'Categorias':
      return { ...state, categories: action.payload };
    case 'Editora':
      return { ...state, editor: action.payload };
    case 'Idioma':
      return { ...state, language: action.payload };
    case 'URL da imagem':
      return { ...state, image: action.payload };
    case 'URL da compra':
      return { ...state, buy: action.payload };
    case 'URL do livro':
      return { ...state, download: action.payload };
    case 'Sinopse':
      return { ...state, sinopse: action.payload };
    case "Publicação":
      return { ...state, publishDate: action.payload };
    case 'clean':
      return initialState;
    default:
      return state;
  }
}

export function UpdateBook({ setState }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleSubmit(e) {
    e.preventDefault();

    const collectionRef = collection(dataBase, 'books');
    await addDoc(collectionRef, state);

    dispatch({ type: 'clean' });
  }

  return (
    <div className="update-form-wrapper">
      <h2>Atualizar livro</h2>

      <form onSubmit={handleSubmit}>
        <Input title="Título" dispatch={dispatch} value={state.title} />
        <div className="double-input">
          <Input title="Autor" dispatch={dispatch} value={state.author} />
          <Input title="Qnt. Páginas" dispatch={dispatch} value={state.length} />
        </div>
        <Input title="Categorias" dispatch={dispatch} value={state.categories} />
        <div className="double-input">
          <Input title="Editora" dispatch={dispatch} value={state.editor} />
          <Input title="Idioma" dispatch={dispatch} value={state.language} />
        </div>
        <Input title="URL da imagem" dispatch={dispatch} value={state.image} />
        <div className="double-input">
          <Input title="URL da compra" dispatch={dispatch} value={state.buy} />
          <Input title="Publicação" dispatch={dispatch} value={state.publishDate} />
        </div>
        <Input title="URL do livro" dispatch={dispatch} value={state.download} />
        <Input title="Sinopse" dispatch={dispatch} value={state.sinopse} />

      <div className="buttons-container">
        <button onClick={() => setState('buttonsActive')}>Cancelar</button>
        <button type="submit">Adicionar</button>
      </div>
      </form>
    </div>
  );
}
