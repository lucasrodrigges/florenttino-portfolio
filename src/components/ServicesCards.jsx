import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import services from '../helpers/utilData';
import '../css/ServicesCard.css';
import Cards from './Cards';

export default function ServicesCards() {
  return (
    <section id="services">
      <div className="back-bar" />
      <div className="services-content">
        <div className="father-content">
          <h2>Services</h2>
          <p>
            We offer solutions under a
            consulting tripod, to help our clients in every field required:
          </p>
        </div>
        <div className="slide-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            loop
            navigation
            speed={800}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <Cards service={services[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards service={services[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards service={services[2]} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
