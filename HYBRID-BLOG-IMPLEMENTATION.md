# Hybrid Blog Implementation Guide

## 🎯 Goal
Keep existing hardcoded blogs (blog1-blog8) AND add support for dynamic API-driven blogs.

---

## 📋 What Backend Needs to Provide

### 1. Simple Blog List API
**Endpoint**: `GET /api/blogs`

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 9,
      "slug": "new-blog-post",
      "category": "Games",
      "thumbnail": "https://storage.../image.png",
      "title": "New Blog Post Title",
      "summary": "Short description...",
      "publishedDate": "2024-10-15",
      "readTime": "10 min read"
    }
  ]
}
```

### 2. Single Blog API
**Endpoint**: `GET /api/blogs/:slug`

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 9,
    "slug": "new-blog-post",
    "category": "Games",
    "title": "Blog Title",
    "featuredImage": {
      "desktop": "https://...",
      "mobile": "https://..."
    },
    "publishedDate": "2024-10-15",
    "readTime": "10 min read",
    "content": [
      {
        "type": "heading",
        "content": "Main Title"
      },
      {
        "type": "paragraph",
        "content": "Paragraph text..."
      },
      {
        "type": "subheading",
        "content": "Subtitle"
      },
      {
        "type": "list",
        "items": [
          "Item 1",
          "Item 2"
        ]
      }
    ],
    "tableOfContents": [
      {
        "id": "section1",
        "title": "Section 1"
      }
    ]
  }
}
```

**That's it! Just 2 endpoints needed to start.**

---

## 🔧 Frontend Implementation

### Step 1: Create API Service
Create `/src/services/blogApi.js`:

```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://email-backend.heybuddy.co.in';

export async function getAllBlogs() {
  try {
    // Fetch without pageContent for list view (faster)
    const response = await fetch(`${API_URL}/api/blogs?isExpand=false&status=published`);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    // Fetch with pageContent for full blog view
    const response = await fetch(`${API_URL}/api/blogs/slug/${slug}?isExpand=true`);
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}
```

---

### Step 2: Update Blog List Page
Update `/src/app/Pages/Blog/page.jsx`:

```javascript
"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/blogComponents/BlogCard";
import { getAllBlogs } from "@/services/blogApi";
import "./page.css";

// Keep your existing hardcoded blogs
const hardcodedBlogs = [
  {
    category: "Games",
    id: 1,
    name: "blog1",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc1.png",
    title: "Top Game Development Companies - Choose the Best One",
    summary: "Made up your mind to invest in game development?...",
  },
  {
    category: "Development",
    id: 2,
    name: "blog2",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogc2.png",
    title: "Why should I invest in game app development? Complete Guide",
    summary: "The answer to the above question is pretty straightforward...",
  },
  // ... rest of your 8 hardcoded blogs
];

const Page = () => {
  const [category, setCategory] = useState("");
  const [apiBlogs, setApiBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch API blogs
    async function fetchBlogs() {
      const blogs = await getAllBlogs();
      setApiBlogs(blogs);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  // Combine hardcoded and API blogs
  const allBlogs = [
    ...hardcodedBlogs,
    ...apiBlogs.map(blog => ({
      category: blog.category || "Development",
      id: blog._id,
      name: blog.slug, // Use slug for routing
      img: blog.coverImage,
      title: blog.title,
      summary: blog.description || blog.subtitle,
      isApiDriven: true // Flag to identify API blogs
    }))
  ];

  const toggleCategory = (categ) => {
    setCategory(categ);
  };

  const filteredBlogs = category === "" 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === category);

  return (
    <div className="blogsContainer">
      <div className="readOurBlog">
        <p className="text-[4vw] font-semibold">Read Our Blog</p>
        <p className="text-[2vw] w-[65vw]">
          Blog posts are typically written by HeyBuddy and other contributors.
          Be ready to be immersed with this Tech World
        </p>
      </div>

      <div className="blogsWithCategories">
        <div className="blogCategories">
          <p className="text-white font-bold text-normal md:text-[2vw]">
            Blog Posts
          </p>
          <div className="flex justify-between w-[80%] flex-wrap items-center text-white md:text-[1em] font-semibold">
            <button
              onClick={() => toggleCategory("")}
              className={category === "" ? "tab active-tab" : "tab"}
            >
              All
            </button>
            <button
              onClick={() => toggleCategory("Development")}
              className={category === "Development" ? "tab active-tab" : "tab"}
            >
              Development
            </button>
            <button
              onClick={() => toggleCategory("AI")}
              className={category === "AI" ? "tab active-tab" : "tab"}
            >
              AI
            </button>
            <button
              onClick={() => toggleCategory("Games")}
              className={category === "Games" ? "tab active-tab" : "tab"}
            >
              Games
            </button>
            <button
              onClick={() => toggleCategory("CGI")}
              className={category === "CGI" ? "tab active-tab" : "tab"}
            >
              CGI
            </button>
            <button
              onClick={() => toggleCategory("AR")}
              className={category === "AR" ? "tab active-tab" : "tab"}
            >
              AR
            </button>
          </div>
        </div>

        <div className="allBlogs mx-auto">
          {loading && <p className="text-white">Loading blogs...</p>}
          
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
```

