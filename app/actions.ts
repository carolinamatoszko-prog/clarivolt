"use server";

import { redirect } from "next/navigation";
import type { WaitlistState } from "./waitlist-state";

/**
 * Inscription à la liste d'attente.
 *
 * Server Action plutôt que Route Handler : pas d'endpoint public
 * à marteler, et le formulaire fonctionne même sans JavaScript.
 * La documentation rappelle qu'une action reste joignable par
 * quiconque sait poster dessus — toute validation est donc faite
 * ici, côté serveur, jamais seulement dans le navigateur.
 *
 * La clé Brevo ne quitte jamais le serveur. Aucune erreur de
 * l'API n'est renvoyée telle quelle au navigateur : elle pourrait
 * révéler la structure du compte.
 *
 * En cas de succès, on redirige vers /merci plutôt que d'afficher
 * un message sur place : cette page vue est la seule façon de
 * mesurer la conversion sur le plan Hobby, qui n'ouvre pas les
 * événements personnalisés. Voir `thanks` dans content/lp.ts.
 */

/** Validation volontairement simple : un seul @, pas d'espace, un point après. */
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

/** Enregistre le contact. Ne lance pas : renvoie simplement l'issue. */
async function addContactToBrevo(email: string): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isFinite(listId)) {
    console.error("[waitlist] BREVO_API_KEY ou BREVO_LIST_ID manquant");
    return false;
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // Une ré-inscription répond 204 : Brevo met le contact à jour.
    if (response.ok) return true;

    const body = await response.json().catch(() => null);

    // Filet de sécurité si `updateEnabled` venait à changer. Ne jamais
    // répondre « vous êtes déjà inscrit » : cela permettrait de tester
    // quelles adresses figurent dans la liste.
    if (body?.code === "duplicate_parameter") return true;

    console.error("[waitlist] Brevo a répondu", response.status, body?.code);
    return false;
  } catch (error) {
    console.error("[waitlist] appel Brevo impossible", error);
    return false;
  }
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Piège à robots : un champ invisible que seul un script remplit.
  // On abandonne en silence — sans appeler Brevo et sans rediriger,
  // pour ne pas gonfler le compteur de /merci sur lequel repose la
  // mesure de conversion.
  if (formData.get("website")) {
    return { status: "idle", message: "" };
  }

  const email = String(formData.get("email") ?? "").trim();

  if (!looksLikeEmail(email)) {
    return { status: "error", message: "Cette adresse e-mail semble invalide." };
  }

  if (!formData.get("consent")) {
    return {
      status: "error",
      message: "Merci de cocher la case de consentement pour continuer.",
    };
  }

  const saved = await addContactToBrevo(email);

  if (!saved) {
    return {
      status: "error",
      message: "Inscription momentanément indisponible. Réessayez plus tard.",
    };
  }

  // Hors du try/catch : `redirect` lance une exception de contrôle de
  // flux qu'un catch avalerait, et personne ne serait redirigé.
  redirect("/merci");
}
