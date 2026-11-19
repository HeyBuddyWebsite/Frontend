import Link from "next/link";
import { INDUSTRIES, INDUSTRIES_UPDATED } from "@/data/industries";
import { JsonLd, ldGraph, breadcrumbLd, pageMetadata, SITE_URL } from "@/lib/seo";
import { PageShell, Breadcrumbs, Hero, Section, Prose, Cta } from "@/components/seopages/ui";

const DESCRIPTION =
  "How HeyBuddy's AR, VR, 3D, AI and software work applies to real estate, education, retail and D2C, and manufacturing, with case studies for each.";

export const metadata = pageMetadata({
  title: "Industries: AR, VR, 3D and AI by Sector",
  description: DESCRIPTION,
  path: "/industries",
});

export default function IndustriesHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ];
  return (
    <PageShell>
      <JsonLd
        data={ldGraph(
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/industries#webpage`,
            url: `${SITE_URL}/industries`,
            name: "Industries HeyBuddy works with",
            description: DESCRIPTION,
            dateModified: INDUSTRIES_UPDATED.iso,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            hasPart: INDUSTRIES.map((i) => ({ "@type": "WebPage", url: `${SITE_URL}/industries/${i.slug}`, name: i.h1 })),
          },
          breadcrumbLd(crumbs)
        )}
      />
      <Breadcrumbs items={crumbs} />
      <Hero
        eyebrow="Industries"
        title="AR, VR, 3D and AI for the industries we know best"
        intro="HeyBuddy's services are organised by discipline: AR, VR, CGI, games, AI and software. These pages turn that around and start from the sector instead, with the problems we hear most often, what we build for them, and the case studies and guides that apply."
      />
      <Section title="Choose your industry">
        <ul className="grid gap-4 md:grid-cols-2">
          {INDUSTRIES.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/industries/${i.slug}`}
                className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/50"
              >
                <h3 className="text-xl font-semibold">{i.name}</h3>
                <p className="mt-2 text-white/65">{i.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="How these pages fit with the rest of the site">
        <Prose>
          <p>
            Each industry page is an overview. For the detail on a specific format, follow its links down to the{" "}
            <Link href="/solutions" className="text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:decoration-blue-300">
              solutions
            </Link>{" "}
            and service pages, or go straight to the{" "}
            <Link href="/casestudies" className="text-blue-300 underline decoration-blue-300/30 underline-offset-4 hover:decoration-blue-300">
              case studies
            </Link>
            .
          </p>
        </Prose>
      </Section>
      <Cta
        title="Working in a sector that isn't listed?"
        text="Tell us what you're trying to achieve. The same AR, VR, 3D and AI work carries across industries, and we'll point you to the closest example."
        button="Talk to us"
      />
    </PageShell>
  );
}
