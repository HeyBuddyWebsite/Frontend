import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/web3";
const TITLE = "Web3 Development Company | Blockchain & dApps";
const DESCRIPTION =
  "Web3 development services: blockchain development, dApps, DeFi ecosystems and secure, interactive Web 3.0 solutions delivered within agreed timelines.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/web3developmentcom/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "Who is leading Web3 development in the USA?",
    a: "Hey Buddy has been a trusted name and recognized as the best Web3 development company in the USA. With a proven track record and innovative solutions, they lead the charge in decentralized technologies.",
  },
  {
    q: "What does a Web3 developer do?",
    a: "A Web3 developer specializes in implementing advanced Web3 technologies such as smart contract development, blockchain to create decentralized applications (DApps). These app stand out for operating without a central authority, utilising self-executing code for automated processes, record transaction on a blockchain for tamper-proof records, user control and ownership over their data and interoperability.",
  },
  {
    q: "What is a Web3 company?",
    a: "Referring to Hey Buddy, a top Web3 development company in the USA, it offers comprehensive services encompassing blockchain, smart contracts, and decentralized applications.",
  },
  {
    q: "Is a Web3 developer in demand?",
    a: "Yes! Given the rise of decentralized technologies, the demand for Web3 developers is soaring. Companies, especially those seeking the best Web3 development company in the USA, recognize the crucial role these developers play in creating the next generation of digital solutions.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Web3 Development", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Web3 Development", path: PATH },
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
