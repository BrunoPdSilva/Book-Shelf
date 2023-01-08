import HTML from '../assets/html.svg';
import CSS from '../assets/css.png';
import Sass from '../assets/Sass.svg';
import JavaScript from '../assets/javascript.png';
import Vite from '../assets/vite.png';
import React from '../assets/react.svg';
import Firebase from '../assets/firebase.png';
import Framer from '../assets/framer.png';
import Phosphor from '../assets/phosphor.png';

import { Link } from 'react-router-dom';
import { Technology } from '../components/Technology';
import { Copyright } from 'phosphor-react';
import { motion } from 'framer-motion';

import Home from '../assets/home-desktop.png';
import Book from '../assets/book-desktop.png';
import LogoWhiteTheme from '../assets/logo-w-theme.svg';
import LogoDarkTheme from '../assets/logo-d-theme.svg';

export function About({ theme }) {
  return (
    <div className="about-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      >
        <Link to="/">
          {theme === 'light' ? (
            <img src={LogoWhiteTheme} alt="" className="logo" />
          ) : (
            <img src={LogoDarkTheme} alt="" className="logo" />
          )}
        </Link>
      </motion.div>

      <motion.section
        className="images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
      >
        <motion.img
          src={Home}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        />
        <motion.img
          src={Book}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        />
      </motion.section>

      <motion.section
        className="technologies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.4,
        }}
      >
        <Technology text="HTML" img={HTML} />
        <Technology text="CSS" img={CSS} />
        <Technology text="Sass" img={Sass} />
        <Technology text="JavaScript" img={JavaScript} />
        <Technology text="Vite" img={Vite} />
        <Technology text="React" img={React} />
        <Technology text="Firebase" img={Firebase} />
        <Technology text="Framer" img={Framer} />
        <Technology text="Phosphor" img={Phosphor} />
      </motion.section>

      <motion.section
        className="info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <h3>Projeto sem fins lucrativos</h3>
        <p>
          Este projeto foi criado apenas para estudar e praticar programação.
          SUA CÓPIA É PROIBIDA!
        </p>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.6,
        }}
      >
        <Copyright size={22} color="var(--icon)" />
        <p>Copyright - Bruno Peres da Silva 2023</p>
      </motion.footer>
    </div>
  );
}
