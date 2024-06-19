import React from "react";
import Link from "next/link";

const Section7 = ({ heading1, heading2 }) => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')] bg-no-repeat  bg-cover bg-[center_top_1rem]">
      <div className=" mx-auto lg:w-[50%] py-24 ">
        <div className="text-center">
          <p className=" px-4 lg:px-0 text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white ">
            {heading1} <br /> {heading2}
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

export default Section7;
