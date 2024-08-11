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
                 <h1 className="text-2xl font-bold">Agile Methodology: Dynamic Model, Innovative Approach</h1>
  <p className="font-thin text-gray-100">
    Ensuring the success of seamless software development at present times relies upon adopting agile methodologies to stay organized, collaborated, and integrated. Agile techniques are the trend in the software development realm that enhances the creation of a product within a stipulated timeline.
  </p>
  
    <h2 className="text-xl font-semibold">Introduction</h2>
    <p className="font-thin text-gray-100">
      The usage of software, apps, and websites has grown exponentially. There is a significant rise in the internet revolution among people to buy products, book services, and search for information on the digital medium.
    </p>
    <p className="font-thin text-gray-100">
      The process of creating software for people can range from simple to complex. But what lies inside is the development techniques and a streamlined process. This is where the integral role of the agile methodology model comes into play, helping to create feature-rich, intuitive, and interactive software.
    </p>
    <p className="font-thin text-gray-100">
      But you might be asking, what is agile, what are the methodologies, what are agile techniques, and their benefits? Here in this blog, we cover everything about agile software development to provide you with the required information from a single best resource.
    </p>
    
               </div>
               
               <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
             <h2 className="text-xl font-semibold">What is Agile?</h2>
<p className="font-thin text-gray-100">
  Before getting started with the intricacies of agile methodologies, let's focus on agile first.
</p>
<p className="font-thin text-gray-100">
  If we go by the word, then agile means, "ability to create and respond to change." When going by this line, then agile signifies a particular development process to create it and quickly respond to make substantial changes accordingly.
</p>
<p className="font-thin text-gray-100">
  Well, from the software development point of view, agile is a project management method. It involves dividing a particular project into small parts that are developed accordingly with the help of respective technical teams.
</p>
<p className="font-thin text-gray-100">
  This flexible approach allows the teams to develop each part of the software separately, review the changes, and divide the same into sprints. To be precise, sprints are nothing but small parts of the software which is in the creation process.
</p>

              </div>

              

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">What is the Agile Methodology?</h1>
<p className="font-thin text-gray-100">
  As we discussed above, agile methodology is a trending and result-oriented project management technique. It allows seamless cross-team collaboration to ensure continuous project improvement and create a well-functioning project.
</p>
<p className="font-thin text-gray-100">
  Specifically, the agile model works on some key principles that are as follows:
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>Divide large project tasks into small verticals for fast development and completion.</li>
  <li>Prime focus on customer satisfaction.</li>
  <li>Bringing sustainable results from the development efforts.</li>
  <li>Accepting change requirements.</li>
  <li>Welcoming changes to meet competitive advantage.</li>
  <li>Stay motivated among team members to ensure timely project completion.</li>
  <li>Acknowledge self-organized teams.</li>
  <li>Measure progress on the project.</li>
  <li>Completing work at pace.</li>
  <li>Ensure seamless collaboration among different teams.</li>
  <li>Regularly reflecting the team's behavior.</li>
  <li>And lastly, strive for excellence.</li>
</ul>

              </div>

              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Understanding Agile System Development</h1>
<p className="font-thin text-gray-100">
  In relation to the key principles of agile project development that ensure expected results. Next to focus on is agile software development. It's an iterative software development approach that assures the quality project creation with the help of self-organized cross-functional team assistance. As per the agile model, respective teams thoroughly evaluate the client requirements and divide the same into small tasks to get effective results.
</p>
<p className="font-thin text-gray-100">
  Some key highlights of the agile software development model for a better understanding.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>Using agile, cross-functional teams prioritize the value of the project in a fast-paced and competitive work environment.</li>
  <li>A collaborative work approach is followed to obtain substantial results to deliver result-driven agile system development.</li>
  <li>Prioritizing people over process and various sets of tools. It enables the creation of a meaningful work environment for resources.</li>
  <li>Follow in-depth documentation to create a well-built and functional-driven application.</li>
  <li>Quickly respond to changes and make updates effectively to meet the requirements at a large scale.</li>
</ul>

              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Exploring Agile Development Methods</h1>
<p className="font-thin text-gray-100">
  Agile methodology covers various sets of techniques and processes to speed up project development and obtain a required set of results.
</p>

<h2 className="text-2xl font-bold">Scrum</h2>
<p className="font-thin text-gray-100">
  Scrum is one of the important agile development methods, specifically categorized for small-team-based work settings. This methodology works on the principles of taking care of internal team-based activities, operating at small levels constituting members (7-9), and performing end-to-end duties in close collaboration.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>There is a Scrum Lead who is in charge of the team and ensures timely sprint meetings, removing roadblocks, and finding appropriate solutions.</li>
  <li>There is a product creator in Scrum agile methodology who builds the product's backlog and prioritizes the same.</li>
  <li>Then, there is an agile team that coordinates with each other to ensure timely project completion.</li>
</ul>