---

### Step 3: Create Dynamic Blog Page
Create `/src/app/Pages/Blog/[slug]/page.jsx`:

```javascript
import React from "react";
import { getBlogBySlug } from "@/services/blogApi";
import DynamicBlogContent from "@/components/Blog/DynamicBlogContent";
import { notFound } from "next/navigation";

async function BlogPage({ params }) {
  const { slug } = params;
  
  // Fetch blog from API
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
```

---

### Step 4: Create Dynamic Content Renderer
Create `/src/components/Blog/DynamicBlogContent.jsx`:

```javascript
"use client";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import Image from "next/image";
import {
  FacebookShare,
  LinkedinShare,
  TwitterShare,
  WhatsappShare,
  TelegramShare,
} from "react-share-kit";
import { FaChevronRight } from "react-icons/fa6";

function DynamicBlogContent({ blog }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  // Auto-generate table of contents from content headings
  const generateTableOfContents = () => {
    if (blog.tableOfContents) {
      // Use provided table of contents if available
      return blog.tableOfContents;
    }
    
    // Auto-generate from content blocks
    return blog.content
      ?.filter(block => block.type === "heading")
      .map((block, index) => ({
        id: `section${index + 1}`,
        title: block.content
      })) || [];
  };

  const tableOfContents = generateTableOfContents();

  const categoryColors = {
    Games: {
      border: "border-[#FF5C00]",
      bg: "bg-[#ff5c0024]",
      text: "text-[#FF5C00]",
      dot: "bg-[#FF5C00]"
    },
    Development: {
      border: "border-[#26B403]",
      bg: "bg-[#26b40324]",
      text: "text-[#26B403]",
      dot: "bg-[#26B403]"
    },
    AI: {
      border: "border-[#FF001F]",
      bg: "bg-[#ff001f24]",
      text: "text-[#FF001F]",
      dot: "bg-[#FF001F]"
    },
    CGI: {
      border: "border-[#00FFE0]",
      bg: "bg-[#00ffe024]",
      text: "text-[#00FFE0]",
      dot: "bg-[#00FFE0]"
    },
    AR: {
      border: "border-[#00FFE0]",
      bg: "bg-[#00ffe024]",
      text: "text-[#00FFE0]",
      dot: "bg-[#00FFE0]"
    }
  };

  const colors = categoryColors[blog.category] || categoryColors.Games;

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "heading":
        return (
          <h1 key={index} className="text-3xl font-extrabold text-white">
            {block.content}
          </h1>
        );
      
      case "subheading":
        return (
          <p key={index} className="font-semibold text-white">
            {block.content}
          </p>
        );
      
      case "paragraph":
        return (
          <p key={index} className="font-thin text-gray-100">
            {block.content}
          </p>
        );
      
      case "list":
        return (
          <ul key={index} className="list-disc">
            {block.items.map((item, i) => (
              <li key={i} className="font-thin text-gray-100">
                {item}
              </li>
            ))}
          </ul>
        );
      
      case "faq":
        return (
          <div key={index} className="flex flex-col gap-3">
            <p className="font-semibold text-white">{block.question}</p>
            <p className="font-thin text-gray-100">{block.answer}</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-5 lg:px-0 bg-no-repeat bg-fixed bg-top pt-28">
      {/* Breadcrumb */}
      <div className="hidden lg:flex gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white ml-[5%]">
        <span>Blog</span>
        <span><FaChevronRight /></span>
        <span>{blog.title}</span>
      </div>

      {/* Featured Image */}
      <div className={`rounded-xl relative overflow-hidden border-2 h-auto w-auto lg:h-[72vh] lg:w-[90%] mx-auto mt-4 ${colors.border}`}>
        <div className="xl:hidden w-full h-full">
          <Image
            loading="lazy"
            src={blog.featuredImage?.mobile || blog.featuredImage?.desktop}
            alt={blog.title}
            width={200}
            height={200}
            className="h-full w-full object-auto"
          />
        </div>
        <div className="hidden xl:flex w-full h-full">
          <Image
            loading="lazy"
            src={blog.featuredImage?.desktop}
            alt={blog.title}
            width={200}
            height={200}
            className="h-full w-full object-auto"
          />
        </div>
        
        <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10 flex flex-col gap-2 md:gap-[21px]">
          {/* Category Badge */}
          <div className={`flex backdrop-blur-sm lg:items-center py-[5px] px-4 gap-[6px] w-fit rounded-full ${colors.bg}`}>
            <span className={`h-4 w-4 rounded-full ${colors.dot}`}></span>
            <span className={`font-bold ${colors.text}`}>{blog.category}</span>
          </div>
          
          <h1 className="hidden md:flex text-lg md:text-3xl font-semibold text-white">
            <span className="md:backdrop-blur-sm">{blog.title}</span>
          </h1>
          
          <h1 className="text-white text-sm md:text-base">
            {blog.publishedDate} • {blog.readTime}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="pt-10 flex flex-col-reverse lg:flex-row lg:w-[90%] xl:w-[90%] mx-auto gap-10 relative">
        {/* Main Content */}
        <section className="lg:w-[60%] flex flex-col gap-5">
          <div className="flex flex-col gap-14">
            <section className="flex flex-col gap-[30px] pb-[40px]">
              {blog.content?.map((block, index) => (
                <div key={index} className="flex flex-col gap-5 text-white text-base font-light">
                  {renderBlock(block, index)}
                </div>
              ))}
            </section>
          </div>

          {/* Share Section */}
          <div className={`border-2 rounded-[30px] flex items-center justify-between py-8 px-5 ${colors.border} ${colors.bg}`}>
            <h1 className="text-base md:text-xl font-normal text-white">
              Share with your community!
            </h1>
            <div className="flex items-center gap-3">
              <TwitterShare url={shareUrl} title={blog.title} round size="30px" />
              <LinkedinShare url={shareUrl} quote={blog.title} round size="30px" />
              <FacebookShare url={shareUrl} quote={blog.title} round size="30px" />
              <TelegramShare url={shareUrl} round size="30px" />
              <WhatsappShare url={shareUrl} title={blog.title} round size="30px" />
            </div>
          </div>
        </section>

        {/* Sidebar - Table of Contents */}
        <section className="flex-1 flex flex-col gap-14 pt-12">
          <div className="hidden lg:flex flex-col gap-5 sticky top-20">
            <h1 className="text-base text-white">In this article</h1>
            <div className="text-white">
              <Scrollspy
                className="flex flex-col gap-[10px]"
                items={blog.tableOfContents?.map(item => item.id) || []}
                currentClassName={`border-l-4 ${colors.border} ${colors.text}`}
                offset={-140}
              >
                {blog.tableOfContents?.map((item, index) => (
                  <h1 key={index} className="cursor-pointer pl-2">
                    <a className="font-thin text-gray-100">{item.title}</a>
                  </h1>
                ))}
              </Scrollspy>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default DynamicBlogContent;
```

