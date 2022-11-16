import React from 'react';
import PropTypes from 'prop-types';

function ClientFeedback({ text, name, company }) {
  return (
    <div className="client-feedback">
      <div className="quote">
        <i className="fa-solid fa-quote-left" />
        <span className="text-quote">{text}</span>
        <i className="fa-solid fa-quote-right" />
      </div>
      <div className="quote-author">
        <span>
          <i className="fa-solid fa-minus" />
          <span> </span>
          {name}
        </span>
        {company}
      </div>
    </div>
  );
}

ClientFeedback.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ClientFeedback;
