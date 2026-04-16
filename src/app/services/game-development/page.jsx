"use client";
import "../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/game-developmentcomp/Section10";
import Pagenation from "@/components/servicescomp/game-developmentcomp/Section8";
import Mixsection from "@/components/servicescomp/game-developmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/game-developmentcomp/Section5";
import Motionslide from "@/components/servicescomp/game-developmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/game-developmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/game-developmentcomp/Section9";
import Section7 from "@/components/servicescomp/game-developmentcomp/Section7";
import ContactModal from "@/components/ContactModal/ContactModal";

// Standardized Components
import GamedevOpportunitySection from "@/components/servicescomp/game-developmentcomp/GamedevOpportunitySection";
import GamedevReasonsSection from "@/components/servicescomp/game-developmentcomp/GamedevReasonsSection";
import GamedevSuccessStoriesSection from "@/components/servicescomp/game-developmentcomp/GamedevSuccessStoriesSection";
import GamedevCTASection from "@/components/servicescomp/game-developmentcomp/GamedevCTASection";

const Page = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
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
      title: "Dynamic Storytelling and Gameplay",
      description: "Using the PCG technique, we deploy AI creativity for on-the-go gaming content. The technique adapts the storyline and gameplay to players’ preferences. Thereby, it offers a highly personalised gaming experience with higher player satisfaction, deeper engagement, and more importantly, word-of-mouth brand advocacy."
    },
    {
      title: "Humanised NPCs Who Learn And Evolve With The Game",
      description: "Using Machine Learning and Natural Language Processing, we create humanised NPCs with intelligence, evolving personalities, and natural behaviour. They learn and adapt over time. They communicate humanly for interactive and smart communication and keep players engaged in the game."
    },
    {
      title: "Adaptive Gameplay to Wider Audience Reach",
      description: "We infuse AI-based machine learning to infuse adaptability into your games. This way the game adjusts to individual player skills and preferences. quality attracts a broader audience by including both casual and hardcore gamers. Thus, it makes your game more accessible and appealing to a diverse player base."
    },
    {
      title: "Never-before Monetization Opportunities",
      description: "With AI-driven personalization, we also help you leverage targeted and refined in-game advertisements, promotions, and microtransactions. This heightens the effectiveness of your game monetisation strategies by tailoring your offerings to individual player preferences and behaviours."
    },
    {
      title: "Perfect Strategies with AI-driven Data Analytics",
      description: "We leverage advanced AI tools to analyse player behaviour and get insights into gamers’ preferences and in-game behaviour. With AI’s pathbreaking insights, you introduce needed updates gameplay or otherwise, expand in the right direction and chart out marketing strategies that deliver."
    },
    {
      title: "Accurate Spatial Computing for Deep Immersion",
      description: "We use AI-powered spatial computing to seamlessly merge the AR/VR gaming experience with gamers’ reality. It facilitates accurate object and gesture recognition, precise tracking, and real-time rendering. The interaction between the game and gamers becomes natural and intuitive bringing the highest possible engagement."
    },
    {
      title: "Anti-Cheat Solutions To Protect Your Gaming Brand",
      description: "We safeguard the integrity of your games with AI-based robust anti-cheat systems, ensuring fair gaming, reducing frustration among legitimate players, and preserving your brand and game's reputation. Our AI solutions proactively detect and prevent cheating, fostering an inclusive gaming experience."
    },
    {
      title: "Attracting Tech-savvy Gamers with AI-driven Competitive Edge",
      description: "Gaming businesses that leverage AI gain a competitive edge in the industry. Players are often drawn to titles with advanced technologies and features, making AI an essential tool for staying relevant and ahead of the curve in the competitive gaming market."
    }
  ];

  const homeBg = {
    section5: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457720237_mv8kvj.png?x-id=PutObject')",
    section6: "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')",
    section6b: "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')",
    section7: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457996300_v7h13t.png?x-id=PutObject')",
    section8: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763458037132_139ti0.png?x-id=PutObject')",
    section9: "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')",
    successStories: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763963076417_a4hfqr.png?x-id=PutObject')",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className="w-full relative"
    >
      <div className="relative isolate px-6 pt-20 lg:px-8 lg:w-[80%] mx-auto">
        <Herosection handlecontactusModal={handlecontactusModal} />
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section5,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            paddingTop: "clamp(10px, 1.5vw, 15px)",
            paddingBottom: "clamp(10px, 1.5vw, 15px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <GamedevOpportunitySection />
          </div>
        </div>
      </div>

      <div className="py-8">
        <Motionslide />
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section5,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Mixsection />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.successStories,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <GamedevSuccessStoriesSection />
          </div>
        </div>
      </div>

      <div className="py-12 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black -z-10" />

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white leading-tight">
              Our industry-leading AI-gaming services delivered phenomenal gaming solutions revolutionising not just our client’s gaming business but the gaming industry altogether.
            </h2>
          </div>
        </div>

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist1.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white group-hover:bg-red-500 transition-all duration-300 shrink-0">
                    <AiFillCheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="ml-4 font-semibold text-xl text-white group-hover:text-red-100 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section6,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <GamedevReasonsSection />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section8,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Pagenation handlecontactusModal={handlecontactusModal} />
          </div>
        </div>
      </div>

      <div className="bg-black w-full text-white">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section6b,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6 relative">
            <Image
              loading="lazy"
              width={450}
              height={450}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png"
              alt="bg image"
              className="absolute bottom-0 right-0 opacity-20 pointer-events-none"
            />
            <Timelinecomp />
          </div>
        </div>
      </div>

      <div className="bg-black w-full text-white">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section7,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Bottomclient />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section9,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Faqsection />
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] mx-auto">
        <GamedevCTASection handlecontactusModal={handlecontactusModal} />
      </div>

      <ContactModal
        contactusModal={contactusModal}
        handlecontactusModal={handlecontactusModal}
        handleClose={handleClose}
        handleModalClose={handleModalClose}
      />
    </motion.div>
  );
};

export default Page;
