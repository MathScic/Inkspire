"use client";

import CallToAction from "@/components/CallToAction";
import Reveal from "@/components/RevealAnimation";
import StudioIntro from "@/components/StudioIntro";
import StudioValues from "@/components/StudioValue";

export default function StudioPage() {
  return (
    <section className="bg-white py-14 mt-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal from="left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-ink-black">
            Le studio
          </h1>
          <p>
            Bienvenue dans l&apos;univers Inkspire : l&apos;atelier met
            l&apos;accent sur l&apos;hygiène, le style et l&apos;accompagnement.
          </p>

          <p className="mt-2 text-gray-600">
            Un espace pensé pour le confort, l&apos;hygiène et la créativité
          </p>
        </Reveal>

        <div className="mt-10">
          <StudioIntro />
        </div>

        <div className="mt-12">
          <StudioValues />
        </div>

        <div className="mt-14">
          <CallToAction />
        </div>
      </div>
    </section>
  );
}
