"use client";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import DOMPurify from "isomorphic-dompurify";
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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DynamicBlogContent({ blog }) {
  const [shareUrl, setShareUrl] = useState("");

  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "https://email-backend.heybuddy.co.in/contact";

    try {
      setIsSubmitting(true);
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          mobile: phoneNumber,
        }),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        console.error("Failed to submit form:", response.statusText);
        toast.error("Failed to submit form. Please try again.", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error during form submission:", error.message);
      toast.error("Error submitting form.", { theme: "dark" });
    } finally {
      setIsSubmitting(false);
    }
  };

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
  // Supports: provided TOC, HTML string, flat array, and nested structure
  const stripHTMLTags = (html) => {
    if (!html || typeof html !== "string") return "";
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
  };

  const generateTableOfContents = () => {
    // If backend provides tableOfContents, use it
    if (blog.tableOfContents && Array.isArray(blog.tableOfContents) && blog.tableOfContents.length > 0) {
      return blog.tableOfContents;
    }

    // If pageContent is a string (HTML), try to extract headings
    if (typeof blog.pageContent === 'string') {
      // For HTML strings, we could parse and extract headings, but it's complex
      // Return empty for now, or backend should provide tableOfContents
      return [];
    }

    // If pageContent is not an array, return empty
    if (!blog.pageContent || !Array.isArray(blog.pageContent)) return [];

    // Check if nested structure (each item has "heading" property)
    if (blog.pageContent[0]?.heading) {
      // Nested structure - just map headings
      return blog.pageContent.map((section, index) => ({
        id: `section${index + 1}`,
        title: stripHTMLTags(section.heading) || `Section ${index + 1}`,
      }));
    } else {
      // Flat structure - filter headings
      return blog.pageContent
        .filter(block => block && block.type === "heading")
        .map((block, index) => ({
          id: `section${index + 1}`,
          title: stripHTMLTags(block.content || block.text) || `Section ${index + 1}`,
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
      border: "border-[#10B981]",
      bg: "bg-[#10b98124]",
      text: "text-[#10B981]",
      dot: "bg-[#10B981]"
    },
    Development: {
      border: "border-[#3B82F6]",
      bg: "bg-[#3b82f624]",
      text: "text-[#3B82F6]",
      dot: "bg-[#3B82F6]"
    },
    AI: {
      border: "border-[#8B5CF6]",
      bg: "bg-[#8b5cf624]",
      text: "text-[#8B5CF6]",
      dot: "bg-[#8B5CF6]"
    },
    CGI: {
      border: "border-[#F59E0B]",
      bg: "bg-[#f59e0b24]",
      text: "text-[#F59E0B]",
      dot: "bg-[#F59E0B]"
    },
    AR: {
      border: "border-[#EF4444]",
      bg: "bg-[#ef444424]",
      text: "text-[#EF4444]",
      dot: "bg-[#EF4444]"
    }
  };

  const colors = categoryColors[blog.category] || categoryColors.Development;
  const normalizedBlogTitle = (blog.title || "").trim();

  // Helper function to check if content is HTML
  const isHTML = (content) => {
    if (!content || typeof content !== 'string') return false;
    // Check for HTML tags
    const htmlRegex = /<[a-z][\s\S]*>/i;
    return htmlRegex.test(content);
  };

  // Helper function to sanitize and render HTML
  const renderHTML = (htmlContent) => {
    if (!htmlContent || typeof htmlContent !== 'string') return null;

    // Replace h1 with h2 to ensure only one h1 exists (the main title)
    const modifiedHTML = htmlContent.replace(/<h1/gi, '<h2').replace(/<\/h1>/gi, '</h2>');

    // Sanitize HTML to prevent XSS attacks
    const sanitizedHTML = DOMPurify.sanitize(modifiedHTML, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'b', 'i', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'span', 'div',
        'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'hr', 'section', 'article'
      ],
      ALLOWED_ATTR: [
        'href', 'target', 'rel', 'class', 'id', 'src', 'alt', 'title', 'width', 'height',
        'style', 'data-id'
      ],
      ALLOW_DATA_ATTR: false,
    });

    return (
      <div
        className="blog-html-content text-white"
        style={{
          color: 'white',
        }}
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    );
  };

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

  // Helper function to render rich text content (supports both HTML and Markdown)
  const renderRichText = (content) => {
    if (!content) return null;

    // If content is HTML, render it directly
    if (isHTML(content)) {
      return renderHTML(content);
    }

    // Otherwise, render as Markdown
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              {children}
            </a>
          ),
          p: ({ children }) => (
            <p className="text-white text-base font-light leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 text-white mb-4 space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 text-white mb-4 space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-white text-base font-light">
              {children}
            </li>
          ),
          h1: ({ children }) => (
            <h2 className="text-3xl font-extrabold text-white mb-4 mt-6">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h3 className="text-2xl font-bold text-white mb-3 mt-5">
              {children}
            </h3>
          ),
          h3: ({ children }) => (
            <h4 className="text-xl font-semibold text-white mb-2 mt-4">
              {children}
            </h4>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-white">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  // Render content blocks with rich text support (handles HTML and structured content)
  const renderBlock = (block, index) => {
    // If block is a string, treat it as HTML or text
    if (typeof block === 'string') {
      return (
        <div key={index}>
          {isHTML(block) ? renderHTML(block) : renderRichText(block)}
        </div>
      );
    }

    // If block doesn't have a type, try to render content directly
    if (!block.type && block.content) {
      return (
        <div key={index}>
          {isHTML(block.content) ? renderHTML(block.content) : renderRichText(block.content)}
        </div>
      );
    }

    switch (block.type) {
      case "heading":
        // If content is HTML, render it using the shared renderHTML function to ensure proper styling
        if (isHTML(block.content)) {
          return (
            <div key={index}>
              {renderHTML(block.content)}
            </div>
          );
        }
        return (
          <h2 key={index} className="text-2xl font-bold text-white mb-3 mt-5">
            {block.content}
          </h2>
        );
      case "subheading":
        // Handle HTML subheadings
        if (isHTML(block.content)) {
          return (
            <div key={index}>
              {renderHTML(block.content)}
            </div>
          );
        }
        return (
          <h3 key={index} className="text-xl font-semibold text-white mb-2 mt-4">
            {block.content}
          </h3>
        );
      case "subsubheading": // Explicitly handle h3/h4 if they come as this type
      case "heading3":
        return (
          <h4 key={index} className="text-lg font-semibold text-white mb-2 mt-4">
            {block.content}
          </h4>
        );
      case "heading4":
        return (
          <h4 key={index} className="text-lg font-semibold text-white mb-2 mt-4">
            {block.content}
          </h4>
        );
      case "paragraph":
        // Handle HTML paragraphs
        return (
          <div key={index}>
            {isHTML(block.content) ? renderHTML(block.content) : renderRichText(block.content)}
          </div>
        );
      case "list":
        if (block.items && Array.isArray(block.items)) {
          const ListTag = block.listStyle === 'ordered' ? 'ol' : 'ul';
          const listClass = block.listStyle === 'ordered' ? 'list-decimal pl-5 text-white mb-4 space-y-2' : 'list-disc pl-5 text-white mb-4 space-y-2';
          return (
            <ListTag key={index} className={listClass}>
              {block.items.map((item, i) => (
                <li key={i} className="text-base font-light">
                  {isHTML(item) ? (
                    <span dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item, {
                        ALLOWED_TAGS: ['p', 'a', 'strong', 'em', 'span', 'br'],
                        ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
                      })
                    }} />
                  ) : (
                    renderRichText(item)
                  )}
                </li>
              ))}
            </ListTag>
          );
        }
        return null;
      case "faq":
        if (block.items && Array.isArray(block.items) && block.items.length > 0) {
          return (
            <div key={index} className="blog-faq-container my-6">
              <h2 className="text-2xl font-bold text-white mb-4 mt-6">FAQs</h2>
              <div className="space-y-6">
                {block.items.map((item, i) => (
                  <div key={i} className="border-l-4 border-gray-600 pl-4">
                    <div className="text-lg font-semibold text-white mb-2">
                      {item.question ? (isHTML(item.question) ? renderHTML(item.question) : item.question) : "(No question)"}
                    </div>
                    <div className="text-base font-light text-gray-200">
                      {item.answer ? (isHTML(item.answer) ? renderHTML(item.answer) : renderRichText(item.answer)) : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      case "table":
        return (
          <div key={index} className="blog-table-container my-6">
            {block.caption && (
              <p className="text-sm text-gray-400 mb-2 italic">{block.caption}</p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-700">
                {block.hasHeader && block.headers && block.headers.length > 0 && (
                  <thead>
                    <tr>
                      {block.headers.map((header, i) => (
                        <th
                          key={i}
                          className="border border-gray-700 px-4 py-3 bg-gray-800 text-white font-semibold text-left"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {block.rows && block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-900/50" : "bg-gray-800/30"}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-gray-700 px-4 py-3 text-white"
                        >
                          {isHTML(cell) ? (
                            <span dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(cell, {
                                ALLOWED_TAGS: ['p', 'a', 'strong', 'em', 'span', 'br', 'ul', 'ol', 'li'],
                                ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
                              })
                            }}
                            />
                          ) : (
                            renderRichText(cell)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        // Default: try to render content (handles HTML automatically)
        return (
          <div key={index}>
            {block.content ? (
              isHTML(block.content) ? renderHTML(block.content) : renderRichText(block.content)
            ) : null}
          </div>
        );
    }
  };

  // Group content by sections
  // Supports: HTML string, flat array, and nested structure
  const sections = [];

  if (!blog.pageContent) {
    // No content
  } else if (typeof blog.pageContent === 'string') {
    // Pure HTML string - render as single section
    sections.push({
      id: 'section1',
      blocks: [blog.pageContent] // Treat the HTML string as a single block
    });
  } else if (Array.isArray(blog.pageContent)) {
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
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      {/* Breadcrumb */}
      <div className="hidden lg:flex gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white ml-[5%]">
        <span>Blog</span>
        <span><FaChevronRight /></span>
        <span>{blog.title}</span>
      </div>

      {/* Featured Image */}
      <div className={`rounded-xl relative overflow-hidden border-2 w-[95%] lg:w-[90%] h-auto lg:h-[72vh] mx-auto mt-4 ${colors.border}`}>
        <div className="w-full h-full min-h-[250px] relative aspect-video lg:aspect-auto">
          <Image
            loading="eager"
            src={blog.bannerImage || blog.coverImage || "/Images/Blog.png"}
            alt={blog.bannerImageAlt || blog.coverImageAlt || blog.title}
            fill
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover"
            quality={100}
            priority
            unoptimized
          />
        </div>

        <div className="absolute bottom-0 w-full py-6 md:py-8 px-5 md:px-12 flex flex-col gap-3 md:gap-5 backdrop-blur-xl bg-black/50">
          {/* Category Badge */}
          <div className={`flex items-center py-[6px] px-4 gap-[8px] w-fit rounded-full border border-white/20 shadow-sm ${colors.bg} bg-opacity-60`}>
            <span className={`h-2.5 w-2.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)] ${colors.dot}`}></span>
            <span className={`font-bold text-sm tracking-wide ${colors.text}`}>{blog.category || "Development"}</span>
          </div>

          <h1 className="text-xl md:text-4xl font-bold text-white w-full leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="pt-10 flex flex-col lg:flex-row lg:w-[90%] xl:w-[90%] mx-auto gap-10 relative">
        {/* Sidebar - Table of Contents & Form */}
        <section className="lg:w-[30%] flex flex-col gap-8 pt-0 lg:pt-12 h-fit lg:sticky lg:top-20">
          {/* Mobile Breadcrumb */}
          <div className="flex flex-col gap-7 lg:hidden">
            <div className="flex text-sm md:text-base gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white">
              <span>Blog</span>
              <span>
                <FaChevronRight />
              </span>
              <span>{blog.title}</span>
            </div>
          </div>

          {/* Desktop TOC */}
          <div className="hidden lg:flex flex-col gap-5">
            <h3 className="text-base text-white font-bold">In this article</h3>
            <div className="text-white">
              {tableOfContents.length > 0 && (
                <Scrollspy
                  className="flex flex-col gap-[10px]"
                  items={tableOfContents.map(item => item.id)}
                  currentClassName={`border-l-4 ${colors.border} ${colors.text}`}
                  offset={-140}
                >
                  {tableOfContents.map((item, index) => (
                    <p
                      key={index}
                      className="cursor-pointer pl-2 font-thin text-gray-300 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                    >
                      {item.title}
                    </p>
                  ))}
                </Scrollspy>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="hidden lg:block bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Unlock how AI can transform your business in just one call
            </h3>
            <div className="flex flex-col gap-2 mb-4">
              <h4 className="text-sm font-bold text-white">CONTACT US</h4>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                required
              />
              <div className="phone-input-container-dark">
                <PhoneInput
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  defaultCountry="US"
                  className="bg-black border border-gray-700 rounded-lg p-3 text-white focus-within:border-blue-500"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                required
              />
              <textarea
                placeholder="Describe your needs"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition-colors w-full"
              >
                {isSubmitting ? "Sending..." : "Schedule a Meet"}
              </button>
            </form>
          </div>
        </section>

        {/* Main Content */}
        <section className="lg:w-[70%] flex flex-col gap-5">
          <div className="flex flex-col gap-14">
            <section className="flex flex-col gap-[30px] pb-[40px]">
              {sections.length > 0 ? (
                sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="flex flex-col gap-5 text-white text-base font-light"
                  >
                    {/* Render heading if nested structure AND it's not the same as the main title */}
                    {section.heading &&
                      stripHTMLTags(section.heading).trim() !== normalizedBlogTitle && (
                        isHTML(section.heading) ? (
                          renderHTML(section.heading)
                        ) : (
                          <h2 className="text-2xl font-bold text-white mb-3 mt-5">
                            {section.heading}
                          </h2>
                        )
                      )}
                    {/* Render content blocks */}
                    {section.blocks.map((block, index) => {
                      // Skip rendering H1s that duplicate the title within content blocks as well
                      if (block.type === "heading" && block.content === blog.title) {
                        return null;
                      }
                      return renderBlock(block, index);
                    })}
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
            <h3 className="text-base md:text-xl font-normal text-white">
              Share with your community!
            </h3>
            <div className="flex items-center gap-3">
              <TwitterShare url={shareUrl} title={blog.title} hashtags={["HEYBUDDY", "BLOGS"]} round size="30px" />
              <LinkedinShare url={shareUrl} quote={blog.title} round size="30px" />
              <FacebookShare url={shareUrl} quote={blog.title} round size="30px" />
              <TelegramShare url={shareUrl} round size="30px" />
              <WhatsappShare url={shareUrl} title={blog.title} separator=":: " round size="30px" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default DynamicBlogContent;

