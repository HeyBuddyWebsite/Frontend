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
  return [{ id: "10" }, { id: "11" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "10", //grid
      heading1: "Virtual Reality Tours Save Time and Impress Buyers",
      heading2: "VR Tours Application for Real Estate Business",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case6/1b.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case6/2b.jpg",
      para1:
        "Our client in real estate aims to realize dream homes through an enhanced app with VR tech, enabling remote tours. Hey Buddy upgraded the app for stability, hyper-realism, and interactivity, revolutionizing property exploration.",
      para2:
        "This innovation saves clients time and effort by offering immersive virtual tours from anywhere.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Getting people their dream homes is the vision of our client. Our client belongs to the real estate domain. They deal in selling, buying, and renting properties out. They were looking to have a real estate app enhanced with virtual reality technology. Their focus is to take their services to the next level by making it possible to take a tour of the place from anywhere virtually, saving clients time and effort. Hey Buddy ensured a stable, hyper-realistic and interactive VR experience.",
      section5: {
        heading:
          "Paced-up Real Estate business with a pinch of Virtual Reality",
        requirement:
          "Our client was losing too much time and effort in taking people to the places to show them the properties. It prevented them from focusing on the main core of the business i.e., verifying and listing new properties in their gigantic platform. Moreover, it was affecting badly on their productivity and profit.",
        execution:
          "They shortlisted us to help them get rid of these problems or issues because of the work that we performed for other businesses. Our in-depth expertise with emerging technologies is worth seeking. ",
        delivery:
          "We offered them an app that helped them offer virtual tours to their prospects in a few easy steps. The app was also made fully user-friendly not only for the client but also for their prospect. While property buyers could easily access the experience, our client could easily create new properties to showcase to their customers.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case6/3b.jpg",
      },
      section6: {
        heading: "Real Estate App laden with the shadow of Future Tech VR",
        para: "Hey Buddy devised a real estate app for them that allows users to check out a property from the comfort of their homes. The usage of VR makes the entire process seamless enough to settle everything.",
        list1:
          "Making people have a virtual tour saves a lot of money and time that can be invested in some other aspects leading to increased productivity.",
        list2:
          "The process of buying and selling properties becomes easy through smooth functioning with this virtual reality-enhanced app.",
        list3:
          "Sales roar up to the next level as getting home, office, workplace, etc becomes hassle-free.",
        grid: {
          cell11: "50%",
          cell1: " customer retention rate",
          cell21: "45%",
          cell2: "increase in product sales in just 2 months.",
          cell31: "30%",
          cell3: "reduction in website bounce rate.",
          cell41: "Substantial",
          cell4: "increase in new customer base.",
        },
      },
      section7: {
        heading1: "Want to attract users to your business?",
        heading2:
          "Hey Buddy is your buddy to take one step further with technology!",
      },
      section8: {
        // heading:"",
        requirement:
          "First, our manager did a meeting with the client to get a brief of what they want and what are their expectations.",
        ideation:
          "Based on their requirements, we start to plan how we move ahead with the project so that we can deliver what they want.",
        designing:
          "Designing is the next step that we took. We infuse all the things revolving around Virtual reality in the app to give users an enthralling experience.",
        development:
          "Our dedicated developers are next in this chain, they are familiar with the fact that how functionality plays a key role in this vision of the client.",
        deployment:
          "Once everything gets done, we perform a series of tests to ensure that no error or flaw persists in the app. Then, we deploy it in the live running.",
      },
      section9: {
        heading1: "Inch-perfect Property Development",
        heading2: "Inclusive App Catering to Non-VR Users",
        heading3: "Cross-platform Integration",
        para1:
          "One major problem that we faced was that it demanded significant care and expertise to ensure the property looked exactly like its real-world counterpart. Plus ensuring that when our clients would develop new experiences, they should also meet the same criteria.",
        para2:
          "Targeting an audience that is equipped with VR is quite a task as most people are unaware of the usage of VR headsets or don’t know much about the technology yet.",
        para3:
          "Ensuring seamless integration with various VR platforms and devices adds another layer of complexity posing compatibility testing and optimization for several hardware segments.",
      },
      testimonal:
        "Now, I can be able to sell, buy, or rent out property because of the better user experience. And it all happened because of Hey Buddy. They understand my concern and leave no stone unturned to eradicate it.",
      section11: {
        para: "Ready to uplift your business? Give us a Call and say “Hey Buddy!”",
      },
      link: "/Pages/casestudies/vrdevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "11",
      heading1: "Architecture Reimagined",
      heading2: "Accelerated Processes with Immersive VR",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case13/1b.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case13/2b.jpg",
      para1:
        "An innovative VR solution with architectural visualization capabilities was developed for a large architectural firm, enhancing design communication and decision-making. This immersive platform offers a high-quality VR experience, surpassing traditional 2D renderings and improving client satisfaction.",
      para2:
        "It aims to boost sales and elevate the firm's image by allowing architects and clients to visualize and collaborate on designs effectively. This pathbreaking effort signifies a step forward in the industry, offering a new standard for architectural visualization and client engagement.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "We developed an innovative virtual reality (VR) solution with architectural visualisation capabilities. As can be understood, our client was a large architectural firm. They have a wide portfolio of iconic projects worldwide and want to take their business one step ahead. As traditional 2D renderings have limitations when it comes to offering a satisfactory experience and iterating on designs, the VR solution was the first choice. This is because an immersive VR platform for architects and clients to visualise and collaborate on architectural designs was not only add to their image but will boost sales as well. Our effort proved pathbreaking with an amazing high-quality VR experience. This new way to visualise the infrastructure enhanced design communication, improved decision-making, and increased client satisfaction.",
      section5: {
        heading: "Bringing Vision and Reality Closer Than Ever",
        requirement:
          "The project aimed to convey architectural information with true scale, spatial relationships, and intricate details to clients and stakeholders.",
        execution:
          "Our expertise in VR technologies and unique collaborative approach to project execution made us the ideal partner for our client.",
        delivery:
          "We succeeded delivered a fully immersive VR platform that allowed architects and clients to virtually step inside. They could experience architectural designs at a 1:1 scale and get a clear idea of how the project will turn out if executed as shown. This facilitated better communication and decision-making that enhanced the process development and boosted sales.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case13/3b.jpg",
      },
      section6: {
        heading: "Revolutionising Architectural Design Communication",
        para: "Our VR architectural visualisation provided an unparalleled level of immersion. It enabled architects and clients to not only explore but also interact with architectural designs and perceive the possible outcome with perfect clarity. Here are the three powerful features of our platform.",
        list1:
          "Realistic 1:1 scale visualisation provided a genuine sense of scale and spatial relationships.",
        list2:
          "The ability to virtually walk through and experience from different perspectives gave a better idea of the design and the actual outcome.",
        list3:
          "Stakeholders could collaborate and get design iteration in real-time, allowing design refinements for better outcomes.",
        grid: {
          cell11: "35%",
          cell1: "reduction in design revisions and associated costs",
          cell21: "20%",
          cell2: "faster client approvals",
          cell31: "28%",
          cell3: "increase in client satisfaction ratings",
          cell41: "45%",
          cell4: "enhanced collaboration and coordination",
        },
      },
      section7: {
        heading1: "Expedite Process Like Never Before",
        heading2: "VR Architectural Visualization",
      },
      section8: {
        //heading: "",
        requirement:
          "We started by conducting in-depth consultations with the client as we always do to understand their specific needs and project goals.",
        ideation:
          "Our joint collaboration worked on the conceptualisation of the VR platform, its features and user experience.",
        designing:
          "Then we worked on meticulous designs of 3D models, environments, and user interfaces for the VR platform.",
        development:
          "For the development phase, we leveraged advanced VR technologies and popular game engines to develop the VR architectural visualisation platform.",
        deployment:
          "Lastly, we integrated the VR platform with the client's existing design tools for smooth adoption and utilisation.",
      },
      section9: {
        heading1: "Achieving Photorealistic Visuals in VR",
        heading2: "Translating Architectural Nuances ",
        heading3: "Crafting Ergonomic VR Interactions and Navigation",
        para1:
          "As it was a project to showcase a real-world entity with the primary goal to make the virtual property as realistic as possible. We leveraged advanced techniques like ray tracing, global illumination, and physically-based rendering to create lifelike visuals in the VR environment.",
        para2:
          "We encountered the challenge of accurately converting intricate architectural designs into high-fidelity virtual models. However, tackling the challenges head-on, we meticulously crafted 3D modelling pipelines and employed advanced material systems.",
        para3:
          "The third challenge was making VR controls easy for users to understand and use. For this, we used advanced techniques like teleportation and smooth movement to ensure users don't feel dizzy or sick.",
      },
      testimonal:
        "We are very happy with our VR architectural visualisation platform developed by Hey Buddy. It has completely changed the way we work on designs and showcase our vision. The architectural visions at a 1:1 scale significantly improved our client’s understanding and accelerated decision-making.",
      section11: {
        para: "The Power of VR Awaits for Your Architectural Designs – Let's Connect!",
      },
      link: "/Pages/casestudies/vrdevelopment/[id]",
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
