import "server-only";
import type { Locale } from "../locales";
import type { Dictionary } from "./fr";

/**
 * Chargement des dictionnaires.
 *
 * `server-only` est une garde volontaire : si un Client Component
 * importe ce module, la compilation échoue au lieu d'embarquer
 * silencieusement tous les textes dans le bundle du navigateur.
 * Les langues supportées vivent dans `content/locales.ts`, qui n'a
 * pas cette contrainte — c'est ce dont le sélecteur a besoin.
 *
 * Import dynamique : seule la langue demandée est chargée.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./fr").then((m) => m.fr),
  en: () => import("./en").then((m) => m.en),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };
