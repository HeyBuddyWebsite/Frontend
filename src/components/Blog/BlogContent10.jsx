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
                <h1 className="text-3xl font-extrabold">Software Development Trends Emerging in 2024</h1>
  <p className="font-thin text-gray-100">
    Summary: Software development trends keep changing while providing new tech-driven measures to create result-oriented software. Modern-day technology can never be the same and keeps updating as per changing user expectations and customers' demands. Therefore, it is of vital importance for organizations to follow the latest trends in software development and start implementing them. Read on to learn the emerging trends in the realm of developing business software before moving ahead in 2024.
  </p>
  <p className="font-thin text-gray-100">
    The technology landscape is dynamic and diverse. Every now and then, something new comes into the digital sphere.
  </p>
  <p className="font-thin text-gray-100">
    More than a decade ago, Artificial Intelligence was a revolutionary technology back then. Now, it has become an integral and transformative part of diverse industries like retail, travel, finance, healthcare, etc.
  </p>
  <p className="font-thin text-gray-100">
    Similarly, new software development trends assure accelerated business transformation and further growth in the digital sphere. In light of this, here we've enlisted top-rated and easy-to-follow software development industry trends to watch out for in 2024. Doing this will help your organization stay ahead of the competition and develop user-friendly and profit-driven software for clients.
  </p>
               </div> 
               <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">List of Top 10 Recent Trends in Software Development</h1>
<p className="font-thin text-gray-100">
  Now, let's have a close look at the emerging software development trends for 2024 and adopt the same accordingly.
</p>
<h2 className="text-2xl font-bold">1. Rise of Progressive Web Apps (PWAs)</h2>
<p className="font-thin text-gray-100">
  There has been a constant rise of Progressive Web Apps (PWAs) since their inception time started from 2015. With the rapid rise in mobile app usage and users' increasing inclination towards buying products and booking services on small devices, enterprises heavily rely on PWAs.
</p>
<p className="font-thin text-gray-100">
  With the help of progressive web apps in the realm of software development, professional developers can create a website with an app-like interface and user experience. This trend will allow users to extensively access your website like a similar mobile application. Moreover, it will optimize the website usage to an optimum extent positively impacting your business.
</p>
<h2 className="text-2xl font-bold">2. Extensive Adoption of Blockchain Technology</h2>
<p className="font-thin text-gray-100">
  Just like PWA, Blockchain is another modern-day technology that continues to trend and transform the majority of industries. It does have a status quo of disrupting industries in 2024 and the time ahead. And that too with the help of providing unparalleled security and decentralized systems to keep transactional data safe and secure. As per the update, the blockchain market is expected to reach an estimated value of $20 billion by the end of 2024.
</p>
<h2 className="text-2xl font-bold">3. IoT on the Substantial Rise in Industries</h2>
<p className="font-thin text-gray-100">
  The interconnected IoT technology is another disruptive force in the modern-day software development process. It enables internet-enabled devices to stay connected and transfer data into centralized systems for analysis purposes.
</p>
<p className="font-thin text-gray-100">
  Undoubtedly, the Internet of Things has disrupted home connect devices, factory monitoring systems to product manufacturing devices to stay connected. This helps bridge the gap between physical devices and the digital world to connect and gather useful information to gather better insights.
</p>
<p className="font-thin text-gray-100">
  As far as the adoption of IoT in 2024 is concerned, it is expected to reach beyond the level of $437 billion by the end of 2025 and will continue to evolve.
</p>
<p className="font-thin text-gray-100">List of some key IoT trends to watch out for in 2024.</p>
<ul className="list-disc font-thin text-gray-100">
  <li className="ml-5 font-thin text-gray-100">Seamless integration of IoT and Machine Learning to analyze large chunks of data.</li>
  <li className="ml-5 font-thin text-gray-100">Ensure interactive and simulated representation of data.</li>
  <li className="ml-5 font-thin text-gray-100">Synchronization of IoT with Blockchain technology to save and secure an extended choice of business data.</li>
  <li className="ml-5 font-thin text-gray-100">IoT solutions for urban life will help reduce traffic congestion, prevent accidents, and further enhance road safety.</li>
  <li className="ml-5 font-thin text-gray-100">With IoT, rest assures to have an automated production process with a big investment return.</li>
