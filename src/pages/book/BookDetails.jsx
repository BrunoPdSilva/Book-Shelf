import { Scroll, GlobeHemisphereWest, Buildings, Calendar, CaretCircleUp, CaretCircleDown } from 'phosphor-react';
import { useState } from 'react';

import { BookInfo } from './BookInfo';
import { BookCategory } from './BookCategory';

import './BookDetails.css';

export function BookDetails({ data }) {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <>
      <div className="sumario">
        <h1>{data.title}</h1>
        <h2>{data.author}</h2>
        <p>{showMoreText ? data.text : data.text.substr(0, 840)}</p>
        <button onClick={() => setShowMoreText(!showMoreText)}>
          {showMoreText ? (
            <CaretCircleUp size={22} color="#FFFFFF" />
          ) : (
            <CaretCircleDown size={22} color="#FFFFFF" />
          )}
        </button>
      </div>

      <div className="book-categories">
        {data.categories.map(category => (
          <BookCategory key={category} type={category} />
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
