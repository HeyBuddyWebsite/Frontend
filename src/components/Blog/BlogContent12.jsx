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
                <h1 className="text-3xl font-extrabold">From Concept to Reality: 3D Modeling in Prototyping and Design</h1>
<p className="font-thin text-gray-100">
  3D modeling technology has revolutionized the realm of product design, architecture, and prototyping. This technology has implemented a higher level of design innovation and utmost creativity for creating a visually appealing prototype of any product. And that too before the final product development with minimalistic design changes and efforts.
</p>
<p className="font-thin text-gray-100">
  If you're new to the realm of 3D design, modeling, and models, then you've come to the right place to gather valuable information.
</p>
                
            </div> 

            <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                    <h2 className="text-2xl font-bold">Understanding 3D Modeling</h2>
<p className="font-thin text-gray-100">
  3D modeling is the process of creating a three-dimensional visual representation of an object or a surface to increase the visual appeal. It could be clothes, background, buildings, internal surroundings, or anything that appears real to the eyes of onlookers.
</p>
<p className="font-thin text-gray-100">
  Using advanced computerized technology, creating a 3D design, modeling, and prototyping help create visually attractive objects that are far better than still image creation.
</p>
<p className="font-thin text-gray-100">
  The most commonly found areas where you find the successful implementation of 3D modeling include the following:
</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Game background and character designing</li>
  <li>3D printing to let objects become physical</li>
  <li>Creating 3D architecture of an internal or external area</li>
  <li>Even animators use 3D modeling to create characters and backgrounds</li>
  <li>Product designing with the help of 3D models environment</li>
</ul>
<p className="font-thin text-gray-100">
  To be precise, 3D design and modeling help architecture, artists, and engineers to create realistic-looking visuals. The product designed using 3D modeling technology surely enhances the visual appeal and captures the attention of onlookers.
</p>

              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
               <h2 className="text-2xl font-bold">Why Rely on 3D Modeling?</h2>
<ul className="font-thin text-gray-100 list-disc">
  <li>3D modeling ensures seamless collaboration of designers with architecture, product designers, artists, stakeholders, and engineers.</li>
  <li>3D modeling in the manufacturing business assures the detailed creation of product images to gain better insights.</li>
  <li>3D product designing serves as a major driving factor for innovation that helps teams push their boundaries and create something appealing.</li>
</ul>

<h2 className="text-2xl font-bold">Advanced Techniques in 3D Modeling</h2>
<p className="font-thin text-gray-100">
  In general, advanced techniques in 3D modeling help create different types of products, objects, characters, environments, and backgrounds to bring reality to the surface. Several techniques for creating 3D prototypes, designs, and models are extensively used by artists to create visually appealing skyscrapers, vehicles, clothes, and more. So, let's explore some defining 3D modeling advanced techniques.
</p>

<h3 className="text-xl font-semibold">1. Polygon Modeling</h3>
<p className="font-thin text-gray-100">
  One of the most commonly used and highly reliable 3D Max technology for modeling and design is polygon modeling. With the help of this technique, innovative artists generally create video games and animations to an extensive level. It works by creating an outline of an object, filling the space between different gaping areas, followed by applying textures to a working model.
</p>
<p className="font-thin text-gray-100">Key benefits:</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Adding better visualization to products and objects.</li>
  <li>Best used for rendering and visualizing models.</li>
  <li>Ideal for small object components.</li>
</ul>

<h3 className="text-xl font-semibold">2. 3D Garment Visualization</h3>
<p className="font-thin text-gray-100">
  As the name itself implies, 3D garment visualization is another imperative advanced technology, extensively used in the fashion industry. Especially for fashion and apparel eCommerce stores, artists create 3D designs of various sizes, colors, textures, and shapes of garments for different ranges of customers.
</p>
<p className="font-thin text-gray-100">
  The 3D garment visualization technique helps add textures to different kinds of fabrics to showcase the differences. It's further used for enhancing sketches.
</p>
<p className="font-thin text-gray-100">Key benefits:</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Get high-render quality garment images.</li>
  <li>Fine-tune the garment designs to an optimum level.</li>
</ul>

<h3 className="text-xl font-semibold">3. 3D Sculpting</h3>
<p className="font-thin text-gray-100">
  3D sculpting, better known as digital sculpting, is another fine-tuned advanced technology related to 3D modeling. It involves adding several layers of sculpting to an object and manipulating its geometry using various tools and techniques.
</p>
<p className="font-thin text-gray-100">
  It's a multi-layer sculpting process in which an artist creates the basic shape of an object and adds further layers of sculpting to it. As a result, the creatively crafted object appears with detailed sculpting visuals.
</p>
<p className="font-thin text-gray-100">Key benefits:</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Helps in designing complex scenes, products, and objects.</li>
  <li>Create exceptionally creative and realistic visuals.</li>
</ul>

<h3 className="text-xl font-semibold">4. Procedural Modeling</h3>
<p className="font-thin text-gray-100">
  Procedural modeling is one of the most advanced and creatively infused 3D modeling technologies that we have discussed here. This method is extensively used for creating realistic-looking visuals of plants, clouds, nature, sky, coastlines, sea, beaches, sand, landscapes, and so on.