---

## 📁 File Structure

```
src/
├── services/
│   └── blogApi.js                    ← NEW (API calls)
│
├── app/Pages/Blog/
│   ├── page.jsx                      ← UPDATED (hybrid list)
│   ├── [slug]/
│   │   └── page.jsx                  ← NEW (dynamic route)
│   ├── blog1/
│   │   └── page.jsx                  ← KEEP (hardcoded)
│   ├── blog2/
│   │   └── page.jsx                  ← KEEP (hardcoded)
│   └── ...blog3-8                    ← KEEP (all hardcoded)
│
└── components/Blog/
    ├── DynamicBlogContent.jsx        ← NEW (renders API blogs)
    ├── BlogContent1.jsx              ← KEEP (existing)
    ├── BlogContent2.jsx              ← KEEP (existing)
    └── ...                           ← KEEP (all existing)
```

---

## 🔄 How It Works

### Blog List Page
1. Shows all 8 hardcoded blogs
2. Fetches API blogs
3. Combines both in one list
4. Filter works on both

### Individual Blog Page
- **Hardcoded**: `/Pages/Blog/blog1` → Uses existing BlogContent1.jsx
- **API-driven**: `/Pages/Blog/new-blog-post` → Uses DynamicBlogContent.jsx

### Routing Priority
```
/Pages/Blog/blog1        → blog1/page.jsx (hardcoded, higher priority)
/Pages/Blog/new-post     → [slug]/page.jsx (API-driven)
```

