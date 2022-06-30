import React from 'react';
import {Outlet} from "react-router-dom"
import Menu from "../menu/Menu";

const Layout = () => {
    return (
        <>
            <Menu/>
            <div className="contcore container ">
                <Outlet/>
            </div>
        </>
    );


};

export default Layout;
