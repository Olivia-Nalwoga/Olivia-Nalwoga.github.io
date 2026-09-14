import Image from "next/image";

export function ModelComparison() {
  return (
    <figure className="model-figure" aria-labelledby="model-caption">
      <div className="figure-heading">
        <span>Model comparison</span>
        <span>NHANES / Python</span>
      </div>
      <div className="predictor-comparison">
        <div>
          <strong>14</strong>
          <span>Candidate predictors</span>
        </div>
        <span className="reduction-arrow" aria-hidden="true">
          →
        </span>
        <div>
          <strong>8</strong>
          <span>LASSO-selected predictors</span>
        </div>
      </div>
      <div className="predictor-blocks" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index} className={index < 8 ? "kept" : "removed"} />
        ))}
      </div>
      <div className="chart-title">
        Test mean squared error <span>Lower is better</span>
      </div>
      <div className="mse-row">
        <div>
          <span>Full · 14 predictors</span>
          <strong>0.00489</strong>
        </div>
        <div className="bar-track">
          <span
            className="mse-bar full"
            style={{ width: `${(0.00489 / 0.006) * 100}%` }}
          />
        </div>
      </div>
      <div className="mse-row">
        <div>
          <span>Reduced · 8 predictors</span>
          <strong>0.00502</strong>
        </div>
        <div className="bar-track">
          <span
            className="mse-bar reduced"
            style={{ width: `${(0.00502 / 0.006) * 100}%` }}
          />
        </div>
      </div>
      <div className="chart-axis" aria-hidden="true">
        <span>0</span>
        <span>0.003</span>
        <span>0.006</span>
      </div>
      <figcaption id="model-caption">
        Fewer predictors, similar held-out error. Rounded test MSE from the
        saved notebook; both models use linear regression.
      </figcaption>
    </figure>
  );
}

export function DatabaseSchema() {
  return (
    <figure className="schema-figure">
      <div className="figure-heading">
        <span>Relational schema</span>
        <span>8 tables</span>
      </div>
      <a
        href="/projects/job-market-erd.png"
        target="_blank"
        rel="noopener noreferrer"
        className="schema-image-link"
        aria-label="Open the full-size eight-table database schema"
      >
        <Image
          src="/projects/job-market-erd.png"
          alt="Eight-table schema: JobSeeker and JobPosting connect through Application to Salary; Employer owns JobPosting; JobSeekerSkill and JobSkill connect seekers and postings to Skill."
          width={1013}
          height={932}
          unoptimized
          className="schema-image"
        />
      </a>
      <figcaption>
        Original project ERD.{" "}
        <a
          className="text-link"
          href="/projects/job-market-erd.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          View full-size schema <span aria-hidden="true">↗</span>
        </a>
      </figcaption>
    </figure>
  );
}
