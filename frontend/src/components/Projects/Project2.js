import React from 'react';
import image from '../../assets/projectImages/project1/shopit_logo.png';

const Project2 = () => {
  return (
    <div class='row'>
      <div class='col-lg-4 col-sm-12'>
        <div class='project-wrapper__text load-hidden'>
          <h3 class='project-wrapper__text-title'>Shop-it Store</h3>
          <div>
            <p class='mb-4'>
              An e-commerce website that enables us to shop any item from the
              store and track it to the delivery. Shop-it has a responsive
              design with several features. App is made using MERN Technology.
            </p>
          </div>
          <a
            rel='noreferrer'
            target='_blank'
            class='cta-btn cta-btn--hero'
            href='#!'
          >
            See Live
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            class='cta-btn text-color-main'
            href='https://github.com/shahzaib834/Shop-It'
          >
            Source Code
          </a>
        </div>
      </div>
      <div class='col-lg-8 col-sm-12'>
        <div class='project-wrapper__image load-hidden'>
          <a rel='noreferrer' href='#!' target='_blank'>
            <div
              data-tilt
              data-tilt-max='4'
              data-tilt-glare='true'
              data-tilt-max-glare='0.5'
              class='thumbnail rounded js-tilt'
            >
              <img alt='Project' class='img-fluid' src={image} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project2;
