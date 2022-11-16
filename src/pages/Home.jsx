// Logic Import
import React from 'react';
import AboutUs from '../components/AboutUs';
// Component Import
import Header from '../components/Header';
import MottoSections from '../components/MottoSection';
import ServicesCards from '../components/ServicesCards';
import Feedbacks from '../components/Feedbacks';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
// CSS Import
import '../css/Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <MottoSections />
        <AboutUs />
        <ServicesCards />
        <Feedbacks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
