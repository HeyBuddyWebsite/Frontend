import React from "react";
import Link from "next/link";

const Bottomsec = () => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-auto bg-[center_top_1rem]">
      <div className=" mx-auto lg:w-[50%] py-32 sm:py-48 lg:py-56">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="text-center"
        >
          <p className="mt-6 px-4 lg:px-0 text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white ">
            Be where the future is with HeyBuddy’s complete Metaverse solution
            package.
          </p>
          <Link href="/Pages/Contactus">
            <div
              style={{ width: "fit-content" }}
              className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10 flex items-center justify-center gap-x-2"
            >
              Let’s Discuss
              <span aria-hidden="true" className="px-2 text-xl ">
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottomsec;
