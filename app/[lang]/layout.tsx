import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales, type Locale } from "@/content/locales";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Prérend /fr et /en au build : aucune langue n'est rendue à la demande. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return {
    // Sans base, Next écrit des hreflang relatifs ; les moteurs
    // attendent des URL absolues. Vercel fournit le domaine de
    // production, avec repli sur le domaine connu en local.
    metadataBase: new URL(
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://clarivolt.vercel.app",
    ),
    title: dict.meta.title,
    description: dict.meta.description,
    // hreflang : indique aux moteurs que les deux pages sont la même
    // page en deux langues, et non du contenu dupliqué.
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`]),
      ) as Record<Locale, string>,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    // La langue du document suit le segment d'URL : lecteurs d'écran
    // et moteurs de recherche s'appuient dessus.
    <html
      lang={lang}
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
