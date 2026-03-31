import { Download } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { DISCORD_URL } from "../config/urls";

export function DownloadCTA() {
  const { ref, isInView } = useInView();

  return (
    <section id="download" className="py-32 bg-bg-surface">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
          Start transcribing — completely offline.
        </h2>
        <p className="text-xl text-text-secondary mb-10">
          Free. Open source. No account required.
        </p>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-primary-500 hover:bg-primary-600 max-w-md text-white px-5 py-5 rounded-ui transition-colors duration-default flex items-center justify-center space-x-3 text-lg font-medium mx-auto mb-6"
        >
          <Download className="w-6 h-6" />
          <span>Ask Synthezia From Discord</span>
        </a>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-text-muted">
            Requires Ollama · whisper.cpp · ffmpeg
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-bg-elevated border border-border-subtle rounded-full">
            <span className="font-mono text-sm text-text-secondary">
              <span className="text-primary-500">v0.1.0</span> · Beta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
