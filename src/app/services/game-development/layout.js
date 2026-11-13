import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/game-development";
const TITLE = "Game Development Company in India";
const DESCRIPTION =
  "Full-cycle game development and co-development from India: Unity and Unreal Engine games, mobile and metaverse games, plus post-launch support and live ops.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/game-developmentcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "Is Hey Buddy a game development company in India?",
    a: "Yes, Hey Buddy is a leading game development company based in India. They are known for offering innovative gaming solutions and top AI-integration services. cutting-edge game development expertise.",
  },
  {
    q: "Does Hey Buddy specialize in metaverse game development?",
    a: "Absolutely! Hey Buddy is counted as a leading metaverse game development company. They craft immersive digital experiences that take users into a completely different reality,",
  },
  {
    q: "Is Hey Buddy a mobile game development company?",
    a: "Yes, Hey Buddy also offers mobile game development services. They develop games for all platforms from iOS to Android.",
  },
  {
    q: "Is Hey Buddy a Unity game development company?",
    a: "Indeed! Hey Buddy leverages the power of Unity to deliver exceptional gaming products, They use Unity to ensure seamless and high-quality gaming experiences.",
  },
  {
    q: "Can Hey Buddy be considered a game app development company?",
    a: "Of course! Hey Buddy is your go-to game app development company. We bring your app ideas to life with our years of game development experience.",
  },
  {
    q: "Is Hey Buddy a Unreal game development company?",
    a: "Indeed! Hey Buddy leverages the power of Unreal Engine to deliver exceptional gaming products, They use Unreal Engine to ensure seamless and high-quality gaming experiences.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Game Development Services", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Game Development Services", path: PATH },
  ]),
  faqLd(FAQS)
);

export default function Layout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={jsonLd} />
    </>
  );
}
