import { MapPin, Envelope, WhatsappLogo } from 'phosphor-react';

import ContactIMG from '../../assets/Contact.svg';

import './Contact.css';

export function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-info">
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
      </section>

      <section className="img-section">
        <img src={ContactIMG} alt="Imagem ilustrativa de contato" />
      </section>
    </div>
  );
}
