import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/metaverse";
const TITLE = "Metaverse Development Company & Solutions";
const DESCRIPTION =
  "Metaverse development services: scalable, custom virtual worlds, immersive 3D experiences and blockchain-enabled metaverse solutions for brands and businesses.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/metaversecom/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What criteria should I consider to choosing the top metaverse development companies for my project?",
    a: "To identify the best metaverse development companies, consider the following factors: Their expertise in immersive technologies, Portfolio showcasing successful projects, client reviews, and their proficiency in integrating advanced solutions. Evaluating these aspects will help you find a top-notch metaverse development company that aligns with your project goals.",
  },
  {
    q: "What distinguishes the top 10 metaverse development solutions from others in the market?",
    a: "The top 10 metaverse development solutions are characterized by their versatility, scalability, and seamless integration capabilities. These solutions empower businesses to create immersive experiences effortlessly, offering a comprehensive toolkit for diverse metaverse applications, from virtual events to interactive training programs.",
  },
  {
    q: "Which metaverse development software is considered the best for creating interactive and engaging virtual experiences?",
    a: "Choosing the best metaverse development software depends on your specific needs. Unity, a top-rated platform, is widely recognized for its versatility, user-friendly interface, and extensive library of assets. It stands out as one of the best choices for crafting immersive metaverse applications.",
  },
  {
    q: "What defines a top metaverse development studio, and how do I choose the best one for my project?",
    a: "A top metaverse development studio excels in creativity, technical expertise, and successful project deliveries. When selecting a studio, assess their portfolio, client testimonials, and the diversity of their projects. Studios like [TopStudio] stand out for their innovative approach and proven track record in metaverse development.",
  },
  {
    q: "Why is Unity considered a top choice for metaverse development, and what advantages does it offer?",
    a: "Unity is a top choice for metaverse development due to its robust features, cross-platform compatibility, and extensive community support. It ranks among the best platforms for creating immersive experiences, making it an ideal choice for developers and businesses venturing into the metaverse landscape.",
  },
  {
    q: "How does blockchain technology contribute to metaverse development, and which companies are at the forefront of integrating it?",
    a: "Blockchain plays a pivotal role in securing transactions and enhancing virtual economies within the metaverse. Companies like Hey Buddy are at the forefront of metaverse development, leveraging blockchain for secure and transparent virtual transactions, providing a seamless user experience.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Metaverse Development", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Metaverse Development", path: PATH },
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
