import { NetworkBackground } from "@/components/NetworkBackground";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <NetworkBackground />
      <Navbar />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