</ul>
<h2 className="text-2xl font-bold">4. Low Code Development Will Continue for a Long</h2>
<p className="font-thin text-gray-100">
  Another remarkable software development trend to watch out for is embracing low code development for faster software creation. To avoid the lengthy software development process, rely on a minimal coding environment equipped low code development approach that will reduce efforts by 50%, respectively.
</p>
<p className="font-thin text-gray-100">
  For those who don't know, low code development is a specialized software creation process that relies on engineering techniques that follow minimal code requirements. Specific low-code platforms that function as Integrated Development Environments (IDEs) provide a purpose-built software development ecosystem. Some of these platforms include names like Zoho Creator, Appian, Mendix, Microsoft Power Apps, and more.
</p>
<h2 className="text-2xl font-bold">5. Ongoing Trend of React Native for Development</h2>
<p className="font-thin text-gray-100">
  When it comes to developing cross-platform mobile apps and working on the hybrid development process, the name React Native as a powerful tool comes in the first place. As part of the rising and the latest software development trend in 2024, enterprises count on React Native to create interactive, feature-rich, and user-friendly app development.
</p>
<p className="font-thin text-gray-100">
  Certainly, React Native is a valuable go-to development asset for maximizing the reach of software across target audiences with ease.
</p>
<h2 className="text-2xl font-bold">6. Extended Network of AR and VR</h2>
<p className="font-thin text-gray-100">
  Undoubtedly, Augmented Reality (AR) and Virtual Reality (VR) appeared as game changers in the software development ecosystem. Both technologies prove fruitful in terms of providing an intuitive user experience towards refined software.
</p>
<p className="font-thin text-gray-100">
  For instance, the seamless integration of AR and VR in the retail sector assures an interactive shopping experience for customers. With these two technologies, eCommerce enterprises are gaining the following set of benefits.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li className="ml-5 font-thin text-gray-100">Increased customer engagement.</li>
  <li className="ml-5 font-thin text-gray-100">Enhanced virtual shopping experience.</li>
  <li className="ml-5 font-thin text-gray-100">Enable digital showrooms for customers.</li>
  <li className="ml-5 font-thin text-gray-100">Virtually try products and increase product sales patterns.</li>
  <li className="ml-5 font-thin text-gray-100">3D modeling for customers to experience maximum interaction with products.</li>
</ul>
<h2 className="text-2xl font-bold">7. Distributed Computing Trend</h2>
<p className="font-thin text-gray-100">
  Distributed Computing is one of the most talked about and recent software development trends for 2024. It will take a big leap in the coming years with the way businesses rely on extended choice of data.
</p>
<p className="font-thin text-gray-100">
  You must know that distributed computing is a technique that helps different computers stay connected in a group. Thus, resulting in the seamless sharing of data across different sets of devices. With the growing inclination towards business data, distributed computing helps enterprises to transfer information and messages extensively and seamlessly.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li className="ml-5 font-thin text-gray-100">Combined processing of data across numerous computers.</li>
  <li className="ml-5 font-thin text-gray-100">Minimize centralized computer network cost.</li>
  <li className="ml-5 font-thin text-gray-100">Single system failure will not disrupt the entire network.</li>
</ul>
<h2 className="text-2xl font-bold">8. Cloud-Native Technology Adaptation</h2>
<p className="font-thin text-gray-100">
  Cloud-Native technology is another disruptive and trending tech for developing software. It helps design, construct, and operate workloads that are cloud-based and leverage the full benefit of the same.
</p>
<p className="font-thin text-gray-100">
  This technology allows you to scale up applications in the modern-day private, public, or hybrid cloud environment. It enables better software operational speed, seamless data transfer, round-the-clock operations, less infrastructure cost, and timely updates with ease.
