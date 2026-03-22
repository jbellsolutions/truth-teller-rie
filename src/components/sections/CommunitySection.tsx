"use client";

import { DEMO_FANS, STATS } from "@/data/tracks";
import { Users, Trophy, Flame, Star, Zap, Award } from "lucide-react";

const BADGE_ICONS: Record<string, typeof Trophy> = {
  Superfan: Star,
  "First 100": Zap,
  "30-Day Streak": Flame,
  "60-Day Streak": Flame,
  "Day One": Award,
  "Collab Crew": Users,
  "Top Listener": Trophy,
  Regular: Award,
  Listener: Users,
  "7-Day Streak": Flame,
  "14-Day Streak": Flame,
};

function getBadgeColor(badge: string) {
  if (badge.includes("Streak")) return "var(--success)";
  if (badge.includes("First") || badge.includes("Top")) return "var(--accent)";
  if (badge === "Superfan") return "var(--primary)";
  return "var(--muted)";
}

export function CommunitySection() {
  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Users size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Community
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-2">The people who listen</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          Not just listeners — a community. Earn badges, build streaks, and be recognized for showing up.
        </p>

        {/* Community stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Active Fans", value: STATS.subscribers.toLocaleString(), icon: Users },
            {
              label: "Avg Streak",
              value: `${Math.round(DEMO_FANS.reduce((a, f) => a + f.streak, 0) / DEMO_FANS.length)} days`,
              icon: Flame,
            },
            {
              label: "Badges Earned",
              value: DEMO_FANS.reduce((a, f) => a + f.badges.length, 0).toString(),
              icon: Trophy,
            },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-[var(--surface)] rounded-xl border border-[var(--border-subtle)] p-4 md:p-6 text-center"
            >
              <Icon size={20} className="text-primary mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold tabular-nums">{value}</div>
              <div className="text-xs text-muted uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* Fan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DEMO_FANS.map((fan) => (
            <div
              key={fan.name}
              className="bg-[var(--surface)] rounded-xl border border-[var(--border-subtle)] p-5 hover:border-primary/30 transition-all"
            >
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--primary), #8B6B4E)`,
                    color: "var(--background)",
                  }}
                >
                  {fan.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm">{fan.name}</div>
                  <div className="text-xs text-primary font-medium">{fan.level}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mb-4 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="text-lg font-bold tabular-nums">{fan.totalPlays}</div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">Plays</div>
                </div>
                <div>
                  <div className="text-lg font-bold tabular-nums">{fan.streak}</div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">Streak</div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {fan.badges.map((badge) => {
                  const Icon = BADGE_ICONS[badge] || Award;
                  const color = getBadgeColor(badge);
                  return (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                      style={{
                        backgroundColor: `${color}20`,
                        color,
                      }}
                    >
                      <Icon size={10} />
                      {badge}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
