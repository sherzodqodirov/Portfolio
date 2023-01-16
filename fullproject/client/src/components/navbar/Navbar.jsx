import React from 'react';
import "./navbar.scss"
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className={'light-blue darken-3'}>
                <div className="nav-wrapper container ">
                    <Link to="/" className="brand-logo">MERN todo-app</Link>
                    <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/login" className={'logi'}>Войти</Link></li>
                    </ul>
                </div>
            </nav>

            {/*<ul className="sidenav" id="mobile-demo">*/}
            {/*    <li><a href="">Sass</a></li>*/}
            {/*    <li><a href="">Components</a></li>*/}
            {/*    <li><a href="">Javascript</a></li>*/}
            {/*    <li><a href="">Mobile</a></li>*/}
            {/*</ul>*/}
        </>
    );
};

export default Navbar;