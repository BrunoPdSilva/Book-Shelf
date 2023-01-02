import HTML from '../../assets/html.svg';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import Vite from '../../assets/vite.png';
import React from '../../assets/react.svg';
import Firebase from '../../assets/firebase.png';
import Framer from '../../assets/framer.png';
import Phosphor from '../../assets/phosphor.png';

import { Technology } from '../../components/Technology';

import { Copyright } from 'phosphor-react';

import Home from '../../assets/home-desktop.png';
import Book from '../../assets/book-desktop.png';

import './About.css';

export function About() {
  return (
    <div className='about-page'>
      <h1>Book Shelf</h1>

      <section className="page-images">
        <img src={Home} alt="" />
        <img src={Book} alt="" />
      </section>

      <section className="technologies">
        <Technology text="HTML" img={HTML}/>
        <Technology text="CSS" img={CSS}/>
        <Technology text="JavaScript" img={JavaScript}/>
        <Technology text="Vite" img={Vite}/>
        <Technology text="React" img={React}/>
        <Technology text="Firebase" img={Firebase}/>
        <Technology text="Framer" img={Framer}/>
        <Technology text="Phosphor" img={Phosphor}/>
      </section>

      <section className="info">
        <h3>Projeto sem fins lucrativos</h3>
        <p>Este projeto foi criado apenas para estudar e praticar programação. SUA CÓPIA É PROIBIDA!</p>
      </section>

      <footer>
        <Copyright size={32} color="var(--title)"/>
        <p>Copyright - Bruno Peres da Silva 2023</p>
      </footer>
    </div>
  )
}
