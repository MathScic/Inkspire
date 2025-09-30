// src/app/components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true); // vrai = sur la bannière
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return; // pas de gestion du scroll si ce n'est pas la Home

    const onScroll = () => {
      const threshold = Math.max(window.innerHeight * 0.75, 300); // ~fin du hero
      setOverHero(window.scrollY < threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Définir la classe du header
  const barClass = isHome
    ? overHero
      ? "bg-transparent"
      : "bg-black/75 backdrop-blur supports-[backdrop-filter]:bg-black/60"
    : "bg-black/75 backdrop-blur supports-[backdrop-filter]:bg-black/60";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-300 ${barClass}`}
    >
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Inkspire-logo-white.png"
              alt="Inkspire"
              width={75}
              height={60}
              priority
            />
          </Link>

          <div className="hidden items-center gap-12 md:flex">
            <Link
              href="/galerie"
              className=" font-semibold text-white hover:text-ink-gold"
            >
              Galerie
            </Link>
            <Link
              href="/studio"
              className=" font-semibold text-white hover:text-ink-gold"
            >
              Studio
            </Link>
            <Link
              href="/booking"
              className="rounded-xl bg-ink-gold px-5 py-2 text-base font-bold text-black hover:opacity-95"
            >
              Prendre rendez-vous
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? (
              <X size={32} strokeWidth={2.5} />
            ) : (
              <Menu size={32} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-xl bg-black/80 p-3 backdrop-blur md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/galerie"
                className="py-2 text-white hover:text-ink-gold"
                onClick={() => setOpen(false)}
              >
                Galerie
              </Link>
              <Link
                href="/studio"
                className="py-2 text-white hover:text-ink-gold"
                onClick={() => setOpen(false)}
              >
                Studio
              </Link>
              <Link
                href="/booking"
                className="rounded-xl bg-ink-gold px-4 py-2 text-sm font-bold text-black hover:opacity-95"
                onClick={() => setOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
