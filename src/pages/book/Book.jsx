import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useFetchDoc } from '../../hooks/useFetchDoc';
import { BookDetails } from './bookDetails/BookDetails';
import { BookButton } from './bookButton/BookButton';

import './Book.css';

export function Book() {
  const { id } = useParams();
  const { document } = useFetchDoc(id);

  return (
    <div className="book-page">
      {document ? (
        <>
          <header className="banner"></header>

          <main>
            <section className="book-img-section">
              <motion.div
                className="image-card"
                animate={{ x: 0 }}
                initial={{ x: -460 }}
              >
                <img src={document.image} alt="Capa do Livro" />
              </motion.div>

              <motion.div
                className="buttons-container"
                animate={{ x: 0 }}
                initial={{ x: -460 }}
                transition={{ delay: 0.3, ease: 'linear' }}
              >
                <a href={document.buy} target="_blank">
                  <BookButton type="cart" />
                </a>
                <a href={document.download} target="_blank">
                  <BookButton type="download" />
                </a>
              </motion.div>
            </section>

            <motion.section
              className="book-details-container"
              animate={{ x: 0 }}
              initial={{ x: 1200 }}
              transition={{ delay: 0.3, ease: 'linear' }}
            >
              <BookDetails document={document} />
            </motion.section>
          </main>
        </>
      ) : (
        ''
      )}{' '}
    </div>
  );
}
