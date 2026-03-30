import { projects, categories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">
            Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mb-16">
            A collection of products I&apos;ve built with AI tools — from full-stack web
            apps to personal automations. Each one went from idea to working product
            in days, not months.
          </p>
        </FadeIn>

        {categories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="mb-16 last:mb-0">
              <FadeIn>
                <h3 className="font-heading text-2xl text-text-primary mb-8">
                  {category}
                </h3>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
}