</p>
<p className="font-thin text-gray-100">
  A professional 3D artist with hands-on experience with several tools and techniques performs the art of procedural modeling to create extensive architectural items.
</p>
<p className="font-thin text-gray-100">Key benefits:</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Create visual elements of the same or different styles, sizes, and shapes.</li>
  <li>Simple to scale up and down the visual properties as per the requirement.</li>
</ul>

<h3 className="text-xl font-semibold">5. 3D Scanning</h3>
<p className="font-thin text-gray-100">
  3D scanning is an altogether different yet advanced approach compared to 3D modeling and designing. This technique involves capturing the instinct of physically present objects and creating the same with an advanced visual appeal.
</p>
<p className="font-thin text-gray-100">
  With 3D scanning, you create the exact shape, color, and texture of a complex object and can modify the existing product.
</p>
<p className="font-thin text-gray-100">Key benefits:</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>3D scanning can capture multiple data points in one go.</li>
  <li>Create a more detailed and appealing picture.</li>
</ul>

<h2 className="text-2xl font-bold">Optimizing Prototyping with 3D Modeling</h2>
<p className="font-thin text-gray-100">
  The mere creation of a 3D prototype for the first-level view of a client or a customer is not enough. Unless and until you don't know the art of optimizing the 3D model that you've created. Therefore, it is of integral importance to optimize the 3D prototype that has been created to bring a more detailed, crisp, and required view.
</p>
<p className="font-thin text-gray-100">
  Here's a list of a few 3D prototype optimization techniques to follow.
</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Find the right software: One of the first steps towards optimizing your 3D prototype is selecting the right software and tools to work on. Fine-tuning and enhancing the 3D model that you've created requires several touch-ups and final end-points. Choose software based on its rich features, compatibility, cost, and support.</li>
  <li>Plan the 3D project accordingly: Planning your 3D project in advance assures long-term success. Make sure to plan the techniques, sources, artists, stakeholders, and other key things required for the project.</li>
  <li>Make use of shortcuts & templates: Learning how to use different shortcuts for rotating, scaling, selecting things, and more can speed up your creation work. Use pre-built 3D model templates that contain a basic set of designs.</li>
  <li>Organize your files & folders: Organizing all your files and folders is crucial for managing things easily, accessing files swiftly, and working on the project seamlessly.</li>
</ul>

<h2 className="text-2xl font-bold">Industry Applications and Case Studies</h2>
<p className="font-thin text-gray-100">
  Certainly, the demand for 3D modeling is growing to an exponential extent, resulting in different industrial sectors creating appealing objects and products.
</p>
<p className="font-thin text-gray-100">Here, we explore the different industrial use cases of 3D modeling across distinctive sectors.</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>3D modeling in filmmaking industry: Best examples include Disney Movies, animated movies, Sci-fi movies, etc.</li>
  <li>Automotive industry: Best examples include 3D car models, manufacturing models.</li>
  <li>3D modeling in the retail sector: Best examples include product showcases, 360-degree moving products.</li>
  <li>3D modeling in the architecture industry: Best examples include 3D house design models, visual representation of buildings & cities.</li>
  <li>3D modeling in the gaming world: Best examples include gaming character creation, gaming backgrounds, and more.</li>
</ul>

<h2 className="text-2xl font-bold">Future Trends and Investment Opportunities</h2>
<p className="font-thin text-gray-100">
  The future of 3D modeling is running towards a brighter side due to the seamless and innovative creation of products, objects, architecture, and more. Several technology trends define the growing future of 3D modeling and allow multiple industries to take full advantage of the same.
</p>
<ul className="font-thin text-gray-100 list-disc">
  <li>Virtual Reality (VR) is rapidly driving the future of 3D modeling. VR allows users to enter into 3D modeling to showcase a better virtual world to the eyes of users.</li>
  <li>Artificial Intelligence (AI) is another productive technology for 3D modeling that helps automate most processes.</li>
  <li>In the filmmaking sector, 3D modeling will see enhanced impact in integration with CGI techniques to create captivating visuals and graphics.</li>
</ul>

              </div>  

              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h2 className="text-2xl font-bold">Conclusion</h2>
<p className="font-thin text-gray-100">
  3D modeling and product designing is a game-changing technology for manifold industries, including prototyping, manufacturing, product blueprinting, and more. This innovative technology helps create products that appear physically and visually interactive and appealing to all the targeted users.
</p>
<p className="font-thin text-gray-100">
  Give your customers a realistic sneak peek of the product or even detailed visuals of the prototype before manufacturing the final product. This approach prevents last-minute product changes and allows for the creation of the final product with ease and comfort.
</p>
<p className="font-thin text-gray-100">
  So, if you have a product to showcase, an object to work on, or are involved in the manufacturing process, get the most out of the 3D modeling services from a reliable partner.
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
                  From Concept to Reality: 3D Modeling in Prototyping and Design
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Understanding 3D Modeling 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Why rely on 3D Modeling?
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
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
