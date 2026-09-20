import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Primitives visuelles partagées.
 *
 * Chacune existe parce que sa classe était recopiée à plusieurs
 * endroits : changer la couleur de marque ou la largeur du site
 * obligeait à les retrouver toutes, et en oublier une passait
 * inaperçu. C'est exactement le risque de désynchronisation que
 * l'en-tête dupliqué avait révélé.
 *
 * Volontairement peu nombreuses : abstraire un style utilisé une
 * seule fois coûte plus cher que de le laisser en place.
 */

/* ── Lien texte ── 5 occurrences avant extraction ────────────── */

export function TextLink({
  children,
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Link>
  );
}

/** Même style, pour une adresse externe ou un `mailto:`. */
export function TextLinkExternal({
  children,
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </a>
  );
}

/* ── Bouton d'appel à l'action ───────────────────────────────── */

const ctaClasses =
  "rounded-lg bg-brand-700 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-800";

/** Version lien : le CTA du Hero pointe vers l'ancre du formulaire. */
export function CtaLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a {...props} className={ctaClasses}>
      {children}
    </a>
  );
}

/** Version bouton : soumet le formulaire, donc gère l'état désactivé. */
export function CtaButton({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={`${ctaClasses} shrink-0 disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}

/* ── Filet d'accent ── marque la bascule vers l'action ───────── */

export function AccentRule() {
  return <hr className="mb-8 h-0.5 w-16 rounded-full border-0 bg-accent-500" />;
}

/* ── Puce de liste ── utilisée par Problème et Anticipation ──── */

export function Bullet({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`h-2 w-2 shrink-0 rounded-full bg-signal-500${
        className ? ` ${className}` : ""
      }`}
    />
  );
}

/* ── Squelette de page ── identique sur les trois pages ──────── */

export function PageShell({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
