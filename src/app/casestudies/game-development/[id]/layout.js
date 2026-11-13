import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const BASE_PATH = "/casestudies/game-development";

// One entry per case study in ./page.jsx (keyed by its data id).
const CASE_STUDIES = {
  "13": {
    title: "Multiplayer Game UI & Graphics for a Gaming Hub",
    description:
      "Case study: high-quality graphics and a captivating app interface for a leading gaming hub's multiplayer game, built for hyper engagement.",
  },
  "14": {
    title: "AI-Powered Duel Game Built With Unreal Engine",
    description:
      "Case study: AI integration and visually stunning gameplay for a one-on-one duel game in Unreal Engine, with smart, adaptive and dynamic game mechanics.",
  },
  "15": {
    title: "Cross-Platform Action-Adventure Game Case Study",
    description:
      "Case study: HeyBuddy co-developed an ambitious cross-platform action-adventure game with a renowned studio, delivering a stunning, immersive experience.",
  },
};

const FALLBACK = {
  title: "Game Development Case Study",
  description:
    "HeyBuddy game development case studies: multiplayer game graphics, an AI-powered Unreal Engine duel game and a cross-platform action-adventure title.",
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
