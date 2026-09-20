import { WaitlistForm } from "@/components/WaitlistForm";
import { finalCta } from "@/content/lp";

/**
 * Porte l'ancre #waitlist visée par les deux CTA.
 * À l'étape 4, le formulaire vient remplacer le bouton ici même —
 * l'ancre et les liens qui la visent restent inchangés.
 */
export function FinalCta() {
  return (
    <section
      id="waitlist"
      className="scroll-mt-8 border-b border-ink-200 bg-surface"
    >
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        {/* Le petit trait : marque la bascule vers l'appel à l'action */}
        <hr className="mb-8 h-0.5 w-16 rounded-full border-0 bg-accent-500" />

        <h2 className="text-3xl font-bold sm:text-4xl">{finalCta.title}</h2>

        <p className="mt-4 max-w-2xl text-lg text-ink-700">{finalCta.lead}</p>

        <div className="mt-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
