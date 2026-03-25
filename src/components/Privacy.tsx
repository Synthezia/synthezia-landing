import { Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Privacy() {
  const { ref, isInView } = useInView();

  return (
    <section id="privacy" className="py-32 bg-bg-surface relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 blur-3xl rounded-full" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-primary-500/10 rounded-card flex items-center justify-center">
              <Shield className="w-10 h-10 text-primary-500" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Privacy isn't a feature. It's the foundation.
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              No accounts. No telemetry. No cloud sync. Everything stays in a local SQLite database
              on your machine. Your transcripts, summaries, and conversations never leave your device.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="px-4 py-2 bg-bg-elevated border border-border-default rounded-full font-mono text-sm text-text-secondary">
                <span className="text-primary-500 font-bold">0</span> bytes sent to the cloud
              </div>
              <div className="px-4 py-2 bg-bg-elevated border border-border-default rounded-full font-mono text-sm text-text-secondary">
                <span className="text-primary-500 font-bold">0</span> accounts required
              </div>
              <div className="px-4 py-2 bg-bg-elevated border border-border-default rounded-full font-mono text-sm text-text-secondary">
                <span className="text-primary-500 font-bold">100%</span> open source
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
