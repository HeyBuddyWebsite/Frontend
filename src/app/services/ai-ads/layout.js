import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/ai-ads";
const TITLE = "AI Ads Creative Services & AI Video Ads";
const DESCRIPTION =
  "AI ads creative services for brands: next-gen AI video ads, personalised Facebook and Google ad creatives, AI voiceovers and multi-format ads built for ROI.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/aiadscomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What types of AI ad creatives do you create?",
    a: "We specialize in a wide range of AI-generated ad creatives, including product-centric demo videos, UGC-style ads, short-form social media videos, multi-format video delivery, and AI-generated hook & caption variations. We also provide AI voiceovers and subtitles for enhanced reach and accessibility.",
  },
  {
    q: "How does AI improve ad creative effectiveness?",
    a: "AI uses data-driven insights and generative algorithms to create personalized and optimized ad content that resonates with your target audience, improves engagement, and maximizes ROI.",
  },
  {
    q: "Can you customize AI ads to fit my brand and campaign goals?",
    a: "Absolutely! Our AI ads creative services are fully customizable to align with your brand identity, marketing objectives, and target audience preferences.",
  },
  {
    q: "Which advertising platforms do your AI creatives support?",
    a: "We create AI ad creatives optimized for major digital advertising platforms including Facebook, Instagram, Google Ads, LinkedIn, and more.",
  },
  {
    q: "How quickly can I expect to see results from AI-generated ads?",
    a: "Results vary depending on the campaign type and target audience, but AI-optimized ads typically achieve faster engagement and improved conversion rates due to their personalized and data-driven nature.",
  },
  {
    q: "Do you provide support for ad campaign performance analysis?",
    a: "While our primary focus is on AI ad creative development, we can collaborate with your marketing team or provide insights to help optimize your campaign performance over time.",
  },
  {
    q: "Is AI advertising suitable for small businesses?",
    a: "Yes, AI ads are highly beneficial for small businesses, allowing you to compete effectively with personalized, scalable, and budget-friendly ad creatives.",
  },
  {
    q: "How do AI voiceovers and subtitles enhance my ad campaigns?",
    a: "AI-generated voiceovers and subtitles improve accessibility, cater to diverse audiences, and increase viewer engagement by making your ads easier to understand and more inclusive across different languages and hearing abilities.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "AI Ads Creative Services", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "AI Ads Creative Services", path: PATH },
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
