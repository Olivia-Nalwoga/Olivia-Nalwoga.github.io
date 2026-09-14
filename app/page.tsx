const experiences = [
  {
    date: "Aug 2026 – Present",
    title: "Graduate Research Assistant",
    company: "University of St. Thomas",
    focus: "Data Science Research · Python · SQL · Technical Support",
    description:
      "Collaborate with faculty on software engineering and data science research while supporting graduate students with Python, SQL, and technical concepts. Maintain and troubleshoot lab and classroom systems used for teaching and research.",
  },
  {
    date: "Dec 2025 – Present",
    title: "Student Assistant, Human Resources",
    company: "University of St. Thomas",
    focus: "Data Quality · HR Systems · Organizational Records",
    description:
      "Process, validate, and audit employment and payroll records across university systems. Use Excel audit reports and enterprise platforms to investigate discrepancies, maintain data accuracy, and support student employee onboarding.",
  },
  {
    date: "Jun 2025 – Aug 2025",
    title: "Assistant Planner",
    company: "Uganda Human Rights Commission",
    focus: "Survey Data · Analysis · Reporting",
    description:
      "Designed surveys in Kobo Toolbox, prepared quantitative and qualitative program data, analyzed quarterly data in Excel, supported validation activities, and contributed to organizational reporting and planning.",
  },
  {
    date: "Jun 2023 – May 2025",
    title: "Update Officer / Registration Assistant / Planning Intern",
    company: "NIRA",
    focus: "Registration Data · Record Accuracy",
    description:
      "Registered applicants, updated demographic and biometric records, supported community data collection, and maintained accurate information for registration workflows.",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Programming & Data Analysis",
    description: "Prepare, transform, analyze, and communicate data.",
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "SQL",
      "Excel",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Data Reporting",
    ],
  },
  {
    number: "02",
    title: "Statistical Methods",
    description: "Build, evaluate, and validate statistical models.",
    skills: [
      "Statistical Analysis",
      "Regression",
      "LASSO",
      "Model Validation",
      "Cross-validation",
      "Permutation Testing",
      "Bootstrap Methods",
    ],
  },
  {
    number: "03",
    title: "Databases & Platforms",
    description: "Structure, model, query, and work with data systems.",
    skills: [
      "Oracle SQL",
      "Relational Database Design",
      "Data Modeling",
      "AWS S3",
      "Jupyter Notebook",
      "GitHub",
      "Cognos Analytics",
      "Kobo Toolbox",
    ],
  },
];

