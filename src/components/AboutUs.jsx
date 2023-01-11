import React from 'react';
import '../css/AboutUs.css';
import profileImg from '../imgs/profile-image.jpg';

function AboutUs() {
  return (
    <section id="about">
      <div className="back-bar" />
      <div className="about-contianer">
        <img className="pfile-img" src={profileImg} alt="Florenttino" />
        <div className="aboutus-content">
          <h2>About Us</h2>
          <p>
            Our Consulting Company is designed to orchestrate a tripod as a whole - a unique global
            business, law & politics synergie united by a unyielding set of values, including a
            absolute commitment to responsible globalisation, being:
            <br />
            <br />
            The change that companies & persons aim to materialize in the world on his
            large spectrum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
