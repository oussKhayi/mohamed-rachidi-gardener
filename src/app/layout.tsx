import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";

const description =
  "Mohammed Rachidi, jardinier auto-entrepreneur au Maroc. Entretien et création de jardins pour villas, résidences, hôtels, écoles et administrations. Devis gratuit, facture pour chaque intervention.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: `${site.name}, jardinier auto-entrepreneur au Maroc`,
  description,
  openGraph: {
    title: `${site.name}, services de jardinage`,
    description,
    locale: "fr_MA",
    type: "website",
    images: [{ url: "/brand/logo-full.png", width: 753, height: 247 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
