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
            className="h-full w-full object-auto"
          />
        </div>
        <div className="hidden xl:flex w-full h-full ">
          <Image
            loading="lazy"
            src={blogImage}
            alt="Image"
            width={200}
            height={200}
            className="h-full w-full object-auto"
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

<h1 className="text-3xl font-extrabold">AR in eCommerce: 3 Top Reasons It Is the Best Investment</h1>
<p className="font-thin text-gray-100">
  Ever wondered what it would be like to teleport your customers from their bedrooms to your stores in no time?
</p>
<p className="font-thin text-gray-100">
  What if they could do so, try your different products, go back to their house, test it in their home setting, and make a purchase right there?
</p>
<p className="font-thin text-gray-100">
  Sound too futuristic to believe? But believe me, it is not a distant future anymore. It is happening right now.
</p>
<p className="font-thin text-gray-100">
  Well, this might not be like the teleportation you see in Sci-fi movies, but in functional terms, it is no less than that.
</p>
<p className="font-thin text-gray-100">
  With Augmented Reality (AR) by your side, your customers can access your product or eStore from anywhere, try on your products, place your products in their own environments, and purchase it right away—all this without moving an inch from their place. This is possible, this is happening, and this is what we are going to discuss here in this blog.
</p>
<p className="font-thin text-gray-100">
  So you better get ready to delve into the transformative power of AR in eCommerce as we uncover why it matters now more than ever.
</p>

                
            </div> 

            <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
              <h1 className="text-3xl font-extrabold">How Benefits of AR in eCommerce Go Across the Marketing Funnel</h1>
<p className="font-thin text-gray-100">
  If there is any technology that can make a real difference for eCommerce, it’s AR. See, till now people have been switching online and offline shopping experiences depending upon the stage they are in the consumer funnel.
</p>
<p className="font-thin text-gray-100">
  For example, when they are right at the start of the funnel and not sure about the product and want to explore it firsthand, they prefer offline shopping mode.
</p>
<p className="font-thin text-gray-100">
  Or even if they shop online, they will order multiple products only to return the ones that did not match their need or expectations. While this was easy for the consumer, it added significantly to the cost of eCommerce businesses in the form of high return rates.
</p>
<p className="font-thin text-gray-100">
  So, despite offering the obvious perk of convenience, eCommerce gets weighed down by such challenges and faces hampered growth and progress. Therefore, AR utilization proves a bane by offering several advantages throughout the consumer marketing funnel so that users prefer shopping online each time. Let’s see these advantages as per the different marketing stages.
</p>
<h2 className="text-2xl font-bold">Awareness Stage</h2>
<h3 className="text-xl font-semibold">Out-of-the-box Experience for High Brand Affinity</h3>
<p className="font-thin text-gray-100">
  When you incorporate AR experience to market for your eCommerce platform, it captures the attention of your potential customer. They not only see the advertisement but they can even interact with the product in the ad or other 3D brand elements that make the ad experience memorable and impactful.
</p>
<p className="font-thin text-gray-100">
  The out-of-the-box immersive experiences keep them engaged for longer sessions, increasing brand affinity.
</p>
<h3 className="text-xl font-semibold">More Confident Decisions, Less Uncertainty</h3>
<p className="font-thin text-gray-100">
  The biggest drawback of online shopping till now has been the uncertainty about product fit, color, or style. It was difficult for online shoppers to make out how the product would actually look in a real-world setting. Moreover, they were also skeptical about falling into the trap of false-marketing claims.
</p>
<p className="font-thin text-gray-100">
  However, AR changes the game here as well. Now, users can explore the 3D representation of your products from all different aspects, which makes them more comfortable and confident. They can even wear it if required or place it in their house to see if it fits nicely.
</p>
<p className="font-thin text-gray-100">
  AR bridges this gap, helping consumers make faster and better decisions that mostly favor your efforts. More importantly, they go a long way in reducing the risk of returns and enhancing customer satisfaction.
</p>
<h2 className="text-2xl font-bold">Consideration Stage</h2>
<p className="font-thin text-gray-100">
  In any business space, the right innovation is always rewarded by the user. Users want their brands to keep coming up with fresh offerings and novel experiences that amaze them better than before and better than others.
</p>
<p className="font-thin text-gray-100">
  Brands that keep offering such innovative experiences not only gain new customers but also build long-term relationships, resulting in consolidated growth and success for many years.
</p>
<p className="font-thin text-gray-100">
  eCommerce is no different. When eCommerce businesses like you deliver innovative experiences like virtual try-on experiences, it makes a difference. Your brand stands out from the competition by bringing convenience and great brand interaction better than competitors.
</p>
<p className="font-thin text-gray-100">
  And mind you, the consideration stage is all about beating the competition by doing what others are not.
</p>
<h2 className="text-2xl font-bold">Decision Stage</h2>
<p className="font-thin text-gray-100">
  AR brings the capability of contextual visualization, i.e., it allows users to place the 3D model of the product at the desired place in their home to visualize the same in their intended context.
</p>
<p className="font-thin text-gray-100">
  For example, they can see how a particular sofa will fit in their living room. Will it go with the interior, or is there space enough to bring in a new sofa?
</p>
<p className="font-thin text-gray-100">
  This not only results in better decision-making but even faster purchases. More often than not, the customer ends up buying the product impressed by the amazing experience that clears all their doubts and does away with their insecurities.
