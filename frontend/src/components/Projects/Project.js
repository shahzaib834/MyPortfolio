const Project = () => {
  return (
    <div class='row'>
      <div class='project-wrapper__text load-hidden'>
        <h3 class='project-wrapper__text-title'>Flashclass</h3>
        <div class='mb-4'>
          <p><strong>Description for Flashclass Project</strong></p>
          <p>Flashclass is an innovative learning platform designed to help users
          master coding faster through interactive, engaging methods. It
          combines video, audio, visual cues, and gamified challenges to
          reinforce coding concepts. The app uses flash-based content and active
          learning techniques to keep users engaged and improve retention,
          offering a unique experience for both beginners and seasoned learners.</p>
          <p><strong>Client Problem Statement, Issues, and Proposed Solution</strong></p>
          <p>The client recognized that traditional coding tutorials often fail to engage
          users or help them retain information effectively. Many learners
          struggle with maintaining focus, and often coding concepts are not
          absorbed as quickly as they should be. Flashclass addresses these
          issues by offering a dynamic, multi-sensory learning experience that
          includes visual flashes of code, interactive questions, and engaging
          multimedia content. This keeps users engaged while reinforcing
          learning in an entertaining and memorable way.</p>
          <p><strong>How We Overcame the Challenge, Impact of the Solution</strong></p>
          <p>We overcame the challenge of engagement and retention by integrating multimedia elements such as
          audio-visual stimuli and interactive questioning in between coding
          sessions. This approach keeps learners actively participating, making
          the learning process fun and interactive. 4. Tech Stack Used Next js
          Neon Postgres for DB Tailwind CSS for Styling Drizzle-ORM for
          type-safe ORM Clerk for Authentication Vercel for deployments</p>
        </div>
        <a
          rel='noreferrer'
          target='_blank'
          class='cta-btn cta-btn--hero'
          href='https://dev.flashclass.io/'
        >
          See Live
        </a>
      </div>
    </div>
  );
};

export default Project;
