import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/vr-development";
const TITLE = "Virtual Reality (VR) Development Company";
const DESCRIPTION =
  "VR development services for Oculus/Meta Quest, iOS and Android: training simulations, virtual tours and metaverse experiences in Unity and Unreal Engine 5.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/vrdevelopmentcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What expertise does Hey Buddy offer in VR development for Oculus?",
    a: "Hey Buddy specializes in Oculus VR development. We develop immersive experiences tailored for Oculus devices. We maximize the potential of virtual reality on Oculus platforms, creating applications that redefine user interactions and elevate immersive experiences.",
  },
  {
    q: "Does Hey Buddy provide VR development services for iOS and Android?",
    a: "Yes, we offer complete VR development services for both iOS and Android platforms, for maximum reach and ensuring seamless and captivating experiences across mobile devices.",
  },
  {
    q: "Can Hey Buddy assist in VR development for Metaverse?",
    a: "Hey Buddy excels in Metaverse VR development for all prominent platforms including Roblox, Decentralance, Sansaar, and more. We align our solution with the right creative and social aspects to meet the standard at Metaverse.",
  },
  {
    q: "Is there a VR development group at Hey Buddy for collaborative projects?",
    a: "Yes, Hey Buddy has a dedicated VR development group to foster collaboration and enable expertise-sharing for innovative and impactful VR projects.",
  },
  {
    q: "How does Hey Buddy approach VR development in Unity?",
    a: "Unity is a cornerstone in Hey Buddy's VR development. We utilize its robust framework for creating immersive experiences across various platforms. Moreover, Hey Buddy’s proficient team in Unity for VR development, delivers tailored solutions that harness the power of Unity's versatile development environment.",
  },
  {
    q: "Does Hey Buddy support VR development in Unreal Engine 5?",
    a: "Yes, We offer our adept VR development service using the powerful Unreal Engine 5. Its advanced features help us achieve high-fidelity and feature-packed virtual experiences.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Virtual Reality Development", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Virtual Reality Development", path: PATH },
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
