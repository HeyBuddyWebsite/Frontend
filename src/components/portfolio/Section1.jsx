import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { Link } from "react-router-dom";

const Section1 = () => {
  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  };

  return (
    <div>
      <div className="w-[100%] pt-[8rem] lg:pt-[70px] md:pb-[8rem] mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <div className="w-[100%] md:w-[80%] mx-auto lg:pt-[10rem] relative">
          <div className="hidden md:block md:absolute z-1 top-[-5rem] right-[-4rem] lg:top-[0rem] lg:right-[10rem] xl:top-[0rem] xl:right-[8rem] ">
            <motion.div
              className=""
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                loading="lazy"
                width={700}
                height={700}
                className="w-[35rem] lg:w-auto lg:h-auto"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/linedesign.svg"
                alt="img"
              />
            </motion.div>
          </div>

          <div className="hidden md:block md:absolute absolute z-2 top-[-5rem] right-[-5rem] lg:top-[0rem] lg:right-[-1rem]">
            <motion.div
              className=""
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/tilted_cards.svg"
                alt="Card 1"
                width={650}
                height={650}
                className="md:w-[450px] md:w-[450px] lg:w-[550px] lg:h-[550px] xl:w-[620px] xl:h-[620px] "
              />
            </motion.div>
          </div>

          <div className="z-2 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between lg:justify-start mx-auto w-[100%]">
            <div className="w-[100%] md:w-[50%] flex flex-col text-left items-center md:items-start gap-6 ">
              <motion.h1
                className="heading1 md:tracking-wide text-center md:text-left text-2xl lg:text-5xl w-[80%] font-extrabold tracking-tight text-white"
                {...textAnimation}
              >
                Hey Buddy - One Destination For All CGI Services
              </motion.h1>
              <motion.p
                className="text-base font-lg w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[100%] text-white text-center md:text-left md:tracking-wide"
                {...textAnimation}
                style={{ lineHeight: "1.5rem",fontWeight:"400" }}
              >
                Hey Buddy is your go-to 3D CGI agency for services of all sorts.
                Our technical proficiency gets you innovative CGI solutions just
                for you while infusing eye-catching creativity. We deliver
                specialized CGI assets just for your project with complete
                future-proofing.
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
                <Link to="/ContactUs">
                  <div className="getintouch flex gap-4 items-center rounded-md px-8 py-3 mt-6 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <span className="text-white text-lg font-md">
                      Get in Touch
                    </span>
                    <span
                      aria-hidden="true"
                      className="arrow"
                      style={{ marginTop: "-0.3rem" }}
                    >
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/arrow.svg"
                        alt="arrow"
                        className="w-auto h-auto lg:w-4 lg:h-4"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>

            <div className="md:hidden z-2 md:top-20 lg:top-4 right-7">
              <motion.div
                className=""
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  loading="lazy"
                  src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/tilted_cards.svg"
                  alt="Card 1"
                  width={650}
                  height={650}
                  className="md:w-[450px] md:w-[450px] lg:w-[550px] lg:h-[550px] xl:w-auto xl:h-auto "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
