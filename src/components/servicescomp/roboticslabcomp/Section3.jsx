"use client";

import { useEffect } from "react";
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

const Motionslide = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const workInfoItems = document.querySelectorAll(".work__photo-item");
    const totalItems = workInfoItems.length;

    workInfoItems.forEach((item, index) => {
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

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation,
      scrub: 0.3,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

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
            Our Robotics Lab Development Services
          </h2>
          <p className="text-m lg:text-m">
            At HeyBuddy, we believe a robotics lab is most effective when the
            technology disappears and the learning takes center stage. Our
            services are designed to help you adopt, build, and scale your
            robotics and AI lab to deliver measurable results.
          </p>
        </div>
      </div>
      <div
        className="h-fit relative lg:bg-no-repeat lg:bg-center"
        style={{
          willChange: "transform",
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456534207_m7f7vl.png?x-id=PutObject')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <section className="work hidden lg:flex flex-row justify-between">
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
                  <PhotoItem key={index} title={text.title} imgSrc={text.img} />
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
