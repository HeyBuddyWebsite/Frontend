"use client";
import React from "react";
import { motion } from "framer-motion";

const Section6 = ({ heading, para, list1, list2, list3, grid }) => {
  const { cell1, cell2, cell3, cell4 } = grid;

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };
  const word1 = cell1.split(' ');
  const str11 = word1[0];
  const str1 = word1.slice(1).join(' ');
  const word2 = cell2.split(' ');
  const str21 = word2[0];
  const str2 = word1.slice(1).join(' ');
  const word3 = cell3.split(' ');
  const str31 = word3[0];
  const str3 = word1.slice(1).join(' ');
  
  const word4 = cell4.split(' ');
  const str41 = word4[0];
  const str4 = word4.slice(1).join(' ');
  
  return (
    <div className="w-[100%] lg:w-[80%]  pt-8 md:pt-12 lg:pt-[150px] mb-8 md:mb-12 lg:mb-[150px] mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse%209%20(2).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]">
      {/* <div
        className=" absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      
        
      </div> */}

      <div className=" w-[90%] lg:w-[100%]  mx-auto  " id="aboutus">
        <div className="mx-auto  justify-center ">
          <div className="pb-4 lg:pb-4  h-full ">
            <div className=" lg:pb-16">
              <motion.h1
                className="lg:w-[85%] mx-auto text-2xl lg:text-4xl font-bold text-center  text-white  mb-6"
                style={{ whiteSpace: 'pre-line' }}
                {...textAnimation1}
              >
                {heading}
              </motion.h1>
              <motion.p
                className="text-white text-base font-medium  lg:w-[90%]  mx-auto mb-2  justify-center"
                style={{ whiteSpace: 'normal' }}
                {...textAnimation1}
              >
                {para}{" "}
              </motion.p>
              <motion.ul
                className="text-white text-base font-medium w-[90%]   lg:w-[80%]  mx-auto  justify-center"
                {...textAnimation1}
              >
                { list1&&list2&&list3&&
                <ul className="list-disc">
                  <li>{list1}</li>
                  <li>{list2}</li>
                  <li>{list3}</li>
                </ul>}
              </motion.ul>
            </div>
          </div>
        </div>
        <div>
        <motion.div
              class="py-4 lg:p-0   lg:w-[70%]  grid mb-8  mx-auto text-center justify-center rounded-xl shadow-sm  md:mb-0 lg:mb-0 grid-cols-2 md:grid-cols-2"
              {...textAnimation1}
            >
              <figure class="flex flex-col  p-8  items-center justify-center  border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote class="  mb-0 lg:py-8 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                  {str11}
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                  {str1}
                  </p>
                </blockquote>
              </figure>

              <figure class="flex flex-col p-8 items-center justify-center  border-b border-gray-900 rounded-tr-3xl    h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote class="max-w-2xl lg:py-8 mx-auto mb-0 text-gray-500 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                    {str21}
                    
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                    {str2}
                  </p>
                </blockquote>
              </figure>

              <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote class="max-w-2xl lg:py-8 mx-auto mb-0 text-gray-500 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                  {str31}
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                    {str3}
                  </p>
                </blockquote>
              </figure>

              <figure class="flex flex-col mx-auto items-center justify-center p-8 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
                <blockquote class="max-w-2xl lg:py-8 mx-auto mb-0 text-gray-500 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                  {str41}
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                  {str4}
                  </p>
                </blockquote>
              </figure>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
