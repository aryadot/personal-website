import { NetworkBackground } from "@/components/NetworkBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <NetworkBackground />
      <Navbar />
      <main>
        <Hero />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
