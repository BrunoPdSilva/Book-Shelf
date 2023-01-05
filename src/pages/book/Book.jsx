import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useFetchDoc } from '../../hooks/useFetchDoc';
import { Details } from './Details';
import { BookButton } from './BookButton';

import '../../styles/pages/book/Book.scss';

export function Book() {
  const { id } = useParams();
  const { document } = useFetchDoc(id);

  return (
    <div className="book-page">
      {document ? (
        <>
          <header className="banner"></header>

          <main>
            <section className="book-cover">
              <motion.div
                className="cover-card"
                animate={{ x: 0 }}
                initial={{ x: -460 }}
              >
                <img src={document.image} alt="Capa do Livro" />
              </motion.div>

              <BookButton buy={document.buy} download={document.download} />
            </section>

            <motion.section
              className="details"
              animate={{ x: 0 }}
              initial={{ x: 1200 }}
              transition={{ delay: 0.3, ease: 'linear' }}
            >
              <Details document={document} />
            </motion.section>
          </main>
        </>
      ) : (
        ''
      )}{' '}
    </div>
  );
}
