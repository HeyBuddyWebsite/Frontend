import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse1.png')] bg-no-repeat bg-contain bg-[center_top_0rem]   mx-auto">
      <div className="relative">
        <div className=" absolute top-12 left-[15%] 2xl:left-[25%] mx-auto   w-[70%] 2xl:w-auto">
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Hero%20img2.png"
            alt="bg_img"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="relative">
          <div className="pt-36 lg:pt-48">
            <div className="w-[90%] lg:w-[70%] mx-auto p-2 lg:p-8 lg:-pb-20 bg-[#FFFFFF] bg-opacity-10 backdrop-blur-lg  rounded-3xl lg:px-24 ">
              <h1 className="mx-auto px-2 lg:px-0 text-center text-white text-xl  lg:text-2xl mt-10 font-bold ">
                HEY BUDDY - THE TECHNOLOGY BUDDY YOU NEED
              </h1>

              <div className="mt-10 mx-auto ">
                <p className="text-center text-white  mt-4">
                  It all started when two buddies working day in and out with
                  global clients found one common problem affecting all - poor
                  collaboration. Their technology partners were giving them a
                  hard time in the timely delivery of projects and maintaining
                  effective communication. Such uncooperative behaviour was not
                  only detrimental to the brand they were associated with but
                  was also undermining the reputation of the whole IT service
                  industry in India.
                </p>

                <p className="text-center text-white  mt-6">
                  The buddies - Avdhesh and Kapil decided to do something about
                  it. They reached out to many like-minded people, shared
                  experiences, and brainstormed ideas. Thus formed a team of
                  hardworking talents who cared about their clients.
                </p>
                <p className="text-center text-white  mt-6">
                  They preferred themselves as buddies instead of partners,
                  hence the name
                </p>
                <div className="flex justify-center  gap-x-2 mt-8 mb-14">
                  <div className="">
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/colon.png"
                      alt="colon_img"
                      width={700}
                      height={700}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="   text-xl lg:text-5xl mt-2     text-center text-white ">
                    Hey Buddy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-20 p-4 w-[90%] lg:w-[72%] mx-auto">
        <div className="mx-auto ">
          <Image
            loading="lazy"
            width={450}
            height={450}
            className=" w-full  mx-auto "
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Group%2018.png"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
