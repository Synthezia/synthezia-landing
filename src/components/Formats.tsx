import { useInView } from '../hooks/useInView';

const formats = ['MP3', 'WAV', 'M4A', 'FLAC', 'MP4', 'MKV', 'OGG', 'OPUS'];

export function Formats() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-bg-base">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-text-muted text-sm uppercase tracking-wider mb-6">Works with</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {formats.map((format, index) => (
            <div
              key={format}
              className="px-4 py-2 bg-bg-surface border border-border-subtle rounded-ui font-mono text-sm text-text-secondary hover:border-primary-500 hover:text-primary-500 transition-all duration-default"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {format}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
