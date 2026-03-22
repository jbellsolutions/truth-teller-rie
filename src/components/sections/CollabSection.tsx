"use client";

import { Handshake, ArrowRight, Music, Mic, PenTool, Video } from "lucide-react";

const PROJECTS = [
  {
    title: "Production Collab — R&B EP",
    type: "Production",
    icon: Music,
    description: "Looking for producers who work in soulful, sample-heavy R&B. 6-track EP planned for Q3.",
    status: "Open",
    applicants: 12,
  },
  {
    title: "Feature Verses — The Broadcast Deluxe",
    type: "Vocals",
    icon: Mic,
    description: "Need 2-3 feature artists for deluxe edition. Conscious hip-hop, storytelling focus.",
    status: "Open",
    applicants: 28,
  },
  {
    title: "Album Art & Visual Identity",
    type: "Design",
    icon: PenTool,
    description: "Seeking a visual artist to design album art and merchandise for upcoming releases.",
    status: "Filled",
    applicants: 8,
  },
  {
    title: "Music Video — \"Frequency\"",
    type: "Video",
    icon: Video,
    description: "Director and cinematographer needed for the lead single music video. Budget approved.",
    status: "Open",
    applicants: 15,
  },
];

export function CollabSection() {
  return (
    <section id="collab" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Handshake size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Collaborate
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-2">Build with us</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          Open projects looking for collaborators. If you make something real, there&apos;s a place
          for you here.
        </p>

        <div className="space-y-4">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            const isOpen = project.status === "Open";
            return (
              <div
                key={project.title}
                className="bg-[var(--surface)] rounded-xl border border-[var(--border-subtle)] p-6 hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-elevated)] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-semibold text-sm">{project.title}</h3>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isOpen
                            ? "text-[var(--success)] bg-[var(--success)]/10"
                            : "text-muted bg-[var(--surface-elevated)]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted tabular-nums">
                        {project.applicants} interested
                      </span>
                      {isOpen && (
                        <span className="text-xs text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Express Interest <ArrowRight size={12} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
