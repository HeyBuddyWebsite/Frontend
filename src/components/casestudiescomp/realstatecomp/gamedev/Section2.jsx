import React from "react";

const Section2 = ({ about }) => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/csgame9.png')]  bg-no-repeat bg-auto lg:bg-cover  bg-[center_top_0rem]">
      <div className=" p-4 md:p-8 text-white ">
        <div className="">
          <div className="px-2 md:px-4">
            <h1 className="font-bold text-2xl lg:text-4xl px-6 pt-6 pb-4">
              About Project
            </h1>
            <p className="text-white px-6 h-36 md:h-[50%] overflow-auto scrollbar-hide">
              {about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
