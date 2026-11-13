import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/cgi";
const TITLE = "CGI Company | Hyper-Realistic CGI & VFX";
const DESCRIPTION =
  "Hyper-realistic CGI and visual effects for brands and entertainment: photorealistic 3D modelling, cinematic VFX and compositing, CGI ads and product visuals.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/cgidevelopmentcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What is a CGI company?",
    a: "A CGI company specializes in creating visuals using computer graphics and offers services such as 3D modeling, animation, visual effects, and virtual reality. These services are used by businesses across industries, including entertainment, advertising, and simulation.",
  },
  {
    q: "How do CGI production companies contribute to the film and entertainment industry?",
    a: "CGI production companies play a pivotal role in film and entertainment. They produce high-quality visual effects, animations, and computer-generated sequences. This way, they bring imaginative and realistic visuals to the screen to captivate the viewers and deliver an enchanting cinematic experience.",
  },
  {
    q: "What services are offered by CGI agencies?",
    a: "CGI agencies specialize in providing computer-generated imagery solutions. This includes 3D visualization, animation, and virtual experiences.",
  },
  {
    q: "How does a 3D CGI Company differ from traditional creative agencies?",
    a: "Unlike traditional creative agencies, CGI agencies focus on the technical aspects of visual content creation, thereby delivering realistic and impactful visuals for every business requirement, be it marketing or training.",
  },
  {
    q: "How does CGI technology work?",
    a: "CGI technology involves the use of computer software and algorithms to create realistic and appealing images to captivate viewers. This also includes animations, i.e., infusing life into 3D models with movements. Recent advancements in CGI technology include real-time rendering, improved physics simulations, and the integration of artificial intelligence. This enhances the efficiency and quality of CGI production and makes them highly useful for various applications, from movies to virtual experiences.",
  },
  {
    q: "What is CGI packaging? And what benefits does it offer to product presentation?",
    a: "CGI packaging involves creating ultra-realistic and visually mesmerising 3D digital product representations of an actual product. This involved using computer-generated imagery, which allows companies to showcase products in various scenarios and designs for impactful marketing, flexible prototyping, and captivating visualization for packaging solutions.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "CGI & Visual Effects Services", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "CGI & Visual Effects Services", path: PATH },
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
