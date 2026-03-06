import { FadeIn } from "./FadeIn";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

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
    description: "Full-stack agentic AI prototype with dual-signal recommendations separating hold/sell guidance from buy/wait entry signals. Engineered a three-layer scoring pipeline using fundamental metrics, technical indicators (RSI, MACD, Bollinger Bands), and FinBERT NLP sentiment on financial news. Integrated Groq Llama 3.3 narratives and a RAG chat interface.",
    imageUrl: "/Alphascope.png",
    tags: ["Python", "LLM", "RAG", "FinBERT", "Streamlit", "Groq"],
    githubUrl: "https://github.com/aryadot/AlphaScope-AI",
    liveUrl: "https://alphascope.streamlit.app/"
  },
  {
    id: 2,
    title: "Clinical Trial Navigator",
    description: "NLP-powered trial discovery engine matching patients to breast cancer trials using a three-layer pipeline: semantic search via sentence-transformer embeddings in ChromaDB, clinical NER with spaCy, and rule-based scoring. Composite relevance scores with LLM-generated clinician-friendly explanations and RAG chat.",
    imageUrl: "/clinicalmatch.png",
    tags: ["NLP", "RAG", "ChromaDB", "spaCy", "HuggingFace", "LLM"],
    githubUrl: "https://github.com/aryadot/clinical_matching_trials",
    liveUrl: "https://clinicalmatch-ai.streamlit.app/"
  },
  {
    id: 3,
    title: "Customer LTV Intelligence Platform",
    description: "End-to-end analytics pipeline on 93,000 e-commerce customers predicting lifetime value from 12 RFM and behavioral features — identified and removed 4 leaky features to ensure generalizability. Delivered a 4-tab Streamlit dashboard with live single-customer scoring, bulk batch prediction, automated data drift alerts, and a model registry — translating outputs into High/Mid/Low value tier classifications.",
    imageUrl: "/LTV.png",
    tags: ["Python", "ML", "Streamlit", "RFM", "XGBoost", "Data Drift"],
    githubUrl: "https://github.com/aryadot",
    liveUrl: "https://advertiser-ltv-predictor-7ds5ekxqzymugz4m5qpqci.streamlit.app/"
  },
  {
    id: 4,
    title: "Ad Creative Fatigue Detector",
    description: "Engineered 10+ behavioral signals from raw ad engagement time-series data — including CTR decay rates, impression velocity, and rolling engagement drop ratios — to detect when creatives lose effectiveness. Integrated SHAP explainability to surface top fatigue drivers per creative, deployed as a live Streamlit dashboard with batch scoring and per-prediction attribution.",
    imageUrl: "/adcreative.png",
    tags: ["Python", "SHAP", "Streamlit", "Time-Series", "Ad Tech", "XGBoost"],
    githubUrl: "https://github.com/aryadot",
    liveUrl: "https://ad-creative-fatigue-detector-x48vy2qn6pt8nfqwxtnr82.streamlit.app/"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="mb-24 text-center">
          <h2 className="text-6xl md:text-7xl font-display font-bold text-gradient mb-8">
            My <span className="accent-gradient">Projects.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            End-to-end ML systems, LLM applications, and deployed AI prototypes.
          </p>
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
                      <ExternalLink className="w-3.5 h-3.5" />
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
