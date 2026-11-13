import React from "react";
import { getBlogBySlug } from "@/services/blogApi";
import DynamicBlogContent from "@/components/Blog/DynamicBlogContent";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.heybuddy.co.in";

export const revalidate = 600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | HeyBuddy",
      description: "The requested blog post could not be found.",
    };
  }

  const baseUrl = "https://www.heybuddy.co.in";
  const url = `${baseUrl}/blog/${slug}`;
  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.subtitle || blog.description;

  return {
    // Post titles are already full SEO titles; don't append the site suffix.
    title: { absolute: title },
    description: description,
    keywords: Array.isArray(blog.metaTags) && blog.metaTags.length ? blog.metaTags : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: "article",
      images: [
        {
          url: blog.coverImage,
          alt: blog.coverImageAlt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [blog.coverImage],
    },
  };
}

function blogJsonLd(blog, slug) {
  const url = `${SITE_URL}/blog/${slug}`;
  const image = [blog.bannerImage, blog.coverImage].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: (blog.title || "").slice(0, 110),
        description: blog.metaDescription || blog.description || blog.subtitle || undefined,
        image: image.length ? image : undefined,
        datePublished: blog.publishedDate || blog.createdAt || undefined,
        dateModified: blog.updatedAt || blog.publishedDate || blog.createdAt || undefined,
        author:
          blog.author && blog.author !== "Admin"
            ? { "@type": "Person", name: blog.author }
            : { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "HeyBuddy" },
        publisher: { "@id": `${SITE_URL}/#organization` },
        articleSection: typeof blog.category === "object" ? blog.category?.name : blog.category || undefined,
        keywords: Array.isArray(blog.metaTags) && blog.metaTags.length ? blog.metaTags.join(", ") : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: blog.title, item: url },
        ],
      },
    ],
  };
}

async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="mx-auto px-5 lg:px-0 bg-no-repeat bg-contain bg-top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd(blog, slug)).replace(/</g, "\\u003c") }}
      />
      <DynamicBlogContent blog={blog} />
    </section>
  );
}

export default BlogPage;


