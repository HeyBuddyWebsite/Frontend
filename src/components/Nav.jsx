"use client";
import React, { useEffect, useState } from "react";
import HeaderDesktop from "./Navbardesktop";
import Headermob from "./Navbar";

const Nav = () => {

    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
      if(window.innerWidth <= 1065)
      setIsMobile(true); // Adjust the breakpoint as needed
    else setIsMobile(false);
    };

  useEffect(() => {
    

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div >
      {isMobile ? <Headermob/> : <HeaderDesktop />}
  
      {/* <Navbardesktop/> */}

    </div>
  )
}

export default Nav