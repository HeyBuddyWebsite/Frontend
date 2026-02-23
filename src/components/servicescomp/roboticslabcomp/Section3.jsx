"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../aidevelopmentcomp/motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const SLIDER_IMAGES = [
  "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/service+image+4.png",
  "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/service+image+2.png",
  "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/service+image+3.png",
  "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/service+image+1.png",
];

const texts = [
  {
    title: "Robotics Lab Strategy & Consulting",
    description:
      "Not sure where to start? We provide strategy workshops and a robotics lab setup requirements assessment. We'll help you navigate the choice between a physical robotics lab setup and a robotics virtual lab for hybrid learning models.",
    subItems: [
      "Robotics Lab Setup Cost ROI Forecasting",
      "Space Audit & Robotic Lab Design Blueprints",
      "Hardware Selection (From Sensors to Humanoids)",
      "Robotics Lab Requirements Gap Analysis",
    ],
    img: SLIDER_IMAGES[0],
  },
  {
    title: "End-to-End Robotics Lab Setup & Infrastructure",
    description:
      "We handle the heavy lifting, from robotic lab design to the local server architecture. We build high-performance environments that handle everything from simple DIY kits to complex cognitive robotics lab simulations.",
    subItems: [
      "Atal Robotics Lab (ATL) Compliance Setup",
      "Safety-First Layouts & Custom Furniture",
      "Robotics Lab Setup in School (K-12 & Higher Ed)",
      "High-Speed Network Infrastructure for Real-Time Coding",
    ],
    img: SLIDER_IMAGES[1],
  },
  {
    title: "Robotics & AI Lab Content Integration",
    description:
      "A robotics lab for schools in India is only as good as the lessons taught within it. We specialize in connecting our 550+ modules with your current syllabus, ensuring your AI and robotics lab in school operates with zero friction.",
    subItems: [
      "LMS-Integrated Graded Curriculum",
      "Python, Scratch, and C++ Coding Modules",
      "Next Robotics Lab Roadmap Integration",
      "Automated Student Assessment & Certification",
    ],
    img: SLIDER_IMAGES[2],
  },
  {
    title: "Specialized Research & Virtual Robotics Labs",
    description:
      "For higher education, we build robotics lab university level environments, including virtual robotics lab setups. These allow students to test code in a digital twin before deploying it to physical hardware.",
    subItems: [
      "Online Virtual Robotics Lab Access",
      "Industrial Automation and Robotics Lab Manual Customization",
      "Digital Twin Simulation Software",
      "Robotics and Automation Lab Performance Monitoring",
    ],
    img: SLIDER_IMAGES[3],
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
                Our Robotics Lab Development Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At HeyBuddy, we believe a robotics lab is most effective when the
                technology disappears and the learning takes center stage. Our
                services are designed to help you adopt, build, and scale your
                robotics and AI lab to deliver measurable results.
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
              Our Robotics Lab Development Services
            </h2>
            <p className="text-lg text-gray-300">
              At HeyBuddy, we believe a robotics lab is most effective when the
              technology disappears and the learning takes center stage.
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
