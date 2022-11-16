import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../css/Header.css';
import NavBar from './NavBar';
import logo from '../imgs/marca-visual/logo19-edited.png';

export default function Header() {
  const { bars, setBars } = useContext(AppContext);

  return (
    <header>
      <section className="top-bar">
        <a className="a-logo" href="#home">
          <img className="logo-header" src={logo} alt="LOGO" />
        </a>
        <button
          className="reset-btn"
          type="button"
          onClick={() => setBars(!bars)}
        >
          <i
            className={bars ? 'fa-solid fa-bars bars' : 'fa-solid fa-xmark bars'}
          />
        </button>
      </section>
      <NavBar />
    </header>
  );
}
