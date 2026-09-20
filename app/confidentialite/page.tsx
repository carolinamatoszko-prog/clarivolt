import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Wordmark } from "@/components/Wordmark";
import { privacy, privacyContactEmail } from "@/content/privacy";

/**
 * Rend l'adresse de contact cliquable partout où elle apparaît.
 * Exercer un droit RGPD ne doit pas obliger à recopier une adresse
 * à la main.
 */
function withMailtoLink(text: string) {
  const parts = text.split(privacyContactEmail);
  if (parts.length === 1) return text;

  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a
            key={i}
            href={`mailto:${privacyContactEmail}`}
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            {privacyContactEmail}
          </a>,
          part,
        ],
  );
}

export const metadata: Metadata = {
  title: `${privacy.title} — ClariVolt`,
  description:
    "Comment les données du formulaire d'inscription ClariVolt sont traitées.",
  robots: { index: false },
};

export default function Confidentialite() {
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
        <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">{privacy.title}</h1>
          <p className="mt-2 text-sm text-ink-500">{privacy.updated}</p>
          <p className="mt-6 text-lg text-ink-700">{privacy.intro}</p>

          <div className="mt-10 space-y-8">
            {privacy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-semibold text-ink-900">
                  {section.heading}
                </h2>
                <p className="mt-2 text-ink-700">
                  {withMailtoLink(section.body)}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12">
            <Link
              href="/"
              className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              {privacy.back}
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
