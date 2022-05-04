import React from 'react';
import './loginheader.scss'
import logonav from '../../icons/logonav.png';
import emailicon from '../../icons/emailicon.svg'
import phoneicon from '../../icons/phoneicon.svg'
import addressicon from '../../icons/addressicon.svg'
const Loginheader = () => {

    return (
        <nav className=" navreg navbar navbar-expand-xl navbar-light border">
        <div className="container">
            <a className="navbar-brand" href="#">
                <div className="logoicon">
                    <img className='w-100' src={logonav} alt="logo"/>
                </div>
            </a>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto  mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link p-0"  href="#">
                            <div className="navitem">
                                <img className='headericons' src={emailicon} alt="emailicon"/>
                                <h6>ЭЛЕКТРОН МАНЗИЛ <br/>
                                    info@ytit.uz</h6>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item nav-item2 ">
                        <a className="nav-link p-0" aria-current="page" href="tel:+998994236134">
                            <div className="navitem">
                                <img className='headericons' src={phoneicon} alt="emailicon"/>
                                <h6>АЛОKА МАРКАЗИ <br/>
                                    +998 78 129 40 40</h6>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-0" aria-current="page" href="#">
                            <div className="navitem">
                                <img className='headericons' src={addressicon} alt="emailicon"/>
                                <h6>МАНЗИЛ <br/>
                                    100121, Тoшкент шаҳри, Яккасарой тумани, <br/> Усмон Носир кўчаси, 156 уй</h6>
                            </div>
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
    );
};

export default Loginheader;
