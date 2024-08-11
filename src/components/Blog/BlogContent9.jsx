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
                <h1 className="text-3xl font-extrabold text-white">
        VR and AR in Education Industry: The Missing Piece
      </h1>
      <p className="font-semibold">
        Summary: This blog focuses on the extensive role of VR and AR in education to enhance
        learning perspective & ensure seamless communication. Get to know the insights of Virtual
        Reality and Augmented Reality in the learning sector and why adopt these technologies.
      </p>
      <p className="font-thin text-gray-100">
        The education sector has rapidly evolved over the past few years. All that is started from
        the traditional classroom teaching setting to virtual learning experiences for students.
        Another pathbreaking revolution that has been witnessed is the extensive adaptation of VR
        and AR in the education industry.
      </p>
      <p className="font-thin text-gray-100">
        Virtual Reality (VR) and Augmented Reality (AR) are the harbingers of modern-day
        technologies that have extended the virtues of experiential learning. These technologies
        enable intuitive, engaging, and interactive learning experiences for students of all age
        groups to learn concepts easily and quickly.
      </p>
      <p className="font-thin text-gray-100">
        The role of VR and AR in education allows students to absorb knowledge and skills in a
        fast-paced manner. And, most importantly, enjoy the overall learning process to enhance
        their development ahead.
      </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                
    
      <h1 className="text-3xl font-extrabold text-white">
        VR and AR in Education Statistics: Do Numbers Favor?
      </h1>
      <p className="font-thin text-gray-100">
        As you know, VR and AR in education have created a lot of buzz. And, it has been best
        witnessed as per the stats mentioned below.
      </p>
      <ul className="list-disc font-thin text-gray-100">
        <li>
          As per the eLearning industry study, it has been observed that 97% of students prefer to
          study difficult concepts via VR devices.
        </li>
        <li>
          In 2023, the AR and VR market in the education sector is valued at a humongous $3.8
          billion.
        </li>
        <li>
          In technically sound educational institutes, more than 68% of teachers have started
          utilizing AR and VR learning approaches.
        </li>
        <li>
          As per the National Survey of Student Engagement, 53% of students prefer their classrooms
          to be technically driven and interactive.
        </li>
      </ul>
      <p className="font-thin text-gray-100 mt-4">
        Now that you know the welcoming inclusion of VR and AR in education, let's get to know the
        separate uses of both Virtual Reality and Augmented Reality in the learning sector. The role
        of VR and AR in education allows students to absorb knowledge and skills in a fast-paced
        manner. And, most importantly, enjoy the overall learning process to enhance their
        development ahead.
      </p>
               
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">What is VR in Education: Learning by Doing</h1>
      <p className="font-thin text-gray-100">
        As the name suggests, Virtual Reality (VR) is a computer-generated ecosystem that actually simulates a real-world environment. Learners with the help of VR technology can enter the virtual world and create their sense of presence across several objects, ecosystems, and simulated scenes.
      </p>
      <p className="font-thin text-gray-100">
        Just like you play video games and think of the animated character as you in the game to perform specific actions, similarly, VR in education helps you become a leading part of a simulated environment.
      </p>
      <p className="font-thin text-gray-100">
        The most important aspect of VR in education is the extensive use of technically superior devices like VR headphones, glasses, headsets, or things like that. By wearing such devices, students can interact with virtually created ecosystems and objects to learn complex subjects seamlessly.
      </p>
      <p className="font-thin text-gray-100">
        To be precise, VR in education is preferably used to conduct scientific experiments, language immersion programs, study a different culture, and things like that.
      </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">Benefits of VR in Education</h1>
      <p className="font-thin text-gray-100">
        There are manifold benefits of implementing VR technology in the education domain. And, some
        of the key advantages are as follows:
      </p>
      <ul className="list-disc font-thin text-gray-100">
        <li>
          <strong>Enhance student engagement level:</strong> Students feel engaged in the VR
          classroom setting learning sessions. It happens in terms of experiencing a simulated
          learning environment that allows students to travel in a virtual space that appears real
          to their eyes. For instance, VR in education allows students to reach the moon, run its
          surface, explore wildlife, and do much more to learn and feel engaged. In light of this,
          all the learners will be tempted towards such an immersive learning ecosystem and
          participate seamlessly.
        </li>
        <li>
          <strong>Boost the knowledge retention factor:</strong> A virtual learning setting plays a
          vital role not just in grabbing the attention of students but further improving their
          learning retention rate. In engaging settings, students focus on the learning activities,
          have clear ideas, and stay mentally active and physically present.
        </li>
        <li>
          <strong>Improve the overall learning process:</strong> Experiential learning outcomes with
          Virtual Reality benefit a wide range of students. With the help of several engaging
          activities, students can roam around the virtual ecosystem, learn about complex objects,
          and further improve their skills quickly to an optimum extent.
        </li>
      </ul>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">What is AR in Education: An Added Advantage</h1>
  <p className="font-thin text-gray-100">
    Augmented Reality (AR) in education is another virtue of advanced technology that makes the
    learning process interactive, engaging, and fast-paced. Specifically, AR in education enables
    students to access real-world applications compared to multimedia concepts, simulations,
    animations, and real-world settings to better understand complex concepts. Unlike wearing a VR
    device and virtually traveling in a simulated setting, students can access AR apps to learn
    concepts with ease and comfort.
  </p>
              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">Benefits of AR in Education</h1>
  <p className="font-thin text-gray-100">
    AR plays a vital role in the field of education to improve students' learning processes and
    sheer engagement levels. It brings new and interactive learning methods along with the following
    set of advantages.
  </p>
  <ul className="list-disc font-thin text-gray-100">
    <li>
      <strong>Combined learning approach:</strong> Augmented Reality has boosted the level of
      learning concepts with the combined approach of traditional classroom settings combined with
      application-based learning. Students can leverage AR in education to learn from textbooks as
      well as from apps filled with interactive sounds, assignments, and other objects.
    </li>
    <li>
      <strong>Interesting learning concepts:</strong> Undoubtedly, students learn study concepts
      better when they watch related videos, listen to sounds, and become part of interactive
      representation. AR in education does the same by offering interesting learning approaches
      through interactive apps. With this learning approach, most students feel attracted to the
      concepts and gain skills in a hassle-free manner.
    </li>
    <li>
      <strong>Enable interactive learning sessions:</strong> AR-based classroom sessions, better
      known as an app-based learning system, certainly catch the attention of more and more
      students. Just beyond the horizon of traditional classroom sessions, AR-based learning allows
      students to understand complex concepts better and faster.
    </li>
  </ul>
                 </div>

                 <div
                id="section7"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">AR and VR in Education: Comparison</h1>
