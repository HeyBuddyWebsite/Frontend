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
                 <h1 className="text-3xl font-extrabold">Legacy Software Modernisation: Stop Struggling, Start Knowing</h1>
  <p className="font-thin text-gray-100">
    Businesses across industries agree that legacy software modernisation is a critical move to gain a competitive edge, adapt to changing technology landscapes, and lead the market.
  </p>
  <p className="font-thin text-gray-100">
    In fact, in 2023, Statista found that over 50% of companies quote reasons like increased security and efficiency as the main motivations for modernizing their legacy applications and data. This is even crucial when you see the projected tsunamical surge in Cybercrimes which will be a $10.5 trillion economy by 2025.
  </p>
  <p className="font-thin text-gray-100">
    But that’s not it, legacy software modernisation saves businesses a lot of money. A study by IBM found that legacy system modernisation achieves significant cost savings:
    <ul className="list-disc ml-8">
      <li>Up to 15-35% yearly cost savings on infrastructure.</li>
      <li>Up to 30-50% saving in application maintenance and running costs.</li>
      <li>A whopping up to 74% reduction in hardware, software, and staff costs.</li>
    </ul>
  </p>
  <p className="font-thin text-gray-100">
    However, more often than not, businesses hesitate to take action to switch to modern software. The reasons vary from not wanting to touch their existing system to not being sure about modern alternatives to not knowing if they need modernisation.
  </p>
  <p className="font-thin text-gray-100">
    Hence, in this blog, we will share the characteristics and harms of legacy software systems. This will help you understand whether your existing system needs changes and what are the harms if you do not opt for modernisation at the right time. Also, we will be sharing five steps as part of a safer legacy system migration strategy. This will guide you on how to modernise your existing system safely without affecting the existing critical processes of your system. Let’s start with the definition.
  </p>
              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">What is Legacy Software: Definition and Characteristics</h1>
  <p className="font-thin text-gray-100">
    Legacy software is basically outdated applications or systems that your organization might still be using despite newer and better technology alternatives being available.
  </p>
  <p className="font-thin text-gray-100">
    So if your business is relying on DOS-based accounting software from the 1990s, while sophisticated cloud-based accounting platforms watch you from the sidelines, you are running on legacy software.
  </p>
  <p className="font-thin text-gray-100">
    This is a very toned-down example. In the real world, things are not so easy to spot. In fact, many times businesses are not even aware that their struggle is more because of legacy software and less because of the lack of resources and talents or the rapid advancements in their competitors' innovations.
  </p>
  <p className="font-thin text-gray-100">
    Their existing software and system fail to match the market requirements and fit into the ever-evolving technology space. Therefore, failing miserably.
  </p>
  <p className="font-thin text-gray-100">
    We will discuss the main characteristics of legacy software. This will give you an idea of where to look for the gaps.
  </p>
              </div>

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">When Do You Need Legacy Software Modernisation?</h1>
  <p className="font-thin text-gray-100">
    Legacy software can be spotted in many forms. This can be an outdated programming language that is failing to utilize your hardware resources or connect with the latest systems.
  </p>
  <p className="font-thin text-gray-100">
    Or this can be a mainframe-based core banking system developed in the 1980s that a banking institution is using to process transactions and manage customer accounts.
  </p>
  <p className="font-thin text-gray-100">
    This mainframe system is difficult and costly to maintain and limits the bank's ability to innovate and adapt to changing customer demands. What’s more concerning is that it may also lack modern security features, thereby making the bank vulnerable to cyberattacks, putting the financial assets and data of thousands of consumers at stake.
  </p>
  <p className="font-thin text-gray-100">
    Thus, you can easily work out that legacy software can have serious consequences if not modernized in time. In the next section, we will have a glance at what harm legacy software breeds if not updated in time and left untouched for a longer period.
  </p>
              </div>

              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                 <h1 className="text-3xl font-extrabold">Ongoing Struggles of Not Opting for Legacy Software Modernisation in Time</h1>
  <p className="font-thin text-gray-100">
    Legacy software should be modernized regularly. Otherwise, they can not only slow down your growth but can bring serious damage to your organization. Here are some common harms of legacy software:
  </p>
  
  <h2 className="text-2xl font-bold mt-6">Outdated Technology</h2>
  <p className="font-thin text-gray-100">
    As legacy software uses outdated programming languages, frameworks, and development tools, they are no longer supported or widely used. This reduces the efficiency and compatibility of the organizational system with modern systems, thereby reducing the scope of opportunities.
  </p>
  <p className="font-thin text-gray-100">
    For example, a retail company's legacy e-commerce platform, built on an outdated technology stack, will struggle to handle high traffic during peak seasons. It will frequently crash, upsetting customers and leading to loss of sales in the short term and customers in the long run.
  </p>

  <h2 className="text-2xl font-bold mt-6">Limited Scalability</h2>
  <p className="font-thin text-gray-100">
    Another harm of legacy systems is hindered scalability. They are designed to handle specific workloads or user bases and are difficult to scale and adapt to changing business needs, potentially hindering growth and innovation.
  </p>
  <p className="font-thin text-gray-100">
    For instance, if a growing startup's legacy customer relationship management (CRM) system lacks scalability, it will lead to bottlenecks in managing customer data and limit the company's ability to expand into new markets.
  </p>

  <h2 className="text-2xl font-bold mt-6">Lack of Integration</h2>
  <p className="font-thin text-gray-100">
    Legacy software also has limited or no compatibility with modern systems. It poses a serious challenge to businesses looking to integrate with other software applications or platforms, leading to siloed data and inefficient workflows.
  </p>

  <h2 className="text-2xl font-bold mt-6">High Maintenance Costs</h2>
  <p className="font-thin text-gray-100">
    This drawback is easily evident in most cases. As modern systems start to take center stage, the talent shifts from outdated tools to the latest ones. This leads to a lack of specialized skills required to maintain outdated systems.
  </p>
  <p className="font-thin text-gray-100">
    The same is true for hardware dependencies. Thus, the risk and frequency of system failures increase, draining resources that could otherwise be allocated to strategic initiatives.
  </p>

  <h2 className="text-2xl font-bold mt-6">Security Vulnerabilities</h2>
  <p className="font-thin text-gray-100">
    Legacy systems are often quite vulnerable to security threats due to outdated security measures. Their lack of updates makes them susceptible to malware and cyberattacks that modern systems can shrug off easily.
  </p>
  <p className="font-thin text-gray-100">
    This poses risks to sensitive organizational data and may lead to breaches in regulatory compliance. For example, a healthcare provider's legacy electronic medical records (EMR) system, no longer supported by a vendor, is an easy target for a ransomware attack.
  </p>
  <p className="font-thin text-gray-100">
    The consequences range from data breaches and regulatory fines to loss of consumer trust and a tarnished brand name.
  </p>

  <h2 className="text-2xl font-bold mt-6">Limited Vendor Support</h2>
  <p className="font-thin text-gray-100">
    Legacy systems often suffer from limited vendor support. Vendors may discontinue support, leaving organizations without access to critical updates, patches, and technical assistance. This exposes the organization to security risks and compliance issues.
  </p>

  <h2 className="text-2xl font-bold mt-6">Resistance to Change</h2>
  <p className="font-thin text-gray-100">
    Lastly, this harm is more self-inflicted. Many organizations with legacy systems avoid modernization due to concerns about disrupting existing operations. They fear changes to processes they have worked hard to streamline over the years.
  </p>
  <p className="font-thin text-gray-100">
    Additionally, they worry about the costs associated with training employees on new systems and the perceived risks of migration. This inhibits their agility and competitiveness in the market.
  </p>
  
  <p className="font-thin text-gray-100">
    Now that we have discussed the characteristics of outdated legacy systems, the time is right to explore the impacts of not addressing these issues promptly.
  </p>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Long Term Consequences of an Outdated Software on Your Business</h1>
  <p className="font-thin text-gray-100">
    Maintaining outdated software results in multiple consequences. Here are some that you should know about:
  </p>

  <h2 className="text-2xl font-bold mt-6">Decreased Productivity and Profitability</h2>
  <p className="font-thin text-gray-100">
    Using outdated software means you're not working with the latest tools and technologies available in the market. This leads to organizational inefficiency, time and cost wastage in manual workarounds where automation could have significantly improved productivity. Increased errors and inefficiencies are other perils of clinging to outdated software systems.
  </p>

  <h2 className="text-2xl font-bold mt-6">Loss of Competitive Edge</h2>
  <p className="font-thin text-gray-100">
    The key to winning in a competitive market is innovation. If your competitors are using the latest software systems while you are stuck with outdated ones, they will gain a significant competitive edge over you. For instance, in the highly competitive eCommerce market, if your competitor leverages AI-powered AR try-ons that enhance user experience and help customers make better purchasing decisions, they will have a clear advantage over you, who might only offer product photos or videos on your website.
  </p>

  <h2 className="text-2xl font-bold mt-6">Legal Penalties and Reputational Damage</h2>
  <p className="font-thin text-gray-100">
    As legacy systems age, their failure rates increase. Organizations that choose to maintain these outdated systems rather than modernizing them face rising maintenance costs and challenges in meeting regulatory compliance standards. This exposes the business to serious risks, including:
  </p>
  <ul className="list-disc ml-8">
    <li className="font-thin text-gray-100">Financial losses: Rising maintenance costs and compliance violations can result in fines, legal actions, and damage to the company's reputation and trustworthiness.</li>
    <li className="font-thin text-gray-100">Decreased efficiency: Operating with outdated systems leads to lower efficiency levels, missing out on opportunities for innovation and growth.</li>
  </ul>

  <p className="font-thin text-gray-100">
    I know this might be quite overwhelming, but don’t feel cornered. Here is your legacy system migration strategy on what you could do to have the latest and most effective software system without harmfully disrupting your existing efforts.
  </p>
              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Legacy System Migration Strategy: 5 Steps to Safely Modernize</h1>

