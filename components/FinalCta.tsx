import { WaitlistForm } from "@/components/WaitlistForm";
import { Container } from "@/components/ui/Container";
import { AccentRule } from "@/components/ui";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/locales";

/**
 * Porte l'ancre #waitlist visée par les deux CTA.
 * À l'étape 4, le formulaire vient remplacer le bouton ici même —
 * l'ancre et les liens qui la visent restent inchangés.
 */
export function FinalCta({
  dict,
  form,
  lang,
}: {
  dict: Dictionary["finalCta"];
  form: Dictionary["form"];
  lang: Locale;
}) {
  return (
    <section
      id="waitlist"
      className="scroll-mt-8 border-b border-ink-200 bg-surface"
    >
      <Container>
        <AccentRule />

        <h2 className="text-3xl font-bold sm:text-4xl">{dict.title}</h2>

        <p className="mt-4 max-w-2xl text-lg text-ink-700">{dict.lead}</p>

        <div className="mt-8">
          <WaitlistForm dict={form} lang={lang} />
        </div>
      </Container>
    </section>
  );
}
