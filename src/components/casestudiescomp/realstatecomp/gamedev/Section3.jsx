import React from "react";
import Image from "next/image";
const Section3 = ({ heading,para,img2 }) => {
  const imageStyle = {
    
  
    transition: "transform 0.3s ease-out",
    objectFit:"cover"
  };

  return (
    <div className="mb-8 md:mb-12 lg:mb-[150px] w-[100%] lg:w-[80%] mx-auto pt-[44px] lg:pt-[100px]  text-white " style={{borderTop:"1px solid white"}}>
      
      <div className=" w-[90%] lg:w-[100%]   mx-auto flex flex-col   items-center  gap-[1rem] gap-[25px] justify-between">
       
          <h1 className="font-bold text-center   w-[100%] text-2xl lg:text-4xl  ">
            {heading}
          </h1>
        
        
          <p className="text-white text-base font-medium w-[90%] lg:w-[100%]  text-center   " style={{ whiteSpace: 'pre-line' }}>{para}</p>
          
       
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
          className=" w-[100%] h-[100vh] md:h-[100vh]  bg-white mx-auto mt-[44px] lg:mt-[100px]"
          src={img2}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Section3;