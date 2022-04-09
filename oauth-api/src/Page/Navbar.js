import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="nav-link text-white" to="/"><h1 className="text-white">Home</h1></Link>


                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                           <li className="nav-item">
                            <Link className="nav-link text-white "  to="/registor"><h1 className="text-white">Register</h1></Link>
                        </li>

                    </ul>


            </div>
        </nav>
    );
};

export default Navbar;
