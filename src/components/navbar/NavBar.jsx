
import React, { useEffect, useState } from "react";

// import Link from "react-router-dom";

import classNames from "classnames";
import { Link } from "react-router-dom";

const Navbardesktop = () => {
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0  transition-all duration-800   w-full  z-50">
      <nav className="relative px-2 lg:px-0  py-0">
        <div
          className={classNames(
            "fixed justify-center mx-auto items-center max-container w-full border-white transition-all duration-800 py-4 z-50",
            {
              "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 z-50":
                backgroundwhite,
            }
          )}
          
        >
          <div className="lg:mx-[10%] flex items-center justify-between    m-auto">
            <Link to="/">
              <img
                loading="lazy"
                width={300}
                height={300}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/logo.png"
                className=" lg:ml-0 h-6 w-[6rem] lg:h-10 lg:w-[12rem] cursor-pointer float-left"
                alt="Hey Buddy"
              />
            </Link>

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbardesktop;
