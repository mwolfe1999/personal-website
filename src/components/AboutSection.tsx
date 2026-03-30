import { FadeIn } from "./FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto text-left">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-8">
            About Me
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="text-lg text-text-secondary leading-relaxed space-y-4 max-w-3xl">
            <p>
              I&apos;m a Wharton MBA candidate studying Entrepreneurship &amp;
              Innovation and Artificial Intelligence for Business.
            </p>
            <p>
              Before business school, I spent four years in consulting &mdash;
              three at Bain and one at a boutique government consulting firm
              called 17a. That work is where I discovered my passion for
              automation. I spent a ton of time working with massive enterprises
              and healthcare clients, and without fail, I came across data
              accessibility challenges, over-engineered processes, and complex
              handoffs &mdash; all of which can be completely transformed by
              automation.
            </p>
            <p>
              That&apos;s why I spend so much of my time here at Wharton
              building. I&apos;m the VP of Community for the Technology Club,
              the incoming VP of Education for the AI &amp; Analytics Club, and
              a frequent participant in hackathons in and around campus.
            </p>
            <p>
              These projects are the result. Feel free to reach out to chat
              anytime!
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