<h2 className="text-2xl font-bold mt-6">Step 1: Comprehensive Assessment</h2>
<p className="font-thin text-gray-100">
  Assess your current legacy system thoroughly. This includes evaluating its architecture, functionality, dependencies, and integration points. This assessment will help identify key pain points, inefficiencies, and areas for improvement. More importantly, it will highlight critical business processes that must be preserved during the modernization process.
</p>

<h2 className="text-2xl font-bold mt-6">Step 2: Develop a Modernization Strategy</h2>
<p className="font-thin text-gray-100">
  After the assessment, define clear objectives and goals for the modernization effort. These goals might include improving performance, enhancing security, reducing maintenance costs, and increasing scalability. Evaluate different modernization approaches such as gradual migration, componentization, and re-architecture to find the most suitable one for your organization’s needs and constraints.
</p>
<p className="font-thin text-gray-100">
  It might be beneficial to connect with a legacy software modernization company. Their experience and expertise can help you make the right decisions and navigate the modernization process with greater ease, minimizing the risk of failure.
</p>

<h2 className="text-2xl font-bold mt-6">Step 3: Implement Incremental Changes</h2>
<p className="font-thin text-gray-100">
  Break down the legacy software modernization process into manageable increments or phases. Prioritize the most critical and low-risk components for modernization first, ensuring that essential business functions remain operational throughout the transition.
