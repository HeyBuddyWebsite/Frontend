// Generated sitemap: every indexable route plus all published blog posts.
const SITE_URL = "https://www.heybuddy.co.in";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://email-backend.heybuddy.co.in";

export const revalidate = 3600;

const STATIC_ROUTES = [
  ["/", 1.0, "weekly"],
  ["/aboutus", 0.6, "monthly"],
  ["/contactus", 0.6, "yearly"],
  ["/blog", 0.8, "daily"],
  ["/casestudies", 0.7, "monthly"],
  ["/casestudies/ar-development", 0.5, "monthly"],
  ["/casestudies/cgidevelopment", 0.5, "monthly"],
  ["/services/ai-development", 0.9, "monthly"],
  ["/services/ai-ads", 0.9, "monthly"],
  ["/services/digital-marketing", 0.9, "monthly"],
  ["/services/game-development", 0.9, "monthly"],
  ["/services/ar-development", 0.9, "monthly"],
  ["/services/vr-development", 0.9, "monthly"],
  ["/services/vr-ar-lab", 0.9, "monthly"],
  ["/services/robotics-lab", 0.9, "monthly"],
  ["/services/metaverse", 0.9, "monthly"],
  ["/services/web3", 0.9, "monthly"],
  ["/services/3d-modeling", 0.9, "monthly"],
  ["/services/cgi", 0.9, "monthly"],
  ["/services/billboard", 0.9, "monthly"],
  ["/services/custom-software", 0.9, "monthly"],
];

// Case-study detail pages (ids match generateStaticParams in each route).
const CASE_STUDIES = {
  "3ddevelopment": ["1", "2", "3", "4"],
  AIcasestudy: ["9", "12"],
  "ar-development": ["5", "6"],
  cgidevelopment: ["7", "8"],
  "custom-software": ["16"],
  "game-development": ["13", "14", "15"],
  "vr-development": ["10", "11"],
};

async function getBlogEntries() {
  try {
    const res = await fetch(`${API_URL}/api/blogs?isExpand=false&page=1&limit=500`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (!json?.success || !Array.isArray(json.data)) return [];
    return json.data
      .filter((b) => b?.slug && (!b.status || b.status === "published"))
      .map((b) => ({
        url: `${SITE_URL}/blog/${b.slug}`,
        lastModified: new Date(b.updatedAt || b.publishedAt || b.createdAt || Date.now()),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();
  const pages = STATIC_ROUTES.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
  const cases = Object.entries(CASE_STUDIES).flatMap(([folder, ids]) =>
    ids.map((id) => ({
      url: `${SITE_URL}/casestudies/${folder}/${id}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    }))
  );
  return [...pages, ...cases, ...(await getBlogEntries())];
}
