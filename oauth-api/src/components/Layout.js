import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import axios from "axios";
import Navbar from "../Page/Navbar";

const Layout = ({regist}) => {


    return (
        <div>
            <Navbar regist={regist}/>
            <Outlet/>
        </div>
    );
};

export default Layout;