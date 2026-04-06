"use client";
import "../../styles/Font.css";
import BlogCard from "@/components/blogComponents/BlogCard";
import React, { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import { getAllBlogs, getAllCategories } from "@/services/blogApi";

const hardcodedCategories = [
  { name: "Development", slug: "development", color: "#3B82F6", order: 1 },
  { name: "AI", slug: "ai", color: "#8B5CF6", order: 2 },
  { name: "Games", slug: "games", color: "#10B981", order: 3 },
  { name: "CGI", slug: "cgi", color: "#F59E0B", order: 4 },
  { name: "AR", slug: "ar", color: "#EF4444", order: 5 },
];

const page = () => {
  const [category, setCategory] = useState("");
  const [apiBlogs, setApiBlogs] = useState([]);
  const [apiCategories, setApiCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [blogs, categories] = await Promise.all([
          getAllBlogs(),
          getAllCategories(),
        ]);
        setApiBlogs(Array.isArray(blogs) ? blogs : []);
        setApiCategories(Array.isArray(categories) ? categories : []);
      } catch (error) {
        console.error("Error loading blogs or categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const allBlogs = apiBlogs.map((blog) => ({
    category: blog.category || "Development",
    id: blog._id,
    name: blog.slug,
    img: blog.coverImage,
    imgAlt: blog.coverImageAlt || blog.title,
    title: blog.title,
    summary: blog.description || blog.subtitle,
    isApiDriven: true,
  }));

  const allCategories = [...hardcodedCategories];
  const hardcodedNames = hardcodedCategories.map((cat) =>
    cat.name.toLowerCase()
  );

  apiCategories.forEach((cat) => {
    if (!cat?.name || cat.name === "Digital Marketing") {
      return;
    }

    if (!hardcodedNames.includes(cat.name.toLowerCase())) {
      allCategories.push({
        name: cat.name,
        slug: cat.slug || cat._id || cat.name.toLowerCase(),
        color: cat.color || "#6B7280",
        order: typeof cat.order === "number" ? cat.order : 999,
        blogCount: cat.blogCount || 0,
      });
    }
  });

  allCategories.sort((a, b) => a.order - b.order);

  const toggleCategory = (categ) => {
    setCategory(categ);
  };

  return (
    <div className="blogsContainer">
      <div className="readOurBlog">
        <p className="text-[4vw] font-semibold">Read Our Blog</p>
        <p className="text-[2vw] w-[65vw]">
          Blog posts are typically written by HeyBuddy and other contributors.
          Be ready to be immersed with this Tech World
        </p>
      </div>
      <Image
        loading="lazy"
        width={10}
        height={450}
        className="read-blog-svg"
        alt="No-img"
        src="/read-blog.svg"
      />

      <div className="blogsWithCategories">
        <div className="blogCategories ">
          <p className="text-white font-bold text-normal md:text-[2vw]  ">
            Blog Posts
          </p>
          <div className=" flex justify-between -gap-y-2 w-[80%] flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold">
            <button
              onClick={() => toggleCategory("")}
              className={category === "" ? "tab active-tab" : "tab"}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => toggleCategory(cat.name)}
                className={category === cat.name ? "tab active-tab" : "tab"}
                style={{
                  borderColor: category === cat.name ? cat.color : "transparent",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="allBlogs  mx-auto">
          {loading && <p className="text-white text-center">Loading blogs...</p>}

          {!loading &&
            (category === ""
              ? allBlogs.map((blog, index) => (
                <BlogCard key={blog.id || index} {...blog} />
              ))
              : allBlogs
                .filter((blog) => blog.category === category)
                .map((blog, index) => (
                  <BlogCard key={blog.id || index} {...blog} />
                )))}
        </div>
      </div>
    </div>
  );
};

export default page;
