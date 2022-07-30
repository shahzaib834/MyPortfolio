import React from 'react';
import Project from './Project';
import Project2 from './Project2';
import Project3 from './Project3';

const Main = () => {
  return (
    <section id='projects'>
      <div class='container'>
        <div class='project-wrapper'>
          <h2 class='section-title dark-blue-text'>Projects</h2>

          <Project />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </section>
  );
};

export default Main;
