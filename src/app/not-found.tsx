import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-heading font-bold text-ink-black">
          Page introuvable
        </h1>
        <p className="mt-2 text-gray-600">
          Désolé, ce contenu n’existe pas (ou plus).
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-ink-gold px-5 py-2 font-medium text-black hover:opacity-90"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
