import React from 'react';
import {useSelector} from "react-redux";

const Location = () => {
const statenmae=useSelector(state => state.weather.weatherdata.name)
const temp=useSelector(state => state.weather.weatherdata.main.temp)
    return (
        <div className='boxdeg'>
             <h3>{statenmae}</h3>
            <h1>{Math.floor(temp-273.15)} <sup>0</sup>C</h1>
        </div>
    );
};

export default Location;
