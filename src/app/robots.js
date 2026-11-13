export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://www.heybuddy.co.in/sitemap.xml",
    host: "https://www.heybuddy.co.in",
  };
}
