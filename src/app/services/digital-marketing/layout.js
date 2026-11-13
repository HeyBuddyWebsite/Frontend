import { JsonLd, breadcrumbLd, faqLd, ldGraph, pageMetadata, serviceLd } from "@/lib/seo";

const PATH = "/services/digital-marketing";
const TITLE = "Creative Digital Marketing Services in India";
const DESCRIPTION =
  "Data-driven creative digital marketing: SEO, performance marketing, social media, influencer campaigns, AI advertising and CGI ad production to grow your brand.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Copied verbatim from src/components/servicescomp/digitalmarketingcomp/Section10.jsx.
// FAQ schema must match the visible text: update both together.
const FAQS = [
  {
    q: "What types of businesses can benefit from Hey Buddy's digital marketing services?",
    a: "Our services cater to startups, SMEs, enterprises, and niche brands across industries like real estate, e-commerce, gaming, logistics, and tech. Whether you need SEO, PPC, content marketing, or social media advertising, we tailor strategies for your goals.",
  },
  {
    q: "How long does it take to see results from digital marketing campaigns?",
    a: "Timelines vary based on the campaign type and objectives. SEO campaigns often show results within 3–6 months, while PPC ads, paid campaigns, and social media promotions can generate leads and traffic almost instantly.",
  },
  {
    q: "Can I track the ROI of my digital marketing investment?",
    a: "Absolutely. We believe in data-driven digital marketing. Our team uses analytics tools, conversion tracking, and KPI dashboards to provide complete transparency, showing you how each strategy impacts your bottom line.",
  },
  {
    q: "How does Hey Buddy ensure security and confidentiality of client data?",
    a: "We follow industry-best security practices, comply with data protection laws, and ensure all projects are handled with utmost confidentiality. Your business insights, campaign data, and client information are always secure with us.",
  },
  {
    q: "What makes Hey Buddy different from other digital marketing agencies?",
    a: "Unlike generic agencies, we combine creative innovation with technical expertise in Web3, AR/VR, AI-driven marketing, and enterprise solutions. Our focus on customized strategies, advanced tools, and measurable outcomes ensures superior results.",
  },
  {
    q: "Do you offer digital marketing for international brands or location-based businesses?",
    a: "Yes. We specialize in location-based SEO, Google My Business optimization, and international SEO campaigns. Whether you're targeting local leads in Gurugram or scaling globally, we build strategies to maximize reach.",
  },
  {
    q: "Can you integrate digital marketing with my existing business software?",
    a: "Yes. Hey Buddy excels in custom enterprise solutions including CRM, ERP, and marketing automation platforms to streamline campaigns and maximize efficiency.",
  },
  {
    q: "Do you provide flexible engagement models for digital marketing?",
    a: "We offer retainer-based, project-based, and performance-based pricing models to meet your budget and business goals, ensuring cost-effectiveness without compromising on quality.",
  },
];

const jsonLd = ldGraph(
  serviceLd({ name: "Digital Marketing Services", description: DESCRIPTION, path: PATH }),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Digital Marketing Services", path: PATH },
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
