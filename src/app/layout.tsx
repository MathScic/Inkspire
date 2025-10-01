import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inkspire — L’art du tatouage moderne",
  description: "Studio de tatouage contemporain mêlant art et précision.",
  icons: {
    icon: "/images/Inkspire-logo-white.png",
    shortcut: "/images/Inkspire-logo-white.png",
    apple: "/images/Inkspire-logo-white.png",
  },
  openGraph: {
    title: "Inkspire — L’art du tatouage moderne",
    description: "Studio de tatouage contemporain mêlant art et précision.",
    // url: "https://ton-domaine.fr", // ← remplace par ton domaine
    siteName: "Inkspire",
    images: [
      {
        url: "/images/Inkspire-logo-white.png", // ← mets un vrai fichier existant dans /public/images
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
