import React from "react";
import Image from "next/image";
const Section3 = ({ heading,para,img2 }) => {
  const imageStyle = {
    
  
    transition: "transform 0.3s ease-out",
    objectFit:"cover"
  };

  return (
    <div className="mb-[80px] lg:mb-[150px] w-[100%] lg:w-[80%] mx-auto pt-[60px] lg:pt-[100px]  text-white " style={{borderTop:"1px solid white"}}>
      
      <div className=" w-[90%] lg:w-[100%]   mx-auto flex flex-col   items-center  gap-[25px] justify-between">
       
          <h1 className="font-bold text-center   w-[100%] text-2xl lg:text-4xl  ">
            {heading}
          </h1>
        
        
          <p className="text-white text-[16px] lg:text-[20px] font-medium w-[90%] lg:w-[100%]  text-center    " style={{ whiteSpace: 'pre-line' }}>{para}</p>
          
       
      </div>

      {/* <div
        className={` h-[1024px] w-full  bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${url3})` }}
      ></div> */}

      <div className="w-[100%] h-[100%] mt-[60px] lg:mt-[100px]">
        {/* Replace 'your-image.jpg' with the actual image source */}
        <Image
          loading="lazy"
          style={imageStyle}
          width={450}
          height={450}
         className="w-[90%] lg:w-[100%] rounded-3xl md:rounded-none h-[60vh] md:h-[100vh] bg-white mx-auto  "
          src={img2}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Section3;