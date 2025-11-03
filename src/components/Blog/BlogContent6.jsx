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
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/person-wearing-high-tech-vr-glasses-while-surrounded-by-bright-blue-neon-colors.jpg"
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
                  Augmented Reality and Virtual Reality: Dual Power Source for
                  Your Skyrocketing Sales
                </h1>

                <p className=" font-semibold">
                  What is the first thing that matters the most in product
                  sales? The answer is simple and intuitive - the first
                  impression.
                </p>

                <p className="font-thin text-gray-100">
                  Here are some evidence:
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    A consumer forms an impression of a retail interaction
                    within 7 seconds. (Harvard Business Review)
                  </li>
                  <li className="font-thin text-gray-100">
                    72% of your customers would spread the word to six or more
                    people if you make a good first impression.
                  </li>
                  <li className="font-thin text-gray-100">
                    The primacy effect says that people tend to remember the
                    first thing they experienced more than anything else.
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  Hence, not only do you need to grab the customer's attention
                  fast but also communicates in the best possible manner.
                </p>

                <p className="font-thin text-gray-100">
                  But how to make sure that you make the right impression? There
                  is another stat to help you out.
                </p>

                <p className="font-thin text-gray-100">
                  55% of first impressions are visual, 38% are vocal, and 7% are
                  actual words.
                </p>

                <p className="font-thin text-gray-100">
                  This shows that you need to make the best possible visual
                  impression if you want to make the best first impression.
                </p>

                <p className="font-thin text-gray-100">
                  This is exactly where AR and VR are making a difference.
                </p>

                <p className="font-thin text-gray-100">
                  The unique ability of AR and showcase products and services in
                  ways previously unimaginable is proving a differentiating
                  factor. Let’s discuss one by one.
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Augmented Reality in Sales
                </h1>
                <p className="font-thin text-gray-100">
                  Augmented Reality is a phenomenal immersive technology that
                  overlays digital elements onto real-world objects and syncs
                  them together. As a result, it appears as if the digital
                  elements are an integrated part of the real world.
                </p>
                <p className=" font-semibold">Real-world Visualization</p>
                <p className="font-thin text-gray-100">
                  First thing first, since AR overlays the 3D product model in
                  the real-world setting, this allows the customers to visualise
                  the product right in their own physical space. This makes a
                  huge difference compared to a 2D photo on a mobile screen.
                </p>
                <p className="font-thin text-gray-100">
                  Customers get a more tangible and, much sought-after,
                  personalised experience. They can see how a product will fit
                  or look in their surroundings which brings them significant
                  clarity, and instils their confidence in the product, making
                  them more likely to buy.
                </p>
                <p className=" font-semibold">Interactive Try-before-You-Buy</p>
                <p className="font-thin text-gray-100">
                  The second sales-favouring factor in the case of AR is that it
                  enables customers to virtually try products before making a
                  purchase. They can try on clothing or place furniture or home
                  decor pieces in their intended places and see if it works out.
                </p>
                <p className="font-thin text-gray-100">
                  This interactive "try-before-you-buy" feature goes a long way
                  in increasing the users’ confidence in the product's
                  suitability. Thus, leading to sales. But that’s not it. This
                  factor has one bonus that every seller craves.
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    The confidence it infuses leads to a significant reduction
                    in the risk of dissatisfaction and thereby the return of the
                    product.
                  </li>
                </ul>
                <p className=" font-semibold">Convenience and Accessibility</p>
                <p className="font-thin text-gray-100">
                  The third AR factor that leads to higher sales is their high
                  accessibility.
                </p>
                <p className="font-thin text-gray-100">
                  With high strides in technological advances, users are able to
                  access AR experiences right through their smartphones. No
                  fancy equipment or elaborate technical set-up is required.
                </p>

                <p className="font-thin text-gray-100">
                  This facilitates anytime and anywhere product engagement,
                  making it easier for customers to evaluate products on their
                  terms. As a result, they are better informed about the product
                  which leads to higher sales.
                </p>

                <p className=" font-semibold">Enhanced Product Information</p>
                <p className="font-thin text-gray-100">
                  Next, AR experiences are much more capable of providing
                  complete product information and context than non-interactive
                  2D images or video can.
                </p>

                <p className="font-thin text-gray-100">
                  Businesses can add any element they want in the AR experience
                  such as specifications, reviews, and related products and give
                  users a completely free hand to access all the information out
                  there on the product.
                </p>

                <p className="font-thin text-gray-100">
                  As we already covered, this enhanced information increases
                  customers' confidence and likelihood of completing a
                  transaction and making a purchase.
                </p>
                <p className=" font-semibold">Novelty and Engagement</p>

                <p className="font-thin text-gray-100">
                  Last but not the least!!
                </p>

                <p className="font-thin text-gray-100">
                  Since AR is still a fairly new and unexplored avenue of
                  marketing, the novelty and interactivity of AR experiences
                  capture customers' attention and engage them like no other.
                </p>

                <p className="font-thin text-gray-100">
                  Moreover, such never-seen-before experiences stay way longer
                  in the memory of the customers, powering brand recall in a way
                  no other marketing experience can do, except VR. We will
                  discuss that in the next section, stay till then.
                </p>

                <p className="font-thin text-gray-100">
                  This memorable shopping experience with AR creates a positive
                  association with the product and brand, thus powering not only
                  this incidence of sale but many future ones, contributing to
                  long-term gains, and even better, to brand loyalty.
                </p>

                <p className="font-thin text-gray-100">
                  All these factors are helping businesses showcase their
                  product in a new light and leave a long-lasting impression
                  right from the first microsecond.
                </p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Virtual Reality in Sales
                </h1>
                <p className="font-thin text-gray-100">
                  Coming to another powerful immersive technology, VR transports
                  its user into virtual environments where they are present in
                  the different reality altogether and can explore a product
                  firsthand.
                </p>

                <p className="font-thin text-gray-100">
                  This is yet another highly engaging way that captures user’s
                  undivided attention and encourages them to make a purchase.
                  Here are the VR factors that play a great role in actualising
                  a sale:
                </p>

                <p className=" font-semibold">Visual Realism</p>
                <p className="font-thin text-gray-100">
                  When users enter the VR experience, they see products in a
                  lifelike environment. This renders a very realistic
                  representation of how the will look and function in the real
                  world which is also termed as visual realism.
                </p>

                <p className="font-thin text-gray-100">
                  As is apparent, this instils confidence in the product's
                  quality and features, making customers more inclined to make a
                  purchase.
                </p>

                <p className=" font-semibold">Interactive Engagement</p>
                <p className="font-thin text-gray-100">
                  The second great factor of VR that contributes to sales is
                  their interactive nature. This allows the customers to engage
                  with products innovatively. They can customize the product in
                  that very own virtual setting, exploring its features and
                  functions in detail, or use it in different scenarios in a
                  single VR experience instance.
                </p>

                <p className="font-thin text-gray-100">
                  This high-level interactivity results in an instant yet deeper
                  connection with the product - you can say it is “love at first
                  sight”.
                </p>
                <p className=" font-semibold">Emotional Connection</p>

                <p className="font-thin text-gray-100">
                  VR experiences lead to a higher emotional connection between
                  the customers and the elements therein. This is because It
                  evokes strong emotions and feelings in its users by involving
                  more senses than traditional media. Brands can utilise this
                  emotional connection to captivate the audience and create
                  positive associations with their products.
                </p>

                <p className=" font-semibold">Convenience and Accessibility</p>

                <p className="font-thin text-gray-100">
                  Just like AR, users can access VR experiences from anywhere
                  anytime, eliminating geographical barriers and temporal
                  barriers. You can understand in this way: once you put your VR
                  (or AR) experience in the public domain, people from around
                  the world across different time zones will be accessing it.
                </p>

                <p className="font-thin text-gray-100">
                  Even better, you can top it up with AI-powered virtual humans.
                  They will work as your non-tiring sales or marketing
                  representatives 24/7, intelligently helping potential
                  customers understand your product and services in great
                  detail.
                </p>

                <p className="font-thin text-gray-100">
                  This will bring your brand two powerful outcomes.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Brand image enhancement: customers will start seeing you as
                    an innovative business and mind you studies indicate that
                    customers love brands that innovate. They appreciated brands
                    that deliver out-of-the-box solutions to help them out and
                    ease their life.
                  </li>
                  <li className="font-thin text-gray-100">
                    Business edge: By opting for advanced solutions like this
                    you achieve an upper hand over your competitors and sell
                    more than them. The combination of AI and immersive
                    technologies like AR and VR is disruptive. We will cover
                    this amazing topic in our upcoming blog.
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  For now, you just need to remember that even if you are out of
                  the office an AI virtual human in your VR experience is
                  closing sales like a loyal and hardworking employee.
                </p>

                <p className=" font-semibold">Unique Selling Propositions</p>

                <p className="font-thin text-gray-100">
                  Lastly, VR experiences allow you to highlight the unique
                  selling propositions of your product in a compelling way.
                </p>

                <p className="font-thin text-gray-100">
                  You can use mesmerising animations, captivating effects and
                  catchy sounds to demonstrate your product's innovative
                  features, benefits, or even use cases.
                </p>

                <p className="font-thin text-gray-100">
                  Basically, with VR, you effectively communicate why your
                  product is superior to alternatives. The end result? Higher
                  sales than before.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Ways to Utilise AR and VR in Sales with Popular Brand Example
                </h1>

                <p className=" font-semibold">Virtual Fitting Rooms</p>
                <p className="font-thin text-gray-100">
                  If you are in the said industries then this AR/VR
                  functionality is an industry disruptor for you, helping you
                  win consumers' confidence, boost sales, and reduce returns all
                  with a single shot.
                </p>

                <p className=" font-semibold">Examples from Big Brands:</p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    <strong>Gucci:</strong>
                    <p className="font-thin text-gray-100">
                      Gucci launched its first AR shoe try-on global campaign
                      with Snapchat. The aim was to raise awareness and
                      excitement around their newly launched sneaker collection.
                      The experience allowed Snapchat users to virtually try on
                      ultra-realistic 3D models of four different pairs of
                      sneakers.
                    </p>
                  </li>
                  <li className="font-thin text-gray-100">
                    <strong>Valentino:</strong>
                    <p className="font-thin text-gray-100">
                      Renowned luxury fashion house known for its romantic and
                      feminine designs. They partnered with Wanna, an AR
                      company, to offer virtual trials of their clothes from the
                      Valentino Urban Flows Fall 2023 men’s collection in
                      real-time.
                    </p>
                  </li>
                </ul>
                <p className=" font-semibold">Product Visualization</p>
                <p className="font-thin text-gray-100">
                  Businesses can use AR and VR to let customers explore their
                  product in detail, get more informed, and make confident
                  purchase decisions that lead to no returns.
                </p>

                <p className=" font-semibold">Home Depot</p>
                <p className="font-thin text-gray-100">
                  They are a popular home improvement retailer with stores
                  across the United States and Canada. They are known for their
                  wide variety of products in the home renovation, decoration,
                  and maintenance space.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Under their Project Color app, they utilized AR capabilities
                    to let potential customers visualize how paint colors will
                    look in their homes. Remarkably, the experience took
                    lighting, existing real-world objects, and even the shadows
                    into consideration for an accurate representation.
                  </li>
                </ul>

                <p className=" font-semibold">IKEA</p>
                <p className="font-thin text-gray-100">
                  The world’s leading furniture retailer, IKEA, introduced the
                  IKEA Place app. It allowed users to superimpose to-scale
                  furniture models in real-life rooms. This IKEA home planner
                  helps potential customers build furniture sets before placing
                  orders.
                </p>

                <p className="font-thin text-gray-100">
                  Enhanced In-Store Experience:
                </p>
                <p className="font-thin text-gray-100">
                  AR can also help you add information layers to physical
                  products, gamify shopping experiences, or provide wayfinding
                  assistance.
                </p>

                <p className=" font-semibold">Macy's</p>
                <p className="font-thin text-gray-100">
                  The popular American chain of departmental stores selling
                  clothing, home furnishings, and cosmetics for across genders
                  and ages. They used AR to enhance the shopping experience at
                  their physical stores.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    They integrated AR experience into the products at their
                    store allowing shoppers to access product details and
                    special offers by just scanning the particular product.
                  </li>
                </ul>
                <p className="font-semibold">Immersive Brand Storytelling</p>
                <p className="font-thin text-gray-100">
                  Using the amazing VR capability to transport customers into a
                  new reality, brand can use it for immersive story telling. By
                  immersive storytelling, we mean:
                </p>
                <p className=" font-semibold">Creating Engaging Narratives</p>
                <p className="font-thin text-gray-100">
                  The brand will craft compelling narratives that align with its
                  brand identity and values. These stories could be your brand's
                  history illustrating its mission and values, or fictional
                  scenarios that resonate with the target audience.
                </p>

                <p className=" font-semibold">Visualizing Brand Experience</p>
                <p className="font-thin text-gray-100">
                  You can transport customers right into the scenarios of your
                  story. For example, if you are telling a story about
                  sustainability, you can get a VR experience created on a
                  virtual forest to let customers experience the impact of
                  deforestation firsthand.
                </p>

                <p className=" font-semibold">Interactive Elements</p>
                <p className="font-thin text-gray-100">
                  Your VR experience may include interactive elements for
                  customers to be more involved in your story. Such as getting
                  an interactive option in the form of a button to alter the
                  course of the story in the VR experience.
                </p>

                <p className=" font-semibold">Brand Messaging Integration</p>
                <p className="font-thin text-gray-100">
                  You can also seamlessly integrate your messaging and branding
                  so that users not only enjoy the story but also associate
                  positive emotions and perceptions with your brand.
                </p>

                <p className="font-semibold">The North Face</p>
                <p className="font-thin text-gray-100">
                  Under its VR initiative, the American outdoor gear and
                  clothing company offers users the opportunity to explore and
                  interact with various North Face products in a digital
                  environment.
                </p>
                <p className="font-thin text-gray-100">
                  The VR experience features educational content about outdoor
                  safety and sustainability, as well as interactive games and
                  challenges. Along with that, it allows users to customize and
                  purchase North Face products directly within the VR
                  environment.
                </p>

                <p className=" font-semibold">Employee Training</p>
                <p className="font-thin text-gray-100">
                  According to PwC, VR training significantly improves the
                  training outcome to help businesses achieve higher efficiency
                  through a highly trained workforce. Here is what they found:
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Faster training with greater focus: VR-trained employees can
                    complete faster training with greater focus, up to 4 times
                    than classroom learners and 1.5 times more than e-learners.
                  </li>
                  <li className="font-thin text-gray-100">
                    Improved confidence: VR-trained employees are 40% more
                    confident than classroom learners and 35% more confident
                    than e-learners to act on what they learned after training.
                  </li>
                  <li className="font-thin text-gray-100">
                    Greater emotional connection: VR-trained employees feel 3.75
                    times more emotionally connected to the content than
                    classroom learners and 2.3 times more connected than
                    e-learners.
                  </li>
                </ul>

                <p className="font-semibold">Hilton</p>
                <p className="font-thin text-gray-100">
                  Hilton is a popular hotel brand that offers a wide range of
                  accommodation options worldwide.
                </p>
                <p className="font-thin text-gray-100">
                  Hilton uses Hotel Immersion virtual reality (VR) to train
                  employees from entry-level to corporate executives. The VR
                  training program uses 360-degree video and 3D computer
                  graphics to simulate tasks performed by housekeeping, front
                  desk, and room service employees.
                </p>
              </div>

              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>

                <p className="font-thin text-gray-100">
                  In conclusion, AR and VR have the potential to revolutionize
                  the sales and marketing landscape. They provide your business
                  with new opportunities to engage customers and drive sales
                  while differentiating your brands in an increasingly
                  competitive market. All you need is to implement them
                  strategically.
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
                    Augmented Reality and Virtual Reality: Dual Power Source for
                    Your Skyrocketing Sales
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    Augmented Reality in Sales
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                    Virtual Reality in Sales
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">
                    Ways to Utilise AR and VR in Sales with Popular Brand
                    Example
                  </a>
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