<p className="font-thin text-gray-100">
  Till now, we have separately explored the virtues of Virtual Reality (VR) and Augmented Reality
  (AR) in the realm of the education sector. Next, we explore the real-time differences between
  these two emerging technologies.
</p>
<table className="table-auto w-full text-gray-100 font-thin mt-4 border border-gray-100">
  <thead>
    <tr className="bg-gray-800">
      <th className="px-4 py-2 border-b border-gray-100">Virtual Reality in Education</th>
      <th className="px-4 py-2 border-b border-gray-100">Augmented Reality in Education</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2 border-gray-100">
        VR in education helps create a virtual ecosystem in which students can travel, feel, and
        sense through different devices.
      </td>
      <td className="border px-4 py-2 border-gray-100">
        AR is an app-based or technically proficient way of learning study concepts.
      </td>
    </tr>
    <tr className="bg-gray-800">
      <td className="border px-4 py-2 border-gray-100">
        Approximately 50 Mbps speed of internet is required to see the virtual world through VR
        devices.
      </td>
      <td className="border px-4 py-2 border-gray-100">
        Approximately 100 Mbps speed of internet is required to access AR apps.
      </td>
    </tr>
    <tr>
      <td className="border px-4 py-2 border-gray-100">
        Students feel completely immersed in a new environment altogether.
      </td>
      <td className="border px-4 py-2 border-gray-100">Students have to access software or an app.</td>
    </tr>
    <tr className="bg-gray-800">
      <td className="border px-4 py-2 border-gray-100">
        Get completely into the virtual world while having VR devices on.
      </td>
      <td className="border px-4 py-2 border-gray-100">
        You can become part of the learning as well as the real world at the same time.
      </td>
    </tr>
    <tr>
      <td className="border px-4 py-2 border-gray-100">
        Completely virtual ecosystem to bring interest, fun, and excitement.
      </td>
      <td className="border px-4 py-2 border-gray-100">
        Provide you with a major difference between the virtual and the real world.
      </td>
    </tr>
    <tr className="bg-gray-800">
      <td className="border px-4 py-2 border-gray-100">Entirely navigates to a whole new world.</td>
      <td className="border px-4 py-2 border-gray-100">
        Interact best with the virtual world while remaining in the current setting.
      </td>
    </tr>
    <tr>
      <td className="border px-4 py-2 border-gray-100">Specially created VR headsets are required.</td>
      <td className="border px-4 py-2 border-gray-100">It does not need a specialized device to put on.</td>
    </tr>
  </tbody>
