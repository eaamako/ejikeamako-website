"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type ImageGridProps = {
  images: GalleryImage[];
  caption?: string;
};

export function ImageGrid({ images, caption }: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  if (images.length === 0) {
    return (
      <p className="text-[0.9em] italic" style={{ color: "var(--mm-muted)" }}>
        {caption || "No images yet. Coming soon!"}
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm transition-transform hover:scale-[1.02]"
            style={{ background: "var(--mm-table-stripe)" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-opacity group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10" />
          </button>
        ))}
      </div>
      
      {caption && (
        <p className="mt-2 text-[0.9em] italic" style={{ color: "var(--mm-muted)" }}>
          {caption}
        </p>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-md bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-md bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next button */}
          {lightboxIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-md bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={images[lightboxIndex].width || 1200}
              height={images[lightboxIndex].height || 900}
              className="max-h-[90vh] w-auto object-contain"
              priority
            />
            
            {/* Image caption */}
            <div className="mt-4 text-center text-white">
              <p className="text-sm">{images[lightboxIndex].alt}</p>
              <p className="mt-1 text-xs opacity-70">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
