// "use client";
import Section1 from "@/components/casestudiescomp/realstatecomp/gamedev/Section1";
import Temp from "@/components/casestudiescomp/realstatecomp/gamedev/Temp";
import Section11 from "@/components/casestudiescomp/realstatecomp/gamedev/Section11";
import Section2 from "@/components/casestudiescomp/realstatecomp/gamedev/Section2";
import Section3 from "@/components/casestudiescomp/realstatecomp/gamedev/Section3";
import Section4 from "@/components/casestudiescomp/realstatecomp/gamedev/Section4";
import Section5 from "@/components/casestudiescomp/realstatecomp/gamedev/Section5";
import Section6 from "@/components/casestudiescomp/realstatecomp/gamedev/Section6";
import Section7 from "@/components/casestudiescomp/realstatecomp/gamedev/Section7";
import Section8 from "@/components/casestudiescomp/realstatecomp/gamedev/Section8";
import Section9 from "@/components/casestudiescomp/realstatecomp/gamedev/Section9";

import React from "react";
export function generateStaticParams() {
  return [{ id: "13" }, { id: "14" }, { id: "15" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "13",
      heading1: "Captivating Gaming App Interface For Hyper Engagement",
      heading2: "Multiplayer Game with Gravitating Graphics & Gameplay",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13_3.png",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13_2.jpg",
      para1:
        "Hey Buddy partnered with a leading gaming hub known for their captivating games, seeking high-quality graphics. The client's global presence and high standards necessitated exceptional outcomes. Hey Buddy not only met but surpassed expectations, delivering graphics that enhanced the gaming experience.",
      para2:
        "This successful partnership further solidified Hey Buddy's reputation in the gaming industry.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Our Client is a renowned gaming hub, producing captivating and enthralling games. They are the forerunners in their gaming genre as their games are loved or played across the globe. They were looking for a partner who could deliver high-quality graphics, matching their expectations and standards. Hey Buddy took up the task and delivered outcomes that exceeded expectations.",
      section5: {
        heading:
          "A Dive in the Project: Overhauling of Gaming Interface with No Great Shakes",
        requirement:
          "Our client is a holder of a gaming hub that comprises tens of hundreds of games. They have their presence in every corner of the World. Their name comes on everyone's tongue when they are about to play a game. They were working on a great game idea that could transmogrify the gaming realm.",
        execution:
          "However, there was a trade-off. They needed to pay special focus on the gameplay and, hence developing engaging graphics posed a challenge. Also, technical limitations, such as memory constraints and processing power, add a layer of complexity. The constant evolution of hardware and the emergence of new technologies like virtual reality demand continuous adaptation to meet the expectations of the player.",
        delivery:
          "They relied on us as we possess a team filled with adroit and exceptional software and graphic designers. Our proven record of delivering solutions within specified time and budget showcases how we are in a matter of work. Hey buddy tackled the problem with ease and delivered exactly what our client imagined. With emerging technologies like Augmented reality, Virtual Reality, and Artificial Intelligence, we succeed in giving out a 3D metaverse gaming solution.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13%20_1.png",
      },
      section6: {
        heading: "Elevation in Sales and Traffic in a progressive manner",
        para: "We, Hey Buddy didn’t leave any stone unturned in delivering enthralling and groovy graphics. So much so that users felt like living in the gaming realm.",
        list1:
          "Hey Buddy know what to do, how to do it, and when to do it. Enhancing the interface or appearance of the game starts attracting people to it.",
        list2:
          "With our technical expertise, we completely transformed the outlook of the gaming app to bring more users on board. It leads to a thrust in revenue.",
        list3:
          "Our services are enough to speak for themselves. What our client is now receiving from their app is more than what they imagined.",
        grid: {
          cell11: "39%",
          cell1: "conversion rate.",
          cell21: "100k+",
          cell2: "downloads from the Play Store.",
          cell31: "60%",
          cell3: "hike in total revenue.",
          cell41: "Increased",
          cell4: "revenue in the past few years",
        },
      },
      section7: {
        heading1: "Launching your next",
        heading2: "adventurous and adrenaline-rushing game that hooks gamers.",
      },
      section8: {
        // heading: "",
        requirement:
          "First, our project manager comes into the picture to understand in deep about the requirements of the client.",
        ideation:
          "Next after having an understanding, we started to devise a full-fledged plan or strategy to attain the ends.",
        // designing:    "",
        development:
          "Planning can’t work out unless we follow it strictly. Thus, we begin to walk with the plan to seize the desired results.",
        testing:
          "Delivery of the output without thorough checking isn’t our nature. Our robust team performs unit testing to ensure the result will come out as error-free. ",
        deployment:
          "Once done with testing, we deploy the app right in front of the users.",
      },
      section9: {
        heading1: "Finding the Right Balance ",
        heading2: "Filling in the Gaps",
        heading3: "Overcoming Subjectivity",
        para1:
          "The first challenge that comes straight next to our faces is to gain a balance between aesthetic improvement and maintaining a user-friendly design simultaneously. ",
        para2:
          "To improve the design or interface of the gaming app must need some enhancement. We incorporate some plug-ins and other APIs as well that increase the load on the website. Thus, to keep the loading speed of the game on the bar is quite tough. ",
        para3:
          "One thing that stuck us all in a dilemma is thinking about what people like and what kind of gaming interface they want to witness. It is all about a subjective approach that everyone has.",
      },
      testimonal:
        "A big thanks to Hey Buddy for giving us what we want. Their team is quite professional, understands what we are seeking, and delivers it. Whenever I feel any need for any work, I don’t have to think or search as Hey Buddy is my priority from now onwards.",
      section11: {
        para: "Looking to begin your journey? Call Us and say Hey Buddy!",
      },
      link: "/Pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "14",
      heading1: "AI-Infused",
      heading2: "Smart and Adaptive Gaming with Unreal’s Magic",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_1.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_2.jpg",
      para1:
        "Hey Buddy partnered with a leading game development company for an AI-powered one-on-one duel game. The goal was to create visually stunning gameplay with advanced mechanics. Hey Buddy delivered top-notch AI integration for dynamic and endlessly entertaining gameplay.",
      para2:
        "The collaboration resulted in a game that captivated gamers worldwide with its appeal and innovation.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "The client was a renowned game development company seeking a technology partner for their next AI-powered gaming venture. The game was a one-on-one intense duel where anyone worldwide could participate. The aim was to achieve the highest visual appeal for gamers with sophisticated game mechanics. They found the right partner in the form of Hey Buddy and we helped them achieve the best possible gameplay with top-class AI integration, making the game dynamic and adaptable for never-ending fun. ",
      section5: {
        heading: "Captivating 3D Visuals with Never-Ending Excitement",
        requirement:
          "The game demanded high-quality visuals and peculiar character designs with larger-than-normal hands. In terms of gameplay, it should be intelligent enough to adapt and evolve with the gamers, keeping the excitement high. A total of 32 characters and 48 environments.",
        execution:
          "As per their requirement, we used Unreal Engine 5 to achieve high-quality immersive visuals that caught gamers’ attention right away. We integrated Unity ML-Agents for AI including behavior trees, reinforcement learning, dynamic difficulty adjustment, PCG, and real-time player behavior analysis.",
        delivery:
          "As a result, the game was able to impress the players right from the start. It offered an amazing visual experience right from the first screen and when it came to gameplay, the NPCs and the environment were able to learn players players styles and change their tactics and challenges as per the same.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_3.jpg",
      },
      section6: {
        heading: "Great Reception with Ever-expanding Gaming Community",
        para: "Our efforts and skills paid back. The game got a great reception and players were especially amazed by the innovative use of intelligent AI gameplay.",
        list1:
          "User Retention Rate: Week 1 Retention: 65% | Week 4 Retention: 40%",
        list2:
          "Daily Active Users (DAU) 450,000 | Monthly Active Users (MAU): 2.5 million",
        list3: "Average Playtime per Session: 25 minutes",
        grid: {
          cell11: "3",
          cell1: "Million Downloads",
          cell21: "89%",
          cell2: "Retention Rate",
          cell31: "4.8",
          cell3: "Ratings",
          cell41: "93%",
          cell4: "positive review",
        },
      },
      section7: {
        heading1: "Achieve these amazing results with",
        heading2: "Hey Buddy",
      },
      section8: {
        heading:
          "Behind the successful delivery of this gaming project was our talented AI gaming team and a well-planned game development process.",
        requirement:
          "We started by deeply understanding the specific client requirements esp their expectation with AI. ",
        ideation:
          "Second, comes our brainstorming sessions to assess the viability, define and refine the process, and establish collaboration.",
        designing:
          "Use of Blender, Maya, Zbrush, and Substance Painter for game designing.",
        development:
          "We Used Unreal Engine Autodesk Maya, and Blender for high-quality and Unity ML-Agents for AI.",
        // testing:"",
        deployment:
          "Rigorous testing along with real players’ feedback to identify issues and then plan a successful rollout.",
      },
      section9: {
        heading1: "Balancing Visual Appeal and AI Complexity",
        heading2: "Managing Large Character and Environment Requirements",
        heading3: "Ensuring Intelligent Adaptability with AI",
        para1:
          "The biggest challenge our client faced was to strike a balance between achieving visually appealing 3D graphics and implementing sophisticated AI mechanics. With our technical skills to deliver on both fronts without compromising one for the other, we helped them achieve the same.",
        para2:
          "Developing 32 characters and 48 environments requires meticulous planning and execution. The client faced challenges in managing the design, development, and integration of such a large number of diverse characters and environments within the game.",
        para3:
          "Implementing AI that is intelligent enough to adapt and evolve with gamers' playing styles is a complex task. It was a challenge to ensure that the AI-driven gameplay was truly dynamic, challenging, and responsive to individual player behaviors.",
      },
      testimonal:
        "Hey Buddy was the right technology partner to bring our vision of an AI-powered, visually stunning gaming experience to life. Their dedication was evident Right from the start. They were not only able to integrate Unreal Engine 5 and Unity ML agents for spectacular and intelligent AI gameplay, but they could do it for a large number of characters and environments. This was truly unbelievable",
      section11: {
        para: "Ready to disrupt the gaming market with innovative AI capabilities? From captivating visuals to intelligent AI integration, Hey Buddy turns your vision into reality. Connect with us now to get started on your gaming journey!",
      },
      link: "/Pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "15",
      heading1: "Hey Buddy’s Epic Collaboration with a Gaming Studio",
      heading2: "Crafting an Enthralling Gaming Experience",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_1.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_2.jpg",
      para1:
        "A renowned game development studio joined forces with us for a collaborative effort on an ambitious cross-platform action-adventure game. Our comprehensive game development services, coupled with their expertise, resulted in a visually stunning and immersive gaming experience.",
      para2:
        "The game received critical acclaim and surpassed sales expectations, showcasing our combined strengths in game design, programming, art production, and engine optimization. This successful collaboration solidified our reputation for delivering top-tier gaming experiences.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "A renowned game development studio with a brilliant track record of creating critically acclaimed and commercially successful titles connected with us for collaboration. They approached us to collaborate on developing an ambitious, cross-platform action-adventure game with a focus on delivering a visually stunning and deeply immersive gaming experience. We offered comprehensive game development services infused with our expertise in game design, programming, art production, engine optimization among others. The captivating and visually stunning gaming experience received critical acclaim and achieved sales exceeding projections.",
      section5: {
        heading: "An Epic Gaming Odyssey",
        requirement:
          "The client had a vision for creating an immersive open-world gaming experience, pushing the boundaries of storytelling, graphics, and gameplay mechanics. At the same time, it was also required to maintain cross-platform compatibility and optimized performance.",
        execution:
          "We used Unreal Engine, along with our collaborative approach and technical expertise in areas like ray tracing, physically-based rendering, and performance optimization, resonated with the client's goals.",
        delivery:
          "The final product was an awe-inspiring open-world gaming experience. It seamlessly blended eye-catching graphics, immersive storytelling with innovative gameplay mechanics. Thus, challenging players' skills and keeping them hooked for hours.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_3.jpg",
      },
      section6: {
        heading: "An Epic Gaming Masterpiece",
        para: "Our team of skilled game developers, artists, programmers, and quality assurance specialists worked closely with the client to bring their vision to life.",
        list1:
          "The power of the Unreal Engine 5 resulted in gaming environment with advanced ray tracing, global illumination, and physics-based rendering.",
        list2:
          "Innovative gameplay mechanics, such as dynamic weather systems, realistic physics simulations, and advanced AI behaviour.",
        list3:
          "The game's cross-platform compatibility was ensured through extensive optimization efforts",
        grid: {
          cell11: "24",
          cell1:
            "Ranked tops in the App Store's gaming category within 24 hours.",
          cell21: "5 million ",
          cell2: "Downloads worldwide within the first week.",
          cell31: "4.8",
          cell3:
            "Average user rating of 4.8/5 stars on major gaming platforms.",
          cell41: "3",
          cell4: "Average playtime of 3 hours per session.",
        },
      },
      section7: {
        heading1: "Realise Your Gaming Vision with",
        heading2: "Our Game Development Services",
      },
      section8: {
        // heading:"",
        requirement:
          "We ensure to understand the client’s vision by conducting extensive discussions on their creative vision.",
        ideation:
          "Leveraging our unique collaboration approach we engaged with the client's team to conceptualize the overall artistic direction.",
        designing:
          "Creation of detailed game designs, character models, environment art, level layouts, and gameplay mechanics blueprints.",
        development:
          "We implemented advanced game development techniques using Unreal Engine 5, leveraging its powerful capabilities",
        optimization:
          "Various optimization techniques employed, such as level-of-detail management, occlusion culling, dynamic resolution scaling, and multithreaded rendering.",
        // testing:"",
        deployment:
          "Rigorous testing and quality assurance across multiple platforms, hardware configurations for a polished and bug-free game.",
      },
      section9: {
        heading1: "Translating Creative Ambition into Technical Brilliance",
        heading2: "Cross-Platform Consistency and Optimization",
        heading3: "Orchestrating a Collaborative Masterpiece",
        para1:
          "Realising an ambitious creative vision into an engaging gaming experience wash the first challenge we came across. Our team carefully balanced the artistic expression with the technical constraints. The results was a high-fidelity graphics with smooth performance across platforms.",
        para2:
          "Next up was the obvious challenge of ensuring consistent performance including, graphics quality, and user experience across diverse gaming platforms. This demanded extensive optimization efforts and platform-specific fine-tuning. Our team achieved this by deploying multiple powerful techniques.",
        para3:
          "As a business decision maker would know how difficult it is to coordinate a large team of developers, artists, designers, and QA specialists working across time zones. We achieved this successfully through our unique collaborative approach and effective communication and project management, seamlessly integrating diverse perspectives.",
      },
      testimonal:
        "Hey Buddy team's passionate, creative, and technical expertise proved instrumental our success. Given the fact that Kapil and Avdhesh have a vast experience are project managers first who understand the challenges of handling a large project like the back of a hand. This realy contributed to the smoother execution of the over all project and gaining the success we achieved.",
      section11: {
        para: "Want to see your dream game on the screen? - Partner with Us",
      },
      link: "/Pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
  ];

  const Selected_data = data.filter((casestudy) => casestudy.id === id);

  const {
    heading1,
    heading2,
    url1,
    url3,
    para1,
    para2,
    about,
    section5,
    section9,
    section8,
    section6,
    testimonal,
    section11,
    section7,
  } = Selected_data[0];

  return (
    <div className=" mx-auto">
      <Section1 heading1={heading1} heading2={heading2} url1={url1} />

      <div className=" mx-auto ">
        <Section2 about={about} />
      </div>

      <div className=" mx-auto ">
        <Section3
          heading1={heading1}
          heading2={heading2}
          para1={para1}
          para2={para2}
          url3={url3}
        />
      </div>

      {/* <div className="lg:w-[80%] mx-auto ">
        <Section4 />
      </div> */}

      <div className=" mx-auto ">
        <Section5 {...section5} />
      </div>
      <div className=" mx-auto ">
        <Section6 {...section6} />
      </div>

      <div className=" mx-auto ">
        <Section7 {...section7} />
      </div>

      <div className=" mx-auto">
        <Section8 {...section8} />
      </div>
      <div className=" mx-auto ">
        <Section9 {...section9} />
      </div>

      <div className=" pb-12 mx-auto ">
        <Temp testimonal={testimonal} />
      </div>
      <div className=" mx-auto ">
        <Section11 {...section11} />
      </div>
    </div>
  );
};

export default page;
