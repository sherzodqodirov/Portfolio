import React from 'react';
import {AiOutlineSearch} from "@react-icons/all-files/ai/AiOutlineSearch";
import {IoNotifications} from "@react-icons/all-files/io5/IoNotifications";
import {HiOutlineMenuAlt1} from "@react-icons/all-files/hi/HiOutlineMenuAlt1";
import {BsFillPersonLinesFill} from "@react-icons/all-files/bs/BsFillPersonLinesFill";
import {FaClipboardList} from "@react-icons/all-files/fa/FaClipboardList";
import {FaRegCalendarAlt} from "@react-icons/all-files/fa/FaRegCalendarAlt";
import {FaUserGraduate} from "@react-icons/all-files/fa/FaUserGraduate";
import avataruser from '../../icons/avataruser.png';
import './navinform.scss'
import logonav from '../../icons/logonav.png'
import {NavLink,Outlet} from "react-router-dom";

const Navinform = () => {

    return (

        <nav className="navbar navinform ">
            <div className="container-fluid">

                <div className='d-flex align-items-center'>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                         aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                <div className="navlogoM">
                                    <img className='w-100' src={logonav} alt="logo"/>
                                </div>

                            </h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                                <NavLink to='/' className="menuoption">
                                    <div className="optionicon">
                                        <BsFillPersonLinesFill size='24px' color='grey' className='mx-3'/>
                                    </div>
                                    <h6>Personal information</h6>
                                </NavLink>


                                <NavLink to='results' className="menuoption">
                                    <div className="optionicon">
                                        <FaClipboardList size='24px' color='grey' className='mx-3'/>
                                    </div>
                                    <h6>Results</h6>
                                </NavLink>

                                <NavLink to='exam-schedule' className="menuoption">
                                    <div className="optionicon">
                                        <FaRegCalendarAlt size='24px' color='grey' className='mx-3'/>
                                    </div>
                                    <h6>Exam schedule</h6>
                                </NavLink>

                                <NavLink to='graduate' className="menuoption">
                                    <div className="optionicon">
                                        <FaUserGraduate size='24px' color='grey' className='mx-3'/>
                                    </div>
                                    <h6>Graduate</h6>
                                </NavLink>
                            
                        </div>
                    </div>
                    <button className="btn  p-0 border-0 btnmen me-md-5 me-sm-4" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <HiOutlineMenuAlt1 size='30px'/>
                    </button>
                    <a className="navbar-brand" href="#">
                        <div className="navlogoD">
                            <img className='w-100' src={logonav} alt="logo"/>
                        </div>

                    </a>

                </div>
                <ul className='  ulinform'>
                    <li className='litem  '>
                        <div className="searchico">
                            <AiOutlineSearch size='20px' color='#2F80ED'/>
                        </div>
                    </li>
                    <li className='litem '>
                        <div className="notif">
                            <IoNotifications size='24px' color='#2F80ED'/>
                        </div>
                    </li>
                    <li className='litem '>
                        <div className="dropdown">
                            <button className=" downBtn btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="userimg">
                                    <img className='w-100' src={avataruser} alt="av"/>
                                </div>
                                <h6 className='usernametext m-0 mx-3'>Soliyeva S.</h6>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </nav>
    );
};

export default Navinform;
