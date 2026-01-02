"use client";
import React, { useEffect, useState } from "react";
import { getBlogBySlug } from "@/services/blogApi";
import DynamicBlogContent from "@/components/Blog/DynamicBlogContent";
import { useParams } from "next/navigation";

function BlogPage() {
  const params = useParams();
  const slug = params.slug;
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const blogData = await getBlogBySlug(slug);
        if (blogData) {
          setBlog(blogData);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading blog...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Blog not found</p>
      </div>
    );
  }

  return (
    <section className="mx-auto px-5 lg:px-0 bg-no-repeat bg-contain bg-top">
      <DynamicBlogContent blog={blog} />
    </section>
  );
}

export default BlogPage;

