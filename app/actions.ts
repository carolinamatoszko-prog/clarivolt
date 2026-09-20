"use server";

/**
 * Inscription à la liste d'attente.
 *
 * Server Action plutôt que Route Handler : pas d'endpoint public
 * à marteler, et le formulaire fonctionne même sans JavaScript.
 *
 * La clé Brevo ne quitte jamais le serveur. Aucune erreur de
 * l'API n'est renvoyée telle quelle au navigateur : elle pourrait
 * révéler la structure du compte.
 */

import type { WaitlistState } from "./waitlist-state";

/** Validation volontairement simple : un seul @, pas d'espace, un point après. */
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Piège à robots : un champ invisible que seul un script remplit.
  if (formData.get("website")) {
    return { status: "success", message: "Merci, votre inscription est bien enregistrée." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const consent = formData.get("consent");

  if (!looksLikeEmail(email)) {
    return { status: "error", message: "Cette adresse e-mail semble invalide." };
  }

  if (!consent) {
    return {
      status: "error",
      message: "Merci de cocher la case de consentement pour continuer.",
    };
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isFinite(listId)) {
    console.error("[waitlist] BREVO_API_KEY ou BREVO_LIST_ID manquant");
    return {
      status: "error",
      message: "Inscription momentanément indisponible. Réessayez plus tard.",
    };
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

    if (response.ok) {
      return {
        status: "success",
        message: "Merci, votre inscription est bien enregistrée.",
      };
    }

    const body = await response.json().catch(() => null);

    // Filet de sécurité : avec `updateEnabled: true`, Brevo répond
    // 204 sur une ré-inscription (vérifié) — ce cas ne se produit
    // donc pas aujourd'hui. Il protège si cette option change.
    // Ne jamais répondre « vous êtes déjà inscrit » : cela
    // permettrait de tester quelles adresses sont dans la liste.
    if (body?.code === "duplicate_parameter") {
      return {
        status: "success",
        message: "Merci, votre inscription est bien enregistrée.",
      };
    }

    console.error("[waitlist] Brevo a répondu", response.status, body?.code);
    return {
      status: "error",
      message: "Inscription momentanément indisponible. Réessayez plus tard.",
    };
  } catch (error) {
    console.error("[waitlist] appel Brevo impossible", error);
    return {
      status: "error",
      message: "Inscription momentanément indisponible. Réessayez plus tard.",
    };
  }
}