</p>
<h2 className="text-2xl font-bold">9. IOB (Internet of Behaviour) Will Extend</h2>
<p className="font-thin text-gray-100">
  IoB (Internet of Behaviour) is another transformative and accelerated technology best included in the software development trends list. It brings valuable assistance to gathering users' data based on their preferences, behavior, interests, and activity. With the help of IoB, you can gather data from smartphones, laptops, machines, wearables, household electrical gadgets, and other devices.
</p>
<p className="font-thin text-gray-100">
  It allows a simple way to track, manage, and analyze a large proportion of data from various devices and provide insights depending on users' behavior. This in turn helps your enterprise to predict the needs of customers and fulfill them with ease.
</p>
<h2 className="text-2xl font-bold">10. Real-Time Acceptance of Microservice Architecture</h2>
<p className="font-thin text-gray-100">
  Microservice architecture is also included in the list of recent software development industry trends. It refers to the software development approach of creating a single-function module first. According to microservice architecture, a small, loosely coupled, and independent module is created with the help of a small development team.
</p>
<p className="font-thin text-gray-100">
  Each independent layer is developed accordingly and further layers are created as an integral part of microservice architecture. In the end, all the layers are managed and integrated into one software working effortlessly as per the defined requirement.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li className="ml-5 font-thin text-gray-100">Single microservice prevents faults from emerging in the entire application. Separate layers can be created and fixed accordingly.</li>
  <li className="ml-5 font-thin text-gray-100">Implement scheme updates without affecting other layers.</li>
  <li className="ml-5 font-thin text-gray-100">Reduce dependencies of sharing codebases and data.</li>
</ul>

               </div> 

               <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>
<p className="font-thin text-gray-100">
  The realm of software development keeps changing with the rapidly growing technologies, tools, and platforms. It continues evolving with the changing times and requires enterprises to easily adapt to the change. Creating sustainable software as per the current market demand is essential to reach the target audience and acquire substantial returns. Follow the latest software development trends to create something valuable, scalable, and feature-rich in nature.
</p>
<p className="font-thin text-gray-100">
  Therefore, it is of integral importance to follow and adopt software development trends happening in 2024 and the time ahead. Software developers, companies, and clients must have their sight of the latest trends, new technologies, and all the recent happenings to stay ahead. It will help create user-friendly, interactive, feature-rich, and intuitive software that will provide higher ROI and meet the requirements of customers.
</p>
<p className="font-thin text-gray-100">
  Wait no more to reshape your digital business. Follow the trends in 2024 and experience the required rise in digital business ahead.
</p>
                </div>
                <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
              <h1 className="text-3xl font-extrabold">FAQs</h1>
<h2 className="text-2xl font-bold">Which software is trending now?</h2>
<p className="font-thin text-gray-100">
  Artificial Intelligence (AI) is the most trending software technology of current time (March 2024). In fact, it is better if we say we are in the times of AI. Other than this, Augmented Reality (AR), Blockchain Development, and IoT are at their peak with AI the under-current playing roles in each of them.
</p>
<h2 className="text-2xl font-bold">What are the latest trends in software development?</h2>
<p className="font-thin text-gray-100">
  Cloud takes center stage in tech focus.
</p>
<p className="font-thin text-gray-100">
  Blockchain sees widespread adoption.
</p>
<p className="font-thin text-gray-100">
  AI undergoes continuous evolution.
</p>
<p className="font-thin text-gray-100">
  Low-code/no-code development experiences a significant surge.
</p>
<p className="font-thin text-gray-100">
  React, Go, Kotlin, JavaScript, Swift, and TypeScript lead the tech landscape.
</p>
<p className="font-thin text-gray-100">
  Modern languages make steady progress.
</p>
<p className="font-thin text-gray-100">
  Native app development witnesses an uptick.
</p>
<p className="font-thin text-gray-100">
  Progressive web apps experience a notable rise.
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
                  Software Development Trends Emerging in 2024
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  List of Top 10 Recent Trends in Software Development 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Conclusion
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
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
