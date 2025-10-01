"use client";

import Image from "next/image";
import Reveal from "./RevealAnimation";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className="relative bg-white py-16 text-ink-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:gap-8">
        {/* Images */}
        <Reveal from="left" className=" md:w-1/2">
          <Image
            src="/images/Tatoueur.png"
            alt="Studio Inkspire"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-lg"
          />
        </Reveal>

        {/* Text */}
        <Reveal from="right" className="w-full md:w-1/2">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            L&apos;ésprit Inkspire
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-black/80">
            Chez Inkspire, chaque tatouage est pensé comme une œuvre unique.
            Nous privilégions un style moderne et épuré, tout en respectant vos
            inspirations et vos envies.
          </p>
          <p className="mt-2 text-base leading-relaxed text-ink-black/80">
            Notre objectif : transformer vos idées en créations durables, dans
            un cadre professionnel et accueillant.
          </p>
          <Link
            href="/studio"
            className="mt-6 inline-block rounded-xl bg-ink-gold px-5 py-2 font-medium text-black hover:opacity-95"
          >
            Découvrir le studio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
