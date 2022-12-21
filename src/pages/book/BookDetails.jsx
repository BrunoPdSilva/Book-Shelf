import { Scroll, GlobeHemisphereWest, Buildings, Calendar, CaretCircleUp, CaretCircleDown } from 'phosphor-react';
import { useState } from 'react';

import { BookInfo } from './BookInfo';
import { BookCategory } from './BookCategory';

import './BookDetails.css';

const categories = ['Autoajuda', 'Humor', 'Aventura'];

export function BookDetails({ title, author, text }) {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <>
      <div className="sumario">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{showMoreText ? text : text.substr(0, 880)}</p>
        <button onClick={() => setShowMoreText(!showMoreText)}>
          {showMoreText ? (
            <CaretCircleUp size={22} color="#FFFFFF" />
          ) : (
            <CaretCircleDown size={22} color="#FFFFFF" />
          )}
        </button>
      </div>

      <div className="book-categories">
        {categories.map(category => (
          <BookCategory type={category} />
        ))}
      </div>

      <div className="book-info">
        <BookInfo title="Número de páginas" data="408 páginas">
          <Scroll size={24} color="var(--title)" />
        </BookInfo>

        <BookInfo title="Idioma" data="Português">
          <GlobeHemisphereWest size={24} color="var(--title)" />
        </BookInfo>

        <BookInfo title="Editora" data="Objetiva">
          <Buildings size={24} color="var(--title)" />
        </BookInfo>

        <BookInfo title="Data de publicação" data="24 de setembro de 2012">
          <Calendar size={24} color="var(--title)" />
        </BookInfo>
      </div>
    </>
  );
}
