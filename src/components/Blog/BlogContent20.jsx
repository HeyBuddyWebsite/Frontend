"use client";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import "../../styles/Font.css";
import Image from "next/image";
import {
  FacebookShare,
  LinkedinShare,
  TwitterShare,
  WhatsappShare,
  TelegramShare,
} from "react-share-kit";

import {
  FaChevronRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaX,
  FaXRay,
  FaXTwitter,
} from "react-icons/fa6";
import "./page.css";

function BlogContent({ SelectedBlog }) {
  const [shareUrl, setshareUrl] = useState("");
  // const shareUrl = window.location.href;
  useEffect(() => {
    setshareUrl(window.location.href);
  }, []);
  const share_title = "Check out this awesome Blog by Hey Buddy!";
  const navbarHeight = 70;
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const top =
        section.offsetTop + window.innerHeight - navbarHeight - navbarHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  // getting the attributes of the blog
  const {
    blogType,
    title,
    mobblogImage,
    blogImage,
    pubDate,
  } = SelectedBlog;

  return (
    <div className={`mx-auto w-[90%] lg:w-[80%]   bg-no-repeat bg-fixed bg-top pt-28 `}>
      <div className="hidden lg:flex gap-2 items-center  py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white ">
        <span>Blog</span>
        <span>
          <FaChevronRight />
        </span>
        <span>{title}</span>
      </div>
      <div
        className={`rounded-xl relative overflow-hidden border-2 h-auto w-auto lg:h-[72vh]  mx-auto mt-4 ${
          blogType === "Games"
            ? "border-[#FF5C00]"
            : blogType === "Custom Software"
            ? "border-[#26B403]"
            : blogType === "AI"
            ? "border-[#FF001F]"
            : "border-[#00FFE0]"
        }`}
      >
        <div className="xl:hidden w-full h-full ">
          <Image
            loading="lazy"
            src={mobblogImage}
            alt="Image"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden xl:flex w-full h-full ">
          <Image
            loading="lazy"
            src={blogImage}
            alt="Image"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10  flex flex-col gap-2 md:gap-[21px]">
          <div
            className={` flex backdrop-blur-sm lg:items-center py-[5px] px-4 gap-[6px] w-fit rounded-full ${
              blogType === "Games"
                ? "bg-[#ff5c0024]"
                : blogType === "Custom Software"
                ? "bg-[#26b40324]"
                : blogType === "AI"
                ? "bg-[#ff001f24]"
                : "bg-[#00ffe024]"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full ${
                blogType === "Games"
                  ? "bg-[#FF5C00]"
                  : blogType === "Custom Software"
                  ? "bg-[#26B403]"
                  : blogType === "AI"
                  ? "bg-[#FF001F]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <span
              className={`text-[#FF5C00]  font-bold ${
                blogType === "Games"
                  ? "text-[#FF5C00]"
                  : blogType === "Custom Software"
                  ? "text-[#26B403]"
                  : blogType === "AI"
                  ? "text-[#FF001F]"
                  : "text-[#00FFE0]"
              }`}
            >
              {blogType}
            </span>
          </div>
          <h1 className="hidden  md:flex text-lg md:text-3xl font-semibold text-white">
            <span className="md:backdrop-blur-sm">{title}</span>
          </h1>
          <h1 className="text-white text-sm md:text-base">{pubDate}</h1>
        </div>
      </div>
      {/* intro section */}
      <section className="pt-10 flex flex-col-reverse lg:flex-row  mx-auto gap-10 relative">
        {/* main section */}
        <section className="lg:w-[60%] flex flex-col gap-5">
          <div className=" flex flex-col gap-14">
            {/* intro image */}
            {/* verbose information */}
            <section className="flex flex-col gap-[30px] pb-[40px]">
              <div
                id="section1"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Ensuring A Great User Experience with 3D Modeling</h1>

<p className="font-thin text-gray-100 mt-4">
  A truly great user experience (UX) is not a monolith but a mixed bag. It has the ability to offer a seamless, intuitive, and emotionally resonant interaction between users and the brands, its products, and/or its services.
</p>

<p className="font-thin text-gray-100 mt-4">
  It also balances usability, accessibility, visual appeal, consistency, performance, personalization, and the ability to forge an emotional connection.
</p>

<p className="font-thin text-gray-100 mt-4">
  Let’s discuss each of these vital components one by one and see how 3D models help you achieve all these qualities.
</p>

<h2 className="text-2xl font-bold mt-6">Usability and Intuitive Navigation</h2>
<p className="font-thin text-gray-100 mt-4">
  For a great experience, it's very essential that the products or services are useful and handy to the customer. They should be designed with a user-centric approach so that the interfaces are simple, intuitive, and efficient.
</p>
<p className="font-thin text-gray-100 mt-4">
  A good 3D interaction has the ability to enhance usability by providing natural and intuitive user interaction with products or services. Thereby, reducing hassle of long and tedious learning curve and improving overall satisfaction.
</p>
<p className="font-thin text-gray-100 mt-4">
  For example, consider a customer shopping for furniture online and using a 3D product viewer to examine different sofas. If the 3D experience is created with user-centric design, they will be able to easily rotate, zoom in, and customize the sofa as per their liking.
</p>
<p className="font-thin text-gray-100 mt-4">
  This will lead to an intuitive interaction, saving time and eliminating the need for complicated navigation. Thus, ensuring a smooth and satisfying shopping experience.
</p>

<h2 className="text-2xl font-bold mt-6">Accessibility for All</h2>
<p className="font-thin text-gray-100 mt-4">
  The 3D experience should be inclusive enough to cater to a diverse range of users, including those with disabilities or special needs. For example, you can enhance the accessibility of your experience through features like screen readers, keyboard navigation, and high contrast modes.
</p>
<p className="font-thin text-gray-100 mt-4">
  Interactive 3D models with accessibility either offer alternative ways of interaction covering a wider audience or supplement information.
</p>
<p className="font-thin text-gray-100 mt-4">
  Think of an online clothing store offering 3D virtual try-ons. To ensure that the experience has high accessibility, they integrate it with screen readers for visually impaired users and keyboard navigation for those who cannot use a mouse.
</p>
<p className="font-thin text-gray-100 mt-4">
  Along with that, they have provided high-contrast modes for users with low vision. These features let users from diverse backgrounds and varying abilities access the experience, making it easier for them to have a comfortable and productive interaction with the 3D models, thus ensuring a seamless shopping experience for everyone.
</p>

<h2 className="text-2xl font-bold mt-6">Visual Appeal and Emotional Connection</h2>
<p className="font-thin text-gray-100 mt-4">
  Now comes the interesting part, the aesthetic appeal. In the world of marketing, you cannot succeed without having pleasing design elements. Your 3D models should have great color combinations, typography, and layout. This is a must for a great overall user experience and to create a positive emotional connection.
</p>

<h2 className="text-2xl font-bold mt-6">Consistency and Cohesion</h2>
<p className="font-thin text-gray-100 mt-4">
  As a trustable brand, maintaining consistency in your 3D models is a must. You should have a similar theme for your design elements, interactions, and terminology across different touchpoints be it your website, mobile app, or the physical product itself.
</p>
<p className="font-thin text-gray-100 mt-4">
  This contributes to a cohesive user experience. The best part is these interactive 3D models can be seamlessly integrated into various platforms for a consistent and cohesive experience for users across multiple channels.
</p>

<h2 className="text-2xl font-bold mt-6">Performance and Responsiveness</h2>
<p className="font-thin text-gray-100 mt-4">
  Fast load times, responsive interactions, and smooth transitions are critical for a great user experience.
</p>
<p className="font-thin text-gray-100 mt-4">
  Users have high expectations for performance, and any lag or delay can negatively impact their experience. Techniques like level of detail (LOD) and mesh optimization ensure the smooth performance of interactive 3D models on various devices and network conditions.
</p>

<h2 className="text-2xl font-bold mt-6">Personalization and Ownership</h2>
<p className="font-thin text-gray-100 mt-4">
  When it comes to building a strong brand with a huge base of loyal audiences, personalization has no alternative.
</p>
<p className="font-thin text-gray-100 mt-4">
  You need to tailor the experience to individual users' preferences for significantly enhancing the user experience.
</p>
<p className="font-thin text-gray-100 mt-4">
  Techniques such as personalized recommendations, customizable settings, and adaptive interfaces give users a sense of ownership and connection. That is why customizable 3D models are in great demand. They let users customize products to their specific preferences, giving the user a sense of personal investment in the experience.
</p>

<h2 className="text-2xl font-bold mt-6">Product Visualization and Informed Decisions</h2>
<p className="font-thin text-gray-100 mt-4">
  Lastly, 3D models ensure a great user experience by allowing users to visualize products in a realistic and engaging manner. This helps users make informed decisions while reducing dissatisfaction or the chances of product returns.
</p>
<p className="font-thin text-gray-100 mt-4">
  All these aspects help businesses create a more immersive, engaging, and memorable journey for their customers and bring a ton of benefits. In the next section, we will discuss all these benefits.
</p>
              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Benefits of Interactive 3D Models for UX</h1>

<h2 className="text-2xl font-bold mt-6">Reduced Returns</h2>
<p className="font-thin text-gray-100 mt-4">
  As 3D models help customers thoroughly examine products, they not only make the purchase faster but also make a much more informed decision compared to traditional modes of information such as images and videos.
</p>
<p className="font-thin text-gray-100 mt-4">
  Customers can watch the product from multiple angles, understand the different components and their relation with each other, and even customize the product to better suit their objectives. This enhances the confidence of the customer in the product, reducing dissatisfaction as well as the likelihood of returns due to mismatched expectations.
</p>

<h2 className="text-2xl font-bold mt-6">Immersive Visualization</h2>
<p className="font-thin text-gray-100 mt-4">
  3D models deliver a realistic visual experience that helps customers better understand products or services. According to a Harvard Business Review study, customers are more likely to make a purchase if they can easily understand the product.
</p>

<h2 className="text-2xl font-bold mt-6">Increased Engagement</h2>
<p className="font-thin text-gray-100 mt-4">
  3D models allow users to interact with the product, offering an innovative experience that keeps customers engaged with the brand and the product for a much longer period compared to other methods of customer engagement. This helps businesses foster a deeper cognitive connection with the customer.
</p>

<h2 className="text-2xl font-bold mt-6">Personalization</h2>
<p className="font-thin text-gray-100 mt-4">
  As previously mentioned, 3D models allow users to customize the product before they buy and assess if it will serve their purpose. By giving this power to customers, businesses enhance their brand image and gain a positive association with the customer.
</p>
              </div>

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                 <h1 className="text-3xl font-extrabold">Applications Across Industries</h1>

<h2 className="text-2xl font-bold mt-6">E-commerce</h2>
<p className="font-thin text-gray-100 mt-4">
  Showcase products in detail, enabling customers to make informed purchase decisions.
</p>

<h2 className="text-2xl font-bold mt-6">Architecture and Construction</h2>
<p className="font-thin text-gray-100 mt-4">
  Visualize building designs, allowing clients to explore and provide feedback before construction.
</p>

<h2 className="text-2xl font-bold mt-6">Manufacturing</h2>
<p className="font-thin text-gray-100 mt-4">
  Demonstrate complex machinery or equipment, facilitating better understanding for clients and stakeholders.
</p>

<h2 className="text-2xl font-bold mt-6">Healthcare</h2>
<p className="font-thin text-gray-100 mt-4">
  Illustrate anatomical structures or medical devices, enhancing patient education and training for medical professionals.
</p>
              </div>


              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Technical Considerations</h1>

<h2 className="text-2xl font-bold mt-6">3D Modeling Software</h2>
<p className="font-thin text-gray-100 mt-4">
  Specialized software like Blender, Maya, or 3DS Max is used to create 3D models.
</p>

<h2 className="text-2xl font-bold mt-6">File Formats</h2>
<p className="font-thin text-gray-100 mt-4">
  Common file formats for interactive 3D models include .obj, .fbx, and .gltf, ensuring cross-platform compatibility.
</p>

<h2 className="text-2xl font-bold mt-6">Web Integration</h2>
<p className="font-thin text-gray-100 mt-4">
  Technologies like WebGL and Three.js allow seamless integration of interactive 3D models into websites and web applications.
</p>

<h2 className="text-2xl font-bold mt-6">Performance Optimization</h2>
<p className="font-thin text-gray-100 mt-4">
  Techniques like level of detail (LOD) and mesh optimization ensure smooth performance on various devices and network conditions.
</p>

<h1 className="text-3xl font-extrabold mt-10">Best Practices for Incorporating Interactive 3D Models</h1>

<h2 className="text-2xl font-bold mt-6">User-friendly Interface</h2>
<p className="font-thin text-gray-100 mt-4">
  Provide intuitive controls and guidance for navigating and interacting with the 3D model.
</p>

<h2 className="text-2xl font-bold mt-6">Responsive Design</h2>
<p className="font-thin text-gray-100 mt-4">
  Ensure the 3D model adapts to different screen sizes and devices for a consistent UX.
</p>

<h2 className="text-2xl font-bold mt-6">Load Time Optimization</h2>
<p className="font-thin text-gray-100 mt-4">
  Implement techniques like progressive loading or compression to minimize load times and improve user experience.
</p>

<h2 className="text-2xl font-bold mt-6">Accessibility Considerations</h2>
<p className="font-thin text-gray-100 mt-4">
  Provide alternative content and descriptions for users with visual impairments or slower internet connections.
</p>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                 <h1 className="text-3xl font-extrabold">Conclusion</h1>
  <p className="font-thin text-gray-100 mt-4">
    Interactive 3D models offer a powerful tool for enhancing the user experience across various industries. 
    By providing immersive visualizations, increased engagement, and personalization opportunities, businesses can captivate their audience and foster deeper connections.
  </p>
  <p className="font-thin text-gray-100 mt-4">
    However, successful implementation requires careful consideration of technical aspects, performance optimization, and user-friendly design. 
    Embracing interactive 3D models can give businesses a competitive edge, enabling them to deliver exceptional UX and stand out in their respective markets.
  </p>
              </div>
            </section>
          </div>

          

          {/* bottom community section */}
          <div>
            <div
              className={` border-2   rounded-[30px] flex flex-col md:flex-row  items-center justify-between gap-4 md:gap-0 py-4 md:py-8 px-5 ${
                blogType === "Games"
                  ? "border-[#FF5C00] bg-[#ff5c0024]"
                  : blogType === "Custom Software"
                  ? "border-[#26B403] bg-[#26b40324]"
                  : blogType === "AI"
                  ? "border-[#FF001F] bg-[#ff001f24]"
                  : "border-[#00FFE0] bg-[#00ffe024]"
              }`}
            >
              <h1 className=" text-base md:text-xl  font-normal text-white">
                Share with your community!
              </h1>
              <div className="flex items-center flex-wrap gap-3">
                <div>
                  <TwitterShare
                    url={shareUrl}
                    title={share_title}
                    hashtags={["HEYBUDDY", "BLOGS"]}
                    round
                    size="30px"
                  />
                </div>
                <div>
                  <LinkedinShare
                    url={shareUrl}
                    quote={share_title}
                    round
                    size="30px"
                  />
                </div>
                {/* <div>
                  <InstagramShare
                    url={shareUrl}
                    title={share_title}
                  />
                </div> */}
                <div>
                  <FacebookShare
                    url={shareUrl}
                    quote={share_title}
                    round
                    size="30px"
                  />
                </div>
                <div>
                  <TelegramShare url={shareUrl} round size="30px" />
                </div>
                <div>
                  <WhatsappShare
                    url={shareUrl}
                    title={share_title}
                    separator=":: "
                    round
                    size="30px"
                  />
                </div>
              </div>
            </div>
            <div className="py-10">
              <div
                className={` ${
                  blogType === "Games"
                    ? "border-[#FF5C00] bg-[#ff5c0024]"
                    : blogType === "Custom Software"
                    ? "border-[#26B403] bg-[#26b40324]"
                    : blogType === "AI"
                    ? "border-[#FF001F] bg-[#ff001f24]"
                    : "border-[#00FFE0] bg-[#00ffe024]"
                } h-[2px]`}
              ></div>
            </div>
          </div>
        </section>
        {/* sticky section */}
        <section className=" flex-1 flex flex-col gap-14 pt-12">
          <div className="flex flex-col gap-7">
            <div className="flex text-sm md:text-base lg:hidden gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white">
              <span>Blog</span>
              <span>
                <FaChevronRight />
              </span>
              <span>{title}</span>
            </div>
          </div>
          <div className=" hidden lg:flex flex-col gap-5 sticky top-20">
            <h1 className="text-base text-white">In this article</h1>
            <div className=" text-white">
              <Scrollspy
                className="flex flex-col gap-[10px]"
                items={[
                  "section1",
                  "section2",
                  "section3",
                  "section4",
                  "section5",
                          
                 
                 
                 
                  
                ]}
                currentClassName={`border-l-4 ${
                  blogType === "Games"
                    ? "border-[#FF5C00] text-[#FF5C00]"
                    : blogType === "Custom Software"
                    ? "border-[#26B403] text-[#26B403]"
                    : blogType === "AI"
                    ? "border-[#FF001F] text-[#FF001F]"
                    : "border-[#00FFE0] text-[#00FFE0]"
                }`}
                offset={-140}
              >
                <h1
                  className={`cursor-pointer pl-2`}
                  onClick={() => handleNavClick("section1")}
                >
                  <a className="font-thin text-gray-100">
                  Enhancing UX with Interactive 3D Models  
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Benefits of Interactive 3D Models for UX 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Applications Across Industries
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Technical Considerations</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">Conclusion</a>
                </h1>
              
                
                

               
               
              </Scrollspy>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogContent;
