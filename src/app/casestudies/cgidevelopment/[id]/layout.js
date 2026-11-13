import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/cgidevelopment";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "7": {
    title: "CGI Product Visuals for a D2C Furniture Brand",
    description:
      "Case study: lifelike CGI visuals across thousands of products for a leading D2C furniture brand, helping shoppers decide faster with consistent quality.",
  },
  "8": {
    title: "Ultra-Realistic CGI for Media Storytelling",
    description:
      "Case study: a CGI pipeline blending live-action footage with 3D environments and characters to deliver immersive storytelling for a prominent media brand.",
  },
};

const FALLBACK = {
  title: "CGI Development Case Study",
  description:
    "HeyBuddy CGI case studies: lifelike CGI product visuals for a D2C furniture brand and ultra-realistic CGI storytelling for a media brand.",
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
