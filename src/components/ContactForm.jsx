import React from 'react';
import '../css/ContactForm.css';

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id="contact">
      <div className="back-bar" />
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <h2>Contact</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Message Title" />
        <textarea name="" id="" placeholder="Your Message" />
        <button className="button-1" type="submit">Send</button>
      </form>
    </section>
  );
}
