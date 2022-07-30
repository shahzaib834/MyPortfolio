import React from 'react';
import image from '../../assets/image.jpeg';
import resume from '../../assets/resume.pdf';

const About = () => {
  return (
    <section id='about'>
      <div class='container'>
        <h2 class='section-title load-hidden'>About me</h2>
        <div class='row about-wrapper'>
          <div class='col-md-6 col-sm-12'>
            <div class='about-wrapper__image load-hidden'>
              <img
                alt='Profile'
                class='img-fluid rounded shadow-lg'
                height='auto'
                width='300px'
                src={image}
              />
            </div>
          </div>
          <div class='col-md-6 col-sm-12'>
            <div class='about-wrapper__info load-hidden'>
              <p class='about-wrapper__info-text'>
                A highly motivated and self-driven MERN Stack developer.
                Building beautiful and responsive web apps for quite some time
                now. A proactive and fast-learning individual seeking more
                better opportunities for professional experience that will allow
                me to develop and expand my ability, knowledge, skills, and
                experience to help the company achieve its business goals of the
                organization.
              </p>

              <span class='d-flex mt-3'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  class='cta-btn cta-btn--resume'
                  href={resume}
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
