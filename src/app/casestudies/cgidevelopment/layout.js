import { pageMetadata } from "@/lib/seo";

const PATH = "/casestudies/cgidevelopment";
const TITLE = "CGI Development Case Studies";
const DESCRIPTION =
  "CGI case studies: lifelike product visuals for a D2C furniture brand and ultra-realistic CGI storytelling for a media brand. See how HeyBuddy did it.";

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
