import React from 'react';
import {IoGameController} from "react-icons/io5";
import './header.css';
import {NavLink} from "react-router-dom";
import Carzina from "../Carzina/Carzina";
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
            </div>
        </div>
    );
};

export default Header;
