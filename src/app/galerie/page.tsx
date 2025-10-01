"use client";

import GalleryFilter from "@/components/GalleryFilter";
import GalleryMasonry from "@/components/GalleryMasonry";
import Reveal from "@/components/RevealAnimation";
import { useMemo, useState } from "react";
import data from "../../data/gallery.json";
import { CATS, type Cat } from "@/lib/categories"; // ← source unique

type Pic = {
  src: string;
  alt: string;
  category: Cat;
  w?: number;
  h?: number;
};

export default function GaleriePage() {
  const [cat, setCat] = useState<Cat>("tous");
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
            Parcourez mes dernières réalisations
          </p>
        </Reveal>

        <Reveal from="bottom">
          <div className="mt-6">
            <GalleryFilter value={cat} onChange={setCat} items={CATS} />
            <GalleryMasonry pics={filtered} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
