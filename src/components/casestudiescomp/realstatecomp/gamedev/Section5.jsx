import React from "react";
import Image from "next/image";

const Section5 = ({ heading, requirement, execution, delivery, img3 }) => {
  const List = [
    {
      id: "1",
      serialno: "01",
      heading: "Project Requirements",
      imgurl: "",
      para: requirement,
    },
    {
      id: "2",
      serialno: "02",
      heading: "Project Execution",
      imgurl: "",
      para: execution,
    },
    {
      id: "3",
      serialno: "03",
      heading: "Project Delivery      ",
      imgurl: "",
      para: delivery,
    },
  ];
  const imageStyle = {


    transition: "transform 0.3s ease-out",
    objectFit:"cover"
  };

  return (
    <div>
      <div className="w-[100%] lg:w-[80%] mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse%209%20(1).svg')]  bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]">
        <div className=" pt-14 w-[100%]  mx-auto">
          <div className="py-8 w-[90%] lg:w-[80%] mx-auto  text-white text-center">
            <h1 className="py-4 font-bold text-2xl lg:text-4xl">{heading}</h1>
            {/* <p className="text-xl lg:text-2xl">
        Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.
        </p> */}
          </div>

          <div className="grid w-[90%] lg:w-[100%] mx-auto justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
            {List.map((section, index) => (
              <div className="w-[100%]" key={index}>
                <figure class="flex flex-col p-4 lg:p-6 hover:bg-yellow-600 hover:bg-opacity-30   h-full w-full bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 border-gray-700" style={{borderRadius:"24px",background: "#FFFFFF1A",border: "2px solid #374151"}}>
                  <blockquote class="  text-gray-400">
                    <span className="text-left text-4xl lg:text-6xl font-semibold " style={{color:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.81) 100%)",opacity:"20%"}}>
                      {section.serialno}
                    </span>

                    <h3
                      style={{ color: "white" }}
                      class="py-4 text-xl font-semibold"
                    >
                      {section.heading}
                    </h3>

                    <p className="text-left text-white">{section.para}</p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
          <div >
        {/* Replace 'your-image.jpg' with the actual image source */}
        
        <Image
          loading="lazy"
          style={imageStyle}
          width={450}
          height={450}
          className="w-[100%] bg-white h-[50vh] md:h-[100vh] mx-auto mt-8 md:mt-12 lg:mt-[150px]"
          src={img3}
          alt="Background"
        />
      </div>
        </div>
        
      </div>

      {/* <div
        className={` h-[1024px] w-full  bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${urlimg})` }}
      ></div> */}
      
    </div>
  );
};

export default Section5;
