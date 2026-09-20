import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClariVolt — La performance de votre parc photovoltaïque",
  description:
    "Les pertes silencieuses — salissure, dérive, onduleur sous-performant — ne déclenchent aucune alarme. ClariVolt les rend visibles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface">
        {children}
        {/* Mesure d'audience sans cookie : le visiteur est identifié
            par un hash de la requête, jeté au bout de 24 h. */}
        <Analytics />
      </body>
    </html>
  );
}
