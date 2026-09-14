import type { ReactNode } from "react";
import { Header } from "./components/header";
import { DatabaseSchema, ModelComparison } from "./components/project-visuals";
import { experiences, links, skills } from "./content";

function ExternalLink({
  href,
  children,
  className = "text-link",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number} / {title}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="tags" aria-label="Technologies and methods">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section
          id="home"
          className="hero container"
          aria-labelledby="hero-title"
          tabIndex={-1}
        >
          <div className="hero-copy">
            <p className="eyebrow">Python · SQL · Statistics</p>
            <h1 id="hero-title">
              Olivia Nalwoga<span className="name-period">.</span>
            </h1>
            <p className="hero-role">
              Data Analyst <span aria-hidden="true">|</span> Data Science
            </p>
            <p className="hero-description">
              Statistics-trained data professional using Python, SQL,
              statistical modeling, and data analysis to turn complex data into
              reliable, decision-ready insights.
            </p>
            <p className="hero-credentials">
              M.S. Data Science, University of St. Thomas · 4.0 GPA
              <br />
              <span>
                Expected Dec 2027 · B.S. Statistics, Makerere University
              </span>
            </p>
            <div className="actions">
              <a href="#projects" className="button button-primary">
                View Projects <span aria-hidden="true">↓</span>
              </a>
              <ExternalLink
                href="/resume.pdf"
                className="button button-outline"
              >
                View Resume
              </ExternalLink>
              <a href="#contact" className="button button-quiet">
                Contact Me <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="social-links">
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={links.github}>GitHub</ExternalLink>
              <span>Cottage Grove, Minnesota</span>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Professional strengths">
            <div className="panel-heading">
              <span className="eyebrow">From data to decisions</span>
              <span className="panel-symbol" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="strength">
              <span className="strength-number">01</span>
              <div>
                <h2>Make data reliable.</h2>
                <p>
                  Data validation, record auditing, and organizational
                  reporting.
                </p>
              </div>
            </div>
            <div className="strength">
              <span className="strength-number">02</span>
              <div>
                <h2>Find the useful signal.</h2>
                <p>
                  Python, statistical modeling, and careful evaluation of
                  results.
                </p>
              </div>
            </div>
            <div className="strength">
              <span className="strength-number">03</span>
              <div>
                <h2>Build a clear structure.</h2>
                <p>
                  SQL, relational database design, and reusable analytical
                  queries.
                </p>
              </div>
            </div>
            <a className="panel-link" href="#experience">
              See my professional experience <span aria-hidden="true">↓</span>
            </a>
          </aside>
        </section>

        <div
          className="proof-strip container"
          aria-label="Professional highlights"
        >
          <dl>
            <div>
              <dt>Graduate GPA</dt>
              <dd>
                4.0<span>/ 4.0</span>
              </dd>
            </div>
            <div>
              <dt>NHANES source records</dt>
              <dd>92,988</dd>
            </div>
            <div>
              <dt>LASSO predictor selection</dt>
              <dd>
                14 <span className="metric-arrow">→</span> 8
              </dd>
            </div>
            <div>
              <dt>Related database tables</dt>
              <dd>8</dd>
            </div>
          </dl>
        </div>

        <section id="projects" className="section section-tinted" tabIndex={-1}>
          <div className="container">
            <SectionHeading number="01" title="Selected Data Projects">
              Applied work in statistical modeling, SQL, database design,
              validation, and reproducible analysis.
            </SectionHeading>
            <div className="projects-stack">
              <article className="project-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span>01 / Statistical learning</span>
                    <span className="badge">Featured project</span>
                  </div>
                  <h3>High-Dimensional Variable Selection in NHANES</h3>
                  <dl className="case-study">
                    <div>
                      <dt>Problem</dt>
                      <dd>
                        Can a smaller predictor set retain the predictive
                        performance of a larger model for hemoglobin levels?
                      </dd>
                    </div>
                    <div>
                      <dt>Approach</dt>
                      <dd>
                        Prepared NHANES data, selected variables with
                        cross-validated LASSO, and compared full and reduced
                        linear regression models on held-out data.
                      </dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>
                        Reduced 14 candidate predictors to 8, with similar test
                        error: MSE changed from approximately 0.00489 to
                        0.00502.
                      </dd>
                    </div>
                  </dl>
                  <Tags
                    items={[
                      "Python",
                      "LASSO",
                      "Regression",
                      "Permutation Testing",
                      "Bootstrap",
                    ]}
                  />
                  <div className="project-links">
                    <ExternalLink
                      href={links.nhanes}
                      label="NHANES project on GitHub"
                    >
                      GitHub
                    </ExternalLink>
                    <ExternalLink
                      href={links.notebook}
                      label="Read the NHANES analysis notebook"
                    >
                      Notebook
                    </ExternalLink>
                    <a className="text-link" href="#research">
                      Research details <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </div>
                <ModelComparison />
              </article>
              <article className="project-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span>02 / Database design</span>
                    <span className="badge">Synthetic dataset</span>
                  </div>
                  <h3>Relational Job Market Analytics Database</h3>
                  <dl className="case-study">
                    <div>
                      <dt>Problem</dt>
                      <dd>
                        How can related recruitment and salary records be
                        organized for consistent analysis?
                      </dd>
                    </div>
                    <div>
                      <dt>Approach</dt>
                      <dd>
                        Designed a normalized Oracle schema with primary and
                        foreign keys, two skill junction tables, validation
                        constraints, and multi-table analytical SQL.
                      </dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>
                        An eight-table relational model with three trigger
                        definitions and two reusable views for analyzing
                        connected application, skill, and salary records.
                      </dd>
                    </div>
                  </dl>
                  <p className="project-note">
                    Synthetic data demonstrates database design and querying; it
                    does not establish real labor-market trends.
                  </p>
                  <Tags
                    items={[
                      "Oracle SQL",
                      "Data Modeling",
                      "Constraints",
                      "Triggers",
                      "Views",
                    ]}
                  />
                  <div className="project-links">
                    <ExternalLink
                      href={links.database}
                      label="Job market database project on GitHub"
                    >
                      GitHub
                    </ExternalLink>
                    <ExternalLink
                      href={links.sql}
                      label="View SQL for the Oracle database"
                    >
                      View SQL
                    </ExternalLink>
                  </div>
                </div>
                <DatabaseSchema />
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section container" tabIndex={-1}>
          <div className="split-section">
            <div>
              <SectionHeading number="02" title="Professional Experience">
                Working with people, systems, and organizational data.
              </SectionHeading>
              <p className="experience-intro">
                From employment records to program reporting, my work brings
                data accuracy and analytical thinking into everyday operations.
              </p>
              <ExternalLink href="/resume.pdf">View full resume</ExternalLink>
            </div>
            <ol className="timeline">
              {experiences.map((experience) => (
                <li key={experience.title}>
                  <article>
                    <p className="experience-date">{experience.date}</p>
                    <h3>{experience.title}</h3>
                    <p className="employer">{experience.employer}</p>
                    <p className="experience-focus">{experience.focus}</p>
                    <p className="experience-summary">{experience.summary}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="section section-tinted" tabIndex={-1}>
          <div className="container">
            <SectionHeading number="03" title="Technical Skills">
              Tools and methods used across projects, graduate coursework, and
              professional roles.
            </SectionHeading>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="enterprise-tools">
              <strong>Enterprise systems</strong>
              <span>Banner · SharePoint · iCIMS · Alerus · Optix</span>
            </p>
          </div>
        </section>

        <section id="research" className="section container" tabIndex={-1}>
          <SectionHeading number="04" title="Research">
            My research interests center on applied statistical learning, model
            selection, validation, and rigorous analysis of complex datasets.
          </SectionHeading>
          <article className="research-card">
            <div className="research-overview">
              <p className="eyebrow">Applied statistical learning</p>
              <h3>How much model complexity do we need?</h3>
              <p>
                Using NHANES health data, I investigated whether a smaller set
                of demographic and blood-count predictors could preserve
                predictive performance for hemoglobin levels while simplifying
                the model.
              </p>
              <div className="research-finding">
                <span>Main finding</span>
                <p>
                  LASSO selected 8 of 14 candidate predictors. The reduced
                  linear model had similar held-out error, with an MSE
                  difference of approximately 0.00013.
                </p>
              </div>
              <ExternalLink href={links.notebook}>
                Read the analysis notebook
              </ExternalLink>
            </div>
            <dl className="research-methods">
              <div>
                <dt>Dataset & preparation</dt>
                <dd>
                  NHANES source file: 92,988 records and 220 columns. Modeling
                  uses 14 candidate predictors after removing rows with missing
                  selected values. The final complete-case sample count is not
                  reported in the notebook.
                </dd>
              </div>
              <div>
                <dt>Model selection & evaluation</dt>
                <dd>
                  70/30 train/test split; training-fitted standardization; LASSO
                  with fivefold cross-validation; full and reduced linear
                  regression evaluated with test-set MSE.
                </dd>
              </div>
              <div>
                <dt>Validation & uncertainty</dt>
                <dd>
                  1,000 outcome permutations (reported p = 0.278) explored the
                  error difference. 2,000 bootstrap resamples of training rows
                  assessed full-model test-MSE variability. These results do not
                  establish model equivalence.
                </dd>
              </div>
            </dl>
            <div className="research-limitations">
              <h4>Methodological context</h4>
              <p>
                The data are observational, so findings do not establish
                causation. NHANES survey weights were not incorporated;
                selection may vary with the predictors, regularization strength,
                and modeling choices.
              </p>
              <p>
                The notebook includes code and saved outputs. Rerunning requires
                the source CSV, which is not included in the repository.
              </p>
              <ExternalLink href={`${links.nhanes}#7-limitations`}>
                Project limitations & documentation
              </ExternalLink>
            </div>
          </article>
        </section>

        <section
          id="education"
          className="section section-tinted"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading number="05" title="Education & Credentials" />
            <div className="education-grid">
              <article className="education-card">
                <p className="eyebrow">Graduate education</p>
                <h3>University of St. Thomas</h3>
                <p className="degree">M.S. Data Science</p>
                <p className="education-meta">
                  4.0 / 4.0 GPA · Expected Dec 2027
                </p>
                <p className="coursework">
                  <strong>Relevant coursework:</strong> Database Management
                  Systems & Design, Data Preparation & Analysis, Cloud
                  Computing, Data Analytics & Visualization, Data Warehousing.
                  <span>
                    Data Analytics & Visualization and Data Warehousing are in
                    progress, Fall 2026.
                  </span>
                </p>
              </article>
              <article className="education-card">
                <p className="eyebrow">Undergraduate education</p>
                <h3>Makerere University</h3>
                <p className="degree">B.S. Statistics</p>
                <p className="education-meta">
                  Completed Dec 2024 · Kampala, Uganda
                </p>
                <div className="credential">
                  <p className="eyebrow">Additional credential</p>
                  <h4>Generative AI for Students</h4>
                  <p>University of St. Thomas · Digital Badge · Mar 2026</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" tabIndex={-1}>
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">06 / Contact</p>
              <h2>
                Let&apos;s work together<span>.</span>
              </h2>
              <p>
                I&apos;m interested in data analytics, junior data science, and
                related opportunities where strong statistical reasoning,
                Python, and SQL can support real-world decisions.
              </p>
              <a className="email-address" href={links.email}>
                nalwogaolivia93@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-actions">
              <a href={links.email} className="button button-white">
                Email Olivia <span aria-hidden="true">↗</span>
              </a>
              <ExternalLink
                href={links.linkedin}
                className="button button-light"
              >
                LinkedIn
              </ExternalLink>
              <ExternalLink href={links.github} className="button button-light">
                GitHub
              </ExternalLink>
              <ExternalLink href="/resume.pdf" className="button button-light">
                View Resume
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Olivia Nalwoga</p>
          <p>Data Analyst | Data Science</p>
          <a href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
