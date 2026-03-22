"use client";

import { YOUTUBE_VIDEOS } from "@/data/tracks";
import { Video } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Video size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Videos
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-8">Watch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {YOUTUBE_VIDEOS.map((video, i) => (
            <div
              key={video.id}
              className={`rounded-xl overflow-hidden border border-[var(--border-subtle)] ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-video" : "aspect-video"}`}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
