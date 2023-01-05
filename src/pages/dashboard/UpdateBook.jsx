import { useState, useReducer } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { updateDoc, doc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';
import { motion } from 'framer-motion';

import { XCircle } from 'phosphor-react';
import { Feedback } from '../../components/Feedback';
import { Input } from './Input';

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
  publishDate: '',
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
    case 'Publicação':
      return { ...state, publishDate: action.payload };
    case 'UPDATE_BOOK':
      return {
        title: action.payload?.title,
        author: action.payload?.author,
        length: action.payload?.length,
        categories: action.payload?.categories,
        editor: action.payload?.editor,
        language: action.payload?.language,
        image: action.payload?.image,
        buy: action.payload?.buy,
        download: action.payload?.download,
        sinopse: action.payload?.sinopse,
        publishDate: action.payload?.publishDate,
      };
    case 'clean':
      return initialState;
    default:
      return state;
  }
}

export function UpdateBook({ setState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { documents: books } = useCollection('books');

  function filterBooks(searchTerm) {
    if (searchTerm.length > 0) {
      const result = books.filter(book => {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setBook(...result);
      if (book !== null) {
        dispatch({ type: 'UPDATE_BOOK', payload: book });
      }
    } else if (searchTerm.length === 0) {
      setBook('');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const collectionRef = doc(dataBase, 'books', book.id);

    updateDoc(collectionRef, state)
      .then(() => {
        setBook(null);
        setSuccess(true);
        setTimeout(() => setSuccess(null), 3000);
        dispatch({ type: 'clean' });
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setTimeout(() => setError(null), 3000);
      });

    dispatch({ type: 'clean' });
  }

  return (
    <motion.div
      className="update-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
    >
      <h2>Atualizar livro</h2>
      <XCircle size={26} color="var(--title)" className='close-button' onClick={() => setState('buttonsActive')}/>


      <div className="search-book">
        <input
          type="text"
          placeholder="Pesquisar livro"
          onChange={e => filterBooks(e.target.value)}
        />
      </div>

      {book && (
        <div className="book-cover">
          <img src={book.image} alt="Capa do livro" />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {book && (
          <>
            <Input
              title="Título"
              dispatch={dispatch}
              placeholder={book?.title}
              value={state?.title}
            />
            <div className="double-input">
              <Input
                title="Autor"
                dispatch={dispatch}
                placeholder={book?.author}
                value={state?.author}
              />
              <Input
                title="Qnt. Páginas"
                dispatch={dispatch}
                placeholder={book?.length}
                value={state?.length}
              />
            </div>
            <Input
              title="Categorias"
              dispatch={dispatch}
              placeholder={book?.categories}
              value={state?.categories}
            />
            <div className="double-input">
              <Input
                title="Editora"
                dispatch={dispatch}
                placeholder={book?.editor}
                value={state?.editor}
              />
              <Input
                title="Idioma"
                dispatch={dispatch}
                placeholder={book?.language}
                value={state?.language}
              />
            </div>
            <Input
              title="URL da imagem"
              dispatch={dispatch}
              placeholder={book?.image}
              value={state?.image}
            />
            <div className="double-input">
              <Input
                title="URL da compra"
                dispatch={dispatch}
                placeholder={book?.buy}
                value={state?.buy}
              />
              <Input
                title="Publicação"
                dispatch={dispatch}
                placeholder={book?.publishDate}
                value={state?.publishDate}
              />
            </div>
            <Input
              title="URL do livro"
              dispatch={dispatch}
              placeholder={book?.download}
              value={state?.download}
            />
            <Input
              title="Sinopse"
              dispatch={dispatch}
              placeholder={book?.sinopse}
              value={state?.sinopse}
            />
          </>
        )}

        <div className="buttons-container">
          <button onClick={() => setState('buttonsActive')}>Cancelar</button>
          <button type="submit">Atualizar</button>
        </div>
      </form>
      {success && (
        <Feedback
          text="Atualizado com sucesso"
          type="success"
          color="#06D6A0"
        />
      )}
      {error && (
        <Feedback
          text="Falha ao atualizar livro"
          type="error"
          color="#EB5E28"
        />
      )}
    </motion.div>
  );
}
