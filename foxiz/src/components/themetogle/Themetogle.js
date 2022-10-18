import React from 'react';
import "./themetogle.scss"
const Themetogle = () => {
    return (
        <label className="switch">
            <input type="checkbox"/>
                <span className="slider round"></span>
        </label>
    );
};

export default Themetogle;