const enterpriseSystems = [
  "Banner",
  "SharePoint",
  "iCIMS",
  "Alerus",
  "Optix",
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-purple-700 focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex items-center gap-2 font-black"
            aria-label="Olivia Nalwoga, back to top"
          >
            <span className="text-xl text-purple-700">ON.</span>
            <span>Olivia Nalwoga</span>
          </a>

          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Main navigation"
          >
            {[
              ["HOME", "#home"],
              ["PROJECTS", "#projects"],
              ["EXPERIENCE", "#experience"],
              ["SKILLS", "#skills"],
              ["RESEARCH", "#research"],
              ["EDUCATION", "#education"],
              ["CONTACT", "#contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-xs font-bold tracking-widest text-slate-600 transition hover:text-purple-700"
              >
                {name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-700 px-5 py-2 text-xs font-bold tracking-widest text-white transition hover:bg-purple-800"
            >
              RESUME ↗
            </a>
          </nav>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-slate-300 px-4 py-2 text-sm font-bold">
              Menu
            </summary>

            <nav
              className="absolute right-0 mt-3 flex w-56 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"
              aria-label="Mobile navigation"
            >
              {[
                ["Home", "#home"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Skills", "#skills"],
                ["Research", "#research"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="font-semibold text-slate-700 hover:text-purple-700"
                >
                  {name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-purple-700"
              >
                Resume PDF ↗
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content" className="min-h-screen bg-white text-slate-950">
        {/* HERO */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-700">
              Python · SQL · Statistics
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Olivia Nalwoga<span className="text-purple-700">.</span>
            </h1>

            <p className="mt-4 text-2xl font-semibold text-purple-700 md:text-3xl">
              Data Analyst <span className="text-slate-400">|</span> Data Science
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Statistics-trained data professional using Python, SQL,
              statistical modeling, and data analysis to turn complex data into
              reliable, decision-ready insights.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              M.S. Data Science, University of St. Thomas ·{" "}
              <strong>4.0 GPA</strong>
              <br />
              Expected Dec 2027 · B.S. Statistics, Makerere University
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white transition hover:bg-purple-800"
              >
                View Projects ↓
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 font-bold"
              >
                View Resume ↗
              </a>

              <a
                href="#contact"
                className="rounded-full px-6 py-3 font-bold text-purple-700"
              >
                Contact Me ↗
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
              <a
                href="https://www.linkedin.com/in/olivia-nalwoga-a3ab10382/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Olivia-Nalwoga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700"
              >
                GitHub ↗
              </a>

              <span>Cottage Grove, Minnesota</span>
            </div>
          </div>

          {/* CURRENT STATUS CARD */}
          <aside className="rounded-3xl border border-purple-100 bg-purple-50 p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
              Currently
            </p>

            <h2 className="mt-5 text-3xl font-black">M.S. Data Science</h2>

            <p className="mt-1 text-lg text-slate-600">
              University of St. Thomas
            </p>

            <div className="mt-7 border-t border-purple-200 pt-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-700">
                Current Role
              </p>

              <h3 className="mt-3 text-xl font-black">
                Graduate Research Assistant
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Data Science research · Python & SQL · Technical support
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-3xl font-black text-purple-700">4.0</p>
                <p className="mt-1 text-sm text-slate-500">Graduate GPA</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-3xl font-black text-purple-700">Dec 2027</p>
                <p className="mt-1 text-sm text-slate-500">Graduation</p>
              </div>
            </div>

            <a
              href="#experience"
              className="mt-7 inline-block text-sm font-bold text-purple-700"
            >
              View professional experience ↓
            </a>
          </aside>
        </section>

        {/* PROOF STRIP */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["4.0 / 4.0", "Graduate GPA"],
              ["92,988", "Health records analyzed"],
              ["14 → 8", "Predictors reduced with LASSO"],
              ["8", "Tables designed in Oracle SQL"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-slate-200 p-6 sm:border-r lg:border-b-0"
              >
                <p className="text-3xl font-black text-purple-700">{value}</p>
                <p className="mt-2 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
              01 / Selected Data Projects
            </p>

            <h2 className="mt-3 text-4xl font-black">Selected Data Projects</h2>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
              Applied work demonstrating statistical modeling, Python, SQL,
              database design, validation, and reproducible analysis.
            </p>

            <div className="mt-10 space-y-8">
              {/* NHANES PROJECT */}
              <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex flex-wrap justify-between gap-3">
                    <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                      01 / Statistical Learning
                    </p>

                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black">
                    High-Dimensional Variable Selection in NHANES
                  </h3>

                  <div className="mt-7 space-y-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Problem
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        Can a smaller predictor set retain the predictive
                        performance of a larger model for hemoglobin levels?
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Approach
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        Prepared and analyzed NHANES data in Python using
                        pandas and NumPy, selected variables with
                        cross-validated LASSO, and compared full and reduced
                        linear regression models on held-out data.
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Result
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        Reduced 14 candidate predictors to 8 while test MSE
                        changed only from approximately 0.00489 to 0.00502.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "pandas",
                      "NumPy",
                      "LASSO",
                      "Regression",
                      "Permutation Testing",
                      "Bootstrap",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-5">
                    <a
                      href="https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-purple-700"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection/blob/main/analysis.ipynb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-purple-700"
                    >
                      Notebook ↗
                    </a>

                    <a
                      href="#research"
                      className="font-bold text-purple-700"
                    >
                      Research Details ↓
                    </a>
                  </div>
                </div>

                <div className="bg-purple-50 p-8">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500">
                    <span>Model Comparison</span>
                    <span>NHANES / Python</span>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <div>
                      <p className="text-6xl font-black text-purple-950">14</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Candidate predictors
                      </p>
                    </div>

                    <span className="text-4xl text-purple-700">→</span>

                    <div>
                      <p className="text-6xl font-black text-purple-700">8</p>
                      <p className="mt-2 text-sm text-slate-500">
                        LASSO-selected
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
                    {Array.from({ length: 14 }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-5 rounded-sm ${
                          index < 8 ? "bg-purple-700" : "bg-purple-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-10">
                    <div className="flex justify-between text-sm">
                      <span>Full · 14 predictors</span>
                      <strong>0.00489</strong>
                    </div>

                    <div className="mt-2 h-3 rounded-full bg-purple-100">
                      <div className="h-3 w-[81.5%] rounded-full bg-purple-400" />
                    </div>

                    <div className="mt-5 flex justify-between text-sm">
                      <span>Reduced · 8 predictors</span>
                      <strong>0.00502</strong>
                    </div>

                    <div className="mt-2 h-3 rounded-full bg-purple-100">
                      <div className="h-3 w-[83.7%] rounded-full bg-purple-700" />
                    </div>

                    <p className="mt-5 text-xs leading-5 text-slate-500">
                      Lower is better. The reduced model maintained similar
                      held-out performance with fewer predictors.
                    </p>
                  </div>
                </div>
              </article>

              {/* DATABASE PROJECT */}
              <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex flex-wrap justify-between gap-3">
                    <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                      02 / Database Design
                    </p>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                      Synthetic Dataset
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black">
                    Relational Job Market Analytics Database
                  </h3>

                  <div className="mt-7 space-y-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Problem
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        How can related recruitment, skills, applications, and
                        salary records be structured for consistent analysis?
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Approach
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        Designed a normalized Oracle schema with primary and
                        foreign keys, junction tables, validation constraints,
                        triggers, reusable views, and multi-table analytical
                        SQL.
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Result
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        Built an eight-table relational model with three trigger
                        definitions and two reusable views for connected
                        application, skill, employer, and salary analysis.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Oracle SQL",
                      "Relational Modeling",
                      "Constraints",
                      "Triggers",
                      "Views",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex gap-5">
                    <a
                      href="https://github.com/Olivia-Nalwoga/job-market-salary-analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-purple-700"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="https://github.com/Olivia-Nalwoga/job-market-salary-analytics/blob/main/final_project_DDL.sql"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-purple-700"
                    >
                      View SQL ↗
                    </a>
                  </div>
                </div>

                {/* REAL ERD IMAGE */}
                <div className="bg-slate-50 p-8">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500">
                    <span>Relational Schema</span>
                    <span>8 Tables</span>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                    <img
                      src="/Relational_1.png"
                      alt="Entity relationship diagram for the Job Market Analytics database showing JobSeeker, JobSeekerSkill, Skill, JobSkill, JobPosting, Employer, Application, and Salary tables and their relationships."
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-xl bg-white p-4">
                      <p className="text-3xl font-black text-purple-700">8</p>
                      <p className="text-xs text-slate-500">Tables</p>
                    </div>

                    <div className="rounded-xl bg-white p-4">
                      <p className="text-3xl font-black text-purple-700">3</p>
                      <p className="text-xs text-slate-500">Triggers</p>
                    </div>

                    <div className="rounded-xl bg-white p-4">
                      <p className="text-3xl font-black text-purple-700">2</p>
                      <p className="text-xs text-slate-500">Views</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-[0.33fr_0.67fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
                  02 / Professional Experience
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  Professional
                  <br />
                  Experience
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Experience with research, organizational data, enterprise
                  systems, reporting, and technical environments.
                </p>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-bold text-purple-700"
                >
                  View full resume ↗
                </a>
              </div>

              <ol className="border-l border-slate-200 pl-8">
                {experiences.map((experience) => (
                  <li key={experience.title} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-purple-700" />

                    <p className="text-sm text-slate-500">{experience.date}</p>

                    <h3 className="mt-2 text-xl font-black">
                      {experience.title}
                    </h3>

                    <p className="mt-1 font-semibold text-purple-700">
                      {experience.company}
                    </p>

                    <p className="mt-3 text-xs font-black uppercase tracking-widest text-slate-500">
                      {experience.focus}
                    </p>

                    <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                      {experience.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
              03 / Technical Skills
            </p>

            <h2 className="mt-3 text-4xl font-black">Technical Skills</h2>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
              Tools and methods used across projects, research, graduate
              coursework, and professional roles.
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <span className="text-xs font-black text-purple-700">
                    {group.number}
                  </span>

                  <h3 className="mt-4 text-xl font-black">{group.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
              <strong>Enterprise systems:</strong>

              {enterpriseSystems.map((system) => (
                <span
                  key={system}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2"
                >
                  {system}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
              04 / Research
            </p>

            <h2 className="mt-3 text-4xl font-black">Research</h2>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
              Applied statistical learning, model selection, validation, and
              rigorous analysis of complex datasets.
            </p>

            <article className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                <div className="bg-purple-50 p-8">
                  <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                    Applied Statistical Learning
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    How much model complexity do we need?
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    Using NHANES health data, I investigated whether a smaller
                    set of demographic and blood-count predictors could
                    preserve predictive performance for hemoglobin levels
                    while simplifying the model.
                  </p>

                  <div className="mt-7 rounded-2xl bg-white p-5">
                    <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                      Main Finding
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                      LASSO selected 8 of 14 candidate predictors. The reduced
                      linear model produced similar held-out error, with an MSE
                      difference of approximately 0.00013.
                    </p>
                  </div>

                  <a
                    href="https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection/blob/main/analysis.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block font-bold text-purple-700"
                  >
                    Read the analysis notebook ↗
                  </a>
                </div>

                <div className="p-8">
                  <div className="space-y-7">
                    <div>
                      <h4 className="font-black">Dataset & Preparation</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        The NHANES source data contained 92,988 records and 220
                        variables. Fourteen candidate predictors were used for
                        model development after preparation.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-black">
                        Model Selection & Evaluation
                      </h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        Used a 70/30 train-test split, standardization,
                        cross-validated LASSO, and full versus reduced linear
                        regression evaluated using test-set mean squared error.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-black">
                        Validation & Uncertainty
                      </h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        Used 1,000 permutation tests and 2,000 bootstrap
                        resamples to examine the observed error difference and
                        variability in model performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-8">
                <h4 className="font-black">Methodological Context</h4>

                <p className="mt-3 max-w-5xl leading-7 text-slate-600">
                  The analysis is observational and does not establish
                  causation. NHANES survey weights were not incorporated, and
                  results may vary with predictor selection, regularization
                  strength, and modeling choices.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
              05 / Education & Credentials
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Education & Credentials
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-8">
                <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                  Graduate Education
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  University of St. Thomas
                </h3>

                <p className="mt-2 text-lg font-semibold">M.S. Data Science</p>

                <p className="mt-3 text-slate-600">
                  4.0 / 4.0 GPA · Expected Dec 2027
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  <strong className="text-slate-900">
                    Relevant Coursework:
                  </strong>{" "}
                  Database Management Systems & Design, Data Preparation &
                  Analysis, Cloud Computing, Data Analytics & Visualization,
                  and Data Warehousing.
                </p>

                <p className="mt-3 text-xs text-slate-500">
                  Data Analytics & Visualization and Data Warehousing are in
                  progress, Fall 2026.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-8">
                <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                  Undergraduate Education
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  Makerere University
                </h3>

                <p className="mt-2 text-lg font-semibold">
                  Bachelor&apos;s Degree in Statistics
                </p>

                <p className="mt-3 text-slate-600">
                  GPA 4.02 / 5.0 · Completed Dec 2024
                </p>

                <p className="mt-3 text-slate-600">Kampala, Uganda</p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-xs font-black uppercase tracking-widest text-purple-700">
                    Additional Credential
                  </p>

                  <h4 className="mt-3 text-lg font-black">
                    Generative AI for Students
                  </h4>

                  <p className="mt-2 text-sm text-slate-600">
                    University of St. Thomas · Digital Badge · March 2026
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-purple-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                06 / Contact
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Let&apos;s work together
                <span className="text-purple-400">.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-purple-100">
                I&apos;m interested in data analytics, junior data science, and
                related opportunities where strong statistical reasoning,
                Python, SQL, and analytical problem solving can support
                real-world decisions.
              </p>

              <a
                href="mailto:nalwogaolivia93@gmail.com"
                className="mt-6 inline-block font-semibold text-white"
              >
                nalwogaolivia93@gmail.com ↗
              </a>
            </div>

            <div className="flex flex-col justify-center gap-3 md:items-end">
              <a
                href="mailto:nalwogaolivia93@gmail.com"
                className="w-full max-w-xs rounded-full bg-white px-6 py-3 text-center font-bold text-purple-950"
              >
                Email Olivia ↗
              </a>

              <a
                href="https://www.linkedin.com/in/olivia-nalwoga-a3ab10382/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs rounded-full border border-purple-500 px-6 py-3 text-center font-bold"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Olivia-Nalwoga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs rounded-full border border-purple-500 px-6 py-3 text-center font-bold"
              >
                GitHub ↗
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs rounded-full border border-purple-500 px-6 py-3 text-center font-bold"
              >
                View Resume ↗
              </a>
            </div>
          </div>

          <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-purple-800 px-6 py-7 text-sm text-purple-300">
            <p>© 2026 Olivia Nalwoga</p>
            <p>Data Analyst | Data Science</p>
            <a href="#home">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </>
  );
}