import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/robotics-lab";
const TITLE = "Robotics Lab Setup for Schools in India";
const DESCRIPTION =
  "Robotics lab setup for schools and universities: custom lab design, NEP-aligned K-12 curriculum, AI-integrated robotics kits and hands-on teacher training.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/roboticslabcomp/FAQSection.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What age groups is the robotics lab suitable for?",
    a: "Our robotics solutions cater to K-12 and higher education. We have simple block-based kits for primary students, intermediate mechanic kits for middle school, and advanced AI/ROS robots for high school and university students.",
  },
  {
    q: "Do you provide training for teachers?",
    a: "Yes, absolutely. We believe the teacher is the key to a successful lab. We provide comprehensive, hands-on faculty development programs to ensure they are confident in teaching the curriculum and using the equipment.",
  },
  {
    q: "How much space is needed for a robotics lab?",
    a: "A standard classroom size (approx 600-800 sq ft) is usually sufficient for a batch of 30 students. We design the layout to include workstations, a central testing arena, and storage units within the available space.",
  },
  {
    q: "Do you help with competitions?",
    a: "Yes! Our curriculum and kits are aligned with major national and international robotics competitions. We provide mentorship and specific training tracks to help your school's team succeed on the global stage.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Robotics Lab Setup", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Robotics Lab Setup", path: PATH },
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
