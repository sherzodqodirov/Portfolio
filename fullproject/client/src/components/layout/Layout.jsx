import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detectorcom from "../detector/Detectorcom";

const Layout = () => {
  return (
    <>
      <ToastContainer />
       <Detectorcom/> 
      <Navbar />
      <div style={{marginTop:"50px"}} className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
