import React from "react";
import Image from "next/image";
const Section3 = ({ heading,para,img2 }) => {
  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease-out",
  };

  return (
    <div className=" pt-2  text-white">
      <hr className="w-[90%] mx-auto"></hr>
      <div className="py-6 lg:w-[90%] px-2 mx-auto grid grid-cols-1  md:grid-cols-2">
        <div className="flex items-center justify-start">
          <h1 className="font-bold  sm:text-2xl lg:text-4xl px-2 sm:px-6 py-4 sm:py-6">
            {heading}
          </h1>
        </div>
        <div className=" lg:flex lg:flex-col lg:items-center lg:justify-start" style={{height:"fit-content"}}>
          <p className="text-white px-2 sm:px-6 py-4 sm:py-6" style={{ whiteSpace: 'pre-line' }}>{para}</p>
          
        </div>
      </div>

      {/* <div
        className={` h-[1024px] w-full  bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${url3})` }}
      ></div> */}

      <div className="w-[100%] h-[100%]">
        {/* Replace 'your-image.jpg' with the actual image source */}
        <Image
          loading="lazy"
          style={imageStyle}
          width={450}
          height={450}
          className="h-[24px] w-[24px] bg-white mx-auto mt-4"
          src={img2}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Section3;
