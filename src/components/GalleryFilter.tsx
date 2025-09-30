"use client";

type Props = { value: string; onChange: (v: string) => void; items?: string[] };
const DEFAULT = ["tous", "flash", "grosse", "autre"];

export default function GalleryFilter({
  value,
  onChange,
  items = DEFAULT,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => {
        const active = value === c;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition
              ${
                active
                  ? "bg-ink-gold text-black"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            aria-pressed={active}
          >
            {c[0].toUpperCase() + c.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
