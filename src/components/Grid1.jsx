import React from "react";
import Image from "next/image";
import Img1 from "../../public/Images/img1.png";
import Img2 from "../../public/Images/img2.png";
import Img3 from "../../public/Images/img3.png";
import Img4 from "../../public/Images/img4.png";

const Grid1 = () => {
  return (
    <div className="bg-[url('../../public/Images/Ellipse7.png')] bg-no-repeat bg-auto bg-[center_top_3rem] ">
      <div
        className="absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      >
        {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /> */}
      </div>

      <div className="pt-[2px] mx-auto text-center justify-center lg:w-[90%] lg:pt-16 lg:pb-40">
        <div className="mx-auto text-center justify-center ">
          <div className="p-8 lg:pt-24 lg:px-24  h-full ">
            <div className="lg:px-8">
              <h1 className="text-4xl lg:text-4xl font-bold text-white mb-6">
                Future of Metaverse looks like this
              </h1>
              <p className="text-white  lg:w-[60%]  mx-auto text-center justify-center">
                Hey Buddy is ahead of time & helping businesses to be ahead of
                their competitor by enhancing their digital experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="p-4  grid mb-8 mx-auto text-center justify-center rounded-3xl shadow-sm grid-cols-2 md:grid-cols-2 ">
            <figure class="flex flex-col  p-4 lg:p-12  border-b border-gray-900 rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class=" mb-4 lg:mb-8 dark:text-gray-400">
                <div className="grid sm:grid-1 md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    <Image
                      src={Img1}
                      width={300}
                      height={300}
                      className="w-[7vh] h-[7vh] lg:w-[10vh] lg:h-[10vh] lg:float-left "
                    />
                  </div>

                  <div className=" lg:text-left">
                    <h3 class="lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      400 Billion
                    </h3>
                    <p className="text-sm" >people already using Metaverse</p>
                  </div>
                </div>
              </blockquote>
            </figure>

            <figure class="flex flex-col p-8 lg:p-12 border-b border-gray-900 rounded-tr-3xl  h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <div className="grid sm:grid-1 md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    <Image
                      src={Img2}
                      width={300}
                      height={300}
                      className=" w-[7vh] h-[7vh] lg:w-[10vh] lg:h-[10vh] lg:float-left  "
                    />
                  </div>

                  <div className="lg:text-left">
                    <h3 class="lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      2.5 Billion
                    </h3>
                    <p className="text-sm" >people will use VR by 2027</p>
                  </div>
                </div>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 lg:p-12 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class=" mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <div className="grid sm:grid-1 md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    <Image
                      src={Img3}
                      width={300}
                      height={300}
                      className=" w-[7vh] h-[7vh] lg:w-[10vh] lg:h-[10vh] lg:float-left  "
                    />
                  </div>
                  <div className="lg:text-left">
                    <h3 class="lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Nightguards & Splints
                    </h3>
                    <p className="text-sm">investment in VR Gaming by 2024</p>
                  </div>
                </div>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 lg:p-12 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
              <blockquote class="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <div className="grid sm:grid-1 md:grid-cols-2 lg:grid-cols-2">
                  <div >
                    <Image
                      src={Img4}
                      width={300}
                      height={300}
                      className=" w-[7vh] h-[7vh] lg:w-[10vh] lg:h-[10vh] lg:float-left  "
                    />
                  </div>

                  <div className="lg:text-left">
                    <h3 class="lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      936 Billion
                    </h3>
                    <p className="text-sm">metaverse Industry size by 2030</p>
                  </div>
                </div>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid1;
