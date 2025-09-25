"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/RevealAnimation";
import items from "@/data/flash.json";

type Item = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  height: number; // px
};

export default function FlashGrid() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink-black">
            Dernières pièces & flash
          </h2>
          <Link href="/galerie" className="text-ink-gold hover:opacity-80">
            Voir la galerie →
          </Link>
        </div>

        {/* Masonry : 2 colonnes sur mobile, 3 dès sm ; gap horizontal ≈ 2px */}
        <div className="mt-8 columns-2 sm:columns-3 [column-gap:2px]">
          {(items as Item[]).map((it, i) => (
            <Reveal
              key={it.src}
              from={i % 2 === 0 ? "left" : "bottom"}
              delay={i * 0.05}
            >
              {/* Tuile : hauteur précise en px ; gap vertical ≈ 2px ; empêche la casse entre colonnes */}
              <figure
                className="relative mb-[2px] break-inside-avoid overflow-hidden rounded-xl"
                style={{ height: `${it.height}px` }}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover"
                  priority={i < 3}
                />
                {/* Légendes facultatives : masquées par défaut */}
                {false && (it.title || it.description) && (
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-3 py-2 text-sm">
                    <span className="font-medium">{it.title}</span>
                    {it.description ? (
                      <span className="opacity-80"> — {it.description}</span>
                    ) : null}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/booking"
            className="rounded-xl bg-ink-gold px-5 py-2 font-medium text-black hover:opacity-95"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
