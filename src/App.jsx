import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Malak Hesham
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">FULL-STACK DEVELOPER</p>

              <h1>
                Hi, I'm <span>Malak.</span>
              </h1>

              <p className="hero-description">
                I build responsive and reliable web applications from
                frontend to backend, database, testing, and deployment.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button primary">
                  View My Work
                </a>

                <a href="#contact" className="button secondary">
                  Let's Talk
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span className="status-dot"></span>
                <span>Full-Stack Development</span>
              </div>

              <div className="code-box">
                <p>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span> = {"{"}
                </p>
                <p>&nbsp;&nbsp;frontend: "React",</p>
                <p>&nbsp;&nbsp;backend: "Node.js",</p>
                <p>&nbsp;&nbsp;database: "SQL",</p>
                <p>&nbsp;&nbsp;deployment: "Vercel"</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">ABOUT ME</p>
              <h2>Building websites with the whole picture in mind.</h2>
            </div>

            <div className="about-grid">
              <div>
                <p className="large-text">
                  I'm a Full-Stack Developer who enjoys building complete web
                  applications, not just individual pages.
                </p>

                <p>
                  I work across the frontend and backend, connect applications
                  to databases and APIs, implement authentication and
                  application logic, test features, and deploy finished
                  products.
                </p>

                <p>
                  I also care about code organization, security, responsive
                  design, and making sure the different parts of an
                  application work together properly.
                </p>
              </div>

              <div className="about-box">
                <div>
                  <strong>Frontend</strong>
                  <span>React · JavaScript · HTML · CSS</span>
                </div>

                <div>
                  <strong>Backend</strong>
                  <span>Node.js · Express · APIs</span>
                </div>

                <div>
                  <strong>Database</strong>
                  <span>SQL · Database Design · Normalization</span>
                </div>

                <div>
                  <strong>Deployment</strong>
                  <span>GitHub · Vercel · Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section soft-section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">SKILLS</p>
              <h2>What I work with</h2>
              <p>
                A practical full-stack toolkit for building and delivering
                complete web applications.
              </p>
            </div>

            <div className="skills-grid">
              <SkillCard
                title="Frontend"
                skills={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Responsive Design",
                ]}
              />

              <SkillCard
                title="Backend"
                skills={[
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "Authentication",
                  "Server-side Logic",
                ]}
              />

              <SkillCard
                title="Database"
                skills={[
                  "SQL",
                  "Database Design",
                  "Normalization",
                  "Data Relationships",
                  "Queries",
                ]}
              />

              <SkillCard
                title="Development"
                skills={[
                  "Git",
                  "GitHub",
                  "Testing",
                  "Logging",
                  "Debugging",
                ]}
              />

              <SkillCard
                title="Deployment"
                skills={[
                  "Vercel",
                  "Firebase",
                  "Production Deployment",
                  "Environment Configuration",
                ]}
              />

              <SkillCard
                title="Quality"
                skills={[
                  "Security",
                  "Access Control",
                  "Error Handling",
                  "Code Organization",
                  "Responsive UI",
                ]}
              />
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">PROJECTS</p>
              <h2>Some of my work</h2>
              <p>
                A selection of projects that show both my technical and
                creative side.
              </p>
            </div>

            <div className="projects">
              <article className="project-card featured">
                <div className="project-content">
                  <div className="project-label">FULL-STACK · UNIVERSITY PROJECT</div>

                  <h3>Graduation Projects Gallery</h3>

                  <p>
                    A full-stack platform designed for university students to
                    showcase and explore graduation projects.
                  </p>

                  <p>
                    I worked across both the frontend and backend and handled
                    the majority of the application, excluding the landing
                    page and admin dashboard.
                  </p>

                  <div className="contributions">
                    <h4>My contributions</h4>

                    <ul>
                      <li>
                        Developed approximately 90% of the frontend.
                      </li>
                      <li>
                        Implemented authentication, bookmarks, and
                        notifications.
                      </li>
                      <li>
                        Connected the frontend and backend and integrated the
                        admin dashboard.
                      </li>
                      <li>
                        Built routing and access control for admin suspension
                        and website closure.
                      </li>
                      <li>
                        Implemented light and dark themes using CSS variables.
                      </li>
                      <li>
                        Tested the application and handled integration across
                        the project.
                      </li>
                      <li>
                        Prepared and deployed the application to Vercel.
                      </li>
                    </ul>
                  </div>

                  <div className="tags">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>Firebase</span>
                    <span>GitHub</span>
                    <span>Vercel</span>
                  </div>

                  <a
                    href="https://graduation-projects-gallery.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live Project →
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-content">
                  <div className="project-label">
                    FRONTEND · CREATIVE PROJECT
                  </div>

                  <h3>TikTok Survey Presentation</h3>

                  <p>
                    An interactive frontend presentation created to showcase
                    survey results about TikTok usage and ideas for improving
                    the platform.
                  </p>

                  <p>
                    I transformed the provided survey data into a visual,
                    interactive experience with animations and a clear
                    presentation flow.
                  </p>

                  <div className="contributions">
                    <h4>My contributions</h4>

                    <ul>
                      <li>Designed and developed the complete frontend.</li>
                      <li>
                        Turned survey data into an interactive visual
                        presentation.
                      </li>
                      <li>Created animations and interactive sections.</li>
                      <li>
                        Added a link to the original survey for participation.
                      </li>
                    </ul>
                  </div>

                  <div className="tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Frontend</span>
                    <span>Animations</span>
                  </div>

                  <a
                    href="https://tiktok-survey.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live Project →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section soft-section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">SERVICES</p>
              <h2>What I can help you build</h2>
            </div>

            <div className="services-grid">
              <Service
                number="01"
                title="Business Websites"
                text="Responsive and professional websites designed around your business and its goals."
              />

              <Service
                number="02"
                title="Full-Stack Applications"
                text="Complete web applications with frontend, backend, authentication, APIs, and databases."
              />

              <Service
                number="03"
                title="Admin Dashboards"
                text="Practical dashboards for managing application data, users, and business operations."
              />

              <Service
                number="04"
                title="API & Backend Development"
                text="Backend logic, REST APIs, authentication, database integration, and application functionality."
              />

              <Service
                number="05"
                title="Bug Fixing & Improvements"
                text="Debugging existing applications, improving features, fixing issues, and making interfaces responsive."
              />

              <Service
                number="06"
                title="Deployment"
                text="Taking a finished application from development to a live production environment."
              />
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">MY APPROACH</p>
              <h2>From idea to working product</h2>
            </div>

            <div className="process">
              <ProcessStep
                number="01"
                title="Understand"
                text="I start by understanding the project, requirements, users, and goals."
              />

              <ProcessStep
                number="02"
                title="Build"
                text="I develop the frontend, backend, database, and functionality needed for the project."
              />

              <ProcessStep
                number="03"
                title="Test"
                text="I test features, fix issues, and make sure the different parts of the application work together."
              />

              <ProcessStep
                number="04"
                title="Deploy"
                text="Once everything is ready, I deploy the application and make it available to users."
              />
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-box">
              <div>
                <p className="eyebrow">CONTACT</p>

                <h2>Have a project in mind?</h2>

                <p>
                  I'm open to working on websites, web applications, and
                  full-stack projects.
                </p>
              </div>

              <div className="contact-links">
                <a href="mailto:malakhesham.1093@gmail.com">
                  Email Me
                </a>

                <a
                  href="https://github.com/malakhesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/malak-hesham-7b78a13a0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Malak Hesham</p>

          <p>Full-Stack Developer</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

function Service({ number, title, text }) {
  return (
    <div className="service-card">
      <span className="service-number">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ProcessStep({ number, title, text }) {
  return (
    <div className="process-step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;