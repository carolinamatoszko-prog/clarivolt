/**
 * État du formulaire, séparé de l'action.
 *
 * Un fichier « use server » ne peut exporter que des fonctions
 * async — y placer ces constantes fait échouer la compilation.
 * Voir nextjs.org/docs/messages/invalid-use-server-value
 *
 * L'action renvoie une CLÉ d'erreur, pas une phrase : elle n'a donc
 * pas à connaître la langue affichée. La traduction se fait dans le
 * composant, qui dispose du dictionnaire.
 *
 * Pas d'état « success » : une inscription réussie redirige vers
 * /{lang}/merci.
 */

export type WaitlistError = "invalidEmail" | "consentRequired" | "unavailable";

export type WaitlistState = {
  status: "idle" | "error";
  error: WaitlistError | null;
};

export const initialWaitlistState: WaitlistState = {
  status: "idle",
  error: null,
};
