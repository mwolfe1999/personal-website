import { FadeIn } from "./FadeIn";

const highlights = [
  {
    title: "Wharton MBA",
    description: "Entrepreneurship & Innovation, AI for Business (Class of 2027)",
  },
  {
    title: "Bain & Company",
    description: "3 years in consulting across consumer, healthcare, and private equity",
  },
  {
    title: "17a",
    description: "1 year working on healthcare technology transformations for state & local governments",
  },
  {
    title: "Northwestern University",
    description: "Economics & Political Science, Cum Laude",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-10">
            Resume
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Resume thumbnail */}
          <FadeIn className="flex-shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-64 rounded-lg overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/resume-thumb.png"
                alt="Resume preview"
                className="w-full"
              />
            </a>
          </FadeIn>

          {/* Experience highlights */}
          <FadeIn delay={0.1} className="flex-1">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Experience Highlights
            </h3>
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="border-b border-border pb-4 last:border-0">
                  <span className="font-semibold text-accent">{item.title}</span>
                  <span className="text-text-secondary"> — {item.description}</span>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
