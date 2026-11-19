import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry, INDUSTRIES_UPDATED } from "@/data/industries";
import { JsonLd, ldGraph, breadcrumbLd, faqLd, pageMetadata, SITE_URL } from "@/lib/seo";
import {
  PageShell, Breadcrumbs, Hero, Section, NumberedList, Faqs, RelatedLinks, Cta,
} from "@/components/seopages/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMetadata({ title: ind.seoTitle, description: ind.seoDescription, path: `/industries/${ind.slug}` });
}

const linkClass =
  "mt-4 inline-block text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:decoration-blue-300";

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const path = `/industries/${ind.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: ind.name, path },
  ];

  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${path}#webpage`,
            url: `${SITE_URL}${path}`,
            name: ind.h1,
            description: ind.seoDescription,
            dateModified: INDUSTRIES_UPDATED.iso,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            audience: { "@type": "BusinessAudience", name: ind.name },
          },
          breadcrumbLd(crumbs),
          faqLd(ind.faqs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero eyebrow={`Industries · ${ind.name}`} title={ind.h1} intro={ind.intro} />

      <Section title={ind.problems.title}>
        <NumberedList items={ind.problems.items} />
      </Section>

      <Section title={ind.build.title}>
        <div className="space-y-10">
          {ind.build.groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">{g.label}</h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {g.items.map((it) => (
                  <li key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <h4 className="text-lg font-semibold">{it.title}</h4>
                    <p className="mt-2 leading-relaxed text-white/70">{it.text}</p>
                    {it.href && (
                      <Link href={it.href} className={linkClass}>
                        {it.linkLabel}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title={ind.proof.title}>
        <div className="grid gap-6 md:grid-cols-2">
          {ind.proof.items.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{p.text}</p>
              {p.href && (
                <Link href={p.href} className={linkClass}>
                  {p.linkLabel}
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section title={ind.process.title}>
        <ol className="max-w-3xl space-y-5">
          {ind.process.steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-blue-400/40 text-sm font-semibold text-blue-300">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-white/70">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Frequently asked questions">
        <Faqs faqs={ind.faqs} />
      </Section>

      <RelatedLinks title="Further reading" links={ind.reading} />
      <RelatedLinks title="Related services and case studies" links={ind.related} />

      <Cta title={ind.cta.title} text={ind.cta.text} button={ind.cta.button} />
    </PageShell>
  );
}
