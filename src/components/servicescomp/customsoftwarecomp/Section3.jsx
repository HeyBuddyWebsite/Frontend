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
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });

    gsap.set(".work__photo-item", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });

    const animation = gsap.to(".work__photo-item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },

      stagger: 0.5,
      ease: "back",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 0.1,
    });
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
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/custome%20software%20application.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/Digital%20marketplace%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/cloud%20%26%20data%20managment%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/Security%26%20assistance%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/Emerging%20technologies.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/enterprise%20solutions.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/content%20managment%20systems.jpg"
                  }
                />

                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/consultation%20services.jpg"
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
