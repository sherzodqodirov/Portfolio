import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({regist}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="nav-link text-white" to="/"><h5 className="text-white me-5">Home 🏠 </h5></Link>
                <Link className="nav-link text-white" to="/search"><h5 className="ms-5 text-white">Search 🔍</h5></Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        {regist? null : ( <Link className="nav-link text-white " to="/registor"><h1 className="text-white">Register</h1>
                        </Link>)}

                    </li>

                </ul>


            </div>
        </nav>
    );
};

export default Navbar;
