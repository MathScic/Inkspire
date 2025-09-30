import { NextResponse } from "next/server";

const BASE = "https://ton-domaine.fr"; // ← remplace

const routes = [
  { loc: "/", priority: 1.0 },
  { loc: "/galerie", priority: 0.9 },
  { loc: "/booking", priority: 0.9 },
  { loc: "/studio", priority: 0.8 },
];

export function GET() {
  const now = new Date().toISOString();
  const urls = routes
    .map(
      (r) => `
    <url>
      <loc>${BASE}${r.loc}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${r.priority}</priority>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
