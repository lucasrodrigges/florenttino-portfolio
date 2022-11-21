/* eslint-disable react/prop-types */
import React from 'react';

function Cards({ service }) {
  return (
    <div className="card-content">
      <h3>{service.title}</h3>
      <ul>
        {service.description.map((li) => <li key={li}>{li}</li>)}
      </ul>
    </div>
  );
}

export default Cards;
