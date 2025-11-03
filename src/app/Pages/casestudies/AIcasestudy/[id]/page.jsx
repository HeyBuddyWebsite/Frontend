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
  return [{ id: "9", id: "12" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "9",
      heading1: "Dining with Servi: AI-Powered Restaurant Experiences",
      heading2: "Revolutionizing Restaurant Bookings",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/AIcase/23.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/AIcase/4784243926-AdobeStock_586906714_voice_vocal_input_prompt_artificial_intelligence_AI_processing_NLP_supersize_1200x630.webp",
      para1:
        "Hey Buddy meticulously trained and deployed voice-activated AI-assistant for improved dining experience. This case study showcases our prowess to deliver state of the art AI solutions to solve even the most complex issues.",
      // para2:"",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "A leading food-tech company aiming to transform the dining experience for customers across the United States. They connected with the Hey Buddy team to develop an innovative AI-powered voice assistant, Servi. The app aimed to streamline restaurant bookings and elevate the overall dining experience. We developed an AI-driven voice assistant capable of handling end-to-end dining experiences from restaurant searches and seat bookings to dish recommendations, and personalized dining experiences. The app utilises advanced algorithms and integrations for seamless and delightful dining.",
      section5: {
        heading: "Ingredients of AI: Reimagine Restaurant Bookings",
        requirement:
          "Developing an AI voice assistant for restaurant bookings required robust natural language processing, machine learning for personalized recommendations, and real-time data integration with booking systems.",
        execution:
          "Our team built custom NLP models for voice command interpretation, trained ML algorithms on customer preferences and dining data for personalized recommendations, and implemented scalable data pipelines to integrate with restaurant systems.",
        delivery:
          "The result was Servi - an AI voice assistant that understood natural language, provided personalized restaurant/dish recommendations based on individual needs, coordinated seamless bookings, and continuously learned and adapted through user interactions. ",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/AIcase/24.jpg",
      },
      section6: {
        heading: "Delighting Diners with AI-Powered Convenience",
        para: "Servi is an AI-driven voice assistant that revolutionizes the dining experience by providing personalized restaurant recommendations, hassle-free bookings, real-time coordination with establishments, and tailored dining experiences.",
        list1:
          " Voice-activated restaurant search and booking so that customers easily find and reserve tables at their preferred eateries.",
        list2:
          " AI-powered dish recommendations based on individual taste preferences and dietary restrictions, ensuring a delightful culinary experience.",
        list3:
          "Real-time coordination between customers and restaurants, including dynamic seating charts, geo-fenced appetizer readiness, and two-way communication with the kitchen.",
        grid: {
          cell11: "35%",
          cell1: "increase in customer satisfaction scores",
          cell21: "20%",
          cell2: "boost in restaurant bookings through the app",
          cell31: "25%",
          cell3: "reduction in no-show rates",
          cell41: "40%",
          cell4:
            "higher average order value for personalized dining experiences",
        },
      },
      section7: {
        heading1: "Power your App",
        heading2: "With the intelligence of AI",
      },
      section8: {
        //heading:"",
        requirement:
          "We conducted thorough research to grasp customer pain points and operational challenges faced by restaurants.",
        ideation:
          "We collaborated closely with the client to conceptualize the features, integrations, and user experience of the AI assistant.",
        designing:
          "Crafted intricate user interfaces, voice interactions, and AI algorithms tailored for personalized recommendations and restaurant management",
        development:
          "Our team utilized advanced technologies such as NLP, machine learning, and real-time data integrations to construct the AI-powered voice assistant.",
        deployment:
          "Integrated Servi seamlessly with restaurant booking systems, ensuring a fluid and cohesive experience across all platforms.",
      },
      section9: {
        heading1: "Mastering NLP for Seamless Voice Commands ",
        heading2: "Seamless Booking Integration",
        heading3: "Fortifying Data Privacy",
        para1:
          "Developing a robust natural language processing engine to accurately interpret voice commands and provide relevant restaurant and dish recommendations. Our team leveraged state-of-the-art NLP techniques and extensive training data to build a highly accurate voice command interpreter.",
        para2:
          "Integrating with various restaurant booking systems and databases for real-time availability was a challenge. We integrated with various booking systems, establishing secure API connections and data synchronization processes.",
        para3:
          "Maintaining data privacy and security while handling sensitive customer information and dining preferences was important. We implemented robust encryption protocols and adhered to stringent data protection standards.",
      },
      testimonal:
        "Hey Buddy's AI development capability brought Servi to the world. Their expertise in AI, voice technology, and deep research of the food industry resulted in a path-breaking solution that combines convenience, personalization, and operational efficiency.",
      section11: {
        para: "Transform Your Customer Experience with AI.",
      },
      link: "/Pages/casestudies/AIcasestudy/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "12",
      heading1: "AI For Human Matchmaking: Data-driven Relationship",
      heading2: "Social Connections with Mechanical Approach",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/12_2.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/12_1.jpg",
      para1:
        "Our client, a visionary startup, aimed to alter the paradigm of social networking space. They had a vision of an intelligent AI-infused matchmaking app that fosters genuine connections based on shared interests, values, and personality traits.",
      para2:
        "They approached us to develop an AI-driven mobile app that would tap intelligent technology to facilitate meaningful interactions among users.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "The existing social apps often fail to create genuine connections, leading to superficial interactions and dissatisfaction. However, like all the problems in the world, AI has a data-based solution for it as well. An AI-powered app would use sophisticated algorithms, natural language processing (NLP), and machine learning (ML) to gather and analyze data such as user preferences, behaviors, etc. leading to enhanced matchmaking and personalized experiences. We developed a revolutionary social platform that analyses huge datasets to foster authentic connections and facilitate meaningful interactions, resulting in the start of long-lasting relationships and the creation of a vibrant community driven by shared interests and values.",
      section5: {
        heading: "One AI Application to Overcome Varied Social Challenges",
        requirement:
          "Providing a personalized matchmaking experience that caters to diverse user preferences, interests, and personalities was a significant challenge. Traditional social apps only stayed relevant for superficial interactions.",
        execution:
          "We utilize the expertise of our team in AI, machine learning, and mobile app development. Then, we combine it with a deep understanding of psychological experts on user behavior and social dynamics, bringing forth an ideal solution.",
        delivery:
          "An AI-powered matchmaking engine that leverages NLP, ML algorithms, and contextual data analysis. The result - a better matchmaking outcome based on personality compatibility.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/12_3.jpg",
      },
      section6: {
        heading:
          "Hey Buddy Successfully Delivering A Unique AI-social Solution",
        para: "Our efforts met success with an AI-driven mobile app, set to revolutionize social connections using huge data sets, advanced algorithms, and machine learning. It deeply analyses user data critical for matchmaking a long-term relationship.",
        list1:
          " AI-powered matchmaking engine that analyzes user profiles, interests, values, and personality traits to suggest compatible matches.",
        list2:
          " Natural language processing (NLP) for understanding user interactions, interests, and preferences through chat and profile data.",
        list3:
          "Contextual data analysis, including location, activity patterns, and real-time feedback, to refine and optimize match recommendations.",
        grid: {
          cell11: "40%",
          cell1: "increase in user engagement and retention",
          cell21: "35%",
          cell2:
            " higher match satisfaction rates compared to traditional apps",
          cell31: "30%",
          cell3: "reduction in user churn rate",
          cell41: "25%",
          cell4: "increase in positive user reviews and ratings",
        },
      },
      section7: {
        heading1: "Adopt Data-driven Approach",
        heading2: "For Assured Success",
      },
      section8: {
        //heading:"",
        requirement:
          "Conducted extensive user research, consultation with psychologist, and focus groups to understand critical points in social matchmaking.",
        ideation:
          "Collaborated with the client to refine their idea on the AI-powered matchmaking engine, defining key features and user experience.",
        designing:
          "Created detailed user interfaces, interaction flows, and AI algorithms for personalized recommendations and contextual data analysis.",
        development:
          "Leveraged NLP, ML, and advanced data analytics to build the AI matchmaking engine and mobile app.",
        deployment:
          "Meticulous integration of the AI engine with the mobile app for a smooth and engaging user experience across platforms.",
      },
      section9: {
        heading1:
          "Personalization Perfected: Decoding User Preferences with NLP",
        heading2: "Fort Knox Security: Safeguarding User Privacy",
        heading3: "Refining Excellence: AI Optimization for Enhanced Matches",
        para1:
          "Our first challenge was developing robust NLP models to accurately interpret user personality traits from unstructured data sources. We employed advanced NLP models, extensive training data, and refined algorithms to overcome this.",
        para2:
          "Ensuring data privacy and security while handling sensitive user information and personal data. At Hey Buddy, we prioritize user privacy by implementing robust encryption protocols and stringent security measures.",
        para3:
          "It is crucial to continuously refine and optimize the AI models based on real-time user feedback and interaction data, improving match accuracy. We gathered user feedback and interaction data to continuously refine our AI models.",
      },
      testimonal:
        "Our app altered the paradigm in social networking. Hey, Buddy’s team combined AI, machine learning, and user experience design to create a truly intelligent matchmaking platform that understands our users' preferences and personalities.",
      section11: {
        para: "Want an intelligent App of your own?",
      },
      link: "/Pages/casestudies/AIcasestudy/[id]",
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
