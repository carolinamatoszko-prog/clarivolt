import { problem } from "@/content/lp";

export function Problem() {
  return (
    <section className="border-b border-ink-200 bg-surface-subtle">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">{problem.title}</h2>

        <dl className="mt-10 space-y-6">
          {problem.items.map((item) => (
            <div
              key={item.term}
              className="rounded-xl border border-ink-200 bg-surface p-5"
            >
              <dt className="flex items-center gap-2.5 font-semibold text-ink-900">
                <span
                  aria-hidden
                  className="h-2 w-2 shrink-0 rounded-full bg-signal-500"
                />
                {item.term}
              </dt>
              <dd className="mt-2 pl-[1.125rem] text-ink-700">{item.text}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-lg font-medium text-ink-900">
          {problem.closing}
        </p>
      </div>
    </section>
  );
}
