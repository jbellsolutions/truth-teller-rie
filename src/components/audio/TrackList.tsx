"use client";

import Image from "next/image";
import { useAudio } from "@/contexts/AudioContext";
import { Track } from "@/data/tracks";
import { Play, Pause } from "lucide-react";

function formatPlays(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}

export function TrackList({ tracks }: { tracks: Track[] }) {
  const { currentTrack, isPlaying, play, pause, resume } = useAudio();

  return (
    <div className="space-y-1">
      {tracks.map((track, index) => {
        const isCurrent = currentTrack?.id === track.id;
        const isActive = isCurrent && isPlaying;

        return (
          <div
            key={track.id}
            onClick={() => {
              if (isCurrent && isPlaying) pause();
              else if (isCurrent) resume();
              else play(track);
            }}
            className={`group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
              isCurrent ? "bg-[var(--surface-elevated)]" : "hover:bg-[var(--surface-elevated)]/50"
            }`}
          >
            {/* Number / Play icon */}
            <div className="w-8 text-center flex-shrink-0">
              {isCurrent ? (
                isActive ? (
                  <Pause size={16} className="text-primary mx-auto" />
                ) : (
                  <Play size={16} className="text-primary mx-auto ml-0.5" />
                )
              ) : (
                <>
                  <span className="text-sm tabular-nums text-muted group-hover:hidden">
                    {index + 1}
                  </span>
                  <Play
                    size={16}
                    className="text-muted-foreground mx-auto hidden group-hover:block"
                  />
                </>
              )}
            </div>

            {/* Album art — real image */}
            <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden">
              {track.image ? (
                <Image
                  src={track.image}
                  alt={track.title}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(135deg, ${track.color}, ${track.color}88)`,
                  }}
                />
              )}
            </div>

            {/* Track info */}
            <div className="flex-1 min-w-0">
              <div
                className={`text-sm font-medium truncate ${isCurrent ? "text-primary" : ""}`}
              >
                {track.title}
              </div>
              <div className="text-xs text-muted truncate">
                {track.album} &middot; {track.year}
              </div>
            </div>

            {/* Plays */}
            <div className="text-xs tabular-nums text-muted hidden sm:block">
              {formatPlays(track.plays)} plays
            </div>

            {/* Duration */}
            <div className="text-xs tabular-nums text-muted w-10 text-right">
              {track.duration}
            </div>
          </div>
        );
      })}
    </div>
  );
}
