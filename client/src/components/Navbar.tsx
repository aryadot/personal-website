import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gradient">
            My Portfolio
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em]">
          <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
            Projects
          </a>
        </nav>

       
      </div>
    </motion.header>
  );
}
