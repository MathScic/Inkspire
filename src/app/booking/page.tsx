"use client";
import { useState } from "react";
import Reveal from "@/components/RevealAnimation";

type Status = "idle" | "sending" | "ok" | "error";

export default function BookingPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = e.currentTarget;

    // payload normal
    const payload = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      phone:
        (f.elements.namedItem("phone") as HTMLInputElement).value || undefined,
      project: (f.elements.namedItem("project") as HTMLSelectElement).value as
        | "Flash"
        | "Grosse pièce"
        | "Autre",
      date:
        (f.elements.namedItem("date") as HTMLInputElement).value || undefined,
      message:
        (f.elements.namedItem("message") as HTMLTextAreaElement).value ||
        undefined,
      // 👇 honeypot : si rempli = bot
      website:
        (f.elements.namedItem("website") as HTMLInputElement)?.value || "",
    };

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "ok" : "error");
    if (res.ok) f.reset();
  }

  return (
    <section className="py-16 mt-12">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal from="left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-ink-black">
            Prendre rendez-vous
          </h1>
          <p className="mt-3 text-gray-700">Je reviens vers vous rapidement.</p>
        </Reveal>

        <Reveal from="bottom">
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            {/* champs visibles */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" label="Nom complet" required />
              <Input type="email" name="email" label="Email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="tel" name="phone" label="Téléphone (optionnel)" />
              <Select
                name="project"
                label="Type de projet"
                options={["Flash", "Grosse pièce", "Autre"]}
              />
            </div>
            <Input type="date" name="date" label="Date souhaitée (optionnel)" />
            <Textarea name="message" label="Message" rows={5} />

            {/* 👇 HONEYPOT (caché visuellement, présent pour bots) */}
            <label className="sr-only" aria-hidden="true">
              Votre site web (laissez vide)
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                className="hidden"
              />
            </label>

            <button
              disabled={status === "sending"}
              className="rounded-md bg-ink-gold px-5 py-2 font-medium text-black hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Envoi…" : "Envoyer la demande"}
            </button>

            {status === "ok" && (
              <Banner kind="success" text="✅ Demande envoyée, merci !" />
            )}
            {status === "error" && (
              <Banner
                kind="error"
                text="❌ Erreur d’envoi. Réessayez dans un instant."
              />
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, className = "", ...rest } = props;
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <input
        {...rest}
        className={`mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-ink-gold focus:ring-ink-gold ${className}`}
      />
    </label>
  );
}
function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }
) {
  const { label, className = "", ...rest } = props;
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <textarea
        {...rest}
        className={`mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-ink-gold focus:ring-ink-gold ${className}`}
      />
    </label>
  );
}
function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <select
        name={name}
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-ink-gold focus:ring-ink-gold"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
function Banner({ kind, text }: { kind: "success" | "error"; text: string }) {
  const cls =
    kind === "success"
      ? "bg-green-50 text-green-800 ring-1 ring-green-200"
      : "bg-red-50 text-red-800 ring-1 ring-red-200";
  return <p className={`rounded-md px-3 py-2 ${cls}`}>{text}</p>;
}
