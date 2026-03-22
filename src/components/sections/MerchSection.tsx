"use client";

import Image from "next/image";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/tracks";

export function MerchSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <ShoppingBag size={20} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Merch
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-8">Represent</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Merch item */}
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden group hover:border-primary/30 transition-all">
            <div className="aspect-[4/3] relative bg-[var(--surface-elevated)] overflow-hidden">
              <Image
                src="/images/photo-4.jpg"
                alt="Truth Tellers Hoodie"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl mb-2">Truth Tellers Hoodie</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Premium quality. Represent the movement.
              </p>
              <a
                href={SOCIAL_LINKS.merchStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-[var(--background)] rounded-full font-semibold text-sm hover:brightness-110 transition-all"
              >
                Shop Now <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Coming soon placeholder */}
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <ShoppingBag size={48} className="text-muted/30 mx-auto mb-4" />
              <h3 className="font-display text-xl mb-2">More coming soon</h3>
              <p className="text-sm text-muted-foreground">
                New merch drops with every release. Join the newsletter to get first access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
