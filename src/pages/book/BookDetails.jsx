import { Scroll, GlobeHemisphereWest, Buildings, Calendar } from 'phosphor-react';

import { BookInfo } from './BookInfo';
import { BookCategory } from './BookCategory';

import './BookDetails.css';

export function BookDetails(props) {
  const categories = [
    'Autoajuda',
    'Ficção Científica',
    'Terror',
    'História',
    'Humor',
    'Aventura',
  ];

  return (
    <>
      <h1>O Poder do Hábito</h1>
      <h2>Charles Duhigg</h2>

      <p>
        Durante os últimos dois anos, uma jovem transformou quase todos os
        aspectos de sua vida. Parou de fumar, correu uma maratona e foi
        promovida. Em um laboratório, neurologistas descobriram que os padrões
        dentro do cérebro dela mudaram de maneira fundamental. Publicitários da
        Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam
        desesperadamente descobrir como vender um novo produto chamado Febreze,
        que estava prestes a se tornar um dos maiores fracassos na história da
        empresa. De repente, um deles detecta um padrão quase imperceptível - e,
        com uma sutil mudança na campanha publicitária, Febreze começa a vender
        um bilhão de dólares por anos. Um diretor executivo pouco conhecido
        assume uma das maiores empresas norte-americanas. Seu primeiro passo é
        atacar um único padrão entre os funcionários - a maneira como lidam com
        a segurança no ambiente de trabalho -, e logo a empresa começa a ter o
        melhor desempenho no índice Dow Jones. O que todas essas pessoas tem em
        comum? Conseguiram ter sucesso focando em padrões que moldam cada
        aspecto de nossas vidas. Tiveram êxito transformando hábitos. Com
        perspicácia e habilidade, Charles Duhigg apresenta um novo entendimento
        da natureza humana e seu potencial para a transformação.
      </p>

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

      <div className="book-categories">
        {categories.map(category => <BookCategory type={category} />)}
      </div>
    </>
  );
}
