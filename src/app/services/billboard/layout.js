import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/billboard";
const TITLE = "3D Billboard Advertising & Anamorphic Ads";
const DESCRIPTION =
  "Stop people in their tracks with 3D billboard advertising. We create eye-catching anamorphic and three-dimensional billboard ads that lift brand visibility.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/billboardcom/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What makes a 3D billboard different from traditional advertising?",
    a: "3D billboards go beyond static visuals. They create a three-dimensional visual experience and users do not need any additional visual aid to see them. This makes the visuals appear as if they are happening in reality merging seamlessly with the environment around them. Thus, the way these billboards engage audiences, people, and businesses is going crazy with dynamic content that leaves a lasting impression.",
  },
  {
    q: "What advantages do 3D ad billboards offer over traditional ads?",
    a: "3D ad billboards provide a phenomenally engaging and impactful way to convey your brand message. Unlike traditional ads, they showcase content that merges with users' reality and communicates on deeper cognitive levels.",
  },
  {
    q: "Why 3D ad billboards?",
    a: "3D ad billboards provide a unique, and impactful way to convey your brand message. The depth and realism of 3D graphics capture passersby's attention, making them stop and get captivated by the visuals. 3D billboard ads enhance brand recall and create a memorable brand interaction for the audience.",
  },
  {
    q: "Why should I choose a professional 3D billboard development company?",
    a: "Professional 3D billboard development companies utilize the latest tools and techniques to create anamorphic videos meant to be displayed on curved anamorphic screens. A billboard development company, like Hey Buddy, makes sure that your vision is impeccably translated into a captivating and effective 3D billboard.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "3D Billboard Advertising", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "3D Billboard Advertising", path: PATH },
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
