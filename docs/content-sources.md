# Portfolio content sources

Content verified on 14 September 2026. The portfolio prioritizes Data Analyst roles, with Data Science and applied research as supporting depth. Facts were checked against the original site, the unchanged resume, and actual project source files. No employers, dates, results, credentials, or impact metrics were added without support.

## Resume and existing portfolio

`public/resume.pdf` is the source for official role titles/employers, dates, GPA, education, email, tools, and the Generative AI for Students digital badge. The original `app/page.tsx` also documents Fall 2026 coursework status and the LinkedIn/GitHub URLs. Coursework and the credential now live under Education & Credentials.

The M.S. remains **in progress, expected December 2027**. No completed graduate degree is claimed. The NIRA entry retains the resume's combined title and date range; no individual appointment dates have been inferred.

Resume SHA-256 before changes: `d572827c370f5400b25cfc5425ee708ad061f27430c2f03344afb465bbfa988a`. Its content must remain unchanged.

## NHANES

Repository: [High-Dimensional Variable Selection](https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection). Reviewed commit: `6945af898f537c4c76bfb95ec63b490304f2cab3`.

Primary evidence: [analysis.ipynb](https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection/blob/6945af898f537c4c76bfb95ec63b490304f2cab3/analysis.ipynb) code and saved outputs; [README](https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection/blob/6945af898f537c4c76bfb95ec63b490304f2cab3/README.md) limitations. Notebook cell indices below are zero-based.

| Published fact | Evidence and scope |
| --- | --- |
| 92,988 source records; 220 source columns | Cell 7, input dimensions **before** selecting model variables and dropping missing rows. These are not the final modeling sample size or number of predictors evaluated. |
| 14 candidate predictors → 8 selected | Cells 9 and 23. Outcome: hemoglobin. LASSO selects age, sex, race, hematocrit, MCV, MCH, RDW, WBC. |
| 70/30 train/test split | Cell 19; random_state=42. |
| Fivefold cross-validated LASSO | Cell 23, LassoCV(cv=5), training-fitted standardization. LASSO selects features; reported full/reduced predictions use LinearRegression. |
| Full test MSE ≈0.00489; reduced ≈0.00502; difference ≈0.00013 | Cell 31 saved output; README results. Native project visual uses these rounded values, with a shared zero baseline and maximum 0.006. |
| 1,000 outcome permutations; reported p=0.278 | Cell 34. Outcome permutation retains the selected feature set. The portfolio does not interpret this as proof of model equivalence or noninferiority. |
| 2,000 bootstrap resamples | Cell 38. Training rows are resampled to assess **full-model test-MSE variability**, not selected-feature stability. |

Limitations documented by the source README: observational data do not establish causation; survey weights were not incorporated; results may depend on predictor choice, regularization strength, and model choice.

### Follow-ups for the project owner

- Publish the complete-case modeling sample count; it is absent from saved notebook outputs.
- Reconcile bootstrap interval values: README `[0.00438, 0.00631]`, notebook prose `[0.00438, 0.00635]`, saved output `[0.0043852919, 0.0064257831]`. The portfolio intentionally omits the interval.
- Add instructions to obtain/build `cbc_demo_merged_1999_2018.csv`; the CSV and the README-listed `data/README.md` are absent.
- Seed the permutation/bootstrap random generators if exact rerun reproducibility is desired. Saved results are reported as saved results; the portfolio does not claim the notebook was rerun.
- Align README wording about bootstrap feature stability with the actual full-model error bootstrap implementation.

## Relational job market database

Repository: [Job Market Salary Analytics](https://github.com/Olivia-Nalwoga/job-market-salary-analytics). Reviewed commit: `8fe31accea4393e9dfee427fcd65fe3e4bed67a8`.

Primary evidence: [final_project_DDL.sql](https://github.com/Olivia-Nalwoga/job-market-salary-analytics/blob/8fe31accea4393e9dfee427fcd65fe3e4bed67a8/final_project_DDL.sql), [README](https://github.com/Olivia-Nalwoga/job-market-salary-analytics/blob/8fe31accea4393e9dfee427fcd65fe3e4bed67a8/README.md), and [original ERD](https://github.com/Olivia-Nalwoga/job-market-salary-analytics/blob/8fe31accea4393e9dfee427fcd65fe3e4bed67a8/Relational_1.png).

- **Synthetic dataset** is explicit in README lines 114–116. Project copy emphasizes design and querying, not real labor-market conclusions.
- Eight CREATE TABLE definitions: JobSeeker, Employer, Skill, JobPosting, JobSeekerSkill, JobSkill, Application, Salary.
- Foreign-key relationships: Employer → JobPosting → Application; JobSeeker → Application; Application → Salary (at most one salary per application). JobSeekerSkill connects JobSeeker with Skill; JobSkill connects JobPosting with Skill.
- Three trigger definitions maintain application counts, update latest application dates, and reject future application dates.
- Two views: `job_requirements`, `applications_with_salary`.
- Keys, composite junction keys, validation constraints, and multi-table analytical queries are present.
- `public/projects/job-market-erd.png` is an unchanged copy of the original 1013×932 `Relational_1.png`. Full-size access is available from the homepage.

### Follow-up for the project owner

SQL line 14 contains `YearsExperience IS NULL OSR YearsExperience >= 0`; `OSR` should be `OR`. This prevents executing the published DDL as-is. The portfolio describes schema design and trigger definitions and does not claim production readiness or successful Oracle execution. The external project repository was not edited.

## Links and credentials

- GitHub profile, project repositories, notebook, SQL, and limitations link were checked; details are in `docs/validation.md`.
- LinkedIn retains the exact existing profile URL. Automated HTTP access is blocked by LinkedIn (999); this is not evidence the profile is invalid.
- Email matches the resume; no email was sent and mailbox deliverability was not tested.
- The badge issuer, title, and date are supported by the resume. No public credential-verification URL was supplied, so none was invented. Add one if Olivia supplies it.
