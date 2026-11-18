import { notFound } from "next/navigation";
import { COMPETITORS, getCompetitor, VERIFIED } from "@/data/competitors";
import { HEYBUDDY, SERVICES, HEYBUDDY_COVERAGE } from "@/data/heybuddy";
import { JsonLd, ldGraph, breadcrumbLd, faqLd, pageMetadata, SITE_URL } from "@/lib/seo";
import {
  PageShell, Breadcrumbs, Hero, Section, Prose, CompareTable, CoverageTable,
  TwoLists, NumberedList, Faqs, RelatedLinks, Cta, Sources,
} from "@/components/seopages/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  return pageMetadata({ title: c.seoTitle, description: c.seoDescription, path: `/compare/${c.slug}` });
}

const CHOOSING = [
  { title: "Match the partner to the work", text: "A firm built for large enterprise mobile apps and a studio built for immersive, visual work are good at different things. Start from the outcome you need, not the size of the vendor." },
  { title: "Ask for relevant case studies", text: "Ask for two or three projects close to yours (same technology and similar scale), and talk to one of those clients if you can." },
  { title: "Check who will actually do the work", text: "Ask to meet the lead designer or engineer, not only sales. Team continuity matters more than headcount." },
  { title: "Get a scoped estimate", text: "A fixed-scope first phase (prototype or pilot) with clear deliverables is the fastest way to test a partner before a larger commitment." },
];

export default async function ComparePage({ params }) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  const path = `/compare/${c.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: `HeyBuddy vs ${c.name}`, path },
  ];
  const coverage = SERVICES.map((s) => ({
    service: s.label,
    href: s.href,
    left: !!HEYBUDDY_COVERAGE[s.key],
    right: c.coverage.includes(s.key),
  }));
  const others = COMPETITORS.filter((o) => o.slug !== c.slug).slice(0, 6);

  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${path}#webpage`,
            url: `${SITE_URL}${path}`,
            name: c.h1,
            description: c.seoDescription,
            dateModified: VERIFIED.iso,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: [{ "@id": `${SITE_URL}/#organization` }, { "@type": "Organization", name: c.name, url: c.website }],
          },
          breadcrumbLd(crumbs),
          faqLd(c.faqs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero eyebrow={`${c.name} alternatives`} title={c.h1} intro={c.intro} meta={`Updated ${VERIFIED.label} · based on public information`} />

      <Section title={`At a glance: HeyBuddy vs ${c.name}`}>
        <CompareTable
          leftName="HeyBuddy"
          rightName={c.name}
          rows={[
            ["Headquarters", HEYBUDDY.hq, c.hq],
            ["Other offices", null, c.offices],
            ["How they describe themselves", HEYBUDDY.positioning, c.positioning],
            ["Founded", null, c.founded],
            ["Team size", null, c.teamSize],
            ["Main focus", "Immersive tech, CGI, 3D, games, AI and custom software", c.focus],
            ["Industries highlighted", "Real estate, BFSI, education, manufacturing, retail & D2C", c.industries],
            ["Clutch rating", "Not listed on Clutch", c.clutchRating],
            ["Clutch min. project / rate", "Quoted per brief", c.clutchPricing],
          ]}
        />
      </Section>

      <Section title="Service coverage" kicker="What each company lists">
        <CoverageTable leftName="HeyBuddy" rightName={c.name} items={coverage} />
        <p className="mt-3 text-sm text-white/45">
          &ldquo;Not listed&rdquo; means we couldn&apos;t find it as a service on {c.name}&apos;s website; it doesn&apos;t mean they can&apos;t do it.
        </p>
      </Section>

      <Section title={`When to choose ${c.name}, and when HeyBuddy fits better`}>
        <TwoLists
          leftTitle={`${c.name} is a strong fit when…`}
          left={c.theyFit}
          rightTitle="HeyBuddy is a strong fit when…"
          right={c.weFit}
        />
      </Section>

      <Section title={`Why teams look for ${c.name} alternatives`}>
        <Prose>
          {c.why.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Prose>
      </Section>

      <Section title="How to choose the right partner">
        <NumberedList items={CHOOSING} />
      </Section>

      <Section title="Frequently asked questions">
        <Faqs faqs={c.faqs} />
      </Section>

      <RelatedLinks
        title="Explore HeyBuddy services"
        links={c.relatedServices.map((k) => SERVICES.find((s) => s.key === k)).filter((s) => s?.href).map((s) => ({ href: s.href, label: s.label }))}
      />
      <RelatedLinks
        title="Other comparisons"
        links={others.map((o) => ({ href: `/compare/${o.slug}`, label: `HeyBuddy vs ${o.name}` }))}
      />

      <Cta title={c.ctaTitle} text="Tell us what you're building and we'll come back with an approach, a timeline and a ballpark cost." button="Get a free consultation" />

      <Sources
        sources={c.sources}
        verified={VERIFIED.label}
        note={`${c.name} is a trademark of its owner. This comparison uses information published on ${c.name}'s website and public review profiles; HeyBuddy is not affiliated with ${c.name}. Spotted something out of date? Tell us via the contact page and we'll fix it.`}
      />
    </PageShell>
  );
}
