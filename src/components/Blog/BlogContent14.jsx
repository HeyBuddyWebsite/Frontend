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
                <h1 className="text-3xl font-extrabold">Building Robust Software: A Guide to Cybersecurity Best Practices</h1>
<p className="font-thin text-gray-100">
  In today's technically driven world full of so many business applications and software, securing it from cybercriminals is of paramount importance. Gone are the days, when cyber attackers keep a close watch on your software password and decode the code to take out sensitive information. Just like the rapidly growing technology, even cyberattacks have become more sophisticated.
</p>
<p className="font-thin text-gray-100">
  Application security must be done in coordination with modern-day cybersecurity practices, policies, and methodologies. With this, organizations need not find themselves at a crossroads to bridge the gap between secured software development and meeting hacking uncertainties.
</p>
<p className="font-thin text-gray-100">
  Here in this blog, we will be reflecting necessary light on cybersecurity best practices of secure software development, followed by unwinding common cybersecurity threats. And, later talk about measures to best secure your valuable and data-driven application.
</p>
<p className="font-thin text-gray-100">
  So, with no further ado, let's get started on the same.
</p>

              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Cybersecurity Threats and its Common Types</h1>
<p className="font-thin text-gray-100">
  A cybersecurity threat is a clear indication of a suspicious entity entering into your software for the malicious purpose of gaining unauthorized access to the network. The purpose is to launch an attack on your software to gain valuable data and provide unexpected harm.
</p>
<p className="font-thin text-gray-100">
  But that's not all about cyber threats to your business software. There are several types of cybersecurity threats you should be aware of. Thus, we bring forth some essential tips on threats that are necessary to know to follow particular cybersecurity awareness tips.
</p>

<h2 className="text-2xl font-extrabold">1. Malware</h2>
<p className="font-thin text-gray-100">
  Malware is a kind of malicious software or code used by cybercriminals to pose a serious threat to your software. It's a program inserted into your valuable software to steal sensitive information, insert malicious code, affect your data, and attack the operating system. As a result of malware, you may find uncalled functional and data damage to your software further affecting the overall organization's reputation.
</p>
<p className="font-thin text-gray-100">
  Serious threats of malware for your software:
</p>
<ul className="font-thin text-gray-100">
  <li>Voilatin privacy of your software while allowing unauthorized entities to get access to the same.</li>
  <li>Locking the user's data or device with a further threat of leaking valuable information.</li>
  <li>Adding a trojan horse into the software allows users to download malicious software posing it to be authentic software.</li>
  <li>Gathering sensitive information of your software including but not limited to usernames, passwords, codes, credit card numbers, and more.</li>
  <li>Self-replacing the program with malicious worms.</li>
</ul>

<h2 className="text-2xl font-extrabold">2. Ransomware</h2>
<p className="font-thin text-gray-100">
  As the name itself implies, Ransomware is another malicious attack on your software. Ransomware prevents users from getting access to their accounts or the software. To access the same, they have to pay a ransom or a fee through an online payment method. To gain access, users have to pay in terms of bitcoins.
</p>
<p className="font-thin text-gray-100">
  Serious threats of ransomware for your software:
</p>
<ul className="font-thin text-gray-100">
  <li>Ransome enters into your software and encrypts the files you have.</li>
  <li>Cybercriminals will ask for ransom from your side to provide access to the software.</li>
  <li>There is a further threat of cyber attackers holding the data of your software unless you pay the ransom to take hold of the same.</li>
</ul>

<h2 className="text-2xl font-extrabold">3. Spam & Phishing</h2>
<p className="font-thin text-gray-100">
  At some point in time, you must've witnessed some unwanted emails or messages visible in your email box. Neither you have subscribed to a particular website nor asked for such emails. Such instances are clear indications of serious cyberthreat caused by unauthorized entities.
</p>
<p className="font-thin text-gray-100">
  So, to be precise, spam and phishing include unwanted, undesirable, and unsolicited emails and messages visible in your mailbox. In case, you click on any link mentioned in the email or message, then there are chances of losing your sensitive personal information.
</p>

<h2 className="text-2xl font-extrabold">4. Corporate Account Takeover</h2>
<p className="font-thin text-gray-100">
  An integral cybersecurity tip for employees is becoming aware of the Corporate Account Takeover (CATO) cyber threat, rapidly growing these days. CATO is more like an unreliable business entity that poses as real-time business professionals sending your authorized access to wire and ACH transactions. In this case, unauthorized funds are transferred to accounts fully controlled by untrusted cybercriminals.
