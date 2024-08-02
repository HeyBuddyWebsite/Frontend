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
  return [{ id: "13" }, { id: "14" }, { id: "15" }, { id: "29" }, { id: "30" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "13",
     

      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13_3.png",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13_2.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13%20_1.png",
      heading: "Captivating Gaming App Interface For Hyper Engagement\nMultiplayer Game with Gravitating Graphics & Gameplay",
      section3:{heading: "Captivating Gaming App Interface For Hyper Engagement Multiplayer Game with Gravitating Graphics & Gameplay",
      para1:
        "Hey Buddy partnered with a leading gaming hub known for their captivating games, seeking high-quality graphics. The client's global presence and high standards necessitated exceptional outcomes. Hey Buddy not only met but surpassed expectations, delivering graphics that enhanced the gaming experience.\n\nThis successful partnership further solidified Hey Buddy's reputation in the gaming industry.",
      },
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

          cell1: "39% conversion rate.",

          cell2: "100k+ downloads from the Play Store.",

          cell3: "60% hike in total revenue.",
  
          cell4: "Increased revenue in the past few years",
        },
      },
      section7: {
        heading: "Launching your next\nadventurous and adrenaline-rushing game that hooks gamers.",

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
      link: "/pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "14",
      
   
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_1.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_2.jpg",
      img3:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_3.jpg",
      heading: "AI-Infused\nSmart and Adaptive Gaming with Unreal’s Magic",
      section3:{heading: "AI-Infused Smart and Adaptive Gaming with Unreal’s Magic",
      para1:
        "Hey Buddy partnered with a leading game development company for an AI-powered one-on-one duel game. The goal was to create visually stunning gameplay with advanced mechanics. Hey Buddy delivered top-notch AI integration for dynamic and endlessly entertaining gameplay.\n\nThe collaboration resulted in a game that captivated gamers worldwide with its appeal and innovation.",
      },
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

          cell1: "3 Million Downloads",

          cell2: "89% Retention Rate",

          cell3: "4.8 Ratings",

          cell4: "93% positive review",
        },
      },
      section7: {
        heading1: "Achieve these amazing results with\nHey Buddy",

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
      link: "/pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "15",


      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_1.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_2.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_3.jpg",
      heading: "Hey Buddy’s Epic Collaboration with a Gaming Studio\nCrafting an Enthralling Gaming Experience",
      section3:{heading: "Hey Buddy’s Epic Collaboration with a Gaming Studio Crafting an Enthralling Gaming Experience",
      para:
        "A renowned game development studio joined forces with us for a collaborative effort on an ambitious cross-platform action-adventure game. Our comprehensive game development services, coupled with their expertise, resulted in a visually stunning and immersive gaming experience.\n\nThe game received critical acclaim and surpassed sales expectations, showcasing our combined strengths in game design, programming, art production, and engine optimization. This successful collaboration solidified our reputation for delivering top-tier gaming experiences.",
      },
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
       
          cell1:
            "24 Ranked tops in the App Store's gaming category within 24 hours.",
          
          cell2: "5 million Downloads worldwide within the first week.",
 
          cell3:
            "4.8 Average user rating of 4.8/5 stars on major gaming platforms.",

          cell4: "3 Average playtime of 3 hours per session.",
        },
      },
      section7: {
        heading: "Realise Your Gaming Vision with\nOur Game Development Services",
  
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
      link: "/pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },


    {
      id: "29",


      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-mCWR93BJgF.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-p6QnING3U2.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-ybvkmzPwq4.jpg",
      heading: "Elevating RPGs with\nEmotionally Responsive NPCs",
      section3:{heading: "Cliched Responses ruining In-game immersion",
      para:
        "It’s about time! The static and repetitive nature of NPC interactions in RPGs has come a long way.\n\nIt is now at a point where it is irritating for players and they won’t let it pass off. It breaks their immersion and interrupts the game's narrative, and ultimately, ruins the experience.\n\nTo overcome this challenge, our client was looking for something innovative to infuse life into their gaming experience by making NPCs feel more human.\n\nIt should make NPCs highly responsive i.e. they should have the perfect reaction to players’ moves.  This will add a convincing layer to the immersion and contribute to the narrative, rather than ruining it.",
      },
      about:
        "We collaborated with our client to enrich their role-playing games (RPGs) by developing special NPCs (non-playable characters) to deepen immersion and narrative engagement.\n\nThese NPC  were special because they were able to react emotionally to player actions, providing players with an ultra-lifelike and dynamic gaming experience.",
      section5: {
        heading: "Pioneering Emotional Responsiveness in NPCs",
        requirement:
          "We needed to develop an AI system for NPCs to exhibit genuine emotional responses. This means we required to implement advanced NLP and ML algorithms to analyze player inputs and generate the appropriate response.",
        execution:
          "We collecting and annotated a large dataset of human conversations, and implemented NLP and ML techniques to model emotional states and generate appropriate responses.",
        delivery:
          "Integrating the AI system seamlessly with the game engine, we created immersive and emotionally engaging experiences with NPCs reacting authentically to player actions, significantly enhancing player engagement.",
        
      },
      section6: {
        heading: "Emerging Tech Solutions bring full-of-life NPC Interactions in RPGs",
        para: "The project led to the creation of NPCs that could express a wide range of emotions, from anger to joy, based on player behavior. This significantly enhanced the depth of the game's narrative and improved player engagement.",
        // list1:
        //   "The power of the Unreal Engine 5 resulted in gaming environment with advanced ray tracing, global illumination, and physics-based rendering.",
        // list2:
        //   "Innovative gameplay mechanics, such as dynamic weather systems, realistic physics simulations, and advanced AI behaviour.",
        // list3:
        //   "The game's cross-platform compatibility was ensured through extensive optimization efforts",
        grid: {
       
          cell1:
            "35% increase in player engagement",
          
          cell2: "50% rise in narrative satisfaction",
 
          cell3:
            "60% improvement in game reviews",

          cell4: "25% boost in game replayability",
        },
      },
      section7: {
        heading: "Discover novel solutions\nFor your chronic problems. ",
  
      },
      section8: {
        // heading:"",
        requirement:
          "We worked closely client, understanding their vision of NPCs, and discussing on possible solutions and other game development nuances.",
        ideation:
          "Our efforts zeroed in on a robust system for NPCs capable of eliciting a suitable and thoughtful emotional response.",
        designing:
          "We worked with our team to develop detailed AI models and emotional algorithms capable of generating the most natural and intuitive response.",
        development:
          "The hard work of day and night worked out well. We implemented the emotional response system that blew away our clients.",
        // optimization:
        //   "Various optimization techniques employed, such as level-of-detail management, occlusion culling, dynamic resolution scaling, and multithreaded rendering.",
        // testing:"",
        deployment:
          "We tested the system thoroughly and then successfully launched the game with the feature.",
      },
      section9: {
        heading1: "Complex Emotion Mapping",
        heading2: "Natural Language Processing",
        heading3: "Balancing Emotional Reactions",
        para1:
          "As obvious the most challenging task was to make sure that NPCs exhibit appropriate emotions. We created detailed emotion algorithms to map complex NPC reactions accurately.",
        para2:
          "We needed to make NPC dialogue feel natural and responsive. For this, we integrated advanced NLP techniques that resulted in realistic and convincing conversations between players and NPC.",
        para3:
          "The third challenge we faced was to keep NPC responses balanced and not overwhelming. To overcome this challenge, we fine-tuned emotional triggers and responses for balance.",
      },
      testimonal:
        "Hey Buddy took our RPG to a whole new level. Their emotionally responsive NPCs is incredible. Our players feel more immersed and are now more invested in the storyline and characters than ever before. Highly recommend their expertise!",
      section11: {
        para: "Explore Innovation with Us. ",
      },
      link: "/pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },

    {
      id: "30",


      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-AjGNmwUEYJ.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-OfuQM4Z3t1.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/african-american-gamer-girl-using-pc-gaming-setup-having-good-time-playing-multiplayer-online-action-game-home-living-room-woman-streaming-first-person-shooter-while-talking-headset.jpg",
      heading: "Stealth Gaming Goes Smart with\nHey Buddy’s Adaptive AI",
      section3:{heading: "Predictability Took the Fun Out, AI Supercharged Gaminfg",
      para:
        "Due to the limitation of technology, stealth games have mostly been static. The enemies followed pre-determined paths and behaved in a defined manner, the events triggered in a set order and lacked variability. In short, the game gameplay was repetitive and predictable.\n\nAs predictable, the client wanted to introduce dynamism and volatility that could nudge players to adapt their strategies constantly.\n\nThe clear solution to this was developing an AI system that could learn from player actions and adjust its strategies accordingly.",
      },
      about:
        "Our partner game development company wanted to utilize AI for their stealth gaming genre. They wanted to adaptive solution that allowed the game elements to respond to player behavior in real-time. This innovative solution was projected to bring uniqueness by introducing unpredictable challenges and increasing player engagement and immersion.",
      section5: {
        heading: "No More Easy Wins: AI Breakthrough in Stealth Gaming",
        requirement:
          "Bringing dynamism required sophisticated machine-learning algorithms and real-time data analysis. Thus, the system could continuously learn from player behavior, update enemy strategies in real time, and provide contextually appropriate responses.",
        execution:
          "We used reinforcement learning algorithms for high adaptability as per player interactions. Also, real-time data streams from gameplay sessions brought dynamism. Lastly, neural networks helped in recognizing patterns in player movements.",
        delivery:
          "This helped us successfully create an AI system that learns and adapts to the gamers’ strategies and brings in volatility to the gameplay. This led to highly unpredictable and engaging gameplay experiences that kept users at the edge.",
        
      },
      section6: {
        heading: "A True Stealth Game: Edge-of-the-Seat Experience",
        para: "We were successful in developing a dynamic stealth game where players faced unpredictable challenges. It compelled them to adopt dynamic strategies be more engrossed in the game narrative. This increased player retention and set a new benchmark in the gaming industry.",
        // list1:
        //   "The power of the Unreal Engine 5 resulted in gaming environment with advanced ray tracing, global illumination, and physics-based rendering.",
        // list2:
        //   "Innovative gameplay mechanics, such as dynamic weather systems, realistic physics simulations, and advanced AI behaviour.",
        // list3:
        //   "The game's cross-platform compatibility was ensured through extensive optimization efforts",
        grid: {
       
          cell1:
            "30% increase in player retention",
          
          cell2: "45% rise in player engagement",
 
          cell3:
            "50% improvement in replayability",

          cell4: "40% more positive player reviews",
        },
      },
      section7: {
        heading: "Experience the future of gaming with our dynamic AI solutions.\nLet's give games what they want!",
  
      },
      section8: {
        // heading:"",
        requirement:
          "We started by collaborating closely to understand their business goals, the stealth gaming genre, and other requirements and how to fit AI into it.",
        ideation:
          "Post-understanding all the requirements, we brainstormed and conceptualized the adaptive AI mechanisms to achieve the required dynamism.",
        designing:
          "Then, based on the finalized idea, we created detailed AI algorithms and behavioral models and developed a detailed complete plan, including prototypes.",
        development:
          "We implemented and tested the adaptive AI in the game environment using reinforcement learning algorithms, real-time data streams, and neural networks",
        // optimization:
        //   "Various optimization techniques employed, such as level-of-detail management, occlusion culling, dynamic resolution scaling, and multithreaded rendering.",
        // testing:"",
        deployment:
          "After thorough testing, we successfully launched the game with the new AI system and the outcome really blew minds.",
      },
      section9: {
        heading1: "Balancing AI Difficulty",
        heading2: "Real-Time Data Processing",
        heading3: "Player Experience Consistency",
        para1:
          "It was a complex AI system to develop and implement. Our experts needed deep research and meticulous fine-tuning to adjust the learning algorithms to balance difficulty.",
        para2:
          "The game needs to respond in real-time and this is required to process player data without lag. For this, we optimized algorithms for faster data processing and made use of techniques like edge computing.",
        para3:
          "We needed to maintain a consistent experience across various player skill levels. This, we achieved, by tailoring AI behavior to different difficulty settings to balance enjoyability with game difficulty level.",
      },
      testimonal:
        "Working with Hey Buddy and their adaptive AI solution four our stealth game took to a different level. It filled our gamers with excitement and they loved the unpredictability and challenge, engagement is skyrocketing. Couldn't be happier with the results!",
      section11: {
        para: "Give gamers what they crave for - a realistic gaming experience.\nChoose your technology buddy.",
      },
      link: "/pages/casestudies/gamedevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
  ];

  const Selected_data = data.filter((casestudy) => casestudy.id === id);

  const {
   img1,img2,img3,heading,about,
    section3,    
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
      <Section1 heading={heading} img1={img1} />

      <div className=" mx-auto ">
        <Section2 about={about} />
      </div>

      <div className=" mx-auto ">
        <Section3
          
          {...section3}
          img2={img2}
        />
      </div>

      {/* <div className="lg:w-[80%] mx-auto ">
        <Section4 />
      </div> */}

      <div className=" mx-auto ">
        <Section5 {...section5} img3={img3} />
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