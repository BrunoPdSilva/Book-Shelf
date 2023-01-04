import { Link } from "react-router-dom";

export function BookComponent({ book }) {
  return (
    <Link to={`/books/${book.id}`} key={book.image}>
      <div className="card-wrapper">
        <img src={book.image} alt="" />
        <footer>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </footer>
      </div>
    </Link>
  );
}
