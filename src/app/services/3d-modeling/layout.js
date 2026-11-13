import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/3d-modeling";
const TITLE = "3D Modelling Services for Games, VR & CGI";
const DESCRIPTION =
  "High-quality 3D modelling services for games, AR/VR, CGI, animation and product visualisation. Custom 3D assets built for your project, on time and on budget.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/3dmodelingcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What types of projects can benefit from Hey Buddy's 3D modelling services?",
    a: "Hey Buddy's 3D modelling services contribute to a wide range of projects, including AR/VR, animations, CGI, product visualizations, product animations, and game development using Unity and Unreal Engine.",
  },
  {
    q: "How does Hey Buddy ensure the security and confidentiality of client projects?",
    a: "We prioritize client confidentiality and security through robust measures, including signed NDAs, restricted access to project data, and secure file transfer protocols.",
  },
  {
    q: "What is the typical turnaround time for 3D modelling projects at Hey Buddy?",
    a: "Turnaround times vary based on project complexity and scope. However, we strive for efficient timelines, ensuring timely deliveries without compromising quality.",
  },
  {
    q: "What is Unity 3D development, and how can it benefit my Games or interactive project?",
    a: "Unity 3D development involves creating interactive experiences, primarily in Games. It offers a versatile platform for developing immersive games and applications across multiple platforms.",
  },
  {
    q: "Can clients provide input during the 3D modelling process, and how is feedback handled?",
    a: "Yes, client input is encouraged. We have a collaborative approach, with dedicated points for client feedback. Revisions are made based on client suggestions to ensure the final product aligns with their vision.",
  },
  {
    q: "What sets Hey Buddy apart from other 3D modelling service providers?",
    a: "Hey Buddy stands out due to its comprehensive suite of services covering various industries, a transparent and collaborative workflow, a client-centric approach, and a commitment to delivering high-quality, visually impressive 3D assets.",
  },
  {
    q: "Does Hey Buddy provide Unity 3D development services, and what types of projects can be developed using Unity?",
    a: "Yes, Hey Buddy offers Unity 3D development services. Projects developed using Unity include games, simulations, virtual tours, training applications, and various interactive experiences across diverse industries.",
  },
  {
    q: "What is hard surface modelling, and how does it differ from other 3D modelling techniques?",
    a: "Hard surface modelling focuses on creating detailed 3D models of inanimate objects or structures, differing from organic modelling that emphasizes natural forms like characters or creatures.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "3D Modelling Services", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "3D Modelling Services", path: PATH },
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