</table>

              </div>

              <div
                id="section8"
                className="flex flex-col gap-5 text-white text-base font-light"
              ><h1 className="text-3xl font-extrabold text-white">Real-World Applications of AR in Education</h1>
              <p className="font-thin text-gray-100">
                At present, there are many real-world examples of AR and VR in the learning sector, working
                progressively to enhance the facet of education. For a better understanding, here's a list of a
                few applications of emerging technologies.
              </p>
              <ul className="list-disc font-thin text-gray-100">
                <li><strong>SkyView App:</strong> Helps explore the universe by using AR.</li>
                <li><strong>Froggipedia App:</strong> An AR-driven app to see frogs' internal organs.</li>
                <li><strong>Microsoft HoloLens:</strong> VR-driven lens to see human organs from inside.</li>
                <li><strong>1943 Berlin Blitz in 360 Degree:</strong> VR education for real-life footage of the raid of Nazi Germany.</li>
                <li><strong>Google Expeditions:</strong> VR-oriented product to travel far and wide.</li>
              </ul>
              <p className="font-thin text-gray-100">And, the list goes on.</p>
               </div>
            </section>
          </div>

          <div
                id="section9"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">Conclusion</h1>
<p className="font-thin text-gray-100">
  Virtual Reality and Augmented Reality have provided a breakthrough in the education sector to
  prosper and enable interactive learning. These two technologies are in the best interest of
  students to learn concepts faster, retain knowledge for a long time, and remain interested.
</p>
<p className="font-thin text-gray-100">
  If you have not implemented the result-oriented virtues of VR and AR in education, then you might
  be left behind. Therefore, start embracing Augmented Reality and Virtual Reality for your education realm.
</p>

              </div>

              <div
                id="section10"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold text-white">FAQs</h1>
<div className="font-thin text-gray-100 mt-4">
  <h2 className="text-2xl font-bold">What is the conclusion of AR and VR in education?</h2>
  <p>
    AR and VR are one of the best ways of learning as they let students learn by doing, also known as
    experiential learning. This type of learning is not only faster and better but also stays with the
    students for longer periods.
  </p>
  <h2 className="text-2xl font-bold mt-4">How can teachers use AR in the classroom?</h2>
  <p>
    It's fairly easy for teachers to use AR in the classroom as it does not require any special equipment
    other than just our smartphones. Teachers can place a scannable picture or a QR code, or the images in
    the book itself can be scanned, and the students can access the experience right away.
  </p>
  <h2 className="text-2xl font-bold mt-4">Is VR the future of education?</h2>
  <p>
    Yes, of course! Gone are the days of monotonous learning methodologies. A student learns better when
    they engage all their senses or more senses while learning. VR methodologies engage the maximum possible
    senses than any other teaching methodologies.
  </p>
</div>

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
                  VR and AR in Education Industry: The Missing Piece
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                  VR and AR in Education Statistics: Do numbers favor?
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                  What is VR in education: Learning by Doing
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Benefits of VR in education</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="font-thin text-gray-100">What is AR in education: An added advantage</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a className="font-thin text-gray-100">Benefits of AR in education</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section7")}
                >
                  <a className="font-thin text-gray-100">AR and VR in Education: Comparison</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section8")}
                >
                  <a className="font-thin text-gray-100">Real-World Applications of AR in Education</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section9")}
                >
                  <a className="font-thin text-gray-100">Conclusion</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section10")}
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
