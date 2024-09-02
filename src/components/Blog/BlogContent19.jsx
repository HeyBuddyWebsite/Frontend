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
                 <h1 className="text-3xl font-extrabold">Maximizing ROI and Minimizing Risks: The Art of Game Development Outsourcing</h1>
  
  <p className="font-thin text-gray-100 mt-4">
    Do you know, hiring an in-house team for game development can be up to 50% more expensive than outsourcing the same work?
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Also, contrary to common belief, outsourcing doesn’t necessarily mean compromising on quality. If your outsourcing company specializes in game development and maintains a team of skilled professionals, you will get high-quality work.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Outsourcing is one of the most effective tools for game development. Its capability has helped various small indie studios to compete with larger game development companies.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    This is because, by outsourcing specific tasks (such as art, animation, or sound design), indie studios can better focus on critical components of game development such as game design and storytelling.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Finally, do you know, India is a popular destination for game development outsourcing due to its large talent pool, competitive costs, and English-speaking workforce.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    That is why, today we are going to talk about game outsourcing in detail. It has emerged as a strategic approach to maximize return on investment (ROI) while minimizing risks. By partnering with specialized game development companies, your business can access a wealth of expertise while reducing development costs and accelerating time-to-market.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    All this and more in today's blog. Read on.
  </p>
              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Taking Bull By Its Horn - Why Should I Opt for Game Development Outsourcing?</h1>
  
  <p className="font-thin text-gray-100 mt-4">
    Outsourcing game development offers numerous benefits for businesses looking to enter or expand their presence in the gaming market.
  </p>
  
  <h2 className="text-2xl font-bold mt-6">Cost-Effectiveness: Lowering Development Costs and Overhead Expenses</h2>
  <p className="font-thin text-gray-100 mt-4">
    Outsourcing your game development is a straightforward way to reduce costs. First, you avoid the expense of hiring and training an in-house team. Second, you do not need to invest in new software tools and technologies.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Outsourcing companies can invest in game development resources and tools, which are used across multiple clients. This is more cost-effective than investing in such resources yourself, especially if game development is not your core business.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Businesses not focused solely on game development often lack the specialized expertise and resources required. Attempting to build an internal team from scratch can be counterproductive. Instead, it’s more efficient to focus on your core competencies and leverage the expertise of external professionals.
  </p>
  
  <h2 className="text-2xl font-bold mt-6">Access to Specialized Expertise</h2>
  <p className="font-thin text-gray-100 mt-4">
    Game development is complex, involving processes such as conceptualization, designing, programming, art and animation, and sound design. 
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Given a choice between:
  </p>
  
  <ul className="list-disc ml-8 mt-4">
    <li className="ml-5 font-thin text-gray-100">A new team with inexperienced members working together for the first time, or</li>
    <li className="ml-5 font-thin text-gray-100">A seasoned team with extensive experience and a track record of successful projects,</li>
  </ul>
  
  <p className="font-thin text-gray-100 mt-4">
    The better option is the experienced team. Outsourcing provides access to a cohesive team that has worked together for years, delivering high-quality projects across various disciplines. This allows you to benefit from their expertise without the need to build an internal team.
  </p>
  
  <h2 className="text-2xl font-bold mt-6">Time Savings: Accelerating Development Timelines</h2>
  <p className="font-thin text-gray-100 mt-4">
    Outsourcing game development can lead to significant time savings. Specialized talent, streamlined workflows, and potentially 24/7 development cycles in different time zones contribute to faster project delivery and reduced time-to-market.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    While the outsourcing team focuses on development, you can streamline the process, overcome potential bottlenecks, and enhance overall quality.
  </p>
  
  <h2 className="text-2xl font-bold mt-6">Flexibility and Scalability</h2>
  <p className="font-thin text-gray-100 mt-4">
    In today’s dynamic world, flexibility and scalability are crucial. Outsourcing allows you to manage resources efficiently and adapt to changing market dynamics. You can scale your development team up or down based on project needs without long-term commitments or significant investments in hiring and training.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    This completes our discussion on the advantages of outsourcing game development over in-house development. However, it is important to be aware of potential pitfalls before partnering with a game outsourcing company.
  </p>
              </div>

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Risks Associated with Game Development Outsourcing</h1>

<p className="font-thin text-gray-100 mt-4">
  Some common risks of working with game outsourcing studios include:
</p>

<h2 className="text-2xl font-bold mt-6">Quality Control Issues</h2>
<p className="font-thin text-gray-100 mt-4">
  Ensuring that the final product meets desired standards and specifications can be challenging, especially when development is distributed across different teams or locations.
</p>

<p className="font-thin text-gray-100 mt-4">
  This challenge can be mitigated by implementing robust quality assurance processes and regular checkpoints throughout the development cycle.
</p>

