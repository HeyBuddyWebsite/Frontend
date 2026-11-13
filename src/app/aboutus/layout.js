import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

const PATH = "/aboutus";
const TITLE = "About Us | The Technology Buddy You Need";
const DESCRIPTION =
  "Meet HeyBuddy, the tech partner founded by Avdhesh and Kapil to fix poor collaboration in IT services. Learn our story and our focus on timely delivery.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const jsonLd = {
  "@context": "https://schema.org",
  ...breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: PATH },
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
