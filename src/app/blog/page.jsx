"use client";
import "../../styles/Font.css";
import BlogCard from "@/components/blogComponents/BlogCard";
import React, { useEffect, useState, useMemo } from "react";
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

const BlogPage = () => {
  const [category, setCategory] = useState("");
  const [apiBlogs, setApiBlogs] = useState([]);
  const [apiCategories, setApiCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    limit: 9 // Using 9 for a nice 3x3 grid
  });

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getAllCategories();
        setApiCategories(Array.isArray(categories) ? categories : []);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        // Fetch blogs with pagination and category filter
        const { blogs, pagination: pagData } = await getAllBlogs(page, pagination.limit, category);
        setApiBlogs(Array.isArray(blogs) ? blogs : []);
        if (pagData) setPagination(pagData);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, category]);

  const allBlogs = useMemo(() => {
    return apiBlogs.map((blog) => ({
      category: typeof blog.category === 'object' ? blog.category.name : (blog.category || "Development"),
      id: blog._id,
      name: blog.slug,
      img: blog.coverImage,
      imgAlt: blog.coverImageAlt || blog.title,
      title: blog.title,
      summary: blog.description || blog.subtitle,
      isApiDriven: true,
    }));
  }, [apiBlogs]);

  const allCategories = useMemo(() => {
    const combined = [...hardcodedCategories];
    const hardcodedNames = hardcodedCategories.map((cat) => cat.name.toLowerCase());

    apiCategories.forEach((cat) => {
      if (!cat?.name || cat.name === "Digital Marketing") return;
      if (!hardcodedNames.includes(cat.name.toLowerCase())) {
        combined.push({
          name: cat.name,
          slug: cat.slug || cat._id || cat.name.toLowerCase(),
          color: cat.color || "#6B7280",
          order: typeof cat.order === "number" ? cat.order : 999,
          blogCount: cat.blogCount || 0,
        });
      }
    });

    return combined.sort((a, b) => a.order - b.order);
  }, [apiCategories]);

  const toggleCategory = (categ) => {
    setCategory(categ);
    setPage(1); // Reset to first page when category changes
  };

  // Note: Backend handles filtering via the API call now.
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < pagination.totalPages) setPage(page + 1);
  };

  return (
    <div className="blogsContainer">
      <div className="readOurBlog">
        <p className="text-[4vw] font-semibold">Read Our Blog</p>
        <p className="text-[2vw] w-[65vw]">
          Stay updated with the latest trends in AI, Gaming, and immersive technologies.
        </p>
      </div>

      <Image
        loading="lazy"
        width={1200}
        height={400}
        className="read-blog-svg"
        alt="Blog Banner"
        src="/read-blog.svg"
      />

      <div className="blogsWithCategories">
        <div className="blogCategories ">
          <p className="text-white font-bold text-normal md:text-[2vw]">Blog Posts</p>
          <div className="flex justify-between -gap-y-2 w-[80%] flex-start flex-wrap items-center text-white md:text-[1em] font-semibold">
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

        <div className="allBlogs mx-auto">
          {loading ? (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
              <p className="text-white mt-4">Loading insightful articles...</p>
            </div>
          ) : allBlogs.length > 0 ? (
            allBlogs.map((blog, index) => (
              <BlogCard
                key={blog.id || index}
                {...blog}
                priority={index < 3} // Load first 3 images with high priority
              />
            ))
          ) : (
            <div className="col-span-full text-white text-center py-20">
              <p className="text-2xl font-bold mb-2">No blogs found</p>
              <p className="text-gray-400">Try selecting a different category or return to 'All'.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {!loading && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 py-12">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${page === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
            >
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(pagination.totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-full font-bold transition-all ${page === i + 1 ? 'bg-blue-500 text-white scale-110' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={page === pagination.totalPages}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${page === pagination.totalPages ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
