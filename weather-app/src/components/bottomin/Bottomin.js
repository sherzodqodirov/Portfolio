import React from 'react';
import {useSelector} from "react-redux";

const Bottomin = () => {
    const feels=useSelector(state => state.weather.weatherdata.main.feels_like)
    const humidity=useSelector(state => state.weather.weatherdata.main.humidity)
    const speed=useSelector(state => state.weather.weatherdata.wind.speed)
    return (
        <div className='bottomin'>
            <div>
                <h2>{Math.floor(feels-273.15)} <sup>0</sup>C</h2>
                <h3>Feels Like</h3>
            </div>
            <div>
                <h2>{humidity}%</h2>
                <h3>Humidity</h3>
            </div>
            <div>
                <h2>{speed} MPH</h2>
                <h3 >Wind speed</h3>
            </div>
        </div>
    );
};

export default Bottomin;
