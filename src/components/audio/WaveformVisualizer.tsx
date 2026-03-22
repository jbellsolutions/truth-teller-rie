"use client";

import { useMemo } from "react";

interface WaveformVisualizerProps {
  isPlaying: boolean;
  progress: number;
  color: string;
  barCount?: number;
  height?: number;
  animated?: boolean;
}

export function WaveformVisualizer({
  isPlaying,
  progress,
  color,
  barCount = 60,
  height = 40,
  animated = false,
}: WaveformVisualizerProps) {
  // Generate consistent random heights for bars
  const barHeights = useMemo(() => {
    const heights: number[] = [];
    let seed = 42;
    for (let i = 0; i < barCount; i++) {
      seed = (seed * 16807) % 2147483647;
      const normalized = seed / 2147483647;
      // Create a natural waveform shape
      const position = i / barCount;
      const envelope =
        Math.sin(position * Math.PI) * 0.6 +
        Math.sin(position * Math.PI * 3) * 0.2 +
        normalized * 0.2;
      heights.push(Math.max(0.15, Math.min(1, envelope)));
    }
    return heights;
  }, [barCount]);

  return (
    <div className="flex items-center gap-[2px] w-full" style={{ height }}>
      {barHeights.map((h, i) => {
        const barProgress = (i / barCount) * 100;
        const isPlayed = barProgress < progress;
        return (
          <div
            key={i}
            className="flex-1 rounded-full transition-all duration-75"
            style={{
              height: `${h * 100}%`,
              backgroundColor: isPlayed ? color : `${color}30`,
              opacity: isPlayed ? 1 : 0.4,
              transform:
                animated && isPlaying
                  ? `scaleY(${1 + Math.sin(Date.now() / 300 + i * 0.5) * 0.15})`
                  : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