</p>
<p className="font-thin text-gray-100">
  Given these benefits, brands around the world, across industries and ranging scales, are deploying AR experiences to charm their audience. In the next section, we will discuss some prominent examples.
</p>

            </div>


            <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">AR eCommerce Examples - Successful Implementations by Major Brands</h1>
<p className="font-thin text-gray-100">
  Brands across industries have come up with some really innovative and astonishing AR experiences. Here are some examples of AR eCommerce apps segmented on the basis of the major benefits they brought to the business and the user.
</p>
<h2 className="text-2xl font-bold">For Highly-informed Purchase Decision</h2>
<p className="font-thin text-gray-100">
  Their virtual glasses try-on feature lets users see how different frames look on their faces.
</p>
<p className="font-thin text-gray-100">
  Similarly, L’Oreal’s Makeup Genius is an app by the cosmetic brand that allows users to try various makeup products virtually.
</p>
<p className="font-thin text-gray-100">
  The world's largest furniture brand, IKEA, launched an AR eCommerce app to let its customers place virtual furniture in their actual living spaces. The idea was replicated by an app by Wayfair, another furniture brand.
</p>
<h2 className="text-2xl font-bold">Product Customization and Personalization</h2>
<p className="font-thin text-gray-100">
  Nike, an American athletic footwear and apparel corporation and the world's largest supplier of athletic shoes and apparel, deployed an AR feature.
</p>
<p className="font-thin text-gray-100">
  It allowed users to customize sneakers by choosing colors, materials, and designs and brought the product much closer to their style than ever was possible.
</p>
<p className="font-thin text-gray-100">
  Likewise, Coca-Cola offered personalized bottles by allowing customers to create custom labels using AR.
</p>
<h2 className="text-2xl font-bold">Interactive Product Manuals and Assembly Guides</h2>
<p className="font-thin text-gray-100">
  Lowe’s Vision App used AR to guide users through DIY projects. It overlays instructions on real-world objects, thereby, simplifying assembly and repairs.
</p>
<p className="font-thin text-gray-100">
  All AR eCommerce examples show how incorporating AR into e-commerce enhances user experiences and drives sales and brand loyalty.
</p>
<p className="font-thin text-gray-100">
  And things have just started. As AR technology advances and marches forward with powerful Artificial Intelligence, we are sure to get more adventurous experiences in the coming time.
</p>
<p className="font-thin text-gray-100">
  There will be more creative and impactful AR solutions in the eCommerce landscape that businesses have never experienced before.
</p>

                </div>

                <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >

<h1 className="text-3xl font-extrabold">Conclusion</h1>
<p className="font-thin text-gray-100">
  This integration of Augmented Reality with e-commerce isn't just a trend; it's a revolution that will not leave anything the same.
</p>
<p className="font-thin text-gray-100">
  From enhancing brand affinity and boosting consumer confidence to expediting purchase decisions, AR will impact every stage of the consumer journey and business aspect.
</p>
<p className="font-thin text-gray-100">
  As we've seen through various successful examples across industries in the above section, AR is being used as a strategic tool by brands of all scales. They are capitalizing on its power to drive sales, foster brand loyalty, and propel eCommerce businesses into the future of growth.
</p>
<p className="font-thin text-gray-100">
  With advancements like AI in AR technology continually pushing boundaries, the possibilities for creating even more immersive, personalized, and engaging experiences are well within our reach.
</p>
<p className="font-thin text-gray-100">
  So, as we bid adieu, you better keep your sights set on the horizon, for in the ever-evolving landscape of eCommerce, AR has not only arrived, it has started the revolutionary process.
</p>

              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>

<h2 className="text-2xl font-bold">What is AR in eCommerce?</h2>
<p className="font-thin text-gray-100">
  AR allows e-commerce businesses to let their customers preview products either by trying them on or by placing them in users' very own real-world environment. Further, it also lets eCommerce businesses catch and captivate potential customers’ attention to enhance their brand awareness and expand the top of their funnel.
</p>
<p className="font-thin text-gray-100">
  Further, customers can even experience services without leaving their homes or even their bedrooms. They can explore the product and services on their own time at their own place and choose the one that cuts through their high-quality standards.
</p>

<h2 className="text-2xl font-bold">What is the AR app used for?</h2>
<p className="font-thin text-gray-100">
  AR apps are used to offer customers product and service experiences without the customer leaving their home. They just need to access the AR brand experience offered by the business and get a clear idea of their offerings. The AR applications use sophisticated software and mobile in-built equipment to recognize and track objects, and surfaces, in the real world, and overlay digital 3D content on them.
</p>

<h2 className="text-2xl font-bold">What are the benefits of AR in eCommerce?</h2>
<ul className="font-thin text-gray-100">
  <li>Lower Returns</li>
  <li>Higher Customer Satisfaction</li>
  <li>Soaring Conversion Rates</li>
  <li>Captivating Product Visualization</li>
  <li>Interactive Marketing</li>
  <li>Reduced Staffing Expenses</li>
  <li>Improved Brand Perception</li>
</ul>

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
                  AR in eCommerce: 3 Top reasons it is the best investment?
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  How benefits of AR in eCommerce go across the Marketing Funnel
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  AR eCommerce Examples - Successful Implementations by Major Brands
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Conclusion</a>
                </h1>

                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">FAQs</a>
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
