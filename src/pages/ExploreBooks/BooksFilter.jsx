import FiccaoCientifica from '../../assets/Icons/Ficcao Cientifica.png';
import Informatica from '../../assets/Icons/Informatica.png';
import Autoajuda from '../../assets/Icons/Autoajuda.png';
import Biografia from '../../assets/Icons/Biografia.png';
import Aventura from '../../assets/Icons/Aventura.png';
import Educacao from '../../assets/Icons/Educacao.png';
import Fantasia from '../../assets/Icons/Fantasia.png';
import Historia from '../../assets/Icons/Historia.png';
import Terror from '../../assets/Icons/Terror.png';
import Humor from '../../assets/Icons/Humor.png';
import Todos from '../../assets/Icons/Todos.png';
import Romance from '../../assets/Icons/Romance.png';
import HQ from '../../assets/Icons/HQ.png';

const categories = [
  'Todos livros',
  'Ficção Científica',
  'Informática',
  'Autoajuda',
  'Biografia',
  'Aventura',
  'Educação',
  'Fantasia',
  'História',
  'Terror',
  'Humor',
  'HQ',
  'Romance'
];

function getImage(type) {
  switch (type) {
    case 'Ficção Científica':
      return FiccaoCientifica;
    case 'Educação':
      return Educacao;
    case 'Informática':
      return Informatica;
    case 'Autoajuda':
      return Autoajuda;
    case 'Biografia':
      return Biografia;
    case 'Aventura':
      return Aventura;
    case 'Fantasia':
      return Fantasia;
    case 'História':
      return Historia;
    case 'Terror':
      return Terror;
    case 'Todos livros':
      return Todos;
    case 'Romance':
      return Romance;
    case 'Humor':
      return Humor;
    case 'HQ':
      return HQ;
    default:
      return null;
  }
}

export function BooksFilter({ setFilter, actualFilter }) {
  return (
    <>
      {categories.map(category => (
        <button
          className={
            actualFilter === category
              ? 'category-button active'
              : 'category-button'
          }
          onClick={() => setFilter(category)}
          key={category}
        >
          <img src={getImage(category)} alt={category} />
          {category}
        </button>
      ))}
    </>
  );
}
