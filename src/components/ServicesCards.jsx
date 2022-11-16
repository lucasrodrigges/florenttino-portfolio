import React, { useState, useEffect } from 'react';
import services from '../helpers/utilData';
import '../css/ServicesCard.css';

export default function ServicesCards() {
  const [count, setCount] = useState(0);
  const [toIncrease, setIncrease] = useState({ bool: false, operator: '+' });

  useEffect(() => {
    const { operator } = toIncrease;
    if (operator === '+' && count < 2) return setCount(count + 1);
    if (operator === '+' && count === 2) return setCount(0);
    if (operator === '-' && count > 0) return setCount(count - 1);
    return setCount(2);
  }, [toIncrease]);

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
        <div className="service-card">
          <button
            className="reset-btn-black-section left-b"
            type="button"
            onClick={() => {
              setIncrease({
                bool: !toIncrease.bool,
                operator: '-',
              });
            }}
          >
            <i className="fa-solid fa-chevron-left i-carousel" />
          </button>
          <button
            className="reset-btn-black-section right-b"
            type="button"
            onClick={() => {
              setIncrease({
                bool: !toIncrease.bool,
                operator: '+',
              });
            }}
          >
            <i className="fa-solid fa-chevron-right i-carousel" />
          </button>
          {services.map((el, i) => {
            if (count === i) {
              return (
                <div className="card-content" key={el.title}>
                  <h3>{el.title}</h3>
                  <ul>
                    {el.description.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return false;
          })}
        </div>
      </div>
    </section>
  );
}
