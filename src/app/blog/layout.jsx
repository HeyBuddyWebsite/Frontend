import { pageMetadata } from "@/lib/seo";

// Also wraps /blog/[slug], whose generateMetadata sets its own title, canonical and OG tags.
export const metadata = pageMetadata({
  title: "Blog: AI, Metaverse & Immersive Tech Insights",
  description:
    "Stay updated with the latest in AI, metaverse, Web3 and immersive technology. Explore insightful articles and guides from the experts at HeyBuddy.",
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
