import { Container } from "@/components/ui/Container";
import { CtaLink, Eyebrow } from "@/components/ui";
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
      <Container padding="hero" className="relative">
        <Eyebrow>{dict.eyebrow}</Eyebrow>

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
          <CtaLink href={dict.cta.href}>{dict.cta.label}</CtaLink>
          <p className="text-sm text-ink-500">{dict.ctaNote}</p>
        </div>
      </Container>
    </section>
  );
}
