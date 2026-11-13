import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/custom-software";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "16": {
    title: "Custom D2C Marketplace for a Luxury Watch Brand",
    description:
      "Case study: HeyBuddy built a custom D2C marketplace for an Indian luxury watch brand, keeping its luxurious appeal and delivering in just six months.",
  },
};

const FALLBACK = {
  title: "Custom Software Case Study",
  description:
    "HeyBuddy custom software case studies: how we design and build custom platforms, including a D2C marketplace for a luxury watch brand in India.",
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const study = CASE_STUDIES[id];
  return pageMetadata({
    ...(study ?? FALLBACK),
    path: `${BASE_PATH}/${id}`,
    // Unknown ids have no content of their own: keep them out of the index.
    ...(study ? {} : { robots: { index: false, follow: false } }),
  });
}

export default async function Layout({ children, params }) {
  const { id } = await params;
  const study = CASE_STUDIES[id];
  const jsonLd = study && {
    "@context": "https://schema.org",
    ...breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/casestudies" },
      { name: study.title, path: `${BASE_PATH}/${id}` },
    ]),
  };

  return (
    <>
      {children}
      {jsonLd && <JsonLd data={jsonLd} />}
    </>
  );
}
