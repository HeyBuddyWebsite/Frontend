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
      <div className=" pt-[8rem] md:pt-[4rem]  iuxl:pt-[12rem] relative  mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        {/* <div className=" hidden xl:block xl:absolute top-[-2.5rem] right-[6.5rem] h-[1rem]">
          <img
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/portfolio_shape.png"
            alt="img"
          />{" "}
        </div> */}
        <div className="z-2 flex flex-col gap-4 md:gap-0 md:flex-row  items-center  justify-between   mx-auto w-[90%] ">
          {/* ... Your existing code ... */}
          <div className=" w-[100%] md:w-[40%]   lg:ml-20   flex flex-col text-left items-start gap-8 ">
            <motion.h1
              className="heading1 md:tracking-wide text-xl lg:text-2xl  xl:text-5xl  w-[100%]   font-bold tracking-tight text-white sm:text-md"
              {...textAnimation}
              style={{}}
            >
              Hey Buddy The Technology Buddy You Need
            </motion.h1>
            <motion.p
              className="text-sm font-lg w-[100%] text-white leading-5"
              {...textAnimation}
              style={{ lineHeight: "1.5rem", letterSpacing: "0.5px" }}
            >
              Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Lorem ipsum Neque porro
              Neque porro
            </motion.p>

            <motion.div
              className=" flex items-center justify-center gap-x-6"
              {...textAnimation}
            >
              <Link href="Pages/Contactus">
                <div className="getintouch flex gap-4 items-center rounded-md px-6 py-4 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span
                    className="text-white text-md "
                    style={{ fontWeight: "50" }}
                  >
                    Contact Us
                  </span>
                  <span
                    aria-hidden="true"
                    className="arrow"
                    style={{ marginTop: "-0.3rem" }}
                  >
                    <img
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/arrow.svg"
                      alt="arrow"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* <div className="xl:absolute z-2 top-10 right-5"> */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/tilted_cards.svg"
              alt="Card 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section1;

// import React from "react";
// import { motion } from "framer-motion";

//               style={{ transform: "rotate(10deg)", top: "20px", left: "60px" }}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <img
//                 src={images[1]}
//                 alt="Card 2"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//             <motion.div
//               className="absolute w-56 h-80 bg-white rounded-lg shadow-lg overflow-hidden"
//               style={{ transform: "rotate(45deg)", top: "40px", left: "0px" }}
//               initial={{ opacity: 0, y: -100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//             >
//               <img
//                 src={images[2]}
//                 alt="Card 3"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//         <div className="relative w-full max-w-screen-lg flex justify-center">
//           <motion.div
//             className="absolute w-56 h-80 bg-white rounded-lg shadow-lg overflow-hidden"
//             style={{ transform: "rotate(-10deg)", top: "20px", left: "-60px" }}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <img
//               src={images[0]}
//               alt="Card 1"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <motion.div
//             className="absolute w-56 h-80 bg-white rounded-lg shadow-lg overflow-hidden"
//             style={{ transform: "rotate(10deg)", top: "20px", left: "60px" }}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <img
//               src={images[1]}
//               alt="Card 2"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <motion.div
//             className="absolute w-56 h-80 bg-white rounded-lg shadow-lg overflow-hidden"
//             style={{ transform: "rotate(-5deg)", top: "40px", left: "0px" }}
//             initial={{ opacity: 0, y: -100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.9 }}
//           >
//             <img
//               src={images[2]}
//               alt="Card 3"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
