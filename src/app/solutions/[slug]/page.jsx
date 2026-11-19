import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS, getSolution, SOLUTIONS_UPDATED, OFFICE } from "@/data/solutions";
import { JsonLd, ldGraph, breadcrumbLd, serviceLd, faqLd, pageMetadata, SITE_URL } from "@/lib/seo";
import {
  PageShell, Breadcrumbs, Hero, Section, Prose, NumberedList, TwoLists, Faqs, RelatedLinks, Cta,
} from "@/components/seopages/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/solutions/${s.slug}` });
}

const LOCAL_AREAS = ["Gurugram", "Delhi", "Noida"].map((name) => ({ "@type": "City", name }));

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const path = `/solutions/${s.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: s.name, path },
  ];
  const service = serviceLd({ name: s.serviceName, description: s.seoDescription, path });
  if (s.local) service.areaServed = LOCAL_AREAS;

  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${path}#webpage`,
            url: `${SITE_URL}${path}`,
            name: s.h1,
            description: s.seoDescription,
            dateModified: SOLUTIONS_UPDATED.iso,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            mainEntity: { "@id": service["@id"] },
          },
          service,
          breadcrumbLd(crumbs),
          faqLd(s.faqs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero eyebrow={s.category} title={s.h1} intro={s.intro} />

      <Section title={s.context.title}>
        <Prose>
          {s.context.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Prose>
      </Section>

      <Section title={s.build.title}>
        <NumberedList items={s.build.items} />
      </Section>

      <Section title={s.proof.title}>
        <div className="grid gap-6 md:grid-cols-2">
          {s.proof.items.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{p.text}</p>
              {p.href && (
                <Link
                  href={p.href}
                  className="mt-4 inline-block text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:decoration-blue-300"
                >
                  {p.linkLabel}
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section title={s.process.title}>
        <ol className="max-w-3xl space-y-5">
          {s.process.steps.map((step, i) => (
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

      <Section title={s.who.title}>
        <TwoLists leftTitle={s.who.leftTitle} left={s.who.left} rightTitle={s.who.rightTitle} right={s.who.right} />
      </Section>

      {s.office && (
        <Section title={s.office.title}>
          <Prose>
            <address className="not-italic">
              HeyBuddy, {OFFICE.street}, {OFFICE.city}, {OFFICE.region} {OFFICE.postcode}
              <br />
              Phone:{" "}
              <a href={OFFICE.phoneHref} className="text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:decoration-blue-300">
                {OFFICE.phone}
              </a>
            </address>
            <p>{s.office.text}</p>
          </Prose>
        </Section>
      )}

      <Section title="Frequently asked questions">
        <Faqs faqs={s.faqs} />
      </Section>

      <RelatedLinks title="Related services and case studies" links={s.related} />

      {/* Optional: blog guides that go deeper than this page. */}
      <RelatedLinks title="Further reading" links={s.furtherReading} />

      <Cta title={s.cta.title} text={s.cta.text} button={s.cta.button} />
    </PageShell>
  );
}
