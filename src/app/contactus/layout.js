import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const PATH = "/contactus";
const TITLE = "Contact Us | Start Your Project";
const DESCRIPTION =
  "Have a great idea? Contact HeyBuddy to discuss your AI, AR/VR, metaverse, game development, CGI, Web3 or custom software project and get started.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const jsonLd = {
  "@context": "https://schema.org",
  ...breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: PATH },
  ]),
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={jsonLd} />
    </>
  );
}
