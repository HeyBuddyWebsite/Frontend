"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Grid1 = () => {
  const controls = useAnimation();
  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ 
        position: "relative", 
        zIndex: 30,
        marginTop: 0,
        marginBottom: 0,
        width: "100%",
        position: "relative",
      }}
    >
      <div className="bg-black">
        <div
          className="relative w-full"
          style={{
            backgroundImage:
              "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456828718_1hm0vv.png?x-id=PutObject')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top center",
            minHeight: "999px",
            paddingTop: "100px",
            paddingBottom: "clamp(100px, 10vw, 150px)",
          }}
        >
          {/* Main content section - matches Figma: x="160" y="100" width="1599" height="799" */}
          <div 
            className="relative z-10 mx-auto" 
            style={{ 
              maxWidth: "1599px", 
              width: "100%",
              paddingLeft: "clamp(40px, 8.33vw, 160px)", 
              paddingRight: "clamp(40px, 8.33vw, 160px)", 
              paddingTop: "0", 
              paddingBottom: "0" 
            }}
          >
            {/* Header section - matches Figma: x="0" y="0" width="1599" height="197" */}
            <div 
              className="text-center" 
              style={{ 
                marginBottom: "0",
                minHeight: "197px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
            {/* Heading */}
              <h2 
                className="text-3xl lg:text-4xl font-bold text-white leading-tight" 
                style={{ 
                  padding: "0",
                  margin: "0",
                  width: "100%",
                  maxWidth: "1599px"
                }}
              >
              Our AI-native Solution For Scalable Innovations
            </h2>
            
              {/* Paragraph - matches Figma: x="148.5" y="64" width="1302" height="48" */}
              <p 
                className="text-gray-300 text-base lg:text-lg mx-auto leading-relaxed" 
                style={{ 
                  maxWidth: "1302px", 
                  width: "100%",
                  marginLeft: "auto", 
                  marginRight: "auto", 
                  marginTop: "24px",
                  marginBottom: "0",
                  paddingLeft: "clamp(20px, 7.73vw, 148.5px)", 
                  paddingRight: "clamp(20px, 7.73vw, 148.5px)" 
                }}
              >
              We help you create impactful, efficient, and engaging experiences. From stunning 3D models, to advanced agentic AI capabilities, we deliver solutions focused towards business impact, innovation and market leadership.
            </p>
            
              {/* CTA Button - matches Figma: x="659.5" y="136" width="280" height="61" */}
              <div 
                className="flex justify-center" 
                style={{ 
                  marginTop: "36px"
                }}
              >
              <Link href="/Pages/Contactus">
                  <button 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    style={{
                      width: "fit-content",
                      minWidth: "220px",
                      height: "auto",
                      justifyContent: "center",
                      fontSize: "16px"
                    }}
                  >
                  Discuss Your Solution
                    <BsArrowRight className="text-lg" />
                </button>
              </Link>
            </div>
          </div>
          
            {/* Grid Cards Section - matches Figma: x="0.5" y="297" width="1598" height="502" */}
            <div 
              style={{ 
                marginTop: "clamp(50px, 15.47vw, 100px)",
                width: "100%",
                maxWidth: "1598px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              {/* First Row - matches Figma: 3 cards, each 513px or 512px wide with 30px gaps */}
              <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto" 
                style={{ 
                  maxWidth: "1598px",
                  width: "100%",
                  marginBottom: "clamp(15px, 1.56vw, 30px)",
                  gap: "clamp(15px, 1.56vw, 30px)"
                }}
              >
                {/* Card 1: Conversational AI Solutions - matches Figma: x="0" y="0" width="513" height="236" */}
                <div 
                  className="group bg-gray-600/30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 hover:border-gray-500 hover:shadow-xl transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "513px",
                    minHeight: "180px",
                    height: "auto",
                    marginRight: "auto",
                    marginLeft: "0"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-600/70 flex items-center justify-center mb-3 bg-gray-700/30 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
                    style={{ marginTop: "16px", marginLeft: "16px" }}
                  >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                  <h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "20px",
                      fontSize: "24px",
                      lineHeight: "28px"
                    }}
                  >
                    Conversational AI Solutions
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "12px",
                      width: "481px",
                      maxWidth: "calc(100% - 32px)",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                  >
                  Let AI driven technology handle your customer queries 24/7 with emotional intelligence and context awareness but at super-speed.
                </p>
              </div>

                {/* Card 2: RAG System Development - matches Figma: x="543" y="0" width="512" height="236" */}
                <div 
                  className="group bg-gray-600/30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 hover:border-gray-500 hover:shadow-xl transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "512px",
                    minHeight: "180px",
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-600/70 flex items-center justify-center mb-3 bg-gray-700/30 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
                    style={{ marginTop: "16px", marginLeft: "16px" }}
                  >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                  <h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "20px",
                      fontSize: "24px",
                      lineHeight: "28px"
                    }}
                  >
                    RAG System Development
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "12px",
                      width: "480px",
                      maxWidth: "calc(100% - 32px)",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                  >
                  Empower your team with readily available enterprise-wide information through a secure and trusted RAG system that lives on-prem.
                </p>
              </div>

                {/* Card 3: Agentic AI Solution - matches Figma: x="1085" y="0" width="513" height="236" */}
                <div 
                  className="group bg-gray-600/30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 hover:border-gray-500 hover:shadow-xl transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "513px",
                    minHeight: "180px",
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "0"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-600/70 flex items-center justify-center mb-3 bg-gray-700/30 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
                    style={{ marginTop: "16px", marginLeft: "16px" }}
                  >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                  <h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "20px",
                      fontSize: "24px",
                      lineHeight: "28px"
                    }}
                  >
                    Agentic AI Solution
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "12px",
                      width: "481px",
                      maxWidth: "calc(100% - 32px)",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                  >
                  Redefine your business workflows with our Agentic AI solutions that let your team do more, do better in less time.
                </p>
                </div>
              </div>

              {/* Second Row - matches Figma: 3 cards with 30px gaps */}
              <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto" 
                style={{ 
                  maxWidth: "1598px",
                  width: "100%",
                  gap: "clamp(15px, 1.56vw, 30px)"
                }}
              >
                {/* Card 4: VR Business Solution - matches Figma: x="0" y="266" width="513" height="236" */}
                <div 
                  className="group bg-gray-600/30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 hover:border-gray-500 hover:shadow-xl transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "513px",
                    minHeight: "180px",
                    height: "auto",
                    marginRight: "auto",
                    marginLeft: "0"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-600/70 flex items-center justify-center mb-3 bg-gray-700/30 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
                    style={{ marginTop: "16px", marginLeft: "16px" }}
                  >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                  <h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "20px",
                      fontSize: "24px",
                      lineHeight: "28px"
                    }}
                  >
                    VR Business Solution
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "12px",
                      width: "481px",
                      maxWidth: "calc(100% - 32px)",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                  >
                  From experiential learning to immersive marketing, we deploy your AI-driven VR solutions for a confident workforce and connected customer.
                </p>
              </div>

                {/* Card 5: AR Navigation - matches Figma: x="543" y="266" width="512" height="236" */}
                <div 
                  className="group bg-gray-600/30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 hover:border-gray-500 hover:shadow-xl transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "512px",
                    minHeight: "180px",
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-600/70 flex items-center justify-center mb-3 bg-gray-700/30 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
                    style={{ marginTop: "16px", marginLeft: "16px" }}
                  >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
                  <h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "20px",
                      fontSize: "24px",
                      lineHeight: "28px"
                    }}
                  >
                    AR Navigation
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "12px",
                      width: "480px",
                      maxWidth: "calc(100% - 32px)",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                  >
                  Take your customer interaction to the next level with intelligence AR solutions that perceive the real work like humans.
                </p>
              </div>

                {/* Card 6: Software Development - matches Figma: x="1085" y="266" width="513" height="236" */}
                <div 
                  className="group bg-gray-600/30 backdrop-filter backdrop-blur-md border border-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 hover:border-gray-500 hover:shadow-xl transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "513px",
                    minHeight: "180px",
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "0"
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-600/70 flex items-center justify-center mb-3 bg-gray-700/30 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
                    style={{ marginTop: "16px", marginLeft: "16px" }}
                  >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                  <h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "20px",
                      fontSize: "24px",
                      lineHeight: "28px"
                    }}
                  >
                    Software Development
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ 
                      marginLeft: "16px",
                      marginTop: "12px",
                      width: "481px",
                      maxWidth: "calc(100% - 32px)",
                      fontSize: "14px",
                      lineHeight: "20px"
                    }}
                  >
                  With AI on our side, we go from prototype to product at lightning speed for your super-sonic digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Grid1;
