const Project2 = () => {
  return (
    <div class='row'>
      <div class='project-wrapper__text load-hidden'>
        <h3 class='project-wrapper__text-title'>CTO Admin Tool</h3>
        <div>
          <p class='mb-4'>
            <p>
              This is a comprehensive CTO administration and code monitoring
              tool that helps organizations manage their software development
              processes, with a particular focus on monitoring AI-generated
              code, compliance, and software development metrics.{' '}
            </p>
            <p>
              <strong>Core Features</strong>
            </p>
            <p>
              <strong>AI Code Monitoring (AICM)</strong>
            </p>
            <ul>
              <li>Tracks and analyzes AI-generated code in repositories</li>
              <li>Classifies code as Pure AI, Blended, or Human-written</li>
              <li>
                Provides attestation workflows for developers to confirm/verify
                AI code
              </li>
              <li>Calculates ROI for GenAI usage in development</li>
            </ul>
            <p>
              <strong>Repository Management</strong>
            </p>
            <ul>
              <li>
                Connects to git providers (GitHub, BitBucket, Azure DevOps)
              </li>
              <li>Organizes repositories into groups with categorization</li>
              <li>
                Analyzes repository compositions and code metrics - Monitors
                pull requests and commits 3. **Team Management** - Tracks
                developer groups and individual developers - Analyzes developer
                activity and contributions
              </li>
              <li>Monitors team productivity and retention</li>
            </ul>
            <p>
              <strong>Compliance Features</strong>
            </p>
            <ul>
              <li>Tracks compliance standards and risk levels</li>
              <li>Monitors open-source license usage</li>
              <li>Code security analysis</li>
              <li>Cyber security monitoring</li>
            </ul>
            <p>
              <strong>Integrations</strong>
            </p>
            <ul>
              <li>GitHub, BitBucket, Azure DevOps for code repositories</li>
              <li>Snyk, Codacy for code analysis</li>
              <li>iRadar for security monitoring</li>
              <li> Jira for project management</li>
            </ul>
            <p>
              <strong>Reporting and Analytics</strong>
            </p>
            <ul>
              <li>Dashboard with key metrics</li>
              <li>Composition reports for repositories</li>
              <li>Charts for AI code usage trends</li>
              <li>
                Export functionality for GBOMs (Generated Bill of Materials)
              </li>
            </ul>
            <p>
              <strong>Budget & Project Planning</strong>
            </p>
            <ul>
              <li>Roadmap planning</li>
              <li>Budget tracking</li>
              <li>Team allocation</li>
            </ul>

            <p>
              <strong>Architecture</strong>
            </p>
            <ul>
              <li>Backend: Django with REST API</li>
              <li>Frontend: Vue.js SPA</li>
              <li>
                Database: PostgreSQL with TimescaleDB for time-series data
              </li>
              <li>Authentication: OAuth2 with MFA support</li>
              <li>
                Webhooks support for real-time integration with git providers
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project2;
