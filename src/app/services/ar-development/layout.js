import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/ar-development";
const TITLE = "Augmented Reality (AR) Development Company";
const DESCRIPTION =
  "End-to-end augmented reality development: AR apps, Spark AR and Lens Studio experiences, and immersive AR solutions that help brands engage their audience.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/ardevelopmentcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What are Augmented Reality development services?",
    a: "AR development services create AR experiences that offer immersion. To explain, these experiences overlay digital 3D information or objects onto the real world. All you need is a smartphone.",
  },
  {
    q: "What kind of Augmented Reality services do you offer?",
    a: "We offer a wide range of AR development services for various industries. This includes concept ideation, design, software development, integration, testing, and deployment. Our Augmented reality applications offer a stable and enriched AR experience across various platforms.",
  },
  {
    q: "Can you help in the entire AR development lifecycle?",
    a: "HeyBuddy is one of the few AR development companies that provide end-to-end Augmented Reality services. Starting from initial consultation and concept creation to design, development, testing, deployment, and ongoing support for AR applications.",
  },
  {
    q: "What are the typical costs associated with AR development?",
    a: "Costs can vary based on project complexity, features, platforms, and the scope of work. We offer tailored pricing after understanding your project requirements during the initial consultation phase.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Augmented Reality Development", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Augmented Reality Development", path: PATH },
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
