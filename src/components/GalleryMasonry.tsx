"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

// src/components/GalleryMasonry.tsx
export type Pic = {
  src: string;
  alt: string;
  category: "tous" | "flash" | "grosse pièces" | "autre";
  width: number;
  height: number;
};

export default function GalleryMasonry({ pics }: { pics: Pic[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <div className="mt-6 columns-2 sm:columns-3 [column-gap:2px]">
        {pics.map((it) => (
          <figure
            key={it.src}
            className="relative mb-[2px] break-inside-avoid overflow-hidden cursor-pointer"
            style={{ height: it.height }}
            onClick={() => setOpen(it.src)}
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 33vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>

      <Lightbox src={open} alt="Tatouage" onClose={() => setOpen(null)} />
    </>
  );
}
