"use client";

import { useState } from "react";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState("Programming");
  const [selectedEducation, setSelectedEducation] = useState("Masters");
  const [selectedExperience, setSelectedExperience] = useState("Lab");
  const [selectedCourse, setSelectedCourse] = useState("Python");

  const skillCategories = {
    Programming: {
      title: "Programming & Query Languages",
      subtitle: "Core languages for analysis, databases, and problem solving",
      skills: ["Python", "SQL"],
    },
    Analytics: {
      title: "Analytics & Modeling",
      subtitle: "Methods used across projects and graduate coursework",
      skills: [
        "Statistical Analysis",
        "Regression",
        "LASSO",
        "Model Validation",
        "Bootstrap",
        "Permutation Testing",
      ],
    },
    Databases: {
      title: "Databases & Data Engineering",
      subtitle: "Tools for organizing, modeling, and querying data",
      skills: [
        "Oracle SQL Developer",
        "Relational Database Design",
        "Data Modeling",
        "Analytical SQL",
      ],
    },
    Cloud: {
      title: "Cloud & Development Tools",
      subtitle: "Tools used for technical and cloud-based projects",
      skills: ["AWS S3", "GitHub", "Jupyter Notebook"],
    },
    Systems: {
      title: "Data & Enterprise Systems",
      subtitle: "Systems used in university and operational work",
      skills: [
        "Excel",
        "Cognos Analytics",
        "Banner",
        "SharePoint",
        "Optix",
        "iCIMS",
        "Alerus",
        "Kobo Toolbox",
      ],
    },
  };

  const education = {
    Masters: {
      degree: "Master’s Degree",
      school: "University of St. Thomas",
      program: "MS in Data Science",
      gpa: "4.0 / 4.0",
      graduation: "Dec 2027",
      location: "St. Paul, Minnesota",
    },
    Bachelors: {
      degree: "Bachelor’s Degree",
      school: "Makerere University",
      program: "Bachelor’s Degree in Statistics",
      gpa: "4.02 / 5.0",
      graduation: "Dec 2024",
      location: "Kampala, Uganda",
    },
  };

  const experiences = {
    Lab: {
      title: "Graduate Lab Assistant – Computer Systems Support",
      company: "University of St. Thomas",
      date: "Aug 2026 – Present",
      label: "Data Science Education + Technical Support",
      bullets: [
        "Tutor graduate Data Science students in Python, SQL, and technical course concepts.",
        "Help students troubleshoot code and understand data-related problems.",
        "Provide technical support for PCs, software, lab peripherals, and academic technologies.",
        "Troubleshoot hardware, software, and networking issues in engineering labs and classrooms.",
      ],
    },

    HR: {
      title: "Student Assistant, Human Resources",
      company: "University of St. Thomas",
      date: "Dec 2025 – Present",
      label: "Data Quality + HR Systems",
      bullets: [
        "Process and verify student payroll and employment records.",
        "Perform data entry, auditing, and validation using Banner, Cognos, SharePoint, Optix, iCIMS, and Alerus.",
        "Analyze Excel audit reports to identify discrepancies and support accurate records and payments.",
      ],
    },

    UHRC: {
      title: "Assistant Planner",
      company: "Uganda Human Rights Commission",
      date: "Jun 2025 – Aug 2025",
      label: "Data Collection + Reporting",
      bullets: [
        "Designed and administered surveys using Kobo Toolbox.",
        "Compiled and analyzed quantitative and qualitative data.",
        "Used Excel analysis and data validation to support reporting and strategic planning.",
      ],
    },

    NIRA: {
      title: "Update Officer / Registration Assistant / Planning Intern",
      company: "NIRA",
      date: "Jun 2023 – May 2025",
      label: "Data Accuracy + Records",
      bullets: [
        "Registered applicants and updated demographic and biometric records.",
        "Supported community data collection and maintained accurate registration records.",
      ],
    },
  };

  const courses = {
    Python: {
      title: "Foundations of Python",
      grade: "A",
      status: "Completed",
      description:
        "Built a foundation in Python programming, problem solving, data structures, functions, and computational thinking.",
      skills: ["Python", "Programming", "Problem Solving"],
    },

    Database: {
      title: "Database Management Systems & Design",
      grade: "A",
      status: "Completed",
      description:
        "Studied relational database design, data modeling, SQL, constraints, joins, views, triggers, and analytical querying.",
      skills: ["Oracle SQL", "Database Design", "Data Modeling"],
    },

    Cloud: {
      title: "Cloud Computing",
      grade: "A",
      status: "Completed",
      description:
        "Worked with cloud architecture and AWS services, including S3 static website hosting and cross-region replication.",
      skills: ["AWS", "S3", "Cloud Computing"],
    },

    DataPrep: {
      title: "Data Preparation & Analysis",
      grade: "A",
      status: "Completed",
      description:
        "Applied statistical modeling, data preparation, regression, LASSO variable selection, permutation testing, and bootstrap validation.",
      skills: ["Python", "LASSO", "Regression", "Model Validation"],
    },

    Visualization: {
      title: "Data Analytics & Visualization",
      grade: "In Progress",
      status: "Fall 2026",
      description:
        "Current graduate coursework focused on analyzing data and communicating results through effective visualization.",
      skills: ["Data Analytics", "Visualization"],
    },

    Warehousing: {
      title: "Data Warehousing",
      grade: "In Progress",
      status: "Fall 2026",
      description:
        "Current graduate coursework focused on analytical systems, data warehousing, and dimensional approaches to decision-support data.",
      skills: ["Data Warehousing", "Analytics", "Data Modeling"],
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home">
            <p className="text-lg font-black text-purple-700">
              OLIVIA NALWOGA
            </p>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {[
              ["HOME", "#home"],
              ["PROJECTS", "#projects"],
              ["SKILLS", "#skills"],
              ["EDUCATION", "#education"],
              ["EXPERIENCE", "#experience"],
              ["COURSEWORK", "#coursework"],
              ["CERTIFICATIONS", "#certifications"],
              ["CONTACT", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-xs font-bold tracking-widest text-slate-600 hover:text-purple-700"
              >
                {name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full bg-purple-700 px-5 py-2 text-xs font-bold tracking-widest text-white"
            >
              RESUME
            </a>
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section
        id="home"
        className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2"
      >
        <div>
          <p className="font-bold tracking-[0.2em] text-purple-700">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">
            Hi, I&apos;m Olivia.
            <span className="block text-purple-700">
              MS in Data Science.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Data Science graduate student with a strong foundation in
            statistics, Python, SQL, database design, data analysis, and cloud
            technologies.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            I enjoy turning complex data into clear, reliable insights and
            building analytical solutions that support better decisions.
          </p>

          <p className="mt-5 font-bold text-purple-700">
            Data Science · Data Analytics · Data Engineering
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-purple-700 px-6 py-3 font-bold text-white"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Olivia-Nalwoga"
              target="_blank"
              className="rounded-full border border-slate-300 px-6 py-3 font-bold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/olivia-nalwoga-a3ab10382/"
              target="_blank"
              className="rounded-full border border-slate-300 px-6 py-3 font-bold"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-purple-300 px-6 py-3 font-bold text-purple-700"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-700">
            Currently
          </p>

          <h2 className="mt-4 text-3xl font-black">MS Data Science</h2>
          <p className="mt-1 text-slate-600">University of St. Thomas</p>

          <div className="my-6 border-t border-purple-200" />

          <p className="font-black">
            Graduate Lab Assistant – Computer Systems Support
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Python & SQL tutoring · Technical support · Engineering labs
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-3xl font-black text-purple-700">4.0</p>
              <p className="text-sm text-slate-500">Graduate GPA</p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="text-2xl font-black text-purple-700">Dec 2027</p>
              <p className="text-sm text-slate-500">Graduation</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Projects</h2>

          <p className="mt-3 text-lg text-slate-600">
            Selected academic projects demonstrating applied data science and
            database skills.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-purple-700">
                PYTHON · STATISTICAL LEARNING
              </p>

              <h3 className="mt-3 text-2xl font-black">
                High-Dimensional Variable Selection in NHANES
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Analyzed 92,988 NHANES records and 220 variables to model
                hemoglobin levels and evaluate whether a reduced predictor set
                could preserve predictive performance.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "92,988 Records",
                  "220 Variables",
                  "14 → 8 Predictors",
                  "LASSO",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-purple-50 px-3 py-2 text-sm font-bold text-purple-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-5">
                <a
                  href="https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection"
                  target="_blank"
                  className="font-bold text-purple-700"
                >
                  GitHub →
                </a>

                <a
                  href="https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection/blob/main/analysis.ipynb"
                  target="_blank"
                  className="font-bold text-purple-700"
                >
                  Notebook →
                </a>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-purple-700">
                ORACLE SQL · DATABASE DESIGN
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Job Market & Salary Analytics
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Designed a normalized relational database connecting job
                seekers, employers, skills, job postings, applications, and
                salary information.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "8 Tables",
                  "3 Triggers",
                  "2 Views",
                  "Analytical SQL",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-purple-50 px-3 py-2 text-sm font-bold text-purple-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-5">
                <a
                  href="https://github.com/Olivia-Nalwoga/job-market-salary-analytics"
                  target="_blank"
                  className="font-bold text-purple-700"
                >
                  GitHub →
                </a>

                <a
                  href="https://github.com/Olivia-Nalwoga/job-market-salary-analytics/blob/main/final_project_DDL.sql"
                  target="_blank"
                  className="font-bold text-purple-700"
                >
                  View SQL →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Skills</h2>

        <p className="mt-3 text-lg text-slate-600">
          Click a category to explore my technical toolkit.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {Object.entries(skillCategories).map(([key, category]) => {
            const selected = selectedSkill === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedSkill(key)}
                className={`rounded-2xl border p-6 text-left transition ${
                  selected
                    ? "border-purple-700 bg-purple-50"
                    : "border-slate-200 bg-white hover:border-purple-300"
                }`}
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{category.title}</h3>
                    <p className="mt-2 text-slate-600">
                      {category.subtitle}
                    </p>
                  </div>

                  <span
                    className={`h-fit rounded-full px-3 py-1 text-xs font-bold ${
                      selected
                        ? "bg-purple-700 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {selected ? "Selected" : "Select"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex justify-between gap-4">
            <div>
              <h3 className="text-xl font-black">
                {
                  skillCategories[
                    selectedSkill as keyof typeof skillCategories
                  ].title
                }
              </h3>

              <p className="mt-1 text-slate-600">
                {
                  skillCategories[
                    selectedSkill as keyof typeof skillCategories
                  ].subtitle
                }
              </p>
            </div>

            <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-bold">
              {
                skillCategories[
                  selectedSkill as keyof typeof skillCategories
                ].skills.length
              }{" "}
              skills
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {skillCategories[
              selectedSkill as keyof typeof skillCategories
            ].skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Education</h2>

          <p className="mt-3 text-lg text-slate-600">
            Academic background in statistics and data science.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {Object.entries(education).map(([key, item]) => {
              const selected = selectedEducation === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedEducation(key)}
                  className={`rounded-2xl border p-6 text-left ${
                    selected
                      ? "border-purple-700 bg-purple-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className="text-xl font-black">{item.degree}</h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        selected
                          ? "bg-purple-700 text-white"
                          : "bg-slate-100"
                      }`}
                    >
                      {selected ? "Selected" : "Select"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">
            {(() => {
              const item =
                education[
                  selectedEducation as keyof typeof education
                ];

              return (
                <>
                  <h3 className="text-2xl font-black">{item.degree}</h3>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    {[
                      ["University", item.school],
                      ["Program", item.program],
                      ["GPA", item.gpa],
                      ["Expected / Completed", item.graduation],
                      ["Location", item.location],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {label}
                        </p>

                        <p className="mt-2 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Experience</h2>

        <p className="mt-3 text-lg text-slate-600">
          Technical, analytical, and operational experience.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {Object.entries(experiences).map(([key, exp]) => {
            const selected = selectedExperience === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedExperience(key)}
                className={`rounded-2xl border p-5 text-left ${
                  selected
                    ? "border-purple-700 bg-purple-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="font-black">{exp.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{exp.date}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">
          {(() => {
            const exp =
              experiences[
                selectedExperience as keyof typeof experiences
              ];

            return (
              <>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-700">
                  {exp.label}
                </p>

                <h3 className="mt-3 text-2xl font-black">{exp.title}</h3>

                <p className="mt-1 font-semibold text-purple-700">
                  {exp.company}
                </p>

                <p className="mt-1 text-sm text-slate-500">{exp.date}</p>

                <ul className="mt-6 space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="font-black text-purple-700">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </>
            );
          })()}
        </div>
      </section>

      {/* COURSEWORK */}
      <section id="coursework" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Coursework</h2>

          <p className="mt-3 text-lg text-slate-600">
            Selected MS Data Science coursework showing my technical
            development.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(courses).map(([key, course]) => {
              const selected = selectedCourse === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedCourse(key)}
                  className={`rounded-2xl border p-6 text-left ${
                    selected
                      ? "border-purple-400 bg-purple-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black">
                      {course.title}
                    </h3>

                    <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                      {course.grade}
                    </span>
                  </div>

                  <p className="mt-5 text-slate-600">
                    Click to view what I learned →
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">
            {(() => {
              const course =
                courses[selectedCourse as keyof typeof courses];

              return (
                <>
                  <div className="flex flex-wrap justify-between gap-4">
                    <h3 className="text-2xl font-black">
                      {course.title}
                    </h3>

                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold">
                      {course.status}: {course.grade}
                    </span>
                  </div>

                  <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
                    {course.description}
                  </p>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Key Skills & Tools
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border px-4 py-2 text-sm font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Certifications</h2>

        <p className="mt-3 text-lg text-slate-600">
          Additional learning supporting my technical development.
        </p>

        <div className="mt-10 max-w-xl rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-xl font-black">
            Generative AI for Students
          </h3>

          <p className="mt-2 font-semibold text-purple-700">
            University of St. Thomas
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Digital Badge · March 2026
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-purple-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Let&apos;s turn data into something useful.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-purple-100">
            I&apos;m interested in opportunities in Data Science, Data
            Analytics, and Data Engineering where I can apply Python, SQL,
            statistics, databases, and analytical problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:nalwogaolivia93@gmail.com"
              className="rounded-full bg-white px-6 py-3 font-bold text-purple-900"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/olivia-nalwoga-a3ab10382/"
              target="_blank"
              className="rounded-full border border-purple-400 px-6 py-3 font-bold"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Olivia-Nalwoga"
              target="_blank"
              className="rounded-full border border-purple-400 px-6 py-3 font-bold"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-purple-400 px-6 py-3 font-bold"
            >
              Resume
            </a>
          </div>

          <div className="mt-16 border-t border-purple-800 pt-7 text-sm text-purple-300">
            <p className="font-bold text-white">Olivia Nalwoga</p>
            <p className="mt-1">
              MS Data Science · University of St. Thomas
            </p>
            <p className="mt-4">
              © 2026 Olivia Nalwoga. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}