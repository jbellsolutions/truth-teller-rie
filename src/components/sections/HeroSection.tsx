"use client";

import Image from "next/image";
import { useAudio } from "@/contexts/AudioContext";
import { FEATURED_TRACK, STATS, ALBUM_COVER } from "@/data/tracks";
import { Play, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { play, currentTrack, isPlaying } = useAudio();
  const [mounted, setMounted] = useState(false);
  const [activeListeners, setActiveListeners] = useState(STATS.activeListeners);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveListeners((n) => Math.max(300, n + Math.floor(Math.random() * 7) - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={ALBUM_COVER}
          alt="Truth Teller Rie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/85 to-[var(--background)]" />
      </div>

      {/* Animated waveform background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-8 pointer-events-none">
        <div className="flex items-end gap-[3px] h-[300px]">
          {Array.from({ length: 100 }).map((_, i) => {
            const seed = ((i * 16807) % 2147483647) / 2147483647;
            const h = 30 + seed * 250;
            return (
              <div
                key={i}
                className="w-[3px] rounded-full bg-primary"
                style={{
                  height: mounted ? `${h}px` : "30px",
                  transition: `height 1.2s ease ${i * 15}ms`,
                  animation: mounted
                    ? `waveform-pulse ${1.5 + seed * 2}s ease-in-out ${seed * 2}s infinite`
                    : undefined,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)]/80 backdrop-blur border border-[var(--border-subtle)] mb-8">
          <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
          <Users size={14} className="text-muted" />
          <span className="text-xs text-muted-foreground tabular-nums">
            {activeListeners} listening now
          </span>
        </div>

        {/* Album art */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-[var(--border-subtle)]">
          <Image
            src={ALBUM_COVER}
            alt="Truth Teller Rie - Latest Release"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-4">
          Truth Teller <em className="text-primary italic">Rie</em>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-3">
          Trap Soul &middot; Hip-Hop &middot; Truth
        </p>
        <p className="text-sm text-muted max-w-md mx-auto mb-10">
          Every track tells a story, every verse speaks truth.
        </p>

        {/* Play button */}
        <button
          onClick={() => play(FEATURED_TRACK)}
          className="group relative w-20 h-20 rounded-full bg-primary hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
        >
          <Play
            size={32}
            className="text-[var(--background)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-1"
            fill="var(--background)"
          />
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
        </button>

        <div className="mt-4 text-sm text-muted">
          {currentTrack && isPlaying ? (
            <span>
              Now playing: <span className="text-primary">{currentTrack.title}</span>
            </span>
          ) : (
            "Tap to play the latest"
          )}
        </div>

        {/* Stats bar — real numbers */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <div>
            <div className="text-2xl md:text-3xl font-bold">{STATS.totalStreams}</div>
            <div className="text-xs text-muted uppercase tracking-wider">Streams</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">{STATS.followers}</div>
            <div className="text-xs text-muted uppercase tracking-wider">Followers</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">{STATS.tracks}</div>
            <div className="text-xs text-muted uppercase tracking-wider">Tracks</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-[var(--border-color)] flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
