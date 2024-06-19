"use client";
import React, { useEffect, useState } from "react";
import HeaderDesktop from "./Navbardesktop";
import Headermob from "./Navbar";

const Nav = () => {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

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
    <div>
      {isMobile ? <Headermob/> : <HeaderDesktop />}
  
      {/* <Navbardesktop/> */}

    </div>
  )
}

export default Nav