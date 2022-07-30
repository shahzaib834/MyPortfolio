import React from 'react';

const Project = () => {
  return (
    <div class='row'>
      <div class='col-lg-4 col-sm-12'>
        <div class='project-wrapper__text load-hidden'>
          <h3 class='project-wrapper__text-title'>Face Recognition App</h3>
          <div>
            <p class='mb-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi neque, ipsa animi maiores repellendus distinctio aperiam
              earum dolor voluptatum consequatur blanditiis inventore debitis
              fuga numquam voluptate ex architecto itaque molestiae.
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
            href='https://github.com/shahzaib834/FaceRecognition'
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
              <img alt='Project' class='img-fluid' src='assets/project.jpg' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;