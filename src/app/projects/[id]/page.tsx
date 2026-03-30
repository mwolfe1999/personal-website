import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return projects
    .filter((p) => p.hasDetailPage)
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.name} — Michael Wolfe`,
    description: project.blurb,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.hasDetailPage || !project.detail) {
    notFound();
  }

  const { detail } = project;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/#projects"
          className="text-sm text-text-muted hover:text-accent transition-colors"
        >
          &larr; Back to All Projects
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <h1 className="font-heading text-4xl md:text-5xl text-text-primary">
            {project.name}
          </h1>
          {project.isWip && (
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-wip/10 text-wip">
              In Progress
            </span>
          )}
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-surface text-sm font-medium text-text-secondary border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hero media */}
        {project.video && (
          <div className="mb-10 rounded-lg overflow-hidden border border-border shadow-md">
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
          </div>
        )}
        {!project.video && project.image && (
          <div className="mb-10 rounded-lg overflow-hidden border border-border shadow-md">
            <img src={project.image} alt={project.name} className="w-full" />
          </div>
        )}

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl text-text-primary mb-4">
            Overview
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {detail.overview}
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl text-text-primary mb-6">
            How It Works
          </h2>
          <div className="space-y-6">
            {detail.howItWorks.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl text-text-primary mb-6">
            Tech Stack
          </h2>
          <div className="space-y-3">
            {detail.techStackDetailed.map((item) => (
              <div key={item.name} className="flex gap-2">
                <span className="font-semibold text-text-primary whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-text-muted">—</span>
                <span className="text-text-secondary text-sm leading-relaxed">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl text-text-primary mb-4">
            Results
          </h2>
          {detail.results ? (
            <p className="text-text-secondary leading-relaxed">
              {detail.results}
            </p>
          ) : (
            <p className="text-text-muted italic">
              This project is currently in progress. Results will be updated once it ships.
            </p>
          )}
        </section>

        {/* Action buttons */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
              >
                View Live Site &rarr;
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-text-secondary font-medium hover:border-accent hover:text-accent transition-colors"
              >
                View on GitHub
              </a>
            )}
          </div>
        )}

        {/* Back link */}
        <Link
          href="/#projects"
          className="text-sm text-text-muted hover:text-accent transition-colors"
        >
          &larr; Back to All Projects
        </Link>
      </article>
    </div>
  );
}
