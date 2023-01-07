import { useGetImage, categories } from '../../hooks/useGetImage';
import { motion } from 'framer-motion';

export function BooksFilter({ setFilter, actualFilter, setMenu }) {
  let acc = 0.1;
  return (
    <>
      {categories.map(category => {
        acc += 0.05;
        return (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: acc,
            }}
            className={
              actualFilter === category
                ? 'category-button active'
                : 'category-button'
            }
            onClick={() => {
              setFilter(category);
              setMenu(false);
            }}
            key={category}
          >
            <img src={useGetImage(category)} alt={category} />
            {category}
          </motion.button>
        );
      })}
    </>
  );
}
