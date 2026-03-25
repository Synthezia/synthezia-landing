import { Mic, Monitor, MessageSquare } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const roadmapItems = [
  {
    icon: Mic,
    title: 'Live Mic Recording',
    description: 'Record and transcribe in real-time',
  },
  {
    icon: Monitor,
    title: 'Screen Recording',
    description: 'Capture screen + audio simultaneously',
  },
  {
    icon: MessageSquare,
    title: 'Global AI Chat',
    description: 'Query across all your transcripts',
  },
];

function RoadmapCard({ icon: Icon, title, description, index }: { icon: typeof Mic; title: string; description: string; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-bg-elevated border border-border-default rounded-card p-6 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/50 rounded-full text-xs font-mono text-amber-500 mb-4">
        In development
      </div>
      <div className="w-12 h-12 bg-primary-500/10 rounded-ui flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-500" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}

export function Roadmap() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            What's coming next.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <RoadmapCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
