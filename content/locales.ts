/**
 * Langues supportées.
 *
 * Volontairement séparé des dictionnaires : ce module décrit le
 * ROUTAGE (quelles langues existent), pas le CONTENU. Les
 * dictionnaires sont marqués `server-only` pour ne jamais partir
 * dans le bundle du navigateur ; le sélecteur de langue, lui, est
 * un Client Component et a besoin de cette liste.
 *
 * Ne rien importer d'ici qui touche au contenu.
 */

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

/** Langue servie quand aucune n'est précisée. */
export const defaultLocale: Locale = "fr";

/**
 * Restreint une chaîne quelconque à une langue connue.
 * Permet de répondre 404 sur /de plutôt que de planter à l'exécution,
 * et d'écarter une valeur soumise par un formulaire.
 */
export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
