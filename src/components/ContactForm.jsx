import React, { useState, useEffect } from 'react';
import '../css/ContactForm.css';

export default function ContactForm() {
  const [msg, setMsg] = useState({
    'First Name': '',
    'Last Name': '',
    Title: '',
    Message: '',
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

  return (
    <section id="contact">
      <div className="back-bar" />
      <form
        action="https://formsubmit.co/florenttino.company@gmail.com"
        method="POST"
        className="contact-form"
      >
        <h2>Contact</h2>
        <input name="First Name" type="text" placeholder="First Name" onChange={handleChange} />
        <input name="Last Name" type="text" placeholder="Last Name" onChange={handleChange} />
        <input name="Title" type="text" placeholder="Message Title" onChange={handleChange} />
        <textarea name="Message" id="" placeholder="Your Message" onChange={handleChange} />
        <button className="button-1" disabled={isDisabled} type="submit">Send</button>
      </form>
    </section>
  );
}
