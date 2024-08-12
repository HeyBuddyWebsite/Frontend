"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/aidevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/aidevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/aidevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/aidevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/aidevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/aidevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/aidevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/aidevelopmentcomp/Section7";
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

  const checklist1 = [
    {
      title: "Machine Learning",
    },
    {
      title: "Speech Recognition",
    },
    {
      title: "Deep Learning",
    },
    {
      title: "Computer Vision",
    },
    {
      title: "Predictive Analysis",
    },
    {
      title: "Neural Networks",
    },
  ];

   // --------------------grid section-1----------------------------------
   const List1 = [
    {
      id: "1",
      heading: "99%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "of Fortune 500 companies use AI for hiring without human oversight",
    },
    {
      id: "2",
      heading: "92.1%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "of businesses witnessed measurable results from AI",
    },
    {
      id: "3",
      heading: "75%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "of top executives believe AI for business growth",
    },
    {
      id: "4",
      heading: "63%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "of organizations will adopt AI globally within the next 3 years",
    },
    {
      id: "5",
      heading: "44%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "of business leaders achieved increased productivity through AI",
    },
    {
      id: "6",
      heading: "21%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "net increase to the U.S. GDP by 2030 with AI",
    },
  ];

  const Text1 = [
    {
      heading:
        "AI Software Development:  Decade rare Opportunity - Seize it Now Or Regret Forever",
      subtext:
        "From rapid automation to deep data-driven insights, AI is propelling companies into the future and you can be one of them. Tap into the unmatched potential of this intelligent technology, boost efficiency like never before, and stay way ahead of the competition. Your journey to business transformation starts here! Are you ready to lead?",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Proven Track Record",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "Benefit from our established history of success. Our track record speaks volumes, showcasing consistent excellence in delivering results.",
    },
    {
      id: "2",
      heading: "Technical Expertise",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Capitalise on our team's unparalleled technical prowess. Our dedicated group of AI experts is ready to tackle the most intricate challenges.",
    },
    {
      id: "3",
      heading: "Customized Solutions",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Experience tailored excellence. Our solutions are crafted with precision to meet your unique needs, ensuring optimal performance and efficiency.",
    },
    {
      id: "4",
      heading: "Data Security and Privacy",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "Your data's sanctuary is our priority. Rest assured, our robust security measures guarantee the utmost confidentiality and privacy.",
    },
    {
      id: "5",
      heading: "Scalability and Flexibility",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Prepare for growth without limitations. Our solutions are designed to scale seamlessly, adapting to your evolving business needs.",
    },

    {
      id: "6",
      heading: "Integration Capabilities:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Achieve harmony in your tech ecosystem. Our integration capabilities ensure smooth collaboration with your existing systems.",
    },
    {
      id: "7",
      heading: "Continuous Support and Maintenance:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Beyond implementation, we stand by your side. Count on our unwavering support and proactive maintenance to keep your operations running seamlessly.",
    },
    {
      id: "8",
      heading: "Collaborative Approach:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Your goals are our mission. We embrace a collaborative approach, working hand-in-hand to achieve milestones and exceed expectations.",
    },
    {
      id: "9",
      heading: "Innovation and Future Readiness:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Stay ahead in the digital landscape. Our commitment to innovation ensures that your solutions are not just current but future-ready",
    },
  ];

  const Text2 = [
    {
      heading: "Leading AI Development Company For More than  One Reason",
      subtext:
        "Hey buddy has a proven track record of delivering high-quality AI-based software solutions. With our skilled and experienced team, we are known to help our clients disrupt markets and help them achieve goals that earlier appeared distant or even impossible. What can we say, that’s the power of AI.",
    },
  ];

  

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
          <Herosection handlecontactusModal={handlecontactusModal} />

          <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" py-4 lg:py-6 px-2 lg:px-0 w-[90%] lg:w-[80%]   mx-auto mb-8 md:mb-12 lg:mb-[150px]"
            style={{borderRadius:"24px",background: "linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border: "1px solid #FFFFFF",boxShadow: "0px 8px 10px -6px #0000001A",
              
            }}
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:w-[80%] mx-auto gap-x-4 gap-y-8 ">
                {checklist1.map((section, index) => (
                  <div key={index} className="  flex items-center justify-start gap-2 text-[#FFFFFF]  " >
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="font-semibold text-base">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>

          {/* -------------------------grid-reuse------------------------------------- */}

          <div >
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div >
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div >
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div >
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div>
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7 />
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div>
            <Pagenation handlecontactusModal={handlecontactusModal} />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div>
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div>
            <Faqsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
