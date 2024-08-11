// import React from "react";
// import { FaXmark } from "react-icons/fa6";
// import ContactUs from "../ContactUs";
// import { ToastContainer } from "react-toastify";
// import ReactPlayer from "react-player";

// function Modal({ videoUrl, handleClose, videorotate }) {
//   return (
//     <div
//       id="sidebar"
//       // onClick={handleClose}
//       className={` 
        
//        fixed inset-0 h-[100vh] backdrop-blur-sm z-50  md:px-0 transform transition duration-150 ease-in-out origin-center`}
//     >
//       {/* bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] */}
//       <div
//         className={`py-10 md:p-10 backdrop-blur-sm  bg-no-repeat bg-cover bg-bottom opacity-100 rounded-lg h-fit `}
//       >
//         <div className="h-[80vh] md:h-auto w-[100vw] md:w-auto flex items-center justify-center">
//           <div className="w-[90%]  md:w-[80%] md:aspect-video ">
//             <ReactPlayer
//               url={videoUrl}
//               playing
//               controls
//               width="100%"
//               height="100%"
//               style={{
//                 borderRadius: "20px",
//                 // transform: videorotate ? "rotate(-90deg)" : null,
//               }}
//             />
//           </div>

//           <div
//             onClick={handleClose}
//             className="absolute cursor-pointer top-3 right-3 z-50 p-2 bg-white  rounded-full hover:bg-white w-fit"
//           >
//             <FaXmark color="black" size="1rem" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
