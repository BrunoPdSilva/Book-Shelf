
import { CaretDoubleLeft, CaretDoubleRight, MagnifyingGlass } from 'phosphor-react';
import sideImage from "../../assets/home-side-image.svg";
import './Home.css';

export function Home() {
  return (
    <div className="home-page">
      <main>
        <header>
          <h1>Encontre seus livros favoritos em um só lugar</h1>
          <h2>Aqui você encontra informações sobre todos os seus livros</h2>

          <div className="search-input-group">
            <button>
              <MagnifyingGlass size={26} color="var(--title)" />
            </button>
            <input
              type="text"
              placeholder="Procurar um livro"
              autoComplete="none"
            />
          </div>
        </header>
        <section className="home-side-image">
          <img src={sideImage} alt="Menina sentada lendo um livro" />
        </section>
      </main>
      <div className="books-carousel">
        <CaretDoubleLeft size={26} color="var(--title)" />
        <section className='carousel'></section>
        <CaretDoubleRight size={26} color="var(--title)" />
      </div>
    </div>
  );
}
