"use client";

import Image from "next/image";
import { TRACKS } from "@/data/tracks";
import { TrackList } from "@/components/audio/TrackList";
import { Disc3 } from "lucide-react";

export function MusicSection() {
  return (
    <section id="music" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Disc3 size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Music
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-2">The catalog</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          25+ tracks of Trap Soul and Hip-Hop. Click to play — the music speaks for itself.
        </p>

        {/* Track list */}
        <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-subtle)] p-2 md:p-4">
          <TrackList tracks={TRACKS} />
        </div>

        {/* Album cards with real images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {[
            { title: "The Broadcast", year: 2026, image: "/images/album-cover.jpg", tracks: 4 },
            { title: "Classics", year: "2016-2019", image: "/images/photo-2.jpg", tracks: 2 },
            { title: "Singles", year: "2022-2025", image: "/images/photo-3.jpg", tracks: 3 },
          ].map((album) => (
            <div
              key={album.title}
              className="group bg-[var(--surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-semibold text-sm text-white">{album.title}</div>
                  <div className="text-xs text-white/70">
                    {album.year} &middot; {album.tracks} tracks
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
