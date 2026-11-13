import { pageMetadata } from "@/lib/seo";

const PATH = "/casestudies";
const TITLE = "Case Studies | AI, AR/VR, CGI & Game Projects";
const DESCRIPTION =
  "Explore HeyBuddy case studies across 3D, AR, VR, CGI, AI, gaming and custom software, and see how we solved real challenges for brands and studios.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  hasChildRoutes: true,
});

// No breadcrumb JSON-LD here: this layout also wraps nested case-study routes,
// which render their own breadcrumbs.
export default function Layout({ children }) {
  return <>{children}</>;
}
