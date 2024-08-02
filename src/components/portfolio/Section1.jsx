"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../../styles/landingpage.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { classnames } from "classnames";

const Section1 = () => {
  const [blackScreenVisible, setBlackScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlackScreenVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  };
  const staggerTextAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, delay: 0.2 },
  };
  const staggerTextAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1, delay: 0.7 },
  };
  const staggerTextAnimation2 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2, delay: 1 },
  };
  const gradientTextStyles = {
    color: "transparent",
    background: "-webkit-linear-gradient(45deg, #2196F3, #ffffff)",
    WebkitBackgroundClip: "text",
    fontWeight: "bold",
    fontSize: "4rem",
  };
  const customExitAnimation = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -100 }, // Adjust the y value based on your preference
  };

  const scrollUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  const images = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABNBJREFUSEvdlstvFVUcxz/nvnvb0tIHBdryDAoU0lQRSAgmEBNIlISE+FgYVy6ILkx0pSsX7kzcEBFdqDExBldoAiQagtGYKCGlPEOl0hd93kfva+7cmfMyZ27xP2Chk5n85syc3/f7+37nd+65wlpreYKH+O8TnL0+b7XRhFIjlUYrTSAloVJIZQhD91wRhAopZTRHrc51UWuDivLc/BCjwUiNUgqMQXx9J2+VNs1E3SSR2jQJpEt6TOSiS3RzVQT67yUdiUJruxpX30uF+H6iao3WKGMi4CaZi47QgVpCV7kbO0JtmwTaoKOxiVQ/Jo/yQoPWjtAgLs36VhuLtrZZgXkM3iQLXaXGWbB6H4FbpJbRs6Zqw+CaJFOFBr58rK6pXPy6KK3BYKzFWJAGjANwipy3kbKmHVF0RayO3TucYq05uaODv+aLTFc1s7UwsjI0FjG6om0EbpoEBiJp0qkyrlKDMpbNpT/QiSyNmQcw+DT39Wa6U3BkYwaEoeJJJnJVbhRDAqdcC6RRiPFKkwAEmiaoGzq7pIUWW2N3eA3lG+SdK/x5+Sq5qqQaJtn05kccPHCAqh+Sq/gU/YByQzM02ENfVnB/bgXxyNPWATdPEQFrp2L1u7R4M4yPfs7M6G3qvkddSh5N+sTScY4cfoH+4+/Sn7UEgaHcaLBzfSfEQIaSe7N5RN539TftwRqmF4uMPVzg2P7d0Ydf+OEcc2fOkZstkU9nmSitsL23lTXPDXP81NskDz6D0RI/VFFrr80kCbViuVynEUpEqeq6yOBri2vXlXqDC9ceMDTQxcjWjVx950UWAkHx0RyukLrNUKuW6epbR7qzm9c+/jJqCNdxqXiMlZpPpe7jhYp0DMTduWWbsHB3Os/w9j5uTOWZLtadY3QkLTsmv2BbT5nzZ3/hxMluZibrFJYMS4Ua1U3DHDj9GfPFWmTx0V0bWNOa4sdrD2kYSSoeR3x6edT2d2Sifp8r15larrK2M4sAkrlxeuUSVy79xNqExBhDuVLDV3FuzxcxqTaGnj/GU3uG6evfxEyuzM6BLvLlOlqD0hLxyicXbHsmwfqODMuVgOWyR6ep8Wx2mdZ0Er9UYHr2EUrHSGeSTM2XSCcMibgg0dJOvlAkDBo0enZh+/aQiMfIpmKUKgFCgDj6wTduFbhWxljDSGKCw7u30NO3nvHbY9hkmtHrY/h+QK4a8OqpE7QlJN+ev4gkxuBgP1OTswQyRGzYQyU72FxMEapF7H/rjE0nLAOxIkPtNfbsHaKjrZXJyUniMcONsTG0ijM5l4/Wx+svv0QyleLiz7+RjEGivYuWOBSXcyzmC9gYeNl+Duzbx/iih3jj9GnbGy+zZdsQR44e5cG9W9y8eYswCKlWyizkG+TrIXs3r6Mjq9k7MkI9UOQLFaz7bU4m6OropFTyuPr7KAW/Qn9Xht62Ng4dOoT47qtztrW1Jdo0hVsM8XjkaTqTJhmPU6lWcLtqEATUvBJGGBr1Gh1reqjXPZS0LBaW8FSV9d2D5AolHjz8m7qn6G1rQXz4/nt2YGADnh+QzaRICLBC4Ps1CqUKi0uLVD0PjKIW+ggh2bZxKyWvhLIBFa9KOmXp6R5kfOY23e29rOvcQHu6h7mFRf4He/KT/lfxD/Tvp2gpMF4eAAAAAElFTkSuQmCC",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
  ];

  return (
    <div>
      <div className="w-[100%] pt-[8rem]  lg:pt-[70px] md:pb-[8rem]       mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <div className="w-[100%] lg:w-[80%] mx-auto lg:pt-[10rem]   relative">
        <div className="hidden md:block md:absolute  z-1 md:top-[0rem] md:right-[10rem]  xl:top-[0rem] xl:right-[8rem] ">
          <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              lazy={true}
              width={700}
              height={700}
              className="w-auto h-auto"
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/linedesign.svg"
              alt="img"
            />
            
          </motion.div>
        </div>
        {/* <div className="hidden md:block md:absolute  z-10 md:top-[26.5rem] md:right-[11.8rem] lg:top-[29rem] lg:right-[13rem]  xl:top-[35.3rem] xl:right-[19rem] ">
          <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            
            <Image
              lazy={true}
              width={700}
              height={700}
              className="w-auto h-auto"
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/star.svg"
              alt="img"
            />
          </motion.div>
        </div> */}
        <div className="hidden md:block md:absolute absolute z-2" style={{top:"0rem",right:"-1rem"}}>
            <motion.div
              className=""
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                lazy={true}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/tilted_cards.svg"
                alt="Card 1"
                width={650}
                height={650}
                className="md:w-[450px] md:w-[450px] lg:w-[550px] lg:h-[550px] xl:w-[620px] xl:h-[620px] "
              />
            </motion.div>
          </div>
        <div className="z-2 flex flex-col gap-4 md:gap-0  md:flex-row  items-center   justify-between lg:justify-start   mx-auto w-[100%]  ">
          {/* ... Your existing code ... */}
          <div className=" w-[100%] md:w-[50%]       flex flex-col text-left items-center md:items-start gap-6 ">
            <motion.h1
              className="heading1 md:tracking-wide text-center md:text-left text-xl lg:text-3xl  xl:text-4xl  w-[80%]   font-extrabold tracking-tight text-white sm:text-md"
              {...textAnimation}
              style={{}}
            >
              Hey Buddy - One Destination For All CGI Services
            </motion.h1>
            <motion.p
              className="text-sm font-lg w-[100%] text-white text-center md:text-left  md:tracking-wide md:w-[90%] "
              {...textAnimation}
              style={{ lineHeight: "1.5rem" }}
            >
              Hey Buddy is your go-to 3D CGI agency for services of all sorts.
              Our technical proficiency gets you innovative CGI solutions just
              for you while infusing eye-catching creativity. We deliver
              specialized CGI assets just for your project with complete
              future-proofing.
            </motion.p>

            <motion.div
              className=" flex items-center justify-center gap-x-6"
              {...textAnimation}
            >
              <Link href="/pages/Contactus">
                  <div className="getintouch flex gap-4 items-center rounded-md px-8 py-3 mt-6 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <span
                      className="text-white text-lg font-md "
                      
                    >
                      Get in Touch
                    </span>
                    <span
                      aria-hidden="true"
                      className="arrow"
                      style={{ marginTop: "-0.3rem" }}
                    >
                      <Image
                        lazy={true}
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
              <Image
                lazy={true}
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

