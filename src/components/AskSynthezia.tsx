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
      <h3 className="text-lg font-semibold mb-2">Request Synthezia Download</h3>
      <p className="text-sm text-text-secondary mb-4">
        Enter your email to receive the download link.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="ask-email" className="text-sm mb-1">
          Email
        </label>
        <input
          id="ask-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="p-3 border border-border-default rounded-md bg-bg-base text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

        {/* platform selection removed per request */}

        <div className="mt-3 flex items-center justify-between gap-4">
          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white px-4 py-2 rounded-ui transition-colors duration-default"
          >
            {loading ? "Sending…" : "Request Download"}
          </button>

          <div className="text-sm text-text-muted">
            {submitted ? (
              <span role="status" aria-live="polite">
                Check your inbox — link sent.
              </span>
            ) : (
              <span>We never store your email.</span>
            )}
          </div>
        </div>
      </form>

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
