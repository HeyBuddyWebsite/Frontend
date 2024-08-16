import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../../styles/landingpage.scss";

const Section7 = ({ heading }) => {
  return (
    <div className="w-[100%] lg:w-[100%] pb-[80px] lg:pb-[150px]  mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(11).svg')] bg-no-repeat  bg-contain lg:bg-cover bg-[center_top_0rem] lg:bg-[center_top_-15rem] xl:bg-[center_top_-20rem] 2xl:bg-[center_top_-35rem]   ">
      <div className=" mx-auto w-[90%] lg:w-[80%] pt-[60px] lg:pt-[100px]  ">
        <div className="text-center">
          <p className=" px-4 lg:px-0 w-[100%] md:w-[50%] text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white " style={{ whiteSpace: 'normal' }}>
            {heading} 
          </p>
          <div className="mt-[25px]  flex items-center justify-center gap-x-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
