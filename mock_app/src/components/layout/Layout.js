import React from 'react';
import {Outlet} from "react-router-dom"
import Menu from "../menu/Menu";

const Layout = () => {
    return (
        <>
            <Menu/>
            <div className="container mt-3">
                <Outlet/>
            </div>
        </>
    );


};

export default Layout;
