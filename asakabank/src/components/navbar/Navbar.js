import React from 'react';
import {RiGlobalLine} from "@react-icons/all-files/ri/RiGlobalLine";
import logonav from '../../icons/logonav.svg'
import './navbar.scss'
const Navbar = () => {
    return (
        <nav className="navbar navbar1 navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand " href="#">
                    <div className="logonav">
                        <img className='w-100' src={logonav} alt="logo"/>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ulnav ms-auto mb-0 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h5>Преимущества</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h5>Наши кредиты</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <h5>Контакты</h5>
                            </a>
                        </li>
                     <li className="nav-item">
                            <a className="nav-link lang">
                                <h5>
                                    <span><RiGlobalLine size='18px'/></span>
                                    <select className=" seleng ">
                                        <option defaultValue>Ру</option>
                                        <option value="1">Eng</option>
                                        <option value="2">Uz</option>

                                    </select>
                                </h5>
                            </a>
                        </li>
                     <li className="nav-item">
                            <a className="nav-link">
                                <div className="call">
                                    <h6 className='m-0'>Контакт-центр 24/7 :
                                    <span>1152</span>
                                    </h6>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>);
};

export default Navbar;
