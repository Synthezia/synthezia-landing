import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";
import { DISCORD_URL } from "../config/urls";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-ui z-50"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-default ${
          isScrolled
            ? "bg-bg-base/85 backdrop-blur-glass border-b border-border-subtle"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <a href="#" aria-label="Synthezia homepage">
                <img src={logoIcon} alt="" className="w-8 h-8 object-contain" />
              </a>
              <span className="text-xl font-semibold">Synthezia</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-text-secondary hover:text-text-primary transition-colors duration-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-base rounded"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-text-secondary hover:text-text-primary transition-colors duration-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-base rounded"
              >
                How it works
              </a>
              <a
                href="#privacy"
                className="text-text-secondary hover:text-text-primary transition-colors duration-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-base rounded"
              >
                Privacy
              </a>
              <a
                href="#download"
                className="text-text-secondary hover:text-text-primary transition-colors duration-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-base rounded"
              >
                Download
              </a>
            </div>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-ui transition-colors duration-default flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-bg-base"
              aria-label="Download Synthezia for macOS"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Synthezia From Discord</span>
              <span className="sm:hidden">Discord</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
