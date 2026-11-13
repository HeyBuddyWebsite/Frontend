import { pageMetadata } from "@/lib/seo";

const PATH = "/casestudies/ar-development";
const TITLE = "AR Development Case Studies";
const DESCRIPTION =
  "AR development case studies: augmented reality for a D2C online furniture store and an AR virtual try-on for an apparel brand. See how HeyBuddy did it.";

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
