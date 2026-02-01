"use client";
import "../../styles/Font.css";
import BlogCard from "@/components/blogComponents/BlogCard";
import React, { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import { getAllBlogs, getAllCategories } from "@/services/blogApi";

const blogsArray = [
  {
    category: "Games",
    id: 1,
    name: "blog1",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc1.png",
    title: "Top Game Development Companies - Choose the Best One",
    summary:
      "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  },

  {
    category: "Development",
    id: 2,
    name: "blog2",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc2.png",
    title: "Why should I invest in game app development? Complete Guide",
    summary:
      " The answer to the above question is pretty straightforward the Games market is booming and you should not miss this opportunity. It is growing in every dimension, geographically, technologicall...",
  },

  {
    category: "AI",
    id: 3,
    name: "blog3",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc3.png",
    title: "AI in Games: Refining the Way Games Developed & Play",
    summary:
      "AI in Games is no longer a new phenomenon. It's trending, extensively adapted, and rapidly evolving. Just like Artificial Intelligence (AI) has disrupted all major industries like Healthcare, Hospitality, Banking...",
  },
  {
    category: "CGI",
    id: 4,
    name: "blog4",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc4.png",
    title: "What is CGI: Definition, Development & Common Examples",
    summary:
      "Ever wondered what made the Avatar movie a hit, or why there is such a huge and crazy fan community for the Harry Potter franchise? Well, that’s pretty straightforward, this is because they take us into a fantasy world where imagination comes to reality. But how is it possible?...",
  },

  {
    category: "AR",
    id: 5,
    name: "blog5",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc5.png",
    title: "VR Business Applications: Unlocking Possibilities Beyond Gaming",
    summary:
      "Till we invent time travel, multi-dimensional travel, or any other sci-fi-inspired traveling - Virtual Reality (VR) is the only technology, for now, that can take you to a different reality.All thanks to its ultra-realistic visuals and real-time interactive experience, and a smart environment...",
  },
  {
    category: "AR",
    id: 6,
    name: "blog6",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc6.png",
    title:
      "Augmented Reality and Virtual Reality: Dual Power Source for Your Skyrocketing Sales",
    summary:
      "What is the first thing that matters the most in product sales? The answer is simple and intuitive - the first impression Here are some evidence A consumer forms an impression of a retail interaction...",
  },
  {
    category: "CGI",
    id: 7,
    name: "blog7",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc7.png",
    title: "How to Hire The Best VFX Studios for Creating Cinematic Visuals",
    summary:
      "Have you ever imagined how in movies you see large-size dragons roaring, breathing fire, and sending shivers down the spine? Or ever thought about how a director shot actors and aliens in a single...",
  },
  {
    category: "CGI",
    id: 8,
    name: "blog8",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc8.png",
    title: "Miracles of CGI in eCommerce: Powerful Sales, Great Experience",
    summary:
      "If you are running an eCommerce business, you must be aware of the impact that a high-quality visual product representation makes. It boosts your sales and your brand image After all as per a stat....",
  },
];

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

  const allBlogs = [
    ...blogsArray,
    ...apiBlogs.map((blog) => ({
      category: blog.category || "Development",
      id: blog._id,
      name: blog.slug,
      img: blog.coverImage,
      imgAlt: blog.coverImageAlt || blog.title,
      title: blog.title,
      summary: blog.description || blog.subtitle,
      isApiDriven: true,
    })),
  ];

  const allCategories = [...hardcodedCategories];
  const hardcodedNames = hardcodedCategories.map((cat) =>
    cat.name.toLowerCase()
  );

  apiCategories.forEach((cat) => {
    if (!cat?.name) {
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
                {cat.blogCount > 0 && (
                  <span className="ml-1 text-xs opacity-70">
                    ({cat.blogCount})
                  </span>
                )}
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
