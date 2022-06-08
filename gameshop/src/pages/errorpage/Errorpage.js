import React from 'react';
import './errorstyle.css'
import {Link} from "react-router-dom";

const Errorpage = () => {
    return (
        <>
            <h1> Error Page </h1>
            <section className="error-container">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </section>
            <div className="link-container">
                <Link to="/"
                      className="more-link">Home Page</Link>
            </div>
        </>
    );
};

export default Errorpage;
