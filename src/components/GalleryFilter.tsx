"use client";
import { CATS, type Cat } from "@/lib/categories";

type Props = {
  value: Cat;
  onChange: (v: Cat) => void;
  items?: readonly Cat[];
};

export default function GalleryFilter({
  value,
  onChange,
  items = CATS,
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
