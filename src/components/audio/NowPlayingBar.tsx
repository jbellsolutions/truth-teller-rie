"use client";

import Image from "next/image";
import { useAudio } from "@/contexts/AudioContext";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { WaveformVisualizer } from "./WaveformVisualizer";
import { useEffect, useRef } from "react";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function NowPlayingBar() {
  const { currentTrack, isPlaying, progress, currentTime, pause, resume, next, previous, seek } =
    useAudio();
  const progressRef = useRef<{ interval?: NodeJS.Timeout }>({});

  // Simulate progress when playing
  useEffect(() => {
    if (isPlaying && currentTrack) {
      progressRef.current.interval = setInterval(() => {
        seek(Math.min(100, progress + (100 / currentTrack.durationSeconds) * 0.5));
      }, 500);
    }
    return () => {
      if (progressRef.current.interval) clearInterval(progressRef.current.interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentTrack?.id]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface-elevated)]/95 backdrop-blur-xl border-t border-[var(--border-color)]">
      {/* Progress bar */}
      <div
        className="h-1 bg-[var(--surface)] cursor-pointer group"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = ((e.clientX - rect.left) / rect.width) * 100;
          seek(pct);
        }}
      >
        <div
          className="h-full bg-primary transition-all duration-100 group-hover:h-1.5"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center gap-4 md:gap-6">
        {/* Track art — real image */}
        <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden">
          {currentTrack.image ? (
            <Image
              src={currentTrack.image}
              alt={currentTrack.title}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${currentTrack.color}, ${currentTrack.color}88)`,
              }}
            />
          )}
        </div>

        {/* Track info */}
        <div className="min-w-0 flex-shrink-0">
          <div className="text-sm font-semibold truncate max-w-[120px] md:max-w-[200px]">
            {currentTrack.title}
          </div>
          <div className="text-xs text-muted">Truth Teller Rie</div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <button onClick={previous} className="text-muted hover:text-foreground transition-colors">
            <SkipBack size={18} />
          </button>
          <button
            onClick={isPlaying ? pause : resume}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:brightness-110 transition-all"
          >
            {isPlaying ? (
              <Pause size={18} className="text-[var(--background)]" />
            ) : (
              <Play size={18} className="text-[var(--background)] ml-0.5" />
            )}
          </button>
          <button onClick={next} className="text-muted hover:text-foreground transition-colors">
            <SkipForward size={18} />
          </button>
        </div>

        {/* Waveform (desktop) */}
        <div className="hidden md:block flex-1">
          <WaveformVisualizer
            isPlaying={isPlaying}
            progress={progress}
            color={currentTrack.color}
            barCount={80}
            height={32}
          />
        </div>

        {/* Time */}
        <div className="text-xs tabular-nums text-muted flex-shrink-0 hidden sm:block">
          {formatTime(currentTime)} / {currentTrack.duration}
        </div>
      </div>
    </div>
  );
}
