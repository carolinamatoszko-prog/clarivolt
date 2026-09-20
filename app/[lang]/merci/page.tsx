import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/content/locales";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/merci">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: `${dict.thanks.title} — ClariVolt`,
    // Pas d'intérêt à faire remonter cette page dans les moteurs, et
    // une visite venue d'une recherche fausserait le taux de conversion.
    robots: { index: false },
  };
}

export default async function Merci({ params }: PageProps<"/[lang]/merci">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const thanks = dict.thanks;

  return (
    <>
      <SiteHeader lang={lang} />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <hr className="mb-8 h-0.5 w-16 rounded-full border-0 bg-accent-500" />

          <h1 className="text-3xl font-bold sm:text-5xl">{thanks.title}</h1>

          <p className="mt-6 max-w-2xl text-lg text-ink-700">{thanks.lead}</p>

          <p className="mt-4 max-w-2xl text-ink-700">{thanks.next}</p>

          <p className="mt-10">
            <Link
              href={`/${lang}`}
              className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              {thanks.back}
            </Link>
          </p>
        </div>
      </main>

      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
