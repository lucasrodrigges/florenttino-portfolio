import React from 'react';
import ClientFeedback from './ClientFeedback';
import '../css/Feedbacks.css';

const CLIENT1_TEXT = 'Florenttino & Co. has increased my business profit by over 100%!';
const CLIENT2_TEXT = 'I\'m really grateful to Florenttino & Co., my company has hit a goldmine since.';

function Feedbacks() {
  return (
    <section id="feedbacks">
      <div className="back-bar" />
      <div className="feedbacks-content">
        <ClientFeedback text={CLIENT1_TEXT} name="Jorge Miles" company="Diamond Company" />
        <ClientFeedback text={CLIENT2_TEXT} name="Fred Muster" company="Muster Vehicles" />
      </div>
    </section>
  );
}

export default Feedbacks;
