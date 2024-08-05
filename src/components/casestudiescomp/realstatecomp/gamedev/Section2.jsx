import React from "react";

const Section2 = ({ about }) => {
  return (
    // <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/csgame9.png')]  bg-no-repeat bg-auto lg:bg-cover  bg-[center_top_0rem]">
      <div className=" w-[90%] lg:w-[80%] mx-auto  text-white mb-8 md:mb-12 lg:mb-[150px]">
        <div className="">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-2xl lg:text-4xl text-center ">
              About Project
            </h1>
            <p className="text-white text-base font-medium " style={{ whiteSpace: 'normal',textAlign:"center" }}>
              {about}
            </p>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Section2;
