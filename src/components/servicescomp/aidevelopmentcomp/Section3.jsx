"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const texts = [
  {
    title: "1. AI Consulting Services",
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
    title: "2. Custom AI and ML Development Services",
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
    title: "3. AI Integration Services",
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
    title: "4. NLP Development Services",
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
    title: "5. Gen AI Development Services",
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
    title: "6. AI App Development Services",
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
    title: "7. AI Chatbot Development Services",
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
    title: "8. Custom LLM Development & Fine-Tuning",
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
    title: "9. AI Agent Development",
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

const Section3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const workInfoItems = containerRef.current.querySelectorAll(".work__photo-item");
      const totalItems = workInfoItems.length;

      workInfoItems.forEach(function (item, index) {
        item.style.zIndex = totalItems - index;
        item.style.willChange = "clip-path";
        item.style.transform = "translateX(-50%) translateZ(0)";
      });

      gsap.set(".work__photo-item", {
        clipPath: "inset(0px 0px 0px 0px)",
        force3D: true,
      });

      const animation = gsap.to(".work__photo-item:not(:last-child)", {
        clipPath: "inset(0px 0px 100% 0px)",
        stagger: 0.5,
        ease: "power2.out",
        force3D: true,
      });

      ScrollTrigger.create({
        trigger: ".work-section-inner",
        start: "top top",
        end: "bottom bottom",
        animation: animation,
        scrub: 0.3,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="work-section bg-black text-white relative">
      <div className="py-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Desktop View */}
        <section className="work-section-inner hidden lg:flex flex-row gap-12 justify-between">
          <div className="work__left w-1/2">
            <div className="mb-20">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
                Our Artificial Intelligence <br /> Development Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                AI works best when it solves real business problems. Our AI development services are designed to help you adopt, build, and scale AI in a way that delivers measurable results.
              </p>
            </div>

            <div className="work__text flex flex-col gap-[15vh] pb-[20vh]">
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
          <div className="work__right w-1/2 relative">
            <div className="work__right-b1 sticky top-0 h-screen flex items-start pt-20">
              <div className="work__photo relative w-full h-[500px]">
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

        {/* Mobile View */}
        <section className="flex flex-col gap-10 lg:hidden text-white">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Our Artificial Intelligence Development Services
            </h2>
            <p className="text-lg text-gray-300">
              AI works best when it solves real business problems. Our AI development services are designed to help you adopt, build, and scale AI in a way that delivers measurable results.
            </p>
          </div>
          <div className="flex flex-col pb-20">
            {texts.map((text, index) => (
              <div
                key={index}
                className="sticky top-20"
                style={{
                  top: `${100 + index * 40}px`,
                  marginBottom: `${index === texts.length - 1 ? 0 : 40}px`,
                  zIndex: index,
                }}
              >
                <GamedevCard
                  imageUrl={text.img}
                  title={text.title}
                  description={text.description}
                  subItems={text.subItems}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section3;
