import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useProjects } from "@/hooks/use-projects";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const { data: projects, isLoading } = useProjects();

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
        {isLoading ? (
          [1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[600px] rounded-[3rem] bg-black/5 animate-pulse" />
          ))
        ) : (
          projects?.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up">
              <div className="group story-card h-full flex flex-col">
                {/* Visual Header */}
                <div className="relative aspect-[4/3] mb-10 overflow-hidden rounded-[2rem] bg-black/5 shadow-inner">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40" />

                  {/* Live Demo Button on hover */}
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

                {/* Content */}
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
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-foreground flex items-center gap-1.5 transition-colors">
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/70 flex items-center gap-1.5 transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" /> View Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))
        )}
      </div>
    </section>
  );
}
