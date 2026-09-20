/**
 * État du formulaire, séparé de l'action.
 *
 * Un fichier « use server » ne peut exporter que des fonctions
 * async — y placer cette constante fait échouer la compilation.
 * Voir nextjs.org/docs/messages/invalid-use-server-value
 */

/**
 * Pas d'état « success » : une inscription réussie redirige vers
 * /merci. L'état ne sert donc qu'aux erreurs et au repos.
 */
export type WaitlistState = {
  status: "idle" | "error";
  message: string;
};

export const initialWaitlistState: WaitlistState = {
  status: "idle",
  message: "",
};
