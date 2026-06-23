import { FadeIn } from "./FadeIn";
import { Sparkles } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <div className="flex flex-wrap justify-center gap-12 mb-12 text-sm font-bold uppercase tracking-[0.2em]">
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
            <a href="/#resume" className="hover:text-secondary transition-colors">Resume</a>
            <Link href="/projects">
              <a className="hover:text-primary transition-colors">Projects</a>
            </Link>
          </div>

          <p className="text-xs text-foreground/20 font-medium uppercase tracking-widest">
            © 2025 Aryamani Boruah
          </p>
        </div>
      </div>
    </footer>
  );
}
