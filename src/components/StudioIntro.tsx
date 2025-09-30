"use client";

import Image from "next/image";
import Reveal from "./RevealAnimation";

export default function StudioIntro() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Reveal from="left">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink-black">
            Un lieu calme, propre, inspirant
          </h2>
          <p className="mt-3 txt-gray-700 leading-relaxed">
            Chez Inkspire, on prend le temps : comprendre votre idée, proposer
            des pistes créatives et réaliser un tracé net, durable, fidèle à
            votre style. Matériel stérile, encres de qualité, et une ambiance
            apaisée pour une expérience sereine.
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
            <li>Accompagnement avant / pendant / après</li>
            <li>Création originales & flashs exclusifs</li>
            <li>Prise de rendez-vous simple et transparente</li>
          </ul>
        </div>
      </Reveal>

      <Reveal from="right">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/Banner.jpg"
            alt="Intérieur studio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </Reveal>
    </div>
  );
}
