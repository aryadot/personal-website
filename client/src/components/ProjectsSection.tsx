import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AlphaScope AI — Stock Analysis Engine",
    description: "Agentic investment research engine that autonomously retrieves financial data, runs FinBERT sentiment analysis on news, and generates risk-scored buy/sell/hold recommendations via LangChain ReAct loops. Built a FastMCP server exposing financial tools to AI agents, RAG-powered chat interface using ChromaDB vector storage, and CI/CD pipeline with 34 pytest unit tests. End-to-end latency under 10 seconds.",
    imageUrl: "/Alphascope.png",
    tags: ["LangChain ReAct", "FinBERT", "ChromaDB", "LLaMA 3.3", "FastAPI", "FastMCP"],
    githubUrl: "https://github.com/aryadot/AlphaScope-AI",
    liveUrl: "https://alphascope.streamlit.app/",
  },
  {
    id: 2,
    title: "Clinical Trial Navigator",
    description: "NLP pipeline matching breast cancer patients to clinical trials using a three-layer approach: semantic search via sentence-transformer embeddings in ChromaDB, clinical NER with spaCy, and rule-based eligibility scoring. Expanded to 19 real PubMed patient profiles with PDF OCR ingestion. MRR 0.96, Precision@5 0.94 across 1,046 ClinicalTrials.gov records.",
    imageUrl: "/clinicalmatch.png",
    tags: ["spaCy NER", "ChromaDB", "Sentence Transformers", "Llama 4 Scout", "Groq"],
    githubUrl: "https://github.com/aryadot/clinical_matching_trials",
    liveUrl: "https://clinicalmatch-ai.streamlit.app/",
  },
  {
    id: 3,
    title: "Cardiac Biomarker Readmission Prediction",
    description: "BiLSTM with attention mechanism trained on MIMIC-IV EHR data to predict 30-day heart failure readmission. Benchmarked against XGBoost, Random Forest, and Logistic Regression baselines using 5-fold CV. BiLSTM achieved the highest AUROC of 0.704, outperforming all classical baselines. Applied SMOTE for class imbalance and optimized decision threshold for clinical recall.",
    imageUrl: "/cardiac.png",
    tags: ["PyTorch", "BiLSTM", "MIMIC-IV", "SMOTE", "5-Fold CV", "XGBoost"],
    githubUrl: "https://github.com/aryadot",
    liveUrl: "",
  },
  {
    id: 4,
    title: "Customer LTV Intelligence Platform",
    description: "End-to-end ML pipeline predicting customer lifetime value on 93,000 e-commerce customers using XGBoost with RFM features. 4-tab Streamlit dashboard with live scoring, batch prediction, drift alerts, and model registry.",
    imageUrl: "/LTV.png",
    tags: ["XGBoost", "scikit-learn", "SHAP", "MLflow", "Streamlit"],
    githubUrl: "https://github.com/aryadot",
    liveUrl: "https://advertiser-ltv-predictor-7ds5ekxqzymugz4m5qpqci.streamlit.app/",
  },
  {
    id: 5,
    title: "Ad Creative Fatigue Detector",
    description: "Engineered 10+ behavioral signals from raw ad engagement time-series data including CTR decay rates, impression velocity, and rolling engagement drop ratios to detect when creatives lose effectiveness. SHAP explainability integrated.",
    imageUrl: "/adcreative.png",
    tags: ["Python", "SHAP", "Streamlit", "Time-Series", "Ad Tech", "XGBoost"],
    githubUrl: "https://github.com/aryadot",
    liveUrl: "https://ad-creative-fatigue-detector-x48vy2qn6pt8nfqwxtnr82.streamlit.app/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="mb-24 text-center">
          <h2 className="text-6xl md:text-7xl font-display font-bold text-gradient mb-8">
            My <span className="accent-gradient">Projects.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1} direction="up">
            <div className="group story-card h-full flex flex-col">
              <div className="relative aspect-[4/3] mb-10 overflow-hidden rounded-[2rem] bg-black/5 shadow-inner">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40" />
                {project.liveUrl && (
                  <div className="absolute bottom-6 right-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col px-2">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/5 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/20">Ref. 00{project.id}</span>
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-foreground flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/70 flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" /> View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
