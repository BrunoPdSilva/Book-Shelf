import { MapPin, Envelope, WhatsappLogo } from 'phosphor-react';
import { motion } from 'framer-motion';

import ContactIMG from '../assets/Contact.svg';

import '../styles/pages/Contact.scss';

export function Contact() {
  return (
    <div className="contact-page">
      <main className="contact-page-container">
        <motion.section
          className="contact-info"
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1>Entre em contato com a gente!</h1>

          <div>
            <MapPin size={32} color="var(--text)" />
            <p>R. Amauri Souza, 346</p>
          </div>

          <div>
            <Envelope size={32} color="var(--text)" />
            <p>book-shelf@hotmail.com</p>
          </div>

          <a href="https://wa.me/5515988266126" target="_blank">
            <button>
              <WhatsappLogo size={32} color="#FFF" />
              <p>WhatsApp</p>
            </button>
          </a>
        </motion.section>

        <motion.section
          className="img-section"
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img src={ContactIMG} alt="Imagem ilustrativa de contato" />
        </motion.section>
      </main>
    </div>
  );
}
