import { pageMetadata } from "@/lib/seo";

const PATH = "/contact-ads";
const TITLE = "Grow Your Brand With Creative Marketing";
const DESCRIPTION =
  "We turn your name into a brand people remember and buy from. Get more reach, trust and sales with creative digital marketing from HeyBuddy. Let's talk.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  robots: { index: false, follow: false },
});

// Paid-ads landing page: kept out of the index.
export default function Layout({ children }) {
  return <>{children}</>;
}
