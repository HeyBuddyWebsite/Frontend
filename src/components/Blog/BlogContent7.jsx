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
            : blogType === "Development"
            ? "border-[#26B403]"
            : blogType === "AI"
            ? "border-[#FF001F]"
            : "border-[#00FFE0]"
        }`}
      >
        <div className="xl:hidden w-full h-full ">
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/futuristic-business-office-space.jpg"
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
        <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10 flex flex-col gap-2 md:gap-[21px]">
          <div
            className={` flex  backdrop-blur-sm lg:items-center py-[5px] px-4 gap-[6px] w-fit rounded-full ${
              blogType === "Games"
                ? "bg-[#ff5c0024]"
                : blogType === "Development"
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
                  : blogType === "Development"
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
                  : blogType === "Development"
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
                <h1 className="text-3xl font-extrabold">
                  How to Hire The Best VFX Studios for Creating Cinematic
                  Visuals
                </h1>

                <p className="font-thin text-gray-100">
                  Have you ever imagined how in movies you see large-size
                  dragons roaring, breathing fire, and sending shivers down the
                  spine? Or ever thought about how a director shot actors and
                  aliens in a single shot interacting as if we have found a
                  living planet in our neighborhood? Well, the answer to all
                  such questions lies in VFX or visual effects created by some
                  of the best VFX studios in the world and their creative
                  experts. Visual Effects (VFX) is a cinematic brilliance that
                  helps create enhanced and manipulated images in collaboration
                  with real-life visuals and together showcases a non-existing
                  yet lively visual to the eyes of onlookers. Professional
                  visual effects artists working at the best VFX studios in
                  India and abroad integrate computer-generated imagery (CGI)
                  with live-action footage for films, advertisements,
                  television, and other digital platforms. This in turn
                  showcases an intuitive visual and storytelling to the eyes of
                  onlookers and grabs their attention.
                </p>

                <p className=" font-semibold">
                  So, if you are looking forward to hiring commercial VFX
                  studios for your next project, then you've come to the right
                  place.
                </p>

                <p className="font-thin text-gray-100">
                  Here in this blog, gain substantial tips related to hiring a
                  partner among the best VFX studios, get to know the service
                  they offer, and top 10 companies to consider ahead.
                </p>

                <p className="font-thin text-gray-100">
                  With no further ado, let's get started on the same.
                </p>
                <p className=" font-semibold">What is a VFX Company?</p>

                <p className="font-thin text-gray-100">
                  A VFX company or an agency is a creative studio that features
                  a team of innovative, technically skilled, and creative
                  professionals. A studio has animators, visual effects artists,
                  and ideal technicians who collaboratively work on your visual
                  project as per the business requirement.
                </p>

                <p className="font-thin text-gray-100">
                  With the help of a result-oriented international VFX studio in
                  India, you find the flexibility to create engaging visuals to
                  capture the target audience's attention. No matter what, if
                  you want to make full-fledged films, short films,
                  documentaries, advertisements, website visuals, or any
                  creative content, simply hire a VFX agency to create
                  CGI-generated visuals and integrate them best with live-action
                  footage.
                </p>
                <p className="font-semibold">
                  What Services do VFX Studios Offer?
                </p>

                <p className="font-thin text-gray-100">
                  When it comes to hiring an agency from an extensive list of
                  VFX studios, you should be aware of the services offered by
                  the company.
                </p>

                <p className="font-thin text-gray-100">
                  For reference, here's the list of services that must be
                  offered by the company you rely on.
                </p>

                <p className=" font-semibold">
                  Visual Effects Creation & Pre-Visualization:
                </p>
                <p className="font-thin text-gray-100">
                  One of the integral services that VFX studio offers is the
                  creation of visual effects and finalizing the
                  pre-visualization effects. Based on the conceptualizing
                  discussions and blueprint, VFX artists will create the visuals
                  with the help of pre-visualization tools and techniques. As
                  part of this service, sequences are decided and created with
                  the help of software and references from the storyboard.
                </p>

                <p className=" font-semibold">CGI & Animation Creation:</p>
                <p className="font-thin text-gray-100">
                  A leading VFX agency is further expert in creating
                  computer-generated imagery (CGI) and attractive animations.
                  These two visual effects are combined with the real-time
                  footage to bring life to the environment and showcase what is
                  desired by the client.
                </p>

                <p className=" font-semibold">Visual Composting:</p>
                <p className="font-thin text-gray-100">
                  The best VFX studios in Mumbai or anywhere across India
                  provide composting services to clients. Composting is a
                  critical aspect of VFX services that features combining the
                  live-action footage with CGI and special effects. For doing
                  this complex task, it is necessary to rely on professional CGI
                  experts and special effects artists.
                </p>

                <p className=" font-semibold">3D Modelling:</p>
                <p className="font-thin text-gray-100">
                  A trusted VFX studio is further expert in creating 3D modeling
                  and texturing the right set of characters, backgrounds, and
                  situations, and bringing depth to the ecosystem to make it
                  look real.
                </p>

                <p className=" font-semibold">Special Effects:</p>
                <p className="font-thin text-gray-100">
                  This includes the end-to-end creation of physical simulations,
                  explosions, pyro techniques, and other effects for action
                  footage. Moreover, special effects include additional digital
                  effects for an action sequence.
                </p>

                <p className=" font-semibold">Motion Capture:</p>
                <p className="font-thin text-gray-100">
                  Another integral service offering of the best VFX studios is
                  motion capture. This service comprises capturing the real-time
                  movements of characters and turning them into animation
                  effects or creatures.
                </p>
                <p className="font-semibold">List of VFX Studios in India</p>

                <p className=" font-semibold">
                  Here's the list of 10 major VFX studios in India that you can
                  think of hiring for your next set of projects.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">Technicolor</li>
                  <li className="font-thin text-gray-100">Prime Focus</li>
                  <li className="font-thin text-gray-100">FUJIFILM</li>
                  <li className="font-thin text-gray-100">DQ Entertainment</li>
                  <li className="font-thin text-gray-100">
                    DNEG Creative Services
                  </li>
                  <li className="font-thin text-gray-100">Rotomaker</li>
                  <li className="font-thin text-gray-100">
                    Maya Digital Studios
                  </li>
                  <li className="font-thin text-gray-100">Xentrix Studios</li>
                  <li className="font-thin text-gray-100">Halo Media Works</li>
                  <li className="font-thin text-gray-100">Dawn Digital</li>
                </ul>

                <p className="font-thin text-gray-100">
                  And, the list goes on.
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Top Reasons to Hire Artists from VFX Studio
                </h1>

                <p className="font-thin text-gray-100">
                  Certainly, a VFX artist is a creative professional who
                  possesses the skills to create stunning visuals that appear
                  real and attention-grabbing to all. There are different
                  reasons on your part to collaborate with a trusted VFX studio.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    For creating attractive visual effects for your movie, short
                    video, advertisement, website, or any business-specific
                    project.
                  </li>
                  <li className="font-thin text-gray-100">
                    Get in touch with VFX experts to create stunning-looking
                    explosions, fire, water, virtual ecosystem, and other such
                    effects.
                  </li>
                  <li className="font-thin text-gray-100">
                    If you already have the real-time footage with you combine
                    it with high-quality visuals by relying on composting
                    assistance.
                  </li>
                  <li className="font-thin text-gray-100">
                    Save the 3D rendering cost with the help of marketing
                    professionals who have the required set of hardware and
                    software.
                  </li>
                  <li className="font-thin text-gray-100">
                    Let a professional create visual effects for you, while you
                    focus on other important areas of business.
                  </li>
                </ul>
                <p className=" font-semibold">
                  Who Can Hire Services from a VFX Studio?
                </p>
                <p className="font-thin text-gray-100">
                  There is a wide range of companies and businesses that can
                  look forward to avail of VFX services from a reliable studio.
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Film production companies
                  </li>
                  <li className="font-thin text-gray-100">
                    Advertising agencies
                  </li>
                  <li className="font-thin text-gray-100">
                    Educational institutes
                  </li>
                  <li className="font-thin text-gray-100">Media houses</li>
                  <li className="font-thin text-gray-100">Gaming companies</li>
                </ul>

                <p className=" font-semibold">
                  How to Hire an Ideal VFX Studio?
                </p>
                <p className="font-thin text-gray-100">
                  It's a matter of great concern to look at what a VFX studio
                  can do for you. Follow the below-mentioned tips while hiring a
                  creative VFX agency in India.
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Know their expertise: This is one of the first tips you must
                    follow when thinking of hiring a VFX agency in India. Get to
                    know the total years of experience that a studio has and
                    their team of creative professionals.
                  </li>
                  <li className="font-thin text-gray-100">
                    Check their portfolio: Don't forget to check out the VFX
                    portfolio of an agency to understand better about their past
                    work. Doing this will give you the versatile work of the
                    agency and any popular task done in the past.
                  </li>
                  <li className="font-thin text-gray-100">
                    Research the company's reputation: It is a matter of great
                    significance to check the reputation of a VFX agency based
                    on its client list and past work. Look at their reviews and
                    client testimonials to get valuable insights about the
                    studio. Also, if possible, then try to communicate with
                    their clients to get real-time reviews of the company.
                  </li>
                  <li className="font-thin text-gray-100">
                    Know the technical capabilities: You must ensure the fact
                    that the VFX studio that you choose must have all the latest
                    technical knowledge, infrastructure, tools, and complete
                    setup. To create the highest value of visual and special
                    effects, it is important that an agency has all the
                    technical capabilities.
                  </li>
                  <li className="font-thin text-gray-100">
                    Discuss budget & timeline: When you follow all the tips
                    mentioned above, then discuss your requirements with a
                    selected company along with the timeline. Make sure to
                    maintain seamless transparency with the studio and expect
                    them to follow the same.
                  </li>
                </ul>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Final Thoughts</h1>
                <p className="font-thin text-gray-100">
                  In the rapidly growing digital space, creating attractive
                  visuals for films, television, and ads matters the most to
                  capture the audience's attention.
                </p>
                <p className="font-thin text-gray-100">
                  Better visual effects imply extensive attention that leads to
                  a growing business.
                </p>
                <p className="font-thin text-gray-100">
                  Simply push your creative boundaries with the help of one of
                  the best VFX studios in India and create intuitive visuals
                  within your budget.
                </p>
                <p className=" font-semibold">
                  Rely on a creatively superior, technically sound, and
                  innovative VFX studio to start working on your project.
                </p>
                <p className="font-thin text-gray-100">
                  And ready to bring in more audience and onlookers to your
                  final product.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>
                <p className=" font-semibold">What does a VFX studio do?</p>
                <p className="font-thin text-gray-100">
                  VFX combines computer-generated (CG) sequences with
                  live-action footage. This combination together creates visuals
                  that are otherwise difficult or even impossible to capture in
                  real life. This requires a combination of technical and
                  artistic skills to bring imaginations to life such as mythical
                  creatures, extra-terrestrial landscapes, and of course
                  fire-breathing dragons to answer the starting question of this
                  blog.
                </p>

                <p className=" font-semibold">What is the full form VFX?</p>
                <p className="font-thin text-gray-100">
                  VFX stands for Visual Effects. These are the special effects
                  applied to videos to create visuals with the highest possible
                  viewing experience.
                </p>

                <p className=" font-semibold">
                  Which is the biggest VFX studio in India?
                </p>
                <p className="font-thin text-gray-100">
                  The biggest VFX studio in Gurgaon, India, is Hey Buddy. They
                  have delivered several projects with exceptional quality and
                  user experience.
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
                  : blogType === "Development"
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
                    : blogType === "Development"
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
                items={["section1", "section2", "section3", "section4"]}
                currentClassName={`border-l-4 ${
                  blogType === "Games"
                    ? "border-[#FF5C00] text-[#FF5C00]"
                    : blogType === "Development"
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
                    How to Hire The Best VFX Studios for Creating Cinematic
                    Visuals
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    Top Reasons to Hire Artists from VFX Studio
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">Final Thoughts</a>
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
