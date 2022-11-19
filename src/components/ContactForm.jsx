import React, { useState, useEffect } from 'react';
import '../css/ContactForm.css';

export default function ContactForm() {
  const [msg, setMsg] = useState({
    firstName: '',
    lastName: '',
    messageTitle: '',
    messageBody: '',
  });
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    const values = Object.values(msg);

    if (values.every((el) => el)) setDisabled(false);
    else setDisabled(true);
  }, [msg]);

  function handleChange({ target: { name, value } }) {
    setMsg({
      ...msg,
      [name]: value,
    });
  }

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
        <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
        <input name="messageTitle" type="text" placeholder="Message Title" onChange={handleChange} />
        <textarea name="messageBody" id="" placeholder="Your Message" onChange={handleChange} />
        <button className="button-1" disabled={isDisabled} type="submit">Send</button>
      </form>
    </section>
  );
}
