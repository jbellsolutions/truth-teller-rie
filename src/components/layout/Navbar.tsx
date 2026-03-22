"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Music", href: "#music" },
  { label: "Drops", href: "#drops" },
  { label: "Community", href: "#community" },
  { label: "Collab", href: "#collab" },
  { label: "Mission", href: "#mission" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-primary tracking-tight">
          Truth Teller Rie
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="text-sm font-semibold text-[var(--background)] bg-primary px-5 py-2 rounded-full hover:brightness-110 transition-all"
          >
            Join
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border-subtle)] px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base text-muted-foreground hover:text-foreground transition-colors border-b border-[var(--border-subtle)] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center text-sm font-semibold text-[var(--background)] bg-primary px-5 py-3 rounded-full"
          >
            Join the Circle
          </a>
        </div>
      )}
    </nav>
  );
}
