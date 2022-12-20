import { DownloadSimple, ShoppingCart } from 'phosphor-react';
import PoderDoHabito from '../../assets/poder-do-habito.svg';
import './Book.css';

export function Book() {
  return (
    <div className="book-page">
      <header className="banner"></header>

      <main>
        <section className="book-section">
          <div className="image-container">
            <img src={PoderDoHabito} alt="Capa do Livro" />
          </div>

          <div className="buttons-container">
            <button>
              <ShoppingCart size={22} color="#FFF" weight="bold" />
              Comprar
            </button>

            <button>
              <DownloadSimple size={22} color="#000" weight="bold" />
              Download
            </button>
          </div>
        </section>

        <section className="book-details-container">
          <h1>O Poder do Hábito</h1>
          <h2>Charles Duhigg</h2>

          <p>
            Durante os últimos dois anos, uma jovem transformou quase todos os
            aspectos de sua vida. Parou de fumar, correu uma maratona e foi
            promovida. Em um laboratório, neurologistas descobriram que os
            padrões dentro do cérebro dela mudaram de maneira fundamental.
            Publicitários da Procter & Gamble observaram vídeos de pessoas
            fazendo a cama. Tentavam desesperadamente descobrir como vender um
            novo produto chamado Febreze, que estava prestes a se tornar um dos
            maiores fracassos na história da empresa. De repente, um deles
            detecta um padrão quase imperceptível - e, com uma sutil mudança na
            campanha publicitária, Febreze começa a vender um bilhão de dólares
            por anos. Um diretor executivo pouco conhecido assume uma das
            maiores empresas norte-americanas. Seu primeiro passo é atacar um
            único padrão entre os funcionários - a maneira como lidam com a
            segurança no ambiente de trabalho -, e logo a empresa começa a ter o
            melhor desempenho no índice Dow Jones. O que todas essas pessoas tem
            em comum? Conseguiram ter sucesso focando em padrões que moldam cada
            aspecto de nossas vidas. Tiveram êxito transformando hábitos. Com
            perspicácia e habilidade, Charles Duhigg apresenta um novo
            entendimento da natureza humana e seu potencial para a
            transformação.
          </p>
        </section>
      </main>
    </div>
  );
}
