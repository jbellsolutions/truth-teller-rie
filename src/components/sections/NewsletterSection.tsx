"use client";

import { useState } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section id="join" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-subtle)] p-8 md:p-16 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

          <div className="relative">
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl mb-3">Join the inner circle</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Behind-the-scenes content, early access to drops, and stories that don&apos;t make it
              to social. No spam. Just truth.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-[var(--success)]">
                <div className="w-10 h-10 rounded-full bg-[var(--success)]/10 flex items-center justify-center">
                  <Check size={20} />
                </div>
                <span className="font-semibold">You&apos;re in. Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 bg-[var(--surface-elevated)] border border-[var(--border-color)] rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-[var(--background)] rounded-xl font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2"
                >
                  Join <ArrowRight size={16} />
                </button>
              </form>
            )}

            <p className="text-xs text-muted mt-4">
              2,847 people are already in. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
