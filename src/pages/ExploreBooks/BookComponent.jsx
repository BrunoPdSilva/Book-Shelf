import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function BookComponent({ book, acc }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: acc,
      }}
    >
      <Link to={`/books/${book.id}`} key={book.image}>
        <div className="card-wrapper">
          <img src={book.image} alt="" />
          <footer>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </footer>
        </div>
      </Link>
    </motion.div>
  );
}
