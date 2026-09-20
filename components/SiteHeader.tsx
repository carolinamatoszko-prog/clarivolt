import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Wordmark } from "@/components/Wordmark";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/content/locales";

/**
 * En-tête commun aux trois pages.
 *
 * Le conteneur reprend exactement les contraintes du contenu —
 * `max-w-3xl` et les mêmes marges latérales — de sorte que le
 * sélecteur s'aligne sur le bord droit du texte en dessous, à
 * toutes les largeurs d'écran. `justify-between` pousse la marque
 * à gauche et le sélecteur à droite sans marge codée en dur.
 */
export function SiteHeader({ lang }: { lang: Locale }) {
  return (
    <header className="border-b border-ink-200 bg-surface">
      <Container padding="header" className="flex items-center justify-between">
        <Link href={`/${lang}`} aria-label="ClariVolt">
          <Wordmark />
        </Link>
        <LanguageSwitcher current={lang} />
      </Container>
    </header>
  );
}
