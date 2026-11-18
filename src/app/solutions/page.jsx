import Link from "next/link";
import { SOLUTIONS } from "@/data/solutions";
import { JsonLd, ldGraph, breadcrumbLd, pageMetadata, SITE_URL } from "@/lib/seo";
import { PageShell, Breadcrumbs, Hero, Section, Cta } from "@/components/seopages/ui";

const DESCRIPTION =
  "Focused solutions from HeyBuddy: WebAR, virtual try-on, VR training and tours, Unity games, CGI product animation, AI assistants and software in Gurugram.";

export const metadata = pageMetadata({
  title: "Solutions: AR, VR, Games, CGI, AI and Software",
  description: DESCRIPTION,
  path: "/solutions",
});

export default function SolutionsHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ];
  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/solutions#webpage`,
            url: `${SITE_URL}/solutions`,
            name: "HeyBuddy solutions",
            description: DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            hasPart: SOLUTIONS.map((s) => ({ "@type": "WebPage", url: `${SITE_URL}/solutions/${s.slug}`, name: s.h1 })),
          },
          breadcrumbLd(crumbs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero
        eyebrow="Solutions"
        title="Solutions for specific problems, from AR try-on to AI assistants"
        intro="Our service pages cover what HeyBuddy does in each discipline. These pages go narrower: one problem or format each, with how we approach it, the work we've done that's closest to it, and honest answers on cost and fit."
      />
      <Section title="All solutions">
        <ul className="grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/solutions/${s.slug}`}
                className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/50"
              >
                <p className="text-sm text-blue-400">{s.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-white/65">{s.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Cta
        title="Not sure which of these fits?"
        text="Describe what you're trying to achieve and we'll point you to the right approach, even if it isn't on this list."
        button="Talk to us"
      />
    </PageShell>
  );
}
