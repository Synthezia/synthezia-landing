import { Lock, Mic, Bot, Users, MessageCircle, FileText } from "lucide-react";
import { useInView } from "../hooks/useInView";

const features = [
  {
    icon: Lock,
    title: "100% Offline",
    description: "Audio never touches a server.",
  },
  {
    icon: Mic,
    title: "Whisper.cpp",
    description: "Supports MP3, WAV, M4A, FLAC, MP4, MKV.",
  },
  {
    icon: Bot,
    title: "AI Summaries",
    description:
      "Meeting, Lecture, Interview, General, Custom modes via Ollama.",
  },
  {
    icon: Users,
    title: "Speaker Diarization",
    description: "Who said what, editable labels.",
  },
  {
    icon: MessageCircle,
    title: "Per-Session Chat",
    description: "Ask questions about any transcript.",
  },
  {
    icon: FileText,
    title: "Export",
    description: "TXT, Markdown, PDF, DOCX.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Lock;
  title: string;
  description: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-bg-surface border border-border-subtle rounded-card p-6 transition-all duration-500 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      role="listitem"
    >
      <div className="w-12 h-12 bg-primary-500/10 rounded-ui flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-default">
        <Icon className="w-6 h-6 text-primary-500" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

export function Features() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="features"
      className="py-32 bg-bg-base"
      aria-labelledby="features-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="features-title"
            className="text-4xl sm:text-5xl font-bold text-text-primary mb-4"
          >
            Everything you need. Nothing you don't.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
