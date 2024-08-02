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
import { useRouter } from "next/router";

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

    blogImage,
    pubDate,
  } = SelectedBlog;

  return (
    <div className={`mx-auto px-5 lg:px-0 bg-no-repeat bg-fixed bg-top pt-28`}>
      <div className="hidden lg:flex gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white ml-[5%]">
        <span>Blog</span>
        <span>
          <FaChevronRight />
        </span>
        <span>{title}</span>
      </div>
      <div
        className={`rounded-xl relative overflow-hidden border-2 h-auto w-auto lg:h-[72vh] lg:w-[90%] mx-auto mt-4 ${
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
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/blog/[fetchpik.com]-high-PdzECuN4eb%202.jpg"
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
              className={`text-[#FF5C00] font-bold ${
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
      <section className="pt-10 flex flex-col-reverse lg:flex-row lg:w-[90%] xl:w-[90%] mx-auto gap-10 relative">
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
                <h1 className="text-3xl font-extrabold">Dominating the Mobile Game App Market: Strategies and Success Stories</h1>
<p className="font-thin text-gray-100">
  The mobile game app market is a huge realm of profitability and extended users investing time, effort, and money to enjoy playing games. Several examples like Candy Crush, PUBG, Angry Birds, Clash of Clans, Honor of Kings, and several other games have dominated the marketplace while acquiring a huge set of users.
</p>

<p className="font-thin text-gray-100">
  Undoubtedly, more than 62% of smartphone users install more than 2 mobile gaming apps on their device and continue to use the same. Even as per the mobile game market analysis, it has been observed that in 2022, the mobile gaming content marketplace was worth around 14.5 billion US dollars and is projected to reach 173.4 billion at the end of 2026.
</p>

<p className="font-thin text-gray-100">
  So, these statistics ensure the upcoming massive growth of the app marketplace in coordination with the close support of trusted gaming app development companies.
</p>

<p className="font-thin text-gray-100">
  Here in this blog, we will be discussing the current realm of mobile gaming app marketplace, ways to create a dominant app, and overcome a common set of challenges.
</p>

<p className="font-thin text-gray-100">
  With no further ado, let's get started on the same.
</p>

              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Overview Mobile Game App Market</h1>
<p className="font-thin text-gray-100">
  The global mobile game market size is rapidly expanding with the continuous surge in new technologies, innovations, and the extended set of users. Especially driven by the increasing penetration of smartphone usage, gaming apps are increasing to a substantial extent.
</p>

<p className="font-thin text-gray-100">
  Some integral key factors responsible for the massive growth of mobile gaming market size.
</p>

<ul className="list-disc ml-8">
  <li className="font-thin text-gray-100">
    Due to the increased usage of new technologies like Artificial Intelligence, Machine Learning, Augmented Reality (AR), and Virtual Reality (VR).
  </li>
  <li className="font-thin text-gray-100">
    Improved smartphone infrastructure and easy accessibility are further responsible for extended gaming app development services.
  </li>
  <li className="font-thin text-gray-100">
    The increasing availability of free and monetized games has led to extended usage among players.
  </li>
  <li className="font-thin text-gray-100">
    Rapid expansion of eCommerce platforms and digital payment gateways are also responsible for increasing the gaming app market size.
  </li>
</ul>

<p className="font-thin text-gray-100">
  Thus, for all the above reasons, the mobile gaming app industry is witnessing a huge surge in number, total downloads, easy accessibility, and more.
</p>

              </div>

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Strategies for Dominating the Mobile Game App Market</h1>
<p className="font-thin text-gray-100">
  In the competitive landscape of the gaming industry, it is of integral matter for mobile game development agencies to follow dominating developing factors. And stay ahead of the competition in terms of earning more revenue and acquiring more and more users.
</p>

<p className="font-thin text-gray-100">
  Here, in this part, we will be focussing on some key dominating ways to get a special place for your game in the competitive marketplace.
</p>

<h2 className="text-2xl font-bold mt-4">Leveraging data-driven insights for market research and targeting</h2>
<p className="font-thin text-gray-100">
  One of the significant factors responsible for developing interactive and revenue-generating mobile gaming is counting on data analytics techniques. It involves collecting, measuring, and analyzing the data related to user's behavior and their experience in playing the game. Such data provides valuable insights related to the time spent by games, the level or stages that have been cleared, the difficulty level of the game, and which devices are best preferred to download and play the game.
</p>

<p className="font-thin text-gray-100">
  By getting the answers to these questions, mobile game development outsourcing agencies will keenly focus on creating an interactive game. And that too is based on the following set of key points in mind.
</p>

<ul className="list-disc ml-8">
  <li className="font-thin text-gray-100">
    Setting clear objectives and game metrics.
  </li>
  <li className="font-thin text-gray-100">
    Collecting and analyzing both quality and quantitive gaming data.
  </li>
  <li className="font-thin text-gray-100">
    Making informed decisions based on end-to-end data analysis.
  </li>
  <li className="font-thin text-gray-100">
    Analyzing the player's game-playing pattern.
  </li>
</ul>

              </div>

              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Developing High-Quality, Engaging Content Tailored to Target Audience Preferences</h1>
<p className="font-thin text-gray-100">
  Developing a profitable mobile gaming app certainly implies reaching the level of user attraction and engaging them to play more. Instead of creating a traditional game with different stages and targets to achieve, focus on creating attention-grabbing mobile games that meet the target audience's preferences based on the following set of points.
</p>

<ul className="list-disc ml-8">
  <li className="font-thin text-gray-100">
    When getting started with mobile gaming app development, understand the user's persona based on age, interest, solo or multiplayer, or even monetized playing pattern.
  </li>
  <li className="font-thin text-gray-100">
    Use video and interactive visuals created using 3D Animation and several techniques to capture the attention of gamers.
  </li>
  <li className="font-thin text-gray-100">
    Rely on the social proofs given by leading influencers for the success of your mobile gaming app and build a lasting trust factor.
  </li>
  <li className="font-thin text-gray-100">
    Ideally, test and optimize the gaming app to measure the success of patterns and scale up the monetization levels.
  </li>
</ul>

              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Implementing Effective User Acquisition and Retention Strategies</h1>
<p className="font-thin text-gray-100">
  Another integral way to dominate the competitive mobile app marketplace is by focusing on effective user retention and acquisition strategies. Clearly speaking, user retention refers to engaging in efforts to allow existing users to continue playing your mobile games with a higher level of satisfaction. On the other side, user acquisition implies attracting a new set of users to download the mobile gaming app on their device and start experiencing seamless playing pleasure.
</p>
<p className="font-thin text-gray-100">
  Both user retention and user acquisition are important factors to ensure existing users stay intact with your game and new players coming up to stay competitive in the marketplace.
</p>

              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Strategies to Enhance User Retention Rate</h1>
  <ul className="list-disc ml-8">
    <li className="font-thin text-gray-100">Start creating personalized gaming content to capture the attention of users.</li>
    <li className="font-thin text-gray-100">Add several gamification features like earning badges, rewards, etc.</li>
    <li className="font-thin text-gray-100">Send push notifications related to new games, levels, and cheat codes.</li>
    <li className="font-thin text-gray-100">Send regular game updates to allow users to stay active.</li>
    <li className="font-thin text-gray-100">Provide end-to-end in-app support to meet the queries of gamers.</li>
    <li className="font-thin text-gray-100">Pay special focus on the visually appealing user interface to improve the retention rate.</li>
    <li className="font-thin text-gray-100">Decrease the page loading time to improve the user-friendliness of the app.</li>
  </ul>
              </div>

              <div
                id="section7"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Strategies to Enhance User Acquisition Rate</h1>
  <ul className="list-disc ml-8">
    <li className="font-thin text-gray-100">Perform the App Store Optimization (ASO) techniques that include enhancing the screenshots, titles, descriptions, and meta tags.</li>
    <li className="font-thin text-gray-100">Start enabling paid advertising to increase the number of downloads.</li>
    <li className="font-thin text-gray-100">Rely on content marketing strategies to post blogs, videos, and social media posts related to your game.</li>
  </ul>
              </div>

              <div
                id="section8"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                 <h1 className="text-3xl font-extrabold">Success Stories in Dominating the Mobile Game App Market</h1>
  <ul className="list-disc ml-8">
    <li className="font-thin text-gray-100">Ludo King - Over 100 million downloads and received 4.2 stars on the Google Play Store.</li>
    <li className="font-thin text-gray-100">FAU-G - Over 5 million downloads and has received a 4-star rating on the app store.</li>
    <li className="font-thin text-gray-100">Real Cricket 2.0 - With a 4.1-star rating on the app store, this game has received 10 million plus downloads in the past.</li>
  </ul>
              </div>

              <div
                id="section9"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Challenges and Considerations for Dominating the Mobile Game App Market</h1>
  <ul className="list-disc ml-8">
    <li className="font-thin text-gray-100">Not reaching the right audience: Developing a mobile gaming app is not enough unless it successfully targets the right audience. Not reaching the right set of users will result in uninstalling the app and a decreased set of revenue. Overcome this challenge by keeping the target audience in mind when creating the gaming app and adding visuals, features, functionalities, and more accordingly.</li>
    <li className="font-thin text-gray-100">Undiscoverability of app: Another peculiar challenge is getting your gaming app noticed amidst increased competition and similar apps on the app store. The solution lies in adding a unique set of features and relying on app store optimization (ASO) techniques.</li>
    <li className="font-thin text-gray-100">Dealing with security issues: Most gaming apps require users' personal information to log in and enjoy the games. Security might be compromised if necessary protective protocols are not in place. Ensure the security of users' information to an optimum extent.</li>
    <li className="font-thin text-gray-100">Regular updates & maintenance: Technologies evolve, and products become outdated if they do not adopt new-age technologies. To sustain in the long run, regularly update and maintain the app under the guidance of a mobile game development agency.</li>
  </ul>
              </div>

              <div
                id="section10"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                
  <h1 className="text-3xl font-extrabold">Conclusion</h1>
  <p className="font-thin text-gray-100">
    Mobile gaming app development is an innovative, highly creative, and fully monetized model to meet the playing requirements of millions of users. With so many gaming apps available on Android's Google Play Store and iOS App Store, make sure to follow competitive app development strategies to stay ahead of the competitive curve. In relation to the same, make sure to hire a trusted mobile gaming app development company of your choice.
  </p>


              </div>
            </section>
          </div>

          

          {/* bottom community section */}
          <div>
            <div
              className={` border-2  rounded-[30px] flex items-center justify-between py-8 px-5 ${
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
              <div className="flex items-center gap-3">
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
                  "section9",
                  "section10",
                 
                 
                 
                  
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
                  Dominating the Mobile Game App Market: Strategies and Success Stories
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Overview Mobile Game App Market  
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Strategies for Dominating the Mobile Game App Market
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Developing High-Quality, Engaging Content Tailored to Target Audience Preferences </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">Implementing Effective User Acquisition and Retention Strategies </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">Strategies to Enhance User Retention Rate </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section7")}
                >
                  <a className="font-thin text-gray-100">Strategies to Enhance User Acquisition Rate </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section8")}
                >
                  <a className="font-thin text-gray-100">Success Stories in Dominating the Mobile Game App Market</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section9")}
                >
                  <a className="font-thin text-gray-100">Challenges and Considerations for Dominating the Mobile Game App Market</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section10")}
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