</p>
<p className="font-thin text-gray-100">
  Several enterprises are under serious threat because of CATO which could result in huge business-specific financial loss or even leakage of valuable data. This form of cybersecurity threat can pose a serious danger to your software, computer systems, and more.
</p>

<h2 className="text-2xl font-extrabold">5. Distributed Denial of Service (DDoS) Attacks</h2>
<p className="font-thin text-gray-100">
  DDoS stands for increasing website traffic or access to software with the help of overwhelming traffic from unauthorized sources. As a result, your software's functional speed goes slow, preventing access to users, and allowing people to stay away from your software.
</p>
<p className="font-thin text-gray-100">
  This particular Distributed Denial of Service attack is caused by cybercriminals infecting computers with Botnets to plant malware into your system.
</p>

              </div>


              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Principles of Secure Software Development</h1>
<p className="font-thin text-gray-100">
  To safeguard your business information, follow some predefined principles of secure software development and stay away from unexpected cyberattacks. Here, we have listed down essential principles of software development keeping its security and data protection in mind.
</p>

<h2 className="text-2xl font-extrabold">• Security as Code</h2>
<p className="font-thin text-gray-100">
  One of the significant principles of protected business software development is security as code. It implies transforming manual processes to automation as per scriptable components within the software development life cycle. This principle involves writing the software scripts to ensure the maximum level of security, performing vulnerability assessments, and automating remediation.
</p>

<h2 className="text-2xl font-extrabold">• Giving Least Privilege</h2>
<p className="font-thin text-gray-100">
  The Least Privilege is another crucial secure software development principle that involves providing Identity and Access Management (IAM) access to users. It implies every component of your software should be operated with the least privileged access to the same. It implies necessary functions to be performed as per the least privilege available that further lead to reduced accessible attacks.
</p>

<h2 className="text-2xl font-extrabold">• Securing the Defaults</h2>
<p className="font-thin text-gray-100">
  Securing the Default principles certainly mandates the default settings to be operated to safeguard the software from attacks, data leaks, and other threats. This approach allows all the end users to stick to the default software settings that include features like allowing multi-factor authentication, using safe passwords, turning off extra services, and more.
</p>

<h2 className="text-2xl font-extrabold">• Separation of Duties</h2>
<p className="font-thin text-gray-100">
  Separation of Duties (SoD) means dividing the software development tasks and duties to limit the access as per the respective function. For instance, developers will not have access to the CI/CD pipeline and won't be allowed to deploy the production of software. Similarly, other development responsibilities are divided to limit access to an optimum extent.
</p>

              </div>


              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Best Practices for Secure Software Development with Cybersecurity Measures</h1>
<p className="font-thin text-gray-100">
  Let's have a look at some essential information security best practices to consider as an integral part of your software development process. And further follow the same after deploying.
</p>

<h2 className="text-2xl font-extrabold">• Secure Development Lifecycle</h2>
<p className="font-thin text-gray-100">
  One of the integral cybersecurity best practices to follow is from the development stage itself. Make sure to include necessary security patches as an important part of your software development lifecycle. Start discussing and implementing the required security patches starting from the requirement gathering process to final deployment. Doing this will help you keep security as a continuous part of the process and prevent uncalled cyberattacks.
</p>

<h2 className="text-2xl font-extrabold">• Securing Data</h2>
<p className="font-thin text-gray-100">
  Sensitive data related to your software should be secured first. To do the same, follow sensitive data encryption both in the rest and transit stages. It is essential to use strong data encryption algorithms to protect valuable usernames, passwords, codes, and more.
</p>

<h2 className="text-2xl font-extrabold">• Authentication and Authorization</h2>
<p className="font-thin text-gray-100">
  Authenticating users with a strong mechanism is another information best practice to follow. It is essential to only allow authorized and trusted users to get access to your business software that too after using strong usernames and passwords. To do the same, you can enable multi-factor authentication, role-based access control, and other authentication techniques. Doing this will further help you prevent unauthorized entities from accessing your software.
</p>

