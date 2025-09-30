import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inkspire — L’art du tatouage moderne",
  description: "Studio de tatouage contemporain mêlant art et précision.",
  icons: {
    icon: "/images/Inkspire-logo-white.png", // ton icône principal
    shortcut: "/Inkspire-logo-white.pn",
    apple: "/images/Inkspire-logo-white.png", // optionnel : pour iPhone/iPad
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
