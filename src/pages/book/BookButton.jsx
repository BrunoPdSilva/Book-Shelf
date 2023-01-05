import { motion } from 'framer-motion';
import { ShoppingCart, BookBookmark } from 'phosphor-react';

export function BookButton({ buy, download }) {
  return (
    <motion.div
      className="buttons-container"
      animate={{ x: 0 }}
      initial={{ x: -460 }}
      transition={{ delay: 0.3, ease: 'linear' }}
    >
      <a href={buy} target="_blank">
        <button>
          <ShoppingCart size={22} color="#FFF" weight="bold" />
          Comprar
        </button>
      </a>
      <a href={download} target="_blank">
        <button>
          <BookBookmark size={22} color="var(--title)" weight="bold" />
          Ler livro
        </button>
      </a>
    </motion.div>
  );
}
