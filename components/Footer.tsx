import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TextLinkExternal } from "@/components/ui";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/locales";

export function Footer({
  dict,
  lang,
}: {
  dict: Dictionary["footer"];
  lang: Locale;
}) {
  return (
    <footer className="bg-surface-muted">
      <Container padding="footer">
        <p className="font-semibold text-ink-900">{dict.location}</p>

        <p className="mt-2 text-sm text-ink-500">{dict.participation}</p>

        <p className="mt-4 text-sm text-ink-700">
          {dict.contact.label}{" "}
          <TextLinkExternal
            href={dict.contact.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.contact.name} — LinkedIn
          </TextLinkExternal>
        </p>

        <p className="mt-4 text-sm">
          <Link
            href={`/${lang}/confidentialite`}
            /* Volontairement plus discret qu'un TextLink : dans le
               pied de page, ce lien ne doit pas rivaliser avec le contenu. */
            className="text-ink-500 underline underline-offset-2 hover:text-ink-700"
          >
            {dict.privacyLabel}
          </Link>
        </p>
      </Container>
    </footer>
  );
}
