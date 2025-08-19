import Project from './Project';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';

const Main = () => {
  return (
    <section id='projects'>
      <div class='container'>
        <div class='project-wrapper'>
          <h2 class='section-title dark-blue-text'>Projects</h2>

          <Project />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
        </div>
      </div>
    </section>
  );
};

export default Main;
