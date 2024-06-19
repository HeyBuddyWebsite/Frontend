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
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/woman-with-vr-glasses-futuristic-city.jpg"
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
                  VR Business Applications: Unlocking Possibilities Beyond
                  Gaming
                </h1>
                <p className="font-thin text-gray-100">
                  Till we invent time travel, multi-dimensional travel, or any
                  other sci-fi-inspired traveling - Virtual Reality (VR) is the
                  only technology, for now, that can take you to a different
                  reality.
                </p>
                <p className="font-thin text-gray-100">
                  All thanks to its ultra-realistic visuals and real-time
                  interactive experience, and a smart environment, with AI
                  coming into the picture.
                </p>
                <p className="font-thin text-gray-100">
                  VR immerses users into a seemingly real environment as if they
                  are right there in it, living a different life.
                </p>
                <p className="font-thin text-gray-100">
                  This unique capability has found its most usage in the arena
                  of gaming. However, there are hundreds of VR business
                  applications that can prove a pathbreaker for the businesses
                  that deploy it.
                </p>
                <p className="font-thin text-gray-100">
                  In this blog post, this is exactly what we are going to
                  discuss, starting right from the advancement in VR VR
                  technology to its diverse business applications beyond gaming.
                </p>
                <p className="font-thin text-gray-100">So let’s start.</p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Advancements in VR Technology
                </h1>
                <p className="font-thin text-gray-100">
                  Driven by continuous improvements in optics, displays, and
                  processing power, VR technologies have made significant
                  strides lately. The market-disrupting VR headsets, such as the
                  Meta Quest, that offer 360-degree views, high-resolution
                  displays, and powerful processors, have allowed users to dive
                  into a virtual environment where they are free to explore and
                  interact.
                </p>
                <p className="font-thin text-gray-100">
                  Also, in the face of it, this appears more of a gaming
                  functionality but this is where you are wrong. Going beyond
                  gaming, these have paved the way for new and exciting
                  applications across various sectors.
                </p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Top Technological Advancements Powering VR
                </h1>
                <p className=" font-semibold">
                  Improved Graphics and Resolution
                </p>
                <p className="font-thin text-gray-100">
                  Modern VR systems are now capable of utilizing high-resolution
                  screens to deliver stunning 3D graphics rendering. This
                  results in sharper images, minimum pixelation, and more
                  realistic images that convince the audience.
                </p>
                <p className="font-thin text-gray-100">
                  Users can see intricate details in virtual environments that
                  help keep them engaged. So whether it is a game where they
                  need to explore architectural designs, or educational
                  simulations imparting history lessons, the explorers in both
                  the care are engaged.
                </p>

                <p className=" font-semibold">Haptic Feedback</p>
                <p className="font-thin text-gray-100">
                  The other game-changer for VR has been the Haptic feedback
                  technology. For those who don’t know - Haptic technology
                  enables users to feel sensations through touch. The advent of
                  haptics in VR has added a new layer of realism.
                </p>
                <p className="font-thin text-gray-100">
                  Now imagine the level of experience when your are in a VR
                  experience and reach out to touch a virtual object. You can
                  feel the resistance or texture of the object. So if you are a
                  hospital offering training to its surgeon through VR, haptic
                  gives them a tactile sensation that mimics the feel of real
                  tissues, providing invaluable feedback to the surgeon.
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    This helps surgeons develop precise motor skills and tactile
                    sensitivity that improves their surgical proficiency while
                    enhancing patient safety by reducing the risk of errors
                    during actual surgeries.
                  </li>
                  <li className="font-thin text-gray-100">
                    Moreover, developers are on with their work towards more
                    sophisticated haptic devices, such as gloves or vests, to
                    simulate various tactile sensations.
                  </li>
                </ul>

                <p className=" font-semibold">Motion Tracking Systems</p>
                <p className="font-thin text-gray-100">
                  Further, there have been significant advancements towards
                  accurate motion tracking. This is crucial to deliver a highly
                  interactive VR experience that responds to every user's move.
                </p>
                <p className="font-thin text-gray-100">
                  Systems like inside-out tracking use cameras or sensors
                  mounted on the headsets to monitor users' movements. They
                  relay the information gathered information on the user’s face
                  and their surroundings, allowing the system to understand
                  where you are and how you're moving.
                </p>
                <p className="font-thin text-gray-100">
                  This tracking ensures that users' actions are aligned
                  seamlessly with what they see in the headset.
                </p>
                <p className="font-thin text-gray-100">
                  So, if an employee is going through training in the VR
                  experience which involves assembling machinery, the employee
                  can grab virtual components, move them into position, and
                  manipulate them like handling real objects. The system
                  precisely tracks their hand movements and gestures for
                  seamless interaction with virtual elements. Result: valuable
                  hands-on practice in a safe and controlled environment.
                </p>

                <p className=" font-semibold">Advanced Hardware</p>
                <p className="font-thin text-gray-100">
                  Lastly, there have been continuous advancements in virtual
                  reality hardware. The list starts with wireless headsets
                  allowing freedom of movement, essential for natural
                  interactions. Additionally, headsets have become lighter and
                  more comfortable with each passing innovation to encourage
                  longer sessions without discomfort.
                </p>
                <p className="font-thin text-gray-100">
                  Eye-tracking technology for foveated rendering i.e. the VR
                  system focuses on rendering in high detail of the object that
                  eyes are looking.
                </p>
                <p className="font-thin text-gray-100">
                  We have already talked about haptic feedback technology in
                  general but we have already moved ahead in this direction.
                  Realistic haptic feedback does not just offer simple
                  vibrations.
                </p>
                <p className="font-thin text-gray-100">
                  There are devices that simulate pressure, temperature, and
                  even texture variations.
                </p>
                <p className="font-thin text-gray-100">
                  Next, Field of view (FoV) improvements. The visual scope has
                  been widened, making the virtual world more expansive.
                </p>
                <p className="font-thin text-gray-100">
                  Looking to the future, we can expect further advancements in
                  display quality, comfort, and affordability make VR more
                  preferable and affordable. For business looking for innovative
                  solutions, VR poses a great option.
                </p>
                <p className="font-thin text-gray-100">
                  However, here would like to clarify that the advancements we
                  mentioned such as wireless headsets, high-definition images,
                  and powerful processors are just the tip of the iceberg.
                </p>
                <p className="font-thin text-gray-100">
                  The integration of artificial intelligence into VR experiences
                  will power the interactivity and intelligence multiple times,
                  making it more realistic and responsive.
                </p>
                <p className="font-thin text-gray-100">
                  Now. let’s have a look on the various application of virtual
                  reality in business.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Business Applications of Virtual Reality: Next-level User
                  Experience Assured
                </h1>

                <p className="font-thin text-gray-100">
                  With the ability to offer a great user experience, VR business
                  applications are numerous. While for their employees,
                  businesses use it to impart training and education, they can
                  also offer a great user experience to build their brand.
                </p>

                <p className="font-thin text-gray-100">
                  Let’s look at some of the amazing use cases across industries.
                </p>

                <p className=" font-semibold">
                  VR in eCommerce for Impressive Product Visualization
                </p>

                <p className="font-thin text-gray-100">
                  In the competitive domain of e-commerce, VR can be used for
                  virtual stores, fitting rooms, and product visualization where
                  customers can interact with products in 3D space. They can try
                  them on, and make a better purchase decision.
                </p>

                <p className="font-thin text-gray-100">
                  Additionally, VR enables interactive product demonstrations,
                  virtual tours of eCommerce stores in VR for a better
                  connection with the customers.
                </p>

                <p className="font-thin text-gray-100">
                  However, the most outstanding benefit is that VR has the
                  ability to utilize impactful techniques like storytelling and
                  gamification. This guarantees a significant boost to sales and
                  fosters long-term customer relationships.
                </p>
                <p className="font-semibold">Education</p>
                <p className="font-thin text-gray-100">
                  In 2020, PwC conducted a study on VR’s capability to deliver
                  learning outcomes, and it found the following:
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    <strong>
                      VR training is four times faster than traditional methods
                    </strong>{" "}
                    with four times better attention paid by the participants.
                  </li>
                  <li className="font-thin text-gray-100">
                    <strong>VR training can be 52% more cost-effective</strong>{" "}
                    than classroom learning.
                  </li>
                  <li className="font-thin text-gray-100">
                    <strong>78% of VR participants prefer v-learning</strong> to
                    more traditional modalities.
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  These stats are enough to show the power of VR in delivering
                  high-quality education. It leads to significantly faster
                  learning, better retention, and more confident learners.
                </p>
                <p className="font-thin text-gray-100">
                  To give an example, VR is able to put students in realistic
                  scenarios for them to better explore historical events, visit
                  ancient civilizations, or even dissect virtual organisms.
                  Something they would hardly forget once experienced.
                </p>

                <p className="font-semibold">Health</p>
                <p className="font-thin text-gray-100">
                  Virtual-reality simulations use actual diagnostic images (such
                  as CAT scans or ultrasounds) to construct realistic 3D models
                  of a patient's anatomy. This enhances the understanding of
                  surgeons about the case and helps them better plan and
                  practice complex procedures in advance.
                </p>

                <p className="font-semibold">Architecture and Real Estate</p>
                <p className="font-thin text-gray-100">
                  Businesses in real estate can leverage VR to create immersive
                  walkthroughs of buildings and properties.
                </p>
                <p className="font-thin text-gray-100">
                  They can let their clients virtually explore homes, offices,
                  or prospective construction projects before they are even
                  built. This way they will provide their clients with better
                  information and ease their decision-making.
                </p>
                <p className="font-thin text-gray-100">
                  And as per a study by the Harvard Business Review found that
                  when provided with easy-to-understand information, customers
                  were more likely to make a purchase decision.
                </p>
                <p className="font-semibold">
                  Collaborative Work Environments:
                </p>

                <p className=" font-semibold">
                  For business with teams distributed around the world, VR
                  facilitated better collaboration by offering shared virtual
                  spaces.
                </p>

                <p className="font-thin text-gray-100">
                  They can conduct meetings and brainstorming sessions, carry
                  out design reviews, work in sync while breaking geographical
                  boundaries, and achieving faster and smoother communication.
                </p>

                <p className="font-thin text-gray-100">
                  Additionally, these team members can meet each other in a
                  virtual environment, get engaged in activities that foster
                  creativity and productivity.
                </p>

                <p className="font-thin text-gray-100">
                  There are several such use cases spread across industries. At
                  Hey Buddy, we ourselves have developed and delivered several
                  VR apps for businesses. Check out our case study section.
                </p>

                <p className=" font-semibold">
                  Future of VR in Business Applications: Projected Growth
                </p>

                <p className="font-thin text-gray-100">
                  The future of VR seems immensely positive.
                </p>

                <p className="font-thin text-gray-100">
                  The market is expected to grow rapidly with a compound annual
                  growth rate of 57% between 2021 and 2028.
                </p>

                <p className="font-thin text-gray-100">
                  According to a report by Statista, the global VR market size
                  was 29.7 billion in 2020 and is expected to reach 134.2
                  billion by 2028.
                </p>

                <p className="font-thin text-gray-100">
                  This is due to the increasing demand by the user for
                  higher-level user experience and the capabilities of immersive
                  technology like AR and VR to deliver the same.
                </p>

                <p className="font-thin text-gray-100">
                  VR is making significant strides in sectors like gaming, but
                  its potential in education, e-commerce, and real estate is not
                  small.
                </p>

                <p className="font-thin text-gray-100">
                  Additionally, with the advancements in technology and the
                  decreasing cost of VR headsets, we can safely say that the
                  technology will drive the growth of the market by being more
                  accessible and effective.
                </p>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>

                <p className="font-thin text-gray-100">
                  In conclusion, as businesses and consumers embrace the
                  immersive possibilities of VR, it is not a distant future when
                  we will witness virtual and physical realities seamlessly
                  coexisting. Therefore, opening up new frontiers of human
                  experience and innovation.
                </p>
              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>

                <p className="font-semibold">What are VR business apps?</p>
                <p className="font-thin text-gray-100">
                  VR business apps are software applications. They are
                  specifically designed to meet various business requirements
                  such as training, collaboration, visualization, and customer
                  engagement.
                </p>
                <p className="font-semibold">
                  What are the key business applications of VR?
                </p>
                <p className="font-thin text-gray-100">
                  VR applications encompass a wide range of uses:
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Virtual training simulations
                  </li>
                  <li className="font-thin text-gray-100">
                    Immersive data visualization
                  </li>
                  <li className="font-thin text-gray-100">
                    Virtual collaboration
                  </li>
                  <li className="font-thin text-gray-100">
                    Virtual prototyping and design
                  </li>
                  <li className="font-thin text-gray-100">
                    Virtual customer experiences
                  </li>
                </ul>
                <p className="font-semibold">
                  How can virtual reality be applied in business settings?
                </p>
                <p className="font-thin text-gray-100">
                  Virtual reality finds application in various domains such as
                  training, marketing, sales, product development, design and
                  prototyping. Along with that it also contribute in remote
                  collaboration, and customer engagement.
                </p>
                <p className="font-semibold">
                  What are some examples of business applications of virtual
                  reality?
                </p>
                <p className="font-thin text-gray-100">
                  Business applications of virtual reality include virtual
                  training programs, virtual product demonstrations, virtual
                  meetings and virtual prototyping.
                </p>
                <p className="font-semibold">
                  How does virtual reality contribute to business application?
                </p>
                <p className="font-thin text-gray-100">
                  Virtual reality provides immersive solutions for training,
                  visualization, collaboration, and customer engagement.{" "}
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
                    VR Business Applications: Unlocking Possibilities Beyond
                    Gaming
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    Advancements in VR Technology
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                    Top Technological Advancements Powering VR
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">
                    Business Applications of Virtual Reality: Next-level User
                    Experience Assured
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">Conclusion</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
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
