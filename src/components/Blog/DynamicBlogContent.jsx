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
import "./page.css";

function DynamicBlogContent({ blog }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  // Handle TOC click - smooth scroll to section
  const navbarHeight = 70;
  const handleNavClick = (id) => {
    console.log('Clicking section:', id);
    const section = document.getElementById(id);
    console.log('Found section:', section);
    if (section) {
      console.log('Section offsetTop:', section.offsetTop);
      const top = section.offsetTop + window.innerHeight - navbarHeight - navbarHeight;
      console.log('Scrolling to:', top);
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    } else {
      console.error('Section not found:', id);
    }
  };

  // Auto-generate table of contents
  // Supports both flat array and nested structure
  const generateTableOfContents = () => {
    if (!blog.pageContent || !Array.isArray(blog.pageContent)) return [];
    
    // Check if nested structure (each item has "heading" property)
    if (blog.pageContent[0]?.heading) {
      // Nested structure - just map headings
      return blog.pageContent.map((section, index) => ({
        id: `section${index + 1}`,
        title: section.heading
      }));
    } else {
      // Flat structure - filter headings
      return blog.pageContent
        .filter(block => block.type === "heading")
        .map((block, index) => ({
          id: `section${index + 1}`,
          title: block.content
        }));
    }
  };

  const tableOfContents = generateTableOfContents();
  
  // Debug: Log TOC
  useEffect(() => {
    console.log('Table of Contents:', tableOfContents);
    console.log('Sections:', sections);
  }, [tableOfContents]);

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

  const colors = categoryColors[blog.category] || categoryColors.Development;

  // Helper function to render text with line breaks
  const renderTextWithBreaks = (text) => {
    if (!text) return '';
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  // Render content blocks
  const renderBlock = (block, index) => {
    switch (block.type) {
      case "heading":
        // For flat structure, heading is rendered here
        // For nested structure, heading is rendered separately
        return (
          <h1 key={index} className="text-3xl font-extrabold text-white">
            {renderTextWithBreaks(block.content)}
          </h1>
        );
      
      case "subheading":
        return (
          <p key={index} className="font-semibold text-white">
            {renderTextWithBreaks(block.content)}
          </p>
        );
      
      case "paragraph":
        return (
          <p key={index} className="font-thin text-gray-100">
            {renderTextWithBreaks(block.content)}
          </p>
        );
      
      case "list":
        return (
          <ul key={index} className="list-disc pl-5">
            {block.items && block.items.map((item, i) => (
              <li key={i} className="font-thin text-gray-100">
                {renderTextWithBreaks(item)}
              </li>
            ))}
          </ul>
        );
      
      default:
        return null;
    }
  };

  // Group content by sections
  // Supports both flat array and nested structure
  const sections = [];
  
  if (blog.pageContent && Array.isArray(blog.pageContent)) {
    // Check if nested structure
    if (blog.pageContent[0]?.heading) {
      // Nested structure - already grouped!
      blog.pageContent.forEach((section, index) => {
        sections.push({
          id: `section${index + 1}`,
          heading: section.heading,
          blocks: section.content || []
        });
      });
    } else {
      // Flat structure - group by headings
      let sectionIndex = 1; // Start from 1 to match TOC indexing
      let currentSection = [];
      
      blog.pageContent.forEach((block, idx) => {
        if (block.type === "heading") {
          if (currentSection.length > 0) {
            sections.push({
              id: `section${sectionIndex}`,
              blocks: currentSection
            });
            sectionIndex++;
          }
          currentSection = [block];
        } else {
          currentSection.push(block);
        }
      });
      
      if (currentSection.length > 0) {
        sections.push({
          id: `section${sectionIndex}`,
          blocks: currentSection
        });
      }
    }
  }

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
            src={blog.coverImage || "/Images/Blog.png"}
            alt={blog.title}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden xl:flex w-full h-full">
          <Image
            loading="lazy"
            src={blog.coverImage || "/Images/Blog.png"}
            alt={blog.title}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10 flex flex-col gap-2 md:gap-[21px]">
          {/* Category Badge */}
          <div className={`flex backdrop-blur-sm lg:items-center py-[5px] px-4 gap-[6px] w-fit rounded-full ${colors.bg}`}>
            <span className={`h-4 w-4 rounded-full ${colors.dot}`}></span>
            <span className={`font-bold ${colors.text}`}>{blog.category || "Development"}</span>
          </div>
          
          <h1 className="hidden md:flex text-lg md:text-3xl font-semibold text-white">
            <span className="md:backdrop-blur-sm">{blog.title}</span>
          </h1>
          
          <h1 className="text-white text-sm md:text-base">
            {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="pt-10 flex flex-col-reverse lg:flex-row lg:w-[90%] xl:w-[90%] mx-auto gap-10 relative">
        {/* Main Content */}
        <section className="lg:w-[60%] flex flex-col gap-5">
          <div className="flex flex-col gap-14">
            <section className="flex flex-col gap-[30px] pb-[40px]">
              {sections.length > 0 ? (
                sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="flex flex-col gap-5 text-white text-base font-light"
                  >
                    {/* Render heading if nested structure */}
                    {section.heading && (
                      <h1 className="text-3xl font-extrabold text-white">
                        {section.heading}
                      </h1>
                    )}
                    {/* Render content blocks */}
                    {section.blocks.map((block, index) => renderBlock(block, index))}
                  </div>
                ))
              ) : (
                <div className="text-white text-center py-10">
                  <p className="text-xl">No content available for this blog.</p>
                </div>
              )}
            </section>
          </div>

          {/* Share Section */}
          <div className={`border-2 rounded-[30px] flex items-center justify-between py-8 px-5 ${colors.border} ${colors.bg}`}>
            <h1 className="text-base md:text-xl font-normal text-white">
              Share with your community!
            </h1>
            <div className="flex items-center gap-3">
              <TwitterShare url={shareUrl} title={blog.title} hashtags={["HEYBUDDY", "BLOGS"]} round size="30px" />
              <LinkedinShare url={shareUrl} quote={blog.title} round size="30px" />
              <FacebookShare url={shareUrl} quote={blog.title} round size="30px" />
              <TelegramShare url={shareUrl} round size="30px" />
              <WhatsappShare url={shareUrl} title={blog.title} separator=":: " round size="30px" />
            </div>
          </div>
        </section>

        {/* Sidebar - Table of Contents */}
        <section className="flex-1 flex flex-col gap-14 pt-12">
          {/* Mobile Breadcrumb */}
          <div className="flex flex-col gap-7">
            <div className="flex text-sm md:text-base lg:hidden gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white">
              <span>Blog</span>
              <span>
                <FaChevronRight />
              </span>
              <span>{blog.title}</span>
            </div>
          </div>

          {/* Desktop TOC */}
          <div className="hidden lg:flex flex-col gap-5 sticky top-20">
            <h1 className="text-base text-white">In this article</h1>
            <div className="text-white">
              {tableOfContents.length > 0 && (
                <Scrollspy
                  className="flex flex-col gap-[10px]"
                  items={tableOfContents.map(item => item.id)}
                  currentClassName={`border-l-4 ${colors.border} ${colors.text}`}
                  offset={-140}
                >
                  {tableOfContents.map((item, index) => (
                    <h1 
                      key={index} 
                      className="cursor-pointer pl-2 font-thin text-gray-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                    >
                      {item.title}
                    </h1>
                  ))}
                </Scrollspy>
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default DynamicBlogContent;

