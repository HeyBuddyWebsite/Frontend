import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/3ddevelopment";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "1": {
    title: "3D CT Scanner Animation for Airport Security",
    description:
      "Case study: HeyBuddy's 3D team created a hyper-realistic animated video showcasing a UAE manufacturer's innovative CT scanner for airport security.",
  },
  "2": {
    title: "AAA 3D Characters for a Korean Film Studio",
    description:
      "Case study: designing AAA-quality artistic 3D characters for a well-known Korean film studio's upcoming short film, true to its theme and culture.",
  },
  "3": {
    title: "Hollywood-Style Semi-Realistic 3D Game Characters",
    description:
      "Case study: Hollywood-styled, semi-realistic 3D gaming characters with meticulous 4K detail for a popular publisher of AAA and indie games.",
  },
  "4": {
    title: "AAA 3D Characters for a Gaming Project",
    description:
      "Case study: HeyBuddy matched a gaming powerhouse's in-house skills and delivered AAA 3D characters for its next 3D game development project.",
  },
};

const FALLBACK = {
  title: "3D Development Case Study",
  description:
    "HeyBuddy 3D development case studies: AAA 3D characters and hyper-realistic 3D animation for film studios, game publishers and product brands.",
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
