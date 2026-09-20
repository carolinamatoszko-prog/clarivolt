import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Container } from "@/components/ui/Container";
import { PageShell, TextLink, TextLinkExternal } from "@/components/ui";
import { privacyContactEmail } from "@/content/contact";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/content/locales";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/confidentialite">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: `${dict.privacy.title} — ClariVolt`,
    description: dict.privacy.intro,
    robots: { index: false },
  };
}

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
          <TextLinkExternal key={i} href={`mailto:${privacyContactEmail}`}>
            {privacyContactEmail}
          </TextLinkExternal>,
          part,
        ],
  );
}

export default async function Confidentialite({
  params,
}: PageProps<"/[lang]/confidentialite">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const privacy = dict.privacy;

  return (
    <PageShell
      header={<SiteHeader lang={lang} />}
      footer={<Footer dict={dict.footer} lang={lang} />}
    >
      <Container padding="document">
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

        {/* Vide en français : cette version-là EST le texte de référence. */}
        {privacy.languageNote && (
          <p className="mt-10 border-l-2 border-ink-300 pl-4 text-sm text-ink-500">
            {privacy.languageNote}
          </p>
        )}

        <p className="mt-12">
          <TextLink href={`/${lang}`}>{privacy.back}</TextLink>
        </p>
      </Container>
    </PageShell>
  );
}
