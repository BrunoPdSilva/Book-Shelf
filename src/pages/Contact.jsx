import { MapPin, Envelope, WhatsappLogo } from 'phosphor-react';
import { motion } from 'framer-motion';

import ContactIMG from '../assets/Contact.svg';

export function Contact() {
  return (
    <div className="contact-page">
      <main>
        <motion.section
          className="contact-info"
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1>Entre em contato com a gente!</h1>

          <div>
            <MapPin size={32} color="var(--icon)" />
            <p>R. Amauri Souza, 346</p>
          </div>

          <div>
            <Envelope size={32} color="var(--icon)" />
            <p>book-shelf@hotmail.com</p>
          </div>

          <a href="https://wa.me/5515988266126" target="_blank">
            <button>
              <WhatsappLogo size={32} color="#FFF" weight='regular'/>
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
