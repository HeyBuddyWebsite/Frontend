import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/vr-development";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "10": {
    title: "VR Property Tours App for Real Estate",
    description:
      "Case study: HeyBuddy upgraded a real estate app with VR tours for remote property viewing, improving stability, hyper-realism and interactivity.",
  },
  "11": {
    title: "Immersive VR Architectural Visualization",
    description:
      "Case study: an immersive VR architectural visualization platform for a large architecture firm, improving design communication beyond 2D renderings.",
  },
};

const FALLBACK = {
  title: "VR Development Case Study",
  description:
    "HeyBuddy VR development case studies: a VR property tours app for real estate and immersive VR architectural visualization for an architecture firm.",
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
