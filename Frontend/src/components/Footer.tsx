import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Clock, Music2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Bloc 1 — Marque */}
          <div>
            <div className="font-heading text-xl font-semibold">Inkspire</div>
            <p className="mt-3 text-sm text-white/70">
              Studio de tatouage moderne — chaque création est pensée comme une
              œuvre unique, avec précision et sens du détail.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://instagram.com/inkspire_tattoo"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@inkspire_tattoo"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Music2 size={20} />
              </a>
              <a
                href="https://facebook.com/inkspiretattoo"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@inkspire.studio"
                aria-label="Email"
                className="transition-opacity hover:opacity-80"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Bloc 2 — Infos pratiques */}
          <div>
            <div className="mb-3 font-semibold">Infos pratiques</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>12 rue Exemple, 00000 Ville</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <span>Mar–Sam : 10h–19h · Lun/Dim sur réservation</span>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="rounded-xl bg-ink-gold px-3 py-2 text-black hover:opacity-95 inline-block"
                >
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 3 — Navigation */}
          <div className="md:justify-self-end">
            <div className="mb-3 font-semibold">Navigation</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-ink-gold">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-ink-gold">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-ink-gold">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-ink-gold">
                  Réserver
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/mentions-legales"
                  className="text-xs text-white/60 hover:text-ink-gold"
                >
                  Mentions légales
                </Link>
                {" · "}
                <Link
                  href="/confidentialite"
                  className="text-xs text-white/60 hover:text-ink-gold"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {year} Inkspire — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
