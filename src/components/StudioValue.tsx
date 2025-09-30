"use client";
import Reveal from "@/components/RevealAnimation";
import { ShieldCheck, Sparkles, PenTool } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Hygiène irréprochable",
    text: "Matériel stérile, surface désinfectée, protocole strict à chaque prestation.",
  },
  {
    icon: PenTool,
    title: "Création soignée",
    text: "Du croquis au tracé, une recherche de précision et de lisibilité dans le temps.",
  },
  {
    icon: Sparkles,
    title: "Style moderne",
    text: "Fine line, floral, géométrique… un rendu net et contemporain.",
  },
];

export default function StudioValues() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, text }, i) => (
        <Reveal
          key={title}
          from={i % 2 === 0 ? "bottom" : "left"}
          delay={i * 0.05}
        >
          <div className="h-full rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
            <Icon className="h-6 w-6 text-ink-gold" />
            <h3 className="mt-3 font-semibold text-ink-black">{title}</h3>
            <p className="mt-1 text-gray-700">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
