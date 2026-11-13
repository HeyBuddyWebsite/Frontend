import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/AIcasestudy";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "9": {
    title: "Servi: AI Voice Assistant for Restaurant Bookings",
    description:
      "Case study: HeyBuddy trained and deployed Servi, a voice-activated AI assistant using NLP to streamline restaurant bookings and the dining experience.",
  },
  "12": {
    title: "AI Matchmaking App for Data-Driven Connections",
    description:
      "Case study: an AI-infused matchmaking app for a startup that connects people on shared interests, values and personality traits while protecting privacy.",
  },
};

const FALLBACK = {
  title: "AI Development Case Study",
  description:
    "HeyBuddy AI development case studies: a voice-activated restaurant booking assistant and an AI-infused matchmaking app built for real users.",
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
