import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth}=useContext(Context)
    const [user] =useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
            <div className="container">
                <Link className="navbar-brand" to={CHAT_ROUTE}><h3 className='text-dark '>Online Chat</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? (

                            <li className="nav-item">
                                <Link  className="nav-link btn btn-outline-danger border-0" aria-current="page"
                                      to="/logout"><h4 className='text-dark' onClick={()=>auth.signOut()}>logout</h4></Link>
                            </li>
                            ) :
                            (
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-outline-danger border-0" aria-current="page"
                                          to={LOGIN_ROUTE}><h4
                                        className='text-dark'>login</h4></Link>
                                </li>
                            )}


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
