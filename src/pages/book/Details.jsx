import { CaretCircleUp, CaretCircleDown } from 'phosphor-react';
import { useState } from 'react';

import { Information } from './Information';
import { Category } from './Category';

export function Details({ document }) {
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

      <div className="categories">
        {document.categories.map(category => (
          <Category key={category} type={category} />
        ))}
      </div>

      <Information data={document} />
    </>
  );
}
