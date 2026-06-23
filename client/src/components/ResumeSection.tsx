import { FadeIn } from "./FadeIn";

const experience = [
  {
    role: "Data Science Intern",
    company: "Microsoft AI Studio",
    sub: "Break Through Tech AI Fellow @ MIT · Selected from 3,000+ applicants",
    date: "May 2024 – Jan 2025",
    bullets: [
      "Developed a PyTorch LSTM and ARIMA time series pipeline to predict water body purity 15 days ahead using Sentinel-2 satellite imagery data, with LSTM outperforming ARIMA as the baseline",
      "Engineered chlorophyll concentration features using spectral band indices, lag variables (t-7, t-14), and rolling statistics with Pandas and NumPy, processed at scale using Dask for parallel computation across large satellite datasets",
      "Applied strict chronological train/test splits to prevent data leakage, benchmarked LSTM against ARIMA, and tracked experiments and model versions across configurations using MLflow",
      "Built a water body purity chatbot using OpenAI function-calling where users query the predicted purity of a water body",
    ],
  },
  {
    role: "Market Research Analyst",
    company: "Synergetics",
    sub: "",
    date: "Jun 2023 – Aug 2023",
    bullets: [
      "Designed and executed A/B tests on marketing campaigns using SQL CTEs for cohort segmentation, achieving a 22% lift in conversion rate",
      "Built Tableau dashboards tracking KPIs across customer segments to surface actionable insights for leadership",
    ],
  },
  {
    role: "Independent Research",
    company: "Boston College",
    sub: "Stock Market Crash Prediction · Presented at BC Analytics Symposium, March 2026",
    date: "Jan 2025 – Mar 2026",
    bullets: [
      "Investigated whether firm-level financial indicators from Compustat can predict stock crashes for S&P 500 companies using 22 years of data across 382 firms",
      "Trained and compared XGBoost, Random Forest, and Logistic Regression on chronological train/test splits, evaluating signal quality via AUROC against Altman Z-Score and Distance to Default baselines",
      "Applied SHAP to interpret model outputs and identify the most predictive financial features driving crash risk — achieved AUROC 0.561, outperforming traditional financial benchmarks",
    ],
  },
];

const skills = [
  {
    category: "Languages & Data",
    items: ["Python", "Pandas", "NumPy", "scikit-learn", "SQL", "R"],
  },
  {
    category: "ML & Modeling",
    items: ["XGBoost", "Random Forest", "Logistic Regression", "PyTorch", "TensorFlow", "LSTM", "ARIMA", "SHAP", "SMOTE", "Chronological Cross-Validation", "Time-Series Forecasting", "Ensemble Methods"],
  },
  {
    category: "Finance & Research",
    items: ["Alpha Signal Generation", "Market Prediction", "Financial Time Series", "Compustat", "S&P 500 Equity Analysis", "AUROC Evaluation", "FinBERT", "Investment Signal Generation"],
  },
  {
    category: "MLOps & Tools",
    items: ["MLflow", "GitHub Actions CI/CD", "pytest", "Dask", "GCP", "Streamlit", "FastAPI", "ChromaDB", "LangChain"],
  },
];

const education = [
  {
    school: "Boston College",
    degree: "M.S. Applied Analytics",
    date: "Expected May 2027",
    note: "Relevant Coursework: Machine Learning, Time Series Forecasting, Statistical Modeling, Econometrics, Data Mining",
  },
  {
    school: "University of Massachusetts Amherst",
    degree: "B.S. Computer Science",
    date: "May 2025",
    note: "",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Section Header */}
      <FadeIn>
        <div className="mb-24 text-center">
          <h2 className="text-6xl md:text-7xl font-display font-bold text-gradient mb-8">
            My <span className="accent-gradient">Resume.</span>
          </h2>
        </div>
      </FadeIn>

      {/* ── EXPERIENCE ── */}
      <div className="mb-20">
        <FadeIn>
          <div className="inline-flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-primary/30" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Experience</span>
            <div className="h-px w-8 bg-primary/30" />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="story-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    {exp.sub && (
                      <p className="text-xs text-muted-foreground mt-1">{exp.sub}</p>
                    )}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap pt-1">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div className="mb-20">
        <FadeIn>
          <div className="inline-flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-accent/50" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Skills</span>
            <div className="h-px w-8 bg-accent/50" />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {skills.map((group, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="story-card">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs font-medium px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70 border border-black/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div>
        <FadeIn>
          <div className="inline-flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-primary/30" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Education</span>
            <div className="h-px w-8 bg-primary/30" />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="story-card">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="text-lg font-display font-bold">{edu.school}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">{edu.date}</span>
                </div>
                <p className="text-primary font-semibold text-sm mb-2">{edu.degree}</p>
                {edu.note && <p className="text-xs text-muted-foreground leading-relaxed">{edu.note}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </section>
  );
}
