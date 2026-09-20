import { Container } from "@/components/ui/Container";
import { Bullet } from "@/components/ui";
import type { Dictionary } from "@/content/dictionaries";

/**
 * Événement météo (ambre = le risque qui arrive)
 *   → action anticipée (teal = ce qu'on en fait)
 *
 * La flèche pivote : vers le bas sur mobile, vers la droite dès
 * que les deux colonnes tiennent côte à côte.
 */
export function Anticipation({ dict }: { dict: Dictionary["anticipation"] }) {
  return (
    <section className="border-b border-ink-200 bg-surface">
      <Container>
        <h2 className="text-3xl font-bold sm:text-4xl">{dict.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-700">{dict.lead}</p>

        <ul className="mt-10 space-y-4">
          {dict.items.map((item) => (
            <li
              key={item.event}
              className="grid gap-3 rounded-xl border border-ink-200 bg-surface-subtle p-5 sm:grid-cols-[1fr_auto_1.4fr] sm:items-center sm:gap-5"
            >
              <span className="inline-flex items-start gap-2.5 font-semibold text-ink-900">
                <Bullet className="mt-1.5" />
                {item.event}
              </span>

              <span
                aria-hidden
                className="text-xl leading-none text-brand-400 sm:rotate-0"
              >
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>

              <span className="text-ink-700">{item.action}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 border-l-2 border-accent-500 pl-4 text-lg font-medium text-ink-900">
          {dict.closing}
        </p>
      </Container>
    </section>
  );
}
