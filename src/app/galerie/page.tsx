"use client";

import GalleryFilter from "@/components/GalleryFilter";
import GalleryMasonry from "@/components/GalleryMasonry";
import Reveal from "@/components/RevealAnimation";
import { useMemo, useState } from "react";
import data from "../../data/gallery.json";

const CATS = ["tous", "flash", "grosse pièces", "autre"] as const;

export default function GaleriePage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("tous");
  const pics = data as Pic[];

  const filtered = useMemo(
    () => (cat === "tous" ? pics : pics.filter((p) => p.category === cat)),
    [cat, pics]
  );

  return (
    <section className="bg-white py-14 mt-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal from="left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-ink-black">
            Galerie
          </h1>
          <p className="mt-2 text-gray-600">
            Parcourez mes dernières réalisation
          </p>
        </Reveal>

        <Reveal from="bottom">
          <div className="mt-6">
            <GalleryFilter
              value={cat}
              onChange={(v) => setCat(v as any)}
              items={[...CATS]}
            />
            <GalleryMasonry pics={filtered} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
