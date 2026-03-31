import { useState } from "react";
import { RELEASE_URL } from "../config/urls";

export function AskSynthezia() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    // Simulate local handling: in future replace with email/send logic.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="mt-8 p-6 bg-bg-surface border border-border-subtle rounded-card max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-8 text-center">
        Request Synthezia Download
      </h3>

      <div className="flex flex-col items-center md:flex-row gap-6">
        <div className="w-full bg-bg-base border border-border-default rounded-md p-4 flex flex-col items-center justify-center text-center">
          <h4 className="font-semibold mb-2">Join our Discord</h4>
          <p className="text-sm text-text-secondary mb-4">
            Ask questions, get support, and request features in our community.
          </p>
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#5865F2" }}
            className="text-white px-4 py-2 rounded-ui transition-opacity duration-default hover:opacity-90"
          >
            Join Discord
          </a>
        </div>
      </div>

      {submitted && (
        <div className="mt-4 text-center">
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 underline"
          >
            Download Synthezia now
          </a>
        </div>
      )}
    </div>
  );
}

export default AskSynthezia;
