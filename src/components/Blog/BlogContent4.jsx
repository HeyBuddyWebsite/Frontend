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
            width={450}
            height={450}
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/VFX-in-Advertising_-Boosting-Engagement-and-Brand-Appeal-1024x576.png"
            alt="Image"
            className="h-full w-full object-auto"
          />
        </div>
        <div className="hidden xl:flex w-full h-full ">
          <Image
            loading="lazy"
            width={450}
            height={450}
            src={blogImage}
            alt="Image"
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
                  What is CGI: Definition, Development & Common Examples
                </h1>
                <p className="font-thin text-gray-100">
                  Ever wondered what made the Avatar movie a hit, or why there
                  is such a huge and crazy fan community for the Harry Potter
                  franchise?
                </p>
                <p className="font-thin text-gray-100">
                  Well, that’s pretty straightforward, this is because they take
                  us into a fantasy world where imagination comes to reality.
                </p>
                <p className="font-thin text-gray-100">
                  But how is it possible? How can they show something that does
                  not exist in reality? This is where CGI comes into the
                  picture, quite literally.
                </p>
                <p className="font-thin text-gray-100">
                  CGI is a technology used across industries to create stunning
                  visual experiences and captivate viewers. It is helping
                  businesses stand ahead of crowding competitors by making
                  attention-grabbing larger-than-life promotional campaigns.
                  They catch more views and build a strong brand.
                </p>
                <p className="font-thin text-gray-100">
                  In fact, the use of CGI has become so extensive that if we
                  name it, you have seen it.
                </p>
                <p className="font-thin text-gray-100">
                  So, what’s CGI, how it is used, and where to get it? Read this
                  blog to know everything about it.
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  What is CGI: Full Form, Meaning, and Concept Explanation
                </h1>
                <p className="font-semibold">
                  First things first, what does CGI stand for? The answer is
                  Computer-Generated Imagery.
                </p>
                <p className="font-thin text-gray-100">
                  Great, but still it might need to be more clear. So what we
                  can do is to see the two words of the term one by one.
                </p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    First comes “Computer-generated”, as you can guess, which
                    simply means something created by the computer or, better,
                    by using the computer.
                  </li>
                  <li className="font-thin text-gray-100">
                    Second, what about “imagery”, is it only limited to images?
                    No, not at all. It goes way beyond images and comprises any
                    2D or 3D visual created using computers. It can be a video,
                    animation, or a mix of all.
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  We will see these different uses in the upcoming sections. For
                  now, let’s first focus on getting a complete understanding of
                  the concept.
                </p>
                <p className="font-semibold">
                  At this point, you must be clear about what is CGI. But let’s
                  dive deeper, into what exactly CGI does in these visuals.
                </p>
                <p className="font-thin text-gray-100">
                  See, these computer-generated elements either replace or
                  augment real elements in real visual content as seen in
                  CGI-enhanced movies like the Avatar franchise.
                </p>
                <p className="font-thin text-gray-100">
                  On the other hand, they can even develop complete visual
                  content from scratch like images for product visualization or
                  an animated movie like “Toy Story” developing a complete
                  computer. That what is CGI animation.
                </p>
                <p className="font-thin text-gray-100">
                  This way, CGI helps achieve visuals that otherwise would be
                  impractical, expensive, or, even impossible in real life. The
                  potential of CGI technology is unlimited and that’s why it is
                  an integral part of various industries, from entertainment to
                  advertising and beyond.
                </p>
                <p className="font-thin text-gray-100">
                  Here are some examples, of how it is being used across
                  industries.
                </p>
                <p className="font-semibold">
                  Understand CGI Better with Common Examples and Use Cases
                </p>
                <p className="font-thin text-gray-100">
                  Truth bomb: Before, we said that CGI’s immense capabilities
                  have made it an integral part of some industries like
                  entertainment and advertising. But that’s not completely true.
                </p>
                <p className="font-thin text-gray-100">
                  The truth is CGI is part of our daily life. Whatever we see on
                  any screen from TV and mobile to OOH and DOOH, CGI is there.
                </p>
                <p className="font-thin text-gray-100">
                  Reason, CGI makes the content eye-catching to the extent that
                  we hardly see an advertisement or movie without CGI’s magic.
                </p>
                <p className="font-thin text-gray-100">
                  So here are some examples of how CGI is used across
                  industries.
                </p>
                <p className="font-semibold">CGI in Movies and Animation</p>
                <p className="font-thin text-gray-100">
                  Nowadays, CGI is such an important and even an integral part
                  of the movie-making process. So much so that we hardly come
                  across a film not using this technique to enhance the visual
                  experience of their fans.
                </p>
                <p className="font-thin text-gray-100">
                  We know that CGI effects add fictional elements and/or enhance
                  real-world objects and the overall original scene.
                </p>
                <p className="font-thin text-gray-100">
                  But that’s not it, CGI is also used to remove certain elements
                  that need to be removed for a better virtual experience.
                </p>
                <p className="font-thin text-gray-100">
                  A good example would be from Christopher Nolan’s film, The
                  Dark Knight, wherein the piston that helped flip the truck was
                  removed from the scene.
                </p>
                <p className="font-thin text-gray-100">
                  On the other hand, an example of bad CGI execution would be
                  the notorious Henry Cavill mustache CGI in Justice League.
                  Anyway, that totally depends on the 3D CGI company you have
                  partnered with. (Psst! Choose Us! Wink-wink!!)
                </p>
                <p className="font-semibold">CGI in Advertising</p>
                <p className="font-thin text-gray-100">
                  Advertising not only toes the lines of movies but may, in many
                  ways, even outdo them when it comes to CGI implementation.
                  There are nearly no ads without CGI making it eye-catching.
                  Remember the last cut in every advertisement video with
                  product visualization, that’s CGI, my friend.
                </p>
                <p className="font-thin text-gray-100">
                  And they have all the right to do so. After all catching
                  eyeballs is the sole purpose of advertising be it OOH or TV
                  commercials.
                </p>
                <p className="font-thin text-gray-100">
                  Along with that, CGIs are a great way to engage the audience
                  with the brand and its products. They can build hype for the
                  product before it has been manufactured. This will ensure that
                  once the product hits the market, it hits the ground running.
                </p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Here is an example of CGI developed by us at Hey Buddy:
                </h1>
                <p className="font-semibold">CGI in Video Games</p>
                <p className="font-thin text-gray-100">
                  Another industry that makes the most out of CGI is Games. The
                  technology forms the backbone of the industry. It provides,
                  literally, every element of the game - from lifelike
                  characters to intricate virtual landscapes.
                </p>
                <p className="font-thin text-gray-100">
                  Good CGI development leads to realistic and immersive Games
                  experiences with an amazing overall quality of modern video
                  games.
                </p>
                <p className="font-thin text-gray-100">
                  Here’s how CGI contributes to the game development process
                </p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Virtual Realm Construction:
                    <br />
                    CGI is used to construct lifelike characters, intricate
                    landscapes, and immersive environmental elements that gamers
                    interact with within the game. This forms the basis of an
                    engaging gameplay.
                  </li>
                  <li className="font-thin text-gray-100">
                    Realism Enhancement:
                    <br />
                    CGI is the reason gamers get engrossing experience in the
                    form of realistic animations, dynamic lighting, and
                    meticulously rendered details. It elevates the overall Games
                    experience and helps in building a loyal Games community.
                  </li>
                  <li className="font-thin text-gray-100">
                    Interactive Storytelling:
                    <br />
                    CGI blurs the lines between reality and fiction. It adds to
                    the impact of the Games narratives through interactive
                    elements and great visual effects complementing the
                    narrative.
                  </li>
                </ul>
                <p className="font-semibold">
                  CGI in Architectural Visualization
                </p>
                <p className="font-thin text-gray-100">
                  CGI is used to visualize architectural designs and concepts
                  before actual construction begins. This aids architects in
                  better presenting their ideas to clients and other
                  stakeholders, roping in more investors, and giving builders a
                  better idea to start with.
                </p>
                <p className="font-thin text-gray-100">
                  Architects can create interactive 3D models to let their
                  clients virtually walk through the architecture, explore
                  spaces before construction begins, and get a complete idea of
                  how space would look once completed.
                </p>
                <p className="font-thin text-gray-100">
                  On top of that, they can make quick and cost-effective changes
                  to their designs, to suit the unique requirements and wishes
                  of their client, bringing personalization to their delivery
                  and ensuring high client satisfaction.
                </p>
                <p className="font-thin text-gray-100">
                  And that is just only one aspect of how CGI helps architects,
                  the other aspect is that of marketing and presentation.
                </p>
                <p className="font-thin text-gray-100">
                  Architects and developers are using CGI visuals to market
                  their products and services. CGI helps present their projects
                  attractively to impress their potential clients and investors.
                </p>
                <p className="font-thin text-gray-100">
                  Thus, CGI helps all the stakeholders in the architectural
                  space to make informed decisions about designs, materials, and
                  layouts before committing to physical construction, saving
                  money and time all the while.
                </p>
                <p className="font-semibold">
                  CGI in the Medical and Scientific Field
                </p>
                <p className="font-thin text-gray-100">
                  CGI also helps medical professionals be well-positioned to
                  save lives. It aids them in better understanding medical
                  concepts and being better-trained for intricate and
                  high-stakes surgeries.
                </p>
                <p className="font-thin text-gray-100">Let’s see how.</p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Visualizing Concept
                    <br />
                    CGI is used to create detailed visualizations of intricate
                    scientific concepts and processes. It aids medical
                    professionals to easily understand complex systems with
                    complete clarity.
                  </li>
                  <li className="font-thin text-gray-100">
                    CGI is also utilized to develop interactive and immersive
                    educational materials. It enhances medical training by
                    providing realistic simulations for students whether through
                    enhanced 2D videos or 3D immersive experiences like AR and
                    VR.
                  </li>
                  <li className="font-thin text-gray-100">
                    Scientific Research Aid
                    <br />
                    With visual representations of data, CGI aids in the better
                    comprehension and accurate analysis of complex scientific
                    and medical information. This way it helps in better
                    decisions and scientific progress, enhancing patient care
                    and saving lives.
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  Apart from this, CGI also helps in the simulations and
                  training of professionals that we will see next.
                </p>
                <p className="font-semibold">CGI in Simulations and Training</p>
                <p className="font-thin text-gray-100">
                  CGI helps in creating an environment for experiential
                  learning. It enables the simulation of realistic environments
                  to help professionals practice high-stakes tasks such as
                  surgeries, flights, military operations, high-rise
                  constructions, etc. So that they can hone their skills without
                  real-world risks.
                </p>
                <p className="font-thin text-gray-100">
                  There are various types of CGIs used to achieve all the
                  above-mentioned objectives. Let’s now look at those.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Types of CGI</h1>
                <p className="font-semibold">2D CGI</p>
                <p className="font-thin text-gray-100">
                  As the name suggests, it is the creation of two-dimensional
                  images. These are mostly used in graphics, illustrations, and
                  simpler animations.
                </p>

                <p className="font-semibold">3D CGI</p>
                <p className="font-thin text-gray-100">
                  This is the most common type involving three-dimensional
                  images and animations to bring depth and realism into their
                  visual experience. This is the one mostly used in the
                  advertising, architectural, and entertainment industry
                  nowadays.
                </p>

                <p className="font-semibold">Web CGI:</p>
                <p className="font-thin text-gray-100">
                  This is commonly used for dynamic website content in the form
                  of CGI scripts. By dynamic we mean that the website can tailor
                  content and functionality based on individual user preferences
                  and interactions. This leads to a personalized user journey
                  that builds your brand and impresses the website visitors.
                </p>

                <p className="font-thin text-gray-100">
                  Now, comes the question, how to get CGI for your business? The
                  answer is simple, reach out to a CGI development company and
                  share your requirements. They will get you the right solution.
                  But before you do that you should know what is CGI development
                  and how to differentiate between Good CGI and Bad CGI.
                </p>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">CGI Development</h1>

                <p className="font-thin text-gray-100">
                  CGI development is the process of using programming languages
                  or modeling software to create 3D virtual objects. Then, as
                  per the need, these virtual objects are rendered using engines
                  to bring them to life. Let’s see them one by one
                </p>

                <p className="font-semibold">Technologies Used in CGI</p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Programming Languages: CGI scripts for web development are
                    achieved using languages like Perl, Python, or PHP.
                  </li>
                  <li className="font-thin text-gray-100">
                    3D Modeling Software: Tools like Autodesk Maya, Blender, and
                    Cinema 4D are used to create three-dimensional models and
                    animations.
                  </li>
                  <li className="font-thin text-gray-100">
                    Rendering Engines: Rendering engines like Arnold, V-Ray, and
                    Redshift process the 3D models and turn them into the final
                    images or animation sequences.
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  The use of this technology leads to amazing visual experiences
                  that earlier felt impossible. However, you should know that
                  just like any other technology there can be good or bad
                  outcomes depending upon how it has been used.
                </p>

                <p className="font-thin text-gray-100">
                  In this case, we mean how experienced and skilled the CGI
                  development team is. So, here we are sharing multiple aspects
                  based on which CGI can be judged on their quality.
                </p>
              </div>
              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Bad CGI vs Good CGI.
                </h1>

                <p className="font-semibold">Qualities of Bad CGI:</p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Uncanny Valley: This is where the digital representation
                    looks unnatural, unsettling, or overly artificial.
                  </li>
                  <li className="font-thin text-gray-100">
                    Lacks Detail: Subpar CGI lacks attention to detail and has
                    visual inconsistencies.
                  </li>
                  <li className="font-thin text-gray-100">
                    Disruption: Bad CGIs distract viewers instead of
                    complementing the story, they diminish the overall viewing
                    experience not enhance it
                  </li>
                </ul>

                <p className="font-semibold">Qualities of Good CGI:</p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Seamless Integration: High-quality CGI seamlessly integrates
                    with real-world elements, offering a consistent cohesive
                    visual experience.
                  </li>
                  <li className="font-thin text-gray-100">
                    Realism: Good CGI captures details for higher believability
                    of the created content, bringing realism.
                  </li>
                  <li className="font-thin text-gray-100">
                    Complements Storytelling: It enhances storytelling by adding
                    value to the narrative.
                  </li>
                </ul>

                <div className="container mx-auto">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <p className="font-semibold">Aspect</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">Integration</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">Realism</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">Storytelling</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-semibold">Good CGI</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">
                        Integrates with live-action footage for a cohesive
                        visual experience.
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">
                        Strives for realism, capturing details for
                        believability.
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">
                        Adds value to the narrative without overshadowing it.
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-semibold">Bad CGI</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">
                        Make digital representation look unnatural, unsettling,
                        or overly artificial.
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">
                        Lacks attention to detail, have visual inconsistencies.
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-thin text-gray-100">
                        Distracts viewers and diminishes the viewing experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="section7"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>
                <p className="font-thin text-gray-100">
                  CGI has made the impossible possible. It has revolutionized
                  the visual content across various industries from cinematic
                  experiences to medical practices and architectural design, CGI
                  has brought significant contributions.
                </p>
                <p className="font-thin text-gray-100">
                  We live in a world where catching eyeballs matters and CGI is
                  the best way to do that and with the growing advancement in
                  CGI technologies, it will play an even more significant role
                  in the coming times.
                </p>
                <p className="font-semibold">You need a trusted CGI Company</p>
                <p className="font-thin text-gray-100">
                  Get high-quality and ultra-realistic CGI to power your brand
                  story-telling. Hey Buddy offers CGI development services to
                  bring your ideas to life.
                </p>
              </div>
              <div
                id="section8"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>
                <p className="font-semibold">Q: What does CGI stand for?</p>
                <p className="font-thin text-gray-100">
                  {" "}
                  A: CGI stands for Computer-Generated Imagery.
                </p>

                <p className="font-semibold">Q: What does CGI mean?</p>
                <p className="font-thin text-gray-100">
                  {" "}
                  A: CGI means the use of computer graphics to create visual
                  content, such as images, videos, or animations.
                </p>

                <p className="font-semibold">
                  Q: How is CGI used in the film industry?
                </p>
                <p className="font-thin text-gray-100">
                  {" "}
                  A: CGI is extensively used in the film industry. It creates
                  visual effects, lifelike virtual characters, as well as entire
                  virtual environments for phenomenal storytelling and cinematic
                  experiences.
                </p>

                <p className="font-semibold">
                  Q: Can CGI be used for website development?
                </p>
                <p className="font-thin text-gray-100">
                  {" "}
                  A: Yes, CGI is used in creating dynamic and interactive
                  websites. Such websites alter their content based on users'
                  preferences, improving engagement and functionality.
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
                  "section7",
                  "section8",
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
                    What is CGI: Definition, Development & Common Examples
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    What is CGI: Full Form, Meaning, and Concept Explanation
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                    Here is an example of CGI developed by us at Hey Buddy
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Types of CGI</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">CGI Development</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">
                    Bad CGI vs Good CGI.
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section7")}
                >
                  <a className="font-thin text-gray-100">Conclusion</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section8")}
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
