import React from 'react';
import {IoGameController} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import Carzina from "../Carzina/Carzina";
import {MdAdminPanelSettings} from "react-icons/md";
import './header.css';

const Header = () => {
    return (
        <div className='header container'>
            <div className="boxheader">
                <NavLink to='/' className='link-item'>
                <h3 className='me-3'>Game store</h3>  <IoGameController color='white'/>
                </NavLink>
            </div>

            <div className="carzinabox">
                <Carzina/>
                <NavLink to={localStorage.getItem('token')==null ? "/adminlogin":"/paneladmin"} className='link-item'><h5 className='mb-0 ms-4'><MdAdminPanelSettings size='25px'/></h5></NavLink>
            </div>
        </div>
    );
};

export default Header;
