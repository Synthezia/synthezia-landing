import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-default ${
        isScrolled
          ? "bg-bg-base/85 backdrop-blur-glass border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img
              src={logoIcon}
              alt="Synthezia logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-semibold">Synthezia</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-text-secondary hover:text-text-primary transition-colors duration-default"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-text-secondary hover:text-text-primary transition-colors duration-default"
            >
              How it works
            </a>
            <a
              href="#privacy"
              className="text-text-secondary hover:text-text-primary transition-colors duration-default"
            >
              Privacy
            </a>
            <a
              href="#download"
              className="text-text-secondary hover:text-text-primary transition-colors duration-default"
            >
              Download
            </a>
          </div>

          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-ui transition-colors duration-default flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download for macOS</span>
            <span className="sm:hidden">Download</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
