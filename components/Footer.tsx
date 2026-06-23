import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          © {year} Ahmed Awan. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:ahmediqbalawan124@gmail.com"
            aria-label="Email"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ahmed-awan123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/ahmedawan216"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
