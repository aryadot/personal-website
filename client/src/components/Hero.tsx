import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-0 md:pt-48 md:pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Hi, I'm</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6">
              Aryamani<br />
              <span className="accent-gradient">Boruah.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              MS Analytics @ Boston College · CS @ UMass Amherst
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              I build ML systems and LLM-powered applications — from RAG pipelines to predictive models — to understand how real-world data systems actually work. I'm drawn to problems in finance, adtech, and healthcare where the stakes are high and the data is messy.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a href="#projects" className="group px-10 py-4 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all duration-300 shadow-xl">
                View Projects
              </a>
            </div>
          </FadeIn>
        </div>
        <div className="relative hidden lg:flex items-center justify-center h-[600px]">
          <FadeIn delay={0.4} direction="left" className="relative flex items-center justify-center w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src="/avatar.png" alt="Aryamani Boruah" className="w-full h-full object-cover" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}