import Link from "next/link";
import { footer } from "@/content/lp";

export function Footer() {
  return (
    <footer className="bg-surface-muted">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <p className="font-semibold text-ink-900">{footer.location}</p>

        <p className="mt-2 text-sm text-ink-500">{footer.participation}</p>

        <p className="mt-4 text-sm text-ink-700">
          {footer.contact.label} :{" "}
          <a
            href={footer.contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            {footer.contact.name} — LinkedIn
          </a>
        </p>

        <p className="mt-4 text-sm">
          <Link
            href="/confidentialite"
            className="text-ink-500 underline underline-offset-2 hover:text-ink-700"
          >
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
}
