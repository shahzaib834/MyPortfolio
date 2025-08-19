const Project5 = () => {
  return (
    <div class='row'>
      <div class='project-wrapper__text load-hidden'>
        <h3 class='project-wrapper__text-title'>Transfercar</h3>
        <div>
          <p class='mb-4'>
            <div>
              <p>
                Transfercar is a full-stack website built with{' '}
                <strong>Next.js</strong> and <strong>Payload CMS</strong>,
                designed for rapid development of blogs, portfolios, and
                enterprise-grade websites. It features a robust admin panel,
                authentication, access control, SEO management, live preview,
                on-demand revalidation, and multi-language support.
              </p>
              <ul>
                <li>
                  Modern frontend using Next.js with SSR and SSG capabilities
                </li>
                <li>
                  Backend powered by Payload CMS for flexible content management
                </li>
                <li>
                  Pre-configured collections for users, posts, pages, and media
                </li>
                <li>
                  SEO plugin integration for optimized search engine visibility
                </li>
                <li>
                  Live preview and draft preview for seamless content editing
                </li>
                <li>
                  Automated email templates for user verification and password
                  reset
                </li>
                <li>Multi-tenant and multi-language support</li>
                <li>Docker and Vercel deployment ready</li>
                <li>On-demand revalidation for instant frontend updates</li>
                <li>Customizable with Tailwind CSS and shadcn/ui components</li>
              </ul>
              <p>
                <em>Tech Stack:</em> Next.js, Payload CMS, TypeScript, Tailwind
                CSS, Docker, Vercel
              </p>
            </div>
            <a
              rel='noreferrer'
              target='_blank'
              class='cta-btn cta-btn--hero'
              href='https://staging2.transfercar.co.nz'
            >
              See Live
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project5;
