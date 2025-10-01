"use client";
import { useEffect } from "react";

type Props = {
  src: string | null;
  alt?: string;
  onClose: () => void;
};

export default function Lightbox({ src, alt, onClose }: Props) {
  // Fermer avec "Escape"
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt || ""}
        className="max-h-[90%] max-w-[90%] object-contain rounded-lg shadow-lg"
      />
    </div>
  );
}
