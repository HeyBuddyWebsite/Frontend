"use client";
import "../../../styles/Font.css";
import BlogCard from "@/components/blogComponents/BlogCard";
import React, { useState } from "react";
import "./page.css";
import Image from "next/image";

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

const page = () => {
  const [category, setCategory] = useState("");

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
            <button
              onClick={() => toggleCategory("Development")}
              className={category === "Development" ? "tab active-tab" : "tab"}
            >
              Development
            </button>
            {/* <button
              onClick={() => toggleCategory("Design")}
              className={category === "Design" ? "tab active-tab" : "tab"}
            >
              Design
            </button> */}
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

        <div className="allBlogs  mx-auto">
          {category === "Development"
            ? blogsArray
                .filter((blog) => blog.category === "Development")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "Design"
            ? blogsArray
                .filter((blog) => blog.category === "Design")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "Games"
            ? blogsArray
                .filter((blog) => blog.category === "Games")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "AI"
            ? blogsArray
                .filter((blog) => blog.category === "AI")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "CGI"
            ? blogsArray
                .filter((blog) => blog.category === "CGI")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "AR"
            ? blogsArray
                .filter((blog) => blog.category === "AR")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === ""
            ? blogsArray.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default page;
