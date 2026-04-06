import React from "react";
import { getBlogBySlug } from "@/services/blogApi";
import DynamicBlogContent from "@/components/Blog/DynamicBlogContent";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;
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
    title: title,
    description: description,
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

async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="mx-auto px-5 lg:px-0 bg-no-repeat bg-contain bg-top">
      <DynamicBlogContent blog={blog} />
    </section>
  );
}

export default BlogPage;


