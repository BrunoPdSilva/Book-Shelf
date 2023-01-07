import { useGetImage } from '../../hooks/useGetImage';

export function Category({ type }) {
  return (
    <div className="category">
      <img src={useGetImage(type)} alt={type} />
      <h3>{type}</h3>
    </div>
  );
}
