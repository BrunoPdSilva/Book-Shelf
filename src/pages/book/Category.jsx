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
import HQ from '../../assets/Icons/HQ.png';

export function Category({ type }) {
  function getImage(type) {
    switch (type) {
      case 'Ficção Científica':
        return FiccaoCientifica;
      case 'Educação':
        return Educacao;
      case 'Informatica':
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
      case 'Humor':
        return Humor;
      case 'HQ':
        return HQ;
      default:
        return null;
    }
  }

  return (
    <div className="category">
      <img src={getImage(type)} alt={type} />
      <h3>{type}</h3>
    </div>
  );
}
