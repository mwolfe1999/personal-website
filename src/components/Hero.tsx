import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <FadeIn>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight">
              Michael Wolfe
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-2 text-lg text-text-muted">
              Wharton MBA Class of 2027
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-xl md:text-2xl text-text-secondary max-w-lg">
              Shipping cool products with AI tools and publishing my learnings along the way. Take a look around!
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-text-secondary font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Headshot */}
        <FadeIn delay={0.15} className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-border shadow-lg">
            <Image
              src="/images/headshot.jpg"
              alt="Michael Wolfe"
              width={288}
              height={288}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
