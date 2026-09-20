/**
 * État du formulaire, séparé de l'action.
 *
 * Un fichier « use server » ne peut exporter que des fonctions
 * async — y placer cette constante fait échouer la compilation.
 * Voir nextjs.org/docs/messages/invalid-use-server-value
 */

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialWaitlistState: WaitlistState = {
  status: "idle",
  message: "",
};