</p>

<h2 className="text-2xl font-bold mt-6">Step 4: Continuous Testing and Validation</h2>
<p className="font-thin text-gray-100">
  Implement rigorous testing procedures to validate each stage of the modernization process. Ensure that new functionalities align with business requirements and user expectations. Use automated testing tools and techniques to identify and address potential issues early in the development cycle, reducing the risk of costly errors and delays.
</p>

<h2 className="text-2xl font-bold mt-6">Step 5: Training and Change Management</h2>
<p className="font-thin text-gray-100">
  Once the new system is taking shape, provide comprehensive training and support to employees who will be using the modernized system. Effective training will ensure that they have the skills and knowledge needed to adapt to changes and contribute to a successful modernization.
</p>

<h2 className="text-2xl font-bold mt-6">Bonus Tip: Implement Change Management Strategies</h2>
<p className="font-thin text-gray-100">
  To ensure successful modernization, implement change management strategies:
</p>
<ul className="list-disc ml-8">
  <li className="font-thin text-gray-100">Clearly communicate the benefits of the modernization effort.</li>
  <li className="font-thin text-gray-100">Address concerns or resistance from stakeholders.</li>
  <li className="font-thin text-gray-100">Foster a culture of continuous improvement and innovation within the organization.</li>
</ul>
              </div>

              <div
                id="section7"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
               <h1 className="text-3xl font-extrabold">Legacy Software Modernisation Services by Hey Buddy</h1>
  
  <p className="font-thin text-gray-100 mt-4">
    Hey Buddy is the fastest growing business offering technology solutions to businesses across industries. Our unique approach incorporates maintaining clear communication and fostering collaborative efforts.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Contact us today to consult on how you can safely move forward with your legacy software modernization and secure a solid market lead.
  </p>
              </div>

              <div
                id="section8"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>
  
  <p className="font-thin text-gray-100 mt-4">
    So that was it. We have covered it all in detail as extensively as possible. We explored what a legacy system is, its characteristics, and the ongoing and long-term consequences of not switching to a modern software system.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    We also shared 5 steps and a bonus point to provide you with a safe legacy system migration strategy.
  </p>
  
  <p className="font-thin text-gray-100 mt-4">
    Switching to a new way of working is always daunting; however, with the right approach and guidance, you will reap all the benefits without incurring any significant loss.
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
                  "section8",         
                 
                 
                 
                  
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
                  Legacy Software Modernisation: Stop Struggling, Start Knowing
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  What is legacy software: Definition and Characteristics 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  When do you need Legacy Software Modernisation?
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Ongoing Struggles of Not Opting for Legacy Software Modernisation in Time</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">Long Term Consequences of an Outdated Software on Your Business </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">Legacy System Migration Strategy: 5 Steps to Safety Modernise</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section7")}
                >
                  <a className="font-thin text-gray-100">Legacy Software Modernisation Services by Hey Buddy</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section8")}
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
