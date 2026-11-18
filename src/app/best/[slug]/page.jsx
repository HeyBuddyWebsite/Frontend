import Link from "next/link";
import { notFound } from "next/navigation";
import { BEST_LISTS, getBestList } from "@/data/bestlists";
import { COMPETITORS, VERIFIED } from "@/data/competitors";
import { HEYBUDDY, SERVICES } from "@/data/heybuddy";
import { JsonLd, ldGraph, breadcrumbLd, faqLd, pageMetadata, SITE_URL } from "@/lib/seo";
import { PageShell, Breadcrumbs, Hero, Section, NumberedList, Faqs, RelatedLinks, Cta, Sources } from "@/components/seopages/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return BEST_LISTS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const l = getBestList(slug);
  if (!l) return {};
  return pageMetadata({ title: l.seoTitle, description: l.seoDescription, path: `/best/${l.slug}` });
}

function Fact({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-white/40">{label}</dt>
      <dd className="mt-1 text-white/80">{value}</dd>
    </div>
  );
}

export default async function BestListPage({ params }) {
  const { slug } = await params;
  const l = getBestList(slug);
  if (!l) notFound();

  const path = `/best/${l.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: l.h1.replace(/\s*\(\d{4}\)$/, ""), path },
  ];
  const entries = l.entries.map((e) => {
    if (e.heybuddy) {
      return { ...e, website: SITE_URL, hq: HEYBUDDY.hq, summary: HEYBUDDY.positioning, focus: "Immersive tech, CGI, 3D, games, AI and custom software", clutch: null, compare: null };
    }
    const c = COMPETITORS.find((x) => x.name === e.name);
    return { ...e, website: c.website, hq: c.hq, summary: c.positioning, focus: c.focus, clutch: c.clutchRating !== "Not listed" ? `${c.clutchRating} · ${c.clutchPricing}` : null, compare: `/compare/${c.slug}`, sources: c.sources };
  });
  const sources = entries.flatMap((e) => e.sources || []).filter((s) => s.url.includes("clutch.co"));

  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${path}#webpage`,
            url: `${SITE_URL}${path}`,
            name: l.h1,
            description: l.seoDescription,
            dateModified: VERIFIED.iso,
            isPartOf: { "@id": `${SITE_URL}/#website` },
          },
          {
            "@type": "ItemList",
            name: l.h1,
            itemListOrder: "https://schema.org/ItemListUnordered",
            numberOfItems: entries.length,
            itemListElement: entries.map((e, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "Organization", name: e.name, url: e.website },
            })),
          },
          breadcrumbLd(crumbs),
          faqLd(l.faqs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero eyebrow="Buyer's guide" title={l.h1} intro={l.intro} meta={`Updated ${VERIFIED.label} · published by HeyBuddy`} />

      <Section title="How we compared">
        <NumberedList items={l.criteria} />
      </Section>

      <Section title="The companies">
        <ol className="space-y-6">
          {entries.map((e, i) => (
            <li key={e.name} className={`rounded-2xl border p-6 lg:p-8 ${e.heybuddy ? "border-blue-400/40 bg-blue-500/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold">
                  <span className="mr-3 text-white/40">{i + 1}.</span>
                  {e.name}
                  {e.heybuddy && <span className="ml-3 rounded-full bg-blue-500/20 px-3 py-1 align-middle text-xs font-medium text-blue-200">That&apos;s us</span>}
                </h3>
                <p className="text-sm text-blue-300">Best for: {e.best}</p>
              </div>
              <p className="mt-3 text-white/70">{e.summary}</p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                <Fact label="Headquarters" value={e.hq} />
                <Fact label="Main focus" value={e.focus} />
                <Fact label="Clutch" value={e.clutch} />
              </dl>
              {e.compare && (
                <Link href={e.compare} className="mt-5 inline-block text-sm text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:decoration-blue-300">
                  HeyBuddy vs {e.name}: full comparison →
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Frequently asked questions">
        <Faqs faqs={l.faqs} />
      </Section>

      <RelatedLinks
        title="Explore HeyBuddy services"
        links={l.relatedServices.map((k) => SERVICES.find((s) => s.key === k)).filter((s) => s?.href).map((s) => ({ href: s.href, label: s.label }))}
      />

      <Cta title="Want HeyBuddy on your shortlist?" text="Share your brief and we'll come back with an approach and a ballpark cost, or tell you honestly if another studio on this list fits better." button="Get a free consultation" />

      <Sources
        sources={sources}
        verified={VERIFIED.label}
        note="This list is published by HeyBuddy. Company names are trademarks of their owners; details come from each company's own website and public Clutch profile. Spotted something out of date? Tell us via the contact page."
      />
    </PageShell>
  );
}
