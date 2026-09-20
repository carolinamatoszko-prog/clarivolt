import type { Dictionary } from "@/content/dictionaries";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-surface">
      {/* Halo décoratif — couleurs du logo, niveaux clairs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-100 opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-accent-100 opacity-50 blur-3xl"
      />

      {/* Padding asymétrique : peu en haut pour que l'accroche soit
          lisible dès l'ouverture, de l'air en bas pour respirer. */}
      <div className="relative mx-auto w-full max-w-3xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent-500"
          />
          {dict.eyebrow}
        </p>

        <h1 className="mt-6 text-4xl font-bold sm:text-6xl">
          {dict.title.map((line, i) => (
            <span key={line} className="block">
              {i === dict.title.length - 1 ? (
                <span className="text-brand-700">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ink-700 sm:text-xl">
          {dict.lead}
        </p>

        <p className="mt-5 max-w-2xl border-l-2 border-signal-500 pl-4 text-base text-ink-700">
          {dict.whyNow}
        </p>

        <div className="mt-9 flex flex-col items-start gap-3">
          <a
            href={dict.cta.href}
            className="rounded-lg bg-brand-700 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-800"
          >
            {dict.cta.label}
          </a>
          <p className="text-sm text-ink-500">{dict.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
