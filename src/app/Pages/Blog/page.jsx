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
    category: "Games",
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

  {
    category: "AR",
    id: 9,
    name: "blog9",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/6%2050.jpg",
    title: "VR and AR in Education Industry: The Missing Piece",
    summary:
      "This blog focuses on the extensive role of VR and AR in education to enhance learning perspective & ensure seamless communication. Get to know the insights of Virtual Reality and Augmented....",
  },

  {
    category: "Custom Software",
    id: 10,
    name: "blog10",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/cyber-security-experts-working-with-tech-devices-neon-lights%202.jpg",
    title: "VR and AR in Education Industry: The Missing Piece",
    summary:
      "Software development trends keep changing while providing new tech-driven measures to create result-oriented software. Modern-day technology can never be the same and keeps updating as per changing....",
  },

  {
    category: "Immersive Technologies",
    id: 11,
    name: "blog11",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/dl.beatsnoop.com-3000-fECurBFN0A%202.jpg",
    title: "AR in eCommerce: 3 Top reasons it is the best investment?",
    summary:
      "Ever wondered what it would be like to teleport your customers from their bedrooms to your stores in no time? What if they could do so, try your different products go back to their house test it....",
  },
  {
    category: "3D",
    id: 12,
    name: "blog12",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/dl.beatsnoop.com-3000-1kRVUfglt9%202.jpg",
    title: "From Concept to Reality: 3D Modeling in Prototyping and Design",
    summary:
      "3D modelling technology has revolutionized the realm of product design, architecture, and prototyping. This technology has implemented a higher level of design innovation and utmost creativity for....",
  },

  {
    category: "Custom Software",
    id: 13,
    name: "blog13",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/business-person-futuristic-business-environment%202.jpg",
    title: "Agile Methodology: Dynamic Model, Innovative Approach",
    summary:
      "Ensuring the success of seamless software development at present times relies upon adopting agile methodologies to stay organized, collaborated, & integrated. Agile techniques are the trend in the....",
  },

  {
    category: "Custom Software",
    id: 14,
    name: "blog14",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/application-programming-interface-software%202.jpg",
    title: "Building Robust Software: A Guide to Cybersecurity Best Practices",
    summary:
      "In today's technically driven world full of so many business applications and software, securing it from cybercriminals is of paramount importance. Gone are the days, when cyber attackers keep a....",
  },

  {
    category: "Games",
    id: 15,
    name: "blog15",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/[fetchpik.com]-high-PdzECuN4eb%202.jpg",
    title: "Dominating the Mobile Game App Market: Strategies and Success Stories",
    summary:
      "The mobile game app market is a huge realm of profitability and extended users investing time, effort, and money to enjoy playing games. Several examples like Candy Crush, PUBG, Angry Birds....",
  },

  {
    category: "3D",
    id: 16,
    name: "blog16",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/dl.beatsnoop.com-3000-EwreNJYaB4%202.jpg",
    title: "Captivating Audiences: Animation Techniques and Trends ",
    summary:
      "In the rapidly growing and evolving world of entertainment, digital marketing, and technology, animation techniques play a pivotal role in grabbing the attention of the audience. It's a transformative....",
  },

  {
    category: "Games",
    id: 17,
    name: "blog17",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/businessman-working-futuristic-office%202.jpg",
    title: "Top Game Development Technologies Across Genre: A Comprehensive Guide",
    summary:
      "Today in the highly connected digital world, mobile games are in our daily lives, and platform issues for their development become a relevant topic. For the scenes that the viewers do not see, there....",
  },

  {
    category: "Custom Software",
    id: 18,
    name: "blog18",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/scene-with-business-person-working-futuristic-office-job%20(1)%202.jpg",
    title: "Legacy Software Modernisation: Stop Struggling, Start Knowing",
    summary:
      "Businesses across industries agree that legacy software modernisation is a critical move to gain a competitive edge, adapt to changing technology landscapes, and lead the market. In fact, in 2023....",
  },

  {
    category: "Games",
    id: 19,
    name: "blog19",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/innovative-businessman-working-modern-laptop-inside-generated-by-ai%202.jpg",
    title: "Maximizing ROI and Minimizing Risks: The Art of Game Development Outsourcing ",
    summary:
      "Do you know, hiring an in-house team for game development can be up to 50% more expensive than outsourcing the same work? Also, unlike what you might believe, outsourcing doesn’t necessarily mean...",
  },

  {
    category: "3D",
    id: 20,
    name: "blog20",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/person-using-ar-technology-perform-their-occupation%20(4)%202.jpg",
    title: "Enhancing UX with Interactive 3D Models",
    summary:
      "Businesses are constantly seeking ways to captivate their audience and provide an exceptional user experience (UX). The aim here is to build a strong connection with the audience and improve their...",
  },
];

const Page = () => {
  const [category, setCategory] = useState("");

  
 

  const toggleCategory = (categ) => {
    setCategory(categ);
  };
  return (
    // <div className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse1.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
    <div className="blogsContainer  "  >
      <div className="readOurBlog">
        <p className="text-3xl lg:text-[4vw] font-semibold">Read Our Blog</p>
        <p className="text-md w-[90%] lg:text-[2vw] lg:w-[65vw]">
          Blog posts are typically written by HeyBuddy and other contributors.
          Be ready to be immersed with this Tech World
        </p>
      </div>
      <Image
        loading="lazy"
        width={10}
        height={450}
        className="read-blog-svg mb-[100px] lg:mb-[150px] w-[100%] lg:w-[80%] mx-auto"
        style={{padding:"0"}}
        alt="No-img"
        src="/read-blog.svg"
      />

      <div className="blogsWithCategories gap-[50px] lg:gap-[100px] w-[90%] lg:w-[80%] mx-auto" style={{padding:"0",margin:"0"}}>
        <div className="blogCategories gap-[25px] lg:gap-[50px]" style={{padding:"0",margin:"0"}}>
          <p className="text-white font-bold text-xl lg:text-[2vw]   ">
            Blog Posts
          </p>
          
          <div className=" flex gap-4 md:gap-6  w-[100%]  flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold">
          
            <button
              onClick={() => toggleCategory("")}
              className={category === "" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              All
             
              <span className="line"></span>
              
            </button>
            <button
              onClick={() => toggleCategory("Custom Software")}
              className={category === "Custom Software" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              Custom Software
              <span className="line"></span>
            </button>
          
            <button
              onClick={() => toggleCategory("AI")}
              className={category === "AI" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              AI
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("Games")}
              className={category === "Games" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              Games
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("CGI")}
              className={category === "CGI" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              CGI
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("AR")}
              className={category === "AR" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              AR
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("3D")}
              className={category === "3D" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              3D
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("Immersive Technologies")}
              className={category === "Immersive Technologies" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              Immersive Technologies
              <span className="line"></span>
            </button>
          </div>
        </div>

        <div className="allBlogs  mx-auto">
          {category === "Custom Software"
            ? blogsArray
                .filter((blog) => blog.category === "Custom Software")
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
            :category === "3D"
            ? blogsArray
                .filter((blog) => blog.category === "3D")
                .map((blog, index) => <BlogCard key={index} {...blog} />):category === "Immersive Technologies"
                ? blogsArray
                    .filter((blog) => blog.category === "Immersive Technologies")
                    .map((blog, index) => <BlogCard key={index} {...blog} />): category === ""
            ? blogsArray.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))
            : null}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Page;
