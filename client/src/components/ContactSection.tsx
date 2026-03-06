import { FadeIn } from "./FadeIn";
import { Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/5">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6">
            Get in <span className="accent-gradient">Touch.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Open to internships, collaborations, and interesting problems. Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:boruaha@bc.edu"
            className="flex items-center gap-3 px-10 py-5 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Mail className="w-5 h-5" />
            boruaha@bc.edu
          </a>
          <a
            href="https://linkedin.com/in/aryamaniboruah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 rounded-full font-bold border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
