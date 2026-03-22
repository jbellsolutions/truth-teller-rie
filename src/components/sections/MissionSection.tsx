"use client";

import Image from "next/image";
import { Heart, Quote, ExternalLink } from "lucide-react";
import { ARTIST_BIO, SOCIAL_LINKS } from "@/data/tracks";

export function MissionSection() {
  return (
    <section id="mission" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Heart size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            The Mission
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-8">About Truth Teller Rie</h2>

        {/* Artist bio with photo */}
        <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-subtle)] p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Artist photo */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/photo-5.jpg"
                  alt="Truth Teller Rie"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <Quote size={32} className="text-primary/30 mb-4" />
              <p className="text-base md:text-lg leading-relaxed mb-6 text-muted-foreground">
                {ARTIST_BIO}
              </p>
              <p className="font-display text-xl italic text-primary mb-6">
                Every track tells a story, every verse speaks truth.
              </p>

              {/* Streaming links */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Spotify", href: SOCIAL_LINKS.spotify },
                  { label: "Apple Music", href: SOCIAL_LINKS.appleMusic },
                  { label: "SoundCloud", href: SOCIAL_LINKS.soundCloud },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Truth to Power",
              body: "Using music as a platform to speak truth, foster financial independence and psychological freedom, and counter the systemic devaluation of Black culture.",
            },
            {
              title: "Black Love",
              body: "A self-described reparationist and proponent of Black love. Every collaboration, every verse, every project centers on uplifting and celebrating the culture.",
            },
            {
              title: "Independence",
              body: "No label. No algorithm. No middleman deciding who hears what. The music goes directly from studio to speaker. This site is that independence made real.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-[var(--surface)] rounded-xl border border-[var(--border-subtle)] p-6"
            >
              <h3 className="font-display text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
