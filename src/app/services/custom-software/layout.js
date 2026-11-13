import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/custom-software";
const TITLE = "Custom Software Development Company in India";
const DESCRIPTION =
  "Custom software development in India: secure, scalable web apps, mobile apps, ERP and CRM solutions built around your requirements, budget and timeline.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/customsoftwarecomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "Why choose Hey Buddy as a custom software development firm?",
    a: "We stand out for our ability to listen and understand your specific requirements. Since we understand better, our experts deliver the best. The best custom software development services in India and the US.",
  },
  {
    q: "How can Hey Buddy assist with custom software development in India?",
    a: "Hey Buddy’s custom software development services in India, cater to diverse business needs. We design solutions quality solutions in your budget.",
  },
  {
    q: "What sets Hey Buddy apart in custom software application development?",
    a: "Our abilities to understand, and deliver quality, adaptability, flexibility, and cost-effectiveness in custom software application development sets us apart.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Custom Software Development", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Custom Software Development", path: PATH },
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
