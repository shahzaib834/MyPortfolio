import React from 'react';
import image from '../../assets/projectImages/project2/brain-removebg-preview.png';

const Project = () => {
  return (
    <div class='row'>
      <div class='col-lg-4 col-sm-12'>
        <div class='project-wrapper__text load-hidden'>
          <h3 class='project-wrapper__text-title'>Face Recognition App</h3>
          <div>
            <p class='mb-4'>
              A Face Recognition app that uses an AI-integrated API (Clarifai).
              Responsive UI web app that allows selecting an image and the API
              will tell where the face is in the image.
            </p>
          </div>
          <a
            rel='noreferrer'
            target='_blank'
            class='cta-btn cta-btn--hero'
            href='https://shahzaib834.github.io/FaceRecognition/'
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
          <a
            rel='noreferrer'
            href='https://github.com/shahzaib834/FaceRecognition'
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
                background: 'linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)',
                width: '600px',
              }}
            >
              <img
                alt='Project'
                class='img-fluid'
                src={image}
                style={{ height: '200px' }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
