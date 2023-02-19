import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div style={{marginTop:"50px"}} className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
