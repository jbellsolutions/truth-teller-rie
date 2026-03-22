import { SOCIAL_LINKS } from "@/data/tracks";

const FOOTER_LINKS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "X / Twitter", href: SOCIAL_LINKS.twitter },
  { label: "Spotify", href: SOCIAL_LINKS.spotify },
  { label: "Apple Music", href: SOCIAL_LINKS.appleMusic },
  { label: "SoundCloud", href: SOCIAL_LINKS.soundCloud },
];

export function FooterSection() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-xl text-primary mb-1">Truth Teller Rie</div>
            <div className="text-xs text-muted">
              Trap Soul &middot; Hip-Hop &middot; Truth
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-muted">
          &copy; {new Date().getFullYear()} Truth Teller Rie. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
