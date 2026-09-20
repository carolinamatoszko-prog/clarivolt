import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/locales";

export function Footer({
  dict,
  lang,
}: {
  dict: Dictionary["footer"];
  lang: Locale;
}) {
  return (
    <footer className="bg-surface-muted">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <p className="font-semibold text-ink-900">{dict.location}</p>

        <p className="mt-2 text-sm text-ink-500">{dict.participation}</p>

        <p className="mt-4 text-sm text-ink-700">
          {dict.contact.label}{" "}
          <a
            href={dict.contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            {dict.contact.name} — LinkedIn
          </a>
        </p>

        <p className="mt-4 text-sm">
          <Link
            href={`/${lang}/confidentialite`}
            className="text-ink-500 underline underline-offset-2 hover:text-ink-700"
          >
            {dict.privacyLabel}
          </Link>
        </p>
      </div>
    </footer>
  );
}
