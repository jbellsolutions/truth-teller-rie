"use client";

import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/tracks";
import { Camera } from "lucide-react";
import { useState } from "react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Camera size={20} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Gallery
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Behind the scenes</h2>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((img, i) => {
              // Vary sizes for visual interest
              const isLarge = i === 0 || i === 4 || i === 7;
              return (
                <div
                  key={img.src}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    isLarge ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(img.src)}
                >
                  <div className={`relative ${isLarge ? "aspect-square" : "aspect-[4/3]"}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Truth Teller Rie"
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[90vh] rounded-lg"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
