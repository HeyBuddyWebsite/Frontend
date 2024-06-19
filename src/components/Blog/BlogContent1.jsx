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
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogmob1.png"
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
              className={`text-[#FF5C00]  font-bold ${
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
                  Top Game Development Companies - Choose the Best One
                </h1>
                <p className="font-thin text-gray-100">
                  Made up your mind to invest in game development? A great
                  decision indeed.
                </p>
                <p className="font-thin text-gray-100">
                  The reasons are many such as diverse monetization models, and
                  a loyal global Games community, a higher engagement rate among
                  others.
                </p>
                <p className="font-thin text-gray-100">
                  This ensures that not only does your investment grow faster
                  but it is also more stable and sustainable for the longer
                  term.
                </p>
                <p className="font-thin text-gray-100">
                  However, it is easier said than done. Game development is
                  complex and that’s why you need to choose a partner that
                  stands amongst the top game development companies.
                </p>
                <p className="font-thin text-gray-100">
                  Don’t worry, we will help you out. Here, we are sharing the
                  list of top game development companies in the world and in the
                  country of India, the land of ‘software’ charmers.
                </p>
                <p className="font-thin text-gray-100">
                  Along with that, we will tell you a 5-step process to choose
                  the best game development partner for your next endeavor so
                  that you achieve a sure-shot success
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Top 9 Game Development Companies in the World in 2024
                </h1>
                <p className=" font-semibold">Nintendo</p>

                <p className="font-thin text-gray-100">
                  {" "}
                  They are one of the oldest game development companies, founded
                  way back in the 19th century i.e. 1889. They started with
                  making Hanafuda playing cards, distinctive Japanese playing
                  cards that you must have seen in Japanese movies or Anime.
                  smaller but thicker and stiffer.
                </p>
                <p className="font-thin text-gray-100">
                  From there, they have come a long way delivering some of the
                  most unforgettable Games experiences such as Super Mario, The
                  Legend of Zelda, and Pokémon. With an annual revenue of around
                  $11.852 Billion in 2023, Nintendo is one of the world’s
                  biggest video game developers.{" "}
                </p>
                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Broad, with a focus on family-friendly and innovative Games
                  experiences.{" "}
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  All age groups, particularly families and casual gamers.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">
                  Diverse, spanning platformers, adventure, and simulation
                  games.
                </p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Innovation in Games hardware (e.g., motion controls, portable
                  consoles like the Nintendo Switch).
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Nintendo consoles (e.g., Nintendo Switch, Nintendo 3DS).
                </p>

                <p className=" font-semibold">Ubisoft</p>
                <p className="font-thin text-gray-100">
                  Ubisoft, a French software and video game software development
                  company, was founded in 1986. Since then, it has successfully
                  established itself as one of the top Unity game developers.
                </p>
                <p className="font-thin text-gray-100">
                  Not only this, Ubisoft is striding firmly in innovative Games,
                  expanding its footprint into spaces such as AI Games. Their
                  goal, here, is simple, to transform gameplay experiences with
                  powerful AI capabilities.{" "}
                </p>
                <p className="font-thin text-gray-100">
                  To give you a glimpse, AI Games is an amazing possibility in
                  the Games world. It will open the doors to novel Games
                  experiences such as adaptive gameplay, procedural content
                  generation, intelligent NPC interaction, and much more for
                  never-seen-before Games experiences. (Read it in our next
                  blog){" "}
                </p>
                <p className="font-thin text-gray-100">
                  Ubisoft's revenue stands at $1.97 Billion in 2022.{" "}
                </p>
                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Broad international market with a focus on open-world and
                  action-adventure games.{" "}
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  Fans of open-world exploration and diverse Games experiences.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">
                  Notable for open-world action-adventure and stealth games.
                </p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Pioneering open-world game design, creating expansive and
                  immersive game environments.
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Multiplatform, with a strong presence on PlayStation, Xbox,
                  and PC.
                </p>

                <p className=" font-semibold">Activision Blizzard</p>
                <p className="font-thin text-gray-100">
                  Compared to the above two, Activation Blizzard is fairly new,
                  however, its roots go way back to the late 70s. Actually, it
                  was founded in the year 2008 when Activision and Blizzard
                  Entertainment came together.
                </p>
                <p className="font-thin text-gray-100">
                  Activition was an older player in the with its existence
                  dating back to 1979. It is known for early classics like
                  Pitfall! On the other hand, Blizzard gained fame with Warcraft
                  and Diablo franchises.
                </p>
                <p className="font-thin text-gray-100">
                  Activision Blizzard is best known for creating the first
                  successful esports league with the Overwatch League. This is
                  contributing to the growing popularity and professionalization
                  of competitive Games.
                </p>
                <p className="font-thin text-gray-100">
                  The American Games company is based in Santa Monica,
                  California, USA, and has a revenue of around $7.53 billion.{" "}
                </p>
                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Broad, with a strong presence in online multiplayer Games.{" "}
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  Multiplayer and competitive Games communities.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100"></p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    {" "}
                    First-person shooters
                  </li>
                  <li className="font-thin text-gray-100">
                    Online multiplayer games
                  </li>
                </ul>

                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Dominating the online multiplayer Games space with franchises
                  like Call of Duty and many other successful forays into
                  eSports.
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Multiplatform, with a strong presence on PlayStation, Xbox,
                  and PC.
                </p>

                <p className=" font-semibold">Electronic Arts (EA)</p>

                <p className="font-thin text-gray-100">
                  This is another American game development company that made it
                  to our list - Electronic Sports. It was founded in the year
                  1982 and is located in Redwood City, California.
                </p>
                <p className="font-thin text-gray-100">
                  They are best known for sports simulations, and popular
                  franchises like FIFA and Madden are two of them. These two
                  series have a hardcore following in the Games community and
                  Gamers actually wait for these two to hit the market. and
                  diverse Games experiences.{" "}
                </p>
                <p className="font-thin text-gray-100">
                  But that’s not it. EA is really giving back to the Games
                  community through their EA Originals program. This program
                  supports and publishes indie games that bring unique concepts
                  and artistic visions to the Games space. Top-of-the-mind works
                  are Unravel and A Way Out.
                </p>
                <p className="font-thin text-gray-100">
                  Their yearly revenue is around US $3.5 billion in 2022.{" "}
                </p>
                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Broad, with a focus on sports, simulation, and popular
                  franchises.{" "}
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  Sports enthusiasts, simulation gamers, and fans of popular
                  franchises.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">
                  Sports, simulation, and a variety of genres through diverse
                  subsidiaries.
                </p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Strong sports Games portfolio, popular franchises like FIFA,
                  The Sims series, and Madden, and a focus on realistic
                  simulation experiences.
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Multiplatform, with a focus on PlayStation, Xbox, and PC.
                </p>

                <p className=" font-semibold">Epic Games (EA)</p>

                <p className="font-thin text-gray-100">
                  If you know Unreal Engine, you know Epic Games. Yes, they are
                  the visionary company behind Unreal Engine, one of the most
                  popular and widely used game development tools.
                </p>
                <p className="font-thin text-gray-100">
                  It all started back in 1991 when Epic Games came into
                  existence. At the time, it was known as Potomac Computer
                  Systems. Things changed with the company's Unreal Engine which
                  revolutionized game development and is now used by countless
                  developers worldwide.
                </p>
                <p className="font-thin text-gray-100">
                  The tool is getting stronger with each passing version and is
                  powering the evolution of the Games industry.
                </p>
                <p className="font-thin text-gray-100">
                  Another of its products Fortnite is simply a global phenomenon
                  that brought Epic Games to new heights. The firm is located in
                  Cary, North Carolina, USA, and its revenues are predicted to
                  stand at around $5.6 billion.{" "}
                </p>
                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Wide-reaching, with a focus on the development of the Unreal
                  Engine and Fortnite's global appeal.
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  Diverse, including developers and Fortnite players.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">Battle Royale Games.</p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Development of the widely-used Unreal Engine, powering
                  numerous games, and the global success of Fortnite.
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Multiplatform (Fortnite is available on various consoles, PCs,
                  and mobile devices).
                </p>

                <p className=" font-semibold">Rockstar Games</p>

                <p className="font-thin text-gray-100">
                  There would hardly be any gamer who is not aware of the Grand
                  Theft Auto series. Rockstar Games is known for creating super
                  cool games with lifelike virtual worlds. What really makes
                  them stand apart as a top-notch game developer is their
                  ability to draw gamers into the Games world with realistic
                  storytelling.
                </p>
                <p className="font-thin text-gray-100">
                  Established in 1998, Rockstar Games is a subsidiary of
                  Take-Two Interactive. Since then, they have been pushing the
                  boundaries of open-world Games with titles like Grand Theft
                  Auto (mentioned above) and Red Dead Redemption.
                </p>
                <p className="font-thin text-gray-100">
                  The company is located in New York City, New York, USA, and is
                  predicted to make $5.5 billion in 2023.
                </p>

                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Global, targeting mature gamers.
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  Appeals to diverse gamers seeking cinematic, open-world
                  experiences.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">
                  Dominates open-world action-adventure Games.
                </p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Unparalleled expertise in open-world games, realistic
                  settings, complex narratives, and attention to detail.
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Primarily consoles, including PlayStation and Xbox, as well as
                  PC platforms.
                </p>

                <p className=" font-semibold">Gameloft</p>

                <p className="font-thin text-gray-100">
                  Founded in Paris, France in 1999, Gameloft is a world-leading
                  mobile game development company. Although they develop
                  high-quality games for various other platforms, their special
                  focus is on mobile devices. They are known for franchises like
                  Asphalt and Modern Combat.
                </p>
                <p className="font-thin text-gray-100">
                  They are consistently pushing the boundaries of what is
                  possible on mobile devices, contributing some of the most
                  high-quality and unbelievable mobile Games experiences.
                </p>
                <p className="font-thin text-gray-100">
                  Gameloft's mobile game "Asphalt 9: Legends" achieved over 4
                  million downloads within just four days of its launch. This
                  shows Gameloft’s ability to capture a massive audience for
                  high-quality Games experiences on mobile devices.
                </p>

                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  Global, at the forefront of mobile Games innovation.
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  A diverse audience of mobile gamers,{" "}
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">
                  A diverse portfolio, delivering engaging content on portable
                  devices.
                </p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  Delivers high-quality and accessible mobile Games experiences.
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">
                  Mobile platforms, including iOS and Android devices.
                </p>

                <p className=" font-semibold">Microsoft</p>

                <p className="font-thin text-gray-100">
                  Needing no introduction, Microsoft is a major force in the
                  Games industry, prominently represented by its Xbox brand. It
                  has also contributed to PC Games through the Windows operating
                  system and its cloud Games venture, Xbox Cloud Games,
                  positions Microsoft in the emerging game streaming space.
                </p>
                <p className="font-thin text-gray-100">
                  Headquartered in Redmond, Washington, USA, we all know the
                  story of when Bill Gates and Paul Allen laid the foundation of
                  Microsoft’s inception in 1975.
                </p>
                <p className="font-thin text-gray-100">
                  And with the initiatives like Xbox Game Pass and Xbox Play
                  Anywhere, Microsoft has only solidified its commitment to
                  Games.
                </p>
                <p className="font-thin text-gray-100">
                  Microsoft has been a key player in promoting cross-platform
                  Games through initiatives like allowing players to seamlessly
                  switch between Xbox and PC Games with shared progress.
                </p>
                <p className="font-thin text-gray-100">
                  The Games revenue of Microsoft in 2022 stood at US$10.3
                  billion.
                </p>

                <p className=" font-semibold">Sony</p>

                <p className="font-thin text-gray-100">
                  If home-based Games has a face, then it is PlayStation,
                  especially PlayStation 2. Japanese company Sony is behind the
                  very popular PlayStation video Games brand. That’s not it,
                  Sony is also known for exclusive titles like God of War and
                  The Last of Us.
                </p>
                <p className="font-thin text-gray-100">
                  You will be surprised to know that this Japanese multinational
                  conglomerate originated as a small electronics shop in Tokyo,
                  Japan.
                </p>
                <p className="font-thin text-gray-100">
                  The company was founded in 1946 and their PlayStation Now
                  service stands out as a pioneer in cloud Games. This allows
                  users to stream a vast library of games, showcasing their
                  commitment to innovative Games technologies.
                </p>

                <p class="font-semibold">Market Segment: </p>
                <p className="font-thin text-gray-100">
                  High-end console Games.
                </p>
                <p class="font-semibold">Audience: </p>
                <p className="font-thin text-gray-100">
                  Hardcore gamers and fans of cinematic Games experiences.
                </p>
                <p class="font-semibold">Games Genre: </p>
                <p className="font-thin text-gray-100">
                  Narrative-driven action-adventure games.
                </p>
                <p class="font-semibold">USP/Expertise: </p>
                <p className="font-thin text-gray-100">
                  High-quality exclusive titles, emphasis on cinematic
                  storytelling, and powerful Games hardware (PlayStation
                  consoles).
                </p>
                <p class="font-semibold">Expertise Platforms: </p>
                <p className="font-thin text-gray-100">PlayStation consoles</p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Top Game Development Companies in India
                </h1>

                <p className="font-thin text-gray-100">
                  {" "}
                  Being the second most populated country with one the cheapest
                  internet rates and considerable internet penetration, India is
                  a lucrative market for media and entertainment, and Games is
                  no different.
                </p>
                <p className="font-thin text-gray-100">
                  These factors are contributing significantly towards diverting
                  focus towards India, helping the country grow not only as an
                  audience but also as a creator.
                </p>

                <p className="font-thin text-gray-100">
                  In the past few years, India has witnessed significant growth
                  in the game development industry. We saw the emergence of
                  several top game development companies that not only fuelled
                  the local market by also contributed to the global Games
                  ecosystem.
                </p>
                <p className="font-thin text-gray-100">
                  So, why is that happening? The reason resides in the fact that
                  Indian Games companies possess some rare qualities that make
                  them stand out from their competitors.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Top Qualities of Game Development Companies in India
                </h1>
                <p className="font-semibold">Diverse and Culturally Relevant</p>
                <p className="font-thin text-gray-100">
                  Indian game development studios such as Hey Buddy and 99Games
                  are recognized for their creating engaging and culturally
                  relevant games capable of catering to diverse audiences.
                </p>
                <p className="font-semibold">Thriving Indie Game Developers:</p>
                <p className="font-thin text-gray-100">
                  The indie game development scene in India is thriving. These
                  developers are producing unique and innovative games, garnered
                  attention for their creative projects from around the world.
                </p>
                <p className="font-semibold">Growing Esports Popularity </p>
                <p className="font-thin text-gray-100">
                  The country is also witnessing a surge in esports popularity.
                  Organizations such as Nodwin Games and ESL India are playing
                  key roles in organizing esports events and fostering a
                  competitive Games culture.
                </p>
                <p className="font-semibold">Good Quality at the Right Price</p>
                <p className="font-thin text-gray-100">
                  Indian Games industry offers investors one of the least
                  expensive workforces. The skilled talent, tagged with diverse
                  game development, and a cost-effective environment, the Indian
                  Games industry presents an enticing proposition for both local
                  and international investors.
                </p>
                <p className="mt-4">
                  So where to look for them? Here is your list to choose from.
                </p>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Top 10 Game Development Companies in India
                </h1>
                <p className="font-semibold">Hyperlink InfoSystem</p>
                <p className="font-thin text-gray-100">
                  Hyperlink InfoSystem is a leading game app development
                  company. They specialize in designing and developing 2D and 3D
                  games.
                </p>
                <p className="font-semibold">
                  They have a proven track record of game development projects,
                  affirming them as a reliable and versatile game development
                  partner in India.{" "}
                </p>
                <p className="font-thin text-gray-100">
                  Their wide range of services also includes emerging Games
                  genres such as AR/VR game development
                </p>
                <p className="font-semibold">Juego Studios </p>
                <p className="font-thin text-gray-100">
                  Juego Studios is one of India's top mobile game development
                  companies. They have been in the industry for over a decade
                  with a talented and experienced team. They have a portfolio of
                  unique and visually appealing games.
                </p>
                <p className="font-thin text-gray-100">
                  Founded in 2013, and located in Bangalore, they specialize in
                  developing 3D and 2D mobile games for a wide range of
                  platforms such as iOS, Android, and Windows.
                </p>
                <p className="font-thin text-gray-100">
                  They have a portfolio of working with top clients, delivering
                  great games over the decade of their existence.
                </p>
                <p className="font-semibold">Hey Buddy</p>
                <p className="font-thin text-gray-100">
                  Hey Buddy is one of the leading game development companies.
                  Their clientele expands to multiple countries and continents
                  including China, UAE, and the USA.
                </p>
                <p className="font-thin text-gray-100">
                  They are continuously on the way to innovating and expanding
                  to the energy Games genre and AI-based Games is one of their
                  strongest suites.
                </p>
                <p className="font-thin text-gray-100">
                  They offer end-to-end game development services from Games
                  consultation to game launch.
                </p>
                <p className="font-semibold">Hashbyte Studio</p>
                <p className="font-thin text-gray-100">
                  Hashbyte Studio is one of the leading Mobile Game Development
                  Companies in India. Their prime focus is on game development
                  and they are known for their expertise and experience
                  delivering competitive game designs and game features.
                </p>
                <p className="font-thin text-gray-100">
                  Hashbyte Studio has been in the game development space since
                  2013 and offers a wide range of game development services.
                </p>
                <p className="font-semibold">99Games</p>
                <p className="font-thin text-gray-100">
                  99 Games is another of the top mobile Games companies from
                  India that is doing amazing. The company was established in
                  2008 with a commitment to deliver customer-centric games with
                  the best users.
                </p>
                <p className="font-thin text-gray-100">
                  Founded in 2009, 99Games maintained a talented team of
                  writers, artists, designers, and coders capable of crafting a
                  marketing-leading Games experience.
                </p>
                <p className="font-semibold">Tech Mahindra</p>
                <p className="font-thin text-gray-100">
                  Tech Mahindra is one of the leading IT companies in India with
                  a significant presence in the Games market. It has established
                  itself as a leading game development company with its
                  world-renowned expertise in multiplayer and online games.
                </p>
                <p className="font-thin text-gray-100">
                  Tech Mahindra is a part of the reputed Mahindra Group and has
                  a proven record of delivering successful projects.
                </p>
                <p className="font-thin text-gray-100">
                  Notably, they have also expanded their footprints in cloud
                  Games solutions that bring quality and innovation together.
                </p>
                <p className="font-semibold">Infosys</p>
                <p className="font-thin text-gray-100">
                  Infosys Limited is an Indian multinational corporation and the
                  second-largest Indian IT Company after TCS. They have around
                  82 Sales and marketing offices and 123 development centers
                  worldwide.
                </p>
                <p className="font-thin text-gray-100">
                  They offer wide-ranging services including emerging markets of
                  blockchain, IoT, and cloud Games solutions, etc.
                </p>
                <p className="font-semibold">HCL Technologies</p>
                <p className="font-thin text-gray-100">
                  Yet another technology giant in the vast Indian IT space is
                  HCL Technologies. They have refined game designing and
                  development methodology consisting of their multi-perspective
                  approach. With a proven track record of game development
                  projects delivered successfully.
                </p>
                <p className="font-thin text-gray-100">
                  They also possess expertise in deploying solutions in emerging
                  trending technologies such as IoT, AI, etc.
                </p>
                <p className="font-semibold">Creatiosoft</p>
                <p className="font-thin text-gray-100">
                  Established in 2012, Creatiosoft Solutions Pvt Ltd has focused
                  on the design and development of games and apps for over a
                  decade.
                </p>
                <p className="font-thin text-gray-100">
                  They develop games for a wide range of platforms including
                  iPhone, iPad, Android, Windows Mobile, and others.
                </p>
                <p className="font-semibold">GSN Games</p>
                <p className="font-thin text-gray-100">
                  GSN Games is one of the best game development firms in India.
                  Founded in 1999, they develop and publish mobile games with
                  visually stunning graphics.
                </p>
                <p className="font-thin text-gray-100">
                  They specialize in social Games, providing an engrossing and
                  engaging gameplay experience. They have developed a varied
                  portfolio of popular casino games with a special focus on
                  multiplayer experiences.
                </p>
              </div>
              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  How to choose a Game development company to partner with - 5
                  Steps
                </h1>
                <p className="font-semibold">
                  Step 1. Understand your project needs
                </p>

                <p className="font-thin text-gray-100"></p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">Games genre</li>
                  <li className="font-thin text-gray-100">Platform</li>
                  <li className="font-thin text-gray-100">Target audience</li>
                  <li className="font-thin text-gray-100">
                    Core gameplay mechanics
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  This is the most effective and fastest way to identify the
                  right game development partner. The reason, it is easy for you
                  to understand your requirements and find companies with
                  relevant experience and expertise.
                </p>

                <p className="font-thin text-gray-100">
                  Apart from the above, you also need to keep in mind the
                  following two points:
                </p>
                <p className="font-thin text-gray-100">
                  1. Set a realistic budget and timeline:
                </p>
                <p className="font-thin text-gray-100">
                  Look for companies that offer services within your financial
                  constraints and are capable enough to meet your deadlines.
                </p>
                <p className="font-thin text-gray-100">
                  Hence, you should also review their history of meeting
                  deadlines and project timelines. You should:
                </p>
                <p className="font-thin text-gray-100"></p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Ask for specific examples.
                  </li>
                  <li className="font-thin text-gray-100">
                    Discuss their project management methods.
                  </li>
                  <li className="font-thin text-gray-100">
                    Ensure they have a structured approach to keep development
                    on track.
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  Also, talk to them about their plan for potential delays and
                  establishing contingency measures. Unexpected challenges are
                  common, so the right partner should be prepared.
                </p>
                <p className="font-semibold">
                  2. Identify specific technologies required:
                </p>
                <p className="font-thin text-gray-100">
                  Look for companies proficient in those tools and engines
                  (e.g., Unity, Unreal Engine). You need to evaluate their
                  technology stack and processes.
                </p>
                <p className="font-thin text-gray-100">
                  Ask about their preferred tools and engines and make sure that
                  they align with your specific project needs as well as the
                  latest industry trends and standards.
                </p>
                <p className="font-thin text-gray-100">
                  Here again, discussing their development methodologies (e.g.,
                  Agile, Waterfall) will come in handy. So, choose the one that
                  suits your preferences and project complexity.
                </p>
                <p className="font-semibold">
                  Step 2. Go Beyond What Meets the Eye
                </p>
                <p className="font-thin text-gray-100">
                  Don't get dazzled only by the eye-catching graphics and
                  visuals of the game, go beyond them. Analyze the gameplay
                  depth of the game, the innovative and unique aspects, and
                  understand the technical quality.
                </p>

                <p className="font-thin text-gray-100">
                  Look for companies with a proven track record and countable
                  experience in making similar games that you are into.
                  Additionally, check their team composition. See if they have
                  specialists in all key areas such as programming, game art,
                  game designing, narrative writing, etc.
                </p>

                <p className="font-semibold">
                  Step 3. Dig deeper into client feedback
                </p>
                <p className="font-thin text-gray-100">
                  Don’t just solely rely on company websites, make sure to read
                  testimonials and reviews on independent platforms as well.{" "}
                </p>
                <p className="font-thin text-gray-100">
                  Also, if necessary, contact past clients directly and ask
                  about their experience of working with your prospective
                  partner. Ask how they maintained communication and ensured
                  smooth collaboration and what they did to achieve overall
                  satisfaction.
                </p>

                <p className="font-thin text-gray-100">
                  Another helpful tip in this step is to look for case studies.
                  They are concrete examples of successful projects and
                  challenges overcome and should thoroughly analyze them
                  end-to-end.
                </p>

                <p className="font-semibold">
                  Step 4. Prioritize clear communication and collaboration:
                </p>

                <p className="font-thin text-gray-100">
                  Clear communication and collaboration are some of the most
                  important and underrated aspects. You need to assess their
                  communication style and responsiveness. You need to know how
                  they ensure transparency and bring timely updates to you
                  throughout the development process.{" "}
                </p>

                <p className="font-thin text-gray-100">
                  This is important because effective communication{" "}
                </p>
                <p className="font-thin text-gray-100"></p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    fosters a strong partnership,
                  </li>
                  <li className="font-thin text-gray-100">
                    aligns expectations, and
                  </li>
                  <li className="font-thin text-gray-100">
                    minimizes the risk of misunderstandings.{" "}
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  Thus, your vision aligns with the development team's progress,
                  creating a smoother and more successful game development
                  journey.
                </p>
                <p className="font-thin text-gray-100">
                  Towards this end, you need to discuss preferred communication
                  channels such as email, project management tools, or others.
                </p>
                <p className="font-thin text-gray-100">
                  Last, but important, Ensure that they establish clear lines of
                  communication right from day one and evaluate their
                  flexibility and willingness to adapt on that basis. Remember,
                  game development often involves revisions, so adaptability is
                  crucial.
                </p>

                <p className="font-semibold">
                  Step 5. Secure post-launch support and maintenance:
                </p>
                <p className="font-thin text-gray-100">
                  Talking about revision, confirm with your prospective game
                  development partner their availability for bug fixes and
                  updates after launch. Keep in mind that a supportive partner
                  will always ensure a smooth post-launch experience for its
                  client, no matter what. They see their success in their
                  clients’.
                </p>
                <p className="font-thin text-gray-100">
                  So, feel free to discuss ongoing maintenance plans and
                  associated costs. Take your time and consider future updates
                  and content expansions in depth.
                </p>
                <p className="font-thin text-gray-100">
                  Develop clear communication channels for post-launch support
                  to get prompt and effective solutions to any issues.
                </p>
              </div>
              <div
                id="section7"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>

                <p className="font-thin text-gray-100">
                  Game development is one of the most lucrative spaces to
                  explore. The fact that they have a sustained flow of
                  engagement with the target audience helps them build a strong
                  relationship with the same.
                </p>
                <p className="font-thin text-gray-100">
                  This not only ensures success but also stretches it to a
                  longer period. Moreover, with the advent of emerging
                  technologies such as AI, AR/VR, Metaverse, and Blockchain, the
                  Games space is undergoing an overhaul.
                </p>

                <p className="font-thin text-gray-100">
                  For those who want to make it big, your time starts now!
                </p>
              </div>

              <div
                id="section8"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>

                <p className="font-semibold">
                  Which company is best for game development in India?
                </p>
                <p className="font-thin text-gray-100">
                  Based on the list, we shared above Hyperlink Studio, Hey Buddy
                  and Juego are some of the top companies for game development
                  in India.{" "}
                </p>
                <p className="font-semibold">
                  What are the 3 biggest video game companies?
                </p>
                <p className="font-thin text-gray-100">
                  It is difficult to say but Microsoft, Nintendo, and Sony do
                  count among the largest game development companies in the
                  world.
                </p>
                <p className="font-semibold">
                  Who is the No 1 game developer in the world?
                </p>
                <p className="font-thin text-gray-100">
                  In our opinion, Microsoft does stand out as the number one
                  game developer in the world.{" "}
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
                    Top Game Development Companies - Choose the Best One
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    Top 9 Game Development Companies in the World in 2024
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                    Top Game Development Companies in India
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">
                    Top Qualities of Game Development Companies in India{" "}
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">
                    Top 10 Game Development Companies in India
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">
                    How to choose a Game development company to partner with - 5
                    Steps
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
