// Shared server-rendered building blocks for the comparison (/compare) and
// keyword landing (/solutions) pages. No client JS: everything here is in the
// HTML Google receives.
import Link from "next/link";

export function PageShell({ children }) {
  return (
    <main className="relative w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8 lg:pt-40">{children}</div>
    </main>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1 ? (
              <Link href={item.path} className="hover:text-white">
                {item.name}
              </Link>
            ) : (
              <span className="text-white/80">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Hero({ eyebrow, title, intro, meta }) {
  return (
    <header className="max-w-3xl">
      {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">{eyebrow}</p>}
      <h1 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-white/75">{intro}</p>
      {meta && <p className="mt-4 text-sm text-white/45">{meta}</p>}
    </header>
  );
}

export function Section({ title, kicker, children, id }) {
  return (
    <section id={id} className="mt-20">
      {kicker && <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">{kicker}</p>}
      <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Prose({ children }) {
  return <div className="max-w-3xl space-y-4 text-base leading-relaxed text-white/75">{children}</div>;
}

/** rows: [[label, leftValue, rightValue]] */
export function CompareTable({ leftName, rightName, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white/5 text-white/60">
            <th scope="col" className="w-1/4 px-5 py-4 font-medium"></th>
            <th scope="col" className="px-5 py-4 font-semibold text-white">{leftName}</th>
            <th scope="col" className="px-5 py-4 font-semibold text-white">{rightName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, a, b]) => (
            <tr key={label} className="border-t border-white/10 align-top">
              <th scope="row" className="px-5 py-4 font-medium text-white/60">{label}</th>
              <td className="px-5 py-4 text-white/85">{a ?? "Not publicly listed"}</td>
              <td className="px-5 py-4 text-white/85">{b ?? "Not publicly listed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** items: [{ service, left: bool, right: bool }] */
export function CoverageTable({ leftName, rightName, items }) {
  const mark = (v) =>
    v ? (
      <span className="font-semibold text-emerald-400">Yes</span>
    ) : (
      <span className="text-white/35">Not listed</span>
    );
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white/5 text-white/60">
            <th scope="col" className="px-5 py-3 font-medium">Service</th>
            <th scope="col" className="px-5 py-3 font-semibold text-white">{leftName}</th>
            <th scope="col" className="px-5 py-3 font-semibold text-white">{rightName}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.service} className="border-t border-white/10">
              <th scope="row" className="px-5 py-3 font-medium text-white/80">
                {it.href ? (
                  <Link href={it.href} className="underline decoration-white/20 underline-offset-4 hover:decoration-white">
                    {it.service}
                  </Link>
                ) : (
                  it.service
                )}
              </th>
              <td className="px-5 py-3">{mark(it.left)}</td>
              <td className="px-5 py-3">{mark(it.right)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TwoLists({ leftTitle, left, rightTitle, right }) {
  const List = ({ title, items, accent }) => (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
      <h3 className={`text-lg font-semibold ${accent}`}>{title}</h3>
      <ul className="mt-4 space-y-3 text-white/80">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-current opacity-60" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <List title={leftTitle} items={left} accent="text-white" />
      <List title={rightTitle} items={right} accent="text-blue-300" />
    </div>
  );
}

export function NumberedList({ items }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {items.map((it, i) => (
        <li key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-semibold text-blue-400">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
          <p className="mt-2 text-white/70">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Native <details> accordion: no JS, and the answers are in the HTML for FAQ schema. */
export function Faqs({ faqs }) {
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
      {faqs.map(({ q, a }) => (
        <details key={q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-white">
            <span>{q}</span>
            <span aria-hidden="true" className="mt-1 text-white/40 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-white/70">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedLinks({ title = "Related", links }) {
  if (!links?.length) return null;
  return (
    <Section title={title}>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block h-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/85 transition-colors hover:border-blue-400/50 hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Cta({ title, text, button = "Talk to our team" }) {
  return (
    <section className="mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-900 px-8 py-12 lg:px-16 lg:py-16">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold lg:text-4xl">{title}</h2>
            <p className="mt-3 text-indigo-100">{text}</p>
          </div>
          <Link
            href="/contactus"
            className="flex-none rounded-full bg-white px-8 py-4 font-bold text-indigo-900 shadow-xl transition-colors hover:bg-indigo-50"
          >
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Sources({ sources, verified, note }) {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/45">
      <p>
        {note} Information last checked {verified}.
      </p>
      {sources?.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="nofollow noopener" target="_blank" className="underline decoration-white/20 underline-offset-4 hover:text-white/70">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
}
