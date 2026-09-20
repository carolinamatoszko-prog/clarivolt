import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Container } from "@/components/ui/Container";
import { AccentRule, PageShell, TextLink } from "@/components/ui";
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
    <PageShell
      header={<SiteHeader lang={lang} />}
      footer={<Footer dict={dict.footer} lang={lang} />}
    >
      <Container padding="wide">
        <AccentRule />

        <h1 className="text-3xl font-bold sm:text-5xl">{thanks.title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-ink-700">{thanks.lead}</p>

        <p className="mt-4 max-w-2xl text-ink-700">{thanks.next}</p>

        <p className="mt-10">
          <TextLink href={`/${lang}`}>{thanks.back}</TextLink>
        </p>
      </Container>
    </PageShell>
  );
}
