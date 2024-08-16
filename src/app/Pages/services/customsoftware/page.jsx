"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/3dmodelingcomp/Section10";
import Pagenation from "@/components/servicescomp/3dmodelingcomp/Section8";
import Mixsection from "@/components/servicescomp/3dmodelingcomp/Section4";
import Timelinecomp from "@/components/servicescomp/3dmodelingcomp/Section5";
import Motionslide from "@/components/servicescomp/3dmodelingcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/3dmodelingcomp/Section1";
import Bottomclient from "@/components/servicescomp/3dmodelingcomp/Section9";
import Section7 from "@/components/servicescomp/3dmodelingcomp/Section7";
import ContactModal from "@/components/ContactModal/ContactModal";

const page = () => {
  const [contactusModal, setcontactusModal] = useState(false);

  const handlecontactusModal = () => {
    setcontactusModal(true);
  };
  const handleClose = (e) => {
    if (e.target.id === "sidebar") setcontactusModal(false);
  };
  const handleModalClose = () => {
    setcontactusModal(false);
  };

  const controls = useAnimation();
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the container is in the viewport
    const container = document.getElementById("fade-in-container");
    if (container) {
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const textAnimation = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
    },
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

  

  const data={
    section1:{
      heading:"Your Trusted Custom Software Development Company",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/cdc51fd91af6b51c4434cf57d79029ff.jpeg",
      text:"Hey Buddy is the name you really upon. We listen, understand, and meet your specific requirements with our custom software development services All this while, our sharp focus is on delivering a high-quality solution that meets your timely and budgetary parameters. Our commitment towards delivering quality has helped develop a vast clientele of 150 organizations, having wired in 400+ projects with a team of 250+ exert. No wonder we have a client retention rate of 97.68%. Once you join Hey Buddy as a partner, you stay",
    },
    
     checklist :[
      {
        title: "Healthcare",
      },
      {
        title: "Games",
      },
      {
        title: "Finance and Banking",
      },
      {
        title: "E-commerce",
      },
      {
        title: "Manufacturing",
      },
      {
        title: "Education",
      },
    ],

    gridSection1:{
      heading:"Get Specialised Software Solutions with Custom Software Development",

      para:
      "When you opt for customer software development, you get the exact solution you are looking for. This leads to higher business control, greater efficiency, outsmarting competition, and much more at a better price.",
      list :   [
      {
        id: "1",
        heading: "Tailored Solutions",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
        para: "Custom software development provides tailored solutions specifically designed to meet your unique needs and overcome specific challenges of your business.",
      },
      {
        id: "2",
        heading: "Increased Efficiency",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
        para: "When custom software fills the gaps, and streamlines and automates your business processes, your business operates on maximum efficiency.",
      },
      {
        id: "3",
        heading: "Competitive Advantage",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
        para: "You gain a formidable competitive edge when custom software implements your distinct and innovative features and functionalities, setting you apart in the market.",
      },
      {
        id: "4",
        heading: "Scalability",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
        para: "Custom software ensures your technology infrastructure expands as your company evolves and accommodates your growing needs.",
      },
      {
        id: "5",
        heading: "Cost Savings",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
        para: "Customer software reduces your reliance on generic, off-the-shelf solutions that require extensive customization and maintenance, saving a lot of cost and time.",
      },
      {
        id: "6",
        heading: "Enhanced Security",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
        para: "Integrate tailored security measures into your custom software, and get a higher level of protection against general as well as business-specific cyber threats.",
      },
    ],
      },

      section3:  {
        heading:"Our Custom Software Development Services For Every Business Challenge",
        para:"Hey Buddy is one of the leading tech solution providers. Our large team of talented and experienced software developer develop solutions for every business need.",
        list:[
          {
            title: "Custom Software Application Development",
            description:
              "Experience tailored applications for your business needs. Our expertise includes crafting engaging and user-friendly applications for web, mobile, and desktop, as well as specific services like UI/UX design and development. Enterprise App Solutions Desktop and Web Applications Development Mobile App Development UI/UX Designing and Development",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/custome%20software%20application.jpg",
          },
          {
            title: "Digital Marketplace Development",
            description:
              "We develop robust digital retail platforms to power your online sales and transactions with the latest features and align with your brand values. Our approach makes sure you get a user-friendly, secure payment process and mobile responsive platform. eCommerce Development mCommerce Development POS Integration B2B eCommerce Development",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/Digital%20marketplace%20dev.jpg",
          },
          {
            title: "Cloud and Data Management",
            description:
              "Want to host, store, manage, and process data on the Cloud? Or want to organize and streamline your existing data management? Even better, if you seek Big Data analytics to extract valuable insights from large datasets we help you at every step. Custom Cloud Computing Solution Data management solutions Big Data Analytics.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/cloud%20%26%20data%20managment%20dev.jpg",
          },
          {
            title: "Security and Assurance",
            description:
              "Protecting your systems and data from evolving cyber threats. Get rigorous testing services to ensure the reliability of your software. Moreover, get ongoing assistance, updates, and troubleshooting for uninterrupted operations. Cyber Security Services Quality Testing And Assurance Services Maintenance and Support",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/Security%26%20assistance%20dev.jpg",
          },
          {
            title: "Emerging Technologies",
            description:
              "Get all the emerging solutions in one place. Get integration and development of innovative IoT applications and devices. Harnessing the power of AI/ML for intelligent solutions. And get secure and transparent blockchain solutions for your business. IoT Solutions AI and Machine Learning Services Blockchain Development ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/Emerging%20technologies.jpg",
          },
          {
            title: "Enterprise Solutions",
            description:
              "We develop customer Enterprise Resource Planning software and integrate it with your business processes for efficient management of the business and its resources. We develop Customer Relationship Management Systems to streamline customer interactions and data management. ERP Development CRM Development",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/enterprise%20solutions.jpg",
          },
        
          {
            title: "Content Management Systems (CMS)",
            description:
              "We develop customized platforms for you to create, manage, and organize digital content. Our robust CMS development solution enables you to effortlessly update product information, optimize content for SEO, and deliver a dynamic and engaging online experience for customers. Content Management System User Interface (UI) Design Database Management Workflow Automation",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/content%20managment%20systems.jpg",
          },
          {
            title: "Consultation Services",
            description:
              "We offer expert guidance to develop your technology strategies and solutions that specifically cater to your specific business requirements. Our expertise and years of experience deliver actionable and data-driven insights that align with your business objectives. Enterprise Games Project Consultation Cybersecurity Consulting Digital Transformation Strategising ERP Implementation Assistance Data Management and Analytics",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/custom%20software%20development/consultation%20services.jpg",
          },
        ],},
        
        section4:{
          // heading:"",
          // para:"",
          checklist:[
            {
              title: "Custom Software Services",
            },
            {
              title: "Digital Marketplace Development",
            },
            {
              title: "Cloud And Data Management",
            },
            {
              title: "Security and Assurance",
            },
          ],
          // sliderlist:[],
        },

        section5:{
          heading:"Our Refined Custom Software Development Process",
          para:"Project after project, we've developed a sophisticated and meticulous process for our custom software development. We infuse innovation and precision into your projects while recognizing the significance of transparency and collaboration. our process reflects a commitment to clarity and excellence.",
          list:[
            {
              id: 1,
              heading: "Understanding Requirements",
              para: "We start with deep diving into project goals and your expectations. The practice of clear communication starts right here as align our strategies with your vision."
            },
            {
              id: 2,
              heading: "Planning and Strategy",
              para: "We transform concepts into a detailed plan, delineating project scope, timelines, and milestones. It sets the project’s future roadmap and ensures transparency."
            },
            {
              id: 3,
              heading: "Development and Implementation",
              para: "We use the latest tools and technologies to deliver high-quality custom software solutions that meet your functional requirements and exceed visual expectations."
            },
            {
              id: 4,
              heading: "Client Collaboration and Iterations",
              para: "We actively and continually seek your insights and feedback to bring about the project's evolution and ensure your satisfaction with the result."
            },
            {
              id: 5,
              heading: "Quality Assurance",
              para: "Our custom software undergoes meticulous quality checks to ensure that the software meets the highest standards and is a polished and error-free solution."
            },
            {
              id: 6,
              heading: "Timely Delivery",
              para: "Committed to punctuality, we adhere to strict timelines with our reliable development process and professionalism as the cornerstones of your project's success."
            }
          ],
        },

        gridSection2:{
          heading: "Choose Hey Buddy: We Listen To  Deliver",
          para:"",
          list : [
            {
              id: "1",
              heading: "We Understand You",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "At Hey Buddy, We understand and offer exactly what you expect. Thanks to our vast experience of working with hundreds of clients over the years.",
            },
            {
              id: "2",
              heading: "We Deliver Quality",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "As we fully understand your requirements, we deliver the high quality you want. Our custom software fits your business requirements seamlessly.",
            },
            {
              id: "3",
              heading: "We Communicate Clearly",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "We use the latest project management tools and employ time-tested techniques to ensure clear communication and keep you aware of every development.",
            },
            {
              id: "4",
              heading: "We Deliver on Time",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "Our refined and streamlined software development process accelerates project deliveries to deliver well within timelines and without compromising on quality.",
            },
            {
              id: "5",
              heading: "We Value Your Money",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "With Hey Buddy, we have experts readily available to deliver the best customer software solutions at the best price in the market. ",
            },
            {
              id: "6",
              heading: "We Adapt Quick",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "Our experience makes use very flexible and adaptable to accommodate all your specific business needs and deliver the best custom software solutions.",
            },
          ],
          },

          section7:{
            heading: "Success Stories With Hey Buddy Customer Software Solutions",
            para:
            "Hey Buddy is a leading custom software development company. We have multiple success stories to share. After all, our custom software solutions have helped clients across industries and scales.",

            list:[
              {
                id: "1",
                heading: "Custom Product Planning and Inventory Management Software",
                // imgurl: "",
                para: "Our client, a leading manufacturing company, faced inefficiencies in production planning and inventory management. We developed a custom software to optimize production schedules and automate inventory tracking for our client.The results were astonishing. The manufacturing company witnessed a significant 25% reduction in production costs while improving the overall efficiency of the supply chain.",
              },
              {
                id: "2",
                heading:
                  "Custom Patient Data Management Software for Leading Healthcare Providers",
                // imgurl: "",
                para: "One of our healthcare provider clients needed a secure and compliant patient data management system to ensure better confidentiality and security and to streamline their operations. We developed the required software solution with robust security features, ensuring HIPAA compliance. With our solution, we successfully achieved the desired goals of improved data security, streamlined workflows, and consequently enhanced patient care.",
              },
              {
                id: "3",
                heading: "Feature-packed, User-friendly E-commerce Solution",
                // imgurl: "",
                para: "An e-commerce startup sought a scalable platform to handle rapid growth and a diverse product range. We developed a customized e-commerce solution with advanced features and a user-friendly interface for efficient catalog management and order processing. The e-commerce startup achieved a 40% increase in sales and successfully expanded its product offerings.",
              },
            ],
          },

          section8:{
            heading:"Our Technological Expertise is Reflected in Our Trendsetting Tech Stack",
            para:"Hey Buddy claim to the leading spot of a game development company in India emanates from its expert team. Our developers bring in advanced and profound expertise to deliver the best Games solution for you.",
            btnlist:[
              {
                id:1,
                name:"Technologies",
              },
              {
                id:2,
                name:"Tools",
              },
              {
                id:3,
                name:"Platforms",
              },
              {
                id:4,
                name:"ProgrammingLanguages",
              },
              {
                id:5,
                name:"Frameworks",
              },
              {
                id:6,
                name:"Databases",
              },
              {
                id:7,
                name:"DevelopmentMethodologies",
              },
              {
                id:8,
                name:"MobileDevelopment",
              },
            ],
            imglist:[
              {
                id: 1,
                name:"Technologies",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/cloud%20computing.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Internet%20of%20Things%20(IoT).svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Artificial%20Intelligence%20(AI).svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Blockchain.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/AR%20VR.svg"
                ]
              },
              {
                id: 2,
                name:"Tools",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Git.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Jira-.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Docker.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Jenkins.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Selenium.svg"
                ]
              },
              {
                id: 3,
                name:"Platforms",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/AWS%20(Amazon%20Web%20Services).svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Microsoft%20Azure.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Google%20Cloud%20Platform.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Heroku.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/IBM%20Cloud.svg"
                ]
              },
              {
                id: 4,
                name:"ProgrammingLanguages",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Java.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Python.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Java%20script.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/C%23.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/ruby.svg"
                ]
              },
              {
                id: 5,
                name: "Frameworks",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Django.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Ruby%20on%20Rails.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Angular.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/React.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Laravel.svg"
                ]
              },
              {
                id: 6,
                name:"Databases",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/MySQL.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/PostgreSQL.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/MongoDB.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Oracle.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Microsoft%20SQL%20Server.svg"
                ]
              },
              {
                id: 7,
                name:"DevelopmentMethodologies",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Agile.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Scrum.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/DevOps.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/waterfall.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/kanban.svg"
                ]
              },
              {
                id: 8,
                name:"MobileDevelopment",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Flutter.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/React%20Native-01.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Swift.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Xamarin.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Kotlin.svg"
                ]
              }
            ],         
          },

          section9:{
            heading:"What Client Say About Hey Buddy",
            para:"Discover why our clients prefer Hey Buddy. Client satisfaction is our utmost priority and this is what makes us the most reliable custom software development services company.",
            list:[
              {
                id: 1,
                content:
                  "The best thing about Hey Buddy is that they really listen to you. They move ahead only when they have thoroughly understood your requirements and know exactly what you want and what would suit your business the best",
                // position: "Head of VP at Disney Hotstar",
                name: "George T.",
              },
              {
                id: 2,
                name: "Robbie J.",
                content:
                  "We are really satisfied with the quality of their custom solution and the way Hey Buddy approaches the project. They ensured clear communication to develop a specialized solution for our very requirement for our unique niche",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: " Thomas J.",
                content:
                  "Hey Buddy team worked with admirable dedication and high regard to the timeline. They delivered an innovative solution specifically for our business within the time. We highly recommend their expertise.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 4,
                name: "Ashley C.",
                content:
                  "Choosing Hey Buddy was certainly a game-changer for our e-commerce platform. Their custom software solutions optimized our operations and resulted in a 40% increase in sales.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 5,
                name: "Candice K.",
                content:
                  "Our complex project required a unique approach. Hey Buddy delivered a well-suited software solution and offered unwavering support throughout the process. Their professionalism is unmatched.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 6,
                name: "Bhaskar",
                content:
                  "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
                // position: "Head of VP at Disney Hotstar",
              },
            ]
          },

          section10:{
            heading:"FAQs",
            // para:"",
            list:[
              {
                id: 1,
                ques: "Why choose Hey Buddy as a custom software development firm?",
                ans: "We stand out for our ability to listen and understand your specific requirements. Since we understand better, our experts deliver the best. The best custom software development services in India and the US."
              },
              {
                id: 2,
                ques: "How can Hey Buddy assist with custom software development in India?",
                ans: "Hey Buddy’s custom software development services in India, cater to diverse business needs. We design solutions quality solutions in your budget."
              },
              {
                id: 3,
                ques: "What sets Hey Buddy apart in custom software application development?",
                ans: "Our abilities to understand, and deliver quality, adaptability, flexibility, and cost-effectiveness in custom software application development sets us apart."
              }
            ]
          }
        
  }

  

  // ----------------------------------------------------------------

  return (
    <div className="w-[100%]  mx-auto relative">
      {/* contact us modal */}
      <ContactModal
        handleClose={handleClose}
        contactusModal={contactusModal}
        handleModalClose={handleModalClose}
      />
      <div>
        {/* --------------------Section-1 ------------------------------------------ */}
        <div className="relative isolate   pt-20   ">
          <Herosection handlecontactusModal={handlecontactusModal} {...data.section1} />

          {data?.checklist &&<div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" py-4 lg:py-6 px-2 lg:px-0 w-[90%] lg:w-[80%]   mx-auto mb-[80px] lg:mb-[150px]"
            style={{borderRadius:"24px",background: "linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border: "1px solid #FFFFFF",boxShadow: "0px 8px 10px -6px #0000001A",
              
            }}
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className="  grid grid-cols-2 md:grid-cols-3 mx-auto lg:w-[80%] gap-x-2  lg:gap-x-4 gap-y-4 lg:gap-y-8 ">
              {data?.checklist?.map((section, index) => (
                  <div key={index} className="  flex items-center justify-start gap-2 text-[#FFFFFF]  " >
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="text-[14px] lg:text-[16px] font-bold">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>}

          {/* -------------------------grid-reuse------------------------------------- */}

          <div >
            <Gridsection {...data.gridSection1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide {...data.section3} />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div >
            <Mixsection {...data.section4} />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div >
            <Timelinecomp {...data.section5} />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div >
            <Gridsection {...data.gridSection2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div>
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7 {...data.section7} />
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div>
            <Pagenation handlecontactusModal={handlecontactusModal} {...data.section8} />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div>
            <Bottomclient {...data.section9} />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div>
            <Faqsection {...data.section10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
