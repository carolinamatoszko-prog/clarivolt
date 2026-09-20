import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Wordmark } from "@/components/Wordmark";
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
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={`/${lang}`} aria-label="ClariVolt">
          <Wordmark />
        </Link>
        <LanguageSwitcher current={lang} />
      </div>
    </header>
  );
}
