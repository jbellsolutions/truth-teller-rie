"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Track, TRACKS } from "@/data/tracks";

interface AudioState {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number; // 0-100
  currentTime: number;
  queue: Track[];
}

interface AudioContextType extends AudioState {
  play: (track: Track) => void;
  pause: () => void;
  resume: () => void;
  next: () => void;
  previous: () => void;
  seek: (progress: number) => void;
  addToQueue: (track: Track) => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AudioState>({
    currentTrack: null,
    isPlaying: false,
    progress: 0,
    currentTime: 0,
    queue: TRACKS,
  });

  const play = useCallback((track: Track) => {
    setState((s) => ({ ...s, currentTrack: track, isPlaying: true, progress: 0, currentTime: 0 }));
  }, []);

  const pause = useCallback(() => {
    setState((s) => ({ ...s, isPlaying: false }));
  }, []);

  const resume = useCallback(() => {
    setState((s) => ({ ...s, isPlaying: true }));
  }, []);

  const next = useCallback(() => {
    setState((s) => {
      if (!s.currentTrack) return s;
      const idx = s.queue.findIndex((t) => t.id === s.currentTrack!.id);
      const nextTrack = s.queue[(idx + 1) % s.queue.length];
      return { ...s, currentTrack: nextTrack, isPlaying: true, progress: 0, currentTime: 0 };
    });
  }, []);

  const previous = useCallback(() => {
    setState((s) => {
      if (!s.currentTrack) return s;
      const idx = s.queue.findIndex((t) => t.id === s.currentTrack!.id);
      const prevTrack = s.queue[(idx - 1 + s.queue.length) % s.queue.length];
      return { ...s, currentTrack: prevTrack, isPlaying: true, progress: 0, currentTime: 0 };
    });
  }, []);

  const seek = useCallback((progress: number) => {
    setState((s) => {
      if (!s.currentTrack) return s;
      const currentTime = (progress / 100) * s.currentTrack.durationSeconds;
      return { ...s, progress, currentTime };
    });
  }, []);

  const addToQueue = useCallback((track: Track) => {
    setState((s) => ({ ...s, queue: [...s.queue, track] }));
  }, []);

  return (
    <AudioCtx.Provider value={{ ...state, play, pause, resume, next, previous, seek, addToQueue }}>
      {children}
    </AudioCtx.Provider>
  );
}
