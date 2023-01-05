import { useState } from 'react';
import { dataBase } from '../../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';

import { useCollection } from '../../hooks/useCollection';
import { Feedback } from '../../components/Feedback';

export function DeleteBook({ setState }) {
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
    } else if (searchTerm.length === 0) {
      setBook('');
    }
  }

  async function handleDelete() {
    setError(null);
    setSuccess(null);

    try {
      const docRef = doc(dataBase, 'books', book.id);
      await deleteDoc(docRef);
      setBook(null);
      setSuccess(true);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setBook(null);
      setError(err);
      setTimeout(() => setError(null), 3000);
    }
  }

  return (
    <motion.div
      className="delete-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
    >
      <h2>Deletar livro</h2>

      <input
        type="text"
        placeholder="Pesquisar livro"
        onChange={e => filterBooks(e.target.value)}
      />

      {book && (
        <div className="book-cover">
          <img src={book.image} alt="Capa do livro" />
        </div>
      )}

      {success && (
        <Feedback text="Deletado com sucesso" type="success" color="#06D6A0" />
      )}
      {error && (
        <Feedback text="Falha ao deletar" type="error" color="#EB5E28" />
      )}

      <div className="buttons-container">
        <button onClick={() => setState('buttonsActive')}>Cancelar</button>
        {book && <button onClick={handleDelete}>Deletar</button>}
      </div>
    </motion.div>
  );
}
