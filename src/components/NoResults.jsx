import NotFound from '../assets/no-results.png';
import '../styles/components/NoResults.scss';

export function NoResults({ text }) {
  return (
    <div className="NotFound">
      <img src={NotFound} alt="Não encontrado" />
      <h2>{text}</h2>
    </div>
  );
}
