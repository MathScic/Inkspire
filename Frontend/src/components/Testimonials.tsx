"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./RevealAnimation";

type Testimonial = {
  name: string;
  rating: number; // 1..5
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Julie M.",
    rating: 5,
    text: "Très à l’écoute, ligne fine impeccable. Je recommande !",
  },
  {
    name: "Thomas R.",
    rating: 4,
    text: "Beau travail et hygiène nickel. Le rendu est fidèle au croquis.",
  },
  {
    name: "Ismaël K.",
    rating: 5,
    text: "Pro, rassurant, résultat super propre. Merci !",
  },
  {
    name: "Léa P.",
    rating: 5,
    text: "Doux, précis, et un style moderne que j’adore.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto défilement toutes les 5s
  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const goTo = (i: number) =>
    setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const t = TESTIMONIALS[index];

  return (
    <Reveal from="right">
      <section className="bg-white py-16" aria-labelledby="avis-clients-title">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-6">
            <h2
              id="avis-clients-title"
              className="font-heading text-2xl md:text-3xl font-bold text-ink-black"
            >
              Avis clients (fictifs)
            </h2>
            <div className="flex items-center gap-2">
              <button
                aria-label="Avis précédent"
                onClick={prev}
                className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                ←
              </button>
              <button
                aria-label="Avis suivant"
                onClick={next}
                className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl bg-gray-50 p-6 md:p-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-live="polite"
          >
            {/* Slide actif (fondu) */}
            <figure
              key={index}
              className="transition-opacity duration-500 ease-in-out opacity-100"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-3 text-lg md:text-xl text-gray-800 leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 font-medium text-gray-900">
                — {t.name}
              </figcaption>
            </figure>

            {/* Indicateurs */}
            <div className="mt-6 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Aller à l’avis ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index
                      ? "w-4 bg-ink-gold"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Barre de progression (5s) */}
            <div className="mt-4 h-1 w-full rounded bg-gray-200 overflow-hidden">
              <div
                key={index}
                className="h-full bg-ink-gold"
                style={{
                  animation: paused ? undefined : "fillbar 5s linear forwards",
                }}
              />
            </div>
          </div>
        </div>

        {/* Animation CSS inline */}
        <style jsx>{`
          @keyframes fillbar {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>
      </section>
    </Reveal>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center" aria-label={`${rating} sur 5 étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-ink-gold" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.379-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}.0</span>
    </div>
  );
}
