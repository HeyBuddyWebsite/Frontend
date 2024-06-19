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
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/vsoupdtk-jpg.webp"
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
                  Miracles of CGI in eCommerce: Powerful Sales, Great Experience
                </h1>

                <p className=" font-semibold">
                  If you are running an eCommerce business, you must be aware of
                  the impact that a high-quality visual product representation
                  makes. It boosts your sales and your brand image.
                </p>

                <p className="font-thin text-gray-100">
                  After all as per a stat, visitors who watch product videos are
                  73% more likely to make a purchase.
                </p>

                <p className="font-thin text-gray-100">
                  Thus, a captivating product presentation is paramount.
                  However, given the advancements we have made in technological
                  space, options for eCommerce businesses have expanded
                  significantly - enter CGI.
                </p>

                <p className="font-thin text-gray-100">
                  In this article, we'll delve into the roles and capabilities
                  that CGI in eCommerce brings along with what is one big
                  offering that it brings to the customer.
                </p>

                <p className=" font-semibold">
                  The Role of CGI in Product Visualization
                </p>

                <p className="font-thin text-gray-100">
                  CGI offers a solution that goes beyond traditional
                  photography, allowing your businesses to create stunning,
                  hyper-realistic imagery.
                </p>

                <p className="font-thin text-gray-100">
                  Along with that, you can even offer your customer the ability
                  to customize the product to match their taste.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    They can change their color
                  </li>
                  <li className="font-thin text-gray-100">
                    Visualize different configurations
                  </li>
                  <li className="font-thin text-gray-100">
                    Explore variations
                  </li>
                </ul>

                <p className="font-thin text-gray-100">
                  This helps you offer a personalized experience that ensures
                  higher product engagement seamlessly.
                </p>

                <p className="font-thin text-gray-100">
                  But stop, there is more, you can even demonstrate intricate
                  features and processes such as how to assemble a product, how
                  to use it, how to care for it, etc. through CGI animations.
                </p>

                <p className="font-thin text-gray-100">
                  This way, CGI elevates product visualization to a whole new
                  level of immersion and engagement for your customers.
                </p>

                <p className="font-thin text-gray-100">
                  Let’s discuss these aspects in detail.
                </p>
                <p className="font-semibold">Hyper-Realistic Imagery</p>
                <p className=" font-semibold">CGI in eCommerce</p>
                <p className="font-thin text-gray-100">
                  You can use CGI in eCommerce business to create stunning and
                  hyper-realistic imagery. This involves using advanced
                  rendering techniques and digital modeling to show your product
                  in the best possible light.
                </p>

                <p className="font-thin text-gray-100">
                  These renditions of your product will create visually
                  captivating visuals capable of outsmarting traditional
                  photography and videography.
                </p>

                <p className="font-thin text-gray-100">
                  You can flaunt intricate details to lifelike textures with CGI
                  imagery, passing on to customers a true sense of the product's
                  appearance and quality.
                </p>

                <p className="font-semibold">Customization Options</p>
                <p className=" font-semibold">
                  Effective Personalization in eCommerce
                </p>
                <p className="font-thin text-gray-100">
                  Do you know, as per research, that effective personalization
                  can drive a 10 to 15 percent revenue lift? Some businesses can
                  even achieve more, depending upon the domain they operate.
                  Thankfully, eCommerce is the space where you have a higher
                  scope of sales boost with minimal effort.
                </p>

                <p className="font-thin text-gray-100">
                  CGI in eCommerce is that innovative power.
                </p>

                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    <p className=" font-semibold">Changing Colors:</p>
                    <p className="font-thin text-gray-100">
                      If the user wants to change the color of the product, all
                      they need is to click on the "Change Color" button from
                      the customization menu. A color picker interface will
                      appear where the user can select from a range of available
                      colors.
                    </p>
                  </li>
                  <li className="font-thin text-gray-100">
                    <p className=" font-semibold">Visualize Configurations</p>
                    <p className="font-thin text-gray-100">
                      If the products have different configurations or
                      variations, for example, size, style, or features, users
                      can select the "Customize Configuration" option.
                    </p>
                    <p className="font-thin text-gray-100">
                      This will open up an interface where they can toggle
                      between different configurations to visualize how each one
                      looks and get a clear idea of the product for the final
                      purchase.
                    </p>
                  </li>
                  <li className="font-thin text-gray-100">
                    <p className=" font-semibold">Explore Variations</p>
                    <p className="font-thin text-gray-100">
                      Next, users may have the option to explore various
                      variations of the product. They see the different designs,
                      patterns, or add-on features.
                    </p>
                    <p className="font-thin text-gray-100">
                      All they need is to select the "Explore Variations"
                      option. They can view these variations and see how they
                      affect the overall appearance of the product.
                    </p>
                  </li>
                </ul>
                <p className=" font-semibold">Preview Changes</p>

                <p className="font-thin text-gray-100">
                  Lastly, once they have made the changes to colors,
                  configurations, or variations, the CGI technology will
                  instantly register and incorporate all the changes made and
                  turn the visual representation of the product accordingly in
                  real time.
                </p>

                <p className="font-thin text-gray-100">
                  The user will see and review these changes on the screen as
                  the outcome of the product once all the changes are made.
                </p>

                <p className="font-thin text-gray-100">
                  Upon finding their perfect product, they can finalize their
                  selection by clicking on the "Add to Cart" or "Purchase"
                  button. The product will get added to their shopping cart with
                  all the changes intact.
                </p>

                <p className="font-thin text-gray-100">
                  You can imagine how significantly the chances of a sale have
                  increased.
                </p>

                <p className=" font-semibold">
                  Demonstrating Features and Processes
                </p>

                <p className="font-thin text-gray-100">
                  You can use CGI animations to demonstrate intricate features
                  and processes compellingly to better inform and connect with
                  your customers.
                </p>

                <p className="font-thin text-gray-100">
                  Whether it's assembling a product demonstrating its usage, or
                  even providing care instructions, CGI animations help you
                  communicate with clarity and engaging way.
                </p>

                <p className="font-thin text-gray-100">
                  This helps your business in educating and building trust with
                  the customer, ultimately leading to more sales and greater
                  satisfaction.
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  One Biggest Edge with CGI in eCommerce: An Unforgettable
                  Customer Experience
                </h1>

                <p className=" font-semibold">
                  In the fiercely competitive market, staying ahead of the curve
                  requires innovative steps to bring the most unforgettable
                  experience to the customers. And innovation mostly rides on
                  technology.
                </p>

                <p className="font-thin text-gray-100">
                  So, to beat the competition in eCommerce you need to deploy
                  the latest technologies for product visualization such as AR,
                  VR, and CGI. Using these you will give something they never
                  had seen before and something no one else has offered.
                </p>

                <p className="font-thin text-gray-100">
                  We saw how CGI is capable of offering innovative experiences
                  such as real-time product customization and its purchase and
                  compelling demonstration of features. Apart from these two,
                  there are two more ways in which CGI offers a great experience
                  - interactive viewing, and realistic rendering. We need to
                  discuss those in detail:
                </p>

                <p className=" font-semibold">Interactive 3D Viewing</p>

                <p className="font-thin text-gray-100">
                  CGI lets users interact with products in a three-dimensional
                  space. Going beyond 360 degrees, CGI allows customers to
                  rotate products in any direction. They can zoom in and out and
                  pan around the product to view it from different angles. This
                  helps them make more informed purchasing decisions and a
                  unique experience.
                </p>
                <div>
                  <p className=" font-semibold">Realistic Rendering</p>
                  <p className="font-thin text-gray-100">
                    If you are confused between choosing AR and CGI. Here is one
                    aspect in which CGI does better. It produces highly
                    realistic renderings of products with lifelike textures,
                    lighting effects, and shadows. The level of realism it
                    brings is just phenomenal.
                  </p>
                  <p className="font-thin text-gray-100">
                    This significantly contributes to the user experience
                    because now you can not only showcase the product but also
                    infuse entertainment and educational content. Giving them a
                    great experience.
                  </p>
                  <p className="font-thin text-gray-100">
                    However, this does not mean that AR is a no-go.
                  </p>
                  <p className="font-thin text-gray-100">
                    At Hey Buddy, one of India’s fastest-growing technology
                    companies, we have a team that integrates augmented reality
                    (AR) with CGI. This lets the customers of our client
                    virtually try on products with realistic rendering. This
                    breaks down barriers to purchase by instilling confidence in
                    their buying decisions.
                  </p>
                </div>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">
                  Overcoming Challenges and Considerations in CGI Implementation
                </h1>
                <p className=" font-semibold">Cost Management:</p>
                <p className="font-thin text-gray-100">
                  Many times, we see businesses struggle to manage the cost of
                  developing CGI in-house, and rightly so. Building and
                  maintaining an in-house CGI team full-time is not only costly
                  but also time and resource-consuming. Moreover, more often
                  than not it does not result in the desired outcome.
                </p>
                <p className="font-thin text-gray-100">
                  That’s why we suggest they conduct a thorough cost-benefit
                  analysis to assess the potential ROI of CGI integration.
                </p>
                <ul className="list-disc">
                  <li className="font-thin text-gray-100">
                    Outsourcing development
                  </li>
                  <li className="font-thin text-gray-100">
                    Utilizing open-source tools
                  </li>
                  <li className="font-thin text-gray-100">
                    Leveraging cloud-based solutions
                  </li>
                </ul>
                <p className="font-thin text-gray-100">
                  These measures can help manage expenses.
                </p>

                <p className=" font-semibold">Scalability Planning:</p>
                <p className="font-thin text-gray-100">
                  We have seen many CGI solutions in the market, and many of
                  them fail to design with scalability in mind. As a result,
                  what happens is that as the demand for the product grows, the
                  CGI infrastructure struggles to handle the increased load,
                  leading to performance issues, downtime, and ultimately,
                  dissatisfied users.
                </p>
                <p className="font-thin text-gray-100">
                  For this problem, we suggest adopting modular architectures
                  and utilizing scalable infrastructure. Along with that, we
                  also suggest you implement efficient resource management
                  strategies so that your CGI solutions grow with your business.
                </p>

                <p className=" font-semibold">Technical Expertise:</p>
                <p className="font-thin text-gray-100">
                  Being a complex task, CGI implementation should be handled by
                  experts. They range from 3D modeling and rendering to
                  animation. Managing such technical intricacies while
                  maintaining great performance and user experience poses a
                  significant challenge.
                </p>
                <p className="font-thin text-gray-100">
                  Therefore, we suggest investing in skilled professionals or,
                  even better, partnering with experienced CGI vendors. They
                  possess the necessary knowledge and expertise in CGI
                  technologies, helping you streamline the process and mitigate
                  challenges.
                </p>

                <p className=" font-semibold">
                  Data Security and Intellectual Property Rights:
                </p>
                <p className="font-thin text-gray-100">
                  Your CGI-driven eCommerce solution may involve sensitive data,
                  such as customer information and proprietary assets. It should
                  be meticulously protected from unauthorized access, breaches,
                  or theft to maintain trust and compliance with regulations.
                </p>
                <p className="font-thin text-gray-100">
                  Here, we will recommend measures like encryption, access
                  controls, and regular audits. Additionally, establish clear
                  policies and procedures for handling data and enforcing
                  compliance.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">Conclusion</h1>
                <p className=" font-semibold">
                  In conclusion, CGI in eCommerce is a proven transformative
                  force, bringing unparalleled opportunities to businesses. It
                  elevates their online presence and drives sales.
                </p>

                <p className="font-thin text-gray-100">
                  While catchy product visualization catches customers’ eyes,
                  innovative experience experiences stay in their minds.
                </p>

                <p className="font-thin text-gray-100">
                  The benefits of CGI are vast and far-reaching and, as we look
                  forward, its significance is only going to explode, no, this
                  is not an overstatement.
                </p>

                <p className="font-thin text-gray-100">
                  So, if you want to introduce CGI in the eCommerce business,
                  you better act now.
                </p>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-3xl font-extrabold">FAQs</h1>
                <p className=" font-semibold">Q: What is CGI in eCommerce?</p>
                <p className="font-thin text-gray-100">
                  A: CGI in eCommerce is basically, the use of
                  computer-generated graphics and animations to take user
                  experience to the next level. CGI helps in delivering
                  realistic product visualizations, customization options, and
                  interactive demonstrations, that captivate potential
                  customers, engage and educate them and lead to faster and
                  higher sales.
                </p>

                <p className=" font-semibold">
                  Q: How does CGI benefit eCommerce businesses?
                </p>
                <p className="font-thin text-gray-100">
                  A: CGI benefits eCommerce businesses by improving customer
                  experience through realistic product visualizations,
                  customization options, and interactive demonstrations,
                  delivering next-gen online shopping experience.
                </p>

                <p className=" font-semibold">
                  Q: Is CGI integration expensive for eCommerce platforms?
                </p>
                <p className="font-thin text-gray-100">
                  A: The cost of CGI integration varies. It depend on the
                  complexity of the project and the specific requirements of the
                  eCommerce platform.
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
                    Miracles of CGI in eCommerce: Powerful Sales, Great
                    Experience
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="font-thin text-gray-100">
                    One Biggest Edge with CGI in eCommerce: An Unforgettable
                    Customer Experience
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="font-thin text-gray-100">
                    Overcoming Challenges and Considerations in CGI
                    Implementation
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="font-thin text-gray-100">Conclusion</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
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
