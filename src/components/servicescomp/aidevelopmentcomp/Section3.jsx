"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const texts = [
  {
    title: "AI Consulting Services",
    description: "Not sure where AI fits into your business? Let's figure it out together through collaborative AI strategy consulting. We'll start with a comprehensive AI readiness assessment to identify your best opportunities, then map out a clear AI roadmap development.",
    subItems: [
      "Strategy Workshops",
      "Readiness Scoring",
      "MVP Blueprints",
      "Vendor Selection",
      "ROI Forecasting",
      "Roadmap Handoff"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg",
  },
  {
    title: "Custom AI and ML Development Services",
    description: "We provide end-to-end AI development from designing predictive models and neural networks to implementing MLOps for ongoing management. The result is proprietary AI systems that tackle your specific challenges with precision.",
    subItems: [
      "White-Label Models",
      "Custom Architectures",
      "Domain Data Training",
      "Production Pipelines",
      "Model Explainability",
      "Performance SLAs"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg",
  },
  {
    title: "AI Integration Services",
    description: "Our AI integration services specialize in connecting new intelligence with your current ERP, CRM, and cloud platforms. We ensure AI workflow integration happens smoothly, with real-time data processing and zero business disruption.",
    subItems: [
      "API Connectors",
      "Legacy Compatibility",
      "Zero-Downtime Deployment",
      "Data Flow Mapping",
      "Security Protocols",
      "Integration Monitoring"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg",
  },
  {
    title: "NLP Development Services",
    description: "Being a leading AI development company, we build custom NLP solutions that perform sentiment analysis, document understanding, and multilingual text processing. Whether it's text classification or speech-to-text conversion, we make language work for your business.",
    subItems: [
      "Industry Jargon Trained",
      "Multi-Format Parsing",
      "Real-Time Sentiment",
      "Entity Recognition",
      "Summarization Engines",
      "Language Expansion"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/computer+vision+application.jpg",
  },
  {
    title: "Gen AI Development Services",
    description: "We create custom generative AI models trained on your brand's unique voice and assets. From text-to-image AI development to code generation tools, we build multimodal AI solutions that enhance creativity while maintaining your brand integrity.",
    subItems: [
      "Brand Voice Training",
      "Content Guardrails",
      "Multi-Format Output",
      "Asset Libraries",
      "Workflow Plugins",
      "Usage Analytics"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Data+Analytics+and+Insights.jpg",
  },
  {
    title: "AI App Development Services",
    description: "We specialize in mobile AI app development that incorporates machine learning capabilities directly into your software. Whether iOS/Android or cross-platform, our AI development company builds apps that think.",
    subItems: [
      "AI Feature Integration",
      "User Behavior Models",
      "Offline AI Capabilities",
      "Cross-Platform Logic",
      "App Store Ready",
      "Usage Analytics Suite"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Automation+and+Optimization.jpg",
  },
  {
    title: "AI Chatbot Development Services",
    description: "Our team builds AI-powered chatbots that handle complex dialogs, provide multilingual support, and offer voice-enabled interactions. Our enterprise chatbot development focuses on context-aware conversations that can escalate smoothly to human agents.",
    subItems: [
      "Conversation Flow Design",
      "Omnichannel Deployment",
      "Escalation Triggers",
      "FAQ Auto-Learning",
      "Tone Adaptation",
      "Chat Analytics Dashboard"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg",
  },
  {
    title: "Custom LLM Development & Fine-Tuning",
    description: "Why settle for generic AI when you can have intelligence tailored to your domain? Our custom large language model development involves fine-tuning foundational models on your proprietary data to create domain-specific AI that understands your business context.",
    subItems: [
      "Private Data Training",
      "RAG Systems",
      "Fine-Tuning Optimization",
      "Fact-Checking Layers",
      "Multi-Prompt Handling",
      "Model Portability"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg",
  },
  {
    title: "AI Agent Development",
    description: "Automate complex business processes with autonomous AI agent development. We create intelligent agents capable of multi-step task execution and collaborative decision-making. Our multi-agent systems work together to handle workflows from research to execution.",
    subItems: [
      "Workflow Automation",
      "Tool Integration",
      "Agent Collaboration",
      "Approval Workflows",
      "Failure Recovery",
      "Decision Logging"
    ],
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg",
  },
];

const Motionslide = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let workInfoItems = document.querySelectorAll(".work__photo-item");
    const totalItems = workInfoItems.length;

    // Set initial z-index and GPU-accelerated properties
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = totalItems - index;
      // Enable GPU acceleration for clipPath
      item.style.willChange = "clip-path";
      item.style.transform = "translateX(-50%) translateZ(0)";
    });

    // Set initial clipPath state (all images fully visible)
    gsap.set(".work__photo-item", {
      clipPath: "inset(0px 0px 0px 0px)",
      force3D: true,
    });

    // Create animation with clipPath - using original approach with optimized timing
    // The stagger ensures images change at the right time relative to text sections
    const animation = gsap.to(".work__photo-item:not(:last-child)", {
      clipPath: "inset(0px 0px 100% 0px)",
      stagger: 0.5, // Original value - keeps images visible longer
      ease: "power2.out", // Smooth easing
      force3D: true,
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 0.3, // Reduced for more responsive sync
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // Cleanup function
    return () => {
      scrollTrigger?.kill();
      workInfoItems.forEach((item) => {
        item.style.willChange = "auto";
      });
    };
  }, []);

  return (
    <div>
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h2 className="py-4 text-2xl lg:text-4xl">
            Our Artificial Intelligence Development Services
          </h2>
          <p className="text-m lg:text-m">
            AI works best when it solves real business problems. Our AI development services are designed to help you adopt, build, and scale AI in a way that delivers measurable results.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev3.png')] bg-fixed bg-bottom" style={{ willChange: 'transform' }}>
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text flex flex-col items-center">
              {texts.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
                  subItems={text.subItems}
                />
              ))}
            </div>
          </div>
          <div className="work__right">
            <div className="work__right-b1">
              <div className="work__photo flex flex-col items-center">
                {texts.map((text, index) => (
                  <PhotoItem
                    key={index}
                    title={text.title}
                    imgSrc={text.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 lg:hidden">
          {texts.map((text, index) => (
            <GamedevCard
              key={index}
              imageUrl={text.img}
              description={text.description}
              title={text.title}
              subItems={text.subItems}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Motionslide;
