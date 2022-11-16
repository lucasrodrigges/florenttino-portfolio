import React from 'react';
import '../css/SocialCards.css';

export default function SocialCards() {
  return (
    <section id="socials">
      <div className="back-bar" />
      <a
        href="https://www.linkedin.com/in/carollina-florenttino-46720a256/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin" />
      </a>
      <a
        href="https://www.twitter.com/FlorenttinoCO"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.instagram.com/florenttinoco"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100087276680744"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-facebook" />
      </a>
    </section>
  );
}
