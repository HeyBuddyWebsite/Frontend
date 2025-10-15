import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/Images/img1.webp";
import "./page.css";

const page = () => {
  return (
    <div className="px-2 pt-32">
      <div className="card lg:w-[80%] mx-auto ">
        <h1 className="text-white  text-4xl px-4 lg:px-0 py-6 font-bold">
          Games App for kids
        </h1>

        <div className=" grid mb-8 mx-auto justify-center rounded-3xl border-2 shadow-sm md:mb-12 grid-cols- md:grid-cols-2 ">
          <div className=" rounded-3xl h-[80vh] p-4 lg:p-24 overflow-auto scrollbar-hide">
            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Introduction
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">Objective</h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Technollogy
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Final Result
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>
          </div>

          <div className=" h-[80vh] rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl lg:rounded-3xl lg:p-24 overflow-hidden">
            <Image
              loading="lazy"
              width={700}
              height={700}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp"
              className="lg:mr-6 h-[50vh] w-[52rem] lg:h-[70vh] lg:w-[52rem] "
              alt="Hey Buddy"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- */}
      <div className="card lg:w-[80%] mx-auto ">
        <h1 className="text-white  text-4xl px-4 lg:px-0 py-6 font-bold">
          Games App for kids
        </h1>

        <div className="grid mb-8 mx-auto justify-center rounded-3xl border-2 shadow-sm  md:mb-12 grid-cols- md:grid-cols-2 ">
          <div className=" rounded-3xl h-[80vh] p-4 lg:p-24 overflow-auto scrollbar-hide">
            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Introduction
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">Objective</h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Technollogy
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Final Result
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>
          </div>
          <div className=" h-[80vh] rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl lg:rounded-3xl lg:p-24 overflow-hidden">
            <Image
              loading="lazy"
              width={700}
              height={700}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp"
              className="lg:mr-6 h-[50vh] w-[52rem] lg:h-[70vh] lg:w-[52rem] "
              alt="Hey Buddy"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- */}

      <div className=" card lg:w-[80%] mx-auto ">
        <h1 className="text-white  text-4xl px-4 lg:px-0 py-6 font-bold">
          Games App for kids
        </h1>

        <div className=" grid mb-8 mx-auto justify-center rounded-3xl border-2 shadow-sm  md:mb-12 grid-cols- md:grid-cols-2 ">
          <div className=" rounded-3xl h-[80vh] p-4 lg:p-24 overflow-auto scrollbar-hide">
            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Introduction
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">Objective</h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Technollogy
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Final Result
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>
          </div>

          <div className=" h-[80vh] rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl lg:rounded-3xl lg:p-24 overflow-hidden">
            <Image
              loading="lazy"
              width={700}
              height={700}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp"
              className="lg:mr-6 h-[50vh] w-[52rem] lg:h-[70vh] lg:w-[52rem] "
              alt="Hey Buddy"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- */}

      <div className="card lg:w-[80%] mx-auto ">
        <h1 className="text-white  text-4xl px-4 lg:px-0 py-6 font-bold">
          Games App for kids
        </h1>

        <div className=" grid mb-8 mx-auto justify-center rounded-3xl border-2 shadow-sm  md:mb-12 grid-cols- md:grid-cols-2 ">
          <div className=" rounded-3xl h-[80vh] p-4 lg:p-24 overflow-auto scrollbar-hide">
            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Introduction
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">Objective</h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Technollogy
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>

            <div className=" text-white">
              <h1 className="font-bold text-3xl float-left py-4 ">
                Final Result
              </h1>
              <p className="py-4 float-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquid repellendus similique nisi molestias nostrum sequi
                itaque mollitia minus quisquam animi, optio quaerat deleniti
                dignissimos officiis quis possimus non natus?{" "}
              </p>
            </div>
          </div>

          <div className=" h-[80vh] rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl lg:rounded-3xl lg:p-24 overflow-hidden">
            <Image
              loading="lazy"
              width={700}
              height={700}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp"
              className="lg:mr-6 h-[50vh] w-[52rem] lg:h-[70vh] lg:w-[52rem] "
              alt="Hey Buddy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
