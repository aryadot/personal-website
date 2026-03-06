import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Sparkles, Brain, Database, LineChart, Code2, Microscope, Wand2 } from "lucide-react";

const skills = [
  { name: "LLMs & Generative AI", icon: Brain, color: "text-primary" },
  { name: "Data Engineering", icon: Database, color: "text-secondary" },
  { name: "ML & Predictive Modeling", icon: LineChart, color: "text-accent" },
  { name: "NLP & RAG Pipelines", icon: Code2, color: "text-primary" },
  { name: "Analytics & Visualization", icon: Microscope, color: "text-secondary" },
  { name: "Prompt Engineering", icon: Wand2, color: "text-accent" },
];

export function Footer() {
  return (
    <footer className="py-32 px-4 sm:px-6 lg:px-8 border-t border-black/5 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-24 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary/30" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Tools of the Trade</span>
              <div className="h-px w-8 bg-primary/30" />
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-12">
              What I <span className="accent-gradient">Work With.</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 rounded-3xl bg-white/50 border border-black/5 shadow-sm hover:shadow-md transition-all"
                >
                  <skill.icon className={`w-8 h-8 ${skill.color} mb-4`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <div className="flex flex-wrap justify-center gap-12 mb-20 text-sm font-bold uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
          </div>

          <p className="text-xs text-foreground/20 font-medium uppercase tracking-widest">
            © 2025 Aryamani Boruah
          </p>
        </div>
      </div>
    </footer>
  );
}
