import React from "react";
import Link from "next/link";

const Section11 = ({ para }) => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/csgame12.png')] bg-no-repeat bg-cover lg:bg-auto bg-[center_top_0rem]">
      <div className=" mx-auto lg:w-[50%] py-8 md:py-24 ">
        <div className="text-center">
          <p className=" px-4 lg:px-0 text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white ">
            Give Us a Call!
          </p>{" "}
          <br />{" "}
          <p className="px-4 mt-2 lg:px-0 text-center mx-auto text-sm   sm:leading-8 text-white">
            {para}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/Pages/Contactus"
              className="rounded-3xl bg-[#3F8AE2] px-6 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in Touch{" "}
              <span aria-hidden="true" className="px-2 text-xl ">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
