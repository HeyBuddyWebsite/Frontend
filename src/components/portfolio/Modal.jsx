import React from "react";
import { FaXmark } from "react-icons/fa6";
import ContactUs from "../ContactUs";
import { ToastContainer } from "react-toastify";
import ReactPlayer from "react-player";

function Modal({ videoUrl, handleClose }) {
  return (
    <div
      id="sidebar"
      // onClick={handleClose}
      className={` 
        
       fixed inset-0 h-[100vh] backdrop-blur-sm z-50 px-5 md:px-0 transform transition duration-150 ease-in-out origin-center`}
    >
      <div
        className={`p-10 bg-black bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover bg-bottom opacity-100 rounded-lg h-fit `}
      >
        <div className="flex items-center justify-center">
          <div className="w-[80%] aspect-video">
            <ReactPlayer
              url={videoUrl}
              playing
              controls
              width="100%"
              height="100%"
              className="rounded-xl"
              style={{borderRadius:"20px"}}
            />
          </div>

          <div
            onClick={handleClose}
            className="absolute cursor-pointer top-2 right-2 z-50 p-2 rounded-full hover:bg-black w-fit"
          >
            <FaXmark color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