---

## 🎯 Backend Requirements (Simple!)

### 1. GET /api/blogs
Returns array of blogs for list page.

**Required fields**:
- `id` (number)
- `slug` (string) - URL-friendly
- `category` (string) - "Games", "Development", "AI", "CGI", "AR"
- `thumbnail` (string) - Image URL
- `title` (string)
- `summary` (string)
- `publishedDate` (string)
- `readTime` (string)

### 2. GET /api/blogs/:slug
Returns single blog with full content.

**Required fields**:
- All fields from list API above
- `featuredImage` (object)
  - `desktop` (string)
  - `mobile` (string)
- `content` (array) - Array of content blocks:
  ```javascript
  [
    { type: "heading", content: "..." },
    { type: "paragraph", content: "..." },
    { type: "subheading", content: "..." },
    { type: "list", items: ["item1", "item2"] }
  ]
  ```
- `tableOfContents` (array) - **OPTIONAL** (can be auto-generated from content):
  ```javascript
  [
    { id: "section1", title: "Section Title" }
  ]
  ```

**Note**: You can either:
- ✅ **Option 1**: Let backend send `tableOfContents` array
- ✅ **Option 2**: Frontend auto-generates it from `content` headings (recommended!)

**That's all the backend needs to provide!**

---

## 🚀 Quick Start

### 1. Create API Service
```bash
touch src/services/blogApi.js
```
Add the code from Step 1 above.

### 2. Update Blog List
Update `src/app/Pages/Blog/page.jsx` with code from Step 2.

### 3. Create Dynamic Route
```bash
mkdir -p src/app/Pages/Blog/[slug]
touch src/app/Pages/Blog/[slug]/page.jsx
```
Add code from Step 3.

### 4. Create Dynamic Content Component
```bash
touch src/components/Blog/DynamicBlogContent.jsx
```
Add code from Step 4.

### 5. Add Environment Variable
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 6. Test
- Hardcoded: http://localhost:3000/Pages/Blog/blog1 ✅
- API-driven: http://localhost:3000/Pages/Blog/new-post ✅

---

## ✅ What You Get

1. ✅ Keep all existing hardcoded blogs
2. ✅ Add unlimited new API-driven blogs
3. ✅ Both show in list page together
4. ✅ Same UI/UX for both types
5. ✅ Easy to maintain
6. ✅ No breaking changes

---

## 📝 Example Backend Response

### GET /api/blogs
```json
{
  "success": true,
  "data": [
    {
      "id": 9,
      "slug": "metaverse-gaming-2024",
      "category": "Games",
      "thumbnail": "https://storage.../thumb.png",
      "title": "Metaverse Gaming in 2024",
      "summary": "Explore the future of gaming...",
      "publishedDate": "2024-10-15",
      "readTime": "8 min read"
    }
  ]
}
```

### GET /api/blogs/metaverse-gaming-2024
```json
{
  "success": true,
  "data": {
    "id": 9,
    "slug": "metaverse-gaming-2024",
    "category": "Games",
    "title": "Metaverse Gaming in 2024",
    "thumbnail": "https://storage.../thumb.png",
    "summary": "Explore the future...",
    "publishedDate": "2024-10-15",
    "readTime": "8 min read",
    "featuredImage": {
      "desktop": "https://storage.../desktop.png",
      "mobile": "https://storage.../mobile.png"
    },
    "content": [
      {
        "type": "heading",
        "content": "Metaverse Gaming in 2024"
      },
      {
        "type": "paragraph",
        "content": "The metaverse is revolutionizing gaming..."
      },
      {
        "type": "subheading",
        "content": "Key Trends"
      },
      {
        "type": "list",
        "items": [
          "VR Integration",
          "Social Gaming",
          "NFT Items"
        ]
      }
    ],
    "tableOfContents": [
      { "id": "section1", "title": "Introduction" },
      { "id": "section2", "title": "Key Trends" }
    ]
  }
}
```

---

## 💡 Tips

1. **Keep it simple**: Start with basic content types (heading, paragraph, list)
2. **Test locally**: Mock the API responses first
3. **Gradual migration**: Keep hardcoded blogs, add new ones via API
4. **Future-proof**: Can always move hardcoded blogs to API later

---

**Ready to implement? Start with Step 1! 🚀**

