import React from "react";
import Image from "next/image";
const Section3 = ({ heading,para,img2 }) => {
  const imageStyle = {
    
  
    transition: "transform 0.3s ease-out",
    objectFit:"cover"
  };

  return (
    <div className=" w-[100%] lg:w-[80%] mx-auto pt-12  text-white " style={{borderTop:"1px solid white"}}>
      
      <div className=" w-[90%] lg:w-[100%]   mx-auto flex flex-col  md:flex-row items-center md:items-start gap-[1rem] md:gap-[2rem] lg:gap-[4rem] justify-between">
       
          <h1 className="font-bold text-center md:text-left  w-[100%] text-2xl lg:text-4xl ">
            {heading}
          </h1>
        
        
          <p className="text-white text-base font-medium w-[90%] lg:w-[100%]  text-center md:text-left  " style={{ whiteSpace: 'pre-line' }}>{para}</p>
          
       
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
          className=" w-[100%] h-[50vh] md:h-[100vh]  bg-white mx-auto mt-8 md:mt-12 lg:mt-[150px]"
          src={img2}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Section3;