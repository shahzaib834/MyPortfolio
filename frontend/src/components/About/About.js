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
                Results-driven Full Stack Developer with 3+ years of experience in designing, developing, and deploying scalable web applications using modern technologies including React, Angular, Next.js, Node.js, NestJS, PostgreSQL, MySQL, and MongoDB. Adept at building responsive, user-centric solutions and optimizing system performance. Recognized for being a fast learner, problem solver, and proactive collaborator, with a strong focus on delivering business value through clean, efficient, and maintainable code. Seeking opportunities to leverage my expertise to drive innovation and contribute to organizational success.
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
