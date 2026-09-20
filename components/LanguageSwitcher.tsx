"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content/locales";

/**
 * Sélecteur de langue.
 *
 * Aucun état React : la langue est portée par l'URL. Basculer, c'est
 * naviguer — le retour arrière du navigateur fonctionne, et un lien
 * partagé garde sa langue.
 *
 * Client Component parce que `usePathname` l'exige : la documentation
 * précise que lire l'URL depuis un Server Component n'est pas
 * supporté. L'avertissement sur les erreurs d'hydratation concerne
 * les `rewrites` ; ce projet n'utilise que des `redirects`, qui
 * changent réellement l'URL du navigateur.
 */

/**
 * Remplace le segment de langue en conservant le reste du chemin :
 * /fr/confidentialite → /en/confidentialite.
 * Sans cela, changer de langue renverrait toujours à l'accueil.
 */
function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  // segments[0] est vide (le chemin commence par "/"), segments[1] est la langue.
  if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
    segments[1] = target;
    return segments.join("/");
  }
  return `/${target}`;
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Langue" className="flex items-center gap-2 text-sm">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden className="text-ink-300">
              /
            </span>
          )}
          {locale === current ? (
            // La langue active n'est pas un lien : cliquer dessus ne
            // mènerait nulle part, et cela porte l'information d'état.
            <span aria-current="true" className="font-medium text-ink-900">
              {locale.toUpperCase()}
            </span>
          ) : (
            <Link
              href={swapLocale(pathname, locale)}
              hrefLang={locale}
              className="text-ink-500 transition-colors hover:text-ink-900"
            >
              {locale.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
