import { Container } from "@/components/ui/Container";
import { Bullet } from "@/components/ui";
import type { Dictionary } from "@/content/dictionaries";

export function Problem({ dict }: { dict: Dictionary["problem"] }) {
  return (
    <section className="border-b border-ink-200 bg-surface-subtle">
      <Container>
        <h2 className="text-3xl font-bold sm:text-4xl">{dict.title}</h2>

        <dl className="mt-10 space-y-6">
          {dict.items.map((item) => (
            <div
              key={item.term}
              className="rounded-xl border border-ink-200 bg-surface p-5"
            >
              <dt className="flex items-center gap-2.5 font-semibold text-ink-900">
                <Bullet />
                {item.term}
              </dt>
              <dd className="mt-2 pl-[1.125rem] text-ink-700">{item.text}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-lg font-medium text-ink-900">{dict.closing}</p>
      </Container>
    </section>
  );
}
