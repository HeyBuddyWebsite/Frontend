import React from "react";

const Section2 = ({ about }) => {
  return (
    <div className="w-[100%] lg:w-[80%] mx-auto pt-[80px] lg:pt-[150px] pb-[60px] lg:pb-[100px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%209%20(5).svg')]  bg-no-repeat bg-contain lg:bg-cover bg-[center_top_0rem] lg:bg-[center_top_-10rem]  2xl:bg-[center_top_-25rem]">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] mx-auto  text-white   ">
        <div className="">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-2xl lg:text-4xl text-center ">
              About Project
            </h1>
            <p className="text-white text-[16px] lg:text-[20px] font-medium" style={{ whiteSpace: 'normal',textAlign:"center" }}>
              {about}
            </p>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Section2;
