"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const texts = [
  {
    title: "Custom Software Application Development",
    description:
      "Experience tailored applications for your business needs. Our expertise includes crafting engaging and user-friendly applications for web, mobile, and desktop, as well as specific services like UI/UX design and development. Enterprise App Solutions Desktop and Web Applications Development Mobile App Development UI/UX Designing and Development",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "Digital Marketplace Development",
    description:
      "We develop robust digital retail platforms to power your online sales and transactions with the latest features and align with your brand values. Our approach makes sure you get a user-friendly, secure payment process and mobile responsive platform. eCommerce Development mCommerce Development POS Integration B2B eCommerce Development",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Cloud and Data Management",
    description:
      "Want to host, store, manage, and process data on the Cloud? Or want to organize and streamline your existing data management? Even better, if you seek Big Data Analytics to extract valuable insights from large datasets we help you at every step. Custom Cloud Computing Solution Data management solutions Big Data Analytics.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
  },
  {
    title: "Security and Assurance",
    description:
      "Protecting your systems and data from evolving cyber threats. Get rigorous testing services to ensure the reliability of your software. Moreover, get ongoing assistance, updates, and troubleshooting for uninterrupted operations. Cyber Security Services Quality Testing And Assurance Services Maintenance and Support",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "Emerging Technologies",
    description:
      "Get all the emerging solutions in one place. Get integration and development of innovative IoT applications and devices. Harnessing the power of AI/ML for intelligent solutions. And get secure and transparent blockchain solutions for your business. IoT Solutions AI and Machine Learning Services Blockchain Development ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds4.jpg",
  },
  {
    title: "Enterprise Solutions",
    description:
      "We develop customer Enterprise Resource Planning software and integrate it with your business processes for efficient management of the business and its resources. We develop Customer Relationship Management Systems to streamline customer interactions and data management. ERP Development CRM Development",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds5.jpg",
  },

  {
    title: "Content Management Systems (CMS)",
    description:
      "We develop customized platforms for you to create, manage, and organize digital content. Our robust CMS development solution enables you to effortlessly update product information, optimize content for SEO, and deliver a dynamic and engaging online experience for customers. Content Management System User Interface (UI) Design Database Management Workflow Automation",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "Consultation Services",
    description:
      "We offer expert guidance to develop your technology strategies and solutions that specifically cater to your specific business requirements. Our expertise and years of experience deliver actionable and data-driven insights that align with your business objectives. Enterprise Games Project Consultation Cybersecurity Consulting Digital Transformation Strategising ERP Implementation Assistance Data Management and Analytics",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds4.jpg",
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
                Our Custom Software Development Services For Every Business
                Challenge
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Hey Buddy is one of the leading tech solution providers. Our large
                team of talented and experienced software developer develop
                solutions for every business need.
              </p>
            </div>

            <div className="work__text flex flex-col gap-[15vh] pb-[20vh]">
              {texts.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
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
              Our Custom Software Development Services For Every Business
              Challenge
            </h2>
            <p className="text-lg text-gray-300">
              Hey Buddy is one of the leading tech solution providers. Our large
              team of talented and experienced software developer develop
              solutions for every business need.
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
