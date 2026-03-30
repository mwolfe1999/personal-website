import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
      </main>
      <Footer />
    </>
  );
}