<h2 className="text-2xl font-bold">Extreme Programming (XP)</h2>
<p className="font-thin text-gray-100">
  Another agile software development framework closely resembles the development of high-quality software with the help of a strategic process to be followed. It places high importance on taking care of the feedback, maintaining transparent communication, following simplicity, and providing respect to all.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>Criteria always shift as per the project demands.</li>
  <li>Specific team deadlines are defined.</li>
  <li>Stakeholders work on a low-risk process.</li>
  <li>Automation of unit and functional testing by the respective team.</li>
</ul>

<h2 className="text-2xl font-bold">Lean Software Development</h2>
<p className="font-thin text-gray-100">
  Lean software development method works on the principle of following strategic development standards and prescribed practices to attain speed and productivity. It is followed to improve the result factor and follow solid inputs from product engineers and respective stakeholders.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>Eliminating the not-so-required things in the project.</li>
  <li>Embracing learning to create enhanced software.</li>
  <li>Delivering the project as fast as possible.</li>
  <li>Building and strengthening the team with sheer effort.</li>
  <li>Building integrity between the team members.</li>
</ul>

<h2 className="text-2xl font-bold">Kanban</h2>
<p className="font-thin text-gray-100">
  Kanban is another agile methodology that focuses primarily on the continuous development of software without facing burdened hardships. The intent of the method is to enable the development team to stay motivated to continue the creation of software and cooperate with each other.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>Taking care of the workflow of each team member on a daily basis.</li>
  <li>Limiting the work-in-progress status and better focus toward a regular set of development.</li>
  <li>Enhancing the flow of work to remove any backlog and ensure timely delivery.</li>
</ul>

<h2 className="text-2xl font-bold">Crystal</h2>
<p className="font-thin text-gray-100">
  Crystal is one of the lightweight and agile-based software development methodologies. It covers several methods including Crystal Clear, Crystal Yellow, Crystal Orange, and other qualities to estimate the quality of the project, take care of the needs, ensure a high-quality product, remove distractions, and more.
</p>

<h2 className="text-2xl font-bold">Feature-Driven Development (FDD)</h2>
<p className="font-thin text-gray-100">
  Developed and articulated by Jeff De Luca, Feature-Driven Development (FDD) is more of a client-centric agile software development methodology. It focuses on designing and creating the required set of software features demanded by the clients while ensuring seamless functioning and high quality. A small iterative process shapes up the series of working on the design and features.
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>It's a domain object modelling.</li>
  <li>Developing features of the software.</li>
  <li>Component and class ownership-based.</li>
  <li>Featuring all the teams.</li>
  <li>Ensure timely inspections.</li>
  <li>Configuration management.</li>
  <li>Regular build-ups.</li>
  <li>Visualizing the progress and results.</li>
</ul>

              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Why Agile? The Benefits and Techniques</h1>
<p className="font-thin text-gray-100">
  Agile development methods have become an integral part of software development processes. These are increasingly popular among product engineers, business analysts, developers, and leaders.
</p>
<p className="font-thin text-gray-100">
  Most importantly, numerous agile techniques provide an innumerable set of benefits that are as follows:
</p>
<ul className="list-disc font-thin text-gray-100">
  <li>Agile promotes extensive team collaboration across different departments and clarity on the project for its real-time development.</li>
  <li>Regular testing is an integral part of an agile software development model that assures quick fixing of bugs and efforts. Thereby, delivering a high-quality product with equally high outcomes.</li>
  <li>Flexibility is an important part of agile methodology. It allows teams to stay adaptable to several changes, adjust their plans, follow evolving trends, and create result-driven products.</li>
  <li>Agile lowers the risk of increasing development costs by allowing constant modifications, successful product iteration, and rapidly changing the course of action.</li>
</ul>

              </div>

              <div
                id="section7"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion: Making the Right Choice</h1>
<p className="font-thin text-gray-100">
  The agile methodology is an effective, cost-saving, trending, and adaptive software development technique that assures speed, agility, and flexibility. Most software developers follow end-to-end agile project development techniques and create a working application as per the client's requirement.
</p>
<p className="font-thin text-gray-100">
  Another key highlight of agile methodology is continuously striving for excellence by welcoming and embracing client feedback with a positive mindset. This helps create fine-tuned software within the stipulated time and further provides substantial ROI to the company.
</p>
<p className="font-thin text-gray-100">
  If you still follow the traditional Waterfall mode for software development without getting the expected results, then switch to agile methodology. Get in touch with a reliable software development company that completely follows the agile development model.
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
                  "section6",
                  "section7",
                 
                 
                  
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
                  Agile Methodology: Dynamic Model, Innovative Approach
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  What is Agile? 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  What is the Agile Methodology?
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Understanding Agile System Development</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">Exploring Agile Development Methods </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">Why Agile? The Benefits and Techniques </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section7")}
                >
                  <a className="font-thin text-gray-100">Conclusion: Making the Right Choice </a>
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
