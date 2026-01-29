"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const images = [0, 1, 2, 3, 4, 5, 6, 7];
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
      "Want to host, store, manage, and process data on the Cloud? Or want to organize and streamline your existing data management? Even better, if you seek Big Data analytics to extract valuable insights from large datasets we help you at every step. Custom Cloud Computing Solution Data management solutions Big Data Analytics.",
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
          <h1 className="py-4 text-2xl lg:text-3xl">
            Our Custom Software Development Services For Every Business
            Challenge
          </h1>
          <p className="text-base md:text-lg">
            Hey Buddy is one of the leading tech solution providers. Our large
            team of talented and experienced software developer develop
            solutions for every business need.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev3.png')] bg-fixed bg-bottom ">
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text flex flex-col items-center">
              {texts.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
                />
              ))}
            </div>
          </div>
          <div className="work__right">
            <div className="work__right-b1">
              <div className="work__photo flex flex-col items-center">
                <PhotoItem
                  title="0"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649532483_d72ylk.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649554256_70ywdw.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649555282_cjrmfw.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649556327_xyklz9.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649557423_ej5sf0.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649558438_of9pwl.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649560532_gyxgtt.jpg"
                  }
                />

                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649561479_kdc2ev.jpg"
                  }
                />
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
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Motionslide;
