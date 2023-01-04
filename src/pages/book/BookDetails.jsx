import {
  Scroll,
  GlobeHemisphereWest,
  Buildings,
  Calendar,
  CaretCircleUp,
  CaretCircleDown,
} from 'phosphor-react';
import { useState } from 'react';

import { BookInfo } from './BookInfo';
import { BookCategory } from './BookCategory';

import '../../styles/pages/book/BookDetails.scss';

export function BookDetails({ document }) {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <>
      <div className="sumario">
        <h1>{document.title}</h1>
        <h2>{document.author}</h2>
        <p>
          {showMoreText ? document.sinopse : document.sinopse.substr(0, 840)}
        </p>
        <button onClick={() => setShowMoreText(!showMoreText)}>
          {showMoreText ? (
            <CaretCircleUp size={22} color="#FFFFFF" />
          ) : (
            <CaretCircleDown size={22} color="#FFFFFF" />
          )}
        </button>
      </div>

      <div className="book-categories">
        {document.categories.map(category => (
          <BookCategory key={category} type={category} />
        ))}
      </div>

      <div className="book-info">
        <BookInfo title="Número de páginas" data={`${document.length} páginas`}>
          <Scroll size={24} color="var(--text)" />
        </BookInfo>

        <BookInfo title="Idioma" data={document.language}>
          <GlobeHemisphereWest size={24} color="var(--text)" />
        </BookInfo>

        <BookInfo title="Editora" data={document.editor}>
          <Buildings size={24} color="var(--text)" />
        </BookInfo>

        <BookInfo title="Data de publicação" data={document.publishDate}>
          <Calendar size={24} color="var(--text)" />
        </BookInfo>
      </div>
    </>
  );
}
