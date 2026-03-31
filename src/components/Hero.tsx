import { Download, Github, Lock, Mic, Bot } from "lucide-react";
import { useState } from "react";
import sessionImage from "../assets/synthezia-session.png";
import { RELEASE_URL, REPOSITORY_URL } from "../config/urls";

export function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent opacity-40" />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div>
          <h1
            className="font-bold text-text-primary mb-6 leading-tight"
            style={{ fontSize: "clamp(48px, 6vw, 70px)" }}
          >
            <span className="text-primary-500">Summarize</span> your meetings
            <br />
            <span className="text-primary-500">Chat</span> with IA to retrieve
            insights
          </h1>

          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Record or Drop in any audio or video — it never leaves your machine.
            You stay in control of your data, and we provide the tools to turn
            it into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-ui transition-colors duration-default flex items-center space-x-2 text-lg font-medium"
            >
              <Download className="w-5 h-5" />
              <span>Download for macOS</span>
            </a>
            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-border-default hover:border-primary-500 text-text-primary px-8 py-4 rounded-ui transition-colors duration-default flex items-center space-x-2 text-lg font-medium"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
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
        </div>

        <div
          className="max-w-4xl mx-auto bg-bg-elevated border border-border-default rounded-card relative overflow-hidden transition-shadow duration-default"
          style={{
            boxShadow: "0 0 50px 10px rgba(59, 131, 246, 0.804)",
          }}
        >
          {/* Placeholder skeleton shown while image is loading */}
          <div
            aria-hidden={imgLoaded}
            className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-opacity ${
              imgLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="w-full h-full rounded-card animate-pulse" />
          </div>

          <img
            src={sessionImage}
            alt="Synthezia session interface showing transcription in action"
            className="w-full h-auto rounded-card relative"
            loading="lazy"
            width="1200"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}
