"use client";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import {
  FacebookShare,
  LinkedinShare,
  TwitterShare,
  WhatsappShare,
  TelegramShare,
} from "react-share-kit";
import { FaChevronRight } from "react-icons/fa6";
import "./page.css";
import "highlight.js/styles/github-dark.css";

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

  // Helper function to render rich text content
  const renderRichText = (content) => {
    if (!content) return '';
    
    // If content is already a React element, return it
    if (React.isValidElement(content)) {
      return content;
    }
    
    // If content is a string, check if it contains markdown-like syntax
    if (typeof content === 'string') {
      // Simple markdown-like syntax detection
      const hasMarkdownSyntax = /(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\)|#{1,6}\s)/.test(content);
      
      if (hasMarkdownSyntax) {
        return (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
            components={{
              p: ({ children }) => <span>{children}</span>,
              strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              code: ({ children }) => (
                <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              ),
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        );
      }
      
      // Fallback to simple text with line breaks
      return renderTextWithBreaks(content);
    }
    
    return content;
  };

  // Render content blocks with rich text support
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
          <h2 key={index} className="text-xl font-semibold text-white">
            {renderTextWithBreaks(block.content)}
          </h2>
        );
      
      case "paragraph":
        return (
          <div key={index} className="font-thin text-gray-100">
            {renderRichText(block.content)}
          </div>
        );
      
      case "list":
        return (
          <ul key={index} className="list-disc pl-5">
            {block.items && block.items.map((item, i) => (
              <li key={i} className="font-thin text-gray-100">
                {renderRichText(item)}
              </li>
            ))}
          </ul>
        );
      
      // Rich text content types
      case "markdown":
        return (
          <div key={index} className="font-thin text-gray-100 prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize, rehypeHighlight]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-extrabold text-white mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-white mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold text-white mb-2">{children}</h3>,
                p: ({ children }) => <p className="font-thin text-gray-100 mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
                li: ({ children }) => <li className="font-thin text-gray-100">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-4">
                    {children}
                  </blockquote>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-sm">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4">
                      <code className={className}>{children}</code>
                    </pre>
                  );
                },
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <Image
                    src={src}
                    alt={alt || ""}
                    width={800}
                    height={400}
                    className="rounded-lg my-4"
                  />
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full border-collapse border border-gray-600">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-gray-600 px-4 py-2 bg-gray-800 text-white font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-gray-600 px-4 py-2 text-gray-100">
                    {children}
                  </td>
                ),
              }}
            >
              {block.content}
            </ReactMarkdown>
          </div>
        );
      
      case "image":
        return (
          <div key={index} className="my-6">
            <Image
              src={block.src}
              alt={block.alt || ""}
              width={block.width || 800}
              height={block.height || 400}
              className="rounded-lg w-full h-auto"
            />
            {block.caption && (
              <p className="text-sm text-gray-400 text-center mt-2 italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case "code":
        return (
          <div key={index} className="my-4">
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className={`language-${block.language || 'text'}`}>
                {block.content}
              </code>
            </pre>
            {block.caption && (
              <p className="text-sm text-gray-400 text-center mt-2 italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case "quote":
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-4">
            <p className="font-thin">{renderRichText(block.content)}</p>
            {block.author && (
              <cite className="text-sm text-gray-400 block mt-2">
                — {block.author}
              </cite>
            )}
          </blockquote>
        );
      
      case "video":
        return (
          <div key={index} className="my-6">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src={block.src}
                title={block.title || ""}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
            {block.caption && (
              <p className="text-sm text-gray-400 text-center mt-2 italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case "embed":
        return (
          <div key={index} className="my-6">
            <div 
              className="w-full"
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          </div>
        );
      
      default:
        // Fallback for unknown types - try to render as markdown
        if (typeof block.content === 'string') {
          return (
            <div key={index} className="font-thin text-gray-100">
              {renderRichText(block.content)}
            </div>
          );
        }
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

