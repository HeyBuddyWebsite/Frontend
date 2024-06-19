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
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogmob3.png"
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
                  AI in Games: Refining the Way Games Developed & Play
                </h1>
                <p className="font-thin text-gray-100">
                  AI in Games is no longer a new phenomenon. It's trending,
                  extensively adapted, and rapidly evolving. Just like
                  Artificial Intelligence (AI) has disrupted all major
                  industries like Healthcare, Hospitality, Banking,
                  Entertainment, and more. And, so, the Games industry is not
                  left behind with the profitable and result-oriented virtues of
                  Artificial Intelligence.
                </p>
                <p className="font-thin text-gray-100">
                  {" "}
                  In a broad sense, AI in game development has revolutionized
                  the way animated characters are created, dynamic environment
                  is set, more detailing is added, and storytelling gets
                  improved. But that's not all about AI Games solutions and the
                  industry is deeply disrupted well beyond the imagination.
                </p>
                <p className="font-thin text-gray-100">
                  So, here in this blog, we will look into the impressive role
                  of AI in the Games industry and how this technology is pushing
                  the artistic insights of game developers to an optimum extent.
                  Of course, successful implementation of AI will help companies
                  offer better AI game development services to numerous clients
                  and let them stay ahead of the competition.
                </p>
                <p className="font-thin text-gray-100">Key Topics to Discuss</p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Understanding the role of AI in Games.
                  </li>
                  <li className="font-thin text-gray-100">
                    How Artificial Intelligence (AI) is helping the Games
                    industry.
                  </li>
                  <li className="font-thin text-gray-100">
                    Must-see AI game features that have improved the playing
                    experience.
                  </li>
                  <li className="font-thin text-gray-100">
                    Key benefits of implementing AI in Games.
                  </li>
                  <li className="font-thin text-gray-100">
                    Have a look at some real-time examples of AI games.
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  Let's get started on the same.
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  What is AI in Games?
                </h1>
                <p className="font-thin text-gray-100">
                  AI in Games revolves around the aspect of creating a dynamic
                  environment. The intelligent integration of algorithms allows
                  game developers to create a better ecosystem from basic to
                  real-looking with better authenticity. In a way, AI games
                  appear to have an immersive virtual environment that actually
                  mimics the real world."
                </p>
                <p className="font-thin text-gray-100">
                  Now, when it comes to understanding how AI works in game
                  development, then this is what you should read.
                </p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    AI learns from players' actions, adapts their strategies,
                    and creates a dynamic environment.
                  </li>
                  <li className="font-thin text-gray-100">
                    With the help of AI, game developers can create more
                    challenging, real-looking, and realistic storylines for
                    gamers to experience a complete set of pleasures.
                  </li>
                  <li className="font-thin text-gray-100">
                    Another integral capacity of AI games is enriching the
                    player's experience and engaging the attention to an optimum
                    extent.
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  Additional game aspects enhanced by AI are as follows:
                </p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Creating an intelligent working game environment.
                  </li>
                  <li className="font-thin text-gray-100">
                    Allow Non-playable characters (NPCs) to make intelligent
                    decisions.
                  </li>
                  <li className="font-thin text-gray-100">
                    Bringing realism to the game.
                  </li>
                  <li className="font-thin text-gray-100">
                    Enriching games graphics and visual effects.
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  Certainly, industry experts have this opinion about the
                  growing adoption of AI in the Games industry. This led to
                  extensive Canada AI game development services and extensive
                  adoption among clients.
                </p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Role of AI in Game Development - AI Game Development
                  Techniques
                </h1>
                <p className="font-thin text-gray-100">
                  Till now, we've covered, what role AI has to play in the Games
                  industry. Next to know is the actual role of AI in game
                  development. Undoubtedly, artificial intelligence technology
                  brings value and real factor to games. It happens with the
                  following set of tasks.
                </p>
                <p className="font-semibold">1. Intelligence NPCs</p>
                <p className="font-thin text-gray-100">
                  Imagine a game where your Non-playable Characters or NPCs
                  opposite to you are so smart that they can analyze your
                  fighting style and come up with tactics that force you to
                  think innovatively.
                </p>
                <p className="font-thin text-gray-100">
                  Wouldn't it make the game way more engaging? You can compare
                  it with instances of using a single cliched way of killing NPC
                  opponents that follow single software algorithms from start to
                  end of the game. AI brings realistic and dynamic behaviors for
                  NPCs. With this newfound intelligence, they meticulously adapt
                  to player actions and respond tactfully like a human would,
                  thereby, making the game world more immersive.
                </p>

                <p className="font-semibold">
                  2. Procedural Content Generation:
                </p>
                <p className="font-thin text-gray-100">
                  Now think of a game that gives you different levels,
                  environments, and challenges every time you play it. Will you
                  get bored of it? No way. Because every time you play it you
                  get a new and even better experience. AI will learn your likes
                  and dislikes over time and will implement it to bring a more
                  personalized experience just for you. This is called
                  Procedural Content Generation, wherein, AI algorithms are
                  employed to generate game content such as levels, landscapes,
                  and textures dynamically, enhancing replayability. You
                  purchase the game once and get hundreds of its variations that
                  give you more bang for your buck than any other game ever in
                  the past.
                </p>

                <p className="font-semibold">3. Adaptive Difficulty:</p>
                <p className="font-thin text-gray-100">
                  There are instances when in order to make it challenging and
                  engaging game developers end up overdoing themselves. AI will
                  make sure that this does not happen and that the game is able
                  to maintain the right balance between entertainment and
                  challenge. With AI capabilities, the game will adjust the
                  difficulty level of the game based on the individual player's
                  skills. It will analyze users' preferences and their abilities
                  to on different challenges and will come up with gameplay to
                  ensure a challenging yet enjoyable experience.
                </p>

                <p className="font-semibold">4. Programming the Games</p>
                <p className="font-thin text-gray-100">
                  One of the most integral aspects of Generative AI game
                  development is programming the games, based on the right
                  codes, and that too created in a short span of time. Unlike
                  the manual game coding work, which is time-consuming and
                  human-error-oriented, AI in Games creates real-time code with
                  auto-correct suggestions. With that means, there are fewer
                  chances of finding issues and bugs in codes. Thus, programming
                  the complete game with the least dependency and redundancy.
                  This will save developers time and help create an engaging
                  game that is fast and effective.
                </p>

                <p className="font-semibold">5. Game Artwork</p>
                <p className="font-thin text-gray-100">
                  Games visuals have to be engaging, interactive, and crystal
                  clear to capture the attention of players and allow them to
                  play more. Different elements like background color, logo, and
                  structural details are important parts of AI game development
                  services. AI tools help developers create interactive
                  characters, intuitive UI/UX elements, diverse backgrounds, and
                  in-depth details to bring realistic factors. Not only this, AI
                  games are further superior in terms of auditory experience
                  with specialized sounds created for different levels and
                  scenarios.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Unique AI Game Features
                </h1>

                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Showcasing clear and 3D-rendered graphics to capture
                    attention.
                  </li>
                  <li className="font-thin text-gray-100">
                    Creating different game levels to increase difficulty &
                    engagement.
                  </li>
                  <li className="font-thin text-gray-100">
                    Generating interactive stories & scenarios to retain players
                    for a long.
                  </li>
                  <li className="font-thin text-gray-100">
                    Balancing the game's complexity to an optimum extent.
                  </li>
                  <li className="font-thin text-gray-100">
                    Adding smart intelligence to performing and non-performing
                    game players.
                  </li>
                </ul>

                <p className="font-semibold">Advantages of AI Games</p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Making games and players smarter to run effectively and
                    accordingly.
                  </li>
                  <li className="font-thin text-gray-100">
                    With the help of 3D visualization techniques, AI games
                    appear more real, attention-grabbing, and visually
                    interactive.
                  </li>
                  <li className="font-thin text-gray-100">
                    In-depth AI game detailing provides the benefit of
                    increasing player retention rate.
                  </li>
                  <li className="font-thin text-gray-100">
                    Game developers will learn a lot from AI integration into
                    the development process.
                  </li>
                  <li className="font-thin text-gray-100">
                    There will be an extensive rise of AI mobile Games, allowing
                    players to run anywhere and at any point in time.
                  </li>
                  <li className="font-thin text-gray-100">
                    AI in Games will certainly reduce development time, effort,
                    and cost.
                  </li>
                  <li className="font-thin text-gray-100">
                    AI assists the developers in facing fewer errors and reduces
                    overall delays in deploying games for the actual players.
                  </li>
                </ul>

                <p className="font-semibold">
                  Real-world Applications of AI in Games
                </p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">StarCraft II</li>
                  <li className="font-thin text-gray-100">Alien: Isolation</li>
                  <li className="font-thin text-gray-100">PUBG</li>
                  <li className="font-thin text-gray-100">WAR Frame</li>
                  <li className="font-thin text-gray-100">Path of Exile</li>
                  <li className="font-thin text-gray-100">Paladins</li>
                  <li className="font-thin text-gray-100">Pokerth</li>
                  <li className="font-thin text-gray-100">HeartStone</li>
                  <li className="font-thin text-gray-100">
                    Forza Horizon Series
                  </li>
                  <li className="font-thin text-gray-100">F.E.A.R.</li>
                  <li className="font-thin text-gray-100">Freeciv</li>
                  <li className="font-thin text-gray-100">FIFA</li>
                  <li className="font-thin text-gray-100">Google Quick Draw</li>
                  <li className="font-thin text-gray-100">Stockfish</li>
                  <li className="font-thin text-gray-100">Minecraft</li>
                </ul>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>

                <p className="font-thin text-gray-100">
                  Artificial Intelligence is positively impacting the Games
                  industry while bringing new evolutions, better playing
                  experiences, & increased engagement levels. AI in Games not
                  only helps create diverse scenarios, and interactive
                  storytelling, even brings advancement of games continuously
                  evolving as it is played.{" "}
                </p>
                <p className="font-thin text-gray-100">
                  With the help of AI tools, game developers can push their
                  boundaries to create virtually impressive games and shape the
                  future of new Games companies. Therefore, it's time for you to
                  embrace the change and avail yourself of result-oriented AI
                  game development services from a reliable partner.
                </p>
              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>
                <p className="font-semibold">What is the AI in Games?</p>
                <p className="font-thin text-gray-100">
                  AI in Games is the generation of responsive and adaptive Games
                  experiences. AI makes gamers much more personalized to the
                  individual gamers, learning their style, likes/dislikes, and
                  capabilities to generate gameplay that is the most enjoyable
                  for them. AI makes non-player characters, or NPCs, more
                  adaptive, intelligent, and interactive as if a real human is
                  controlling and speaking from behind them.
                </p>

                <p className="font-semibold">
                  What do AI Games solutions have differently?
                </p>
                <p className="font-thin text-gray-100">
                  AI Games solutions bring a more personalized, interactive, and
                  dynamic Games experience for an edge-of-the-seat Games
                  experience each time and every time.
                </p>

                <p className="font-semibold">
                  What are the different types of tools used for AI game
                  development?
                </p>
                <ul className="list-disc ml-6">
                  <li className="font-thin text-gray-100">
                    Unity ML-Agents: It is developed by Unity Technologies. It
                    allows developers to train agents using machine learning
                    algorithms and incorporate AI into their games.
                  </li>
                  <li className="font-thin text-gray-100">
                    Unreal Engine AI: It provides built-in AI tools for behavior
                    trees, navigation meshes, and environmental queries.
                  </li>
                  <li className="font-thin text-gray-100">
                    TensorFlow and PyTorch: These are used for creating and
                    training neural networks to develop AI models for
                    game-related tasks such as image recognition, natural
                    language processing, and decision-making.
                  </li>
                </ul>
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
                    AI in Games: Refining the Way Games Developed & Play
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    What is AI in Games?
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                    Role of AI in Game Development - AI Game Development
                    Techniques
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">
                    Unique AI Game Features
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
