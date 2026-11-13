import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/ai-development";
const TITLE = "AI Development Company | Custom AI Solutions";
const DESCRIPTION =
  "Production-ready AI development services: custom AI and ML software, LLM and NLP solutions, enterprise chatbots and AI agents that integrate with your stack.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/aidevelopmentcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What sets apart an AI development company from other software firms?",
    a: "An AI development company like Hey Buddy specializes in creating advanced business solutions using artificial intelligence technologies. Unlike general software firms, they focus specifically on utilizing the power of AI to deliver innovative and intelligent applications.",
  },
  {
    q: "How can I find reliable AI development services for my project?",
    a: "To find reliable AI development services, conduct thorough research, look for the project they delivered, and their clientele, review different platforms, and review their portfolio. Fix a meeting, and ask them about the AI software development process and how they collaborate with their clients for projects to guarantee the success of your project.",
  },
  {
    q: "Are there specialized AI development companies in India that focus on machine learning?",
    a: "Yes, there are several AI or machine learning development companies in India specializing in the domain. Machine learning is basically a sub-set of AI and these companies utilize their AI expertise to achieve exactly that. Hey Buddy’s artificial intelligence development services lay a specific focus on machine learning to develop ML solutions that perfectly match your requirements.",
  },
  {
    q: "Can you recommend an experienced AI app development company for creating cutting-edge solutions?",
    a: "Certainly! If you're looking for an experienced AI app development company, Hey Buddy. We specialize in developing sophisticated and robust applications, and our team of expert AI ML developers delivers innovative and high-performance solutions. So if you are looking for an AI ML company, Hey Buddy is the name you should trust.",
  },
  {
    q: "What is the difference between AI, ML and DL?",
    a: "Artificial Intelligence: Machines doing smart things. Machine Learning: Machines learning from experience. Deep Learning: Machines learning from deep, layered neural network",
  },
  {
    q: "What benefits does an AI solutions company bring to businesses seeking technological advancements?",
    a: "An AI solutions company brings various benefits, including customized AI solutions. They help businesses capitalize on this amazing technology to augment their efficiency, power decision-making processes, and stay way ahead of the competition in the cut-throat market.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "AI Development Services", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "AI Development Services", path: PATH },
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
