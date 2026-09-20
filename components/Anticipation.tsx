import { Container } from "@/components/ui/Container";
import { Bullet, Eyebrow } from "@/components/ui";
import type { Dictionary } from "@/content/dictionaries";

/**
 * Chaque entrée est un levier d'anticipation : ce qu'on peut faire
 * avant que la perte ne s'installe.
 *
 * La forme précédente — événement météo → flèche → action — a été
 * retirée avec le nouveau texte : les entrées ne sont plus des
 * causes mais des actions, et une flèche d'une action vers sa
 * propre explication était un contresens. La carte reprend donc la
 * structure du bloc Problème (terme + paragraphe), ce qui supprime
 * aussi la colonne gauche presque vide face à des textes longs.
 */
export function Anticipation({ dict }: { dict: Dictionary["anticipation"] }) {
  return (
    <section className="border-b border-ink-200 bg-surface">
      <Container>
        <Eyebrow>{dict.eyebrow}</Eyebrow>

        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">{dict.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-700">{dict.lead}</p>

        <dl className="mt-10 space-y-6">
          {dict.items.map((item) => (
            <div
              key={item.term}
              className="rounded-xl border border-ink-200 bg-surface-subtle p-5"
            >
              <dt className="flex items-center gap-2.5 font-semibold text-accent-700">
                <Bullet tone="accent" />
                {item.term}
              </dt>
              <dd className="mt-2 pl-[1.125rem] text-ink-700">{item.text}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 border-l-2 border-accent-500 pl-4 text-lg font-medium text-ink-900">
          {dict.closing}
        </p>
      </Container>
    </section>
  );
}
