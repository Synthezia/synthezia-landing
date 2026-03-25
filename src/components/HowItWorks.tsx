import { Upload, Zap, FileCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    icon: Upload,
    title: 'Drop your file',
    description: 'Drag & drop any audio or video file',
  },
  {
    icon: Zap,
    title: 'Transcribe offline',
    description: 'Fast, local processing with whisper.cpp',
  },
  {
    icon: FileCheck,
    title: 'Get your summary',
    description: 'AI-powered insights via Ollama',
  },
];

function Step({ icon: Icon, title, description, index }: { icon: typeof Upload; title: string; description: string; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <div className="w-16 h-16 bg-primary-500/10 border-2 border-primary-500 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary-500" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
          {index + 1}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary max-w-xs">{description}</p>
    </div>
  );
}

export function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section id="how-it-works" className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            From file to insight in seconds.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-2/3 h-0.5 border-t-2 border-dashed border-primary-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <Step key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
