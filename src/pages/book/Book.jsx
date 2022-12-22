import { useFetchDoc } from '../../hooks/useFetchDoc';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BookDetails } from './BookDetails';
import { BookButton } from './BookButton';

import './Book.css';

export function Book() {
  const { id } = useParams();
  const { document } = useFetchDoc(id);

  console.log(document);

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
                <BookButton type="download" />
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
