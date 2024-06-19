import React from "react";
import { FaXmark } from "react-icons/fa6";
import ContactUs from "../ContactUs";
import { ToastContainer } from "react-toastify";

function ContactModal({ contactusModal, handleClose, handleModalClose }) {
  return (
    <div
      id="sidebar"
      onClick={handleClose}
      className={` ${
        contactusModal
          ? "flex items-center justify-center overflow-x-hidden scale-100"
          : "scale-0"
      } fixed inset-0 h-[100vh] backdrop-blur-sm z-50 px-5 md:px-0 transform transition duration-150 ease-in-out origin-center`}
    >
      <div
        className={`p-10 bg-black bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover bg-bottom opacity-100 rounded-lg h-fit ${
          contactusModal ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className=" font-thin flex-1 text-center text-lg">
            Have a great idea, let’s connect to make it reality
          </h2>
          <div
            onClick={handleModalClose}
            className=" p-2 rounded-full hover:bg-black w-fit"
          >
            <FaXmark color="white" />
          </div>
        </div>

        <ContactUs />
      </div>
    </div>
  );
}

export default ContactModal;
