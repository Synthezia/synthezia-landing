import { Github, BookOpen, Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-ui bg-primary-500 flex items-center justify-center font-bold text-white">
              S
            </div>
            <span className="text-lg font-semibold">Synthezia</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-text-muted hover:text-text-primary transition-colors duration-default"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-text-muted hover:text-text-primary transition-colors duration-default"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">Docs</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-text-muted hover:text-text-primary transition-colors duration-default"
            >
              <Scale className="w-5 h-5" />
              <span className="text-sm">License</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-subtle text-center text-sm text-text-muted">
          <p>© 2025 Mat · Synthezia · Built with Tauri, React & Rust.</p>
        </div>
      </div>
    </footer>
  );
}
