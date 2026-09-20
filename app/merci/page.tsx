import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Wordmark } from "@/components/Wordmark";
import { thanks } from "@/content/lp";

export const metadata: Metadata = {
  title: `${thanks.title} — ClariVolt`,
  description: "Votre inscription à la liste d'accès anticipé est enregistrée.",
  // Pas d'intérêt à faire remonter cette page dans les moteurs, et
  // une visite venue d'une recherche fausserait le taux de conversion.
  robots: { index: false },
};

export default function Merci() {
  return (
    <>
      <header className="border-b border-ink-200 bg-surface">
        <div className="mx-auto flex w-full max-w-3xl items-center px-4 py-4 sm:px-6">
          <Link href="/" aria-label="ClariVolt — accueil">
            <Wordmark />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <hr className="mb-8 h-0.5 w-16 rounded-full border-0 bg-accent-500" />

          <h1 className="text-3xl font-bold sm:text-5xl">{thanks.title}</h1>

          <p className="mt-6 max-w-2xl text-lg text-ink-700">{thanks.lead}</p>

          <p className="mt-4 max-w-2xl text-ink-700">{thanks.next}</p>

          <p className="mt-10">
            <Link
              href="/"
              className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              {thanks.back}
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
