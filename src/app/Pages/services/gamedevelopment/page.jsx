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
      heading:"Level up With AI: Best Game Development Company in India",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/a4ffb09f5849b07feb1c31e2ce177d50.jpeg",
      text:"Get an AI-powered smart Games solution that captivates with its hyper-realistic graphics and enthrals with its deeply engaging gameplay. Hey Buddy is India's leading game development company, maintaining a large team of gamer-first developers who know what works.",
    },
    
     checklist :[
      {
        title: "Tablet/Mobile Game Development",
      },
      {
        title: "Metaverse Game Development",
      },
      {
        title: "Immersive AR/VR Game Development",
      },
      {
        title: "Unreal and Unity Game Development",
      },
    ],

    gridSection1:{
      heading:"Power up Your Brand and Press Start for Profit with Game Development -  Your Gamified Success Awaits!",

      para:
      "Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.",
      list :[
        {
          id: "1",
          heading: "Enhanced Brand Engagement",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
          para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
        },
        {
          id: "2",
          heading: "Increased User Retention:",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
          para: "Games have an inherent ability to keep users hooked and invested. By incorporating addictive gameplay mechanics, your business can boost user retention, ensuring that your audience keeps coming back for more, and strengthening brand loyalty over time.",
        },
        {
          id: "3",
          heading: "Best Way for Brand Awareness",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
          para: "Games is a powerful tool to aware, educate and train your audience on your products. Create immersive experiences that communicate your brand message to your customers and inform them about your products or services. Thus, merging entertainment and marketing for the best possible outcomes. ",
        },
        {
          id: "4",
          heading: "Data-Driven Insights:",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
          para: "Games generate a wealth of data and information about player behaviour and preferences. Leverage it to gain deep audience insights, refine your marketing strategies, and make data-driven impactful decisions that get you the best business outcomes.",
        },
        {
          id: "5",
          heading: "Cross-Platform Reach:",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
          para: "Reach your audience across various platforms and devices. From mobile and tablets to PCs, consoles, or VR, be present where your audience is and enjoy a broader reach. Games ensures that your message is accessible to a diverse and widespread audience.",
        },
        {
          id: "6",
          heading: "Innovative Marketing Opportunities:",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Games offer innovative marketing avenues by integrating your brand seamlessly into Games storylines and environments. Utilize in-game advertising, or create branded mini-games for hyper-interactive campaigns, to enhance brand visibility and brand recall.",
        },
      ],
      },

      section3:  {
        heading:"Hey Buddy, Game On!! - Complete Game Development Services",
        para:"Hey Buddy is your one-stop shop for end-to-end game development services. With AI on our side, we successfully clear levels of your game development needs.",
        list:[
          {
            title: "Game Development",
            description:
              "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
          },
          {
            title: "Mobile Game Development",
            description:
              "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
          },
          {
            title: "Unreal Game Development",
            description:
              "Unreal engine is known to deliver powerful and dynamic games that stun gamers with its visuals and realism. Our developers love to work on this platform and get you a game with realistic game physics and animation and AI’s smart interactivity.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
          },
          {
            title: "Unity 3D Game Development",
            description:
              "We use the robust Unity engine to develop immersive, high-performing, and visually stunning games for your target audience. Unity is known for its powerful tools and features and we, as Unity Game development company use it to the fullest for 2D and 3D games.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
          },
          {
            title: "Metaverse Game Development",
            description:
              "Get ready to teleport your Games audience into a new reality of Metaverse games. We are a renowned Metaverse game development company that knows community-building, utilisation of user-generated content, and capitalise on social connectivity.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds4.jpg",
          },
          {
            title: "Web3 Game Development",
            description:
              "Ready to explore decentralised Games for untapped business opportunities, we have an offer. Our team develops decentralised and secure Web3 Games solutions utilising leading technologies like AI, blockchain, smart contracts, NFTs, and much more. ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds5.jpg",
          },
          {
            title: "AR/VR Game Development",
            description:
              "We create immersive AR and VR games that merge with gamers' real world and alter their Games experience for good. The high-fidelity games blur the line between the real and the Games world and create a Games experience that gamers can never get enough of.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
          },
        ],},
        
        section4:{
          heading:"Our AI Games Solutions for the Future of Games",
          para:"As the leading game development company in India, AI Games is one of our strongest suits. Our dedicated AI Games team develops your games with innovative AI-based features for a highly personalised and immersive Games experience.",
          checklist:[
            {
              title: "Adaptive gameplay",
            },
            {
              title: "Procedural Content Generation (PCG)",
            },
            {
              title: "Hyper-realism ",
            },
            {
              title: "Smart NPCs",
            },
            {
              title: "Real-world Physics",
            },
            {
              title: "Dynamic environments",
            },
          ],
          sliderlist:[
            {
              id: "1",
              heading: "Dynamic Storytelling and Gameplay",
              imgurl: "",
              para: "Using the PCG technique, we deploy AI creativity for on-the-go Games content. The technique adapts the storyline and gameplay to players’ preferences. ",
            },
            {
              id: "2",
              heading: "Humanised NPCs Who Learn And Evolve With The Game",
              imgurl: "",
              para: "Using Machine Learning and Natural Language Processing, we create humanised NPCs with intelligence, evolving personalities, and natural behaviour. They learn and adapt over time. ",
            },
            {
              id: "3",
              heading: "Adaptive Gameplay to Wider Audience Reach",
              imgurl: "",
              para: "We infuse AI-based machine learning to infuse adaptability into your games. This way the game adjusts to individual player skills and preferences. quality attracts a broader audience by including both casual and hardcore gamers. ",
            },
            {
              id: "4",
              heading: "Never-before Monetization Opportunities ",
              imgurl: "",
              para: "With AI-driven personalization, we also help you leverage targeted and refined in-game advertisements, promotions, and microtransactions.",
            },
            {
              id: "5",
              heading: "Perfect Strategies with AI-driven Data Analytics ",
              imgurl: "",
              para: "We leverage advanced AI tools to analyse player behaviour and get insights into gamers’ preferences and in-game behaviour. ",
            },
            {
              id: "6",
              heading: "Accurate Spatial Computing for Deep Immersion",
              imgurl: "",
              para: "We use AI-powered spatial computing to seamlessly merge the AR/VR Games experience with gamers’ reality. It facilitates accurate object and gesture recognition, precise tracking, and real-time rendering. ",
            },
            {
              id: "7",
              heading: "Anti-Cheat Solutions To Protect Your Games Brand",
              imgurl: "",
              para: "We safeguard the integrity of your games with AI-based robust anti-cheat systems, ensuring fair Games, reducing frustration among legitimate players, and preserving your brand and game's reputation. ",
            },
            {
              id: "8",
              heading: "Attracting Tech-savvy Gamers with AI-driven Competitive Edge",
              imgurl: "",
              para: "Games businesses that leverage AI gain a competitive edge in the industry. Players are often drawn to titles with advanced technologies and features, making AI an essential tool for staying relevant in the competitive Games market. ",
            },           
          ],
        },

        section5:{
          heading:"Our Perfected Game Development Process - Level by level",
          para:"Over years of experience as a game app development company, we have refined, streamlined and aligned our game development process to serve you better.",
          list:[
            {
              id: 1,
              heading: "Requirement Gathering",
              para: "We start with a complete grasp of your business objectives and your vision. Our team collaborates closely with yours to ensure a collaborative approach from day one."
            },
            {
              id: 2,
              heading: "Concept Art",
              para: "We ideate and brainstorm to choose the best solution for your brand and objectives. Here, we ensure that our proposed solutions perfectly align with your vision."
            },
            {
              id: 3,
              heading: "Assets Creation",
              para: "That’s not it, on the chosen idea, our VR technical experts conduct a thorough feasibility assessment. They evaluate compatibility and viability from different aspects."
            },
            {
              id: 4,
              heading: "Animation",
              para: "The approved idea is taken over by our expert VR developers. Who leverage every state-of-the-art VR technology so that the outcome matches your vision."
            },
            {
              id: 5,
              heading: "Game Level Designing",
              para: "Our development team comes up with iterative prototypes and solicits your feedback on the same. Based on that, we modify the VR experience to exceed your expectations."
            },
            {
              id: 6,
              heading: "Building Mechanics",
              para: "Our rigorous testing protocol ensures that your VR experience possesses the functionality and features that captivate and engage your audience."
            },
            {
              id: 7,
              heading: "AI Infusion",
              para: "We send the outcome for your approval and make it deployment-ready. Here, our streamlined process ensures that we adhere to the stipulated timeline."
            },
            {
              id: 8,
              heading: "Graphic Optimization",
              para: "Deployment is not enough, tracking is crucial. That’s why we integrate analytics tools. With this, we monitor the performance of your VR experience for data-driven insights."
            },
            {
              id: 9,
              heading: "Rigorous Testing",
              para: "On the same line, we keep on offering you post-launch support, updates, and optimization services for the assured success of your VR experiences."
            },
            {
              id: 10,
              heading: "Launch",
              para: "Lastly, we collaborate with you to draw your valuable feedback and sustain an open line of communication for long-term partnerships."
            }
          ],
        },

        gridSection2:{
          heading: "Score Big Wins With Hey Buddy: Your Trusted  Game Development Company",
          para:
          "Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.",
          list :  [
            {
              id: "1",
              heading: "Expertise Across Platform",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "We offer a comprehensive suite of services across all Games platforms. We develop games for mobile, offer Unreal and Unity game development, AR/VR game development, and Metaverse game development.",
            },
            {
              id: "2",
              heading: "Cutting-Edge AI Solutions",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "We elevate your games with AI-powered techniques and algorithms such as PCG, Natural Language Processing (NLP), Machine Learning (ML), etc. Our AI expertise ensures your games are intelligent and outsmart competition.",
            },
            {
              id: "3",
              heading: "Creative Innovation",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "We don't just build games; we craft experiences as our team of gamer-first developers thrive on creative innovation. Expect unique storylines, dynamically engaging gameplay mechanics, and visually stunning environments to captivate your Games audience and set your brand apart.",
            },
            {
              id: "4",
              heading: "Collaborative Partnership",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "Believing in collaborative partnerships, we work closely with you. We ensure to completely understand your brand, goals, and it’s vision. And move forward with full might to realise the same. This is what differentiates our game development services.",
            },
            {
              id: "5",
              heading: "Commitment to Quality",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Quality is non-negotiable at Hey Buddy. Our rigorous and perfected-over-year development process ensures that every aspect of your game meets the highest standards. Be it graphics, gameplay, performance or experience, we prioritise excellence and your satisfaction.",
            },
            {
              id: "6",
              heading: "Transparent Communication",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "By working with clients across industries and scales, we understood the gravity of transparent communication. Be assured to experience transparent communication, timely updates, and a responsive team to keep you informed and involved.",
            },
          ],
          },

          section7:{
            heading: "Digital Joysticks, Real Rewards: Success Stories with Hey Buddy",
            para:
            "Hey Buddy offers its services to clients working in different industries and different scales. Here are the success stories that make us the best Games development company in India. ",

            list:[
              {
                id: "1",
                heading: "Interactive Mobile Game to Promote eCommerce Deals and Offers",
                // imgurl: "",
                para: "Hey Buddy developed an interactive mobile game for a leading eCommerce brand with in-game challenges related to the brand's offerings. The game featured exclusive discounts and rewards for top players, encouraging users to explore the brand's products while having fun.The mobile game phenomenally exceeded mobile game expectations. It doubled user engagement and led to an increase of 20% increase sales. Players enjoyed the interactive experience, and the brand reinforced its connection with its audience making it more profound.",
              },
              {
                id: "2",
                heading: "Collaboration to Realize Metaverse Vision",
                // imgurl: "",
                para: "Hey Buddy extended its expertise as a metaverse game development company to realise the vision of a tech startup. We designed and developed a cutting-edge metaverse game that seamlessly integrated virtual and augmented reality experiences for a unique and completely immersive digital environment.The game received phenomenal reviews for its innovation and attracted an audience from a wide game - tech enthusiasts and mainstream media. As a result, the startup gained industry recognition and attracted potential partnerships and investors. We look forward to more such collaboration.",
              },
              {
                id: "3",
                heading: "Ai-Integration To Revitalize A Flagship Games Title",
                // imgurl: "",
                para: "Hey Buddy's unmatched AI expertise helped an established Games company revitalize its flagship Games title. We integrated sophisticated AI algorithms into the game, to introduce PCG, adaptive gameplay, and AI-enable intelligent opponents that blew away their audience. The outcome, a 30% increase in active players and a 25% boost to in-game purchases. Players applauded the dynamic experience and our client solidified the game's position as a leading title in the competitive Games market.",
              },
            ],
          },

          section8:{
            heading:"Hey Buddy Tech Arsenal for best Game Solutions Expertise on all fronts",
            para:"Hey Buddy claim to the leading spot of a game development company in India emanates from its expert team. Our developers bring in advanced and profound expertise to deliver the best Games solution for you.",
            btnlist:[
              {
                id:1,
                name:"Platforms",
              },
              {
                id:2,
                name:"ARVRPlatforms",
              },
              {
                id:3,
                name:"MetaversePlatforms",
              },
              {
                id:4,
                name:"GameEngines",
              },
              {
                id:5,
                name: "Languages",
              },
              {
                id:6,
                name:"ArtificalIntelligence(AI)",
              },
            ],
            imglist:[
              {
                id: 1,
                name:"Platforms",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Apple%20vision.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Appstore.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/PC.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Playstation.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Xbox.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Nintendo.svg"
                ]
              },
              {
                id: 2,
                name:"ARVRPlatforms",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Apple%20vision.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Oculus.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/HTC%20vive.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Google%20daydream.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Meta%20quest.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Microsoft%20Hololens.svg"
                ]
              },
              {
                id: 3,
                name:"MetaversePlatforms",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Decentraland.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Roblox.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Axie%20Infinity.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Sandbox.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Horizon%20Worlds.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Sanskar.svg"
                ]
              },
              {
                id: 4,
                name:"GameEngines",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Unreal%20engine.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Unity.svg"
                ]
              },
              {
                id: 5,
                name: "Languages",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/C%23.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/C%2B%2B.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Java%20script.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Python.svg"
                ]
              },
              {
                id: 6,
                name:"ArtificalIntelligence(AI)",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/PCG.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Natural%20language%20processing.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Machine%20learning.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AGA.svg"
                ]
              }
            ],         
          },

          section9:{
            heading:"How Clients Rate Our Game Development Services",
            para:"Hey Buddy boasts of a long list of satisfied customers. Here is what they have to say about us",
            list:[
              {
                id: 1,
                content:
                  "Hey Buddy turned our vision into an interactive VR masterpiece! Their expertise in Unreal Engine brought our game to life with graphics that we ourselves couldn’t believe. The team's commitment to excellence is reflected in every detail. We highly recommend Hey Buddy’s VR game development services.",
                // position: "Head of VP at Disney Hotstar",
                name: "Jonathan M",
              },
              {
                id: 2,
                name: "Sarah L.",
                content:
                  "We assure you that no one can beat Hey Buddy in AI Games. Their AI Games solutions took our game to a whole new level. Our game became more dynamic and engaging throwing perfect challenges to the players. The team's dedication to offering the best solution sets them apart in the AI Games space.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Michael H",
                content:
                  "Cross-platform development was like a breeze with Hey Buddy. They seamlessly optimized our game for iOS, Android, and PC, ensuring a consistent experience for players across different platforms. They are certainly the best game development company in India commitment to quality made them an invaluable partner in our game development journey.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 4,
                name: "Emily C",
                content:
                  "Our metaverse game wouldn't have been possible without Hey Buddy's expertise in the immersive Games domain. They skillfully integrated VR and AR elements into our project. We highly recommend them as a trusted metaverse game development company.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 5,
                name: "Alex R",
                content:
                  "Choosing Hey Buddy for our mobile game development was the right decision. Their team's proficiency in iOS and Android development ensured a smooth launch and unwavering post-release support. Moreover, the game's success surpassed our expectations. They are the best mobile game development company.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 6,
                name: "Jeremy",
                content:
                  "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
                position: "Head of VP at Disney Hotstar",
              },
            ]
          },

          section10:{
            heading:"FAQs",
            // para:"",
            list:[
              {
                id: 1,
                ques: "Is Hey Buddy a game development company in India?",
                ans: "Yes, Hey Buddy is a leading game development company based in India. They are known for offering innovative Games solutions and top AI-integration services. cutting-edge game development expertise."
              },
              {
                id: 2,
                ques: "Does Hey Buddy specialize in metaverse game development?",
                ans: "Absolutely! Hey Buddy is counted as a leading metaverse game development company. They craft immersive digital experiences that take users into a completely different reality."
              },
              {
                id: 3,
                ques: "Is Hey Buddy a mobile game development company?",
                ans: "Yes, Hey Buddy also offers mobile game development services. They develop games for all platforms from iOS to Android."
              },
              {
                id: 4,
                ques: "Is Hey Buddy a Unity game development company?",
                ans: "Indeed! Hey Buddy leverages the power of Unity to deliver exceptional Games products. They use Unity to ensure seamless and high-quality Games experiences."
              },
              {
                id: 5,
                ques: "Can Hey Buddy be considered a game app development company?",
                ans: "Of course! Hey Buddy is your go-to game app development company. We bring your app ideas to life with our years of game development experience."
              },
              {
                id: 6,
                ques: "Is Hey Buddy a Unreal game development company?",
                ans: "Indeed! Hey Buddy leverages the power of Unreal Engine to deliver exceptional Games products. They use Unreal Engine to ensure seamless and high-quality Games experiences."
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
