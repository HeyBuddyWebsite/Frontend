import React from "react";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
// import styles from "./layout.styles.css";

const Layout = () => {
  return (
    <>
      {/* <div className={styles.wrapper}> */}
        <NavBar />
        {/* <div className={styles.maindiv}> */}
          <Outlet />
        {/* </div> */}
        {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default Layout;
