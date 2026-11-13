// Shared SEO helpers for route layouts (server-only: no "use client").

export const SITE_URL = "https://www.heybuddy.co.in";
export const SITE_NAME = "HeyBuddy";
const ORG_ID = `${SITE_URL}/#organization`;
// Must match the root layout's title.template.
const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

// Child `openGraph` objects replace the root one wholesale, so the default
// share image and locale are repeated here to keep them on every route.
const DEFAULT_OG_IMAGES = [{ url: "/Images/logo.png", alt: SITE_NAME }];

const absoluteUrl = (path = "/") =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Route metadata with canonical, Open Graph and Twitter tags.
 * `title` is the page title WITHOUT the brand: the root template adds " | HeyBuddy".
 * `path` is the route path (relative); metadataBase in the root layout makes it absolute.
 * Set `hasChildRoutes` on layouts that wrap nested routes: a plain string title in a
 * layout drops the inherited template for everything below it, so re-declare it.
 */
export function pageMetadata({ title, description, path, robots, ogType = "website", hasChildRoutes = false }) {
  const metadata = {
    title: hasChildRoutes ? { default: title, template: TITLE_TEMPLATE } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: ogType,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: DEFAULT_OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
  if (robots) metadata.robots = robots;
  return metadata;
}

/** Renders a JSON-LD block. Plain <script> (not next/script) so it is in the server HTML. */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Wraps schema nodes in a single @graph document. */
export function ldGraph(...nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

/** BreadcrumbList from [{ name, path }], in order from Home to the current page. */
export function breadcrumbLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Service offered by the HeyBuddy organization (defined in the root layout). */
export function serviceLd({ name, description, path }) {
  const url = absoluteUrl(path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: "IN",
  };
}

/** FAQPage from [{ q, a }]. Text must match the FAQ copy visible on the page. */
export function faqLd(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
