import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../css/NavBar.css';

// eslint-disable-next-line react/prop-types
export default function NavBar() {
  const { bars, setBars } = useContext(AppContext);
  return (
    <div className={bars ? 'nav-header not-show' : 'nav-header show'}>
      <a href="#home" role="button" onClick={() => setBars(true)}>HOME</a>
      <a href="#about" role="button" onClick={() => setBars(true)}>ABOUT US</a>
      <a href="#services" role="button" onClick={() => setBars(true)}>SERVICES</a>
      <a href="#feedbacks" role="button" onClick={() => setBars(true)}>FEEDBACKS</a>
      <a href="#contact" role="button" onClick={() => setBars(true)}>CONTACT</a>
      <a href="#footer" role="button" onClick={() => setBars(true)}>SOCIALS</a>
    </div>
  );
}
