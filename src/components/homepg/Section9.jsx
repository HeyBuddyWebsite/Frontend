import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Bottomsec = () => {
  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  };
  return (
    <div className="mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover lg:bg-cover bg-[center_top_0rem]">
      <div className=" mx-auto w-[90%] lg:w-[60%] pt-[60px] lg:pt-[100px]">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="text-center"
        >
          <p className="  lg:px-0 text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white " >
            Be where the future is with HeyBuddy’s complete Metaverse solution
            package.
          </p>
         
          <motion.div
                className="mt-[25px] flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
                <Link href="/pages/Contactus">
                  <div className="getintouch flex gap-4 items-center rounded-md px-8 py-3  text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
      </div>
    </div>
  );
};

export default Bottomsec;
