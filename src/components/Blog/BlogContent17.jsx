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
                <h1 className="text-3xl font-extrabold">Top Game Development Technologies Across Genre: A Comprehensive Guide</h1>
  <p className="font-thin text-gray-100">
    Today in the highly connected digital world, mobile games are in our daily lives, and platform issues for their development become a relevant topic. For the scenes that the viewers do not see, there are the talented game developers behind all who are working hard to build interactive games, by using their creativity and that of coding. There is always a chance you have had this idea of yours for designing the mobile game and just need the app development platform to do it. Well, you’re at the right spot.
  </p>
  <p className="font-thin text-gray-100">
    Making the correct choice of a game development platform is an essential requirement in the skill and professional midst of the mobile gaming world. It only goes to affect the performance of your game, the visuals, the user experience, as well as its level of success. We observe that the number of various choices is huge, which is why ensuring the game’s success might be done through a well-informed choice.
  </p>
  <p className="font-thin text-gray-100">
    This all-encompassing manual will take you all through the steps till when you finally settle on the best game development platform for mobile games. We are going to describe the characteristics of different game development technologies, and where they are useful to make you have the basis for making your choice. Thus, regardless of whether you’re a beginner or an advanced developer, this guide has got you covered with various chapters for diverse categories of gaming enthusiasts who are enthusiastic to start making games.
  </p>
              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Particular Process of Game App Development</h1>
  <p className="font-thin text-gray-100">
    Game developers have to pick the platform that is able to meet their needs after considering various essential aspects. Here are the key criteria to keep in mind when selecting a platform for your game development:
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Platform Compatibility:</strong> Allow for the development of a platform that you intend which is native to iOS or Android.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>User Friendliness:</strong> Look for a platform that has a well-structured interface, has detailed documentation, and avails of good community support. They will facilitate your production or help you to improve the development efficiency.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Gaming Performance:</strong> Opt for hardware with enough performance in terms of performance that won’t be sacrificed.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Graphics and Visuals:</strong> Analyze the system to accomplish a good balance between the graphics, effects, and animation.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Sound and Audio:</strong> Talk about ways the platform’s audio system makes the gaming experience more real for every player.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Scripting and Coding:</strong> Make sure that the platform provides support for your favorite scripting language or the most preferred coding framework.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Monetization and Analytics:</strong> Check for existing tools or partnerships provided with these solutions, which help not only in creating monetization strategies but also in the analysis of data.
    </li>
  </ul>
              </div>

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">List of Different Gaming Platforms</h1>
  <p className="font-thin text-gray-100">
    As the realm of mobile gaming expands at a tremendous pace today, billions of users globally are getting involved in the many sorts of games available at the moment.
    The app industry particularly gets its income from in-app purchases, advertising, and premium game sales which in turn make it a very attractive market for developers. The business world continues to evolve, and become more dynamic, and intuitive every day. It is the developers who should understand those processes and bring in innovative tech, to continue thriving.
    Now, let’s have an in-depth look at the top game development platforms for mobile devices.
  </p>
  
  <h2 className="text-2xl font-bold mt-6">1. Unity</h2>
  <p className="font-thin text-gray-100">
    Unity for mobile app development, specifically for creating games, is a streaming game development platform that supports the whole spectrum of platforms including iOS, Android, Mac OS X, and Linux. It boasts all the bells and whistles, a flourishing assets store, and a whole world of community which singles it out as one of the favorites among developers.
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Cross-platform development:</strong> Unity 3D mobile app development assures unification that enables the developers to produce games for various systems including iOS, Android, Windows, macOS, and other comparable platforms.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Extensive asset store:</strong> Software Unity 3D Asset Store consists of a huge collection of ready-made assets, ranging from 3D models and textures to audio files and plugins, which makes it more comfortable to add the thing that will enable your game to be unique and provide a good player experience.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Powerful graphics engine:</strong> Unreal Engine is averse to graphic engine which means that it gives the possibility of developing a high-quality visual which requires additional creation with visuals being the focal point.
    </li>
  </ul>
  
  <h2 className="text-2xl font-bold mt-6">2. Unreal Engine</h2>
  <p className="font-thin text-gray-100">
    Just like Unreal Engine, another game engine that is an exclusive game development platform for iPhone and Android devices is another very powerful tool. It is known for its impressive graphics, one of the most advanced features of developing mobile games as of now, which is what allows developers to create really amazing and engaging content.
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Cutting-edge graphics and rendering capabilities:</strong> Unreal Engine is an outstanding graphics engine that boasts high-quality graphs, and highly-evolved features like real-time ray tracing, dynamic lighting, and post-processing effects.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Blueprint visual scripting:</strong> As a part of the visual scripting system, Blueprints are the most common component in Unreal Engine. This feature covers game logic and behavior, which means that in order to code them, the developer does not need to be familiar with coding in any way.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Advanced physics simulation:</strong> The engine has come across as a strong state tech, enabling a variety of interactions within the virtual environment.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>High-quality animation tools:</strong> Unreal Engine provides many animation tools, including the skeletal animation and texture atlas together with the great handy feature that makes the creation of realistic and smooth-running animations easy.
    </li>
  </ul>
  
  <h2 className="text-2xl font-bold mt-6">3. Buildbox</h2>
  <p className="font-thin text-gray-100">
    The Buildbox platform is explicitly geared towards the production of a game that does not require sophisticated programming skills or an intuitive interface. It is really useful as nobody needs to use a code and anything can be developed within a very short period of time, which makes it perfect for beginners or mobile game developers who want to develop simple mobile games quickly.
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Drag-and-drop visual development:</strong> Using Buildbox, developers can create titles by dragging and dropping game characters. Without writing even a line of code. This gives an added benefit that it is really easy to use and so good for beginners as they get to learn fast.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Cross-platform game development framework and engine:</strong> Through this feature, games made via Buildbox can be played on several platforms such as iOS, Android, and Windows among many others.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Built-in monetization options:</strong> Buildbox lists the monetization possibilities that developers can pair with their games in order to turn that into revenue.
    </li>
  </ul>
              </div>

              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Exploring Unreal Engine AR and VR</h1>
  <p className="font-thin text-gray-100">
    With the advancement of technology, the industry of gaming brings new and old solutions. Another innovation in gaming production is the use of both augmented reality and virtual reality technology (AR and VR for short). AR/VR game development has radically changed the process of development for games and introduced a greater level of immersion that makes gamers feel part of the game.
    Unlike our normal real world, AR covers up the actual world with techno-data supplementary information, therefore, enhancing our comprehension of the world. From a different perspective, VR allows gamers and others to immerse in virtual worlds and thus translates them into worlds actually. AR and VR have thus contributed very much to greater player involvement by promoting vivid audiovisual interactions.
    Nevertheless, after that, we will examine the Unreal Engine AR (Augmented Reality) and VR (Virtual Reality) once again by looking at how the gaming industry has been transformed by AR and VR.
  </p>
  
  <h2 className="text-2xl font-bold mt-6">Here’s a more comprehensive look at the transformative power of AR and VR in the gaming industry:</h2>
  
  <h3 className="text-xl font-semibold mt-4">1. Nature Sometimes Skillful or in Real Life Motored or Gaming</h3>
  <p className="font-thin text-gray-100">
    Players, being a part of this next evolution, would not engage and connect with the games as they would be able to only in a very restricted sense. That is not true anymore or so, fortunately. AR and VR have converted games from abstract to physical dimensions, thus making the players participatory in the games. For example, AR and VR gamers gain the capability of sight, hearing, and feeling (to a certain extent) the effects of what they do and see. They might even feel like they are a part of the world, and things are moving only if they become more immersed.
    This real feeling that you spend your time in a digital space is completely created due to immersion that allows you to intercept all details. Besides, you are more likely to get involved in action and act, since the game world reacts instantaneously to whatever you do. Consequently, the story is engaging to the extent that the player feels closer to the storyline and experiences stronger feelings for the story.
  </p>
  
  <h3 className="text-xl font-semibold mt-4">2. Improved Gaming Experience</h3>
  <p className="font-thin text-gray-100">
    The aspiration of every developer is, undoubtedly, to give gamers an unstoppable experience of living their favorite game. Those small actions can become an important motivation for continuing to play, and who knows it may be monetized upwards and feed the creator some revenues. Therefore, it is a good idea for the developer to get ready for both game designers and gamers at the same time.
    But who knows: are there ways to improve the user experience using AR and VR technology? Similarly, an immersive game space or outstanding world that incorporates virtual and real worlds would be a perfect example. A player can act, execute any movement he can imagine, and feel and touch the characters he interacts with, be it in the form of bullets and beams, hits, and blades. This enhances the excitement and enjoyment of gamers, making the experience more interesting. Create a compelling introductory paragraph for an educational article that highlights the benefits of water conservation.
    The other reason they are video games is that creations of AR and VR. A player gets more and more interactive virtual currencies through reaching targets and learning, which is considered a new generation of rewards. Consider, for instance, AR games like Pokémon GO where virtual monsters that can be found all throughout the world are used and this induces players to walk around which isn’t typical about regular games.
  </p>
  
  <h3 className="text-xl font-semibold mt-4">3. Improved Storytelling</h3>
  <p className="font-thin text-gray-100">
    AR and VR can turn storytelling into a whole different level in the noteworthy sense. Take for example virtual reality where players could more heartily partake in the narrative of the game and see if the story is biased or not by exposing them to different perspectives and viewpoints.
    On the other hand, VR presents a completely different immersive experience because it builds a whole new world around the user by digitalizing all the surroundings, which means AR simply adds digital components on top of the real world. It provokes the excitement of the audience that characters naturally act from what happens in their dynamic environment.
  </p>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>
  <p className="font-thin text-gray-100">
    Selecting an appropriate platform such as game AI engine, Unity, or Unreal Engine coding is key to the mobile game's success. The article, an all-encompassing guide, has looked through some of the most popular game development platforms such as Unity, Unreal Engine, Buildbox, Solar2D, and GameMaker Studio 2. Each of the platforms provides different features, characteristics, and possibilities. The outstanding development of powerful games with the richness of a 3D environment is certainly the result of strict compliance with all these elements.
    Keep in mind the criteria for platform selection like compatibility, interface, graphics, audio, scripting/coding, assets management, and monetization/analytics. When taking into account all these criteria, you get the chance to devise the best platform for your game that matches the requirements and your team's abilities.
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
                  Top Game Development Technologies Across Genre: A Comprehensive Guide
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Particular Process of Game App Development 
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  List of Different Gaming Platforms
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Exploring Unreal Engine AR and VR</a>
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
