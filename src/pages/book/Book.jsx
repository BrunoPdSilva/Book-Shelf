import { BookDetails } from './BookDetails';
import { BookButton } from './BookButton';

import PoderDoHabito from '../../assets/poder-do-habito.svg';
import './Book.css';

const data = {
  title: 'O Poder do Hábito',
  author: 'Charles Duhigg',
  categories: ['Autoajuda', 'Humor', 'Aventura'],
  text: ` Durante os últimos dois anos, uma jovem transformou quase todos os
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
  da natureza humana e seu potencial para a transformação.`,
};

export function Book() {
  return (
    <div className="book-page">
      <header className="banner"></header>

      <main>
        <section className="book-img-section">
          <div className="image-card">
            <img src={PoderDoHabito} alt="Capa do Livro" />
          </div>

          <div className="buttons-container">
            <BookButton type="cart" />
            <BookButton type="download" />
          </div>
        </section>

        <section className="book-details-container">
          <BookDetails data={data} />
        </section>
      </main>
    </div>
  );
}
