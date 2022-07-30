import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div class='container'>
        <h2 class='section-title'>Contact</h2>
        <div class='contact-wrapper load-hidden'>
          <p class='contact-wrapper__text'>Need a Responsive Web App ?</p>
          <a
            rel='noreferrer'
            target='_blank'
            class='cta-btn cta-btn--resume'
            href='mailto:virgo834@email.com'
          >
            Call to Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
