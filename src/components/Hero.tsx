import Link from "next/link";
import Reveal from "../components/RevealAnimation";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Banner.png')" }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-40 hero-overlay" />

      {/* Contenu centré */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-center scale-125">
        <div className="max-w-2xl">
          {/* Titre → gauche */}
          <Reveal from="left">
            <h1
              id="hero-title"
              className="font-heading text-white text-4xl md:text-6xl font-semibold leading-tight"
            >
              L&apos;art du tatouage <br /> moderne
            </h1>
          </Reveal>

          {/* Sous-titre → droite */}
          <Reveal from="right" delay={0.1}>
            <p className="mt-4 text-base md:text-lg font-semibold text-white/90">
              Inkspire
            </p>
          </Reveal>

          {/* Boutons → droite */}
          <Reveal from="right" delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/booking"
                className="rounded-xl bg-black/80 px-5 py-2 text-base md:text-lg text-white ring-1 ring-white/10 hover:bg-black"
              >
                Réserver
              </Link>
              <Link
                href="/galerie"
                className="rounded-xl bg-ink-gold px-5 py-2 text-base md:text-lg text-black hover:opacity-95"
              >
                Voir la galerie
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
