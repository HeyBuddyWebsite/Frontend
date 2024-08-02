import React from "react";
import Link from "next/link";
import Image from "next/image"

const Bottomsec = () => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover lg:bg-cover bg-[center_top_0rem]">
      <div className=" mx-auto lg:w-[50%] py-32 sm:py-36 lg:py-36 2xl:py-36">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="text-center"
        >
          <p className="mt-6 px-4 lg:px-0 text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white " >
            Be where the future is with HeyBuddy’s complete Metaverse solution
            package.
          </p>
         
                <Link href="/pages/Contactus">
                  <div className="getintouch flex gap-4 items-center rounded-md px-8 py-3 mt-8 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
  );
};

export default Bottomsec;
