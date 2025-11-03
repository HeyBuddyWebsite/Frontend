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
  return [{ id: "5" }, { id: "6" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "5",
      heading1: "Successful Implementation of AR Technology in",
      heading2: "D2C-Based Online Furniture Store",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/amazon-rooom-decorator-hi-res.webp",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/furniture-AR-CORT.webp",
      para1:
        "A furniture retailer sought to enhance digital sales by integrating AR technology into their website. They approached us for technical collaboration and customized solutions. After initial discussions, we tackled challenges and successfully implemented AR for their D2C brand.",
      para2:
        "This transformation aims to provide immersive product showcases and enable faster purchasing decisions for customers.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "The client deals in offering a wide extension of furniture for commercial and residential areas. After transforming the physical selling of furniture to an omnichannel commerce solution, the brand expected to boost sales. However, the client is experiencing a not-so-good number in digital sales patterns. After doing a thorough analysis, it was found to be a less appealing showcase of furnishings of the products. Thus, the solution lies in implementing new-age Augmented Reality (AR) technology into the website to best showcase products to customers and allow them to try items in the virtual settings to make fast buying decisions. Concerning the same, the client reached us to collaborate on the technical grounds of AR implementation and offer other sets of customized solutions. After having initial project discussions, we started working on the AR project for their D2C brand and met all the possible challenges with result-oriented solutions.",
      section5: {
        heading:
          "AR Campaign by D2C Furniture Brand - Problem Identification, Coordination, and Feature-rich Implementation",
        requirement:
          "At the initial level, the project requirement was to add the virtues of AR technology into the existing online furniture commerce brand that deals in offering products directly to customers. The client wanted to implement AR for advertising, product showcase, and for marketing purposes. It was required to provide customers with a hassle-free shopping experience like the way competitors are doing these days. Keeping all such requirements in mind, our expert team of eCommerce professionals and AR skilled resources analyze the current functionalities, different product categories, target audience, and other insights of the brand.",
        execution:
          "Our eCommerce team with a key specialization in AR technology started working on the project. The team implemented the features of AR in the D2C brand both in forms of WebAR and AppAR allowing the users to access this feature both on the website and the app. Specialized non-marker-based AR technology is implemented by our experts. Thus, allowing users to place the product in a 3D virtual environment in their real-life office or home setting to see how products looks. Also, the technology for the D2C brand features furniture arrangement features for the benefit of customers to see the right placement of furnishings.",
        delivery:
          "On this AR in D2C project for an online furniture brand, we used cutting-edge technology along with years of expertise from our team and close coordination with the client. Undoubtedly, we delivered the project well on time and received satisfactory feedback from the client.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/GettyImages-1220765714.jpeg",
      },
      section6: {
        heading:
          "Transforming the Product Selling Appeal of Digital Furniture Store ",
        para: "We transformed the current eCommerce store of a furniture-selling brand into more immersive, visually interactive, and user-friendly for customers. With the successful implementation of AR in the D2C furniture brand, customers can now access their smartphone or laptop's camera to virtually set up selected furniture in their home or office setting.",
        list1:
          "Seamless showcase of products from a 360-degree angle to have a better view and look into keen details before selecting.",
        list2:
          "Virtually try small to large-size furnishings in the real-world setting to see how it look.",
        list3:
          "Fully adaptable to browsers and smartphones to ensure easy accessibility.",
        grid: {
          cell11: "17%",
          cell1: "monthly increase in product sales",
          cell21: "24%",
          cell2: "better customer interaction rate.",
          cell31: "23%",
          cell3: "reduction in bounce rate.",
          cell41: "39%",
          cell4: "conversion rate",
        },
      },
      section7: {
        heading1: "Leverage the Power of",
        heading2: "AR in D2C Brands to Boost Product Sales & Revenue",
      },
      section8: {
        heading:
          "We followed a strategic & step-by-step process to achieve the expected set of results for the client. ",
        requirement:
          "We first understand the requirement of the client for the D2C-based to implement the perks of AR technology",
        ideation:
          "Our team had several brainstorming sessions along with regular client meetings, end-to-end analysis along successful implementation of activities before getting started.",
        designing:
          "In this stage, we crafted a specialized design pattern for the platform that showcases the AR button allowing customers to enable and see potential results.",
        // development: "",
        deployment:
          "After implementing AR into the project, we deploy the same and allow the clients to see remarkable results ahead. ",
      },
      section9: {
        heading1: "Keeping the Brand Value Intact ",
        heading2: " Project Delivery in a Short Span of Time",
        // heading3: "",
        para1:
          "As we have already mentioned, the clients transformed the physical furniture-selling business to an omnichannel platform to extend the customer base and increase sales patterns. Therefore, we wanted to make sure to keep that brand appeal intact while maintaining the trust level among the existing customer base and adding new ones to have a seamless product shopping experience. The initial challenge was to create a custom software with the required features and appearance to match the luxury's brand style and elegance. In practice, it required an experienced development approach to work similarly to a leading brand and display the brand's appeal on each page.",
        para2:
          "We came across another challenge of delivering the project in a short span of three months only. Initially, it was difficult to meet the timeline, but we managed to do the same with the additional resources acquired in our team, extending the project working hours, taking regular feedback from the client, and making substantial changes. ",
        // para3: "",
      },
      testimonal:
        "We are thankful for your valuable service along with the sheer efforts dedicated by our D2C-based online furniture brand. Truly impressed by your customized solutions along with result-oriented suggestions that certainly made a difference in our business",
      section11: {
        para: "Do you want to stand out in the eCommerce sector? If yes, then start implementing the virtues of AR technology to boost sales, enhance customer interaction, & drive engagement.",
      },
      link: "/Pages/casestudies/ardevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "6",
      heading1: "Revamped eCommerce Business",
      heading2: "Increase Saled Reduced Returns",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/AR-Commerce.webp",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/Bershka_Screenshot-2023-12-07-103625.webp",
      para1:
        "We developed an AR virtual try-on solution for a renowned apparel brand, enhancing the shopping experience and reducing return rates. This innovative platform integrates AR, VR, and AI technologies, allowing customers to try on clothing virtually before buying.",
      para2:
        "It aims to overcome traditional shopping drawbacks and stand out in a competitive market with its cutting-edge features.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Our client is a renowned apparel brand with a massive online and in-store presence wanted to improve the shopping experience of their customers. Their aim was to overcome the drawbacks of the traditional shopping experiences such as high return rates. Also, they wanted to make it innovative by utilising latest technologies such as AR, VR and AI to stand out and beat competition. We developed an AR virtual try-on solution for apparel items, basically, an AR platform for customers to virtually try on clothing before purchasing.",
      section5: {
        heading: "Elevating the Shopping Journey",
        requirement:
          "The project aimed to build a platform to for customers to visualize how clothes would actually look and fit on them, reducing dissatisfaction and high return rates. This involved work on multiple fronts such as utilisation of computer vision and 3D modeling to capture customer body measurements and create accurate 3D avatars.",
        execution:
          "We used ARKit to build the try-on experience on mobile devices. The project also required convertisng the client's apparel inventory into high-quality 3D models for real-time rendering. We used a scalable cloud infrastructure to handle computationally intensive 3D rendering and AR processing.",
        delivery:
          "For customers, our comprehensive AR virtual try-on solution allowed customers to visualise themselves wearing different apparel items accurately.  It allowed them to make faster and better decisions whilie minimising the feeling dissatisfaction. For out client, it not only reduced the returns as was intended but boosted sales and their brand image.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/Frame%2039263.jpg",
      },
      section6: {
        heading: "Transforming Shopping with Augmented Reality",
        para: "The hardworkd of our team that developed a state-of-the-art AR platform paid off. The platform seamlessly integrated with the client's e-commerce website and mobile app and helped us achieve multiple milestones.",
        list1:
          "We utilised computer vision and 3D modelling for customers to virtually dress in various clothing items with a simple use of their smartphone cameras.",
        list2:
          "The experience also let customers mix and match different apparel pieces and view them from multiple angles for accurate visualization of size,look and fit.",
        list3:
          "The product returns dropped significantly by 32%, while the online conversions got a boost by 26% within the first three months.",
        grid: {
          cell11: "32%",
          cell1: "reduction in product returns",
          cell21: "26%",
          cell2: "increase in online conversions",
          cell31: "28%",
          cell3:
            "improvement in online customer satisfaction and 2.5x higher conversion rate for customers",
          cell41: "20%",
          cell4: "increase in average order value",
        },
      },
      section7: {
        heading1: "Experience the Shopping Future",
        heading2: "Try Our AR Solutions Today!",
      },
      section8: {
        //heading: "",
        requirement:
          "We conducted extensive research and interviewed customers to understand pain points and expectations.",
        ideation:
          "Our collaborated with the client's team led to better conceptualization of the AR try-on and define key features.",
        designing:
          "We createddetailed UI/UX designs, 3D models, and AR overlays for various apparel items.",
        development:
          "Use of computer vision, 3D modelling and immersive technologies to develop the AR platform.",
        deployment:
          "Integration of the AR solution with the client's e-commerce platforms and launching it across online channels.",
      },
      section9: {
        heading1: "Precise Visualization for Diverse Body Types and Apparel",
        heading2: "Cross-Device Optimization for Seamless Performance",
        heading3:
          "Seamless Integration with Existing E-Commerce Infrastructure",
        para1:
          "One of the key challenges was to ensure accurate size and fit visualization for a wide range of body types and clothing styles. It was not easy to develop computer vision algorithms and 3D modeling techniques to accurately capture and render different body shapes, sizes, and apparel draping.",
        para2:
          "In fusing cross-platform compatibility into the AR experience for seamless performance was another critical challenge. Our team optimized the computer vision, 3D rendering, and AR processing pipelines to ensure smooth and responsive performance, regardless of the device overall configuration.",
        para3:
          "We also overcame the challenge of integrating the AR platform with the client's existing e-commerce infrastructure and databases. Our team ensure that the AR try-on experience perfectly fit with the other pieces of the puzzle i.e. brand's product catalog, inventory management, and order processing systems, with real-time synchronization and a unified shopping experience.",
      },
      testimonal:
        "We are really thankful to Hey Buddy for their commendable efforts. The AR virtual try-on solution delivered by them contributed significantly to our organisational goals and boosted our business. Our customers are loving the immersive experience and we have notices a significant reduction in returns with increase in online sales. We thank Hey Buddy for their unique style of cooperation and collaboration style and highly recommend them.",
      section11: {
        para: "Want to impress Your customers with AR?",
      },
      link: "/Pages/casestudies/ardevelopment/[id]",
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
