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
                <h1 className="text-3xl font-extrabold">Captivating Audiences: Animation Techniques and Trends</h1>
  <p className="font-thin text-gray-100">
    In the rapidly growing and evolving world of entertainment, digital marketing, and technology, animation techniques play a pivotal role in grabbing the attention of the audience. It's a transformative and creative technology that captivates the audience, reshapes industries and enhances the realistic visual experiences of people.
  </p>
  <p className="font-thin text-gray-100">
    It's right to say the fact that the utilization of 2D and 3D animation principles and techniques is not confined to the limits of creating entertaining cartoons. This creative tech has ideally infused into the realm of digital advertising and content creation. Here in this blog, you will come across the key techniques of animation, and their significance, followed by recent trends to engage more and more people to acquire expected results.
  </p>
  <p className="font-thin text-gray-100">
    So, let's get started on the same.
  </p>
              </div>

              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Animation Fundamentals</h1>
  <p className="font-thin text-gray-100">
    When it comes to discussing the key animation fundamentals for creating an engaging motion project, there are 12 principles of animation. Laid down as per The Illusion of Life: Disney Animation in the 1930s by Frank Thompson and Ollie Johnston, the 12 principles of the animation method are crucial to follow when creating an interactive object.
  </p>
  <p className="font-thin text-gray-100">
    Here’s the list of animation fundamentals or principles:
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Timing & Spacing:</strong> This principle refers to the technique of giving characters and objects a number of frames and placement to move according to the law of physics. For instance, if a character is moving in the North direction straight for 5 seconds and using that particular spacing to position himself.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Squash and Stretch:</strong> This principle implies giving objects the flexibility to move, change shape, contract, squash, or stretch as per the animation requirement. Take, for example, the face of a human animated character with a different set of expressions.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Anticipation:</strong> It refers to getting ready for the object to perform a specific action and letting the audience be ready for the same. One of the best examples to talk about is an animated character playing baseball and a batsman is ready to hit the ball. As per the anticipation principle, the audience is anticipating the batsman to hit the ball after the bowler balls the same.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Ease in and Ease Out:</strong> Any object that appears, moves, or stops requires a basic animation technique called ease in and ease out. Suppose, a car is moving in a certain direction, starts accelerating at a particular speed, moves in a direction, and then stops. This process is called ease in and ease out of the animated car which is accelerated and then decelerated.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Follow Through and Overlapping Action:</strong> This technique refers to the separate body movement of an animated character. Any animated person is moving implying his hands and feet are moving in a particular proportion. At any movement, the person stops, then hands and feet stand still in a specific direction or position.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Arcs:</strong> It refers to the smooth movements of objects and animated characters in a different set of directions as per the creator's requirement. The best example to understand is when a character is turning his head, then his upper and lower body also move in a specific direction.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Exaggeration:</strong> Simply refers to the adding push movements to any object or a character. You must've seen cartoon characters pushing a large stone by applying a small force to the same. This animation method called exaggeration is used to easily push the rock.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Solid Drawing:</strong> One of the integral parts of 2D animation trends is creating solid drawing which implies drawing an accurate drawing of an object or character with a specific volume, weight, balance, shadow, and other characteristics.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Appeal:</strong> It simplifies adding more appeal in different layers that could be different colors, sizes, quantities, movements, or anything like that. Imagine a character of slim size in physical appeal suddenly gains muscles with grown arms, chest, legs, and more.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Straight Ahead Action & Pose to Pose:</strong> It’s like adding different poses to a character while in movement and creating a spontaneous course of action. For example, an animated character landing on the ground from the sky poses like falling down below or coming down with the help of a parachute.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Secondary Action:</strong> It refers to adding a second course of action to further emphasize the same and create more convincing visuals to the eyes of the audience and capture their attention. Let’s just say two characters are talking to each other in one frame, which is a primary course of action. And behind a waiter is serving the meal is a second course of action.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Staging:</strong> Lastly, staging is all about how you set a stage for an animated visual to capture the eyeballs of the audience. It’s more about setting up the background, placement of characters, adding props, and more.
    </li>
  </ul>
              </div>

              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Significance of Animation in Creating Engaging Content</h1>
  <p className="font-thin text-gray-100">
    As you already know, this era is dominated by visual storytelling more compared to just adding information. Thus, the strategic creation of animation concepts can have a positive significance on the mindset of the audience and is sure to catch their attention at first glance.
  </p>
  <p className="font-thin text-gray-100">
    So, here's the list of benefits associated with animation creation for entertainment and for marketing purposes:
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Animation and Visual Storytelling:</strong> Animation is attention-grabbing in terms of showcasing creatively infused characters to grab the audience's eyes with ease. The colorful and dynamically created animations have a better attention-grabbing rate.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Dynamic Objects and Characters:</strong> With the help of basic to complex animation concepts and techniques, you can create dynamic objects and characters to grab maximum attention.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>High-Quality Animated Visuals:</strong> High-quality animated visuals contribute towards visually pleasing appeal and enhance your brand's name to an optimum extent.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Narrative Aspect:</strong> Animation creates a narrative aspect or a kind of storyline to further catch the attention of the target audience.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Unique Brand Appeal:</strong> Using animation implies showcasing a unique brand appeal to the audience.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Consistent Branding:</strong> Consistent usage of animations across social media and different marketing channels surely identifies your brand as unique among competitors.
    </li>
  </ul>
  <p className="font-thin text-gray-100">
    To be precise, animation techniques used by brands will have compelling significance to capture the audience's attention. It further provides the flexibility to showcase serious, humorous, and graphical characters.
  </p>
              </div>

              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Some Popular Animation Industry Trends in 2024</h1>
  <p className="font-thin text-gray-100">
    With each year comes defining technology and animation trends that will continue to dominate different sets of industries. Similarly, there are different animation industry trends that will enhance character creation, digital marketing efforts, social marketing, and campaign efforts to an optimum extent. For reference, here we have a list of some popular animation trends that will keep the industry growing and expanding.
  </p>
  <ul className="list-disc ml-8">
    <li className="ml-5 font-thin text-gray-100">
      <strong>Higher Frame Rate:</strong> More rendering resources allow for animation that is now no longer just fluid but also hypertrophic; going twice or even four times the norm. This is extremely evident in 3D movies which feel one with the realistic flow of the content.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Cinema-Splosions:</strong> Think of a GIF that is not very lively. Then, an elephant smashes into the scene, destroys the table, and Star Michelin dishes come up. In 1 to 5 seconds, everything has taken place. These “Cinematic-explosions” are fired up with animation acrobatics to glue viewers to “hit the repeat button.”
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Material Illusions:</strong> Animators are using their craft – imagination – to create surfaces that change dramatically, such as metal turning into shimmering water or anvils exploding into smoke. Unreal Engine 5 is an example of cutting-edge technology providing superior quality and realism.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Hyper-Realism and 3D:</strong> This trend features super dramatic and visual 3D animations that collapse the physical and digital worlds. Artists use their creativity to capture surroundings in a way that leaves a lasting impression.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Disruptive Retro:</strong> Combining retro aesthetics with neo-modernity, animators create unique characters with neon colors, pixel art, or bugs, merging past and future styles.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Experimental Minimalism:</strong> Animation artists are using minimalistic details to create powerful and expressive characters with fewer elements, turning negative spaces into a form of artistic expression.
    </li>
    <li className="ml-5 font-thin text-gray-100">
      <strong>Immersive Experiences:</strong> VR and AR are becoming the new arenas for animation, with a focus on creating virtual worlds and interactive storytelling narratives for future development.
    </li>
  </ul>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                 <h1 className="text-3xl font-extrabold">Conclusion</h1>
  <p className="font-thin text-gray-100">
    In conclusion, animation is a canvas for showing the utmost creativity of thoughts and innovation, majorly to capture the attention of the audience. It's a creative notion for experts to showcase attractive visuals to the eyes of the target audience and meet the purpose of marketing, entertainment, and more.
  </p>
  <p className="font-thin text-gray-100">
    As an enterprise, you have the flexibility to embrace the capabilities of animation techniques from a professional partner and attract the attention of customers. Therefore, leverage this creativity and create user-friendly designs, characters, objects, interfaces, and more.
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
                  Captivating Audiences: Animation Techniques and Trends
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  Animation Fundamentals   
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  Significance of animation in creating engaging content
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Some Popular Animation Industry Trends in 2024</a>
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
