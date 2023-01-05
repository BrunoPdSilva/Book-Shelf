import { motion } from 'framer-motion';

const techLinks = {
  HTML: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
  CSS: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  Sass: 'https://sass-lang.com/',
  JavaScript: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  Vite: 'https://vitejs.dev/',
  React: 'https://pt-br.reactjs.org/',
  Firebase: 'https://firebase.google.com/',
  Framer: 'https://www.framer.com/motion/',
  Phosphor: 'https://phosphoricons.com/',
};

export function Technology({ img, text }) {
  return (
    <motion.div
      className="technology"
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <a href={techLinks[text]} target="_blank">
        <img src={img} alt="Technology Logo" />
        <p>{text}</p>
      </a>
    </motion.div>
  );
}
