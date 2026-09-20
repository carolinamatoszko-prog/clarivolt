"use client";

import { useActionState } from "react";
import Link from "next/link";
import { joinWaitlist } from "@/app/actions";
import { initialWaitlistState } from "@/app/waitlist-state";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/locales";

export function WaitlistForm({
  dict,
  lang,
}: {
  dict: Dictionary["form"];
  lang: Locale;
}) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialWaitlistState,
  );

  // L'action renvoie une clé ; la phrase affichée vient du dictionnaire.
  const errorMessage = state.error ? dict.errors[state.error] : "";

  // Pas d'état de succès ici : l'action redirige vers /{lang}/merci, dont la
  // page vue sert à mesurer la conversion (voir app/actions.ts).
  return (
    <form action={formAction} className="max-w-xl">
      {/* La langue voyage avec le formulaire : l'action doit savoir vers
          quelle version de /merci rediriger, y compris sans JavaScript. */}
      <input type="hidden" name="lang" value={lang} />

      <label
        htmlFor="email"
        className="block text-sm font-medium text-ink-900"
      >
        {dict.emailLabel}
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={dict.emailPlaceholder}
          aria-describedby="waitlist-message"
          className="w-full rounded-lg border border-ink-300 bg-surface px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:border-brand-600 focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-lg bg-brand-700 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? dict.submitting : dict.submit}
        </button>
      </div>

      {/* Piège à robots : hors écran, jamais atteint au clavier. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-4 flex items-start gap-2.5">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-ink-300 accent-brand-700"
        />
        <label htmlFor="consent" className="text-sm text-ink-700">
          {dict.consent}{" "}
          <Link
            href={`/${lang}/confidentialite`}
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            {dict.consentLinkLabel}
          </Link>
          .
        </label>
      </div>

      <p
        id="waitlist-message"
        aria-live="polite"
        className="mt-3 min-h-5 text-sm text-signal-700"
      >
        {errorMessage}
      </p>
    </form>
  );
}
