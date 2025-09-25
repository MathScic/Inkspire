"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/RevealAnimation";

type Item = {
  src: string;
  alt: string;
  // hauteur visuelle par tuile (différente pour chacune)
  sizeClass: string; // ex: "h-64 md:h-80"
};

const items: Item[] = [
  {
    src: "/images/Tatoo-1.png",
    alt: "Tatouage fine line",
    sizeClass: "h-50 sm:h-50 md:h-50",
  },
  {
    src: "/images/Tatoo-2.png",
    alt: "Tatouage géométrique",
    sizeClass: "h-48 sm:h-60 md:h-120",
  },
  {
    src: "/images/Tatoo-1.png",
    alt: "Tatouage floral",
    sizeClass: "h-80 sm:h-96 md:h-[28rem]",
  },
  {
    src: "/images/Tatoo-2.png",
    alt: "Tatouage old school",
    sizeClass: "h-56 sm:h-64 md:h-82",
  },
  {
    src: "/images/Tatoo-1.png",
    alt: "Tatouage minimaliste",
    sizeClass: "h-72 sm:h-80 md:h-96",
  },
  {
    src: "/images/Tatoo-2.png",
    alt: "Tatouage ligne continue",
    sizeClass: "h-60 sm:h-60 md:h-64",
  },
];

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

        {/* Grille responsive. Chaque tuile a une hauteur différente via sizeClass */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {items.map((it, i) => (
            <Reveal
              key={it.src}
              from={i % 3 === 0 ? "left" : "bottom"}
              delay={i * 0.03}
            >
              {/* Tuile en flux normal, hauteur différente par item */}
              <div
                className={`relative overflow-hidden rounded-xl ${it.sizeClass}`}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  // on remplit la tuile, sans sortir du flux (pas de height inline)
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover"
                  priority={i < 3}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
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