<h2 className="text-2xl font-bold mt-6">Communication Barriers</h2>
<p className="font-thin text-gray-100 mt-4">
  When outsourcing game art or development, choosing countries with a primary or secondary language that matches your own can help overcome communication barriers.
</p>

<p className="font-thin text-gray-100 mt-4">
  Language and cultural differences can significantly affect effective collaboration. Communication issues are among the top reasons why many projects fail to achieve their goals.
</p>

<p className="font-thin text-gray-100 mt-4">
  To address this, establish clear and open communication channels, use project management tools, and consider appointing bilingual liaisons if necessary.
</p>

<p className="font-thin text-gray-100 mt-4">
  Many US businesses prefer working with Indian game outsourcing companies for these reasons. English is commonly spoken, and there's a good understanding of US culture.
</p>

<h2 className="text-2xl font-bold mt-6">Intellectual Property Protection</h2>
<p className="font-thin text-gray-100 mt-4">
  Safeguarding proprietary assets and sensitive information is a serious challenge in outsourcing. Sharing confidential information with external parties increases the risk of unauthorized disclosure.
</p>

<p className="font-thin text-gray-100 mt-4">
  To mitigate this risk, draft comprehensive contracts with clear intellectual property clauses. Additionally, use practices such as encryption and secure data transfer methods.
</p>

<h2 className="text-2xl font-bold mt-6">Vendor Reliability</h2>
<p className="font-thin text-gray-100 mt-4">
  Assessing the reputation, track record, and stability of the outsourcing partner can be difficult. Limited access to reliable information, potential biases, and challenges in evaluating long-term performance can complicate this assessment.
</p>

<p className="font-thin text-gray-100 mt-4">
  Conduct thorough due diligence, including reference checks and background investigations, to assess the credibility and reliability of your prospective outsourcing partner.
</p>
              </div>


              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">What to Do to Maximize ROI in Game Development Outsourcing?</h1>

<p className="font-thin text-gray-100 mt-4">
  Well, till now we have already provided you with enough information on the benefits and pitfalls of game development outsourcing. This information would be enough to help you make the right decision. However, if you are still wondering where to start from, here are some checkpoints to keep in mind to maximize your ROI:
</p>

<h2 className="text-2xl font-bold mt-6">Establish Clear Project Objectives and Requirements</h2>
<p className="font-thin text-gray-100 mt-4">
  Ensure alignment between all stakeholders involved by setting clear and precise project objectives and requirements. This clarity helps in maintaining focus and avoiding misunderstandings throughout the development process.
</p>

<h2 className="text-2xl font-bold mt-6">Carefully Select the Right Outsourcing Partner</h2>
<p className="font-thin text-gray-100 mt-4">
  Conduct thorough due diligence to evaluate potential outsourcing partners. Assess their expertise, experience, and references to ensure they are capable of meeting your project's needs and delivering high-quality results.
</p>

<h2 className="text-2xl font-bold mt-6">Deploy Effective Project Management Practices</h2>
<p className="font-thin text-gray-100 mt-4">
  Implement effective project management practices, including regular communication channels and clearly defined roles and responsibilities. This will help in tracking progress, addressing issues promptly, and ensuring that the project stays on track.
</p>

<h2 className="text-2xl font-bold mt-6">Negotiate Favourable Contracts and Agreements</h2>
<p className="font-thin text-gray-100 mt-4">
  Draft and negotiate contracts that protect the interests of all parties involved and minimize risks. Clear agreements on deliverables, timelines, and intellectual property rights can help avoid disputes and ensure a successful outsourcing partnership.
</p>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                 <h1 className="text-3xl font-extrabold">Conclusion</h1>

<p className="font-thin text-gray-100 mt-4">
  Game development outsourcing offers numerous benefits. For businesses looking to enter or expand their presence in the gaming industry, leveraging the expertise of game art outsourcing companies is a must.
</p>

<p className="font-thin text-gray-100 mt-4">
  This will help your business maximize ROI, reduce development costs, and accelerate time-to-market.
</p>

<p className="font-thin text-gray-100 mt-4">
  However, this is not as simple as it seems. Successful outsourcing with maximized ROI requires careful planning, effective management, and robust risk mitigation strategies. All of this has been discussed here in this blog in a clear and direct manner.
</p>

<p className="font-thin text-gray-100 mt-4">
  We talked about the benefits, pitfalls, and solutions, as well as the best strategies for outsourcing. This will help you navigate the complexities of game development outsourcing and ensure that you achieve success in this competitive gaming market.
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
                  Maximizing ROI and Minimizing Risks: The Art of Game Development Outsourcing 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Taking Bull By its Horn - Why Should I Opt Game Development Outsourcing? 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Risks Associated with Game Development Outsourcing
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">What to do to maximise ROI in Game Development Outsourcing?</a>
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
