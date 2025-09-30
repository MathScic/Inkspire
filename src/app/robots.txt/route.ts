import { NextResponse } from "next/server";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://ton-domaine.fr/sitemap.xml", // ← remplace le domaine
  ].join("\n");

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
