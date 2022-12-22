import { useParams } from 'react-router-dom';
import { useFetchDoc } from '../../hooks/useFetchDoc';

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
              <div className="image-card">
                <img src={document.image} alt="Capa do Livro" />
              </div>

              <div className="buttons-container">
                <a href={document.buy} target="_blank">
                  <BookButton type="cart" />
                </a>
                <BookButton type="download" />
              </div>
            </section>

            <section className="book-details-container">
              <BookDetails document={document} />
            </section>
          </main>
        </>
      ) : (
        <h2>Loading</h2>
      )}{' '}
    </div>
  );
}
