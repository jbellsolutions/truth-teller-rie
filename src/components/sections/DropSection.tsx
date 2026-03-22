"use client";

import { useEffect, useState } from "react";
import { Clock, Bell, Flame, Disc3 } from "lucide-react";

function getTimeLeft() {
  // Drop is always "2 days, 14 hours" from now for demo
  const target = new Date();
  target.setDate(target.getDate() + 2);
  target.setHours(target.getHours() + 14);
  return target.getTime();
}

export function DropSection() {
  const [targetTime] = useState(getTimeLeft);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, mins: 37, secs: 9 });
  const [notifyClicked, setNotifyClicked] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = targetTime - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <section id="drops" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Clock size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Upcoming Drop
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-8">Something&apos;s coming</h2>

        {/* Drop card */}
        <div className="relative bg-[var(--surface)] rounded-2xl border border-primary/30 p-8 md:p-12 overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Flame size={16} className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                New Release
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-4xl mb-3">Unfiltered, Vol. 2</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              7 new tracks. Unreleased collaborations. First 100 listeners earn a badge.
            </p>

            {/* Countdown */}
            <div className="flex gap-6 md:gap-10 mb-8">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.mins, label: "Mins" },
                { value: timeLeft.secs, label: "Secs" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold tabular-nums leading-none">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setNotifyClicked(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                notifyClicked
                  ? "bg-[var(--success)] text-white"
                  : "bg-primary text-[var(--background)] hover:brightness-110"
              }`}
            >
              <Bell size={16} />
              {notifyClicked ? "You'll be notified!" : "Notify Me When It Drops"}
            </button>
          </div>
        </div>

        {/* Past drops */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "The Broadcast",
              date: "Jan 15, 2026",
              badge: "Released",
              listeners: "2.1K first-day listeners",
            },
            {
              title: "Crown the Ground (Single)",
              date: "Oct 3, 2025",
              badge: "Released",
              listeners: "1.4K first-day listeners",
            },
          ].map((drop) => (
            <div
              key={drop.title}
              className="bg-[var(--surface)] rounded-xl border border-[var(--border-subtle)] p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--surface-elevated)] flex items-center justify-center text-muted">
                <Disc3 size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{drop.title}</div>
                <div className="text-xs text-muted">{drop.date} &middot; {drop.listeners}</div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--success)] bg-[var(--success)]/10 px-2 py-1 rounded-full">
                {drop.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
