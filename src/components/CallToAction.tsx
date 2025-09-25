"use client";

import Link from "next/link";
import Reveal from "./RevealAnimation";

export default function CallToAction() {
  return (
    <section className="bg-ink-lighgrey py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal from="left">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-black">
            Prêt à réserver votre projet ?
          </h2>
          <p className="mt-3 text-lg text-black/80">
            Contactez-moi dès aujourd'hui et donnons vie à vos idées.
          </p>
          <div className="mt-6">
            <Link
              href="/booking"
              className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-blac/90 transition"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
