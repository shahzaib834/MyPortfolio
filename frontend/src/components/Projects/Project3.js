import React from 'react';
import image from '../../assets/projectImages/project3/facebook_cover_photo_1.png';

const Project3 = () => {
  return (
    <div class='row'>
      <div class='col-lg-4 col-sm-12'>
        <div class='project-wrapper__text load-hidden'>
          <h3 class='project-wrapper__text-title'>Pro Shop</h3>
          <div>
            <p class='mb-4'>
              A simple e-commerce web app. Pro Shop has a responsive UI design.
              Technologies used are: - Mongoose - Express - React - Node
            </p>
          </div>
          <a
            rel='noreferrer'
            target='_blank'
            class='cta-btn cta-btn--hero'
            href='https://shahzaib834.github.io/ProShop/'
          >
            See Live
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            class='cta-btn text-color-main'
            href='https://github.com/shahzaib834/ProShop'
          >
            Source Code
          </a>
        </div>
      </div>
      <div class='col-lg-8 col-sm-12'>
        <div class='project-wrapper__image load-hidden'>
          <a
            rel='noreferrer'
            href='https://github.com/shahzaib834/ProShop'
            target='_blank'
          >
            <div
              data-tilt
              data-tilt-max='4'
              data-tilt-glare='true'
              data-tilt-max-glare='0.5'
              class='thumbnail rounded js-tilt'
              style={{
                height: '200px',

                width: '600px',
              }}
            >
              <img
                alt='Project'
                class='img-fluid'
                src={image}
                style={{ height: '200px', width: '600px' }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
