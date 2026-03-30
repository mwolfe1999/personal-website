export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-4">
          Get in Touch
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Interested in working together or just want to chat about building with AI?
          I&apos;d love to hear from you.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:michael.sebastian.wolfe@gmail.com"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/mwolfe1999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michael-s-wolfe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Michael Wolfe. Built with Claude Code.
        </p>
      </div>
    </footer>
  );
}
