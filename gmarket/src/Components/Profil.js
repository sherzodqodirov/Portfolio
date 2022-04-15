import React from 'react';
import profilimg from "../image/profilimg.png"
import {NavLink} from "react-router-dom";

const Profil = () => {
    return (<div className='profilbox  '>

        <div className="Profilmenu">
            <div className="profilimgsetting d-flex align-items-center justify-content-between">
                <span className="icon1 icon-setting"></span>
                <div className="profilimg">
                    <img className="w-100" src={profilimg} alt="img"/>
                </div>
                <span className="icon1 icon-bell"></span>
            </div>
            <h2 className="text-center FISH">Roberto Cavanali <br/> <span>(+99893) 100-00-00</span></h2>
            <div className="balance d-flex justify-content-between align-items-center">
                <div className="numbalance">
                    <h5>Wallet balance</h5>
                    <h4>$425,97</h4>
                </div>
                <div className="addbalance ">
                    <div className="circle ">+</div>
                </div>
            </div>
            <button className="btn btn-light d-flex align-items-center sharebtn "><span
                className="icon2 icon-share"></span><h5>Share wallet</h5></button>
            <div className="profilnav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link "><span
                            className="icon3 icon-stores"></span> Store</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/order-history" className="nav-link "><span
                            className="icon3 icon-orderhst"></span> Order history</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/saved-stores" className="nav-link "> <span
                            className="icon3 icon-savedst"></span> Saved stores</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/liked-products" className="nav-link "><span
                            className="icon3 icon-likeicon"></span> Liked products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/viwed-products" className="nav-link "> <span
                            className="icon3 icon-viwedicon"></span> Viwed Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/wallet-history" className="nav-link "><span className="icon3 icon-wallet"></span>Wallet
                            history</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profil-setting" className="nav-link "><span
                            className="icon3 icon-profsetting"></span>Profil setting</NavLink>
                    </li>
                    <li className="nav-item navitem">
                        <NavLink to="/help-center" className="nav-link navlink"><span
                            className="icon3 icon-helpcent"></span>Help center <span
                            style={{marginLeft: "45px"}}> > </span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/logout" className="nav-link navlink"><span
                            className="icon3 icon-outicon"></span>Logout <span style={{marginLeft: "75px"}}> > </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
};

export default Profil;
