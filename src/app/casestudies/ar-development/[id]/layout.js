import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/ar-development";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "5": {
    title: "AR for a D2C Online Furniture Store",
    description:
      "Case study: HeyBuddy integrated augmented reality into a D2C furniture retailer's website to boost digital sales while keeping its brand value intact.",
  },
  "6": {
    title: "AR Virtual Try-On for an Apparel Brand",
    description:
      "Case study: an AR virtual try-on solution for a renowned apparel brand that improves the online shopping experience and helps reduce return rates.",
  },
};

const FALLBACK = {
  title: "AR Development Case Study",
  description:
    "HeyBuddy AR development case studies: augmented reality for a D2C furniture store and an AR virtual try-on solution for a renowned apparel brand.",
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
