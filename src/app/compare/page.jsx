import Link from "next/link";
import { COMPETITORS, VERIFIED } from "@/data/competitors";
import { BEST_LISTS } from "@/data/bestlists";
import { JsonLd, ldGraph, breadcrumbLd, pageMetadata, SITE_URL } from "@/lib/seo";
import { PageShell, Breadcrumbs, Hero, Section, Cta } from "@/components/seopages/ui";

export const metadata = pageMetadata({
  title: "Compare HeyBuddy with Other Tech Companies",
  description:
    "Side-by-side comparisons of HeyBuddy with Appinventiv, Hyperlink InfoSystem, Techugo and other development companies in India: services, focus and fit.",
  path: "/compare",
});

export default function CompareHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
  ];
  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/compare#webpage`,
            url: `${SITE_URL}/compare`,
            name: "Compare HeyBuddy with other technology companies",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            hasPart: COMPETITORS.map((c) => ({ "@type": "WebPage", url: `${SITE_URL}/compare/${c.slug}`, name: c.h1 })),
          },
          breadcrumbLd(crumbs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero
        eyebrow="Comparisons"
        title="Compare HeyBuddy with other technology companies"
        intro="Choosing a development partner is easier when you can see the differences side by side. Each comparison below covers services, focus, typical engagements and when each company is the better fit, using public information."
        meta={`Updated ${VERIFIED.label}`}
      />
      <Section title="Buyer's guides">
        <ul className="grid gap-4 md:grid-cols-2">
          {BEST_LISTS.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/best/${l.slug}`}
                className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/50"
              >
                <p className="text-sm text-blue-400">Guide</p>
                <h3 className="mt-2 text-xl font-semibold">{l.h1}</h3>
                <p className="mt-2 text-white/65">{l.seoDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Company comparisons">
        <ul className="grid gap-4 md:grid-cols-2">
          {COMPETITORS.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/compare/${c.slug}`}
                className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/50"
              >
                <p className="text-sm text-blue-400">{c.category}</p>
                <h3 className="mt-2 text-xl font-semibold">HeyBuddy vs {c.name}</h3>
                <p className="mt-2 text-white/65">{c.positioning}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Cta title="Not sure which partner fits?" text="Share your brief and we'll tell you honestly whether we're the right team, and who else to talk to if we're not." button="Talk to us" />
    </PageShell>
  );
}
