import React from "react";
import {  Route, Routes } from "react-router-dom";
import Portfolio from "../Pages/index";
import ContactUs from "../Pages/contactUs/ContactUs";
import Layout from "../Pages/Layout";

const AppRouter = () => {
  return (
    
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
   
  );
};

export default AppRouter;
