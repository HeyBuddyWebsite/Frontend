import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/vr-ar-lab";
const TITLE = "VR & AR Lab Setup for Immersive Education";
const DESCRIPTION =
  "Turnkey VR and AR lab setup for schools: standalone headsets, mixed reality, grade-wise immersive content, teacher training and support after installation.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/vrarlab/FAQSection.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What is an AR/VR Lab for Schools?",
    a: "An AR/VR lab is a dedicated, high-tech learning environment equipped with Augmented Reality (AR) and Virtual Reality (VR) hardware and software. It allows students to interact with complex 3D models and immersive simulations, transforming abstract concepts into tangible experiences.",
  },
  {
    q: "What is included in a VR lab setup in school?",
    a: "Our comprehensive setup includes enterprise-grade HMDs, built-in Mobile Device Management (MDM), and pre-loaded educational content. Additionally, we provide teacher training, a graded progressive curriculum, and a 24x7 subscription-based LMS.",
  },
  {
    q: "Do we need to provide separate space for an AR & VR Lab?",
    a: "Yes, a dedicated space is recommended to ensure student safety and equipment longevity. We provide spatial mapping services to optimize areas between 500–1,200 sq. ft., ensuring a \"safety-first\" layout.",
  },
  {
    q: "Are there any prerequisites for teachers?",
    a: "No prior technical expertise is required. We provide \"End-Mile Delivery\" support, which includes hands-on faculty empowerment workshops. Our operating system is designed for educational focus, making it intuitive for teachers.",
  },
  {
    q: "Does the VR lab require continuous internet connectivity?",
    a: "No. Our hardware is engineered for efficient offline usage. While the internet is needed for initial setup and syncing data to the LMS, students can run simulations locally, ensuring zero downtime.",
  },
  {
    q: "What support do you provide after installation?",
    a: "We offer comprehensive \"End-Mile Delivery\" support, which includes regular software and curriculum updates, hardware maintenance, and ongoing faculty training to ensure your lab remains fully operational.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "VR/AR Lab Setup", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "VR/AR Lab Setup", path: PATH },
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