<h2 className="text-2xl font-extrabold">• Network Security</h2>
<p className="font-thin text-gray-100">
  It is of integral importance to enable strong and protected network security for running the software with ease. As an enterprise, you can choose a strong network security measure to run the software without causing any information or accessibility stress.
</p>

<h2 className="text-2xl font-extrabold">• Enforce Strong Security Policies</h2>
<p className="font-thin text-gray-100">
  As an enterprise, you must adopt the recent, trending, and updated security policies at timely intervals to safeguard your software against attacks and threats. It is of critical importance to stay updated regularly with the current security policies, follow a strategic approach to adopt the same and change your software settings accordingly.
</p>

<h2 className="text-2xl font-extrabold">• Incident Response and Management</h2>
<p className="font-thin text-gray-100">
  Do develop a cyberattack incident report plan for the enterprise to take necessary steps in safeguarding the system. Prepare an outline of how to respond when an incident of cyberattack is detected and particular security measures are followed to safeguard the software. Moreover, this response plan must include communication channels, response time, management process, etc.
</p>

<h2 className="text-2xl font-extrabold">• Compliance and Regulations</h2>
<p className="font-thin text-gray-100">
  Strictly adhere to the available industry regulations and software security compliance to follow the necessary standards and protect your system. For instance, you should meet the compliance associated with GDPR, PCI DSS, HIPAA, and several others.
</p>

<h2 className="text-2xl font-extrabold">• Training and Awareness</h2>
<p className="font-thin text-gray-100">
  Last but not least, start training your software development team to create secure code, understand different types of cyber attacks, and follow the above-mentioned cybersecurity best practices to prevent threats. For this, you must encourage a security awareness culture and follow several software security activities to stay ahead of the attacks.
</p>

              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>
<p className="font-thin text-gray-100">
  To sum up it all, cybersecurity is a multi-faceted approach to secure software development from start to finish. It's a necessary endeavor for enterprises to reduce the risk of cyberattacks like data leakage, data theft, unauthorized access, data lock, or any other. Follow the necessary cybersecurity tactics to stay ahead of the ongoing risk of vulnerabilities and fully protect the software to ensure seamless development.
</p>

              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Frequently Asked Questions</h1>
<div className="font-thin text-gray-100">
  <h2 className="text-2xl font-bold">1. What is cybersecurity?</h2>
  <p>
    To be precise, cybersecurity is a strategic process of protecting your organization's software from cyberattacks. It helps shield your software against the common threats of unauthorized access, data theft, information destruction, or even preventing financial loss to your enterprise.
  </p>

  <h2 className="text-2xl font-bold">2. Why is cybersecurity important for you?</h2>
  <p>
    Certainly, adopting the pre-defined cybersecurity best practices is important for your enterprise's software to protect its valuable data, only allow authorized users to access the same, and prevent data loss, or any kind of corruption. Prevent the software from being exposed to cyberattacks and hackers by implementing particular security measures from the hands of an expert partner.
  </p>

  <h2 className="text-2xl font-bold">3. What are the five stages of the cybersecurity lifecycle?</h2>
  <p>
    Just like different stages are involved in the process of software development lifecycle. Similarly, several steps are involved in the cybersecurity lifecycle.
  </p>
  <ul>
    <li>
      <strong>Risk Management:</strong> It involves identifying the potential and possible cybersecurity risks involved in connection with your software. This stage includes several stages of risk identification, analysis, assessing the risk, and prioritizing the same for timely updates and security patches.
    </li>
    <li>
      <strong>Security Planning:</strong> Stage 2 focuses on planning the security implementation and architectural design. It involves creating a comprehensive software security plan to deal with numerous kinds of cyberattacks, defining goals, designing the architecture, and integrating security into the software.
    </li>
    <li>
      <strong>Implementation & Configuration:</strong> The last stage in the cybersecurity lifecycle involves the implementation and configuration of necessary security measures. In this stage, organizations have to deploy the defined security measures and techniques to protect sensitive information and software access. Here, security patches are updated at timely intervals along with measuring the threat ratio for further prevention.
    </li>
  </ul>
</div>

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
                  Building Robust Software: A Guide to Cybersecurity Best Practices
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Cybersecurity Threats and its Common Types 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Principles of Secure Software Development
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Best Practices for Secure Software Development with Cybersecurity Measures</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">Conclusion </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">FAQs </a>
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
