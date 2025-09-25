"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Reveal from "../components/RevealAnimation";

export default function InfosPratiques() {
  return (
    <section className="bg-white py-16" id="infos-pratiques">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink-black mb-8">
          Infos pratiques
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Texte avec reveal depuis la gauche */}
          <Reveal from="left">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-ink-gold shrink-0" />
                <p className="text-gray-800">
                  12 Rue de l’Art
                  <br />
                  50400 Granville, France
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-ink-gold shrink-0" />
                <div>
                  <p className="text-gray-800">Lundi – Vendredi : 10h – 19h</p>
                  <p className="text-gray-800">Samedi : 11h – 17h</p>
                  <p className="text-gray-800">Dimanche : Fermé</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-ink-gold shrink-0" />
                <Link
                  href="tel:+33612345678"
                  className="text-gray-800 hover:text-ink-gold"
                >
                  +33 6 12 34 56 78
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-ink-gold shrink-0" />
                <Link
                  href="mailto:contact@tattoo.fr"
                  className="text-gray-800 hover:text-ink-gold"
                >
                  contact@tattoo.fr
                </Link>
              </div>

              <div className="flex gap-4 mt-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-700 hover:text-ink-gold"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-700 hover:text-ink-gold"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Map avec reveal depuis la droite */}
          <Reveal from="right">
            <div className="w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Localisation du studio à Granville"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.639739994624!2d-1.6016594235258453!3d48.83715097133125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e0e80d63bdb3b%3A0x40c14484fbcd0f0!2s50400%20Granville!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
