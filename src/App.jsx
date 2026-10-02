import { useEffect, useState } from "react";
import "./index.css";

const snippets = {
  Frontend: {
    file: "Prediction.jsx",
    code: `function Prediction({ id }) {
  const { data, error } = useFetch(\`/api/predict/\${id}\`);
  if (error) return <ErrorState retry />;
  return <Result score={data?.score} />;
}`,
  },
  API: {
    file: "server.js",
    code: `app.post("/api/predict", auth, async (req, res) => {
  const input = validate(req.body);
  const score = await model.predict(input);
  logger.info("prediction served");
  res.json({ score });
});`,
  },
  Model: {
    file: "train.py",
    code: `df = clean(raw_df)
X_train, X_test = split(preprocess(df))
model = fit(X_train)
print(evaluate(model, X_test))`,
  },
};

const palettes = {
  teal: ["#0d1b22", "#6fcfb0", "#f2a65a"],
  violet: ["#14122b", "#8b9cff", "#ff8fb1"],
  burgundy: ["#1c1018", "#ff9e7a", "#c9a0ff"],
  paper: ["#f4f7f5", "#1f8a70", "#c9722a"],
};

const skills = [
  { title: "Frontend", tone: "web", items: ["HTML", "CSS", "JavaScript", "React", "Responsive design"] },
  { title: "Backend", tone: "web", items: ["Node.js", "Express", "REST APIs", "Authentication", "Server-side logic"] },
  { title: "Databases", tone: "web", items: ["SQL", "Data modeling", "Normalization", "Relationships", "Queries"] },
  { title: "Machine learning", tone: "ml", items: ["Data cleaning", "Preprocessing", "Exploratory analysis", "Model building", "Evaluation"] },
  { title: "Deployment", tone: "web", items: ["Vercel", "Firebase", "GitHub", "Environment config"] },
  { title: "Reliability", tone: "both", items: ["Testing", "Security", "Error handling", "Logging", "Clean code"] },
];

const services = [
  ["Web applications", "Complete apps with a responsive frontend, backend, authentication, APIs, and a database.", "web"],
  ["Backend and APIs", "Server logic, REST APIs, and database integration that stay stable as the project grows.", "web"],
  ["Data preparation", "Cleaning, preprocessing, and exploratory analysis so your data is ready to use.", "ml"],
  ["Machine learning solutions", "Models built around your real problem, evaluated honestly and ready to plug into an app.", "ml"],
  ["Dashboards", "Admin and data dashboards for managing users, content, and results.", "both"],
  ["Fixes and deployment", "Debugging, improvements, and taking a finished project live.", "both"],
];

const process = [
  ["Understand", "I start with the problem, the users, and what success looks like."],
  ["Build", "Frontend, backend, data, and models, built to fit the actual need."],
  ["Test", "I test, log, and harden everything so the parts work together."],
  ["Deploy", "I ship it to production and make sure it stays maintainable."],
];

const projects = [
  {
    label: "Full-stack · University project",
    title: "Graduation Projects Gallery",
    text: "A platform where university students showcase and explore graduation projects. I handled most of the application, excluding the landing page and admin dashboard.",
    points: [
      "Built about 90% of the frontend",
      "Implemented authentication, bookmarks, and notifications",
      "Connected the frontend and backend and integrated the admin dashboard",
      "Built routing and access control for admin suspension and website closure",
      "Added light and dark themes with CSS variables",
      "Tested the integration and deployed to Vercel",
    ],
    tags: ["React", "JavaScript", "Node.js", "Express", "Firebase", "Vercel"],
    link: "https://graduation-projects-gallery.vercel.app/",
  },
  {
    label: "Frontend · Creative project",
    title: "TikTok Survey Presentation",
    text: "An interactive presentation of survey results about TikTok usage and ideas to improve the platform, turning raw survey data into a visual story.",
    points: [
      "Designed and built the complete frontend",
      "Turned survey data into an interactive presentation",
      "Created animations and interactive sections",
      "Linked the original survey for participation",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    link: "https://tiktok-survey.vercel.app/",
  },
];

function App() {
  const [tab, setTab] = useState("Frontend");
  const [theme, setTheme] = useState("teal");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const snip = snippets[tab];
  const tone = tab === "Model" ? "ml" : "web";

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            <i className="logo-mark" /> Malak Hesham
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
              <p className="role">
                <span className="pill web">Full-Stack Developer</span>
                <span className="pill ml">Machine Learning Engineer</span>
              </p>
              <h1>I build the app, the API, and the model behind it.</h1>
              <p className="hero-description">
                Practical, reliable, complete digital solutions, from a
                responsive interface to the backend, the data, and the machine
                learning that powers it.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="button primary">View my work</a>
                <a href="#contact" className="button secondary">Let's talk</a>
              </div>
            </div>

            <div className="hero-card" data-tone={tone}>
              <div className="tabs" role="tablist">
                {Object.keys(snippets).map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={tab === t}
                    className={tab === t ? "active" : ""}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="file-name">{snip.file}</div>
              <pre className="code-box">{snip.code}</pre>
              <div className="card-foot">
                <span className="status-dot" /> Same person, whole pipeline
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <h2>Working software, from first screen to final prediction.</h2>
            </div>
            <div className="about-text">
              <p className="large-text">
                I care about more than making something work. I focus on clean
                code, testing, security, error handling, logging, and reliable
                deployment, so the result is practical and maintainable.
              </p>
              <p>
                On the web side, I design responsive frontends with HTML, CSS,
                JavaScript, and React, build backends and APIs with Node.js and
                Express, model data in SQL, and deploy on Vercel and Firebase.
              </p>
              <p>
                On the data side, I clean and preprocess data, explore it, and
                build machine learning solutions. Whatever you need, I
                understand the problem first and build what fits it.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section soft-section">
          <div className="container">
            <div className="section-heading">
              <h2>Two toolkits, one workflow</h2>
              <p>
                <span className="key web" /> Web development
                <span className="key ml" /> Data and ML
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((s) => (
                <div className="skill-card" data-tone={s.tone} key={s.title}>
                  <h3>{s.title}</h3>
                  <div className="skill-list">
                    {s.items.map((i) => (
                      <span key={i}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Selected projects</h2>
            </div>
            <div className="projects">
              {projects.map((p) => (
                <article className="project-card" key={p.title}>
                  <div className="project-label">{p.label}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <h4>What I did</h4>
                  <ul>
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                    View live project
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section soft-section">
          <div className="container">
            <div className="section-heading">
              <h2>What I can build for you</h2>
            </div>
            <div className="services-grid">
              {services.map(([title, text, t]) => (
                <div className="service-card" data-tone={t} key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>From idea to working product</h2>
            </div>
            <ol className="process">
              {process.map(([title, text], i) => (
                <li key={title}>
                  <span>{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-box">
            <div>
              <h2>Have a project or a dataset in mind?</h2>
              <p>
                I'm open to web applications, backend work, data preparation,
                and machine learning projects.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:malakhesham.1093@gmail.com">Email me</a>
              <a href="https://github.com/malakhesh" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/malak-hesham-7b78a13a0/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <div className="palettes" aria-label="Color palette preview">
        {Object.entries(palettes).map(([name, [bg, a, b]]) => (
          <button
            key={name}
            title={name}
            aria-pressed={theme === name}
            onClick={() => setTheme(name)}
            style={{ background: `linear-gradient(135deg, ${bg} 40%, ${a} 40% 70%, ${b} 70%)` }}
          />
        ))}
      </div>

      <footer>
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Malak Hesham</p>
          <p>Full-Stack Developer & Machine Learning Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;