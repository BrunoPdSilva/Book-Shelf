import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

import { MagnifyingGlass } from 'phosphor-react';
import { NoResults } from '../../components/NoResults';
import { BookComponent } from './BookComponent';
import { BooksFilter } from './BooksFilter';

import MenuIcon from '../../assets/menu-icon.svg'

export function ExploreBooks() {
  const [actualFilter, setActualFilter] = useState('Todos livros');
  const [termFilter, setTermFilter] = useState('');
  const { documents } = useCollection('books');
  const [categorieMenu, setCategorieMenu] = useState(false);

  function handleChange(term) {
    setTermFilter(term.trim());
    setActualFilter('custom');
    if(term == "") { setActualFilter("Todos livros") }
  }

  const books =
    documents &&
    documents.filter(book => {
      switch (actualFilter) {
        case 'Todos livros':
          return true;
        case 'custom':
          return book.title.toLowerCase().includes(termFilter.toLowerCase());
        case 'Autoajuda':
        case 'Aventura':
        case 'Biografia':
        case 'Educação':
        case 'Fantasia':
        case 'Ficção Científica':
        case 'História':
        case 'HQ':
        case 'Humor':
        case 'Informática':
        case 'Terror':
        case 'Romance':
          return book.categories.includes(actualFilter);
        default:
          return true;
      }
    });

  return (
    <div className="explore-books-page">
      <header>
        <div className="title">
          <h1>Livros</h1>
          <p>
            <Link to="/" style={{ color: 'var(--title)' }}>
              Início &#8250;
            </Link>
            <span> Livros</span>
          </p>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Procurar livro"
            onChange={e => handleChange(e.target.value)}
          />
          <MagnifyingGlass size={22} color="var(--icon)" weight="bold" />
        </div>
      </header>

      <main>
        <button className='menu-icon' onClick={() => setCategorieMenu(!categorieMenu)}>
          <img src={MenuIcon} alt="" />
          Categorias
        </button>
        <aside className={categorieMenu ? "active": ""}>
          <BooksFilter
            setFilter={setActualFilter}
            actualFilter={actualFilter}
            setMenu={setCategorieMenu}
          />
        </aside>

        <section className={categorieMenu ? "categorieMenu": ""}>
          {books && books.length > 0 && (
            <div className="books-container">
             {books.map(book => <BookComponent book={book} key={book.image} />)}
            </div>
          )}
          {books && books.length === 0 && (
            <NoResults text="Desculpe, não encontramos o livro" />
          )}
        </section>
      </main>
    </div>
  );
}
