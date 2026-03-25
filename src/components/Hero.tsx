import { Download, Github, Lock, Mic, Bot } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="font-bold text-text-primary mb-6 leading-tight" style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
          Your audio. Your data.<br />Your machine.
        </h1>

        <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Synthezia is fully offline. Drop in any audio or video — it never leaves your computer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-ui transition-colors duration-default flex items-center space-x-2 text-lg font-medium">
            <Download className="w-5 h-5" />
            <span>Download for macOS</span>
          </button>
          <button className="border border-border-default hover:border-primary-500 text-text-primary px-8 py-4 rounded-ui transition-colors duration-default flex items-center space-x-2 text-lg font-medium">
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <div className="flex items-center space-x-2 px-4 py-2 bg-bg-surface border border-border-subtle rounded-full">
            <Lock className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-text-secondary">100% Offline</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-bg-surface border border-border-subtle rounded-full">
            <Mic className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-text-secondary">Whisper.cpp</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-bg-surface border border-border-subtle rounded-full">
            <Bot className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-text-secondary">Ollama AI</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-elevated border border-border-default rounded-card overflow-hidden shadow-2xl">
            <div className="bg-bg-surface border-b border-border-subtle px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-text-muted">Synthezia.app</span>
            </div>

            <div className="flex">
              <div className="w-48 bg-bg-surface border-r border-border-subtle p-4 space-y-2">
                <div className="h-8 bg-bg-elevated rounded-ui" />
                <div className="h-8 bg-primary-500/20 rounded-ui border border-primary-500/50" />
                <div className="h-8 bg-bg-elevated rounded-ui" />
                <div className="h-8 bg-bg-elevated rounded-ui" />
              </div>

              <div className="flex-1 p-6 space-y-3">
                <div className="h-4 bg-bg-surface rounded-ui w-3/4 animate-pulse" />
                <div className="h-4 bg-primary-500/20 rounded-ui w-full" style={{ animationDelay: '0.2s' }} />
                <div className="h-4 bg-bg-surface rounded-ui w-5/6 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="h-4 bg-bg-surface rounded-ui w-4/5 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <div className="h-4 bg-primary-500/20 rounded-ui w-full" style={{ animationDelay: '0.8s' }} />
                <div className="h-4 bg-bg-surface rounded-ui w-2/3 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
