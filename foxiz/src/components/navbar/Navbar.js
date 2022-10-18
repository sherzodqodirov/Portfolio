import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.svg';
import {GrFormDown} from 'react-icons/gr';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {TfiBookmark} from 'react-icons/tfi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineFire} from 'react-icons/ai';

import './navbar.scss';
import Themetogle from "../themetogle/Themetogle";

const Navbar = () => {
    const [dotstogle, setdotstogle] = useState(false);
    const [notifa, setnotifa] = useState(false);

    const handleclick1 = () => {
        setdotstogle(!dotstogle)
        setnotifa(false)
    }
    const handleclick2 = () => {
        setdotstogle(false)
        setnotifa(!notifa)
    }
    return (
        <>
            <div className="containercore">
                <nav className="navbar navbar-expand-lg py-0 ">
                    <div className="container-fluid ">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand me-auto" to="/">
                            <div className="logo">
                                <img className='w-100' src={logo} alt="logo"/>
                            </div>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/"><span>Home</span>
                                        <GrFormDown/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"> <span>Politics</span> <GrFormDown/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/"> <span>Technology</span> <GrFormDown/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/"> <span>Posts</span> <GrFormDown/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/"> <TfiBookmark/> <span>Bookmarks</span> </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/"> <span>Pages</span> <GrFormDown/></Link>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link " onClick={handleclick1}><BsThreeDotsVertical
                                        className={dotstogle ? "text-danger " : null}/></div>
                                    {dotstogle ? (
                                        <div className="dotsvertical">
                                            <h6>Search</h6>
                                            <input className='nav-inp' type="text" placeholder='Search'/>
                                        </div>
                                    ) : null}
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center position-relative">
                            <button className="btn btn-danger" onClick={() => alert("test rejim")} type="submit">sign
                                in
                            </button>
                            <div className="notif ms-3" onClick={handleclick2}><IoIosNotificationsOutline size='28px'/>
                            </div>
                            {notifa ? (
                                <div className="notifa">
                                    <h6>Notification</h6>
                                    <h6>no data</h6>
                                </div>
                            ) : null}
                            <div className="search ms-2 pe-1 me-2" onClick={handleclick1}><FiSearch size='26px'/></div>
                            <Themetogle/>
                        </div>
                    </div>

                </nav>
            </div>

            <div className="navbottom bg-light py-2">
                <div className="containercore px-2 d-flex justify-content-between align-items-center">
                     <div className="hotnew d-flex align-items-center">
                         <div className="fire"> <AiOutlineFire color='red'/> Hot News</div>
                         <h6 className='mb-0 ms-2'>How My Phone’s Most Annoying Feature Saved My Life</h6>
                     </div>
                     <div className="quicklink d-flex ">
                         <h6 className='h6nav mb-0'>Technology</h6>
                         <h6 className='h6nav mb-0 mx-1'>Business</h6>
                         <h6 className='h6nav mb-0 mx-1'>Science</h6>
                         <h6 className='h6nav mb-0'>Covid-19 Statistics</h6>
                     </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;