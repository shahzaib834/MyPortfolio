const Project6 = () => {
  return (
    <div className='row'>
      <div className='project-wrapper__text load-hidden'>
        <h3 className='project-wrapper__text-title'>Share Mobility</h3>
        <div>
          <p className='mb-4'>
            <div>
              <p>
                USA Based Company, where I worked as a <strong>Software Engineer</strong>. 
                It is a transportation program management platform. We used 
                <strong> Angular</strong> for the operations dashboard and 
                <strong> React</strong> for the rider-facing booking and ride management system.
              </p>
              <h4>Key Features:</h4>
              <ul>
                <li>
                  <strong>Angular Dashboard:</strong> Used by operations staff for managing rides 
                  (booking, canceling, coupons, discounts, office routes, maps, reports).
                </li>
                <li>
                  <strong>React Rider App:</strong> Used by riders to book, cancel, schedule rides, 
                  apply coupons, and manage organization-based rides.
                </li>
                <li>Support for organizations (employers) that need regular rides for employees.</li>
              </ul>
              <p>
                <em>Tech Stack:</em> React, Angular, Node, Express, Nest, MySQL, Redux
              </p>
            </div>
            
            <a
              rel='noreferrer'
              target='_blank'
              className='cta-btn cta-btn--hero'
              href='https://www.sharemobility.com/product'
            >
              See Live
            </a>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project6;
